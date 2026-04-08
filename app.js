const translations = {
  en: {
    brandTagline: "Emergency-ready medical landing",
    languageLabel: "Language",
    eyebrow: "Medical NFC landing page",
    heroTitle: "Clear emergency information, fast actions, and a cleaner bilingual experience.",
    heroText:
      "Designed so first responders see the critical information first, while family members and clinics can access deeper details without the page feeling crowded.",
    heroPrimary: "View emergency screens",
    heroSecondary: "Open setup portal",
    heroPoint1: "High-contrast layout for urgent readability",
    heroPoint2: "Language selector instead of duplicated blocks",
    heroPoint3: "Ready for public + premium private views",
    highlightLabel: "Recommended structure",
    highlight1: "Screen 1: emergency-only, visible immediately",
    highlight2: "Screen 2: detailed profile and optional records",
    highlight3: "Direct call, WhatsApp, and location sharing",
    screensKicker: "Core layout",
    screensTitle: "Two focused screens instead of one crowded page",
    screensText:
      "The first card is optimized for urgency. The second card expands the profile with more context and optional medical records.",
    screen1Tag: "Critical",
    screen1Step: "Screen 1",
    emergencyTitle: "Emergency Medical Info",
    labelName: "Name",
    labelConditions: "Condition(s)",
    labelAllergies: "Severe Allergies",
    labelMedications: "Critical Medications",
    labelDevices: "Medical Devices",
    contactsTitle: "Emergency Contacts",
    contact1Label: "Contact 1",
    contact2Label: "Contact 2",
    importantNotes: "Important Notes",
    callButton: "📞 Call",
    whatsappButton: "💬 WhatsApp",
    screen2Tag: "Detailed",
    screen2Step: "Screen 2",
    detailsTitle: "Additional Medical Information",
    labelBloodType: "Blood Type",
    labelDoctor: "Doctor",
    labelClinic: "Clinic",
    labelInsurance: "Insurance",
    recordLink: "Full Medical Record (optional)",
    privacyTitle: "Privacy Model",
    privacyOptionATitle: "Option A",
    privacyOptionAText: "Everything visible without login.",
    privacyOptionBTitle: "Option B",
    privacyOptionBText:
      "Emergency card is public. Detailed information stays behind PIN or login.",
    shareLocation: "📍 Share location",
    premiumNote: "Premium-ready structure for subscriptions and privacy tiers.",
    nfcKicker: "NFC setup",
    nfcTitle: "What to write on the NFC tag",
    nfcText: "Always store a secure URL, not the medical data directly on the chip.",
    nfcBenefit1: "Update information without reprogramming the chip",
    nfcBenefit2: "Protect privacy and control visibility levels",
    nfcBenefit3: "Enable subscriptions or premium features",
    actionsKicker: "Revenue features",
    actionsTitle: "Functional actions that feel useful immediately",
    ctaCallTitle: "Call emergency contact",
    ctaCallText: "One tap to the primary contact.",
    ctaWhatsappTitle: "Message with WhatsApp",
    ctaWhatsappText: "Fast follow-up for relatives or caregivers.",
    ctaLocationTitle: "Share location",
    ctaLocationText: "Optional advanced feature for premium plans.",
    supabaseKicker: "Supabase",
    supabaseTitle: "Suggested database structure",
    supabaseText: "Add a medical profile table and a new target type for medical NFC tags.",
    targetTypeLabel: "nfc_tags.target_type",
    flowKicker: "Operational flow",
    flowTitle: "Simple workflow from product to scan",
    flow1: "Print a medical bracelet, card, or keychain.",
    flow2: "Insert the NFC chip.",
    flow3: "Write the secure profile URL.",
    flow4: "User scans the tag with their phone.",
    flow5: "The web app reads Supabase and shows the profile.",
    flow6: "Log the event for analytics or traceability.",
    productKicker: "Commercial model",
    productTitle: "A product that is practical, emotional, and easy to sell",
    kitTitle: "Medical NFC Kit",
    kit1: "3D bracelet or keychain",
    kit2: "NFC chip included",
    kit3: "Hosted medical landing page",
    kit4: "Profile setup and activation",
    priceUnitLabel: "Unit price",
    priceSetupLabel: "Setup",
    priceMonthlyLabel: "Monthly",
    nicheTitle: "Strong market niches",
    niche1: "Diabetics",
    niche2: "People with epilepsy",
    niche3: "Older adults",
    niche4: "Children",
    niche5: "Extreme athletes",
    niche6: "Severe allergy patients",
    legalEn:
      "EN: This information is provided by the owner. In case of emergency, contact local emergency services.",
    legalEs:
      "ES: Esta informacion es proporcionada por el usuario. En caso de emergencia, contacte a servicios medicos.",
    statusDemoTitle: "Demo mode active",
    statusDemoMessage:
      "Add the URL and anon key of a dedicated NFC Medico Supabase project in config.js, then open this page with a slug like ?slug=ABC123 or /med/ABC123.",
    statusMissingSlugTitle: "Waiting for a profile slug",
    statusMissingSlugMessage:
      "Supabase is configured, but this page did not receive a slug. Try ?slug=ABC123 or set defaultSlug in config.js.",
    statusLoadingTitle: "Loading medical profile",
    statusLoadingMessage: "Looking up profile {slug} in Supabase.",
    statusLiveTitle: "Live profile loaded",
    statusLiveMessage: "Showing real data for slug {slug}.",
    statusErrorTitle: "Could not load profile",
    statusErrorMessage:
      "The page stayed in demo mode because slug {slug} was not found or Supabase returned an error.",
    statusScanLoggedTitle: "Scan event logged",
    statusScanLoggedMessage: "The access event was recorded successfully.",
    statusLocationCopiedTitle: "Location ready to share",
    statusLocationCopiedMessage: "Your current location link was copied to the clipboard.",
    statusLocationErrorTitle: "Location unavailable",
    statusLocationErrorMessage:
      "The browser could not access your location. Check browser permissions and try again."
  },
  es: {
    brandTagline: "Landing medica lista para emergencias",
    languageLabel: "Idioma",
    eyebrow: "Landing medica NFC",
    heroTitle: "Informacion de emergencia clara, acciones rapidas y una experiencia bilingue mas limpia.",
    heroText:
      "Pensada para que el rescatista vea lo critico primero, mientras familiares y clinicas acceden al detalle sin que la pagina se vea saturada.",
    heroPrimary: "Ver pantallas de emergencia",
    heroSecondary: "Abrir portal de llenado",
    heroPoint1: "Diseno de alto contraste para lectura urgente",
    heroPoint2: "Selector de idioma en lugar de bloques duplicados",
    heroPoint3: "Lista para vista publica y version premium privada",
    highlightLabel: "Estructura recomendada",
    highlight1: "Pantalla 1: solo emergencia, visible al instante",
    highlight2: "Pantalla 2: detalle medico y expediente opcional",
    highlight3: "Llamada directa, WhatsApp y compartir ubicacion",
    screensKicker: "Estructura base",
    screensTitle: "Dos pantallas enfocadas en lugar de una pagina amontonada",
    screensText:
      "La primera tarjeta esta optimizada para urgencia. La segunda amplia el perfil con mas contexto y expediente medico opcional.",
    screen1Tag: "Critico",
    screen1Step: "Pantalla 1",
    emergencyTitle: "Informacion Medica de Emergencia",
    labelName: "Nombre",
    labelConditions: "Condiciones",
    labelAllergies: "Alergias graves",
    labelMedications: "Medicamentos criticos",
    labelDevices: "Dispositivos medicos",
    contactsTitle: "Contactos de emergencia",
    contact1Label: "Contacto 1",
    contact2Label: "Contacto 2",
    importantNotes: "Notas importantes",
    callButton: "📞 Llamar",
    whatsappButton: "💬 WhatsApp",
    screen2Tag: "Detalle",
    screen2Step: "Pantalla 2",
    detailsTitle: "Informacion Medica Adicional",
    labelBloodType: "Tipo de sangre",
    labelDoctor: "Medico",
    labelClinic: "Clinica",
    labelInsurance: "Seguro",
    recordLink: "Expediente completo (opcional)",
    privacyTitle: "Modelo de privacidad",
    privacyOptionATitle: "Opcion A",
    privacyOptionAText: "Todo visible sin login.",
    privacyOptionBTitle: "Opcion B",
    privacyOptionBText:
      "La tarjeta de emergencia es publica. La informacion detallada queda protegida con PIN o login.",
    shareLocation: "📍 Compartir ubicacion",
    premiumNote: "Estructura ideal para suscripciones y niveles de privacidad.",
    nfcKicker: "Configuracion NFC",
    nfcTitle: "Que grabar en el chip NFC",
    nfcText: "Guarda siempre una URL segura, no los datos medicos directos en el chip.",
    nfcBenefit1: "Actualizar informacion sin reprogramar el chip",
    nfcBenefit2: "Cuidar privacidad y controlar niveles de acceso",
    nfcBenefit3: "Vender suscripciones o funciones premium",
    actionsKicker: "Funciones rentables",
    actionsTitle: "Acciones utiles que se sienten funcionales desde el primer toque",
    ctaCallTitle: "Llamar al contacto de emergencia",
    ctaCallText: "Un toque al contacto principal.",
    ctaWhatsappTitle: "Enviar mensaje por WhatsApp",
    ctaWhatsappText: "Seguimiento rapido para familiares o cuidadores.",
    ctaLocationTitle: "Compartir ubicacion",
    ctaLocationText: "Funcion avanzada opcional para planes premium.",
    supabaseKicker: "Supabase",
    supabaseTitle: "Estructura sugerida de base de datos",
    supabaseText: "Agrega una tabla para perfiles medicos y un nuevo tipo de destino para tags medicos NFC.",
    targetTypeLabel: "nfc_tags.target_type",
    flowKicker: "Flujo operativo",
    flowTitle: "Proceso simple desde el producto hasta el escaneo",
    flow1: "Imprime una pulsera, tarjeta o llavero medico.",
    flow2: "Inserta el chip NFC.",
    flow3: "Graba la URL segura del perfil.",
    flow4: "El usuario toca el tag con su telefono.",
    flow5: "La web consulta Supabase y muestra el perfil.",
    flow6: "Registra el evento para analitica o trazabilidad.",
    productKicker: "Modelo comercial",
    productTitle: "Un producto practico, emocional y facil de vender",
    kitTitle: "Medical NFC Kit",
    kit1: "Pulsera o llavero 3D",
    kit2: "Chip NFC incluido",
    kit3: "Landing medica hospedada",
    kit4: "Configuracion y activacion del perfil",
    priceUnitLabel: "Precio por pieza",
    priceSetupLabel: "Setup",
    priceMonthlyLabel: "Mensualidad",
    nicheTitle: "Nichos fuertes",
    niche1: "Diabeticos",
    niche2: "Personas con epilepsia",
    niche3: "Adultos mayores",
    niche4: "Ninos",
    niche5: "Deportistas extremos",
    niche6: "Pacientes con alergias graves",
    legalEn:
      "EN: This information is provided by the owner. In case of emergency, contact local emergency services.",
    legalEs:
      "ES: Esta informacion es proporcionada por el usuario. En caso de emergencia, contacte a servicios medicos.",
    statusDemoTitle: "Modo demo activo",
    statusDemoMessage:
      "Agrega en config.js la URL y anon key de un proyecto Supabase exclusivo para NFC Medico y abre la pagina con un slug como ?slug=ABC123 o /med/ABC123.",
    statusMissingSlugTitle: "Falta el slug del perfil",
    statusMissingSlugMessage:
      "Supabase ya esta configurado, pero esta pagina no recibio un slug. Prueba con ?slug=ABC123 o define defaultSlug en config.js.",
    statusLoadingTitle: "Cargando perfil medico",
    statusLoadingMessage: "Buscando el perfil {slug} en Supabase.",
    statusLiveTitle: "Perfil real cargado",
    statusLiveMessage: "Mostrando datos reales para el slug {slug}.",
    statusErrorTitle: "No se pudo cargar el perfil",
    statusErrorMessage:
      "La pagina se quedo en modo demo porque el slug {slug} no existe o Supabase devolvio un error.",
    statusScanLoggedTitle: "Escaneo registrado",
    statusScanLoggedMessage: "El evento de acceso se guardo correctamente.",
    statusLocationCopiedTitle: "Ubicacion lista para compartir",
    statusLocationCopiedMessage: "Se copio al portapapeles un enlace con tu ubicacion actual.",
    statusLocationErrorTitle: "No se pudo obtener la ubicacion",
    statusLocationErrorMessage:
      "El navegador no pudo acceder a tu ubicacion. Revisa los permisos e intenta de nuevo."
  }
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
const langButtons = document.querySelectorAll("[data-lang]");
const textNodes = document.querySelectorAll("[data-i18n]");
const fieldNodes = document.querySelectorAll("[data-field]");
const noteNodes = document.querySelectorAll("[data-note]");
const runtimeStatus = document.querySelector("[data-runtime-status]");
const runtimeTitle = document.querySelector("[data-runtime-title]");
const runtimeMessage = document.querySelector("[data-runtime-message]");
const contactCard1 = document.querySelector('[data-contact-card="1"]');
const contactCard2 = document.querySelector('[data-contact-card="2"]');
const callLinks = document.querySelectorAll('[data-action="call-primary"]');
const whatsappLinks = document.querySelectorAll('[data-action="whatsapp-primary"]');
const shareLocationButtons = document.querySelectorAll('[data-action="share-location"]');
const recordLink = document.querySelector('[data-action="record-link"]');

const state = {
  lang: detectInitialLanguage(),
  profile: demoProfile,
  identifier: "",
  client: null,
  baseStatus: null,
  statusTimer: null
};

function detectInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  if (requested === "es" || requested === "en") {
    return requested;
  }

  return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function normalizeLanguage(lang) {
  return lang === "es" ? "es" : "en";
}

function formatString(template, values = {}) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function cleanText(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (Array.isArray(value)) {
    return value.filter(Boolean).join(", ");
  }

  return String(value).trim();
}

function resolveField(record, field, lang) {
  const fallbackLang = lang === "en" ? "es" : "en";
  return cleanText(record[`${field}_${lang}`] ?? record[field] ?? record[`${field}_${fallbackLang}`]);
}

function resolveNotes(record, lang) {
  const fallbackLang = lang === "en" ? "es" : "en";
  const source = record[`notes_${lang}`] ?? record.notes ?? record[`notes_${fallbackLang}`] ?? [];

  if (Array.isArray(source)) {
    return source.map(cleanText).filter(Boolean);
  }

  return cleanText(source)
    .split(/\r?\n|;/)
    .map((item) => item.replace(/^[-*•]\s*/, "").trim())
    .filter(Boolean);
}

function sanitizeTel(phone) {
  return cleanText(phone).replace(/[^\d+]/g, "");
}

function sanitizeWhatsapp(phone) {
  return cleanText(phone).replace(/\D/g, "");
}

function getProfileData(lang) {
  const record = state.profile || demoProfile;

  return {
    name: resolveField(record, "full_name", lang) || "N/A",
    conditions: resolveField(record, "conditions", lang) || "N/A",
    allergies: resolveField(record, "allergies", lang) || "N/A",
    medications: resolveField(record, "medications", lang) || "N/A",
    devices: resolveField(record, "devices", lang) || "N/A",
    bloodType: resolveField(record, "blood_type", lang) || "N/A",
    doctor: resolveField(record, "doctor", lang) || "N/A",
    clinic: resolveField(record, "clinic", lang) || "N/A",
    insurance: resolveField(record, "insurance", lang) || "N/A",
    contact1Name: resolveField(record, "emergency_contact_1_name", lang) || "N/A",
    contact1Phone: cleanText(record.emergency_contact_1_phone),
    contact1Whatsapp: cleanText(record.emergency_contact_1_whatsapp || record.emergency_contact_1_phone),
    contact2Name: resolveField(record, "emergency_contact_2_name", lang) || "",
    contact2Phone: cleanText(record.emergency_contact_2_phone),
    contact2Whatsapp: cleanText(record.emergency_contact_2_whatsapp || record.emergency_contact_2_phone),
    notes: resolveNotes(record, lang),
    fullRecordUrl: cleanText(record.full_record_url)
  };
}

function setTextLanguage(lang) {
  const copy = translations[lang];

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });
}

function setFieldText(field, value) {
  fieldNodes.forEach((node) => {
    if (node.dataset.field === field) {
      node.textContent = value;
    }
  });
}

function setInteractiveState(node, enabled, href = "#") {
  node.classList.toggle("is-disabled", !enabled);
  node.setAttribute("aria-disabled", String(!enabled));

  if (node.tagName === "A") {
    node.href = enabled ? href : "#";
    if (enabled) {
      node.removeAttribute("tabindex");
    } else {
      node.setAttribute("tabindex", "-1");
    }
  }
}

function updateContactCard(card, name, phone) {
  if (!card) {
    return;
  }

  const isVisible = Boolean(name || phone);
  card.classList.toggle("is-hidden", !isVisible);

  if (!isVisible) {
    return;
  }

  setInteractiveState(card, Boolean(phone), `tel:${sanitizeTel(phone)}`);
}

function applyProfile(lang) {
  const profile = getProfileData(lang);

  setFieldText("name", profile.name);
  setFieldText("conditions", profile.conditions);
  setFieldText("allergies", profile.allergies);
  setFieldText("medications", profile.medications);
  setFieldText("devices", profile.devices);
  setFieldText("bloodType", profile.bloodType);
  setFieldText("doctor", profile.doctor);
  setFieldText("clinic", profile.clinic);
  setFieldText("insurance", profile.insurance);
  setFieldText("contact1Name", profile.contact1Name);
  setFieldText("contact1Phone", profile.contact1Phone || "N/A");
  setFieldText("contact2Name", profile.contact2Name || "");
  setFieldText("contact2Phone", profile.contact2Phone || "");

  noteNodes.forEach((node) => {
    node.textContent = profile.notes[Number(node.dataset.note)] || "";
  });

  updateContactCard(contactCard1, profile.contact1Name, profile.contact1Phone);
  updateContactCard(contactCard2, profile.contact2Name, profile.contact2Phone);

  const canCall = Boolean(profile.contact1Phone);
  const callHref = `tel:${sanitizeTel(profile.contact1Phone)}`;
  callLinks.forEach((link) => setInteractiveState(link, canCall, callHref));

  const whatsappSource = profile.contact1Whatsapp || profile.contact1Phone;
  const canWhatsapp = Boolean(whatsappSource);
  const whatsappHref = `https://wa.me/${sanitizeWhatsapp(whatsappSource)}`;
  whatsappLinks.forEach((link) => setInteractiveState(link, canWhatsapp, whatsappHref));

  const hasRecord = Boolean(profile.fullRecordUrl);
  recordLink.classList.toggle("is-hidden", !hasRecord);
  if (hasRecord) {
    recordLink.href = profile.fullRecordUrl;
  }

  document.title = `${profile.name} | NFC Medico`;
}

function renderStatus(status = state.baseStatus) {
  if (!status) {
    runtimeStatus.hidden = true;
    return;
  }

  const copy = translations[state.lang];
  runtimeStatus.hidden = false;
  runtimeStatus.dataset.state = status.type;
  runtimeTitle.textContent = formatString(copy[status.titleKey], status.values);
  runtimeMessage.textContent = formatString(copy[status.messageKey], status.values);
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

function setLanguage(lang, syncUrl = true) {
  state.lang = normalizeLanguage(lang);
  root.lang = state.lang;

  setTextLanguage(state.lang);
  applyProfile(state.lang);
  renderStatus();

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (!syncUrl) {
    return;
  }

  const url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  window.history.replaceState({}, "", url);
}

function detectIdentifier() {
  const url = new URL(window.location.href);
  const searchValue =
    url.searchParams.get("slug") ||
    url.searchParams.get("profile") ||
    url.searchParams.get("id") ||
    url.searchParams.get("tag");

  if (searchValue) {
    return decodeURIComponent(searchValue);
  }

  const segments = url.pathname.split("/").filter(Boolean);
  const medIndex = segments.findIndex((segment) => segment.toLowerCase() === "med");

  if (medIndex >= 0 && segments[medIndex + 1]) {
    return decodeURIComponent(segments[medIndex + 1]);
  }

  return cleanText(config.defaultSlug);
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

async function logScan(identifier) {
  if (!config.enableScanLogging || !config.scanEventsTable) {
    return;
  }

  try {
    await getClient()
      .from(config.scanEventsTable)
      .insert([
        {
          public_slug: identifier,
          language: state.lang,
          page_url: window.location.href,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent
        }
      ]);

    flashStatus("live", "statusScanLoggedTitle", "statusScanLoggedMessage");
  } catch (error) {
    console.warn("Scan log failed", error);
  }
}

async function loadLiveProfile() {
  state.identifier = detectIdentifier();

  if (!hasSupabaseConfig()) {
    showStatus("demo", "statusDemoTitle", "statusDemoMessage");
    setLanguage(state.lang, false);
    return;
  }

  if (!state.identifier) {
    showStatus("demo", "statusMissingSlugTitle", "statusMissingSlugMessage");
    setLanguage(state.lang, false);
    return;
  }

  showStatus("loading", "statusLoadingTitle", "statusLoadingMessage", { slug: state.identifier });
  setLanguage(state.lang, false);

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

    const preferredLanguage = normalizeLanguage(
      cleanText(data.default_language || data.preferred_language || state.lang)
    );

    showStatus("live", "statusLiveTitle", "statusLiveMessage", { slug: state.identifier });
    setLanguage(preferredLanguage, false);
    await logScan(state.identifier);
  } catch (error) {
    console.warn("Profile load failed", error);
    state.profile = demoProfile;
    showStatus("error", "statusErrorTitle", "statusErrorMessage", { slug: state.identifier || "N/A" });
    setLanguage(state.lang, false);
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
  if (!navigator.geolocation) {
    flashStatus("error", "statusLocationErrorTitle", "statusLocationErrorMessage");
    return;
  }

  try {
    const position = await getCurrentPosition();
    const latitude = position.coords.latitude.toFixed(6);
    const longitude = position.coords.longitude.toFixed(6);
    const mapUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
    const copy = `${mapUrl}`;

    if (navigator.share) {
      await navigator.share({
        title: "Location",
        text: mapUrl,
        url: mapUrl
      });
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(copy);
    } else {
      window.open(mapUrl, "_blank", "noopener");
    }

    flashStatus("live", "statusLocationCopiedTitle", "statusLocationCopiedMessage");
  } catch (error) {
    if (error?.name !== "AbortError") {
      flashStatus("error", "statusLocationErrorTitle", "statusLocationErrorMessage");
    }
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

shareLocationButtons.forEach((button) => {
  button.addEventListener("click", handleShareLocation);
});

loadLiveProfile();
