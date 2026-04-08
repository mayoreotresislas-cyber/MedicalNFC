const uiTranslations = {
  en: {
    brandTagline: "Medical form and profile access",
    primaryBuilderAction: "Open Medical Form",
    languageLabel: "Language",
    overviewKicker: "Medical form",
    overviewTitle: "This page explains the medical form that will be linked to the NFC.",
    overviewText:
      "This page is for the person who will complete the medical information before the NFC is programmed. You will add one person's emergency details, extra medical information, family contacts, and the language that should appear when the profile is scanned.",
    overviewPrimary: "Complete Medical Form",
    whatYouWillFill: "What you will fill",
    fillItem1: "Basic identity and blood type",
    fillItem2: "Conditions, allergies, medications, and devices",
    fillItem3: "Emergency contacts for family or caregivers",
    fillItem4: "Optional link to the complete medical record",
    howItWorksKicker: "How it works",
    howItWorksTitle: "What happens after the form is completed",
    howStep1: "Complete the medical profile form.",
    howStep2: "Save the profile and generate the secure URL.",
    howStep3: "The administrator receives that URL by email.",
    howStep4: "That URL is the one recorded in the NFC tag.",
    importantKicker: "Important",
    importantTitle: "The medical data is not written directly to the NFC chip",
    importantText:
      "The chip stores only a secure web address. That keeps the information easier to update and better organized for future changes.",
    profileKicker: "Medical profile",
    profileSubtitle: "Emergency information shown from an NFC medical profile.",
    screen1Tag: "Emergency",
    screen1Step: "Screen 1",
    emergencyTitle: "Emergency Medical Info",
    screen2Tag: "Details",
    screen2Step: "Screen 2",
    detailsTitle: "Additional Medical Information",
    labelName: "Name",
    labelConditions: "Condition(s)",
    labelAllergies: "Severe Allergies",
    labelMedications: "Critical Medications",
    labelDevices: "Medical Devices",
    labelBloodType: "Blood Type",
    labelDoctor: "Doctor",
    labelClinic: "Clinic",
    labelInsurance: "Insurance",
    importantNotes: "Important Notes",
    contactsTitle: "Emergency Contacts",
    contact1Label: "Primary contact",
    contact2Label: "Secondary contact",
    callButton: "Call",
    whatsappButton: "WhatsApp",
    shareLocation: "Share current location",
    recordLink: "Open full medical record",
    legalText:
      "This information is provided by the profile owner. In case of emergency, contact local emergency services.",
    statusLoadingTitle: "Loading profile",
    statusLoadingMessage: "Looking up the requested medical profile.",
    statusErrorTitle: "Profile unavailable",
    statusErrorMessage: "We could not load this medical profile right now.",
    statusLocationCopiedTitle: "Location ready",
    statusLocationCopiedMessage: "A link with your current location is ready to share.",
    statusLocationErrorTitle: "Location unavailable",
    statusLocationErrorMessage: "The browser could not access your current location."
  },
  es: {
    brandTagline: "Formulario medico y acceso al perfil",
    primaryBuilderAction: "Abrir Formulario Medico",
    languageLabel: "Idioma",
    overviewKicker: "Formulario medico",
    overviewTitle: "Esta pagina explica el formulario medico que estara ligado al NFC.",
    overviewText:
      "Esta pagina es para la persona que va a completar la informacion medica antes de grabar el NFC. Aqui vas a capturar la informacion de emergencia de una persona, datos medicos adicionales, contactos familiares y el idioma en que se vera el perfil al escanearlo.",
    overviewPrimary: "Completar Formulario Medico",
    whatYouWillFill: "Lo que vas a llenar",
    fillItem1: "Identidad basica y tipo de sangre",
    fillItem2: "Condiciones, alergias, medicamentos y dispositivos",
    fillItem3: "Contactos de emergencia para familia o cuidadores",
    fillItem4: "Enlace opcional al expediente medico completo",
    howItWorksKicker: "Como funciona",
    howItWorksTitle: "Que sucede despues de completar el formulario",
    howStep1: "Completa el formulario del perfil medico.",
    howStep2: "Guarda el perfil y genera el URL seguro.",
    howStep3: "El administrador recibe ese URL por correo.",
    howStep4: "Ese URL es el que se graba en el chip NFC.",
    importantKicker: "Importante",
    importantTitle: "Los datos medicos no se escriben directamente en el chip NFC",
    importantText:
      "El chip guarda solo una direccion web segura. Eso hace que la informacion sea mas facil de actualizar y mejor organizada para cambios futuros.",
    profileKicker: "Perfil medico",
    profileSubtitle: "Informacion de emergencia mostrada desde un perfil medico NFC.",
    screen1Tag: "Emergencia",
    screen1Step: "Pantalla 1",
    emergencyTitle: "Informacion Medica de Emergencia",
    screen2Tag: "Detalle",
    screen2Step: "Pantalla 2",
    detailsTitle: "Informacion Medica Adicional",
    labelName: "Nombre",
    labelConditions: "Condiciones",
    labelAllergies: "Alergias graves",
    labelMedications: "Medicamentos criticos",
    labelDevices: "Dispositivos medicos",
    labelBloodType: "Tipo de sangre",
    labelDoctor: "Medico",
    labelClinic: "Clinica",
    labelInsurance: "Seguro",
    importantNotes: "Notas importantes",
    contactsTitle: "Contactos de emergencia",
    contact1Label: "Contacto principal",
    contact2Label: "Contacto secundario",
    callButton: "Llamar",
    whatsappButton: "WhatsApp",
    shareLocation: "Compartir ubicacion actual",
    recordLink: "Abrir expediente completo",
    legalText:
      "Esta informacion es proporcionada por el propietario del perfil. En caso de emergencia, contacte a los servicios medicos locales.",
    statusLoadingTitle: "Cargando perfil",
    statusLoadingMessage: "Buscando el perfil medico solicitado.",
    statusErrorTitle: "Perfil no disponible",
    statusErrorMessage: "No pudimos cargar este perfil medico en este momento.",
    statusLocationCopiedTitle: "Ubicacion lista",
    statusLocationCopiedMessage: "Se preparo un enlace con tu ubicacion actual para compartirlo.",
    statusLocationErrorTitle: "Ubicacion no disponible",
    statusLocationErrorMessage: "El navegador no pudo acceder a tu ubicacion actual."
  }
};

const languageOptions = {
  en: "English",
  es: "Spanish",
  fr: "French",
  pt: "Portuguese",
  de: "German",
  it: "Italian"
};

const demoProfile = {
  default_language: "en",
  full_name: "John Doe",
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
  blood_type: "O+",
  doctor: "Dr. Smith",
  clinic: "XYZ Medical Center",
  insurance: "BlueCross",
  emergency_contact_1_name: "Jane Doe",
  emergency_contact_1_phone: "+1 (555) 123-4567",
  emergency_contact_1_whatsapp: "15551234567",
  emergency_contact_2_name: "Mike Doe",
  emergency_contact_2_phone: "+1 (555) 987-6543",
  emergency_contact_2_whatsapp: "15559876543"
};

const config = window.NFC_MEDICO_CONFIG || {};
const root = document.documentElement;
const languageSelect = document.querySelector("[data-language-select]");
const textNodes = document.querySelectorAll("[data-i18n]");
const fieldNodes = document.querySelectorAll("[data-field]");
const noteNodes = document.querySelectorAll("[data-note]");
const runtimeStatus = document.querySelector("[data-runtime-status]");
const runtimeTitle = document.querySelector("[data-runtime-title]");
const runtimeMessage = document.querySelector("[data-runtime-message]");
const recordLink = document.querySelector('[data-action="record-link"]');
const callLink = document.querySelector('[data-action="call-primary"]');
const whatsappLink = document.querySelector('[data-action="whatsapp-primary"]');
const shareLocationButton = document.querySelector('[data-action="share-location"]');
const overviewView = document.querySelector('[data-view="overview"]');
const profileView = document.querySelector('[data-view="profile"]');

const state = {
  lang: detectInitialLanguage(),
  identifier: "",
  client: null,
  profile: demoProfile,
  translationCache: {},
  baseStatus: null,
  statusTimer: null
};

function detectInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (requested && languageOptions[requested]) {
    return requested;
  }

  const browserCode = navigator.language?.slice(0, 2).toLowerCase();
  return languageOptions[browserCode] ? browserCode : "en";
}

function getCopy() {
  return uiTranslations[state.lang] || uiTranslations.en;
}

function cleanText(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).trim();
}

function resolveField(record, field) {
  const sourceLanguage = cleanText(record.default_language || "en").slice(0, 2).toLowerCase();
  if (sourceLanguage === "es") {
    return cleanText(record[`${field}_source`] || record[`${field}_es`] || record[`${field}_en`]);
  }
  return cleanText(record[`${field}_source`] || record[`${field}_en`] || record[`${field}_es`]);
}

function resolveNotes(record) {
  const raw = resolveField(record, "notes");
  return raw
    .split(/\r?\n+/)
    .map((item) => item.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);
}

function sanitizeTel(phone) {
  return cleanText(phone).replace(/[^\d+]/g, "");
}

function sanitizeWhatsapp(phone) {
  return cleanText(phone).replace(/\D/g, "");
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

function detectIdentifier() {
  const url = new URL(window.location.href);
  const querySlug = url.searchParams.get("slug");
  if (querySlug) {
    return decodeURIComponent(querySlug);
  }

  const segments = url.pathname.split("/").filter(Boolean);
  const medIndex = segments.findIndex((segment) => segment.toLowerCase() === "med");
  if (medIndex >= 0 && segments[medIndex + 1]) {
    return decodeURIComponent(segments[medIndex + 1]);
  }

  return cleanText(config.defaultSlug);
}

function renderStatus(status = state.baseStatus) {
  if (!status) {
    runtimeStatus.hidden = true;
    return;
  }

  const copy = getCopy();
  runtimeStatus.hidden = false;
  runtimeStatus.dataset.state = status.type;
  runtimeTitle.textContent = copy[status.titleKey] || uiTranslations.en[status.titleKey];
  runtimeMessage.textContent = copy[status.messageKey] || uiTranslations.en[status.messageKey];
}

function showStatus(type, titleKey, messageKey) {
  state.baseStatus = { type, titleKey, messageKey };
  renderStatus();
}

function flashStatus(type, titleKey, messageKey) {
  window.clearTimeout(state.statusTimer);
  renderStatus({ type, titleKey, messageKey });
  state.statusTimer = window.setTimeout(() => renderStatus(), 4200);
}

function applyCopy() {
  const copy = getCopy();
  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[key] || uiTranslations.en[key] || "";
  });
  languageSelect.value = state.lang;
  renderStatus();
}

async function translateFields(record, targetLanguage) {
  const sourceLanguage = cleanText(record.default_language || "en").slice(0, 2).toLowerCase();
  if (targetLanguage === sourceLanguage) {
    return {
      conditions: resolveField(record, "conditions"),
      allergies: resolveField(record, "allergies"),
      medications: resolveField(record, "medications"),
      devices: resolveField(record, "devices"),
      notes: resolveField(record, "notes")
    };
  }

  const cacheKey = `${sourceLanguage}:${targetLanguage}:${record.public_slug || "demo"}`;
  if (state.translationCache[cacheKey]) {
    return state.translationCache[cacheKey];
  }

  const sourceFields = {
    conditions: resolveField(record, "conditions"),
    allergies: resolveField(record, "allergies"),
    medications: resolveField(record, "medications"),
    devices: resolveField(record, "devices"),
    notes: resolveField(record, "notes")
  };

  if (!config.translationFunctionName || !hasSupabaseConfig()) {
    return sourceFields;
  }

  try {
    const response = await fetch(`${config.supabaseUrl}/functions/v1/${config.translationFunctionName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: config.supabaseAnonKey,
        Authorization: `Bearer ${config.supabaseAnonKey}`
      },
      body: JSON.stringify({
        sourceLanguage,
        targetLanguage,
        fields: sourceFields
      })
    });

    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(payload?.error || "Translation failed");
    }

    const translated = payload?.fields || sourceFields;
    state.translationCache[cacheKey] = translated;
    return translated;
  } catch (error) {
    console.warn("Public translation failed", error);
    return sourceFields;
  }
}

async function renderProfile() {
  const record = state.profile || demoProfile;
  const translated = await translateFields(record, state.lang);

  const values = {
    name: cleanText(record.full_name) || "N/A",
    conditions: cleanText(translated.conditions) || "N/A",
    allergies: cleanText(translated.allergies) || "N/A",
    medications: cleanText(translated.medications) || "N/A",
    devices: cleanText(translated.devices) || "N/A",
    bloodType: cleanText(record.blood_type) || "N/A",
    doctor: cleanText(record.doctor) || "N/A",
    clinic: cleanText(record.clinic) || "N/A",
    insurance: cleanText(record.insurance) || "N/A",
    contact1Name: cleanText(record.emergency_contact_1_name),
    contact1Phone: cleanText(record.emergency_contact_1_phone),
    contact2Name: cleanText(record.emergency_contact_2_name),
    contact2Phone: cleanText(record.emergency_contact_2_phone)
  };

  fieldNodes.forEach((node) => {
    const mapped = values[node.dataset.field];
    node.textContent = mapped || "-";
  });

  const notes = cleanText(translated.notes)
    .split(/\r?\n+/)
    .map((item) => item.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);
  noteNodes.forEach((node) => {
    node.textContent = notes[Number(node.dataset.note)] || "";
  });

  callLink.href = values.contact1Phone ? `tel:${sanitizeTel(values.contact1Phone)}` : "#";
  whatsappLink.hidden = !record.emergency_contact_1_whatsapp;
  whatsappLink.href = record.emergency_contact_1_whatsapp
    ? `https://wa.me/${sanitizeWhatsapp(record.emergency_contact_1_whatsapp)}`
    : "#";

  const hasRecord = Boolean(cleanText(record.full_record_url));
  recordLink.classList.toggle("is-hidden", !hasRecord);
  if (hasRecord) {
    recordLink.href = record.full_record_url;
  }

  document.title = `${values.name} | NFC Medico`;
}

async function loadProfile() {
  state.identifier = detectIdentifier();
  if (!state.identifier) {
    overviewView.classList.remove("is-hidden");
    profileView.classList.add("is-hidden");
    state.baseStatus = null;
    renderStatus();
    return;
  }

  overviewView.classList.add("is-hidden");
  profileView.classList.remove("is-hidden");

  if (!hasSupabaseConfig()) {
    state.profile = demoProfile;
    await renderProfile();
    return;
  }

  showStatus("loading", "statusLoadingTitle", "statusLoadingMessage");

  try {
    const { data, error } = await getClient()
      .from(config.profilesReadTable || "medical_profiles_public")
      .select("*")
      .eq(config.lookupField || "public_slug", state.identifier)
      .maybeSingle();

    if (error || !data) {
      throw error || new Error("Profile not found");
    }

    state.profile = data;
    state.baseStatus = null;
    renderStatus();
    await renderProfile();
  } catch (error) {
    console.warn("Profile load failed", error);
    showStatus("error", "statusErrorTitle", "statusErrorMessage");
    state.profile = demoProfile;
    await renderProfile();
  }
}

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 0
    });
  });
}

async function handleShareLocation() {
  try {
    const position = await getCurrentPosition();
    const latitude = position.coords.latitude.toFixed(6);
    const longitude = position.coords.longitude.toFixed(6);
    const mapUrl = `https://maps.google.com/?q=${latitude},${longitude}`;

    if (navigator.share) {
      await navigator.share({ title: "Location", text: mapUrl, url: mapUrl });
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(mapUrl);
    } else {
      window.open(mapUrl, "_blank", "noopener");
    }

    flashStatus("success", "statusLocationCopiedTitle", "statusLocationCopiedMessage");
  } catch (error) {
    flashStatus("error", "statusLocationErrorTitle", "statusLocationErrorMessage");
  }
}

languageSelect.addEventListener("change", async (event) => {
  state.lang = event.target.value;
  root.lang = state.lang;
  applyCopy();
  if (!profileView.classList.contains("is-hidden")) {
    await renderProfile();
  }

  const url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  window.history.replaceState({}, "", url);
});

shareLocationButton.addEventListener("click", handleShareLocation);

applyCopy();
loadProfile();
