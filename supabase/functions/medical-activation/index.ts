import { corsHeaders } from "../_shared/cors.ts";
import {
  buildHybridSummary,
  buildPublicUrl,
  cleanText,
  getAdminClient,
  hashToken,
  sanitizeProfile,
  sendAdminNotification
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

async function findTokenRecord(client: ReturnType<typeof getAdminClient>, rawToken: string) {
  const tokenHash = await hashToken(rawToken);
  const { data, error } = await client
    .from("medical_profile_activation_tokens")
    .select("id, profile_id, status, token_hint, expires_at, used_at")
    .eq("token_hash", tokenHash)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
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
    const action = cleanText(body?.action);
    const rawToken = cleanText(body?.token);

    if (!rawToken) {
      return response({ error: "Activation token is required" }, 400);
    }

    const client = getAdminClient();
    const tokenRecord = await findTokenRecord(client, rawToken);

    if (!tokenRecord) {
      return response({ error: "Activation token not found" }, 404);
    }

    if (tokenRecord.expires_at && new Date(tokenRecord.expires_at).getTime() < Date.now()) {
      await client
        .from("medical_profile_activation_tokens")
        .update({ status: "expired" })
        .eq("id", tokenRecord.id);

      return response({ error: "Activation token expired" }, 410);
    }

    const { data: profile, error: profileError } = await client
      .from("medical_profiles")
      .select("*")
      .eq("id", tokenRecord.profile_id)
      .single();

    if (profileError || !profile) {
      throw profileError || new Error("Profile not found");
    }

    if (action === "load") {
      if (tokenRecord.status === "revoked") {
        return response({ error: "Activation token revoked" }, 410);
      }

      if (tokenRecord.status === "active" && !profile.activation_started_at) {
        await client
          .from("medical_profiles")
          .update({ activation_started_at: new Date().toISOString() })
          .eq("id", profile.id);
      }

      return response({
        ok: true,
        tokenStatus: tokenRecord.status,
        profile: sanitizeProfile(profile),
        publicUrl: buildPublicUrl(profile.public_slug)
      });
    }

    if (action === "activate") {
      if (tokenRecord.status !== "active") {
        return response({ error: "Activation token is no longer active" }, 409);
      }

      const payload = body?.payload;
      if (!payload || !cleanText(payload.full_name)) {
        return response({ error: "Profile payload is incomplete" }, 400);
      }

      const hybridSummary = buildHybridSummary(payload);
      const updatePayload = {
        ...payload,
        workflow_status: "ready_to_program",
        activation_started_at: profile.activation_started_at || new Date().toISOString(),
        activated_at: new Date().toISOString(),
        hybrid_summary: hybridSummary,
        is_public: true
      };

      const { data: updatedProfile, error: updateError } = await client
        .from("medical_profiles")
        .update(updatePayload)
        .eq("id", profile.id)
        .select("*")
        .single();

      if (updateError || !updatedProfile) {
        throw updateError || new Error("Profile activation failed");
      }

      const { error: tokenUpdateError } = await client
        .from("medical_profile_activation_tokens")
        .update({
          status: "used",
          used_at: new Date().toISOString()
        })
        .eq("id", tokenRecord.id);

      if (tokenUpdateError) {
        throw tokenUpdateError;
      }

      await client
        .from("medical_profile_activation_tokens")
        .update({ status: "revoked" })
        .eq("profile_id", profile.id)
        .eq("status", "active");

      const publicUrl = buildPublicUrl(updatedProfile.public_slug);
      const emailResult = await sendAdminNotification({
        subject: `NFC profile ready to program: ${cleanText(updatedProfile.full_name)}`,
        title: "Medical profile ready for NFC programming",
        profileName: cleanText(updatedProfile.full_name),
        slug: cleanText(updatedProfile.public_slug),
        profileUrl: publicUrl,
        hybridSummary,
        status: "ready_to_program",
        clientEmail: cleanText(updatedProfile.client_email),
        clientLanguage: cleanText(updatedProfile.default_language)
      });

      return response({
        ok: true,
        publicUrl,
        profile: sanitizeProfile(updatedProfile),
        emailSent: Boolean(emailResult.ok)
      });
    }

    return response({ error: "Unknown action" }, 400);
  } catch (error) {
    return response(
      {
        error: "Activation request failed",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      500
    );
  }
});
