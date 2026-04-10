import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const DEFAULT_SITE_BASE_URL = "https://medical-nfc.vercel.app/med/{slug}";
const DEFAULT_ACTIVATION_BASE_URL = "https://medical-nfc.vercel.app/activate/{token}";
const DEFAULT_BRAND_NAME = "MyMedicalNFC.com";

export const profileStatuses = [
  "pending",
  "ready_to_program",
  "active",
  "update_requested",
  "archived"
] as const;

export type ProfileStatus = (typeof profileStatuses)[number];

export function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export function cleanText(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

export function normalizeLanguage(value: unknown) {
  const normalized = cleanText(value).slice(0, 2).toLowerCase();
  return ["en", "es", "fr", "pt", "de", "it", "ja", "ko", "zh"].includes(normalized) ? normalized : "en";
}

export function slugify(value: unknown) {
  return cleanText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildRandomSuffix(length = 6) {
  const alphabet = "abcdefghjkmnpqrstuvwxyz23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
}

export function createActivationToken() {
  return `nfcm_${buildRandomSuffix(8)}${buildRandomSuffix(8)}${buildRandomSuffix(8)}`;
}

export async function hashToken(token: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(token));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function resolveSiteBaseUrl() {
  return cleanText(Deno.env.get("SITE_BASE_URL")) || DEFAULT_SITE_BASE_URL;
}

export function resolveActivationBaseUrl() {
  return cleanText(Deno.env.get("ACTIVATION_BASE_URL")) || DEFAULT_ACTIVATION_BASE_URL;
}

export function buildPublicUrl(slug: string) {
  const safeSlug = slugify(slug) || "medical-profile";
  const template = resolveSiteBaseUrl();
  return template.includes("{slug}") ? template.replace("{slug}", safeSlug) : `${template.replace(/\/$/, "")}/${safeSlug}`;
}

export function buildActivationUrl(token: string) {
  const safeToken = cleanText(token);
  const template = resolveActivationBaseUrl();
  return template.includes("{token}") ? template.replace("{token}", safeToken) : `${template.replace(/\/$/, "")}/${safeToken}`;
}

export function buildActivationUrlWithLanguage(token: string, language: string) {
  const baseUrl = buildActivationUrl(token);
  const normalizedLanguage = normalizeLanguage(language);
  const url = baseUrl.startsWith("http://") || baseUrl.startsWith("https://")
    ? new URL(baseUrl)
    : new URL(baseUrl, "https://medical-nfc.vercel.app");
  url.searchParams.set("lang", normalizedLanguage);
  return url.toString();
}

export function verifyAdminToken(value: unknown) {
  const provided = cleanText(value);
  const expected = cleanText(Deno.env.get("MEDICAL_ADMIN_TOKEN"));
  return Boolean(provided && expected && provided === expected);
}

export function verifyAdminAccess(input: { token?: unknown; username?: unknown; password?: unknown }) {
  const providedToken = cleanText(input.token);
  const providedUsername = cleanText(input.username);
  const providedPassword = cleanText(input.password);
  const expectedUsername = cleanText(Deno.env.get("MEDICAL_ADMIN_USERNAME"));
  const expectedPassword = cleanText(Deno.env.get("MEDICAL_ADMIN_PASSWORD"));

  if (expectedUsername && expectedPassword) {
    return Boolean(
      providedUsername &&
        providedPassword &&
        providedUsername === expectedUsername &&
        providedPassword === expectedPassword
    );
  }

  const expectedToken = cleanText(Deno.env.get("MEDICAL_ADMIN_TOKEN"));
  return Boolean(
    (providedToken && expectedToken && providedToken === expectedToken) ||
      (providedPassword && expectedToken && providedPassword === expectedToken)
  );
}

export function getAdminClient() {
  const supabaseUrl = cleanText(Deno.env.get("SUPABASE_URL"));
  const serviceRoleKey = cleanText(Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"));

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase service role environment is not configured");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false
    }
  });
}

export async function ensureUniqueSlug(
  client: ReturnType<typeof createClient>,
  seed: string,
  tableName = "medical_profiles"
) {
  const base = slugify(seed) || "medical-profile";

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const candidate = `${base}-${buildRandomSuffix(6)}`;
    const { data, error } = await client
      .from(tableName)
      .select("public_slug")
      .eq("public_slug", candidate)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!data) {
      return candidate;
    }
  }

  throw new Error("Could not generate a unique slug");
}

export function buildHybridSummary(record: Record<string, unknown>) {
  const parts = [
    cleanText(record.full_name) ? `NAME: ${cleanText(record.full_name)}` : "",
    cleanText(record.blood_type) ? `BLOOD: ${cleanText(record.blood_type)}` : "",
    cleanText(record.age) ? `AGE: ${cleanText(record.age)}` : "",
    cleanText(record.gender) ? `GENDER: ${cleanText(record.gender)}` : "",
    cleanText(record.conditions_en || record.conditions_source) ? `CONDITIONS: ${cleanText(record.conditions_en || record.conditions_source)}` : "",
    cleanText(record.allergies_en || record.allergies_source)
      ? `MED ALLERGIES: ${cleanText(record.allergies_en || record.allergies_source)}`
      : "",
    cleanText(record.food_allergies_en || record.food_allergies_source)
      ? `FOOD ALLERGIES: ${cleanText(record.food_allergies_en || record.food_allergies_source)}`
      : "",
    cleanText(record.medications_en || record.medications_source)
      ? `MEDS: ${cleanText(record.medications_en || record.medications_source)}`
      : "",
    cleanText(record.devices_en || record.devices_source)
      ? `DEVICES: ${cleanText(record.devices_en || record.devices_source)}`
      : "",
    cleanText(record.emergency_contact_1_phone) ? `CONTACT: ${cleanText(record.emergency_contact_1_phone)}` : ""
  ].filter(Boolean);

  return parts.join(" | ").slice(0, 900);
}

export async function sendAdminNotification({
  subject,
  title,
  profileName,
  slug,
  profileUrl,
  activationUrl,
  hybridSummary,
  status,
  clientEmail,
  clientLanguage
}: {
  subject: string;
  title: string;
  profileName: string;
  slug: string;
  profileUrl: string;
  activationUrl?: string;
  hybridSummary?: string;
  status: string;
  clientEmail?: string;
  clientLanguage?: string;
}) {
  const resendKey = cleanText(Deno.env.get("RESEND_API_KEY"));
  const notifyTo = cleanText(Deno.env.get("MEDICAL_PROFILE_NOTIFY_TO"));
  const brandName = cleanText(Deno.env.get("MEDICAL_BRAND_NAME")) || DEFAULT_BRAND_NAME;
  const notifyFrom = cleanText(Deno.env.get("MEDICAL_PROFILE_NOTIFY_FROM")) || `${brandName} <onboarding@resend.dev>`;

  if (!resendKey || !notifyTo) {
    return { ok: false, reason: "Notification email is not configured" };
  }

  const rows = [
    `<p><strong>Status:</strong> ${status}</p>`,
    `<p><strong>Name:</strong> ${profileName || "Medical profile"}</p>`,
    `<p><strong>Slug:</strong> ${slug || "N/A"}</p>`,
    profileUrl ? `<p><strong>Public URL:</strong><br /><a href="${profileUrl}">${profileUrl}</a></p>` : "",
    activationUrl ? `<p><strong>Activation URL:</strong><br /><a href="${activationUrl}">${activationUrl}</a></p>` : "",
    hybridSummary ? `<p><strong>Hybrid offline text:</strong><br />${hybridSummary}</p>` : ""
  ].filter(Boolean);

  const requestEmail = async (payload: Record<string, unknown>) => {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(details || "Resend request failed");
    }
  };

  try {
    await requestEmail({
      from: notifyFrom,
      to: [notifyTo],
      subject,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f1f1f"><h2 style="margin:0 0 12px">${title}</h2>${rows.join("")}</div>`,
      text: [
        title,
        `Status: ${status}`,
        `Name: ${profileName || "Medical profile"}`,
        `Slug: ${slug || "N/A"}`,
        profileUrl ? `Public URL: ${profileUrl}` : "",
        activationUrl ? `Activation URL: ${activationUrl}` : "",
        hybridSummary ? `Hybrid offline text: ${hybridSummary}` : ""
      ]
        .filter(Boolean)
        .join("\n")
    });

    const normalizedClientEmail = cleanText(clientEmail);
    if (normalizedClientEmail) {
      const spanish = normalizeLanguage(clientLanguage) === "es";
      await requestEmail({
        from: notifyFrom,
        to: [normalizedClientEmail],
        subject: spanish ? `${brandName} | Perfil medico listo` : `${brandName} | Medical profile ready`,
        html: spanish
          ? `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f1f1f"><h2 style="margin:0 0 12px">Tu perfil medico ya fue guardado</h2><p><strong>Nombre:</strong> ${profileName || "Perfil medico"}</p><p><strong>Enlace del perfil:</strong><br /><a href="${profileUrl}">${profileUrl}</a></p><p>Si necesitas cambios en el futuro, ponte en contacto con el administrador del NFC.</p></div>`
          : `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f1f1f"><h2 style="margin:0 0 12px">Your medical profile has been saved</h2><p><strong>Name:</strong> ${profileName || "Medical profile"}</p><p><strong>Profile link:</strong><br /><a href="${profileUrl}">${profileUrl}</a></p><p>If you need changes later, please contact the NFC administrator.</p></div>`,
        text: spanish
          ? `Tu perfil medico ya fue guardado\n\nNombre: ${profileName || "Perfil medico"}\nEnlace del perfil: ${profileUrl}\n\nSi necesitas cambios en el futuro, ponte en contacto con el administrador del NFC.`
          : `Your medical profile has been saved\n\nName: ${profileName || "Medical profile"}\nProfile link: ${profileUrl}\n\nIf you need changes later, please contact the NFC administrator.`
      });
    }
  } catch (error) {
    return { ok: false, reason: error instanceof Error ? error.message : "Resend request failed" };
  }

  return { ok: true };
}

export function sanitizeProfile(record: Record<string, unknown>) {
  return {
    public_slug: record.public_slug,
    workflow_status: record.workflow_status,
    default_language: record.default_language,
    full_name: record.full_name,
    first_name: record.first_name,
    last_name: record.last_name,
    family_group: record.family_group,
    gender: record.gender,
    birth_date: record.birth_date,
    blood_type: record.blood_type,
    age: record.age,
    weight: record.weight,
    height: record.height,
    organ_donor: record.organ_donor,
    doctor: record.doctor,
    clinic: record.clinic,
    insurance: record.insurance,
    country: record.country,
    state_region: record.state_region,
    city: record.city,
    postal_code: record.postal_code,
    conditions_source: record.conditions_source,
    conditions_en: record.conditions_en,
    conditions_es: record.conditions_es,
    allergies_source: record.allergies_source,
    allergies_en: record.allergies_en,
    allergies_es: record.allergies_es,
    food_allergies_source: record.food_allergies_source,
    food_allergies_en: record.food_allergies_en,
    food_allergies_es: record.food_allergies_es,
    medications_source: record.medications_source,
    medications_en: record.medications_en,
    medications_es: record.medications_es,
    devices_source: record.devices_source,
    devices_en: record.devices_en,
    devices_es: record.devices_es,
    notes_source: record.notes_source,
    notes_en: record.notes_en,
    notes_es: record.notes_es,
    emergency_contact_1_name: record.emergency_contact_1_name,
    emergency_contact_1_phone: record.emergency_contact_1_phone,
    emergency_contact_2_name: record.emergency_contact_2_name,
    emergency_contact_2_phone: record.emergency_contact_2_phone,
    full_record_url: record.full_record_url,
    client_email: record.client_email,
    client_phone: record.client_phone,
    terms_accepted_at: record.terms_accepted_at,
    terms_version: record.terms_version,
    hybrid_summary: record.hybrid_summary,
    activated_at: record.activated_at,
    nfc_programmed_at: record.nfc_programmed_at
  };
}
