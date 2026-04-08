const setupTranslations = {
  es: {
    brandTagline: "Portal de configuracion para perfiles medicos",
    publicLandingLink: "Landing publico",
    heroKicker: "Profile builder",
    heroTitle: "Llena un perfil medico claro, bilingue y listo para escanear.",
    heroText:
      "Esta pagina sirve para capturar toda la informacion del usuario, generar la URL del NFC y revisar en vivo como se vera el landing publico al escanear.",
    heroPoint1: "Preview en vivo del landing medico",
    heroPoint2: "Campos separados para EN y ES",
    heroPoint3: "Guardado preparado para Supabase",
    heroCardLabel: "Recommended flow",
    heroCard1: "Llena el perfil del paciente una sola vez.",
    heroCard2: "Revisa la vista bilingue antes de publicarlo.",
    heroCard3: "Guarda en Supabase y graba la URL generada en el NFC.",
    step1: "1. Identidad",
    step2: "2. Detalle medico",
    step3: "3. Contactos",
    step4: "4. Publicacion",
    identityKicker: "Identidad",
    identityTitle: "Perfil base y ruta publica del NFC",
    fieldFullName: "Nombre completo",
    fieldSlug: "Slug publico",
    fieldDefaultLanguage: "Idioma por defecto",
    fieldBloodType: "Tipo de sangre",
    fieldDoctor: "Medico",
    fieldClinic: "Clinica",
    fieldInsurance: "Seguro",
    medicalKicker: "Medical details",
    medicalTitle: "Escribe el perfil de emergencia en ambos idiomas",
    fieldConditionsEn: "Conditions (EN)",
    fieldConditionsEs: "Condiciones (ES)",
    fieldAllergiesEn: "Severe allergies (EN)",
    fieldAllergiesEs: "Alergias graves (ES)",
    fieldMedicationsEn: "Critical medications (EN)",
    fieldMedicationsEs: "Medicamentos criticos (ES)",
    fieldDevicesEn: "Medical devices (EN)",
    fieldDevicesEs: "Dispositivos medicos (ES)",
    fieldNotesEn: "Important notes (EN)",
    fieldNotesEs: "Notas importantes (ES)",
    contactsKicker: "Contactos",
    contactsTitle: "Contactos de emergencia y acceso extendido",
    contact1Title: "Contacto de emergencia 1",
    contact2Title: "Contacto de emergencia 2",
    fieldContactName: "Nombre",
    fieldContactPhone: "Telefono",
    fieldWhatsapp: "WhatsApp",
    publishKicker: "Publish",
    publishTitle: "Privacidad, expediente y URL generada",
    fieldRecordUrl: "URL del expediente completo",
    fieldIsPublic: "Perfil publico de emergencia",
    generatedUrlLabel: "URL publica generada",
    copyUrl: "Copiar URL",
    openPublic: "Abrir preview publico",
    saveProfile: "Guardar perfil",
    previewKicker: "Vista previa",
    previewTitle: "Asi se vera el landing al escanear",
    criticalBadge: "Critico",
    screenOne: "Pantalla 1",
    emergencyTitle: "Informacion Medica de Emergencia",
    labelName: "Nombre",
    labelConditions: "Condiciones",
    labelAllergies: "Alergias graves",
    labelMedications: "Medicamentos criticos",
    importantNotes: "Notas importantes",
    detailBadge: "Detalle",
    screenTwo: "Pantalla 2",
    additionalTitle: "Informacion Medica Adicional",
    labelBloodType: "Tipo de sangre",
    labelDoctor: "Medico",
    labelClinic: "Clinica",
    labelInsurance: "Seguro",
    statusPrototypeTitle: "Modo constructor listo",
    statusPrototypeMessage:
      "Configura un proyecto Supabase exclusivo para NFC Medico, separado del de ventas al mayoreo, para guardar perfiles reales.",
    statusConnectedTitle: "Listo para guardar",
    statusConnectedMessage:
      "La configuracion actual puede conectarse a un proyecto dedicado de Supabase para NFC Medico.",
    statusLoadingTitle: "Cargando perfil existente",
    statusLoadingMessage: "Buscando el slug {slug} para editarlo.",
    statusLoadedTitle: "Perfil cargado",
    statusLoadedMessage: "Se cargo el perfil {slug} para edicion.",
    statusSaveSuccessTitle: "Perfil guardado",
    statusSaveSuccessMessage: "El perfil {slug} ya quedo listo en Supabase.",
    statusCopyTitle: "URL copiada",
    statusCopyMessage: "La URL publica ya se copio al portapapeles.",
    statusMissingTitle: "Faltan datos obligatorios",
    statusMissingMessage: "Completa al menos el nombre y el slug publico antes de guardar.",
    statusConfigErrorTitle: "Guardado deshabilitado",
    statusConfigErrorMessage:
      "Conecta este portal a un proyecto Supabase separado para NFC Medico antes de usar guardado real.",
    statusSaveErrorTitle: "No se pudo guardar",
    statusSaveErrorMessage:
      "Supabase devolvio un error al intentar guardar el perfil. Revisa tabla, RLS y credenciales.",
    statusDirectWriteOffTitle: "Guardado directo bloqueado",
    statusDirectWriteOffMessage:
      "allowDirectProfileWrite esta en false. Mantenerlo asi es ideal si despues moveras el guardado a un backend propio."
  },
  en: {
    brandTagline: "Setup portal for medical NFC profiles",
    publicLandingLink: "Public landing",
    heroKicker: "Profile builder",
    heroTitle: "Create a clear, bilingual, scan-ready medical profile.",
    heroText:
      "This page captures the patient profile, generates the NFC URL, and shows a live preview of the public emergency landing before publishing.",
    heroPoint1: "Live preview of the medical landing",
    heroPoint2: "Separate fields for EN and ES",
    heroPoint3: "Save flow prepared for Supabase",
    heroCardLabel: "Recommended flow",
    heroCard1: "Fill the patient profile once.",
    heroCard2: "Review the bilingual view before publishing.",
    heroCard3: "Save to Supabase and write the generated URL to the NFC tag.",
    step1: "1. Identity",
    step2: "2. Medical details",
    step3: "3. Contacts",
    step4: "4. Publish",
    identityKicker: "Identity",
    identityTitle: "Basic profile and public NFC route",
    fieldFullName: "Full name",
    fieldSlug: "Public slug",
    fieldDefaultLanguage: "Default language",
    fieldBloodType: "Blood type",
    fieldDoctor: "Doctor",
    fieldClinic: "Clinic",
    fieldInsurance: "Insurance",
    medicalKicker: "Medical details",
    medicalTitle: "Write the emergency profile in both languages",
    fieldConditionsEn: "Conditions (EN)",
    fieldConditionsEs: "Conditions (ES)",
    fieldAllergiesEn: "Severe allergies (EN)",
    fieldAllergiesEs: "Severe allergies (ES)",
    fieldMedicationsEn: "Critical medications (EN)",
    fieldMedicationsEs: "Critical medications (ES)",
    fieldDevicesEn: "Medical devices (EN)",
    fieldDevicesEs: "Medical devices (ES)",
    fieldNotesEn: "Important notes (EN)",
    fieldNotesEs: "Important notes (ES)",
    contactsKicker: "Contacts",
    contactsTitle: "Emergency contacts and extended access",
    contact1Title: "Emergency contact 1",
    contact2Title: "Emergency contact 2",
    fieldContactName: "Name",
    fieldContactPhone: "Phone",
    fieldWhatsapp: "WhatsApp",
    publishKicker: "Publish",
    publishTitle: "Privacy, records and generated URL",
    fieldRecordUrl: "Full medical record URL",
    fieldIsPublic: "Public emergency profile",
    generatedUrlLabel: "Generated public URL",
    copyUrl: "Copy URL",
    openPublic: "Open public preview",
    saveProfile: "Save profile",
    previewKicker: "Live preview",
    previewTitle: "How the public scan page will look",
    criticalBadge: "Critical",
    screenOne: "Screen 1",
    emergencyTitle: "Emergency Medical Info",
    labelName: "Name",
    labelConditions: "Condition(s)",
    labelAllergies: "Severe allergies",
    labelMedications: "Critical medications",
    importantNotes: "Important notes",
    detailBadge: "Detailed",
    screenTwo: "Screen 2",
    additionalTitle: "Additional Medical Information",
    labelBloodType: "Blood type",
    labelDoctor: "Doctor",
    labelClinic: "Clinic",
    labelInsurance: "Insurance",
    statusPrototypeTitle: "Builder mode ready",
    statusPrototypeMessage:
      "Point this portal to a dedicated Supabase project for NFC Medico, separate from the wholesale business project, before saving live profiles.",
    statusConnectedTitle: "Ready to save",
    statusConnectedMessage:
      "The current configuration can connect to a dedicated NFC Medico Supabase project.",
    statusLoadingTitle: "Loading existing profile",
    statusLoadingMessage: "Looking up slug {slug} for editing.",
    statusLoadedTitle: "Profile loaded",
    statusLoadedMessage: "Profile {slug} was loaded for editing.",
    statusSaveSuccessTitle: "Profile saved",
    statusSaveSuccessMessage: "Profile {slug} is now stored in Supabase.",
    statusCopyTitle: "URL copied",
    statusCopyMessage: "The public URL was copied to the clipboard.",
    statusMissingTitle: "Missing required data",
    statusMissingMessage: "Fill at least the full name and public slug before saving.",
    statusConfigErrorTitle: "Saving disabled",
    statusConfigErrorMessage:
      "Connect this portal to a separate NFC Medico Supabase project before using live saves.",
    statusSaveErrorTitle: "Save failed",
    statusSaveErrorMessage:
      "Supabase returned an error while saving the profile. Review table, RLS, and credentials.",
    statusDirectWriteOffTitle: "Direct writes are off",
    statusDirectWriteOffMessage:
      "allowDirectProfileWrite is false. Keeping it that way is ideal if you plan to move writes into your own backend."
  }
};

const defaultProfile = {
  full_name: "John Doe",
  public_slug: "john-doe-001",
  default_language: "en",
  blood_type: "O+",
  doctor: "Dr. Smith",
  clinic: "XYZ Medical Center",
  insurance: "BlueCross",
  conditions_en: "Type 1 Diabetes",
  conditions_es: "Diabetes Tipo 1",
  allergies_en: "Penicillin",
  allergies_es: "Penicilina",
  medications_en: "Insulin",
  medications_es: "Insulina",
  devices_en: "Insulin Pump",
  devices_es: "Bomba de insulina",
  notes_en: "Patient uses insulin\nRisk of hypoglycemia\nMay require immediate glucose",
  notes_es: "Usa insulina\nRiesgo de hipoglucemia\nPuede requerir glucosa inmediata",
  emergency_contact_1_name: "Jane Doe",
  emergency_contact_1_phone: "+1 (555) 123-4567",
  emergency_contact_1_whatsapp: "15551234567",
  emergency_contact_2_name: "Mike Doe",
  emergency_contact_2_phone: "+1 (555) 987-6543",
  emergency_contact_2_whatsapp: "15559876543",
  full_record_url: "",
  is_public: true
};

const config = window.NFC_MEDICO_CONFIG || {};
const form = document.getElementById("profile-form");
const textNodes = document.querySelectorAll("[data-i18n]");
const previewCopyNodes = document.querySelectorAll("[data-preview-copy]");
const previewValueNodes = document.querySelectorAll("[data-preview]");
const previewNoteNodes = document.querySelectorAll("[data-preview-note]");
const langButtons = document.querySelectorAll("[data-lang]");
const previewLangButtons = document.querySelectorAll("[data-preview-lang]");
const generatedUrlNodes = document.querySelectorAll("[data-generated-url], [data-generated-url-inline]");
const openPublicLink = document.querySelector('[data-action="open-public"]');
const copyUrlButton = document.querySelector('[data-action="copy-url"]');
const statusBanner = document.querySelector("[data-form-status]");
const statusTitle = document.querySelector("[data-form-status-title]");
const statusMessage = document.querySelector("[data-form-status-message]");

const state = {
  uiLang: detectInitialLanguage(),
  previewLang: "es",
  client: null,
  slugTouched: false,
  baseStatus: null,
  statusTimer: null
};

function detectInitialLanguage() {
  const queryLang = new URLSearchParams(window.location.search).get("lang");
  if (queryLang === "en" || queryLang === "es") {
    return queryLang;
  }

  return navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

function normalizeLanguage(lang) {
  return lang === "en" ? "en" : "es";
}

function cleanText(value) {
  return String(value ?? "").trim();
}

function slugify(value) {
  return cleanText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function getClient() {
  if (!state.client) {
    state.client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
  }

  return state.client;
}

function hasSupabaseConfig() {
  return Boolean(config.supabaseUrl && config.supabaseAnonKey && window.supabase?.createClient);
}

function formatString(template, values = {}) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function populateForm(values) {
  Object.entries(values).forEach(([key, value]) => {
    const field = form.elements.namedItem(key);
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

function getFormState() {
  const data = Object.fromEntries(new FormData(form).entries());
  data.is_public = form.elements.is_public.checked;
  return data;
}

function normalizePayload(raw) {
  return {
    full_name: cleanText(raw.full_name),
    public_slug: slugify(raw.public_slug || raw.full_name),
    default_language: normalizeLanguage(raw.default_language),
    blood_type: cleanText(raw.blood_type),
    doctor: cleanText(raw.doctor),
    clinic: cleanText(raw.clinic),
    insurance: cleanText(raw.insurance),
    conditions_en: cleanText(raw.conditions_en),
    conditions_es: cleanText(raw.conditions_es),
    allergies_en: cleanText(raw.allergies_en),
    allergies_es: cleanText(raw.allergies_es),
    medications_en: cleanText(raw.medications_en),
    medications_es: cleanText(raw.medications_es),
    devices_en: cleanText(raw.devices_en),
    devices_es: cleanText(raw.devices_es),
    notes_en: cleanText(raw.notes_en),
    notes_es: cleanText(raw.notes_es),
    emergency_contact_1_name: cleanText(raw.emergency_contact_1_name),
    emergency_contact_1_phone: cleanText(raw.emergency_contact_1_phone),
    emergency_contact_1_whatsapp: cleanText(raw.emergency_contact_1_whatsapp),
    emergency_contact_2_name: cleanText(raw.emergency_contact_2_name),
    emergency_contact_2_phone: cleanText(raw.emergency_contact_2_phone),
    emergency_contact_2_whatsapp: cleanText(raw.emergency_contact_2_whatsapp),
    full_record_url: cleanText(raw.full_record_url),
    is_public: Boolean(raw.is_public),
    updated_at: new Date().toISOString()
  };
}

function resolveLocalizedValue(record, baseField, lang) {
  const fallbackLang = lang === "en" ? "es" : "en";
  return cleanText(record[`${baseField}_${lang}`] || record[baseField] || record[`${baseField}_${fallbackLang}`]);
}

function resolveNotes(record, lang) {
  const source = resolveLocalizedValue(record, "notes", lang);
  return source
    .split(/\r?\n|;/)
    .map((item) => item.replace(/^[-*•]\s*/, "").trim())
    .filter(Boolean);
}

function buildDisplayUrl(slug) {
  const normalizedSlug = slug || "new-profile";
  const base = cleanText(config.siteBaseUrl || "https://tudominio.com/med/{slug}");
  const encodedSlug = encodeURIComponent(normalizedSlug);

  if (base.includes("{slug}")) {
    return base.replaceAll("{slug}", encodedSlug);
  }

  return `${base.replace(/\/$/, "")}/${encodedSlug}`;
}

function buildPreviewUrl(slug) {
  const previewUrl = new URL("./index.html", window.location.href);
  previewUrl.searchParams.set("slug", slug || "new-profile");
  previewUrl.searchParams.set("lang", state.previewLang);
  return previewUrl.toString();
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

function setUILanguage(lang) {
  state.uiLang = normalizeLanguage(lang);
  document.documentElement.lang = state.uiLang;

  const copy = setupTranslations[state.uiLang];

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.uiLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderStatus();
  renderPreview();
}

function setPreviewLanguage(lang) {
  state.previewLang = normalizeLanguage(lang);

  previewLangButtons.forEach((button) => {
    const isActive = button.dataset.previewLang === state.previewLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderPreview();
}

function renderPreview() {
  const data = normalizePayload(getFormState());
  const copy = setupTranslations[state.previewLang];
  const notes = resolveNotes(data, state.previewLang);
  const slug = data.public_slug || "new-profile";
  const displayUrl = buildDisplayUrl(slug);

  previewCopyNodes.forEach((node) => {
    const key = node.dataset.previewCopy;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  const previewValues = {
    full_name: data.full_name || "N/A",
    conditions: resolveLocalizedValue(data, "conditions", state.previewLang) || "N/A",
    allergies: resolveLocalizedValue(data, "allergies", state.previewLang) || "N/A",
    medications: resolveLocalizedValue(data, "medications", state.previewLang) || "N/A",
    blood_type: data.blood_type || "N/A",
    doctor: data.doctor || "N/A",
    clinic: data.clinic || "N/A",
    insurance: data.insurance || "N/A"
  };

  previewValueNodes.forEach((node) => {
    node.textContent = previewValues[node.dataset.preview] || "N/A";
  });

  previewNoteNodes.forEach((node) => {
    node.textContent = notes[Number(node.dataset.previewNote)] || "";
  });

  generatedUrlNodes.forEach((node) => {
    node.textContent = displayUrl;
  });

  openPublicLink.href = buildPreviewUrl(slug);
  document.title = `${data.full_name || "NFC Medico"} | Setup Portal`;
}

function syncSlugFromName() {
  const fullName = form.elements.full_name;
  const slug = form.elements.public_slug;

  if (!state.slugTouched || !cleanText(slug.value)) {
    slug.value = slugify(fullName.value);
  }
}

async function copyGeneratedUrl() {
  const slug = slugify(form.elements.public_slug.value || form.elements.full_name.value);
  const url = buildDisplayUrl(slug);

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      window.prompt("Copy this URL", url);
    }

    flashStatus("success", "statusCopyTitle", "statusCopyMessage");
  } catch (error) {
    console.warn("Copy failed", error);
    window.prompt("Copy this URL", url);
  }
}

async function saveProfile(event) {
  event.preventDefault();

  const payload = normalizePayload(getFormState());

  if (!payload.full_name || !payload.public_slug) {
    showStatus("error", "statusMissingTitle", "statusMissingMessage");
    renderPreview();
    return;
  }

  form.elements.public_slug.value = payload.public_slug;

  if (!hasSupabaseConfig()) {
    showStatus("warning", "statusConfigErrorTitle", "statusConfigErrorMessage");
    renderPreview();
    return;
  }

  if (!config.allowDirectProfileWrite) {
    showStatus("warning", "statusDirectWriteOffTitle", "statusDirectWriteOffMessage");
    renderPreview();
    return;
  }

  try {
    const { error } = await getClient()
      .from(config.profilesWriteTable || "medical_profiles")
      .upsert([payload], { onConflict: config.lookupField || "public_slug" });

    if (error) {
      throw error;
    }

    const url = new URL(window.location.href);
    url.searchParams.set("slug", payload.public_slug);
    window.history.replaceState({}, "", url);

    showStatus("success", "statusSaveSuccessTitle", "statusSaveSuccessMessage", {
      slug: payload.public_slug
    });
    renderPreview();
  } catch (error) {
    console.warn("Save failed", error);
    showStatus("error", "statusSaveErrorTitle", "statusSaveErrorMessage");
    renderPreview();
  }
}

async function loadExistingProfile() {
  const slug = new URLSearchParams(window.location.search).get("slug");

  if (!slug) {
    if (hasSupabaseConfig()) {
      showStatus("success", "statusConnectedTitle", "statusConnectedMessage");
    } else {
      showStatus("warning", "statusPrototypeTitle", "statusPrototypeMessage");
    }
    return;
  }

  if (!hasSupabaseConfig()) {
    showStatus("warning", "statusPrototypeTitle", "statusPrototypeMessage");
    return;
  }

  showStatus("loading", "statusLoadingTitle", "statusLoadingMessage", { slug });

  try {
    const { data, error } = await getClient()
      .from(config.profilesWriteTable || "medical_profiles")
      .select("*")
      .eq(config.lookupField || "public_slug", slug)
      .maybeSingle();

    if (error || !data) {
      throw error || new Error("Profile not found");
    }

    populateForm({ ...defaultProfile, ...data });
    state.slugTouched = true;
    setPreviewLanguage(data.default_language || state.previewLang);
    showStatus("success", "statusLoadedTitle", "statusLoadedMessage", { slug });
  } catch (error) {
    console.warn("Load existing profile failed", error);
    showStatus("error", "statusSaveErrorTitle", "statusSaveErrorMessage");
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setUILanguage(button.dataset.lang));
});

previewLangButtons.forEach((button) => {
  button.addEventListener("click", () => setPreviewLanguage(button.dataset.previewLang));
});

form.addEventListener("input", (event) => {
  if (event.target.name === "full_name") {
    syncSlugFromName();
  }

  if (event.target.name === "public_slug") {
    event.target.value = slugify(event.target.value);
    state.slugTouched = Boolean(cleanText(event.target.value));
  }

  renderPreview();
});

form.addEventListener("submit", saveProfile);
copyUrlButton.addEventListener("click", copyGeneratedUrl);

populateForm(defaultProfile);
setUILanguage(state.uiLang);
setPreviewLanguage(defaultProfile.default_language);
loadExistingProfile().finally(renderPreview);
