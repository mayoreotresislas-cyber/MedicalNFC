const setupTranslations = {
  en: {
    brandTagline: "Medical form",
    publicLandingLink: "What is this?",
    interfaceLanguage: "Interface language",
    heroKicker: "Medical form",
    heroTitle: "Fill the medical form for one person.",
    heroText:
      "Add the emergency information once, review the live preview, and generate the secure link that will be emailed to the administrator who records the NFC tags.",
    heroPoint1: "Clear step-by-step flow",
    heroPoint2: "Multilingual preview",
    heroPoint3: "Fast family workflow",
    heroCardLabel: "What you will do",
    heroCard1: "Fill the health profile for one person.",
    heroCard2: "Review the emergency preview before saving.",
    heroCard3: "The secure profile link is emailed to the NFC administrator.",
    step1: "1. Identity",
    step2: "2. Medical details",
    step3: "3. Contacts",
    step4: "4. Finish",
    identityKicker: "Identity",
    identityTitle: "Person details",
    medicalKicker: "Medical details",
    medicalTitle: "Write the medical information once",
    contactsKicker: "Contacts",
    contactsTitle: "Family or caregiver contacts",
    publishKicker: "Finish",
    publishTitle: "Generate the profile link",
    fieldFullName: "Full name",
    fieldSlug: "Profile ID",
    fieldProfileLanguage: "Original language of the medical information",
    fieldBloodType: "Blood type",
    fieldAge: "Age",
    fieldWeight: "Weight",
    fieldHeight: "Height",
    fieldOrganDonor: "Organ donor",
    fieldInsurance: "Insurance",
    fieldDoctor: "Doctor",
    fieldClinic: "Clinic",
    fieldConditions: "Conditions",
    fieldAllergies: "Medical allergies",
    fieldFoodAllergies: "Food allergies",
    fieldMedications: "Medications and doses",
    fieldDevices: "Medical devices",
    fieldNotes: "Important notes",
    contact1Title: "Emergency contact 1",
    contact2Title: "Emergency contact 2",
    fieldContactName: "Name",
    fieldCountryCode: "Country code",
    fieldContactPhone: "Phone",
    fieldRecordUrl: "Generated profile link",
    generatedUrlLabel: "When you generate the profile, the secure link is sent to the administrator email used for NFC recording.",
    updatePolicyTitle: "Future profile changes",
    updatePolicyText:
      "If you need this profile reopened later for remote changes, that service has an additional cost. The online profile can be updated remotely, but the physical NFC information is only changed when the administrator has the chip in hand.",
    saveProfile: "Generate profile",
    saveFamily: "Generate another family member",
    previewKicker: "Live preview",
    previewTitle: "How the NFC page will look",
    previewLanguage: "Preview language",
    criticalBadge: "Emergency",
    detailBadge: "Details",
    screenOne: "Screen 1",
    screenTwo: "Screen 2",
    emergencyTitle: "Emergency Medical Info",
    additionalTitle: "Additional Medical Information",
    labelName: "Name",
    labelConditions: "Condition(s)",
    labelAllergies: "Medical Allergies",
    labelFoodAllergies: "Food Allergies",
    labelMedications: "Medications / Doses",
    labelBloodType: "Blood Type",
    labelAge: "Age",
    labelWeight: "Weight",
    labelHeight: "Height",
    labelOrganDonor: "Organ donor",
    labelDoctor: "Doctor",
    labelClinic: "Clinic",
    labelInsurance: "Insurance",
    importantNotes: "Important Notes",
    organDonorPlaceholder: "Select an option",
    organDonorYes: "Yes",
    organDonorNo: "No",
    savingTitle: "Generating profile...",
    savingText: "Please wait while we store the profile and notify the NFC administrator.",
    successKicker: "Saved",
    successTitle: "Profile generated successfully",
    successText: "The profile was generated correctly and the secure link was sent to the administrator email for NFC recording.",
    errorKicker: "Error",
    errorTitle: "We could not generate the profile",
    errorText: "The profile could not be saved. Review the technical message below and try again.",
    closeError: "Close",
    closeSuccess: "Done",
    statusReadyTitle: "Ready to generate",
    statusReadyMessage: "Complete the form, review the multilingual preview, and generate the profile link.",
    statusConfigTitle: "Supabase setup missing",
    statusConfigMessage: "Add the dedicated NFC Medico Supabase URL and anon key in config.js.",
    statusValidationTitle: "Missing required fields",
    statusValidationMessage: "Add at least the full name before generating the profile.",
    statusSavingTitle: "Generation in progress",
    statusSavingMessage: "Generating the secure link and language versions.",
    statusSavedTitle: "Profile generated",
    statusSavedMessage: "The medical profile and secure link were created successfully.",
    statusSaveErrorTitle: "Could not save the profile",
    statusSaveErrorMessage: "Supabase returned an error while saving: {details}",
    statusTranslateMissingTitle: "Translation function missing",
    statusTranslateMissingMessage: "Deploy the translate-medical-copy Edge Function before using multilingual preview.",
    statusTranslateErrorTitle: "Automatic translation failed",
    statusTranslateErrorMessage: "We could not generate the selected language right now.",
    statusEmailWarningTitle: "Profile generated, email warning",
    statusEmailWarningMessage: "The profile was generated, but the email notification could not be sent.",
    statusLoadedTitle: "Profile loaded",
    statusLoadedMessage: "Existing data for {slug} is now in the form.",
    statusLoadErrorTitle: "Could not load the profile",
    statusLoadErrorMessage: "We could not find {slug}. You can still create a new profile.",
    activationGateKicker: "Private access",
    activationGateTitle: "Open your private activation link",
    activationGateText:
      "Use the private link sent for this profile. If you only have the token code, paste it below to open the medical form.",
    activationTokenLabel: "Activation link or token",
    openActivationButton: "Open private form",
    activationAwaitTitle: "Private link required",
    activationAwaitMessage: "Open this page using the private activation link sent for this profile.",
    activationLoadedTitle: "Private form ready",
    activationLoadedMessage: "This private profile is now ready to complete.",
    activationUsedTitle: "Profile already submitted",
    activationUsedMessage: "This activation link was already used. If you need changes later, ask the administrator to reopen the profile.",
    activationInvalidTitle: "Activation unavailable",
    activationInvalidMessage: "We could not validate this private activation link.",
    previewTranslating: "Translating automatically...",
    bloodPlaceholder: "Select blood type"
  },
  es: {
    brandTagline: "Formulario medico",
    publicLandingLink: "Que es esto?",
    interfaceLanguage: "Idioma de la interfaz",
    heroKicker: "Formulario medico",
    heroTitle: "Llena el formulario medico para una persona.",
    heroText:
      "Agrega la informacion de emergencia una sola vez, revisa el preview en vivo y genera el enlace seguro que se enviara al administrador que graba los tags NFC.",
    heroPoint1: "Flujo claro paso a paso",
    heroPoint2: "Preview multilenguaje",
    heroPoint3: "Flujo agil para familias",
    heroCardLabel: "Lo que vas a hacer",
    heroCard1: "Llena el perfil de salud de una persona.",
    heroCard2: "Revisa el preview de emergencia antes de guardar.",
    heroCard3: "El enlace seguro del perfil se envia al administrador del NFC.",
    step1: "1. Identidad",
    step2: "2. Informacion medica",
    step3: "3. Contactos",
    step4: "4. Finalizar",
    identityKicker: "Identidad",
    identityTitle: "Datos de la persona",
    medicalKicker: "Informacion medica",
    medicalTitle: "Escribe la informacion medica una sola vez",
    contactsKicker: "Contactos",
    contactsTitle: "Contactos de familia o cuidadores",
    publishKicker: "Finalizar",
    publishTitle: "Generar el enlace del perfil",
    fieldFullName: "Nombre completo",
    fieldSlug: "ID del perfil",
    fieldProfileLanguage: "Idioma original de la informacion medica",
    fieldBloodType: "Tipo de sangre",
    fieldAge: "Edad",
    fieldWeight: "Peso",
    fieldHeight: "Estatura",
    fieldOrganDonor: "Donador de organos",
    fieldInsurance: "Seguro",
    fieldDoctor: "Medico",
    fieldClinic: "Clinica",
    fieldConditions: "Condiciones",
    fieldAllergies: "Alergias medicas",
    fieldFoodAllergies: "Alergias alimentarias",
    fieldMedications: "Medicamentos y dosis",
    fieldDevices: "Dispositivos medicos",
    fieldNotes: "Notas importantes",
    contact1Title: "Contacto de emergencia 1",
    contact2Title: "Contacto de emergencia 2",
    fieldContactName: "Nombre",
    fieldCountryCode: "Codigo de pais",
    fieldContactPhone: "Telefono",
    fieldRecordUrl: "Enlace generado del perfil",
    generatedUrlLabel: "Cuando generas el perfil, el enlace seguro se envia al correo del administrador que programa los NFC.",
    updatePolicyTitle: "Cambios futuros del perfil",
    updatePolicyText:
      "Si mas adelante necesitas reabrir este perfil para hacer cambios a distancia, ese servicio tiene un costo adicional. El perfil en linea se puede actualizar remotamente, pero la informacion fisica del NFC solo cambia cuando el administrador tiene el chip en la mano.",
    saveProfile: "Generar perfil",
    saveFamily: "Generar otro familiar",
    previewKicker: "Preview en vivo",
    previewTitle: "Asi se vera la pagina del NFC",
    previewLanguage: "Idioma del preview",
    criticalBadge: "Emergencia",
    detailBadge: "Detalle",
    screenOne: "Pantalla 1",
    screenTwo: "Pantalla 2",
    emergencyTitle: "Informacion Medica de Emergencia",
    additionalTitle: "Informacion Medica Adicional",
    labelName: "Nombre",
    labelConditions: "Condiciones",
    labelAllergies: "Alergias medicas",
    labelFoodAllergies: "Alergias alimentarias",
    labelMedications: "Medicamentos y dosis",
    labelBloodType: "Tipo de sangre",
    labelAge: "Edad",
    labelWeight: "Peso",
    labelHeight: "Estatura",
    labelOrganDonor: "Donador de organos",
    labelDoctor: "Medico",
    labelClinic: "Clinica",
    labelInsurance: "Seguro",
    importantNotes: "Notas importantes",
    organDonorPlaceholder: "Selecciona una opcion",
    organDonorYes: "Si",
    organDonorNo: "No",
    savingTitle: "Generando perfil...",
    savingText: "Espera un momento mientras guardamos el perfil y notificamos al administrador del NFC.",
    successKicker: "Guardado",
    successTitle: "Perfil generado con exito",
    successText: "El perfil se genero correctamente y el enlace seguro fue enviado al correo del administrador para grabar el NFC.",
    errorKicker: "Error",
    errorTitle: "No pudimos generar el perfil",
    errorText: "No se pudo guardar el perfil. Revisa el mensaje tecnico de abajo e intenta de nuevo.",
    closeError: "Cerrar",
    closeSuccess: "Listo",
    statusReadyTitle: "Listo para generar",
    statusReadyMessage: "Completa el formulario, revisa el preview multilenguaje y genera el enlace del perfil.",
    statusConfigTitle: "Falta configurar Supabase",
    statusConfigMessage: "Agrega en config.js la URL y la anon key del proyecto de NFC Medico.",
    statusValidationTitle: "Faltan campos obligatorios",
    statusValidationMessage: "Agrega al menos el nombre completo antes de generar el perfil.",
    statusSavingTitle: "Generacion en proceso",
    statusSavingMessage: "Estamos generando el enlace seguro y las versiones de idioma.",
    statusSavedTitle: "Perfil generado",
    statusSavedMessage: "El perfil medico y el enlace seguro se crearon correctamente.",
    statusSaveErrorTitle: "No se pudo guardar el perfil",
    statusSaveErrorMessage: "Supabase devolvio un error al guardar: {details}",
    statusTranslateMissingTitle: "Falta la funcion de traduccion",
    statusTranslateMissingMessage: "Publica la Edge Function translate-medical-copy antes de usar preview multilenguaje.",
    statusTranslateErrorTitle: "Fallo la traduccion automatica",
    statusTranslateErrorMessage: "No pudimos generar el idioma seleccionado en este momento.",
    statusEmailWarningTitle: "Perfil generado, aviso de correo",
    statusEmailWarningMessage: "El perfil se genero, pero no se pudo enviar el correo de notificacion.",
    statusLoadedTitle: "Perfil cargado",
    statusLoadedMessage: "Los datos existentes de {slug} ya estan en el formulario.",
    statusLoadErrorTitle: "No se pudo cargar el perfil",
    statusLoadErrorMessage: "No encontramos {slug}. Aun puedes crear un perfil nuevo.",
    activationGateKicker: "Acceso privado",
    activationGateTitle: "Abre tu enlace privado de activacion",
    activationGateText:
      "Usa el enlace privado que fue enviado para este perfil. Si solo tienes el token, pegalo abajo para abrir el formulario medico.",
    activationTokenLabel: "Enlace o token de activacion",
    openActivationButton: "Abrir formulario privado",
    activationAwaitTitle: "Hace falta el enlace privado",
    activationAwaitMessage: "Abre esta pagina usando el enlace privado de activacion enviado para este perfil.",
    activationLoadedTitle: "Formulario privado listo",
    activationLoadedMessage: "Este perfil privado ya esta listo para completarse.",
    activationUsedTitle: "Perfil ya enviado",
    activationUsedMessage: "Este enlace de activacion ya fue usado. Si necesitas cambios despues, pide al administrador que reabra el perfil.",
    activationInvalidTitle: "Activacion no disponible",
    activationInvalidMessage: "No pudimos validar este enlace privado de activacion.",
    previewTranslating: "Traduciendo automaticamente...",
    bloodPlaceholder: "Selecciona el tipo de sangre"
  }
};

const languageOptions = {
  en: { code: "EN", label: "English", flag: "🇺🇸" },
  es: { code: "ES", label: "Español", flag: "🇪🇸" },
  fr: { code: "FR", label: "Français", flag: "🇫🇷" },
  pt: { code: "PT", label: "Português", flag: "🇵🇹" },
  de: { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  it: { code: "IT", label: "Italiano", flag: "🇮🇹" },
  ja: { code: "JA", label: "Japanese", flag: "🇯🇵" },
  ko: { code: "KO", label: "Korean", flag: "🇰🇷" },
  zh: { code: "ZH", label: "Chinese", flag: "🇨🇳" }
};

const languageVisuals = {
  en: { label: "English", flagClass: "flag-us" },
  es: { label: "Espanol", flagClass: "flag-es" },
  fr: { label: "Francais", flagClass: "flag-fr" },
  pt: { label: "Portugues", flagClass: "flag-pt" },
  de: { label: "Deutsch", flagClass: "flag-de" },
  it: { label: "Italiano", flagClass: "flag-it" },
  ja: { label: "Japanese", flagClass: "flag-ja" },
  ko: { label: "Korean", flagClass: "flag-ko" },
  zh: { label: "Chinese", flagClass: "flag-zh" }
};

const staticUiLanguages = new Set(["en", "es"]);

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

const medicalFieldKeys = ["conditions", "allergies", "food_allergies", "medications", "devices", "notes"];
const config = window.NFC_MEDICO_CONFIG || {};
const root = document.documentElement;
const pageMode = document.body.dataset.pageMode || "setup";
const form = document.querySelector("#profile-form");
const textNodes = document.querySelectorAll("[data-i18n]");
const previewCopyNodes = document.querySelectorAll("[data-preview-copy]");
const previewNoteNodes = document.querySelectorAll("[data-preview-note]");
const generatedUrlNodes = document.querySelectorAll("[data-generated-url-inline]");
const statusBanner = document.querySelector("[data-form-status]");
const statusTitle = document.querySelector("[data-form-status-title]");
const statusMessage = document.querySelector("[data-form-status-message]");
const savingOverlay = document.querySelector("[data-saving-overlay]");
const successModal = document.querySelector("[data-success-modal]");
const successUrlNode = document.querySelector("[data-success-url]");
const errorModal = document.querySelector("[data-error-modal]");
const errorDetailNode = document.querySelector("[data-error-detail]");
const interfaceSelect = document.querySelector("[data-lang-select]");
const helperFields = document.querySelectorAll("[data-clear-helper]");
const countryCodeSelects = document.querySelectorAll("[data-country-code]");
const activationGate = document.querySelector("[data-activation-gate]");
const activationBuilder = document.querySelector("[data-activation-builder]");
const tokenEntryForm = document.querySelector("[data-token-entry-form]");
const tokenInput = document.querySelector("[data-token-input]");

const state = {
  uiLang: detectInitialLanguage(),
  previewLang: "en",
  client: null,
  uiCopyCache: {
    en: setupTranslations.en,
    es: setupTranslations.es
  },
  uiCopyPending: {},
  slugTouched: false,
  slugSeed: createSlugSeed(),
  baseStatus: null,
  statusTimer: null,
  lastSavedUrl: "",
  pendingMode: "save",
  activation: {
    token: "",
    tokenStatus: "",
    profileLoaded: false
  },
  translation: {
    sourceLanguage: "en",
    signature: "",
    results: {},
    pendingKey: "",
    pendingPromise: null,
    debounceTimer: null
  }
};

function detectInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (requested && languageOptions[requested]) {
    return requested;
  }

  const browserCode = navigator.language?.slice(0, 2).toLowerCase();
  return languageOptions[browserCode] ? browserCode : "en";
}

function isActivationMode() {
  return pageMode === "activate";
}

function extractActivationToken(value, allowPlain = true) {
  const cleaned = cleanText(value);
  if (!cleaned) {
    return "";
  }

  try {
    const parsed = new URL(cleaned);
    const fromPath = parsed.pathname.split("/").filter(Boolean).pop();
    if (fromPath?.startsWith("nfcm_")) {
      return fromPath;
    }
    const fromQuery = cleanText(parsed.searchParams.get("token"));
    if (fromQuery) {
      return fromQuery;
    }
  } catch (error) {
    // Ignore and fall back to plain token parsing.
  }

  const match = cleaned.match(/nfcm_[a-z0-9]+/i);
  if (match) {
    return match[0];
  }

  return allowPlain ? cleaned : "";
}

function getRequestedActivationToken() {
  const url = new URL(window.location.href);
  const fromQuery = extractActivationToken(url.searchParams.get("token"), false);
  if (fromQuery) {
    return fromQuery;
  }

  const fromPath = extractActivationToken(url.pathname.split("/").filter(Boolean).pop(), false);
  return fromPath;
}

function buildLanguageMarkup(value) {
  const option = languageOptions[value] || languageOptions.en;
  const visual = languageVisuals[value] || languageVisuals.en;
  return `
    <span class="flag-select-swatch ${visual.flagClass}" aria-hidden="true"></span>
    <span class="flag-select-code">${option.code}</span>
    <span class="flag-select-label">${visual.label}</span>
  `;
}

function syncFlagSelect(select) {
  const wrapper = select?.nextElementSibling;
  if (!wrapper?.classList.contains("flag-select")) {
    return;
  }

  const valueNode = wrapper.querySelector("[data-flag-select-value]");
  const optionButtons = wrapper.querySelectorAll("[data-flag-option]");
  valueNode.innerHTML = buildLanguageMarkup(select.value);
  optionButtons.forEach((button) => {
    const active = button.dataset.value === select.value;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function closeFlagSelectMenus() {
  document.querySelectorAll(".flag-select.is-open").forEach((wrapper) => {
    wrapper.classList.remove("is-open");
    const menu = wrapper.querySelector("[data-flag-select-menu]");
    const trigger = wrapper.querySelector("[data-flag-select-trigger]");
    if (menu) {
      menu.hidden = true;
    }
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function initFlagSelects() {
  document.querySelectorAll("select[data-flag-menu]").forEach((select) => {
    Array.from(select.options).forEach((option) => {
      const value = option.value;
      const language = languageOptions[value];
      const visual = languageVisuals[value] || languageVisuals.en;
      if (language) {
        option.textContent = `${language.code} - ${visual.label}`;
      }
    });

    const wrapper = document.createElement("div");
    wrapper.className = "flag-select";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "flag-select-trigger";
    trigger.setAttribute("data-flag-select-trigger", "");
    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = `
      <span class="flag-select-value" data-flag-select-value></span>
      <span class="flag-select-caret">▾</span>
    `;

    const menu = document.createElement("div");
    menu.className = "flag-select-menu";
    menu.setAttribute("data-flag-select-menu", "");
    menu.hidden = true;

    Object.entries(languageOptions).forEach(([value]) => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "flag-select-option";
      optionButton.dataset.flagOption = "";
      optionButton.dataset.value = value;
      optionButton.innerHTML = buildLanguageMarkup(value);
      optionButton.addEventListener("click", () => {
        select.value = value;
        syncFlagSelect(select);
        closeFlagSelectMenus();
        select.dispatchEvent(new Event("change", { bubbles: true }));
      });
      menu.appendChild(optionButton);
    });

    trigger.addEventListener("click", () => {
      const isOpen = wrapper.classList.contains("is-open");
      closeFlagSelectMenus();
      if (!isOpen) {
        wrapper.classList.add("is-open");
        menu.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
    select.insertAdjacentElement("afterend", wrapper);
    syncFlagSelect(select);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".flag-select")) {
      closeFlagSelectMenus();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFlagSelectMenus();
      closeSuccessModal();
    }
  });
}

function normalizeUiLanguage(lang) {
  const code = cleanText(lang).slice(0, 2).toLowerCase();
  return languageOptions[code] ? code : "en";
}

function normalizeProfileLanguage(lang) {
  const code = cleanText(lang).slice(0, 2).toLowerCase();
  return languageOptions[code] ? code : "en";
}

function getSetupCopy(lang = state.uiLang) {
  const normalized = normalizeUiLanguage(lang);
  if (staticUiLanguages.has(normalized)) {
    return setupTranslations[normalized] || setupTranslations.en;
  }

  return state.uiCopyCache[normalized] || setupTranslations.en;
}

function cleanText(value) {
  return value === null || value === undefined ? "" : String(value).trim();
}

function createSlugSeed() {
  return Math.random().toString(36).slice(2, 8);
}

function slugify(value) {
  return cleanText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildAutoSlug(value) {
  const base = slugify(value);
  if (!base) {
    return "";
  }

  return `${base}-${state.slugSeed}`;
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
    select.innerHTML = countryCodes.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
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

function clearDraftFields(preserveContacts = false) {
  const contacts = preserveContacts ? getFamilyTemplate() : null;

  form.reset();
  state.slugSeed = createSlugSeed();
  helperFields.forEach((field) => {
    field.value = "";
    field.setAttribute("placeholder", field.dataset.helperPlaceholder || field.getAttribute("placeholder") || "");
  });

  form.elements.full_record_url.value = "";
  form.elements.public_slug.value = "";
  form.elements.blood_type.value = "";
  form.elements.default_language.value = "en";
  syncFlagSelect(form.elements.default_language);
  countryCodeSelects.forEach((select) => {
    select.value = "+1";
  });

  if (contacts) {
    applyFamilyTemplate(contacts);
  }

  state.slugTouched = false;
}

function setBloodPlaceholder(copy = getSetupCopy()) {
  const select = form.elements.blood_type;
  if (select?.options?.length) {
    select.options[0].textContent = copy.bloodPlaceholder || setupTranslations.en.bloodPlaceholder;
  }
}

function setOrganDonorOptions(copy = getSetupCopy()) {
  const select = form.elements.organ_donor;
  if (!select?.options?.length) {
    return;
  }

  select.options[0].textContent = copy.organDonorPlaceholder || setupTranslations.en.organDonorPlaceholder;
  if (select.options[1]) {
    select.options[1].textContent = copy.organDonorYes || setupTranslations.en.organDonorYes;
  }
  if (select.options[2]) {
    select.options[2].textContent = copy.organDonorNo || setupTranslations.en.organDonorNo;
  }
}

function formatOrganDonorValue(value, copy = getSetupCopy()) {
  if (value === true || value === "true") {
    return copy.organDonorYes || setupTranslations.en.organDonorYes;
  }
  if (value === false || value === "false") {
    return copy.organDonorNo || setupTranslations.en.organDonorNo;
  }
  return "-";
}

function buildPhone(code, local) {
  const prefix = cleanText(code || "+1");
  const number = cleanText(local);
  return number ? `${prefix} ${number}`.trim() : "";
}

function buildWhatsappNumber(code, local) {
  return buildPhone(code, local).replace(/\D/g, "");
}

function parsePhone(phone) {
  const normalized = cleanText(phone).replace(/\s+/g, " ").trim();
  if (!normalized) {
    return { countryCode: "+1", localNumber: "" };
  }

  const match = [...countryCodes]
    .sort((left, right) => right.value.length - left.value.length)
    .find((option) => normalized.startsWith(option.value));

  if (!match) {
    return { countryCode: "+1", localNumber: normalized };
  }

  return {
    countryCode: match.value,
    localNumber: normalized.slice(match.value.length).trim()
  };
}

function getFamilyTemplate() {
  const raw = window.localStorage.getItem("nfc-medico-family-template");
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Family template parse failed", error);
    return null;
  }
}

function saveFamilyTemplate(raw) {
  const template = {
    default_language: raw.default_language,
    insurance: raw.insurance,
    doctor: raw.doctor,
    clinic: raw.clinic,
    emergency_contact_1_name: raw.emergency_contact_1_name,
    emergency_contact_1_country_code: raw.emergency_contact_1_country_code,
    emergency_contact_1_phone_local: raw.emergency_contact_1_phone_local,
    emergency_contact_2_name: raw.emergency_contact_2_name,
    emergency_contact_2_country_code: raw.emergency_contact_2_country_code,
    emergency_contact_2_phone_local: raw.emergency_contact_2_phone_local
  };

  window.localStorage.setItem("nfc-medico-family-template", JSON.stringify(template));
}

function applyFamilyTemplate(template) {
  Object.entries(template).forEach(([key, value]) => {
    if (form.elements[key]) {
      form.elements[key].value = value || "";
    }
  });
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
    default_language: normalizeProfileLanguage(form.elements.default_language.value),
    blood_type: cleanText(form.elements.blood_type.value),
    age: cleanText(form.elements.age.value),
    weight: cleanText(form.elements.weight.value),
    height: cleanText(form.elements.height.value),
    organ_donor: cleanText(form.elements.organ_donor.value),
    insurance: cleanText(form.elements.insurance.value),
    doctor: cleanText(form.elements.doctor.value),
    clinic: cleanText(form.elements.clinic.value),
    conditions: cleanText(form.elements.conditions.value),
    allergies: cleanText(form.elements.allergies.value),
    food_allergies: cleanText(form.elements.food_allergies.value),
    medications: cleanText(form.elements.medications.value),
    devices: cleanText(form.elements.devices.value),
    notes: cleanText(form.elements.notes.value),
    emergency_contact_1_name: cleanText(form.elements.emergency_contact_1_name.value),
    emergency_contact_1_country_code: cleanText(form.elements.emergency_contact_1_country_code.value || "+1"),
    emergency_contact_1_phone_local: cleanText(form.elements.emergency_contact_1_phone_local.value),
    emergency_contact_2_name: cleanText(form.elements.emergency_contact_2_name.value),
    emergency_contact_2_country_code: cleanText(form.elements.emergency_contact_2_country_code.value || "+1"),
    emergency_contact_2_phone_local: cleanText(form.elements.emergency_contact_2_phone_local.value),
    full_record_url: cleanText(form.elements.full_record_url.value)
  };
}

function sourceFieldsFromRecord(record) {
  const sourceLanguage = normalizeProfileLanguage(record.default_language || "en");
  return {
    conditions: cleanText(record.conditions_source || record[`conditions_${sourceLanguage}`] || record.conditions_en || record.conditions_es),
    allergies: cleanText(record.allergies_source || record[`allergies_${sourceLanguage}`] || record.allergies_en || record.allergies_es),
    food_allergies: cleanText(
      record.food_allergies_source ||
        record[`food_allergies_${sourceLanguage}`] ||
        record.food_allergies_en ||
        record.food_allergies_es
    ),
    medications: cleanText(record.medications_source || record[`medications_${sourceLanguage}`] || record.medications_en || record.medications_es),
    devices: cleanText(record.devices_source || record[`devices_${sourceLanguage}`] || record.devices_en || record.devices_es),
    notes: cleanText(record.notes_source || record[`notes_${sourceLanguage}`] || record.notes_en || record.notes_es)
  };
}

function buildSourceSignature(language, fields) {
  return JSON.stringify({ language, ...fields });
}

function syncSource(raw) {
  const sourceLanguage = normalizeProfileLanguage(raw.default_language);
  const sourceFields = {
    conditions: cleanText(raw.conditions),
    allergies: cleanText(raw.allergies),
    food_allergies: cleanText(raw.food_allergies),
    medications: cleanText(raw.medications),
    devices: cleanText(raw.devices),
    notes: cleanText(raw.notes)
  };
  const signature = buildSourceSignature(sourceLanguage, sourceFields);

  if (signature === state.translation.signature) {
    return { sourceLanguage, sourceFields };
  }

  state.translation.sourceLanguage = sourceLanguage;
  state.translation.signature = signature;
  state.translation.results = { [sourceLanguage]: sourceFields };
  state.translation.pendingKey = "";
  state.translation.pendingPromise = null;

  return { sourceLanguage, sourceFields };
}

function createLoadingFields() {
  const label = getSetupCopy(state.uiLang).previewTranslating || setupTranslations.en.previewTranslating;
  return {
    conditions: label,
    allergies: label,
    food_allergies: label,
    medications: label,
    devices: label,
    notes: label
  };
}

function buildDisplayUrl(slug) {
  const safeSlug = slugify(slug) || "new-profile";
  const configured = cleanText(config.siteBaseUrl);
  return configured.includes("{slug}") ? configured.replace("{slug}", safeSlug) : `${window.location.origin}/med/${safeSlug}`;
}

function buildActivationUrl(token) {
  const safeToken = cleanText(token);
  const configured = cleanText(config.activationBaseUrl);
  return configured.includes("{token}") ? configured.replace("{token}", safeToken) : `${window.location.origin}/activate/${safeToken}`;
}

function syncActivationUrl(token) {
  const url = new URL(window.location.href);
  if (token) {
    url.searchParams.set("token", token);
  } else {
    url.searchParams.delete("token");
  }
  window.history.replaceState({}, "", url);
}

function toggleActivationLayout(hasToken) {
  if (!isActivationMode()) {
    return;
  }

  if (activationGate) {
    activationGate.hidden = Boolean(hasToken);
  }

  if (activationBuilder) {
    activationBuilder.hidden = !hasToken;
  }
}

function renderStatus(status = state.baseStatus) {
  if (!status) {
    statusBanner.hidden = true;
    return;
  }

  const copy = getSetupCopy(state.uiLang);
  statusBanner.hidden = false;
  statusBanner.dataset.state = status.type;
  statusTitle.textContent = formatString(copy[status.titleKey], status.values);
  statusMessage.textContent = formatString(copy[status.messageKey], status.values);
}

function extractErrorDetails(error) {
  if (!error) {
    return "Unknown error";
  }

  const parts = [
    cleanText(error.message),
    cleanText(error.details),
    cleanText(error.hint),
    cleanText(error.code)
  ].filter(Boolean);

  return parts[0] || "Unknown error";
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
    error.details = payload?.details || "";
    error.status = response.status;
    throw error;
  }

  return payload;
}

function applyInterfaceCopy(copy) {
  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[key] || setupTranslations.en[key] || "";
  });
  setBloodPlaceholder(copy);
  setOrganDonorOptions(copy);
  renderStatus();
}

async function ensureSetupCopy(lang) {
  const normalized = normalizeUiLanguage(lang);
  if (staticUiLanguages.has(normalized)) {
    return setupTranslations[normalized] || setupTranslations.en;
  }

  if (state.uiCopyCache[normalized]) {
    return state.uiCopyCache[normalized];
  }

  if (state.uiCopyPending[normalized]) {
    return state.uiCopyPending[normalized];
  }

  if (!config.translationFunctionName || !hasSupabaseConfig()) {
    state.uiCopyCache[normalized] = setupTranslations.en;
    return state.uiCopyCache[normalized];
  }

  const sourceFields = Object.fromEntries(
    Object.entries(setupTranslations.en).map(([key, value]) => [key, cleanText(value)])
  );

  const request = invokeFunction(config.translationFunctionName, {
    sourceLanguage: "en",
    targetLanguage: normalized,
    fields: sourceFields
  })
    .then((payload) => {
      const translated = {
        ...setupTranslations.en,
        ...(payload?.fields || {})
      };
      state.uiCopyCache[normalized] = translated;
      delete state.uiCopyPending[normalized];
      return translated;
    })
    .catch((error) => {
      console.warn(`Setup interface translation failed for ${normalized}`, error);
      delete state.uiCopyPending[normalized];
      state.uiCopyCache[normalized] = setupTranslations.en;
      return state.uiCopyCache[normalized];
    });

  state.uiCopyPending[normalized] = request;
  return request;
}

async function translateFields(sourceLanguage, targetLanguage, fields) {
  const normalizedTarget = normalizeProfileLanguage(targetLanguage);
  if (normalizedTarget === sourceLanguage) {
    return fields;
  }

  if (!config.translationFunctionName || !hasSupabaseConfig()) {
    const error = new Error("Translation function missing");
    error.status = 404;
    throw error;
  }

  const cacheKey = `${state.translation.signature}:${normalizedTarget}`;
  if (state.translation.results[normalizedTarget]) {
    return state.translation.results[normalizedTarget];
  }

  if (state.translation.pendingKey === cacheKey && state.translation.pendingPromise) {
    return state.translation.pendingPromise;
  }

  const promise = invokeFunction(config.translationFunctionName, {
    sourceLanguage,
    targetLanguage: normalizedTarget,
    fields
  })
    .then((payload) => {
      const translated = payload?.fields || fields;
      state.translation.results[normalizedTarget] = translated;
      state.translation.pendingKey = "";
      state.translation.pendingPromise = null;
      return translated;
    })
    .catch((error) => {
      state.translation.pendingKey = "";
      state.translation.pendingPromise = null;
      throw error;
    });

  state.translation.pendingKey = cacheKey;
  state.translation.pendingPromise = promise;
  return promise;
}

async function translateFieldsForSave(sourceLanguage, targetLanguage, fields) {
  if (normalizeProfileLanguage(targetLanguage) === sourceLanguage) {
    return { fields, degraded: false };
  }

  try {
    const translated = await translateFields(sourceLanguage, targetLanguage, fields);
    return { fields: translated, degraded: false };
  } catch (error) {
    console.warn(`Translation fallback used for ${targetLanguage}`, error);
    return { fields, degraded: true };
  }
}

async function notifyAdmin(profileName, slug, profileUrl) {
  if (!config.notificationFunctionName || !hasSupabaseConfig()) {
    return false;
  }

  try {
    await invokeFunction(config.notificationFunctionName, {
      profileName,
      slug,
      profileUrl
    });
    return true;
  } catch (error) {
    console.warn("Notification failed", error);
    return false;
  }
}

async function loadActivationProfile(token) {
  if (!config.activationFunctionName || !hasSupabaseConfig()) {
    throw new Error("Activation function is not configured");
  }

  const result = await invokeFunction(config.activationFunctionName, {
    action: "load",
    token
  });

  state.activation.token = token;
  state.activation.tokenStatus = cleanText(result?.tokenStatus);
  state.activation.profileLoaded = Boolean(result?.profile);

  return result;
}

async function submitActivationProfile(token, payload) {
  if (!config.activationFunctionName || !hasSupabaseConfig()) {
    throw new Error("Activation function is not configured");
  }

  return invokeFunction(config.activationFunctionName, {
    action: "activate",
    token,
    payload
  });
}

function buildPayload(raw, sourceFields, englishFields, spanishFields) {
  const now = new Date().toISOString();
  return {
    public_slug: raw.public_slug,
    default_language: raw.default_language,
    full_name: raw.full_name,
    workflow_status: "ready_to_program",
    blood_type: raw.blood_type || null,
    age: raw.age || null,
    weight: raw.weight || null,
    height: raw.height || null,
    organ_donor: raw.organ_donor === "true" ? true : raw.organ_donor === "false" ? false : null,
    insurance: raw.insurance || null,
    doctor: raw.doctor || null,
    clinic: raw.clinic || null,
    conditions_source: sourceFields.conditions,
    allergies_source: sourceFields.allergies,
    food_allergies_source: sourceFields.food_allergies,
    medications_source: sourceFields.medications,
    devices_source: sourceFields.devices,
    notes_source: sourceFields.notes,
    conditions_en: englishFields.conditions,
    allergies_en: englishFields.allergies,
    food_allergies_en: englishFields.food_allergies,
    medications_en: englishFields.medications,
    devices_en: englishFields.devices,
    notes_en: englishFields.notes,
    conditions_es: spanishFields.conditions,
    allergies_es: spanishFields.allergies,
    food_allergies_es: spanishFields.food_allergies,
    medications_es: spanishFields.medications,
    devices_es: spanishFields.devices,
    notes_es: spanishFields.notes,
    emergency_contact_1_name: raw.emergency_contact_1_name || null,
    emergency_contact_1_phone: buildPhone(raw.emergency_contact_1_country_code, raw.emergency_contact_1_phone_local) || null,
    emergency_contact_1_whatsapp:
      buildWhatsappNumber(raw.emergency_contact_1_country_code, raw.emergency_contact_1_phone_local) || null,
    emergency_contact_2_name: raw.emergency_contact_2_name || null,
    emergency_contact_2_phone: buildPhone(raw.emergency_contact_2_country_code, raw.emergency_contact_2_phone_local) || null,
    emergency_contact_2_whatsapp:
      buildWhatsappNumber(raw.emergency_contact_2_country_code, raw.emergency_contact_2_phone_local) || null,
    full_record_url: raw.full_record_url || null,
    activation_started_at: now,
    activated_at: now,
    is_public: true
  };
}

async function prepareProfilePayload(raw) {
  const { sourceLanguage, sourceFields } = syncSource(raw);
  const englishResult = await translateFieldsForSave(sourceLanguage, "en", sourceFields);
  const spanishResult = await translateFieldsForSave(sourceLanguage, "es", sourceFields);

  return {
    payload: buildPayload(raw, sourceFields, englishResult.fields, spanishResult.fields),
    translationDegraded: englishResult.degraded || spanishResult.degraded
  };
}

function populateForm(values) {
  Object.entries(values).forEach(([key, value]) => {
    if (form.elements[key]) {
      form.elements[key].value = value || "";
      if (form.elements[key].matches?.("select[data-flag-menu]")) {
        syncFlagSelect(form.elements[key]);
      }
    }
  });
}

function setInterfaceLanguage(lang) {
  const normalized = normalizeUiLanguage(lang);
  state.uiLang = normalized;
  root.lang = state.uiLang;
  applyInterfaceCopy(getSetupCopy(state.uiLang));
  interfaceSelect.value = state.uiLang;
  syncFlagSelect(interfaceSelect);

  ensureSetupCopy(normalized).then((copy) => {
    if (state.uiLang !== normalized) {
      return;
    }

    applyInterfaceCopy(copy);
    renderPreview();
  });
}

async function renderPreview() {
  const raw = getFormState();
  const { sourceLanguage, sourceFields } = syncSource(raw);
  const targetLanguage = normalizeProfileLanguage(form.elements.default_language.value || "en");
  let previewFields = sourceFields;

  if (targetLanguage !== sourceLanguage) {
    previewFields = state.translation.results[targetLanguage] || createLoadingFields();
    if (!state.translation.results[targetLanguage]) {
      translateFields(sourceLanguage, targetLanguage, sourceFields)
        .then(() => renderPreview())
        .catch(() => {
          state.translation.results[targetLanguage] = sourceFields;
          showStatus("warning", "statusTranslateErrorTitle", "statusTranslateErrorMessage");
          renderPreview();
        });
    }
  }

  const copy = getSetupCopy(targetLanguage);
  previewCopyNodes.forEach((node) => {
    const key = node.dataset.previewCopy;
    node.textContent = copy[key] || setupTranslations.en[key] || "";
  });

  if (!staticUiLanguages.has(targetLanguage) && !state.uiCopyCache[targetLanguage]) {
    ensureSetupCopy(targetLanguage).then(() => {
      if (normalizeProfileLanguage(form.elements.default_language.value || "en") === targetLanguage) {
        renderPreview();
      }
    });
  }

  document.querySelector('[data-preview="full_name"]').textContent = raw.full_name || "-";
  document.querySelector('[data-preview="conditions"]').textContent = previewFields.conditions || "-";
  document.querySelector('[data-preview="allergies"]').textContent = previewFields.allergies || "-";
  document.querySelector('[data-preview="food_allergies"]').textContent = previewFields.food_allergies || "-";
  document.querySelector('[data-preview="medications"]').textContent = previewFields.medications || "-";
  document.querySelector('[data-preview="devices"]').textContent = previewFields.devices || "-";
  document.querySelector('[data-preview="blood_type"]').textContent = raw.blood_type || "-";
  document.querySelector('[data-preview="age"]').textContent = raw.age || "-";
  document.querySelector('[data-preview="weight"]').textContent = raw.weight || "-";
  document.querySelector('[data-preview="height"]').textContent = raw.height || "-";
  document.querySelector('[data-preview="organ_donor"]').textContent = formatOrganDonorValue(raw.organ_donor, copy);
  document.querySelector('[data-preview="doctor"]').textContent = raw.doctor || "-";
  document.querySelector('[data-preview="clinic"]').textContent = raw.clinic || "-";
  document.querySelector('[data-preview="insurance"]').textContent = raw.insurance || "-";

  const notes = splitNotes(previewFields.notes);
  previewNoteNodes.forEach((node, index) => {
    node.textContent = notes[index] || (index === 0 ? "-" : "");
  });

  const url = buildDisplayUrl(raw.public_slug);
  generatedUrlNodes.forEach((node) => {
    node.textContent = url;
  });
}

function syncSlugFromName() {
  if (!state.slugTouched) {
    form.elements.public_slug.value = buildAutoSlug(form.elements.full_name.value);
  }
}

function startFamilyProfile() {
  const template = getFamilyTemplate() || getFormState();
  clearDraftFields(true);
  applyFamilyTemplate(template);
  showStatus("success", "statusReadyTitle", "statusReadyMessage");
  form.elements.full_name.focus();
  closeSuccessModal();
  renderPreview();
}

function openSavingOverlay() {
  closeErrorModal();
  savingOverlay.classList.remove("is-hidden");
}

function closeSavingOverlay() {
  savingOverlay.classList.add("is-hidden");
}

function openSuccessModal(url, intent = "save") {
  state.lastSavedUrl = url;
  successUrlNode.textContent = url;
  successModal.classList.remove("is-hidden");
  const preferredButton =
    intent === "family"
      ? document.querySelector('[data-action="success-family"]')
      : document.querySelector('[data-action="close-success"]');
  preferredButton?.focus();
}

function closeSuccessModal() {
  successModal.classList.add("is-hidden");
}

function openErrorModal(detail) {
  errorDetailNode.textContent = detail || "Unknown error";
  errorModal.classList.remove("is-hidden");
}

function closeErrorModal() {
  errorModal.classList.add("is-hidden");
}

function setFormEditable(isEditable) {
  form.querySelectorAll("input, textarea, select, button[type='submit']").forEach((field) => {
    if (field.name === "public_slug" || field === interfaceSelect) {
      return;
    }
    field.disabled = !isEditable;
  });

  const familyButton = document.querySelector("[data-action='save-family']");
  if (familyButton) {
    familyButton.hidden = isActivationMode();
    familyButton.disabled = !isEditable;
  }
}

function populateProfileIntoForm(data) {
  const phone1 = parsePhone(data.emergency_contact_1_phone);
  const phone2 = parsePhone(data.emergency_contact_2_phone);
  const sourceFields = sourceFieldsFromRecord(data);

  state.translation.signature = buildSourceSignature(normalizeProfileLanguage(data.default_language || "en"), sourceFields);
  state.translation.results = {
    [normalizeProfileLanguage(data.default_language || "en")]: sourceFields,
    en: {
      conditions: cleanText(data.conditions_en),
      allergies: cleanText(data.allergies_en),
      food_allergies: cleanText(data.food_allergies_en),
      medications: cleanText(data.medications_en),
      devices: cleanText(data.devices_en),
      notes: cleanText(data.notes_en)
    },
    es: {
      conditions: cleanText(data.conditions_es),
      allergies: cleanText(data.allergies_es),
      food_allergies: cleanText(data.food_allergies_es),
      medications: cleanText(data.medications_es),
      devices: cleanText(data.devices_es),
      notes: cleanText(data.notes_es)
    }
  };

  populateForm({
    full_name: cleanText(data.full_name),
    public_slug: cleanText(data.public_slug),
    default_language: normalizeProfileLanguage(data.default_language || "en"),
    blood_type: cleanText(data.blood_type),
    age: cleanText(data.age),
    weight: cleanText(data.weight),
    height: cleanText(data.height),
    organ_donor:
      data.organ_donor === true ? "true" : data.organ_donor === false ? "false" : cleanText(data.organ_donor),
    insurance: cleanText(data.insurance),
    doctor: cleanText(data.doctor),
    clinic: cleanText(data.clinic),
    conditions: sourceFields.conditions,
    allergies: sourceFields.allergies,
    food_allergies: sourceFields.food_allergies,
    medications: sourceFields.medications,
    devices: sourceFields.devices,
    notes: sourceFields.notes,
    emergency_contact_1_name: cleanText(data.emergency_contact_1_name),
    emergency_contact_1_country_code: phone1.countryCode,
    emergency_contact_1_phone_local: phone1.localNumber,
    emergency_contact_2_name: cleanText(data.emergency_contact_2_name),
    emergency_contact_2_country_code: phone2.countryCode,
    emergency_contact_2_phone_local: phone2.localNumber,
    full_record_url: cleanText(data.full_record_url)
  });

  form.elements.public_slug.value = cleanText(data.public_slug);
  state.slugTouched = true;
}

async function loadActivationState() {
  const token = getRequestedActivationToken();
  state.activation.token = token;
  if (tokenInput) {
    tokenInput.value = token;
  }
  toggleActivationLayout(Boolean(token));

  if (!token) {
    setFormEditable(false);
    showStatus("warning", "activationAwaitTitle", "activationAwaitMessage");
    return;
  }

  syncActivationUrl(token);
  setFormEditable(true);
  showStatus("loading", "statusLoadingTitle", "statusLoadingMessage");

  const result = await loadActivationProfile(token);
  populateProfileIntoForm(result.profile || {});
  renderPreview();

  if (result.tokenStatus === "used") {
    setFormEditable(false);
    showStatus("warning", "activationUsedTitle", "activationUsedMessage");
  } else {
    showStatus("success", "activationLoadedTitle", "activationLoadedMessage");
  }
}

async function saveProfile(event) {
  event.preventDefault();

  const raw = getFormState();
  raw.public_slug = cleanText(raw.public_slug) || buildAutoSlug(raw.full_name);
  form.elements.public_slug.value = raw.public_slug;

  if (!raw.full_name) {
    flashStatus("warning", "statusValidationTitle", "statusValidationMessage");
    renderPreview();
    return;
  }

  if (!hasSupabaseConfig()) {
    showStatus("warning", "statusConfigTitle", "statusConfigMessage");
    return;
  }

  openSavingOverlay();
  showStatus("loading", "statusSavingTitle", "statusSavingMessage");

  try {
    const { payload, translationDegraded } = await prepareProfilePayload(raw);
    const url = buildDisplayUrl(raw.public_slug);

    if (isActivationMode()) {
      const activationToken = state.activation.token || getRequestedActivationToken();
      if (!activationToken) {
        throw new Error(getSetupCopy(state.uiLang).activationAwaitMessage || "Activation token missing");
      }

      const result = await submitActivationProfile(activationToken, payload);
      state.activation.tokenStatus = "used";
      setFormEditable(false);
      openSuccessModal(result?.publicUrl || url, "save");
      if (translationDegraded) {
        showStatus("warning", "statusTranslateErrorTitle", "statusTranslateErrorMessage");
      } else {
        showStatus("success", "statusSavedTitle", "statusSavedMessage");
      }
    } else {
      const { error } = await getClient()
        .from(config.profilesWriteTable || "medical_profiles")
        .upsert(payload, { onConflict: "public_slug" });

      if (error) {
        throw error;
      }

      saveFamilyTemplate(raw);
      const emailOk = await notifyAdmin(raw.full_name, raw.public_slug, url);

      openSuccessModal(url, state.pendingMode);
      if (translationDegraded) {
        showStatus("warning", "statusTranslateErrorTitle", "statusTranslateErrorMessage");
      } else if (emailOk) {
        showStatus("success", "statusSavedTitle", "statusSavedMessage");
      } else {
        showStatus("warning", "statusEmailWarningTitle", "statusEmailWarningMessage");
      }
    }
  } catch (error) {
    console.warn("Save failed", error);
    const details = extractErrorDetails(error);
    showStatus("error", "statusSaveErrorTitle", "statusSaveErrorMessage", { details });
    openErrorModal(details);
  } finally {
    state.pendingMode = "save";
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

    populateProfileIntoForm(data);
    flashStatus("success", "statusLoadedTitle", "statusLoadedMessage", { slug });
  } catch (error) {
    console.warn("Load existing profile failed", error);
    flashStatus("warning", "statusLoadErrorTitle", "statusLoadErrorMessage", { slug });
  }
}

function bindEvents() {
  const saveProfileButton = form.querySelector('button[type="submit"]');
  const saveFamilyButton = document.querySelector('[data-action="save-family"]');

  if (tokenEntryForm) {
    tokenEntryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const token = extractActivationToken(tokenInput?.value);
      if (!token) {
        flashStatus("warning", "activationAwaitTitle", "activationAwaitMessage");
        return;
      }

      window.location.href = buildActivationUrl(token);
    });
  }

  interfaceSelect.addEventListener("change", () => {
    setInterfaceLanguage(interfaceSelect.value);
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

  form.elements.default_language.addEventListener("change", () => {
    renderPreview();
  });

  form.addEventListener("submit", saveProfile);
  saveProfileButton.addEventListener("click", () => {
    state.pendingMode = "save";
  });
  if (saveFamilyButton) {
    saveFamilyButton.hidden = isActivationMode();
    saveFamilyButton.addEventListener("click", () => {
      state.pendingMode = "family";
      form.requestSubmit();
    });
  }
  const successFamilyButton = document.querySelector("[data-action='success-family']");
  if (successFamilyButton) {
    successFamilyButton.hidden = isActivationMode();
    successFamilyButton.addEventListener("click", startFamilyProfile);
  }
  document.querySelectorAll('[data-action="close-success"]').forEach((button) => {
    button.addEventListener("click", closeSuccessModal);
  });
  document.querySelectorAll('[data-action="close-error"]').forEach((button) => {
    button.addEventListener("click", closeErrorModal);
  });
}

async function init() {
  populateCountryCodes();
  initFlagSelects();
  setupHelperPlaceholders();
  clearDraftFields(Boolean(getFamilyTemplate()));
  bindEvents();
  setInterfaceLanguage(state.uiLang);
  showStatus(
    hasSupabaseConfig() ? "success" : "warning",
    hasSupabaseConfig() ? "statusReadyTitle" : "statusConfigTitle",
    hasSupabaseConfig() ? "statusReadyMessage" : "statusConfigMessage"
  );

  if (isActivationMode()) {
    await loadActivationState().catch((error) => {
      console.warn("Activation state load failed", error);
      setFormEditable(false);
      toggleActivationLayout(false);
      showStatus("error", "activationInvalidTitle", "activationInvalidMessage");
    });
  } else {
    await loadExistingProfile();
  }

  renderPreview();
}

init();
