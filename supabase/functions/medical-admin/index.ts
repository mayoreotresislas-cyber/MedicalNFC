import { corsHeaders } from "../_shared/cors.ts";
import {
  buildActivationUrl,
  buildPublicUrl,
  cleanText,
  createActivationToken,
  ensureUniqueSlug,
  getAdminClient,
  hashToken,
  normalizeLanguage,
  verifyAdminToken
} from "../_shared/medical.ts";

function response(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    }
  });
}

async function revokeActiveTokens(client: ReturnType<typeof getAdminClient>, profileId: string) {
  const { error } = await client
    .from("medical_profile_activation_tokens")
    .update({ status: "revoked" })
    .eq("profile_id", profileId)
    .eq("status", "active");

  if (error) {
    throw error;
  }
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return response({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await request.json();
    const adminToken = cleanText(body?.adminToken || request.headers.get("x-admin-token"));

    if (!verifyAdminToken(adminToken)) {
      return response({ error: "Invalid admin token" }, 401);
    }

    const action = cleanText(body?.action);
    const client = getAdminClient();

    if (action === "provision") {
      const fullName = cleanText(body?.fullName);
      const pendingLabel = cleanText(body?.pendingLabel || fullName);
      const chipReference = cleanText(body?.chipReference);
      const defaultLanguage = normalizeLanguage(body?.defaultLanguage);
      const publicSlug = await ensureUniqueSlug(client, fullName || pendingLabel || chipReference || "medical-profile");
      const baseName = fullName || pendingLabel || chipReference || "Pending medical profile";

      const { data: profile, error: profileError } = await client
        .from("medical_profiles")
        .insert({
          public_slug: publicSlug,
          default_language: defaultLanguage,
          full_name: baseName,
          pending_label: pendingLabel || null,
          chip_reference: chipReference || null,
          workflow_status: "pending",
          is_public: true
        })
        .select("id, public_slug, full_name, pending_label, chip_reference, workflow_status, default_language, created_at")
        .single();

      if (profileError || !profile) {
        throw profileError || new Error("Could not create pending profile");
      }

      const token = createActivationToken();
      const tokenHash = await hashToken(token);
      const tokenHint = token.slice(-8);
      const { error: tokenError } = await client.from("medical_profile_activation_tokens").insert({
        profile_id: profile.id,
        token_hash: tokenHash,
        token_hint: tokenHint,
        status: "active"
      });

      if (tokenError) {
        throw tokenError;
      }

      const publicUrl = buildPublicUrl(profile.public_slug);
      const activationUrl = buildActivationUrl(token);

      return response({
        ok: true,
        profile: {
          ...profile,
          public_url: publicUrl,
          activation_url: activationUrl
        },
        activationToken: token
      });
    }

    if (action === "list") {
      const statuses = Array.isArray(body?.statuses)
        ? body.statuses.map((value: unknown) => cleanText(value)).filter(Boolean)
        : [];
      const limit = Number(body?.limit) > 0 ? Math.min(Number(body.limit), 100) : 40;

      let query = client
        .from("medical_profiles")
        .select(
          "public_slug, full_name, pending_label, chip_reference, default_language, workflow_status, hybrid_summary, activated_at, nfc_programmed_at, updated_at, created_at"
        )
        .order("updated_at", { ascending: false })
        .limit(limit);

      if (statuses.length) {
        query = query.in("workflow_status", statuses);
      }

      const { data, error } = await query;
      if (error) {
        throw error;
      }

      return response({
        ok: true,
        profiles: (data || []).map((profile) => ({
          ...profile,
          public_url: buildPublicUrl(profile.public_slug)
        }))
      });
    }

    if (action === "reissueActivation") {
      const publicSlug = cleanText(body?.publicSlug);
      if (!publicSlug) {
        return response({ error: "publicSlug is required" }, 400);
      }

      const { data: profile, error: profileError } = await client
        .from("medical_profiles")
        .select("id, public_slug, full_name, workflow_status")
        .eq("public_slug", publicSlug)
        .single();

      if (profileError || !profile) {
        throw profileError || new Error("Profile not found");
      }

      await revokeActiveTokens(client, profile.id);

      const token = createActivationToken();
      const tokenHash = await hashToken(token);
      const tokenHint = token.slice(-8);

      const { error: tokenError } = await client.from("medical_profile_activation_tokens").insert({
        profile_id: profile.id,
        token_hash: tokenHash,
        token_hint: tokenHint,
        status: "active"
      });

      if (tokenError) {
        throw tokenError;
      }

      const nextStatus = profile.workflow_status === "pending" ? "pending" : "update_requested";
      const { error: updateError } = await client
        .from("medical_profiles")
        .update({ workflow_status: nextStatus })
        .eq("id", profile.id);

      if (updateError) {
        throw updateError;
      }

      const publicUrl = buildPublicUrl(profile.public_slug);
      const activationUrl = buildActivationUrl(token);

      return response({
        ok: true,
        publicSlug: profile.public_slug,
        publicUrl,
        activationUrl,
        activationToken: token,
        workflowStatus: nextStatus
      });
    }

    if (action === "markProgrammed") {
      const publicSlug = cleanText(body?.publicSlug);
      if (!publicSlug) {
        return response({ error: "publicSlug is required" }, 400);
      }

      const { data, error } = await client
        .from("medical_profiles")
        .update({
          workflow_status: "active",
          nfc_programmed_at: new Date().toISOString()
        })
        .eq("public_slug", publicSlug)
        .select("public_slug, full_name, hybrid_summary, workflow_status, nfc_programmed_at")
        .single();

      if (error || !data) {
        throw error || new Error("Profile could not be marked as active");
      }

      return response({
        ok: true,
        profile: {
          ...data,
          public_url: buildPublicUrl(data.public_slug)
        }
      });
    }

    return response({ error: "Unknown action" }, 400);
  } catch (error) {
    return response(
      {
        error: "Admin action failed",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      500
    );
  }
});
