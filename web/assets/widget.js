/* Floating AI chat button, available on every page except the full chat page. */
(function () {
  if (/chat\.html$/i.test(location.pathname)) return;

  const el = window.UI.el;
  const API = window.UI.api;
  let history = [];
  let panel, log, input, fab;
  let opened = false;

  function bubble(role, text) {
    const d = el("div", "msg " + role);
    if (role === "bot") d.innerHTML = window.UI.md(text);
    else d.textContent = text;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }

  function build() {
    fab = el("button", "ai-fab", '<span class="ping"></span>🤖');
    fab.type = "button";
    fab.title = "Ask the AI helper";
    fab.setAttribute("aria-label", "Open AI chat");

    panel = el("div", "ai-panel");
    panel.hidden = true;
    panel.innerHTML = `
      <div class="ai-head">
        <div><strong>Study Helper</strong><small>Physics · Chemistry · Biology · English · Urdu · Islamiyat</small></div>
        <button class="ai-close" type="button" aria-label="Close">✕</button>
      </div>
      <div class="ai-log"></div>
      <form class="ai-form">
        <input type="text" placeholder="Ask a question…" autocomplete="off">
        <button type="submit">Send</button>
      </form>`;

    document.body.appendChild(fab);
    document.body.appendChild(panel);
    log = panel.querySelector(".ai-log");
    input = panel.querySelector("input");

    fab.onclick = open;
    panel.querySelector(".ai-close").onclick = close;
    panel.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      send();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !panel.hidden) close();
    });
  }

  async function open() {
    panel.hidden = false;
    fab.style.display = "none";
    if (!opened) {
      opened = true;
      bubble("bot", "Hi! Ask me anything from your ZUEB Pre-Medical subjects. I can explain topics, give formulas, or help you plan an answer.");
    }
    setTimeout(() => input.focus(), 120);
  }

  function close() {
    panel.hidden = true;
    fab.style.display = "grid";
  }

  async function send() {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    bubble("user", text);
    history.push({ role: "user", content: text });

    const t = el("div", "msg bot typing");
    t.innerHTML = "<span></span><span></span><span></span>";
    log.appendChild(t);
    log.scrollTop = log.scrollHeight;

    try {
      const data = await API("/chat", {
        method: "POST",
        body: JSON.stringify({ message: text, history: history.slice(-8) }),
      });
      t.remove();
      if (data.wall && window.UI.wallBreak) window.UI.wallBreak();
      bubble("bot", data.reply || "No reply.");
      history.push({ role: "assistant", content: data.reply || "" });
    } catch (e) {
      t.remove();
      if (e.status === 401) {
        location.href = "account.html?next=" + encodeURIComponent(location.pathname.split("/").pop() + location.search);
        return;
      }
      bubble("bot", e.message || "Could not reach the helper. Try again.");
    }
  }

  document.addEventListener("DOMContentLoaded", build);
})();
