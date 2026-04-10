const config = window.NFC_MEDICO_CONFIG || {};

const authForm = document.querySelector("[data-admin-auth-form]");
const provisionForm = document.querySelector("[data-provision-form]");
const queueList = document.querySelector("[data-queue-list]");
const latestResult = document.querySelector("[data-latest-result]");
const statusBanner = document.querySelector("[data-admin-status]");
const statusTitle = document.querySelector("[data-admin-status-title]");
const statusMessage = document.querySelector("[data-admin-status-message]");
const refreshButton = document.querySelector("[data-refresh-queue]");
const filterButtons = document.querySelectorAll("[data-filter-status]");
const searchInput = document.querySelector("[data-profile-search]");

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
  adminUsername: window.localStorage.getItem("nfc-medico-admin-username") || "admin",
  adminPassword:
    window.localStorage.getItem("nfc-medico-admin-password") || window.localStorage.getItem("nfc-medico-admin-token") || "",
  latest: null,
  profiles: [],
  filterStatus: "all",
  search: ""
};

function cleanText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function digitsOnly(value) {
  return cleanText(value).replace(/\D/g, "");
}

function formatLocalPhone(value) {
  const digits = digitsOnly(value);
  if (!digits) {
    return "";
  }
  if (digits.length <= 3) {
    return digits;
  }
  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  if (digits.length <= 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)} ${digits.slice(10)}`;
}

function formatPhone(value, fallbackCode = "+1") {
  const normalized = cleanText(value);
  if (!normalized) {
    return "";
  }

  if (normalized.startsWith("+")) {
    const compact = normalized.replace(/[().\s-]+/g, "");
    const match = compact.match(/^(\+\d{1,3})(\d+)$/);
    if (match) {
      return `${match[1]} ${formatLocalPhone(match[2])}`.trim();
    }
    return normalized;
  }

  return `${fallbackCode} ${formatLocalPhone(normalized)}`.trim();
}

function formatDate(value) {
  if (!value) {
    return "Sin fecha";
  }

  try {
    return new Date(value).toLocaleString();
  } catch (error) {
    return cleanText(value);
  }
}

function setStatus(type, title, message) {
  statusBanner.hidden = false;
  statusBanner.dataset.state = type;
  statusTitle.textContent = title;
  statusMessage.textContent = message;
}

function getStatusLabel(status) {
  return (
    {
      pending: "Pendiente",
      ready_to_program: "Listo para grabar",
      active: "Activo",
      update_requested: "Reapertura",
      archived: "Archivado"
    }[status] || "Sin estado"
  );
}

function getStatusClass(status) {
  return (
    {
      pending: "pending",
      ready_to_program: "ready",
      active: "active",
      update_requested: "update",
      archived: "archived"
    }[status] || "pending"
  );
}

function buildMailtoUrl(email, activationUrl, profileName) {
  if (!cleanText(email)) {
    return "";
  }

  const subject = encodeURIComponent(`MyMedicalNFC.com | Completa tu perfil medico`);
  const body = encodeURIComponent(
    [
      `Hola ${cleanText(profileName) || ""},`,
      "",
      "Este es tu enlace privado para llenar o actualizar tu perfil medico NFC:",
      cleanText(activationUrl),
      "",
      "Cuando termines, el administrador recibira la notificacion para preparar la grabacion del NFC.",
      "",
      "MyMedicalNFC.com"
    ].join("\n")
  );

  return `mailto:${encodeURIComponent(cleanText(email))}?subject=${subject}&body=${body}`;
}

function buildSmsUrl(phone, activationUrl) {
  const normalized = cleanText(phone).replace(/[^\d+]/g, "");
  if (!normalized) {
    return "";
  }

  const body = encodeURIComponent(
    `Tu enlace privado de MyMedicalNFC.com para llenar el perfil medico es: ${cleanText(activationUrl)}`
  );

  return `sms:${normalized}?body=${body}`;
}

function openShare(kind, record) {
  if (!record) {
    return;
  }

  const activationUrl = cleanText(record.profile?.activation_url || record.activationUrl);
  const email = cleanText(record.profile?.client_email || record.clientEmail);
  const phone = cleanText(record.profile?.client_phone || record.clientPhone);
  const name = cleanText(record.profile?.full_name);

  const url = kind === "email" ? buildMailtoUrl(email, activationUrl, name) : buildSmsUrl(phone, activationUrl);
  if (!url) {
    throw new Error(
      kind === "email"
        ? "Este perfil no tiene correo del cliente para preparar el envio."
        : "Este perfil no tiene telefono del cliente para preparar el SMS."
    );
  }

  window.open(url, "_blank", "noopener");
}

async function invokeAdmin(action, payload = {}) {
  if (!state.adminPassword) {
    throw new Error("Primero guarda tu acceso administrativo.");
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

async function copyText(value, successMessage) {
  await navigator.clipboard.writeText(value);
  setStatus("success", "Copiado", successMessage);
}

function syncProvisionDefaults() {
  provisionForm.reset();
  provisionForm.elements.default_language.value = "es";
  provisionForm.elements.full_name.focus();
}

function renderLatestResult(result) {
  state.latest = result;
  if (!result) {
    latestResult.hidden = true;
    return;
  }

  latestResult.hidden = false;
  resultNodes.slug.textContent = cleanText(result.profile?.public_slug);
  resultNodes.publicUrl.textContent = cleanText(result.profile?.public_url || result.publicUrl);
  resultNodes.activationUrl.textContent = cleanText(result.profile?.activation_url || result.activationUrl || result.activationToken);
  resultNodes.clientEmail.textContent = cleanText(result.profile?.client_email || result.clientEmail) || "-";
  resultNodes.clientPhone.textContent = formatPhone(result.profile?.client_phone || result.clientPhone) || "-";
}

function updateStats(profiles) {
  const totals = {
    all: profiles.length,
    pending: profiles.filter((profile) => profile.workflow_status === "pending").length,
    ready_to_program: profiles.filter((profile) => profile.workflow_status === "ready_to_program").length,
    active: profiles.filter((profile) => profile.workflow_status === "active").length
  };

  Object.entries(statNodes).forEach(([key, node]) => {
    if (node) {
      node.textContent = String(totals[key] || 0);
    }
  });
}

function buildQueueCard(profile) {
  const wrapper = document.createElement("article");
  wrapper.className = "queue-card";

  const statusClass = getStatusClass(profile.workflow_status);
  const statusLabel = getStatusLabel(profile.workflow_status);
  const hybridSummary = cleanText(profile.hybrid_summary);
  const canMarkProgrammed = ["ready_to_program", "active"].includes(profile.workflow_status);
  const reopenLabel = profile.workflow_status === "pending" ? "Nuevo link privado" : "Reabrir / nuevo link";
  const secondaryLine = cleanText(profile.client_email) || formatPhone(profile.client_phone) || cleanText(profile.public_slug);
  const familyGroup = cleanText(profile.family_group);

  wrapper.innerHTML = `
    <div class="queue-card-head">
      <div>
        <h3>${cleanText(profile.full_name || profile.public_slug)}</h3>
        <p>${secondaryLine || "Perfil medico NFC"}</p>
      </div>
      <span class="queue-chip ${statusClass}">${statusLabel}</span>
    </div>

    <div class="queue-card-meta">
      <div class="queue-meta-grid">
        <div class="queue-meta-row">
          <span>Slug publico</span>
          <strong>${cleanText(profile.public_slug)}</strong>
        </div>
        <div class="queue-meta-row">
          <span>URL publica</span>
          <strong>${cleanText(profile.public_url)}</strong>
        </div>
        <div class="queue-meta-row">
          <span>Correo cliente</span>
          <strong>${cleanText(profile.client_email) || "Sin correo"}</strong>
        </div>
        <div class="queue-meta-row">
          <span>Telefono cliente</span>
          <strong>${formatPhone(profile.client_phone) || "Sin telefono"}</strong>
        </div>
        <div class="queue-meta-row">
          <span>Grupo familiar</span>
          <strong>${familyGroup || "Sin grupo"}</strong>
        </div>
        <div class="queue-meta-row">
          <span>Actualizado</span>
          <strong>${formatDate(profile.updated_at)}</strong>
        </div>
        <div class="queue-meta-row">
          <span>Grabado en chip</span>
          <strong>${formatDate(profile.nfc_programmed_at)}</strong>
        </div>
      </div>
      ${
        hybridSummary
          ? `<div class="queue-meta-row"><span>Resumen hibrido offline</span><p>${hybridSummary}</p></div>`
          : ""
      }
    </div>

    <div class="queue-card-actions">
      <button class="button button-secondary" type="button" data-action="open-public" data-slug="${profile.public_slug}">
        Abrir perfil
      </button>
      <button class="button button-secondary" type="button" data-action="copy-public" data-slug="${profile.public_slug}">
        Copiar URL publica
      </button>
      <button class="button button-primary" type="button" data-action="reopen" data-slug="${profile.public_slug}">
        ${reopenLabel}
      </button>
      <button class="button button-secondary" type="button" data-action="mark-programmed" data-slug="${profile.public_slug}" ${
        canMarkProgrammed ? "" : "disabled"
      }>
        ${profile.workflow_status === "active" ? "Ya esta activo" : "Marcar como grabado"}
      </button>
      <button class="button button-secondary" type="button" data-action="archive" data-slug="${profile.public_slug}">
        Archivar
      </button>
      <button class="button button-danger" type="button" data-action="delete" data-slug="${profile.public_slug}">
        Borrar
      </button>
      ${
        hybridSummary
          ? `<button class="button button-dark" type="button" data-action="copy-summary" data-summary="${encodeURIComponent(
              hybridSummary
            )}">Copiar texto hibrido</button>`
          : `<button class="button button-dark" type="button" disabled>Aun sin resumen</button>`
      }
    </div>
  `;

  return wrapper;
}

function getFilteredProfiles() {
  const search = cleanText(state.search).toLowerCase();

  return state.profiles.filter((profile) => {
    const statusMatches = state.filterStatus === "all" || profile.workflow_status === state.filterStatus;
    if (!statusMatches) {
      return false;
    }

    if (!search) {
      return true;
    }

    const haystack = [
      profile.full_name,
      profile.public_slug,
      profile.family_group,
      profile.client_email,
      profile.client_phone
    ]
      .map((value) => cleanText(value).toLowerCase())
      .join(" ");

    return haystack.includes(search);
  });
}

function renderQueue() {
  const profiles = getFilteredProfiles();
  queueList.innerHTML = "";

  if (!profiles.length) {
    queueList.innerHTML = `<article class="queue-empty"><p>No hay perfiles para ese filtro.</p></article>`;
    return;
  }

  profiles.forEach((profile) => {
    queueList.appendChild(buildQueueCard(profile));
  });
}

async function refreshQueue() {
  setStatus("loading", "Cargando perfiles", "Buscando perfiles pendientes, listos, activos y archivados.");
  const result = await invokeAdmin("list", {
    statuses: [],
    limit: config.adminListLimit || 80
  });
  state.profiles = result.profiles || [];
  updateStats(state.profiles);
  renderQueue();
  setStatus("success", "Panel actualizado", "La lista de perfiles ya esta sincronizada.");
}

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  state.adminUsername = cleanText(authForm.elements.admin_username.value) || "admin";
  state.adminPassword = cleanText(authForm.elements.admin_password.value);
  if (!state.adminPassword) {
    setStatus("warning", "Falta la contrasena", "Ingresa tu acceso administrativo para continuar.");
    return;
  }

  window.localStorage.setItem("nfc-medico-admin-username", state.adminUsername);
  window.localStorage.setItem("nfc-medico-admin-password", state.adminPassword);

  try {
    await refreshQueue();
  } catch (error) {
    setStatus("error", "No se pudo cargar", cleanText(error.message));
  }
});

provisionForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    setStatus("loading", "Generando link", "Creando el perfil pendiente y el acceso privado del cliente.");
    const result = await invokeAdmin("provision", {
      fullName: provisionForm.elements.full_name.value,
      defaultLanguage: provisionForm.elements.default_language.value,
      clientEmail: provisionForm.elements.client_email.value,
      clientPhone: formatPhone(provisionForm.elements.client_phone.value)
    });

    renderLatestResult(result);
    syncProvisionDefaults();
    setStatus("success", "Link generado", "El acceso privado ya esta listo para copiar o enviarse por correo o SMS.");
    await refreshQueue();
  } catch (error) {
    setStatus("error", "No se pudo generar", cleanText(error.message));
  }
});

refreshButton.addEventListener("click", async () => {
  try {
    await refreshQueue();
  } catch (error) {
    setStatus("error", "No se pudo actualizar", cleanText(error.message));
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

latestResult.addEventListener("click", async (event) => {
  const copyTrigger = event.target.closest("[data-copy-result]");
  const shareTrigger = event.target.closest("[data-share-result]");

  try {
    if (copyTrigger && state.latest) {
      if (copyTrigger.dataset.copyResult === "public") {
        await copyText(cleanText(state.latest.profile?.public_url || state.latest.publicUrl), "La URL publica ya esta copiada.");
      } else {
        await copyText(
          cleanText(state.latest.profile?.activation_url || state.latest.activationUrl),
          "El link privado de activacion ya esta copiado."
        );
      }
    }

    if (shareTrigger && state.latest) {
      openShare(shareTrigger.dataset.shareResult, state.latest);
      setStatus("success", "Listo para enviar", "Se abrio la app predeterminada para compartir el link.");
    }
  } catch (error) {
    setStatus("error", "No se pudo compartir", cleanText(error.message));
  }
});

queueList.addEventListener("click", async (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) {
    return;
  }

  const action = trigger.dataset.action;
  const slug = cleanText(trigger.dataset.slug);
  const profile = state.profiles.find((item) => item.public_slug === slug);

  try {
    if (action === "open-public" && profile) {
      window.open(cleanText(profile.public_url), "_blank", "noopener");
      return;
    }

    if (action === "copy-public" && profile) {
      await copyText(cleanText(profile.public_url), "La URL publica ya esta copiada.");
      return;
    }

    if (action === "copy-summary") {
      await copyText(decodeURIComponent(trigger.dataset.summary || ""), "El resumen hibrido ya esta copiado.");
      return;
    }

    if (action === "reopen") {
      setStatus("loading", "Generando nuevo acceso", "Creando un nuevo link privado para este perfil.");
      const result = await invokeAdmin("reopenProfile", { publicSlug: slug });
      renderLatestResult({
        profile: {
          public_slug: slug,
          public_url: result.publicUrl,
          activation_url: result.activationUrl,
          client_email: result.clientEmail,
          client_phone: result.clientPhone
        },
        activationUrl: result.activationUrl,
        clientEmail: result.clientEmail,
        clientPhone: result.clientPhone
      });
      setStatus("success", "Nuevo link privado listo", "Ya puedes copiarlo o enviarlo al cliente.");
      await refreshQueue();
      return;
    }

    if (action === "mark-programmed") {
      setStatus("loading", "Marcando como grabado", "Actualizando el estado del perfil en el panel.");
      await invokeAdmin("markProgrammed", { publicSlug: slug });
      setStatus("success", "Perfil activo", "El perfil ya quedo marcado como grabado.");
      await refreshQueue();
      return;
    }

    if (action === "archive") {
      if (!window.confirm("Este perfil pasara a archivado. Puedes reabrirlo despues con un nuevo link privado. ¿Deseas continuar?")) {
        return;
      }

      setStatus("loading", "Archivando perfil", "Guardando el nuevo estado del perfil.");
      await invokeAdmin("archiveProfile", { publicSlug: slug });
      setStatus("success", "Perfil archivado", "El perfil ya no aparecera como activo.");
      await refreshQueue();
      return;
    }

    if (action === "delete") {
      if (!window.confirm("Esta accion borrara el perfil y sus links privados. No se puede deshacer. ¿Deseas continuar?")) {
        return;
      }

      setStatus("loading", "Borrando perfil", "Eliminando el perfil y sus links asociados.");
      await invokeAdmin("deleteProfile", { publicSlug: slug });
      setStatus("success", "Perfil borrado", "El perfil ya fue eliminado.");
      await refreshQueue();
    }
  } catch (error) {
    setStatus("error", "Operacion fallida", cleanText(error.message));
  }
});

function init() {
  authForm.elements.admin_username.value = state.adminUsername;
  authForm.elements.admin_password.value = state.adminPassword;
  syncProvisionDefaults();
  provisionForm.elements.client_phone.addEventListener("blur", () => {
    provisionForm.elements.client_phone.value = formatPhone(provisionForm.elements.client_phone.value);
  });

  if (state.adminPassword) {
    refreshQueue().catch((error) => {
      setStatus("error", "No se pudo cargar", cleanText(error.message));
    });
  } else {
    setStatus(
      "warning",
      "Ingresa tu acceso",
      "Guarda tu usuario y contrasena de administrador para usar este panel. Si aun usas la clave privada anterior, puedes escribirla como contrasena."
    );
  }
}

init();
