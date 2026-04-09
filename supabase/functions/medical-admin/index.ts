import { corsHeaders } from "../_shared/cors.ts";
import {
  buildActivationUrlWithLanguage,
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

async function issueActivationToken(
  client: ReturnType<typeof getAdminClient>,
  profileId: string,
  language: string
) {
  await revokeActiveTokens(client, profileId);

  const token = createActivationToken();
  const tokenHash = await hashToken(token);
  const tokenHint = token.slice(-8);
  const { error: tokenError } = await client.from("medical_profile_activation_tokens").insert({
    profile_id: profileId,
    token_hash: tokenHash,
    token_hint: tokenHint,
    status: "active"
  });

  if (tokenError) {
    throw tokenError;
  }

  return {
    activationToken: token,
    activationUrl: buildActivationUrlWithLanguage(token, language)
  };
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
      const clientEmail = cleanText(body?.clientEmail);
      const clientPhone = cleanText(body?.clientPhone);
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
          client_email: clientEmail || null,
          client_phone: clientPhone || null,
          workflow_status: "pending",
          is_public: true
        })
        .select(
          "id, public_slug, full_name, pending_label, chip_reference, workflow_status, default_language, client_email, client_phone, created_at"
        )
        .single();

      if (profileError || !profile) {
        throw profileError || new Error("Could not create pending profile");
      }

      const { activationToken, activationUrl } = await issueActivationToken(client, profile.id, defaultLanguage);
      const publicUrl = buildPublicUrl(profile.public_slug);

      return response({
        ok: true,
        profile: {
          ...profile,
          public_url: publicUrl,
          activation_url: activationUrl
        },
        activationToken
      });
    }

    if (action === "list") {
      const statuses = Array.isArray(body?.statuses)
        ? body.statuses.map((value: unknown) => cleanText(value)).filter(Boolean)
        : [];
      const search = cleanText(body?.search).toLowerCase();
      const limit = Number(body?.limit) > 0 ? Math.min(Number(body.limit), 150) : 80;

      let query = client
        .from("medical_profiles")
        .select(
          "public_slug, full_name, pending_label, chip_reference, default_language, workflow_status, hybrid_summary, activated_at, nfc_programmed_at, updated_at, created_at, client_email, client_phone"
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

      const profiles = (data || [])
        .filter((profile) => {
          if (!search) {
            return true;
          }

          const haystack = [
            profile.full_name,
            profile.pending_label,
            profile.public_slug,
            profile.chip_reference,
            profile.client_email,
            profile.client_phone
          ]
            .map((value) => cleanText(value).toLowerCase())
            .join(" ");

          return haystack.includes(search);
        })
        .map((profile) => ({
          ...profile,
          public_url: buildPublicUrl(profile.public_slug)
        }));

      return response({
        ok: true,
        profiles
      });
    }

    if (action === "reissueActivation" || action === "reopenProfile") {
      const publicSlug = cleanText(body?.publicSlug);
      if (!publicSlug) {
        return response({ error: "publicSlug is required" }, 400);
      }

      const { data: profile, error: profileError } = await client
        .from("medical_profiles")
        .select("id, public_slug, full_name, workflow_status, default_language, client_email, client_phone")
        .eq("public_slug", publicSlug)
        .single();

      if (profileError || !profile) {
        throw profileError || new Error("Profile not found");
      }

      const { activationToken, activationUrl } = await issueActivationToken(client, profile.id, profile.default_language);
      const nextStatus = profile.workflow_status === "pending" ? "pending" : "update_requested";
      const { error: updateError } = await client
        .from("medical_profiles")
        .update({ workflow_status: nextStatus })
        .eq("id", profile.id);

      if (updateError) {
        throw updateError;
      }

      const publicUrl = buildPublicUrl(profile.public_slug);

      return response({
        ok: true,
        publicSlug: profile.public_slug,
        publicUrl,
        activationUrl,
        activationToken,
        workflowStatus: nextStatus,
        clientEmail: profile.client_email,
        clientPhone: profile.client_phone
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

    if (action === "archiveProfile") {
      const publicSlug = cleanText(body?.publicSlug);
      if (!publicSlug) {
        return response({ error: "publicSlug is required" }, 400);
      }

      const { data, error } = await client
        .from("medical_profiles")
        .update({ workflow_status: "archived" })
        .eq("public_slug", publicSlug)
        .select("public_slug, workflow_status")
        .single();

      if (error || !data) {
        throw error || new Error("Profile could not be archived");
      }

      return response({ ok: true, profile: data });
    }

    if (action === "deleteProfile") {
      const publicSlug = cleanText(body?.publicSlug);
      if (!publicSlug) {
        return response({ error: "publicSlug is required" }, 400);
      }

      const { error } = await client.from("medical_profiles").delete().eq("public_slug", publicSlug);
      if (error) {
        throw error;
      }

      return response({ ok: true, publicSlug });
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
