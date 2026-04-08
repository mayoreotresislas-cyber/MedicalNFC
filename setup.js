const setupTranslations = {
  es: {
    brandTagline: "Portal de configuracion para perfiles medicos",
    publicLandingLink: "Landing publico",
    heroKicker: "Profile builder",
    heroTitle: "Llena un perfil medico simple, profesional y listo para escanear.",
    heroText:
      "Captura toda la informacion una sola vez, revisa el preview en vivo y guarda el URL publico que vas a usar despues en el NFC.",
    heroPoint1: "Un solo formulario, sin duplicar idiomas",
    heroPoint2: "Preview publico en EN y ES",
    heroPoint3: "Guardado listo para Supabase",
    heroCardLabel: "Recommended flow",
    heroCard1: "Llena el perfil del paciente una sola vez.",
    heroCard2: "Revisa el preview en vivo antes de publicarlo.",
    heroCard3: "Guarda y conserva el URL publico generado.",
    step1: "1. Identidad",
    step2: "2. Informacion medica",
    step3: "3. Contactos",
    step4: "4. Publicacion",
    identityKicker: "Identidad",
    identityTitle: "Perfil base y ruta publica",
    fieldFullName: "Nombre completo",
    fieldSlug: "Slug publico",
    fieldProfileLanguage: "Idioma del perfil",
    fieldBloodType: "Tipo de sangre",
    fieldDoctor: "Medico",
    fieldClinic: "Clinica",
    fieldInsurance: "Seguro",
    medicalKicker: "Informacion medica",
    medicalTitle: "Escribe los datos medicos una sola vez",
    fieldConditions: "Condiciones",
    fieldAllergies: "Alergias graves",
    fieldMedications: "Medicamentos criticos",
    fieldDevices: "Dispositivos medicos",
    fieldNotes: "Notas importantes",
    contactsKicker: "Contactos",
    contactsTitle: "Contactos de emergencia",
    contact1Title: "Contacto de emergencia 1",
    contact2Title: "Contacto de emergencia 2",
    fieldContactName: "Nombre",
    fieldCountryCode: "Codigo de pais",
    fieldContactPhone: "Telefono",
    publishKicker: "Publicacion",
    publishTitle: "Privacidad, expediente y URL generado",
    fieldRecordUrl: "URL del expediente completo",
    fieldIsPublic: "Perfil publico de emergencia",
    generatedUrlLabel: "URL publico generado",
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
    savingTitle: "Guardando perfil...",
    savingText: "Espera un momento mientras guardamos la informacion de forma segura.",
    successKicker: "Guardado",
    successTitle: "Perfil guardado con exito",
    successText: "Este es el URL publico que vas a conservar para el NFC.",
    closeSuccess: "Listo",
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
    statusCopyTitle: "URL copiado",
    statusCopyMessage: "El URL publico ya se copio al portapapeles.",
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
      "allowDirectProfileWrite esta en false. Mantenerlo asi es ideal si despues moveras el guardado a un backend propio.",
    bloodPlaceholder: "Selecciona tipo de sangre"
  },
  en: {
    brandTagline: "Setup portal for medical profiles",
    publicLandingLink: "Public landing",
    heroKicker: "Profile builder",
    heroTitle: "Create a clean, professional, scan-ready medical profile.",
    heroText:
      "Capture all information once, review the live preview, and keep the public URL you will later use for the NFC tag.",
    heroPoint1: "One form, no duplicate languages",
    heroPoint2: "Public preview in EN and ES",
    heroPoint3: "Ready-to-save Supabase flow",
    heroCardLabel: "Recommended flow",
    heroCard1: "Fill the patient profile once.",
    heroCard2: "Review the live preview before publishing.",
    heroCard3: "Save and keep the generated public URL.",
    step1: "1. Identity",
    step2: "2. Medical details",
    step3: "3. Contacts",
    step4: "4. Publish",
    identityKicker: "Identity",
    identityTitle: "Base profile and public route",
    fieldFullName: "Full name",
    fieldSlug: "Public slug",
    fieldProfileLanguage: "Profile language",
    fieldBloodType: "Blood type",
    fieldDoctor: "Doctor",
    fieldClinic: "Clinic",
    fieldInsurance: "Insurance",
    medicalKicker: "Medical details",
    medicalTitle: "Write the medical information once",
    fieldConditions: "Conditions",
    fieldAllergies: "Severe allergies",
    fieldMedications: "Critical medications",
    fieldDevices: "Medical devices",
    fieldNotes: "Important notes",
    contactsKicker: "Contacts",
    contactsTitle: "Emergency contacts",
    contact1Title: "Emergency contact 1",
    contact2Title: "Emergency contact 2",
    fieldContactName: "Name",
    fieldCountryCode: "Country code",
    fieldContactPhone: "Phone",
    publishKicker: "Publish",
    publishTitle: "Privacy, record, and generated URL",
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
    savingTitle: "Saving profile...",
    savingText: "Please wait while we store the information securely.",
    successKicker: "Saved",
    successTitle: "Profile saved successfully",
    successText: "This is the public URL you should keep for the NFC setup.",
    closeSuccess: "Done",
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
      "allowDirectProfileWrite is false. Keeping it that way is ideal if you plan to move writes into your own backend.",
    bloodPlaceholder: "Select blood type"
  }
};

const countryCodes = [
  { code: "+1", label: "US / Canada +1" },
  { code: "+52", label: "Mexico +52" },
  { code: "+34", label: "Spain +34" },
  { code: "+57", label: "Colombia +57" },
  { code: "+54", label: "Argentina +54" },
  { code: "+56", label: "Chile +56" },
  { code: "+51", label: "Peru +51" },
  { code: "+502", label: "Guatemala +502" },
  { code: "+503", label: "El Salvador +503" },
  { code: "+504", label: "Honduras +504" },
  { code: "+505", label: "Nicaragua +505" },
  { code: "+506", label: "Costa Rica +506" },
  { code: "+507", label: "Panama +507" }
];

const config = window.NFC_MEDICO_CONFIG || {};
const form = document.getElementById("profile-form");
const textNodes = document.querySelectorAll("[data-i18n]");
const previewCopyNodes = document.querySelectorAll("[data-preview-copy]");
const previewValueNodes = document.querySelectorAll("[data-preview]");
const previewNoteNodes = document.querySelectorAll("[data-preview-note]");
const langButtons = document.querySelectorAll("[data-lang]");
const previewLangButtons = document.querySelectorAll("[data-preview-lang]");
const generatedUrlNodes = document.querySelectorAll("[data-generated-url], [data-generated-url-inline]");
const openPublicLinks = document.querySelectorAll('[data-action="open-public"], [data-action="open-success-url"]');
const copyUrlButtons = document.querySelectorAll('[data-action="copy-url"], [data-action="copy-success-url"]');
const statusBanner = document.querySelector("[data-form-status]");
const statusTitle = document.querySelector("[data-form-status-title]");
const statusMessage = document.querySelector("[data-form-status-message]");
const savingOverlay = document.querySelector("[data-saving-overlay]");
const successModal = document.querySelector("[data-success-modal]");
const successUrlNode = document.querySelector("[data-success-url]");
const closeSuccessButtons = document.querySelectorAll('[data-action="close-success"]');
const helperFields = document.querySelectorAll("[data-clear-helper]");
const countrySelects = document.querySelectorAll("[data-country-code]");
const bloodTypeSelect = form.elements.namedItem("blood_type");

const state = {
  uiLang: detectInitialLanguage(),
  previewLang: "es",
  client: null,
  slugTouched: false,
  baseStatus: null,
  statusTimer: null,
  lastSavedUrl: ""
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
  countrySelects.forEach((select) => {
    select.innerHTML = "";

    countryCodes.forEach((entry) => {
      const option = document.createElement("option");
      option.value = entry.code;
      option.textContent = entry.label;
      select.appendChild(option);
    });

    select.value = "+1";
  });
}

function setupHelperPlaceholders() {
  helperFields.forEach((field) => {
    field.dataset.helperPlaceholder = field.getAttribute("placeholder") || "";

    field.addEventListener("focus", () => {
      field.setAttribute("placeholder", "");
    });

    field.addEventListener("blur", () => {
      if (!cleanText(field.value)) {
        field.setAttribute("placeholder", field.dataset.helperPlaceholder || "");
      }
    });
  });
}

function setBloodPlaceholder() {
  const placeholderOption = bloodTypeSelect?.querySelector('option[value=""]');
  if (!placeholderOption) {
    return;
  }

  placeholderOption.textContent = setupTranslations[state.uiLang].bloodPlaceholder;
}

function getFormState() {
  const data = Object.fromEntries(new FormData(form).entries());
  data.is_public = form.elements.is_public.checked;
  return data;
}

function buildPhone(countryCode, localNumber) {
  const code = cleanText(countryCode);
  const local = cleanText(localNumber);

  if (!local) {
    return "";
  }

  return `${code} ${local}`.trim();
}

function parsePhone(phone) {
  const value = cleanText(phone);

  if (!value) {
    return { code: "+1", local: "" };
  }

  const normalized = value.replace(/\s+/g, " ").trim();
  const match = [...countryCodes]
    .sort((a, b) => b.code.length - a.code.length)
    .find((entry) => normalized.startsWith(entry.code));

  if (!match) {
    return { code: "+1", local: normalized.replace(/^\+[\d]+\s*/, "").trim() };
  }

  return {
    code: match.code,
    local: normalized.slice(match.code.length).trim()
  };
}

function normalizePayload(raw) {
  const profileLanguage = normalizeLanguage(raw.default_language);
  const conditions = cleanText(raw.conditions);
  const allergies = cleanText(raw.allergies);
  const medications = cleanText(raw.medications);
  const devices = cleanText(raw.devices);
  const notes = cleanText(raw.notes);

  return {
    full_name: cleanText(raw.full_name),
    public_slug: slugify(raw.public_slug || raw.full_name),
    default_language: profileLanguage,
    blood_type: cleanText(raw.blood_type),
    doctor: cleanText(raw.doctor),
    clinic: cleanText(raw.clinic),
    insurance: cleanText(raw.insurance),
    conditions_en: conditions,
    conditions_es: conditions,
    allergies_en: allergies,
    allergies_es: allergies,
    medications_en: medications,
    medications_es: medications,
    devices_en: devices,
    devices_es: devices,
    notes_en: notes,
    notes_es: notes,
    emergency_contact_1_name: cleanText(raw.emergency_contact_1_name),
    emergency_contact_1_phone: buildPhone(
      raw.emergency_contact_1_country_code,
      raw.emergency_contact_1_phone_local
    ),
    emergency_contact_1_whatsapp: null,
    emergency_contact_2_name: cleanText(raw.emergency_contact_2_name),
    emergency_contact_2_phone: buildPhone(
      raw.emergency_contact_2_country_code,
      raw.emergency_contact_2_phone_local
    ),
    emergency_contact_2_whatsapp: null,
    full_record_url: cleanText(raw.full_record_url),
    is_public: Boolean(raw.is_public),
    updated_at: new Date().toISOString()
  };
}

function recordToFormValues(record) {
  const profileLanguage = normalizeLanguage(record.default_language || "es");
  const phone1 = parsePhone(record.emergency_contact_1_phone);
  const phone2 = parsePhone(record.emergency_contact_2_phone);

  return {
    full_name: cleanText(record.full_name),
    public_slug: cleanText(record.public_slug),
    default_language: profileLanguage,
    blood_type: cleanText(record.blood_type),
    doctor: cleanText(record.doctor),
    clinic: cleanText(record.clinic),
    insurance: cleanText(record.insurance),
    conditions:
      cleanText(record[`conditions_${profileLanguage}`]) ||
      cleanText(record.conditions_en) ||
      cleanText(record.conditions_es),
    allergies:
      cleanText(record[`allergies_${profileLanguage}`]) ||
      cleanText(record.allergies_en) ||
      cleanText(record.allergies_es),
    medications:
      cleanText(record[`medications_${profileLanguage}`]) ||
      cleanText(record.medications_en) ||
      cleanText(record.medications_es),
    devices:
      cleanText(record[`devices_${profileLanguage}`]) ||
      cleanText(record.devices_en) ||
      cleanText(record.devices_es),
    notes:
      cleanText(record[`notes_${profileLanguage}`]) ||
      cleanText(record.notes_en) ||
      cleanText(record.notes_es),
    emergency_contact_1_name: cleanText(record.emergency_contact_1_name),
    emergency_contact_1_country_code: phone1.code,
    emergency_contact_1_phone_local: phone1.local,
    emergency_contact_2_name: cleanText(record.emergency_contact_2_name),
    emergency_contact_2_country_code: phone2.code,
    emergency_contact_2_phone_local: phone2.local,
    full_record_url: cleanText(record.full_record_url),
    is_public: Boolean(record.is_public)
  };
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

function buildDisplayUrl(slug) {
  const normalizedSlug = slug || "new-profile";
  const base = cleanText(config.siteBaseUrl || "https://tudominio.com/med/{slug}");
  const encodedSlug = encodeURIComponent(normalizedSlug);

  if (base.includes("{slug}")) {
    return base.replaceAll("{slug}", encodedSlug);
  }

  return `${base.replace(/\/$/, "")}/${encodedSlug}`;
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

  setBloodPlaceholder();

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
  const raw = getFormState();
  const data = normalizePayload(raw);
  const copy = setupTranslations[state.previewLang];
  const notes = cleanText(raw.notes)
    .split(/\r?\n|;/)
    .map((item) => item.replace(/^[-*•]\s*/, "").trim())
    .filter(Boolean);
  const slug = data.public_slug || "new-profile";
  const displayUrl = buildDisplayUrl(slug);

  previewCopyNodes.forEach((node) => {
    const key = node.dataset.previewCopy;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  const previewValues = {
    full_name: data.full_name || "-",
    conditions: cleanText(raw.conditions) || "-",
    allergies: cleanText(raw.allergies) || "-",
    medications: cleanText(raw.medications) || "-",
    blood_type: data.blood_type || "-",
    doctor: data.doctor || "-",
    clinic: data.clinic || "-",
    insurance: data.insurance || "-"
  };

  previewValueNodes.forEach((node) => {
    node.textContent = previewValues[node.dataset.preview] || "-";
  });

  previewNoteNodes.forEach((node) => {
    node.textContent = notes[Number(node.dataset.previewNote)] || "";
  });

  generatedUrlNodes.forEach((node) => {
    node.textContent = displayUrl;
  });

  openPublicLinks.forEach((link) => {
    link.href = displayUrl;
  });

  document.title = `${data.full_name || "NFC Medico"} | Setup Portal`;
}

function syncSlugFromName() {
  if (state.slugTouched) {
    return;
  }

  form.elements.public_slug.value = slugify(form.elements.full_name.value);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  window.prompt("Copy this URL", text);
}

async function copyGeneratedUrl() {
  const slug = slugify(form.elements.public_slug.value || form.elements.full_name.value);
  const url = buildDisplayUrl(slug);

  try {
    await copyText(url);
    flashStatus("success", "statusCopyTitle", "statusCopyMessage");
  } catch (error) {
    console.warn("Copy failed", error);
    window.prompt("Copy this URL", url);
  }
}

function openSavingOverlay() {
  savingOverlay.classList.remove("is-hidden");
}

function closeSavingOverlay() {
  savingOverlay.classList.add("is-hidden");
}

function openSuccessModal(url) {
  state.lastSavedUrl = url;
  successUrlNode.textContent = url;

  openPublicLinks.forEach((link) => {
    if (link.dataset.action === "open-success-url") {
      link.href = url;
    }
  });

  successModal.classList.remove("is-hidden");
}

function closeSuccessModal() {
  successModal.classList.add("is-hidden");
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
  renderPreview();
  openSavingOverlay();

  if (!hasSupabaseConfig()) {
    closeSavingOverlay();
    showStatus("warning", "statusConfigErrorTitle", "statusConfigErrorMessage");
    return;
  }

  if (!config.allowDirectProfileWrite) {
    closeSavingOverlay();
    showStatus("warning", "statusDirectWriteOffTitle", "statusDirectWriteOffMessage");
    return;
  }

  try {
    const { error } = await getClient()
      .from(config.profilesWriteTable || "medical_profiles")
      .upsert([payload], { onConflict: config.lookupField || "public_slug" });

    if (error) {
      throw error;
    }

    const url = buildDisplayUrl(payload.public_slug);
    const pageUrl = new URL(window.location.href);
    pageUrl.searchParams.set("slug", payload.public_slug);
    window.history.replaceState({}, "", pageUrl);

    closeSavingOverlay();
    showStatus("success", "statusSaveSuccessTitle", "statusSaveSuccessMessage", {
      slug: payload.public_slug
    });
    openSuccessModal(url);
  } catch (error) {
    console.warn("Save failed", error);
    closeSavingOverlay();
    showStatus("error", "statusSaveErrorTitle", "statusSaveErrorMessage");
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

    populateForm(recordToFormValues(data));
    state.slugTouched = true;
    setPreviewLanguage(data.default_language || "es");
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

form.addEventListener("change", (event) => {
  if (event.target.name === "default_language") {
    setPreviewLanguage(event.target.value);
    return;
  }

  renderPreview();
});
form.addEventListener("submit", saveProfile);

copyUrlButtons.forEach((button) => {
  button.addEventListener("click", copyGeneratedUrl);
});

closeSuccessButtons.forEach((button) => {
  button.addEventListener("click", closeSuccessModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSuccessModal();
  }
});

populateCountryCodes();
setupHelperPlaceholders();
form.reset();
form.elements.default_language.value = state.uiLang;
form.elements.is_public.checked = true;
countrySelects.forEach((select) => {
  select.value = "+1";
});
setUILanguage(state.uiLang);
setPreviewLanguage(form.elements.default_language.value || state.uiLang);
loadExistingProfile().finally(renderPreview);
