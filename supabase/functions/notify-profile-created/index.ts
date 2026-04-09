import { corsHeaders } from "../_shared/cors.ts";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    }
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const resendKey = Deno.env.get("RESEND_API_KEY");
  const notifyTo = Deno.env.get("MEDICAL_PROFILE_NOTIFY_TO");
  const notifyFrom = Deno.env.get("MEDICAL_PROFILE_NOTIFY_FROM") || "MyMedicalNFC.com <onboarding@resend.dev>";

  if (!resendKey || !notifyTo) {
    return json({ error: "Notification email is not configured" }, 500);
  }

  try {
    const body = await request.json();
    const profileName = String(body?.profileName ?? "Medical profile").trim();
    const profileUrl = String(body?.profileUrl ?? "").trim();
    const slug = String(body?.slug ?? "").trim();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: notifyFrom,
        to: [notifyTo],
        subject: `New MyMedicalNFC.com profile ready: ${profileName}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f1f1f">
            <h2 style="margin:0 0 12px">New medical profile saved</h2>
            <p><strong>Name:</strong> ${profileName}</p>
            <p><strong>Slug:</strong> ${slug || "N/A"}</p>
            <p><strong>Profile URL:</strong><br /><a href="${profileUrl}">${profileUrl}</a></p>
            <p>This is the URL to record on the NFC tag.</p>
          </div>
        `,
        text: `New medical profile saved\n\nName: ${profileName}\nSlug: ${slug || "N/A"}\nProfile URL: ${profileUrl}\n\nThis is the URL to record on the NFC tag.`
      })
    });

    if (!response.ok) {
      const details = await response.text();
      return json({ error: "Resend request failed", details }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    return json(
      {
        error: "Notification failed",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      500
    );
  }
});
