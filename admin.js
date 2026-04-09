const config = window.NFC_MEDICO_CONFIG || {};

const authForm = document.querySelector("[data-admin-auth-form]");
const provisionForm = document.querySelector("[data-provision-form]");
const queueList = document.querySelector("[data-queue-list]");
const latestResult = document.querySelector("[data-latest-result]");
const statusBanner = document.querySelector("[data-admin-status]");
const statusTitle = document.querySelector("[data-admin-status-title]");
const statusMessage = document.querySelector("[data-admin-status-message]");
const refreshButton = document.querySelector("[data-refresh-queue]");

const resultNodes = {
  slug: document.querySelector("[data-result-slug]"),
  publicUrl: document.querySelector("[data-result-public-url]"),
  activationUrl: document.querySelector("[data-result-activation-url]")
};

const state = {
  adminToken: window.localStorage.getItem("nfc-medico-admin-token") || "",
  latest: null,
  profiles: []
};

function cleanText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
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
      archived: "pending"
    }[status] || "pending"
  );
}

async function invokeAdmin(action, payload = {}) {
  if (!state.adminToken) {
    throw new Error("Primero guarda tu token de administrador.");
  }

  const response = await fetch(`${config.supabaseUrl}/functions/v1/${config.adminFunctionName || "medical-admin"}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`
    },
    body: JSON.stringify({
      adminToken: state.adminToken,
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

function renderLatestResult(result) {
  state.latest = result;
  if (!result) {
    latestResult.hidden = true;
    return;
  }

  latestResult.hidden = false;
  resultNodes.slug.textContent = cleanText(result.profile?.public_slug);
  resultNodes.publicUrl.textContent = cleanText(result.profile?.public_url);
  resultNodes.activationUrl.textContent = cleanText(result.profile?.activation_url || result.activationUrl || result.activationToken);
}

function buildQueueCard(profile) {
  const wrapper = document.createElement("article");
  wrapper.className = "queue-card";

  const statusClass = getStatusClass(profile.workflow_status);
  const statusLabel = getStatusLabel(profile.workflow_status);
  const hybridSummary = cleanText(profile.hybrid_summary);

  wrapper.innerHTML = `
    <div class="queue-card-head">
      <div>
        <h3>${cleanText(profile.full_name || profile.pending_label || profile.public_slug)}</h3>
        <p>${cleanText(profile.chip_reference || profile.public_slug)}</p>
      </div>
      <span class="queue-chip ${statusClass}">${statusLabel}</span>
    </div>

    <div class="queue-card-meta">
      <div class="queue-meta-row">
        <span>URL publica</span>
        <strong>${cleanText(profile.public_url)}</strong>
      </div>
      <div class="queue-meta-row">
        <span>Actualizado</span>
        <strong>${formatDate(profile.updated_at)}</strong>
      </div>
      <div class="queue-meta-row">
        <span>Activo desde</span>
        <strong>${formatDate(profile.activated_at)}</strong>
      </div>
      <div class="queue-meta-row">
        <span>Programado en chip</span>
        <strong>${formatDate(profile.nfc_programmed_at)}</strong>
      </div>
      ${
        hybridSummary
          ? `<div class="queue-meta-row"><span>Resumen hibrido offline</span><p>${hybridSummary}</p></div>`
          : ""
      }
    </div>

    <div class="queue-card-actions">
      <button class="button button-secondary" type="button" data-action="copy-public" data-slug="${profile.public_slug}">
        Copiar URL publica
      </button>
      <button class="button button-secondary" type="button" data-action="reissue" data-slug="${profile.public_slug}">
        Reemitir activacion
      </button>
      <button class="button button-primary" type="button" data-action="mark-programmed" data-slug="${profile.public_slug}">
        Marcar como grabado
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

function renderQueue(profiles) {
  state.profiles = profiles || [];
  queueList.innerHTML = "";

  if (!state.profiles.length) {
    queueList.innerHTML = `<article class="queue-empty"><p>No hay perfiles cargados todavia.</p></article>`;
    return;
  }

  state.profiles.forEach((profile) => {
    queueList.appendChild(buildQueueCard(profile));
  });
}

async function refreshQueue() {
  setStatus("loading", "Cargando cola", "Buscando perfiles pendientes, listos y activos.");
  const result = await invokeAdmin("list", {
    statuses: ["pending", "ready_to_program", "active", "update_requested"],
    limit: config.adminListLimit || 40
  });
  renderQueue(result.profiles || []);
  setStatus("success", "Cola actualizada", "La lista de perfiles ya esta sincronizada.");
}

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  state.adminToken = cleanText(authForm.elements.admin_token.value);
  if (!state.adminToken) {
    setStatus("warning", "Falta la clave", "Ingresa el token de administrador para continuar.");
    return;
  }

  window.localStorage.setItem("nfc-medico-admin-token", state.adminToken);

  try {
    await refreshQueue();
  } catch (error) {
    setStatus("error", "No se pudo cargar", cleanText(error.message));
  }
});

provisionForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    setStatus("loading", "Generando enlace", "Creando el perfil pendiente y el token privado.");
    const result = await invokeAdmin("provision", {
      fullName: provisionForm.elements.full_name.value,
      pendingLabel: provisionForm.elements.pending_label.value,
      defaultLanguage: provisionForm.elements.default_language.value,
      chipReference: provisionForm.elements.chip_reference.value
    });

    renderLatestResult(result);
    provisionForm.reset();
    setStatus("success", "Enlace generado", "El perfil pendiente ya tiene URL publica y link privado de activacion.");
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

latestResult.addEventListener("click", async (event) => {
  const trigger = event.target.closest("[data-copy-result]");
  if (!trigger || !state.latest) {
    return;
  }

  try {
    if (trigger.dataset.copyResult === "public") {
      await copyText(cleanText(state.latest.profile?.public_url), "La URL publica ya esta copiada.");
    } else {
      await copyText(cleanText(state.latest.profile?.activation_url), "El link privado de activacion ya esta copiado.");
    }
  } catch (error) {
    setStatus("error", "No se pudo copiar", cleanText(error.message));
  }
});

queueList.addEventListener("click", async (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) {
    return;
  }

  const action = trigger.dataset.action;
  const slug = cleanText(trigger.dataset.slug);

  try {
    if (action === "copy-public") {
      const profile = state.profiles.find((item) => item.public_slug === slug);
      if (profile) {
        await copyText(cleanText(profile.public_url), "La URL publica ya esta copiada.");
      }
      return;
    }

    if (action === "copy-summary") {
      await copyText(decodeURIComponent(trigger.dataset.summary || ""), "El resumen hibrido ya esta copiado.");
      return;
    }

    if (action === "reissue") {
      setStatus("loading", "Reemitiendo", "Creando un nuevo link privado para este perfil.");
      const result = await invokeAdmin("reissueActivation", { publicSlug: slug });
      renderLatestResult({
        profile: {
          public_slug: slug,
          public_url: result.publicUrl,
          activation_url: result.activationUrl
        }
      });
      setStatus("success", "Nueva activacion lista", "Se genero un nuevo link privado para este perfil.");
      await refreshQueue();
      return;
    }

    if (action === "mark-programmed") {
      setStatus("loading", "Marcando grabado", "Actualizando el estado del perfil en la cola.");
      await invokeAdmin("markProgrammed", { publicSlug: slug });
      setStatus("success", "Perfil activo", "El perfil ya quedo marcado como grabado en el chip.");
      await refreshQueue();
    }
  } catch (error) {
    setStatus("error", "Operacion fallida", cleanText(error.message));
  }
});

function init() {
  authForm.elements.admin_token.value = state.adminToken;

  if (state.adminToken) {
    refreshQueue().catch((error) => {
      setStatus("error", "No se pudo cargar", cleanText(error.message));
    });
  } else {
    setStatus("warning", "Ingresa tu acceso", "Guarda tu token privado de administrador para usar este panel.");
  }
}

init();
