import { corsHeaders } from "../_shared/cors.ts";
import {
  buildPublicUrl,
  cleanText,
  getAdminClient,
  normalizeLanguage,
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

function sanitizeReason(value: unknown) {
  const normalized = cleanText(value).slice(0, 80);
  return normalized || "profile_update";
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

    if (action !== "requestProfileChanges") {
      return response({ error: "Unknown action" }, 400);
    }

    const publicSlug = cleanText(body?.publicSlug);
    const requesterName = cleanText(body?.requesterName);
    const requesterEmail = cleanText(body?.requesterEmail);
    const requesterPhone = cleanText(body?.requesterPhone);
    const preferredLanguage = normalizeLanguage(body?.preferredLanguage);
    const requestReason = sanitizeReason(body?.requestReason);
    const requestDetails = cleanText(body?.requestDetails).slice(0, 3000);
    const pageUrl = cleanText(body?.pageUrl);

    if (!publicSlug) {
      return response({ error: "publicSlug is required" }, 400);
    }

    if (!requesterName) {
      return response({ error: "requesterName is required" }, 400);
    }

    if (!requesterEmail && !requesterPhone) {
      return response({ error: "At least one contact method is required" }, 400);
    }

    if (!requestDetails) {
      return response({ error: "requestDetails is required" }, 400);
    }

    const client = getAdminClient();
    const { data: profile, error: profileError } = await client
      .from("medical_profiles")
      .select("id, public_slug, full_name, workflow_status, default_language, is_public")
      .eq("public_slug", publicSlug)
      .eq("is_public", true)
      .single();

    if (profileError || !profile) {
      throw profileError || new Error("Profile not found");
    }

    const { data: createdRequest, error: insertError } = await client
      .from("medical_profile_change_requests")
      .insert({
        profile_id: profile.id,
        public_slug: profile.public_slug,
        requester_name: requesterName,
        requester_email: requesterEmail || null,
        requester_phone: requesterPhone || null,
        preferred_language: preferredLanguage,
        request_reason: requestReason,
        request_details: requestDetails || null,
        page_url: pageUrl || null,
        status: "open"
      })
      .select("id, created_at")
      .single();

    if (insertError || !createdRequest) {
      throw insertError || new Error("Could not save the support request");
    }

    const nextWorkflowStatus = profile.workflow_status === "pending" ? "pending" : "update_requested";
    const { error: updateError } = await client
      .from("medical_profiles")
      .update({ workflow_status: nextWorkflowStatus })
      .eq("id", profile.id);

    if (updateError) {
      throw updateError;
    }

    await sendAdminNotification({
      subject: "MyMedicalNFC.com | Profile change request received",
      title: "A profile reopening request was submitted",
      profileName: cleanText(profile.full_name) || cleanText(profile.public_slug),
      slug: cleanText(profile.public_slug),
      profileUrl: pageUrl || buildPublicUrl(profile.public_slug),
      hybridSummary: [
        `Requester: ${requesterName}`,
        requesterEmail ? `Email: ${requesterEmail}` : "",
        requesterPhone ? `Phone: ${requesterPhone}` : "",
        `Reason: ${requestReason}`,
        requestDetails ? `Details: ${requestDetails}` : ""
      ]
        .filter(Boolean)
        .join(" | ")
        .slice(0, 900),
      status: "Profile change requested"
    });

    return response({
      ok: true,
      requestId: createdRequest.id,
      requestReference: cleanText(createdRequest.id).slice(0, 8).toUpperCase(),
      workflowStatus: nextWorkflowStatus,
      createdAt: createdRequest.created_at
    });
  } catch (error) {
    console.error("medical-profile-support failed", error);
    return response(
      {
        error: "Support request failed",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      500
    );
  }
});
