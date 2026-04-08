const setupTranslations = {
  en: {
    brandTagline: "Medical profile setup portal",
    publicLandingLink: "Public landing",
    heroKicker: "Profile builder",
    heroTitle: "Fill out a medical profile that feels simple, polished, and ready to scan.",
    heroText:
      "Capture the information once, review the live preview, and keep the public URL you will later write to the NFC tag.",
    heroPoint1: "One form, no duplicated languages",
    heroPoint2: "Automatic EN and ES preview",
    heroPoint3: "Supabase-ready publishing flow",
    heroCardLabel: "Recommended flow",
    heroCard1: "Fill the patient profile once.",
    heroCard2: "Review the live preview before publishing.",
    heroCard3: "Save and keep the generated public URL.",
    step1: "1. Identity",
    step2: "2. Medical details",
    step3: "3. Contacts",
    step4: "4. Publish",
    identityKicker: "Identity",
    identityTitle: "Basic profile and public route",
    medicalKicker: "Medical details",
    medicalTitle: "Write the medical details once",
    contactsKicker: "Contacts",
    contactsTitle: "Emergency contacts",
    publishKicker: "Publish",
    publishTitle: "Privacy, record and generated URL",
    fieldFullName: "Full name",
    fieldSlug: "Public slug",
    fieldProfileLanguage: "Profile language",
    fieldBloodType: "Blood type",
    fieldInsurance: "Insurance",
    fieldDoctor: "Doctor",
    fieldClinic: "Clinic",
    fieldConditions: "Conditions",
    fieldAllergies: "Severe allergies",
    fieldMedications: "Critical medications",
    fieldDevices: "Medical devices",
    fieldNotes: "Important notes",
    contact1Title: "Emergency contact 1",
    contact2Title: "Emergency contact 2",
    fieldContactName: "Name",
    fieldCountryCode: "Country code",
    fieldContactPhone: "Phone",
    fieldRecordUrl: "Full medical record URL",
    fieldIsPublic: "Public emergency profile",
    generatedUrlLabel: "Generated public URL",
    copyUrl: "Copy URL",
    openPublic: "Open public preview",
    saveProfile: "Save profile",
    previewKicker: "Live preview",
    previewTitle: "How the public scan page will look",
    criticalBadge: "Critical",
    detailBadge: "Detail",
    screenOne: "Screen 1",
    screenTwo: "Screen 2",
    emergencyTitle: "Emergency Medical Info",
    additionalTitle: "Additional Medical Information",
    labelName: "Name",
    labelConditions: "Condition(s)",
    labelAllergies: "Severe Allergies",
    labelMedications: "Critical Medications",
    labelBloodType: "Blood Type",
    labelDoctor: "Doctor",
    labelClinic: "Clinic",
    labelInsurance: "Insurance",
    importantNotes: "Important Notes",
    savingTitle: "Saving profile...",
    savingText: "Please wait while we store the information securely.",
    successKicker: "Saved",
    successTitle: "Profile saved successfully",
    successText: "The profile is ready. Keep this public URL for the NFC setup.",
    closeSuccess: "Done",
    statusReadyTitle: "Ready to save",
    statusReadyMessage: "Complete the form, review the translated preview, and publish the profile.",
    statusConfigTitle: "Supabase setup missing",
    statusConfigMessage: "Add the dedicated NFC Medico Supabase URL and anon key in config.js.",
    statusCopiedTitle: "URL copied",
    statusCopiedMessage: "The public URL is already in your clipboard.",
    statusLoadedTitle: "Profile loaded",
    statusLoadedMessage: "Existing data for {slug} is now in the form.",
    statusLoadErrorTitle: "Could not load the profile",
    statusLoadErrorMessage: "We could not find {slug}. You can still create a new profile.",
    statusValidationTitle: "Missing required fields",
    statusValidationMessage: "Add at least the full name and public slug before saving.",
    statusSavingTitle: "Saving in progress",
    statusSavingMessage: "Generating both language versions and publishing the profile.",
    statusSavedTitle: "Profile saved",
    statusSavedMessage: "The public URL was generated successfully.",
    statusSaveErrorTitle: "Could not save the profile",
    statusSaveErrorMessage: "Supabase returned an error while saving. Review config and try again.",
    statusTranslateMissingTitle: "Translation function missing",
    statusTranslateMissingMessage:
      "Deploy the translate-medical-copy Edge Function and set the OpenAI secret before saving bilingual profiles.",
    statusTranslateErrorTitle: "Automatic translation failed",
    statusTranslateErrorMessage:
      "We could not generate the second language version right now. Try again in a moment.",
    previewTranslating: "Translating automatically...",
    bloodPlaceholder: "Select blood type"
  },
  es: {
    brandTagline: "Portal de llenado medico",
    publicLandingLink: "Landing publica",
    heroKicker: "Constructor de perfil",
    heroTitle: "Llena un perfil medico simple, profesional y listo para escanear.",
    heroText:
      "Captura toda la informacion una sola vez, revisa el preview en vivo y guarda el URL publico que vas a usar despues en el NFC.",
    heroPoint1: "Un solo formulario, sin duplicar idiomas",
    heroPoint2: "Preview automatico en EN y ES",
    heroPoint3: "Flujo de publicacion listo para Supabase",
    heroCardLabel: "Flujo recomendado",
    heroCard1: "Llena el perfil del paciente una sola vez.",
    heroCard2: "Revisa el preview en vivo antes de publicar.",
    heroCard3: "Guarda y conserva el URL publico generado.",
    step1: "1. Identidad",
    step2: "2. Informacion medica",
    step3: "3. Contactos",
    step4: "4. Publicacion",
    identityKicker: "Identidad",
    identityTitle: "Perfil basico y ruta publica",
    medicalKicker: "Informacion medica",
    medicalTitle: "Escribe los datos medicos una sola vez",
    contactsKicker: "Contactos",
    contactsTitle: "Contactos de emergencia",
    publishKicker: "Publicacion",
    publishTitle: "Privacidad, expediente y URL generado",
    fieldFullName: "Nombre completo",
    fieldSlug: "Slug publico",
    fieldProfileLanguage: "Idioma del perfil",
    fieldBloodType: "Tipo de sangre",
    fieldInsurance: "Seguro",
    fieldDoctor: "Medico",
    fieldClinic: "Clinica",
    fieldConditions: "Condiciones",
    fieldAllergies: "Alergias graves",
    fieldMedications: "Medicamentos criticos",
    fieldDevices: "Dispositivos medicos",
    fieldNotes: "Notas importantes",
    contact1Title: "Contacto de emergencia 1",
    contact2Title: "Contacto de emergencia 2",
    fieldContactName: "Nombre",
    fieldCountryCode: "Codigo de pais",
    fieldContactPhone: "Telefono",
    fieldRecordUrl: "URL del expediente completo",
    fieldIsPublic: "Perfil publico de emergencia",
    generatedUrlLabel: "URL publico generado",
    copyUrl: "Copiar URL",
    openPublic: "Abrir preview publico",
    saveProfile: "Guardar perfil",
    previewKicker: "Preview en vivo",
    previewTitle: "Asi se vera la pagina publica al escanear",
    criticalBadge: "Critico",
    detailBadge: "Detalle",
    screenOne: "Pantalla 1",
    screenTwo: "Pantalla 2",
    emergencyTitle: "Informacion Medica de Emergencia",
    additionalTitle: "Informacion Medica Adicional",
    labelName: "Nombre",
    labelConditions: "Condiciones",
    labelAllergies: "Alergias graves",
    labelMedications: "Medicamentos criticos",
    labelBloodType: "Tipo de sangre",
    labelDoctor: "Medico",
    labelClinic: "Clinica",
    labelInsurance: "Seguro",
    importantNotes: "Notas importantes",
    savingTitle: "Guardando perfil...",
    savingText: "Espera un momento mientras almacenamos la informacion de forma segura.",
    successKicker: "Guardado",
    successTitle: "Perfil guardado con exito",
    successText: "El perfil ya esta listo. Conserva este URL publico para configurar el NFC.",
    closeSuccess: "Listo",
    statusReadyTitle: "Listo para guardar",
    statusReadyMessage: "Completa el formulario, revisa el preview traducido y publica el perfil.",
    statusConfigTitle: "Falta configurar Supabase",
    statusConfigMessage: "Agrega en config.js la URL y anon key del proyecto exclusivo de NFC Medico.",
    statusCopiedTitle: "URL copiado",
    statusCopiedMessage: "El URL publico ya esta en tu portapapeles.",
    statusLoadedTitle: "Perfil cargado",
    statusLoadedMessage: "Los datos existentes de {slug} ya estan dentro del formulario.",
    statusLoadErrorTitle: "No se pudo cargar el perfil",
    statusLoadErrorMessage: "No encontramos {slug}. Aun puedes crear un perfil nuevo.",
    statusValidationTitle: "Faltan campos obligatorios",
    statusValidationMessage: "Agrega al menos el nombre completo y el slug publico antes de guardar.",
    statusSavingTitle: "Guardado en proceso",
    statusSavingMessage: "Estamos generando ambas versiones de idioma y publicando el perfil.",
    statusSavedTitle: "Perfil guardado",
    statusSavedMessage: "El URL publico se genero correctamente.",
    statusSaveErrorTitle: "No se pudo guardar el perfil",
    statusSaveErrorMessage: "Supabase devolvio un error al guardar. Revisa la configuracion e intenta de nuevo.",
    statusTranslateMissingTitle: "Falta la funcion de traduccion",
    statusTranslateMissingMessage:
      "Publica la Edge Function translate-medical-copy y configura la llave de OpenAI antes de guardar perfiles bilingues.",
    statusTranslateErrorTitle: "Fallo la traduccion automatica",
    statusTranslateErrorMessage:
      "No pudimos generar la segunda version del idioma en este momento. Intenta de nuevo en un instante.",
    previewTranslating: "Traduciendo automaticamente...",
    bloodPlaceholder: "Selecciona el tipo de sangre"
  }
};

const countryCodes = [
  { value: "+1", label: "+1 USA / Canada" },
  { value: "+34", label: "+34 Espana" },
  { value: "+52", label: "+52 Mexico" },
  { value: "+54", label: "+54 Argentina" },
  { value: "+56", label: "+56 Chile" },
  { value: "+57", label: "+57 Colombia" },
  { value: "+58", label: "+58 Venezuela" },
  { value: "+51", label: "+51 Peru" },
  { value: "+593", label: "+593 Ecuador" },
  { value: "+507", label: "+507 Panama" },
  { value: "+506", label: "+506 Costa Rica" },
  { value: "+503", label: "+503 El Salvador" },
  { value: "+502", label: "+502 Guatemala" },
  { value: "+504", label: "+504 Honduras" },
  { value: "+505", label: "+505 Nicaragua" }
];

const medicalFieldKeys = ["conditions", "allergies", "medications", "devices", "notes"];
const config = window.NFC_MEDICO_CONFIG || {};
const root = document.documentElement;
const form = document.querySelector("#profile-form");
const uiLangButtons = document.querySelectorAll("[data-lang]");
const previewLangButtons = document.querySelectorAll("[data-preview-lang]");
const textNodes = document.querySelectorAll("[data-i18n]");
const previewCopyNodes = document.querySelectorAll("[data-preview-copy]");
const previewNoteNodes = document.querySelectorAll("[data-preview-note]");
const statusBanner = document.querySelector("[data-form-status]");
const statusTitle = document.querySelector("[data-form-status-title]");
const statusMessage = document.querySelector("[data-form-status-message]");
const generatedUrlNodes = document.querySelectorAll("[data-generated-url], [data-generated-url-inline]");
const successUrlNode = document.querySelector("[data-success-url]");
const openPublicLinks = document.querySelectorAll('[data-action="open-public"], [data-action="open-success-url"]');
const helperFields = document.querySelectorAll("[data-clear-helper]");
const countryCodeSelects = document.querySelectorAll("[data-country-code]");

const state = {
  uiLang: detectInitialLanguage(),
  previewLang: "es",
  client: null,
  slugTouched: false,
  baseStatus: null,
  statusTimer: null,
  lastSavedUrl: "",
  translation: {
    sourceLanguage: "es",
    signature: "",
    results: { es: null, en: null },
    pendingKey: "",
    pendingPromise: null,
    debounceTimer: null
  }
};

function detectInitialLanguage() {
  const queryLang = new URLSearchParams(window.location.search).get("lang");
  if (queryLang === "en" || queryLang === "es") {
    return queryLang;
  }

  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

function normalizeLanguage(lang) {
  return lang === "en" ? "en" : "es";
}

function otherLanguage(lang) {
  return normalizeLanguage(lang) === "en" ? "es" : "en";
}

function cleanText(value) {
  return value === null || value === undefined ? "" : String(value).trim();
}

function slugify(value) {
  return cleanText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatString(template, values = {}) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function hasSupabaseConfig() {
  return Boolean(config.supabaseUrl && config.supabaseAnonKey && window.supabase?.createClient);
}

function getClient() {
  if (!state.client) {
    state.client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
  }

  return state.client;
}

function populateCountryCodes() {
  countryCodeSelects.forEach((select) => {
    select.innerHTML = countryCodes
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join("");
    select.value = "+1";
  });
}

function setupHelperPlaceholders() {
  helperFields.forEach((field) => {
    field.dataset.helperPlaceholder = field.getAttribute("placeholder") || "";

    field.addEventListener("focus", () => {
      const helperText = cleanText(field.dataset.helperPlaceholder);
      const currentValue = cleanText(field.value);

      if (currentValue && currentValue === helperText) {
        field.value = "";
      }

      field.setAttribute("placeholder", "");
    });

    field.addEventListener("blur", () => {
      if (!cleanText(field.value)) {
        field.setAttribute("placeholder", field.dataset.helperPlaceholder || "");
      }
    });
  });
}

function clearDraftFields() {
  if (new URLSearchParams(window.location.search).get("slug")) {
    return;
  }

  form.reset();
  helperFields.forEach((field) => {
    field.value = "";
    field.setAttribute("placeholder", field.dataset.helperPlaceholder || field.getAttribute("placeholder") || "");
  });
  form.elements.blood_type.value = "";
  form.elements.default_language.value = state.uiLang;
  form.elements.is_public.checked = true;
  countryCodeSelects.forEach((select) => {
    select.value = "+1";
  });
}

function setBloodPlaceholder() {
  const select = form.elements.blood_type;
  if (!select?.options?.length) {
    return;
  }

  select.options[0].textContent = setupTranslations[state.uiLang].bloodPlaceholder;
}

function buildPhone(countryCode, localNumber) {
  const code = cleanText(countryCode || "+1");
  const local = cleanText(localNumber);
  return local ? `${code} ${local}`.trim() : "";
}

function buildWhatsappNumber(countryCode, localNumber) {
  return buildPhone(countryCode, localNumber).replace(/\D/g, "");
}

function parsePhone(value) {
  const phone = cleanText(value);
  if (!phone) {
    return { countryCode: "+1", localNumber: "" };
  }

  const normalized = phone.replace(/\s+/g, " ").trim();
  const match = [...countryCodes]
    .sort((left, right) => right.value.length - left.value.length)
    .find((option) => normalized.startsWith(option.value));

  if (!match) {
    return { countryCode: "+1", localNumber: phone };
  }

  return {
    countryCode: match.value,
    localNumber: normalized.slice(match.value.length).trim()
  };
}

function splitNotes(value) {
  return cleanText(value)
    .split(/\r?\n+/)
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);
}

function getFormState() {
  return {
    full_name: cleanText(form.elements.full_name.value),
    public_slug: slugify(form.elements.public_slug.value),
    default_language: normalizeLanguage(form.elements.default_language.value),
    blood_type: cleanText(form.elements.blood_type.value),
    insurance: cleanText(form.elements.insurance.value),
    doctor: cleanText(form.elements.doctor.value),
    clinic: cleanText(form.elements.clinic.value),
    conditions: cleanText(form.elements.conditions.value),
    allergies: cleanText(form.elements.allergies.value),
    medications: cleanText(form.elements.medications.value),
    devices: cleanText(form.elements.devices.value),
    notes: cleanText(form.elements.notes.value),
    emergency_contact_1_name: cleanText(form.elements.emergency_contact_1_name.value),
    emergency_contact_1_country_code: cleanText(form.elements.emergency_contact_1_country_code.value || "+1"),
    emergency_contact_1_phone_local: cleanText(form.elements.emergency_contact_1_phone_local.value),
    emergency_contact_2_name: cleanText(form.elements.emergency_contact_2_name.value),
    emergency_contact_2_country_code: cleanText(form.elements.emergency_contact_2_country_code.value || "+1"),
    emergency_contact_2_phone_local: cleanText(form.elements.emergency_contact_2_phone_local.value),
    full_record_url: cleanText(form.elements.full_record_url.value),
    is_public: Boolean(form.elements.is_public.checked)
  };
}

function emptyMedicalFields() {
  return {
    conditions: "",
    allergies: "",
    medications: "",
    devices: "",
    notes: ""
  };
}

function medicalFieldsFromForm(raw) {
  return {
    conditions: cleanText(raw.conditions),
    allergies: cleanText(raw.allergies),
    medications: cleanText(raw.medications),
    devices: cleanText(raw.devices),
    notes: cleanText(raw.notes)
  };
}

function medicalFieldsFromRecord(record, lang) {
  const fallbackLang = otherLanguage(lang);

  return {
    conditions: cleanText(record[`conditions_${lang}`] ?? record[`conditions_${fallbackLang}`]),
    allergies: cleanText(record[`allergies_${lang}`] ?? record[`allergies_${fallbackLang}`]),
    medications: cleanText(record[`medications_${lang}`] ?? record[`medications_${fallbackLang}`]),
    devices: cleanText(record[`devices_${lang}`] ?? record[`devices_${fallbackLang}`]),
    notes: cleanText(record[`notes_${lang}`] ?? record[`notes_${fallbackLang}`])
  };
}

function hasMedicalContent(fields) {
  return medicalFieldKeys.some((key) => cleanText(fields[key]));
}

function buildTranslationSignature(sourceLanguage, fields) {
  return JSON.stringify({
    sourceLanguage,
    conditions: cleanText(fields.conditions),
    allergies: cleanText(fields.allergies),
    medications: cleanText(fields.medications),
    devices: cleanText(fields.devices),
    notes: cleanText(fields.notes)
  });
}

function syncTranslationSource(raw) {
  const sourceLanguage = normalizeLanguage(raw.default_language);
  const sourceFields = medicalFieldsFromForm(raw);
  const signature = buildTranslationSignature(sourceLanguage, sourceFields);

  if (state.translation.signature === signature) {
    return sourceFields;
  }

  window.clearTimeout(state.translation.debounceTimer);
  state.translation.sourceLanguage = sourceLanguage;
  state.translation.signature = signature;
  state.translation.results = {
    es: sourceLanguage === "es" ? sourceFields : null,
    en: sourceLanguage === "en" ? sourceFields : null
  };
  state.translation.pendingKey = "";
  state.translation.pendingPromise = null;

  return sourceFields;
}

function createLoadingMedicalFields() {
  const label = setupTranslations[state.previewLang].previewTranslating;

  return {
    conditions: label,
    allergies: label,
    medications: label,
    devices: label,
    notes: label
  };
}

function buildDisplayUrl(slugValue = "") {
  const slug = slugify(slugValue) || "new-profile";
  const configured = cleanText(config.siteBaseUrl);

  if (configured.includes("{slug}")) {
    return configured.replace("{slug}", slug);
  }

  return `${window.location.origin}/med/${slug}`;
}

function renderStatus(status = state.baseStatus) {
  if (!status) {
    statusBanner.hidden = true;
    return;
  }

  const copy = setupTranslations[state.uiLang];
  statusBanner.hidden = false;
  statusBanner.dataset.state = status.type;
  statusTitle.textContent = formatString(copy[status.titleKey], status.values);
  statusMessage.textContent = formatString(copy[status.messageKey], status.values);
}

function showStatus(type, titleKey, messageKey, values = {}) {
  state.baseStatus = { type, titleKey, messageKey, values };
  renderStatus();
}

function flashStatus(type, titleKey, messageKey, values = {}) {
  window.clearTimeout(state.statusTimer);
  renderStatus({ type, titleKey, messageKey, values });
  state.statusTimer = window.setTimeout(() => renderStatus(), 4200);
}

async function invokeFunction(functionName, body) {
  const response = await fetch(`${config.supabaseUrl}/functions/v1/${functionName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`
    },
    body: JSON.stringify(body)
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(payload?.error || payload?.message || "Function request failed");
    error.status = response.status;
    throw error;
  }

  return payload;
}

function normalizeTranslatedFields(payload) {
  const source = payload?.fields || payload || {};

  return {
    conditions: cleanText(source.conditions),
    allergies: cleanText(source.allergies),
    medications: cleanText(source.medications),
    devices: cleanText(source.devices),
    notes: cleanText(source.notes)
  };
}

async function requestTranslation({ sourceLanguage, targetLanguage, fields }) {
  if (!config.translationFunctionName || !hasSupabaseConfig()) {
    const error = new Error("Translation function is not configured");
    error.status = 404;
    throw error;
  }

  const payload = await invokeFunction(config.translationFunctionName, {
    sourceLanguage,
    targetLanguage,
    fields
  });

  return normalizeTranslatedFields(payload);
}

async function ensureTranslation(raw, targetLanguage, options = {}) {
  const sourceFields = syncTranslationSource(raw);
  const sourceLanguage = state.translation.sourceLanguage;
  const target = normalizeLanguage(targetLanguage);

  if (target === sourceLanguage) {
    return sourceFields;
  }

  if (!hasMedicalContent(sourceFields)) {
    const empty = emptyMedicalFields();
    state.translation.results[target] = empty;
    return empty;
  }

  if (state.translation.results[target]) {
    return state.translation.results[target];
  }

  const pendingKey = `${state.translation.signature}:${target}`;
  if (state.translation.pendingKey === pendingKey && state.translation.pendingPromise) {
    return state.translation.pendingPromise;
  }

  const promise = requestTranslation({
    sourceLanguage,
    targetLanguage: target,
    fields: sourceFields
  })
    .then((translated) => {
      state.translation.results[target] = translated;
      state.translation.pendingKey = "";
      state.translation.pendingPromise = null;
      return translated;
    })
    .catch((error) => {
      state.translation.pendingKey = "";
      state.translation.pendingPromise = null;
      throw error;
    });

  state.translation.pendingKey = pendingKey;
  state.translation.pendingPromise = promise;

  if (options.immediate) {
    return promise;
  }

  return promise.catch(() => null);
}

function scheduleTranslation(raw, targetLanguage) {
  window.clearTimeout(state.translation.debounceTimer);
  state.translation.debounceTimer = window.setTimeout(() => {
    ensureTranslation(raw, targetLanguage)
      .then(() => renderPreview())
      .catch((error) => {
        console.warn("Preview translation failed", error);
      });
  }, 240);
}

function buildPayload(raw, sourceFields, translatedFields) {
  const sourceLanguage = normalizeLanguage(raw.default_language);

  return {
    public_slug: raw.public_slug,
    default_language: sourceLanguage,
    full_name: raw.full_name,
    blood_type: raw.blood_type || null,
    insurance: raw.insurance || null,
    doctor: raw.doctor || null,
    clinic: raw.clinic || null,
    conditions_en: sourceLanguage === "en" ? sourceFields.conditions : translatedFields.conditions,
    conditions_es: sourceLanguage === "es" ? sourceFields.conditions : translatedFields.conditions,
    allergies_en: sourceLanguage === "en" ? sourceFields.allergies : translatedFields.allergies,
    allergies_es: sourceLanguage === "es" ? sourceFields.allergies : translatedFields.allergies,
    medications_en: sourceLanguage === "en" ? sourceFields.medications : translatedFields.medications,
    medications_es: sourceLanguage === "es" ? sourceFields.medications : translatedFields.medications,
    devices_en: sourceLanguage === "en" ? sourceFields.devices : translatedFields.devices,
    devices_es: sourceLanguage === "es" ? sourceFields.devices : translatedFields.devices,
    notes_en: sourceLanguage === "en" ? sourceFields.notes : translatedFields.notes,
    notes_es: sourceLanguage === "es" ? sourceFields.notes : translatedFields.notes,
    emergency_contact_1_name: raw.emergency_contact_1_name || null,
    emergency_contact_1_phone: buildPhone(
      raw.emergency_contact_1_country_code,
      raw.emergency_contact_1_phone_local
    ) || null,
    emergency_contact_1_whatsapp:
      buildWhatsappNumber(raw.emergency_contact_1_country_code, raw.emergency_contact_1_phone_local) || null,
    emergency_contact_2_name: raw.emergency_contact_2_name || null,
    emergency_contact_2_phone: buildPhone(
      raw.emergency_contact_2_country_code,
      raw.emergency_contact_2_phone_local
    ) || null,
    emergency_contact_2_whatsapp:
      buildWhatsappNumber(raw.emergency_contact_2_country_code, raw.emergency_contact_2_phone_local) || null,
    full_record_url: raw.full_record_url || null,
    is_public: raw.is_public
  };
}

function recordToFormValues(record) {
  const sourceLanguage = normalizeLanguage(record.default_language || "es");
  const targetLanguage = otherLanguage(sourceLanguage);
  const sourceFields = medicalFieldsFromRecord(record, sourceLanguage);
  const hasTargetData = medicalFieldKeys.some((key) => cleanText(record[`${key}_${targetLanguage}`]));
  const translatedFields = hasTargetData ? medicalFieldsFromRecord(record, targetLanguage) : null;
  const phone1 = parsePhone(record.emergency_contact_1_phone);
  const phone2 = parsePhone(record.emergency_contact_2_phone);

  state.translation.sourceLanguage = sourceLanguage;
  state.translation.signature = buildTranslationSignature(sourceLanguage, sourceFields);
  state.translation.results = {
    es: sourceLanguage === "es" ? sourceFields : translatedFields,
    en: sourceLanguage === "en" ? sourceFields : translatedFields
  };

  return {
    full_name: cleanText(record.full_name),
    public_slug: cleanText(record.public_slug),
    default_language: sourceLanguage,
    blood_type: cleanText(record.blood_type),
    insurance: cleanText(record.insurance),
    doctor: cleanText(record.doctor),
    clinic: cleanText(record.clinic),
    conditions: sourceFields.conditions,
    allergies: sourceFields.allergies,
    medications: sourceFields.medications,
    devices: sourceFields.devices,
    notes: sourceFields.notes,
    emergency_contact_1_name: cleanText(record.emergency_contact_1_name),
    emergency_contact_1_country_code: phone1.countryCode,
    emergency_contact_1_phone_local: phone1.localNumber,
    emergency_contact_2_name: cleanText(record.emergency_contact_2_name),
    emergency_contact_2_country_code: phone2.countryCode,
    emergency_contact_2_phone_local: phone2.localNumber,
    full_record_url: cleanText(record.full_record_url),
    is_public: Boolean(record.is_public ?? true)
  };
}

function populateForm(values) {
  Object.entries(values).forEach(([key, value]) => {
    const field = form.elements[key];
    if (!field) {
      return;
    }

    if (field.type === "checkbox") {
      field.checked = Boolean(value);
      return;
    }

    field.value = value ?? "";
  });
}

function setUILanguage(lang) {
  state.uiLang = normalizeLanguage(lang);
  root.lang = state.uiLang;

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (setupTranslations[state.uiLang][key]) {
      node.textContent = setupTranslations[state.uiLang][key];
    }
  });

  uiLangButtons.forEach((button) => {
    const active = button.dataset.lang === state.uiLang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  setBloodPlaceholder();
  renderStatus();
  renderPreview();
}

function setPreviewLanguage(lang) {
  state.previewLang = normalizeLanguage(lang);

  previewLangButtons.forEach((button) => {
    const active = button.dataset.previewLang === state.previewLang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderPreview();
}

function renderPreview() {
  const raw = getFormState();
  const displayUrl = buildDisplayUrl(raw.public_slug);
  const sourceFields = syncTranslationSource(raw);
  const previewCopy = setupTranslations[state.previewLang];
  const previewFields =
    state.previewLang === raw.default_language
      ? sourceFields
      : state.translation.results[state.previewLang] || createLoadingMedicalFields();

  if (state.previewLang !== raw.default_language && !state.translation.results[state.previewLang]) {
    scheduleTranslation(raw, state.previewLang);
  }

  previewCopyNodes.forEach((node) => {
    const key = node.dataset.previewCopy;
    if (previewCopy[key]) {
      node.textContent = previewCopy[key];
    }
  });

  document.querySelector('[data-preview="full_name"]').textContent = raw.full_name || "-";
  document.querySelector('[data-preview="conditions"]').textContent = previewFields.conditions || "-";
  document.querySelector('[data-preview="allergies"]').textContent = previewFields.allergies || "-";
  document.querySelector('[data-preview="medications"]').textContent = previewFields.medications || "-";
  document.querySelector('[data-preview="blood_type"]').textContent = raw.blood_type || "-";
  document.querySelector('[data-preview="doctor"]').textContent = raw.doctor || "-";
  document.querySelector('[data-preview="clinic"]').textContent = raw.clinic || "-";
  document.querySelector('[data-preview="insurance"]').textContent = raw.insurance || "-";

  const notes = splitNotes(previewFields.notes);
  previewNoteNodes.forEach((node, index) => {
    node.textContent = notes[index] || (index === 0 ? "-" : "");
  });

  generatedUrlNodes.forEach((node) => {
    node.textContent = displayUrl;
  });

  openPublicLinks.forEach((link) => {
    link.href = displayUrl;
  });
}

function syncSlugFromName() {
  if (state.slugTouched) {
    return;
  }

  form.elements.public_slug.value = slugify(form.elements.full_name.value);
}

async function copyText(value) {
  if (!navigator.clipboard?.writeText) {
    window.prompt("Copy this URL", value);
    return false;
  }

  await navigator.clipboard.writeText(value);
  return true;
}

async function copyGeneratedUrl() {
  const copied = await copyText(buildDisplayUrl(form.elements.public_slug.value)).catch(() => false);
  if (copied) {
    flashStatus("success", "statusCopiedTitle", "statusCopiedMessage");
  }
}

function openSavingOverlay() {
  document.querySelector("[data-saving-overlay]").classList.remove("is-hidden");
}

function closeSavingOverlay() {
  document.querySelector("[data-saving-overlay]").classList.add("is-hidden");
}

function openSuccessModal(url) {
  state.lastSavedUrl = url;
  successUrlNode.textContent = url;
  document.querySelector("[data-success-modal]").classList.remove("is-hidden");
}

function closeSuccessModal() {
  document.querySelector("[data-success-modal]").classList.add("is-hidden");
}

async function saveProfile(event) {
  event.preventDefault();

  const raw = getFormState();
  const sourceFields = syncTranslationSource(raw);
  form.elements.public_slug.value = raw.public_slug;

  if (!raw.full_name || !raw.public_slug) {
    flashStatus("warning", "statusValidationTitle", "statusValidationMessage");
    renderPreview();
    return;
  }

  if (!hasSupabaseConfig() || !config.allowDirectProfileWrite) {
    showStatus("warning", "statusConfigTitle", "statusConfigMessage");
    return;
  }

  openSavingOverlay();
  showStatus("loading", "statusSavingTitle", "statusSavingMessage");

  try {
    let translatedFields = emptyMedicalFields();

    if (hasMedicalContent(sourceFields)) {
      try {
        translatedFields = await ensureTranslation(raw, otherLanguage(raw.default_language), { immediate: true });
      } catch (error) {
        closeSavingOverlay();
        if (error.status === 404) {
          showStatus("error", "statusTranslateMissingTitle", "statusTranslateMissingMessage");
        } else {
          showStatus("error", "statusTranslateErrorTitle", "statusTranslateErrorMessage");
        }
        return;
      }
    }

    const payload = buildPayload(raw, sourceFields, translatedFields);
    const { error } = await getClient()
      .from(config.profilesWriteTable || "medical_profiles")
      .upsert(payload, { onConflict: "public_slug" });

    if (error) {
      throw error;
    }

    const url = buildDisplayUrl(raw.public_slug);
    showStatus("success", "statusSavedTitle", "statusSavedMessage");
    openSuccessModal(url);
    renderPreview();
  } catch (error) {
    console.warn("Save failed", error);
    showStatus("error", "statusSaveErrorTitle", "statusSaveErrorMessage");
  } finally {
    closeSavingOverlay();
  }
}

async function loadExistingProfile() {
  const slug = cleanText(new URLSearchParams(window.location.search).get("slug"));

  if (!slug || !hasSupabaseConfig()) {
    return;
  }

  try {
    const { data, error } = await getClient()
      .from(config.profilesWriteTable || "medical_profiles")
      .select("*")
      .eq(config.lookupField || "public_slug", slug)
      .maybeSingle();

    if (error || !data) {
      throw error || new Error("Profile not found");
    }

    populateForm(recordToFormValues(data));
    state.slugTouched = true;
    state.lastSavedUrl = buildDisplayUrl(data.public_slug);
    setPreviewLanguage(data.default_language || "es");
    flashStatus("success", "statusLoadedTitle", "statusLoadedMessage", { slug });
  } catch (error) {
    console.warn("Profile load failed", error);
    flashStatus("warning", "statusLoadErrorTitle", "statusLoadErrorMessage", { slug });
  }
}

function bindEvents() {
  uiLangButtons.forEach((button) => {
    button.addEventListener("click", () => setUILanguage(button.dataset.lang));
  });

  previewLangButtons.forEach((button) => {
    button.addEventListener("click", () => setPreviewLanguage(button.dataset.previewLang));
  });

  form.elements.full_name.addEventListener("input", () => {
    syncSlugFromName();
    renderPreview();
  });

  form.elements.public_slug.addEventListener("input", () => {
    state.slugTouched = true;
    form.elements.public_slug.value = slugify(form.elements.public_slug.value);
    renderPreview();
  });

  form.addEventListener("input", (event) => {
    if (event.target.name !== "full_name" && event.target.name !== "public_slug") {
      renderPreview();
    }
  });

  form.addEventListener("change", (event) => {
    if (event.target.name === "default_language") {
      setPreviewLanguage(event.target.value);
      return;
    }

    renderPreview();
  });

  form.addEventListener("submit", saveProfile);

  document.querySelector('[data-action="copy-url"]').addEventListener("click", copyGeneratedUrl);
  document.querySelector('[data-action="copy-success-url"]').addEventListener("click", async () => {
    const copied = await copyText(state.lastSavedUrl).catch(() => false);
    if (copied) {
      flashStatus("success", "statusCopiedTitle", "statusCopiedMessage");
    }
  });

  document.querySelectorAll('[data-action="close-success"]').forEach((button) => {
    button.addEventListener("click", closeSuccessModal);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSuccessModal();
    }
  });
}

async function init() {
  populateCountryCodes();
  setupHelperPlaceholders();
  clearDraftFields();
  bindEvents();
  showStatus(
    hasSupabaseConfig() ? "success" : "warning",
    hasSupabaseConfig() ? "statusReadyTitle" : "statusConfigTitle",
    hasSupabaseConfig() ? "statusReadyMessage" : "statusConfigMessage"
  );
  setUILanguage(state.uiLang);
  setPreviewLanguage(form.elements.default_language.value || state.uiLang);
  await loadExistingProfile();
  renderPreview();
}

init();
