(function () {
  const API = window.UI.api;
  const $ = (id) => document.getElementById(id);
  const log = $("log");
  const input = $("input");
  const history = [];

  function add(role, text) {
    const d = document.createElement("div");
    d.className = "msg " + role;
    if (role === "bot") d.innerHTML = window.UI.md(text);
    else d.textContent = text;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }

  function typing() {
    const d = document.createElement("div");
    d.className = "msg bot typing";
    d.innerHTML = "<span></span><span></span><span></span>";
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }

  const CHIPS = [
    "Explain photosynthesis in simple words",
    "How do I attempt a 16-mark Biology question?",
    "Give me 5 important Physics formulas for Part II",
    "Difference between ionic and covalent bonds",
    "How to write a good essay in English?",
    "اردو میں مضمون کیسے لکھیں؟"
  ];
  const chips = $("chips");
  CHIPS.forEach((c) => {
    const b = document.createElement("button");
    b.className = "chip-btn";
    b.type = "button";
    b.textContent = c;
    b.onclick = () => { input.value = c; send(); };
    chips.appendChild(b);
  });

  async function boot() {
    try {
      const me = await API("/me");
      if (!me.user) {
        location.href = "account.html?next=chat.html";
        return;
      }
      add("sys", `Signed in as ${me.user.name}. Ask your first question.`);
    } catch {
      location.href = "account.html?next=chat.html";
    }
  }

  async function send() {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    add("user", text);
    history.push({ role: "user", content: text });
    const t = typing();
    try {
      const data = await API("/chat", {
        method: "POST",
        body: JSON.stringify({ message: text, history: history.slice(-8) }),
      });
      t.remove();
      if (data.wall && window.UI.wallBreak) window.UI.wallBreak();
      add("bot", data.reply || "(no reply)");
      history.push({ role: "assistant", content: data.reply || "" });
    } catch (e) {
      t.remove();
      if (e.status === 401) { location.href = "account.html?next=chat.html"; return; }
      add("bot", e.message || "Could not reach the helper. Try again.");
    }
  }

  $("form").addEventListener("submit", (e) => { e.preventDefault(); send(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  });

  boot();
})();
