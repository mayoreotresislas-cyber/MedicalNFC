const config = window.NFC_MEDICO_CONFIG || {};

const translations = {
  en: {
    brandTagline: "Private activation",
    publicLandingLink: "Public landing",
    directSetupLink: "Direct setup",
    interfaceLanguage: "Interface language",
    heroKicker: "Activation required",
    heroTitle: "Validate your private activation link before opening the medical form.",
    heroText:
      "If you already received an NFC tag or keychain assigned to you, you must activate that private link first. Otherwise your information will not be connected to that NFC tag.",
    heroPoint1: "Validate the private link",
    heroPoint2: "Open setup automatically",
    heroPoint3: "Or continue to direct setup",
    warningLabel: "Important note",
    warningText:
      "Use the activation link only if your NFC tag was already assigned to you. Direct setup is for profiles that will be created first and programmed later.",
    gateKicker: "Private access",
    gateTitle: "Validate activation link",
    gateText:
      "Paste the complete activation link or only the activation token. We will validate it and then open the medical form.",
    tokenLabel: "Activation link or token",
    validateButton: "Validate and open setup",
    directSetupText:
      "If you do not have a private activation link yet, you can go directly to the setup form and create a new profile from scratch.",
    directSetupButton: "Go to direct setup",
    statusReadyTitle: "Ready",
    statusReadyMessage: "Paste the activation link or token to continue.",
    statusLoadingTitle: "Validating link",
    statusLoadingMessage: "Please wait while we confirm this activation link.",
    statusSuccessTitle: "Activation confirmed",
    statusSuccessMessage: "The link is valid. Opening the medical setup form.",
    statusErrorTitle: "Could not validate link",
    statusErrorMessage: "Check the link or token and try again."
  },
  es: {
    brandTagline: "Activacion privada",
    publicLandingLink: "Landing publica",
    directSetupLink: "Setup directo",
    interfaceLanguage: "Idioma de la interfaz",
    heroKicker: "Activacion requerida",
    heroTitle: "Valida tu enlace privado de activacion antes de abrir el formulario medico.",
    heroText:
      "Si ya recibiste un NFC TAG o llavero asignado para ti, primero debes activar ese enlace privado. De lo contrario, tu informacion no quedara conectada a ese NFC TAG.",
    heroPoint1: "Valida el enlace privado",
    heroPoint2: "Abre setup automaticamente",
    heroPoint3: "O continua con setup directo",
    warningLabel: "Nota importante",
    warningText:
      "Usa el enlace de activacion solo si tu NFC TAG ya fue asignado para ti. El setup directo es para perfiles que se crean primero y se programan despues.",
    gateKicker: "Acceso privado",
    gateTitle: "Validar enlace de activacion",
    gateText:
      "Pega el enlace completo de activacion o solo el token. Nosotros lo validamos y luego abrimos el formulario medico.",
    tokenLabel: "Enlace o token de activacion",
    validateButton: "Validar y abrir setup",
    directSetupText:
      "Si todavia no tienes un enlace privado de activacion, puedes entrar directo al setup para crear un perfil desde cero.",
    directSetupButton: "Ir a setup directo",
    statusReadyTitle: "Listo",
    statusReadyMessage: "Pega el enlace o token de activacion para continuar.",
    statusLoadingTitle: "Validando enlace",
    statusLoadingMessage: "Espera un momento mientras confirmamos este enlace de activacion.",
    statusSuccessTitle: "Activacion confirmada",
    statusSuccessMessage: "El enlace es valido. Abriendo el formulario medico.",
    statusErrorTitle: "No se pudo validar el enlace",
    statusErrorMessage: "Revisa el enlace o token e intenta nuevamente."
  }
};

const langSelect = document.querySelector("[data-lang-select]");
const textNodes = document.querySelectorAll("[data-i18n]");
const form = document.querySelector("[data-token-entry-form]");
const tokenInput = document.querySelector("[data-token-input]");
const statusBanner = document.querySelector("[data-activation-status]");
const statusTitle = document.querySelector("[data-activation-status-title]");
const statusMessage = document.querySelector("[data-activation-status-message]");

const state = {
  lang: detectInitialLanguage()
};

function cleanText(value) {
  return String(value ?? "").trim();
}

function detectInitialLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && translations[urlLang]) {
    return urlLang;
  }
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return translations[browser] ? browser : "es";
}

function extractActivationToken(value) {
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
  } catch (_error) {
    // Fall back to regex.
  }
  const match = cleaned.match(/nfcm_[a-z0-9]+/i);
  return match ? match[0] : cleaned;
}

function getInitialToken() {
  const url = new URL(window.location.href);
  const fromQuery = extractActivationToken(url.searchParams.get("token"));
  if (fromQuery.startsWith("nfcm_")) {
    return fromQuery;
  }

  const fromPath = extractActivationToken(url.pathname.split("/").filter(Boolean).pop());
  return fromPath.startsWith("nfcm_") ? fromPath : "";
}

function copy() {
  return translations[state.lang] || translations.es;
}

function applyCopy() {
  const current = copy();
  document.documentElement.lang = state.lang;
  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = current[key] || translations.en[key] || "";
  });
  langSelect.value = state.lang;
}

function setStatus(type, title, message) {
  statusBanner.hidden = false;
  statusBanner.dataset.state = type;
  statusTitle.textContent = title;
  statusMessage.textContent = message;
}

async function validateToken(rawToken) {
  const response = await fetch(`${config.supabaseUrl}/functions/v1/${config.activationFunctionName || "medical-activation"}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`
    },
    body: JSON.stringify({
      action: "load",
      token: rawToken
    })
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(cleanText(payload?.details || payload?.error || "Activation validation failed"));
  }
  return payload;
}

langSelect.addEventListener("change", () => {
  state.lang = langSelect.value;
  applyCopy();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const token = extractActivationToken(tokenInput.value);
  const current = copy();

  if (!token) {
    setStatus("error", current.statusErrorTitle, current.statusErrorMessage);
    return;
  }

  try {
    setStatus("loading", current.statusLoadingTitle, current.statusLoadingMessage);
    const result = await validateToken(token);
    const targetLanguage = cleanText(result?.profile?.default_language || state.lang || "es").slice(0, 2).toLowerCase();
    setStatus("success", current.statusSuccessTitle, current.statusSuccessMessage);
    const destination = new URL(`${window.location.origin}/setup.html`);
    destination.searchParams.set("token", token);
    destination.searchParams.set("lang", targetLanguage || state.lang);
    window.location.href = destination.toString();
  } catch (error) {
    setStatus("error", current.statusErrorTitle, cleanText(error.message) || current.statusErrorMessage);
  }
});

applyCopy();
setStatus("success", copy().statusReadyTitle, copy().statusReadyMessage);

const initialToken = getInitialToken();
if (initialToken) {
  tokenInput.value = initialToken;
  form.requestSubmit();
}
