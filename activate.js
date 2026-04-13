const config = window.NFC_MEDICO_CONFIG || {};

const activationTranslations = {
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
    tokenPlaceholder: "https://medical-nfc.vercel.app/activate/nfcm_...",
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
      "Si ya recibiste un NFC tag o llavero asignado para ti, primero debes activar ese enlace privado. De lo contrario, tu informacion no quedara conectada a ese NFC tag.",
    heroPoint1: "Valida el enlace privado",
    heroPoint2: "Abre setup automaticamente",
    heroPoint3: "O continua con setup directo",
    warningLabel: "Nota importante",
    warningText:
      "Usa el enlace de activacion solo si tu NFC tag ya fue asignado para ti. El setup directo es para perfiles que se crean primero y se programan despues.",
    gateKicker: "Acceso privado",
    gateTitle: "Validar enlace de activacion",
    gateText:
      "Pega el enlace completo de activacion o solo el token. Nosotros lo validamos y luego abrimos el formulario medico.",
    tokenLabel: "Enlace o token de activacion",
    tokenPlaceholder: "https://medical-nfc.vercel.app/activate/nfcm_...",
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

const languageOptions = {
  en: { code: "EN" },
  es: { code: "ES" },
  fr: { code: "FR" },
  pt: { code: "PT" },
  de: { code: "DE" },
  it: { code: "IT" },
  ja: { code: "JA" },
  ko: { code: "KO" },
  zh: { code: "ZH" }
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

const staticLanguages = new Set(["en", "es"]);

const langSelect = document.querySelector("[data-lang-select]");
const textNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const form = document.querySelector("[data-token-entry-form]");
const tokenInput = document.querySelector("[data-token-input]");
const statusBanner = document.querySelector("[data-activation-status]");
const statusTitle = document.querySelector("[data-activation-status-title]");
const statusMessage = document.querySelector("[data-activation-status-message]");

const state = {
  lang: detectInitialLanguage(),
  copyCache: {
    en: activationTranslations.en,
    es: activationTranslations.es
  },
  pendingCopy: {}
};

const ACTIVATION_COPY_CACHE_VERSION = "2026-04-13";
const ACTIVATION_COPY_CACHE_PREFIX = `nfc-medico-activation-ui:${ACTIVATION_COPY_CACHE_VERSION}`;

function cleanText(value) {
  return String(value ?? "").trim();
}

function readCachedCopy(lang) {
  try {
    const raw = window.localStorage.getItem(`${ACTIVATION_COPY_CACHE_PREFIX}:${cleanText(lang)}`);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    return null;
  }
}

function writeCachedCopy(lang, value) {
  try {
    window.localStorage.setItem(`${ACTIVATION_COPY_CACHE_PREFIX}:${cleanText(lang)}`, JSON.stringify(value));
  } catch (_error) {
    // Ignore storage errors.
  }
}

function hasSupabaseConfig() {
  return Boolean(config.supabaseUrl && config.supabaseAnonKey);
}

function detectInitialLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && languageOptions[urlLang]) {
    return urlLang;
  }

  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  return languageOptions[browserLang] ? browserLang : "es";
}

function getCopy() {
  return state.copyCache[state.lang] || activationTranslations.en;
}

async function requestTranslation(sourceLanguage, targetLanguage, fields) {
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
      fields
    })
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(cleanText(payload?.details || payload?.error || "Translation failed"));
  }

  return payload?.fields || fields;
}

async function ensureActivationCopy(lang) {
  const normalized = cleanText(lang).slice(0, 2).toLowerCase();
  if (staticLanguages.has(normalized)) {
    return activationTranslations[normalized] || activationTranslations.en;
  }

  if (state.copyCache[normalized]) {
    return state.copyCache[normalized];
  }

  const storedCopy = readCachedCopy(normalized);
  if (storedCopy) {
    state.copyCache[normalized] = storedCopy;
    return storedCopy;
  }

  if (state.pendingCopy[normalized]) {
    return state.pendingCopy[normalized];
  }

  if (!config.translationFunctionName || !hasSupabaseConfig()) {
    state.copyCache[normalized] = activationTranslations.en;
    return state.copyCache[normalized];
  }

  const sourceFields = Object.fromEntries(
    Object.entries(activationTranslations.en).map(([key, value]) => [key, cleanText(value)])
  );

  const request = requestTranslation("en", normalized, sourceFields)
    .then((fields) => {
      const translated = {
        ...activationTranslations.en,
        ...fields
      };
      state.copyCache[normalized] = translated;
      writeCachedCopy(normalized, translated);
      delete state.pendingCopy[normalized];
      return translated;
    })
    .catch((error) => {
      console.warn(`Activation interface translation failed for ${normalized}`, error);
      delete state.pendingCopy[normalized];
      state.copyCache[normalized] = activationTranslations.en;
      return state.copyCache[normalized];
    });

  state.pendingCopy[normalized] = request;
  return request;
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
    if (select.nextElementSibling?.classList.contains("flag-select")) {
      syncFlagSelect(select);
      return;
    }

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

    Object.keys(languageOptions).forEach((value) => {
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
      wrapper.classList.toggle("is-open", !isOpen);
      menu.hidden = isOpen;
      trigger.setAttribute("aria-expanded", String(!isOpen));
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
}

function applyCopy() {
  const current = getCopy();
  document.documentElement.lang = state.lang;

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = current[key] || activationTranslations.en[key] || "";
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.setAttribute("placeholder", current[key] || activationTranslations.en[key] || "");
  });

  langSelect.value = state.lang;
  syncFlagSelect(langSelect);

  if (!staticLanguages.has(state.lang) && !state.copyCache[state.lang]) {
    const activeLang = state.lang;
    ensureActivationCopy(activeLang).then(() => {
      if (state.lang === activeLang) {
        applyCopy();
      }
    });
  }
}

function setStatus(type, titleKey, messageKey, overrideMessage = "") {
  const current = getCopy();
  statusBanner.hidden = false;
  statusBanner.dataset.state = type;
  statusTitle.textContent = current[titleKey] || activationTranslations.en[titleKey] || "";
  statusMessage.textContent =
    overrideMessage || current[messageKey] || activationTranslations.en[messageKey] || "";
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
    if (fromQuery.startsWith("nfcm_")) {
      return fromQuery;
    }
  } catch (_error) {
    // Ignore URL parse errors and continue with raw text.
  }

  const match = cleaned.match(/nfcm_[a-z0-9]+/i);
  return match ? match[0] : cleaned;
}

function getInitialToken() {
  const url = new URL(window.location.href);
  const queryToken = extractActivationToken(url.searchParams.get("token"));
  if (queryToken.startsWith("nfcm_")) {
    return queryToken;
  }

  const lastSegment = cleanText(url.pathname.split("/").filter(Boolean).pop());
  const pathToken = extractActivationToken(lastSegment);
  return pathToken.startsWith("nfcm_") ? pathToken : "";
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
  const url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  window.history.replaceState({}, "", url);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const token = extractActivationToken(tokenInput.value);

  if (!token) {
    setStatus("error", "statusErrorTitle", "statusErrorMessage");
    return;
  }

  try {
    setStatus("loading", "statusLoadingTitle", "statusLoadingMessage");
    const result = await validateToken(token);
    const targetLanguage = cleanText(result?.profile?.default_language || state.lang || "es").slice(0, 2).toLowerCase();

    setStatus("success", "statusSuccessTitle", "statusSuccessMessage");
    const destination = new URL(`${window.location.origin}/setup.html`);
    destination.searchParams.set("token", token);
    destination.searchParams.set("lang", languageOptions[targetLanguage] ? targetLanguage : state.lang);
    window.location.href = destination.toString();
  } catch (error) {
    setStatus("error", "statusErrorTitle", "statusErrorMessage", cleanText(error.message) || getCopy().statusErrorMessage);
  }
});

initFlagSelects();
applyCopy();
setStatus("success", "statusReadyTitle", "statusReadyMessage");

const initialToken = getInitialToken();
if (initialToken) {
  tokenInput.value = initialToken;
  form.requestSubmit();
}
