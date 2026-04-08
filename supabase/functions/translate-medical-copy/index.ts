import { corsHeaders } from "../_shared/cors.ts";

const medicalFieldKeys = ["conditions", "allergies", "medications", "devices", "notes"] as const;
const languageNames = {
  en: "English",
  es: "Spanish"
} as const;

type SupportedLanguage = keyof typeof languageNames;
type MedicalFields = Record<(typeof medicalFieldKeys)[number], string>;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    }
  });
}

function normalizeLanguage(value: unknown): SupportedLanguage {
  return value === "en" ? "en" : "es";
}

function normalizeFields(value: unknown): MedicalFields {
  const source = typeof value === "object" && value ? (value as Record<string, unknown>) : {};

  return {
    conditions: String(source.conditions ?? "").trim(),
    allergies: String(source.allergies ?? "").trim(),
    medications: String(source.medications ?? "").trim(),
    devices: String(source.devices ?? "").trim(),
    notes: String(source.notes ?? "").trim()
  };
}

function extractTextPayload(payload: Record<string, unknown>) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text;
  }

  const output = Array.isArray(payload.output) ? payload.output : [];
  for (const item of output) {
    const content = Array.isArray((item as Record<string, unknown>).content)
      ? ((item as Record<string, unknown>).content as Array<Record<string, unknown>>)
      : [];

    for (const block of content) {
      if (typeof block.text === "string" && block.text.trim()) {
        return block.text;
      }
    }
  }

  return "";
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const openAiKey = Deno.env.get("OPENAI_API_KEY");
  const model = Deno.env.get("OPENAI_TRANSLATION_MODEL") || "gpt-5-mini";

  if (!openAiKey) {
    return json({ error: "OPENAI_API_KEY is missing" }, 500);
  }

  try {
    const body = await request.json();
    const sourceLanguage = normalizeLanguage(body?.sourceLanguage);
    const targetLanguage = normalizeLanguage(body?.targetLanguage);
    const fields = normalizeFields(body?.fields);

    if (sourceLanguage === targetLanguage || !medicalFieldKeys.some((key) => fields[key])) {
      return json({ sourceLanguage, targetLanguage, fields });
    }

    const prompt = [
      `Translate the medical profile fields from ${languageNames[sourceLanguage]} to ${languageNames[targetLanguage]}.`,
      "Preserve exact medical meaning.",
      "Keep medication, device, and brand names unchanged when they should remain the same.",
      "Do not add warnings, explanations, or new information.",
      "Return empty strings for empty fields.",
      "Keep notes concise and preserve line breaks as newline-separated lines without bullets."
    ].join(" ");

    const schema = {
      type: "object",
      additionalProperties: false,
      required: [...medicalFieldKeys],
      properties: {
        conditions: { type: "string" },
        allergies: { type: "string" },
        medications: { type: "string" },
        devices: { type: "string" },
        notes: { type: "string" }
      }
    };

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiKey}`
      },
      body: JSON.stringify({
        model,
        max_output_tokens: 500,
        input: [
          {
            role: "system",
            content: [{ type: "input_text", text: prompt }]
          },
          {
            role: "user",
            content: [{ type: "input_text", text: JSON.stringify(fields) }]
          }
        ],
        text: {
          format: {
            type: "json_schema",
            name: "medical_translation",
            strict: true,
            schema
          }
        }
      })
    });

    if (!response.ok) {
      const details = await response.text();
      return json({ error: "OpenAI translation request failed", details }, 502);
    }

    const payload = (await response.json()) as Record<string, unknown>;
    const textPayload = extractTextPayload(payload);
    const translated = normalizeFields(textPayload ? JSON.parse(textPayload) : {});

    return json({
      sourceLanguage,
      targetLanguage,
      fields: translated
    });
  } catch (error) {
    console.error("translate-medical-copy failed", error);
    return json(
      {
        error: "Translation failed",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      500
    );
  }
});
