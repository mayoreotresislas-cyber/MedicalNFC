import { corsHeaders } from "../_shared/cors.ts";

const medicalFieldKeys = ["conditions", "allergies", "food_allergies", "medications", "devices", "notes"] as const;
const languageNames = {
  en: "English",
  es: "Spanish",
  fr: "French",
  pt: "Portuguese",
  de: "German",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  zh: "Chinese"
} as const;

type SupportedLanguage = keyof typeof languageNames;
type StringFields = Record<string, string>;

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
  const normalized = String(value ?? "").trim().slice(0, 2).toLowerCase() as SupportedLanguage;
  return languageNames[normalized] ? normalized : "en";
}

function normalizeFieldMap(value: unknown, fallbackKeys: readonly string[] = medicalFieldKeys): StringFields {
  const source = typeof value === "object" && value ? (value as Record<string, unknown>) : {};
  const keys = Object.keys(source).length ? Object.keys(source) : [...fallbackKeys];

  return keys.reduce<StringFields>((result, key) => {
    result[key] = String(source[key] ?? "").trim();
    return result;
  }, {});
}

function buildSchema(keys: string[]) {
  return {
    type: "object",
    additionalProperties: false,
    required: keys,
    properties: Object.fromEntries(keys.map((key) => [key, { type: "string" }]))
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
    const fields = normalizeFieldMap(body?.fields);
    const fieldKeys = Object.keys(fields);

    if (sourceLanguage === targetLanguage || !fieldKeys.some((key) => fields[key])) {
      return json({ sourceLanguage, targetLanguage, fields });
    }

    const prompt = [
      `Translate the provided text fields from ${languageNames[sourceLanguage]} to ${languageNames[targetLanguage]}.`,
      "Preserve the exact meaning of the source text.",
      "For medical content, keep medication, device, and brand names unchanged when they should remain the same.",
      "Do not add warnings, explanations, or new information.",
      "Return empty strings for empty fields.",
      "Preserve line breaks inside each field."
    ].join(" ");

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiKey}`
      },
      body: JSON.stringify({
        model,
        max_output_tokens: Math.max(500, fieldKeys.length * 120),
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
            name: "translated_fields",
            strict: true,
            schema: buildSchema(fieldKeys)
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
    const translated = normalizeFieldMap(textPayload ? JSON.parse(textPayload) : {}, fieldKeys);

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
