/* Shared UI: nav state, auth, PDF viewer, creator badge, reveal animations. */
(function () {
  const WALL = null;

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function toast(msg) {
    const t = el("div", "toast", msg);
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 2600);
  }

  async function api(path, opts = {}) {
    const res = await fetch("/api" + path, {
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      ...opts,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || data.message || "Request failed"), { data, status: res.status });
    return data;
  }

  /* creator float */
  function creatorFloat() {
    if (document.querySelector(".creator-float")) return;
    const a = el("aside", "creator-float");
    a.innerHTML = `
      <div class="creator-title">Created by <strong>Musab</strong></div>
      <a class="insta-btn" href="https://www.instagram.com/musabhussainoffical/" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>
        Follow on Instagram
      </a>
      <div class="creator-handle">@musabhussainoffical</div>`;
    document.body.appendChild(a);
  }

  /* PDF viewer */
  let viewer;
  function ensureViewer() {
    if (viewer) return viewer;
    viewer = el("div", "modal");
    viewer.hidden = true;
    viewer.innerHTML = `
      <div class="modal-box">
        <div class="modal-bar">
          <span id="viewer-title"></span>
          <div class="modal-actions">
            <a id="viewer-open" target="_blank" rel="noopener" class="btn btn-small">Open in tab</a>
            <a id="viewer-download" class="btn btn-small btn-gold" download>Download</a>
            <button id="viewer-close" class="btn btn-small" type="button">Close</button>
          </div>
        </div>
        <iframe id="viewer-frame" title="PDF viewer"></iframe>
      </div>`;
    document.body.appendChild(viewer);
    viewer.querySelector("#viewer-close").onclick = closeViewer;
    viewer.addEventListener("click", (e) => { if (e.target === viewer) closeViewer(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeViewer(); });
    return viewer;
  }
  function openPdf(url, title) {
    if (!window.AUTH.user) {
      gateModal("Sign in to open this paper", "Browsing and covers are free. An account opens the full PDF.");
      return;
    }
    const v = ensureViewer();
    v.querySelector("#viewer-title").textContent = "📄 " + (title || "Paper");
    v.querySelector("#viewer-open").href = url;
    const d = v.querySelector("#viewer-download");
    d.href = url;
    d.setAttribute("download", url.split("/").pop());
    v.querySelector("#viewer-frame").src = url;
    v.hidden = false;
  }
  function closeViewer() {
    if (!viewer) return;
    viewer.hidden = true;
    viewer.querySelector("#viewer-frame").src = "about:blank";
  }

  /* nav + auth pill */
  window.AUTH = { user: null, checked: false };

  function lockPanel(host, title, note) {
    if (!host) return;
    const next = encodeURIComponent(location.pathname + location.search);
    host.innerHTML = `<div class="lock-panel">
      <div class="ico">🔒</div>
      <h3>${title}</h3>
      <p>${note}</p>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <a class="btn btn-gold shine" href="account.html?next=${next}&mode=signup">Create free account</a>
        <a class="btn" href="account.html?next=${next}">Sign in</a>
      </div>
    </div>`;
  }

  function gateModal(title, note) {
    let m = document.getElementById("auth-gate");
    if (!m) {
      m = el("div", "gate-modal");
      m.id = "auth-gate";
      m.innerHTML = `
        <div class="gate-box">
          <div class="gate-ico">🔒</div>
          <h3 id="gate-title"></h3>
          <p id="gate-note"></p>
          <div class="gate-actions">
            <a class="btn btn-gold shine" id="gate-signup">Create free account</a>
            <a class="btn" id="gate-signin">Sign in</a>
          </div>
          <button class="gate-close" type="button" aria-label="Close">✕</button>
          <div class="gate-small">Free, takes 20 seconds. Your scores and badges are saved.</div>
        </div>`;
      document.body.appendChild(m);
      m.addEventListener("click", (e) => { if (e.target === m) closeGate(); });
      m.querySelector(".gate-close").onclick = closeGate;
    }
    const next = encodeURIComponent(location.pathname + location.search);
    m.querySelector("#gate-signup").href = "account.html?next=" + next + "&mode=signup";
    m.querySelector("#gate-signin").href = "account.html?next=" + next;
    m.querySelector("#gate-title").textContent = title || "Sign in to continue";
    m.querySelector("#gate-note").textContent = note || "Browsing is free. An account unlocks papers, practice and chat.";
    m.classList.add("show");
  }

  function closeGate() {
    const m = document.getElementById("auth-gate");
    if (m) m.classList.remove("show");
  }

  async function paintAuth() {
    const slot = document.getElementById("auth-slot");
    if (!slot) return;
    try {
      const { user } = await api("/me");
      window.AUTH.user = user || null;
      window.AUTH.checked = true;
      if (user) {
        slot.innerHTML = "";
        const a = el("a", "auth-pill", `<span class="avatar">${user.name[0].toUpperCase()}</span><span>${user.name}</span>`);
        a.href = "account.html";
        slot.appendChild(a);
      } else {
        slot.innerHTML = `<a class="btn btn-small btn-gold" href="account.html">Sign in</a>`;
      }
    } catch {
      slot.innerHTML = `<a class="btn btn-small btn-gold" href="account.html">Sign in</a>`;
    }
  }

  /* reveal */
  function reveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
  }

  function scrollUi() {
    if (!document.getElementById("readbar")) {
      const bar = document.createElement("div");
      bar.id = "readbar";
      document.body.appendChild(bar);
    }
    if (!document.getElementById("toTop")) {
      const b = document.createElement("button");
      b.id = "toTop";
      b.type = "button";
      b.setAttribute("aria-label", "Back to top");
      b.textContent = "↑";
      b.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.appendChild(b);
    }
    const bar = document.getElementById("readbar");
    const top = document.getElementById("toTop");
    let ticking = false;
    let lastY = window.scrollY;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
        bar.style.width = pct + "%";
        top.classList.toggle("on", h.scrollTop > 420);

        // floating buttons get out of the way while reading down
        const y = h.scrollTop;
        const goingDown = y > lastY + 4;
        const goingUp = y < lastY - 4;
        if (goingDown && y > 180) {
          document.querySelectorAll(".creator-float, .ai-fab").forEach((n) => n.classList.add("float-hidden"));
        } else if (goingUp || y < 120) {
          document.querySelectorAll(".creator-float, .ai-fab").forEach((n) => n.classList.remove("float-hidden"));
        }
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener("DOMContentLoaded", () => {
    creatorFloat();
    paintAuth();
    reveal();
    scrollUi();

    // copying text from papers/gallery needs an account
    document.addEventListener("copy", (e) => {
      if (window.AUTH.user) return;
      const zone = e.target.closest && e.target.closest(".paper-card, .photo3d, .qbox, .card, .field-card");
      if (zone) {
        e.preventDefault();
        gateModal("Sign in to copy", "Reading is free. Copying paper text needs an account.");
      }
    }, true);

    // downloads need an account
    document.addEventListener("click", (e) => {
      const a = e.target.closest && e.target.closest("a[download]");
      if (a && !window.AUTH.user) {
        e.preventDefault();
        gateModal("Sign in to download", "You can browse everything. Downloads and practice are for members.");
      }
    }, true);
  });

  function esc(str) {
    return String(str).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  }

  // tiny markdown: bold, italics, code, bullets, headings, line breaks
  function md(text) {
    let s = esc(text);
    s = s.replace(/```([\s\S]*?)```/g, (m, code) => "<pre class='md-code'>" + code.trim() + "</pre>");
    s = s.replace(/`([^`]+)`/g, "<code class='md-inline'>$1</code>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    s = s.replace(/^\s*#{1,6}\s*(.+)$/gm, "<strong>$1</strong>");
    s = s.replace(/^\s*[-*]\s+(.+)$/gm, "• $1");
    s = s.replace(/\n/g, "<br>");
    return s;
  }

  window.UI = { el, toast, api, openPdf, closeViewer, paintAuth, md, gateModal, lockPanel };
})();
