const config = window.NFC_MEDICO_CONFIG || {};

const languageOptions = {
  en: { code: "EN", label: "English", flagClass: "flag-us" },
  es: { code: "ES", label: "Espanol", flagClass: "flag-es" },
  fr: { code: "FR", label: "Francais", flagClass: "flag-fr" },
  pt: { code: "PT", label: "Portugues", flagClass: "flag-pt" },
  de: { code: "DE", label: "Deutsch", flagClass: "flag-de" },
  it: { code: "IT", label: "Italiano", flagClass: "flag-it" },
  ja: { code: "JA", label: "Japanese", flagClass: "flag-ja" },
  ko: { code: "KO", label: "Korean", flagClass: "flag-ko" },
  zh: { code: "ZH", label: "Chinese", flagClass: "flag-zh" }
};

const copyMap = {
  en: {
    brandTagline: "Admin workspace",
    directSetupLink: "Direct setup",
    activationLink: "Private activation",
    publicLandingLink: "Public landing",
    interfaceLanguage: "Interface language",
    heroKicker: "Admin workflow",
    heroTitle: "Create, send, reopen, and manage medical NFC profiles.",
    heroText:
      "From this workspace you can generate private activation links, share them by email or SMS, open direct setup without preactivation, and control which profiles are pending, ready to program, active, reopened, or archived.",
    heroPoint1: "Private customer link",
    heroPoint2: "Direct form without preactivation",
    heroPoint3: "Public NFC URL ready to record",
    flowLabel: "Recommended flow",
    flowStep1: "Generate the private activation link.",
    flowStep2: "Send it by email or SMS.",
    flowStep3: "Wait for the client to complete the medical profile.",
    flowStep4: "Record the public URL into the NFC tag once the profile is ready.",
    accessKicker: "Access",
    accessTitle: "Administrator sign in",
    accessText: "Use your administrator username and password to open the workspace.",
    fieldUsername: "Username",
    fieldPassword: "Password",
    saveAccessButton: "Sign in",
    logoutButton: "Logout",
    provisionKicker: "Provision",
    provisionTitle: "Create a private activation link for a new client",
    fieldProfileName: "Client or profile name",
    fieldExpectedLanguage: "Preferred client language",
    fieldClientEmail: "Client email",
    fieldClientPhone: "Client mobile phone",
    deliveryLabel: "Delivery options",
    deliveryText:
      "Generate the private link first, then copy it or open a prepared email or SMS from this panel. If you need to send a fresh link later, use the profile actions in the management table.",
    provisionText:
      "This step preregisters the profile and creates the private access link. The client fills the information later and the NFC is recorded when the profile is ready.",
    generateLinkButton: "Generate private link",
    directSetupButton: "Open direct setup",
    managementKicker: "Management",
    managementTitle: "Profiles, states, and actions",
    refreshButton: "Refresh",
    statAll: "Total",
    statPending: "Pending",
    statReady: "Ready",
    statActive: "Active",
    filterAll: "All",
    filterPending: "Pending",
    filterReady: "Ready",
    filterActive: "Active",
    filterUpdate: "Reopened",
    filterArchived: "Archived",
    searchLabel: "Search profile",
    tableProfile: "Profile",
    tableStatus: "Status",
    tableLanguage: "Language",
    tableFamily: "Family group",
    tableContact: "Contact",
    tableUpdated: "Updated",
    tableActions: "Actions",
    resultKicker: "Ready to share",
    resultTitle: "Private activation link created",
    resultText:
      "The profile was preregistered correctly. You can now copy the links or open an email or SMS for the client.",
    resultSlug: "Public slug",
    resultPublicUrl: "Public NFC URL",
    resultActivationUrl: "Private activation link",
    resultClientEmail: "Client email",
    resultClientPhone: "Client phone",
    copyPublicButton: "Copy public URL",
    copyActivationButton: "Copy private link",
    sendEmailButton: "Open email",
    sendSmsButton: "Open SMS",
    authMissingTitle: "Sign in required",
    authMissingMessage: "Enter your administrator access to open the workspace.",
    passwordMissingTitle: "Password required",
    passwordMissingMessage: "Enter your administrator access before continuing.",
    loggedOutTitle: "Logged out",
    loggedOutMessage: "Administrator access was removed from this browser.",
    loadingTitle: "Loading profiles",
    loadingMessage: "Checking pending, ready, active, reopened, and archived profiles.",
    refreshTitle: "Workspace updated",
    refreshMessage: "The profile list is already synchronized.",
    loadErrorTitle: "Could not load workspace",
    provisionSuccessTitle: "Private link created",
    provisionMessage: "The activation link is ready to copy or send.",
    reopenTitle: "New private link ready",
    reopenMessage: "A fresh activation link was created for this profile.",
    activeTitle: "Profile active",
    activeMessage: "The profile is now marked as recorded on the NFC tag.",
    archivedTitle: "Profile archived",
    archivedMessage: "The profile is no longer shown as active.",
    deletedTitle: "Profile deleted",
    deletedMessage: "The profile and its private links were removed.",
    copiedTitle: "Copied",
    copiedPublic: "The public NFC URL was copied successfully.",
    copiedActivation: "The private activation link was copied successfully.",
    operationFailed: "Operation failed",
    shareEmailMissing: "This profile does not have a client email.",
    shareSmsMissing: "This profile does not have a client phone number.",
    emptyState: "No profiles loaded yet.",
    noEmail: "No email",
    noPhone: "No phone",
    noGroup: "No group",
    status: {
      pending: "Pending",
      ready_to_program: "Ready to program",
      active: "Active",
      update_requested: "Reopened",
      archived: "Archived"
    },
    actions: {
      open: "Open profile",
      copy: "Copy URL",
      email: "Email",
      sms: "SMS",
      reopen: "New link",
      programmed: "Mark recorded",
      active: "Already active",
      archive: "Archive",
      delete: "Delete"
    },
    confirmArchive: "This will archive the profile. You can reopen it later with a new private link. Continue?",
    confirmDelete: "This will delete the profile and its private links. This cannot be undone. Continue?"
  },
  es: {
    brandTagline: "Workspace administrativo",
    directSetupLink: "Setup directo",
    activationLink: "Activacion privada",
    publicLandingLink: "Landing publica",
    interfaceLanguage: "Idioma de la interfaz",
    heroKicker: "Flujo admin",
    heroTitle: "Genera, envia, reabre y administra perfiles medicos NFC.",
    heroText:
      "Desde este workspace puedes generar enlaces privados de activacion, compartirlos por correo o SMS, abrir setup directo sin preactivacion y controlar cuales perfiles estan pendientes, listos para grabar, activos, reabiertos o archivados.",
    heroPoint1: "Link privado del cliente",
    heroPoint2: "Formulario directo sin preactivacion",
    heroPoint3: "URL publica lista para grabar",
    flowLabel: "Flujo recomendado",
    flowStep1: "Genera el enlace privado de activacion.",
    flowStep2: "Envialo por correo o SMS.",
    flowStep3: "Espera a que el cliente complete el perfil medico.",
    flowStep4: "Graba la URL publica en el NFC cuando el perfil quede listo.",
    accessKicker: "Acceso",
    accessTitle: "Inicio de sesion administrativo",
    accessText: "Usa tu usuario y contrasena de administrador para abrir el workspace.",
    fieldUsername: "Usuario",
    fieldPassword: "Contrasena",
    saveAccessButton: "Iniciar sesion",
    logoutButton: "Cerrar sesion",
    provisionKicker: "Provision",
    provisionTitle: "Crear enlace privado de activacion para un nuevo cliente",
    fieldProfileName: "Nombre del cliente o perfil",
    fieldExpectedLanguage: "Idioma preferido del cliente",
    fieldClientEmail: "Correo del cliente",
    fieldClientPhone: "Telefono movil del cliente",
    deliveryLabel: "Opciones de entrega",
    deliveryText:
      "Genera primero el enlace privado y luego copialo o abre desde aqui un correo o SMS preparado. Si despues necesitas enviar un link nuevo, usa las acciones del perfil dentro de la tabla de administracion.",
    provisionText:
      "Este paso preregistra el perfil y crea el acceso privado. El cliente llena la informacion despues y el NFC se graba cuando el perfil quede listo.",
    generateLinkButton: "Generar link privado",
    directSetupButton: "Abrir setup directo",
    managementKicker: "Administracion",
    managementTitle: "Perfiles, estados y acciones",
    refreshButton: "Actualizar",
    statAll: "Total",
    statPending: "Pendientes",
    statReady: "Listos",
    statActive: "Activos",
    filterAll: "Todos",
    filterPending: "Pendientes",
    filterReady: "Listos",
    filterActive: "Activos",
    filterUpdate: "Reabiertos",
    filterArchived: "Archivados",
    searchLabel: "Buscar perfil",
    tableProfile: "Perfil",
    tableStatus: "Estado",
    tableLanguage: "Idioma",
    tableFamily: "Grupo familiar",
    tableContact: "Contacto",
    tableUpdated: "Actualizado",
    tableActions: "Acciones",
    resultKicker: "Listo para compartir",
    resultTitle: "Enlace privado creado",
    resultText:
      "El perfil se preregistro correctamente. Ya puedes copiar los links o abrir un correo o SMS para el cliente.",
    resultSlug: "Slug publico",
    resultPublicUrl: "URL publica para NFC",
    resultActivationUrl: "Link privado de activacion",
    resultClientEmail: "Correo del cliente",
    resultClientPhone: "Telefono del cliente",
    copyPublicButton: "Copiar URL publica",
    copyActivationButton: "Copiar link privado",
    sendEmailButton: "Abrir correo",
    sendSmsButton: "Abrir SMS",
    authMissingTitle: "Hace falta iniciar sesion",
    authMissingMessage: "Ingresa tu acceso administrativo para abrir el workspace.",
    passwordMissingTitle: "Falta la contrasena",
    passwordMissingMessage: "Ingresa tu acceso administrativo antes de continuar.",
    loggedOutTitle: "Sesion cerrada",
    loggedOutMessage: "El acceso administrativo fue borrado de este navegador.",
    loadingTitle: "Cargando perfiles",
    loadingMessage: "Buscando perfiles pendientes, listos, activos, reabiertos y archivados.",
    refreshTitle: "Workspace actualizado",
    refreshMessage: "La lista de perfiles ya esta sincronizada.",
    loadErrorTitle: "No se pudo cargar el workspace",
    provisionSuccessTitle: "Link privado generado",
    provisionMessage: "El enlace de activacion ya esta listo para copiar o enviarse.",
    reopenTitle: "Nuevo link privado listo",
    reopenMessage: "Se creo un enlace nuevo para este perfil.",
    activeTitle: "Perfil activo",
    activeMessage: "El perfil ya quedo marcado como grabado en el NFC.",
    archivedTitle: "Perfil archivado",
    archivedMessage: "El perfil ya no se muestra como activo.",
    deletedTitle: "Perfil borrado",
    deletedMessage: "El perfil y sus links privados fueron eliminados.",
    copiedTitle: "Copiado",
    copiedPublic: "La URL publica para NFC ya esta copiada.",
    copiedActivation: "El link privado de activacion ya esta copiado.",
    operationFailed: "Operacion fallida",
    shareEmailMissing: "Este perfil no tiene correo del cliente.",
    shareSmsMissing: "Este perfil no tiene telefono del cliente.",
    emptyState: "Todavia no hay perfiles cargados.",
    noEmail: "Sin correo",
    noPhone: "Sin telefono",
    noGroup: "Sin grupo",
    status: {
      pending: "Pendiente",
      ready_to_program: "Listo para grabar",
      active: "Activo",
      update_requested: "Reabierto",
      archived: "Archivado"
    },
    actions: {
      open: "Abrir perfil",
      copy: "Copiar URL",
      email: "Correo",
      sms: "SMS",
      reopen: "Nuevo link",
      programmed: "Marcar grabado",
      active: "Ya activo",
      archive: "Archivar",
      delete: "Borrar"
    },
    confirmArchive: "Este perfil pasara a archivado. Puedes reabrirlo despues con un nuevo link privado. Deseas continuar?",
    confirmDelete: "Esta accion borrara el perfil y sus links privados. No se puede deshacer. Deseas continuar?"
  }
};

const staticLanguages = new Set(["en", "es"]);
const ADMIN_COPY_CACHE_VERSION = "2026-04-13";
const ADMIN_COPY_CACHE_PREFIX = `nfc-medico-admin-ui:${ADMIN_COPY_CACHE_VERSION}`;

function flattenCopyMap(source, prefix = "", target = {}) {
  Object.entries(source).forEach(([key, value]) => {
    const nextKey = prefix ? `${prefix}__${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenCopyMap(value, nextKey, target);
      return;
    }

    target[nextKey] = cleanText(value);
  });

  return target;
}

function setNestedValue(target, path, value) {
  const segments = [...path];
  const last = segments.pop();
  if (!last) {
    return;
  }

  let pointer = target;
  segments.forEach((segment) => {
    if (!pointer[segment] || typeof pointer[segment] !== "object") {
      pointer[segment] = {};
    }
    pointer = pointer[segment];
  });

  pointer[last] = value;
}

function inflateCopyMap(flatSource) {
  const inflated = JSON.parse(JSON.stringify(copyMap.en));
  Object.entries(flatSource || {}).forEach(([key, value]) => {
    setNestedValue(inflated, key.split("__"), cleanText(value));
  });
  return inflated;
}

const flatAdminEnglishCopy = flattenCopyMap(copyMap.en);
const textNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");

const authForm = document.querySelector("[data-admin-auth-form]");
const authOnlySections = document.querySelectorAll("[data-admin-auth-only]");
const provisionForm = document.querySelector("[data-provision-form]");
const queueList = document.querySelector("[data-queue-list]");
const protectedSections = document.querySelectorAll("[data-admin-protected]");
const logoutButton = document.querySelector('[data-action="admin-logout"]');
const statusBanner = document.querySelector("[data-admin-status]");
const statusTitle = document.querySelector("[data-admin-status-title]");
const statusMessage = document.querySelector("[data-admin-status-message]");
const refreshButton = document.querySelector("[data-refresh-queue]");
const filterButtons = document.querySelectorAll("[data-filter-status]");
const searchInput = document.querySelector("[data-profile-search]");
const langSelect = document.querySelector("[data-lang-select]");
const resultModal = document.querySelector("[data-result-modal]");

const resultNodes = {
  slug: document.querySelector("[data-result-slug]"),
  publicUrl: document.querySelector("[data-result-public-url]"),
  activationUrl: document.querySelector("[data-result-activation-url]"),
  clientEmail: document.querySelector("[data-result-client-email]"),
  clientPhone: document.querySelector("[data-result-client-phone]")
};

const statNodes = {
  all: document.querySelector('[data-stat="all"]'),
  pending: document.querySelector('[data-stat="pending"]'),
  ready_to_program: document.querySelector('[data-stat="ready_to_program"]'),
  active: document.querySelector('[data-stat="active"]')
};

const state = {
  lang: detectInitialLanguage(),
  copyCache: {
    en: copyMap.en,
    es: copyMap.es
  },
  copyPending: {},
  adminUsername: window.localStorage.getItem("nfc-medico-admin-username") || "admin",
  adminPassword:
    window.localStorage.getItem("nfc-medico-admin-password") || window.localStorage.getItem("nfc-medico-admin-token") || "",
  isAuthenticated: false,
  latest: null,
  profiles: [],
  filterStatus: "all",
  search: ""
};

function cleanText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function copy() {
  if (staticLanguages.has(state.lang)) {
    return copyMap[state.lang] || copyMap.en;
  }

  return state.copyCache[state.lang] || copyMap.en;
}

function detectInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (requested && languageOptions[requested]) {
    return requested;
  }
  const browserCode = navigator.language?.slice(0, 2).toLowerCase();
  return languageOptions[browserCode] ? browserCode : "en";
}

function readCachedAdminCopy(lang) {
  try {
    const raw = window.localStorage.getItem(`${ADMIN_COPY_CACHE_PREFIX}:${cleanText(lang)}`);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    return null;
  }
}

function writeCachedAdminCopy(lang, value) {
  try {
    window.localStorage.setItem(`${ADMIN_COPY_CACHE_PREFIX}:${cleanText(lang)}`, JSON.stringify(value));
  } catch (_error) {
    // Ignore storage errors.
  }
}

function canTranslateAdminCopy() {
  return Boolean(config.supabaseUrl && config.supabaseAnonKey && config.translationFunctionName);
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

async function ensureAdminCopy(lang) {
  const normalized = cleanText(lang).slice(0, 2).toLowerCase();
  if (staticLanguages.has(normalized)) {
    return copyMap[normalized] || copyMap.en;
  }

  if (state.copyCache[normalized]) {
    return state.copyCache[normalized];
  }

  const storedCopy = readCachedAdminCopy(normalized);
  if (storedCopy) {
    state.copyCache[normalized] = storedCopy;
    return storedCopy;
  }

  if (state.copyPending[normalized]) {
    return state.copyPending[normalized];
  }

  if (!canTranslateAdminCopy()) {
    state.copyCache[normalized] = copyMap.en;
    return state.copyCache[normalized];
  }

  const request = requestTranslation("en", normalized, flatAdminEnglishCopy)
    .then((fields) => {
      const translated = inflateCopyMap({
        ...flatAdminEnglishCopy,
        ...(fields || {})
      });
      state.copyCache[normalized] = translated;
      writeCachedAdminCopy(normalized, translated);
      delete state.copyPending[normalized];
      return translated;
    })
    .catch((error) => {
      console.warn(`Admin interface translation failed for ${normalized}`, error);
      delete state.copyPending[normalized];
      state.copyCache[normalized] = copyMap.en;
      return state.copyCache[normalized];
    });

  state.copyPending[normalized] = request;
  return request;
}

function buildLanguageMarkup(value) {
  const option = languageOptions[value] || languageOptions.en;
  return `
    <span class="flag-select-swatch ${option.flagClass}" aria-hidden="true"></span>
    <span class="flag-select-code">${option.code}</span>
    <span class="flag-select-label">${option.label}</span>
  `;
}

function syncFlagSelect(select) {
  const wrapper = select?.nextElementSibling;
  if (!wrapper?.classList.contains("flag-select")) return;
  wrapper.querySelector("[data-flag-select-value]").innerHTML = buildLanguageMarkup(select.value);
  wrapper.querySelectorAll("[data-flag-option]").forEach((button) => {
    const active = button.dataset.value === select.value;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function applyCopy() {
  const current = copy();
  document.documentElement.lang = state.lang;
  langSelect.value = state.lang;
  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (current[key]) {
      node.textContent = current[key];
    }
  });
  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (current[key]) {
      node.setAttribute("placeholder", current[key]);
    }
  });
  syncFlagSelect(langSelect);

  if (!staticLanguages.has(state.lang) && !state.copyCache[state.lang]) {
    const activeLang = state.lang;
    ensureAdminCopy(activeLang).then(() => {
      if (state.lang === activeLang) {
        applyCopy();
        renderQueue();
      }
    });
  }
}

function closeFlagSelectMenus() {
  document.querySelectorAll(".flag-select.is-open").forEach((wrapper) => {
    wrapper.classList.remove("is-open");
    wrapper.querySelector("[data-flag-select-menu]").hidden = true;
    wrapper.querySelector("[data-flag-select-trigger]").setAttribute("aria-expanded", "false");
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
      if (language) {
        option.textContent = `${language.code} - ${language.label}`;
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

function setStatus(type, title, message) {
  statusBanner.hidden = false;
  statusBanner.dataset.state = type;
  statusTitle.textContent = title;
  statusMessage.textContent = message;
}

function setAuthenticatedUi(isAuthenticated) {
  state.isAuthenticated = isAuthenticated;
  protectedSections.forEach((section) => {
    section.hidden = !isAuthenticated;
  });
  authOnlySections.forEach((section) => {
    section.hidden = isAuthenticated;
  });
  if (logoutButton) {
    logoutButton.hidden = !isAuthenticated;
  }
}

function digitsOnly(value) {
  return cleanText(value).replace(/\D/g, "");
}

function formatLocalPhone(value) {
  const digits = digitsOnly(value);
  if (!digits) return "";
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length <= 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)} ${digits.slice(10)}`;
}

function formatPhone(value, fallbackCode = "+1") {
  const normalized = cleanText(value);
  if (!normalized) return "";
  if (normalized.startsWith("+")) {
    const compact = normalized.replace(/[().\s-]+/g, "");
    const match = compact.match(/^(\+\d{1,3})(\d+)$/);
    if (match) return `${match[1]} ${formatLocalPhone(match[2])}`.trim();
    return normalized;
  }
  return `${fallbackCode} ${formatLocalPhone(normalized)}`.trim();
}

function formatDate(value) {
  if (!value) return "-";
  try {
    return new Date(value).toLocaleString(document.documentElement.lang || "en");
  } catch (_error) {
    return cleanText(value);
  }
}

function buildMailtoUrl(email, activationUrl, profileName, language = "es") {
  if (!cleanText(email)) return "";
  const spanish = cleanText(language).slice(0, 2).toLowerCase() === "es";
  const subject = encodeURIComponent(
    spanish ? "MyMedicalNFC.com | Completa tu perfil medico" : "MyMedicalNFC.com | Complete your medical profile"
  );
  const body = encodeURIComponent(
    spanish
      ? [`Hola ${cleanText(profileName) || ""},`, "", "Este es tu enlace privado para llenar o actualizar tu perfil medico NFC:", cleanText(activationUrl), "", "MyMedicalNFC.com"].join("\n")
      : [`Hello ${cleanText(profileName) || ""},`, "", "This is your private link to complete or update your NFC medical profile:", cleanText(activationUrl), "", "MyMedicalNFC.com"].join("\n")
  );
  return `mailto:${encodeURIComponent(cleanText(email))}?subject=${subject}&body=${body}`;
}

function buildSmsUrl(phone, activationUrl) {
  const normalized = cleanText(phone).replace(/[^\d+]/g, "");
  if (!normalized) return "";
  const body = encodeURIComponent(`MyMedicalNFC.com private medical profile link: ${cleanText(activationUrl)}`);
  return `sms:${normalized}?body=${body}`;
}

function openShare(kind, record) {
  const activationUrl = cleanText(record.profile?.activation_url || record.activationUrl);
  const email = cleanText(record.profile?.client_email || record.clientEmail);
  const phone = cleanText(record.profile?.client_phone || record.clientPhone);
  const name = cleanText(record.profile?.full_name || record.full_name);
  const language = cleanText(record.profile?.default_language || record.default_language || "es");
  const url = kind === "email" ? buildMailtoUrl(email, activationUrl, name, language) : buildSmsUrl(phone, activationUrl);
  if (!url) {
    throw new Error(kind === "email" ? copy().shareEmailMissing : copy().shareSmsMissing);
  }
  window.open(url, "_blank", "noopener");
}

async function invokeAdmin(action, payload = {}) {
  if (!state.adminPassword) {
    throw new Error(copy().passwordMissingMessage);
  }

  const response = await fetch(`${config.supabaseUrl}/functions/v1/${config.adminFunctionName || "medical-admin"}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`
    },
    body: JSON.stringify({
      adminUsername: state.adminUsername,
      adminPassword: state.adminPassword,
      action,
      ...payload
    })
  });

  const payloadData = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(cleanText(payloadData?.details || payloadData?.error || "Admin action failed"));
  }
  return payloadData;
}

async function copyText(value, message) {
  await navigator.clipboard.writeText(value);
  setStatus("success", copy().copiedTitle, message);
}

function syncProvisionDefaults(shouldFocus = true) {
  provisionForm.reset();
  provisionForm.elements.default_language.value = languageOptions[state.lang] ? state.lang : "es";
  syncFlagSelect(provisionForm.elements.default_language);
  if (shouldFocus) {
    provisionForm.elements.full_name.focus();
  }
}

function openResultModal(result) {
  state.latest = result;
  resultNodes.slug.textContent = cleanText(result.profile?.public_slug || result.publicSlug);
  resultNodes.publicUrl.textContent = cleanText(result.profile?.public_url || result.publicUrl);
  resultNodes.activationUrl.textContent = cleanText(result.profile?.activation_url || result.activationUrl || result.activationToken);
  resultNodes.clientEmail.textContent = cleanText(result.profile?.client_email || result.clientEmail) || "-";
  resultNodes.clientPhone.textContent = formatPhone(result.profile?.client_phone || result.clientPhone) || "-";
  resultModal.classList.remove("is-hidden");
}

function closeResultModal() {
  resultModal.classList.add("is-hidden");
}

function resetAdminSession(showStatus = false) {
  state.adminPassword = "";
  state.latest = null;
  state.profiles = [];
  state.search = "";
  state.filterStatus = "all";

  window.localStorage.removeItem("nfc-medico-admin-password");
  window.localStorage.removeItem("nfc-medico-admin-token");

  authForm.elements.admin_password.value = "";
  searchInput.value = "";
  updateStats([]);
  renderQueue();
  closeResultModal();
  setAuthenticatedUi(false);

  filterButtons.forEach((button) => {
    const isActive = (button.dataset.filterStatus || "all") === "all";
    button.classList.toggle("is-active", isActive);
  });

  if (showStatus) {
    setStatus("success", copy().loggedOutTitle, copy().loggedOutMessage);
  } else {
    statusBanner.hidden = true;
  }
}

function updateStats(profiles) {
  const totals = {
    all: profiles.length,
    pending: profiles.filter((profile) => profile.workflow_status === "pending").length,
    ready_to_program: profiles.filter((profile) => profile.workflow_status === "ready_to_program").length,
    active: profiles.filter((profile) => profile.workflow_status === "active").length
  };

  Object.entries(statNodes).forEach(([key, node]) => {
    if (node) node.textContent = String(totals[key] || 0);
  });
}

function getFilteredProfiles() {
  const search = cleanText(state.search).toLowerCase();
  return state.profiles.filter((profile) => {
    const statusMatches = state.filterStatus === "all" || profile.workflow_status === state.filterStatus;
    if (!statusMatches) return false;
    if (!search) return true;

    const haystack = [profile.full_name, profile.public_slug, profile.family_group, profile.client_email, profile.client_phone]
      .map((value) => cleanText(value).toLowerCase())
      .join(" ");
    return haystack.includes(search);
  });
}

function renderQueue() {
  const currentCopy = copy();
  const profiles = getFilteredProfiles();

  if (!profiles.length) {
    queueList.innerHTML = `<tr class="admin-empty-row"><td colspan="7">${currentCopy.emptyState}</td></tr>`;
    return;
  }

  queueList.innerHTML = profiles
    .map((profile) => {
      const statusLabel = currentCopy.status[profile.workflow_status] || currentCopy.status.pending;
      const email = cleanText(profile.client_email) || currentCopy.noEmail;
      const phone = formatPhone(profile.client_phone) || currentCopy.noPhone;
      const family = cleanText(profile.family_group) || currentCopy.noGroup;
      const canMarkProgrammed = ["ready_to_program", "active"].includes(profile.workflow_status);
      const markLabel = profile.workflow_status === "active" ? currentCopy.actions.active : currentCopy.actions.programmed;

      return `
        <tr>
          <td><div class="admin-profile-cell"><strong>${cleanText(profile.full_name || profile.public_slug)}</strong><span>${cleanText(profile.public_slug)}</span></div></td>
          <td><span class="queue-chip ${profile.workflow_status === "ready_to_program" ? "ready" : profile.workflow_status === "active" ? "active" : profile.workflow_status === "update_requested" ? "update" : profile.workflow_status === "archived" ? "archived" : "pending"}">${statusLabel}</span></td>
          <td>${cleanText(profile.default_language || "en").slice(0, 2).toUpperCase()}</td>
          <td>${family}</td>
          <td><div class="admin-contact-cell"><span>${email}</span><span>${phone}</span></div></td>
          <td>${formatDate(profile.updated_at)}</td>
          <td>
            <div class="admin-row-actions">
              <button class="button button-secondary" type="button" data-action="open-public" data-slug="${profile.public_slug}">${currentCopy.actions.open}</button>
              <button class="button button-secondary" type="button" data-action="copy-public" data-slug="${profile.public_slug}">${currentCopy.actions.copy}</button>
              <button class="button button-secondary" type="button" data-action="share-email" data-slug="${profile.public_slug}">${currentCopy.actions.email}</button>
              <button class="button button-secondary" type="button" data-action="share-sms" data-slug="${profile.public_slug}">${currentCopy.actions.sms}</button>
              <button class="button button-primary" type="button" data-action="reopen" data-slug="${profile.public_slug}">${currentCopy.actions.reopen}</button>
              <button class="button button-secondary" type="button" data-action="mark-programmed" data-slug="${profile.public_slug}" ${canMarkProgrammed ? "" : "disabled"}>${markLabel}</button>
              <button class="button button-secondary" type="button" data-action="archive" data-slug="${profile.public_slug}">${currentCopy.actions.archive}</button>
              <button class="button button-danger" type="button" data-action="delete" data-slug="${profile.public_slug}">${currentCopy.actions.delete}</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

async function refreshQueue() {
  setStatus("loading", copy().loadingTitle, copy().loadingMessage);
  const result = await invokeAdmin("list", { statuses: [], limit: config.adminListLimit || 80 });
  state.profiles = result.profiles || [];
  updateStats(state.profiles);
  renderQueue();
  setAuthenticatedUi(true);
  setStatus("success", copy().refreshTitle, copy().refreshMessage);
}

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  state.adminUsername = cleanText(authForm.elements.admin_username.value) || "admin";
  state.adminPassword = cleanText(authForm.elements.admin_password.value);
  if (!state.adminPassword) {
    setStatus("warning", copy().passwordMissingTitle, copy().passwordMissingMessage);
    return;
  }

  window.localStorage.setItem("nfc-medico-admin-username", state.adminUsername);
  window.localStorage.setItem("nfc-medico-admin-password", state.adminPassword);

  try {
    await refreshQueue();
  } catch (error) {
    setAuthenticatedUi(false);
    setStatus("error", copy().loadErrorTitle, cleanText(error.message));
  }
});

provisionForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    setStatus("loading", copy().loadingTitle, copy().loadingMessage);
    const result = await invokeAdmin("provision", {
      fullName: provisionForm.elements.full_name.value,
      defaultLanguage: provisionForm.elements.default_language.value,
      clientEmail: provisionForm.elements.client_email.value,
      clientPhone: formatPhone(provisionForm.elements.client_phone.value)
    });
    openResultModal(result);
    syncProvisionDefaults();
    setStatus("success", copy().provisionSuccessTitle, copy().provisionMessage);
    await refreshQueue();
  } catch (error) {
    setStatus("error", copy().operationFailed, cleanText(error.message));
  }
});

refreshButton.addEventListener("click", async () => {
  try {
    await refreshQueue();
  } catch (error) {
    setStatus("error", copy().loadErrorTitle, cleanText(error.message));
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.filterStatus = button.dataset.filterStatus || "all";
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderQueue();
  });
});

searchInput.addEventListener("input", () => {
  state.search = searchInput.value;
  renderQueue();
});

langSelect.addEventListener("change", () => {
  state.lang = languageOptions[langSelect.value] ? langSelect.value : "en";
  applyCopy();
  syncFlagSelect(langSelect);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  window.history.replaceState({}, "", url);
  renderQueue();
});

resultModal.addEventListener("click", async (event) => {
  const closeTrigger = event.target.closest('[data-action="close-result"]');
  const copyTrigger = event.target.closest("[data-copy-result]");
  const shareTrigger = event.target.closest("[data-share-result]");

  try {
    if (closeTrigger) {
      closeResultModal();
      return;
    }

    if (copyTrigger && state.latest) {
      if (copyTrigger.dataset.copyResult === "public") {
        await copyText(cleanText(state.latest.profile?.public_url || state.latest.publicUrl), copy().copiedPublic);
      } else {
        await copyText(cleanText(state.latest.profile?.activation_url || state.latest.activationUrl), copy().copiedActivation);
      }
      return;
    }

    if (shareTrigger && state.latest) {
      openShare(shareTrigger.dataset.shareResult, state.latest);
    }
  } catch (error) {
    setStatus("error", copy().operationFailed, cleanText(error.message));
  }
});

logoutButton?.addEventListener("click", () => {
  resetAdminSession(true);
  authForm.elements.admin_password.focus();
});

queueList.addEventListener("click", async (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;

  const action = trigger.dataset.action;
  const slug = cleanText(trigger.dataset.slug);
  const profile = state.profiles.find((item) => item.public_slug === slug);

  try {
    if (action === "open-public" && profile) {
      window.open(cleanText(profile.public_url), "_blank", "noopener");
      return;
    }
    if (action === "copy-public" && profile) {
      await copyText(cleanText(profile.public_url), copy().copiedPublic);
      return;
    }
    if (action === "share-email" && profile) {
      openShare("email", profile);
      return;
    }
    if (action === "share-sms" && profile) {
      openShare("sms", profile);
      return;
    }
    if (action === "reopen") {
      setStatus("loading", copy().loadingTitle, copy().loadingMessage);
      const result = await invokeAdmin("reopenProfile", { publicSlug: slug });
      openResultModal({
        profile: {
          public_slug: slug,
          full_name: profile?.full_name || slug,
          default_language: profile?.default_language || "es",
          public_url: result.publicUrl,
          activation_url: result.activationUrl,
          client_email: result.clientEmail,
          client_phone: result.clientPhone
        },
        activationUrl: result.activationUrl,
        publicUrl: result.publicUrl,
        clientEmail: result.clientEmail,
        clientPhone: result.clientPhone
      });
      setStatus("success", copy().reopenTitle, copy().reopenMessage);
      await refreshQueue();
      return;
    }
    if (action === "mark-programmed") {
      setStatus("loading", copy().loadingTitle, copy().loadingMessage);
      await invokeAdmin("markProgrammed", { publicSlug: slug });
      setStatus("success", copy().activeTitle, copy().activeMessage);
      await refreshQueue();
      return;
    }
    if (action === "archive") {
      if (!window.confirm(copy().confirmArchive)) return;
      setStatus("loading", copy().loadingTitle, copy().loadingMessage);
      await invokeAdmin("archiveProfile", { publicSlug: slug });
      setStatus("success", copy().archivedTitle, copy().archivedMessage);
      await refreshQueue();
      return;
    }
    if (action === "delete") {
      if (!window.confirm(copy().confirmDelete)) return;
      setStatus("loading", copy().loadingTitle, copy().loadingMessage);
      await invokeAdmin("deleteProfile", { publicSlug: slug });
      setStatus("success", copy().deletedTitle, copy().deletedMessage);
      await refreshQueue();
    }
  } catch (error) {
    setStatus("error", copy().operationFailed, cleanText(error.message));
  }
});

function init() {
  initFlagSelects();
  authForm.elements.admin_username.value = state.adminUsername;
  authForm.elements.admin_password.value = state.adminPassword;
  setAuthenticatedUi(false);
  syncProvisionDefaults(false);
  provisionForm.elements.client_phone.addEventListener("blur", () => {
    provisionForm.elements.client_phone.value = formatPhone(provisionForm.elements.client_phone.value);
  });
  applyCopy();
  syncFlagSelect(langSelect);
  resetAdminSession(false);
}

init();
