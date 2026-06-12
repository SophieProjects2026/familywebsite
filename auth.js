const AUTH_KEY = "d-and-l-family-authenticated";
const AUTH_CONFIG = window.FAMILY_SITE_AUTH_CONFIG || {
  enabled: true,
  password: "familygarden",
  rememberDays: 30
};

document.addEventListener("DOMContentLoaded", () => {
  if (AUTH_CONFIG.enabled === false) {
    unlockSite();
  } else if (isRemembered()) {
    unlockSite();
  } else {
    showPasswordGate();
  }

  document.querySelectorAll("[data-logout]").forEach((button) => {
    button.addEventListener("click", logOut);
  });
});

function showPasswordGate() {
  const gate = document.createElement("main");
  gate.className = "password-gate";
  gate.innerHTML = `
    <form class="password-card" id="password-form">
      <h1>The D and L Family Website</h1>
      <p>Please enter the family password to continue.</p>
      <label>
        Password
        <input id="site-password" type="password" autocomplete="current-password" autofocus>
      </label>
      <button type="submit">Enter</button>
      <p class="password-error" id="password-error" aria-live="polite"></p>
    </form>
  `;

  document.body.prepend(gate);

  const form = gate.querySelector("#password-form");
  const input = gate.querySelector("#site-password");
  const error = gate.querySelector("#password-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value === AUTH_CONFIG.password) {
      rememberAccess();
      gate.remove();
      unlockSite();
      return;
    }

    error.textContent = "That password did not work. Please try again.";
    input.value = "";
    input.focus();
  });
}

function unlockSite() {
  document.body.classList.remove("auth-locked");
}

function rememberAccess() {
  const expiresAt = Date.now() + AUTH_CONFIG.rememberDays * 24 * 60 * 60 * 1000;
  localStorage.setItem(AUTH_KEY, JSON.stringify({ expiresAt }));
}

function isRemembered() {
  const saved = localStorage.getItem(AUTH_KEY);

  if (!saved) return false;

  try {
    const parsed = JSON.parse(saved);
    if (parsed.expiresAt && Date.now() < parsed.expiresAt) {
      return true;
    }
  } catch (error) {
    return false;
  }

  localStorage.removeItem(AUTH_KEY);
  return false;
}

function logOut() {
  localStorage.removeItem(AUTH_KEY);
  window.location.reload();
}
