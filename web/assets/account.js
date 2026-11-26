(function () {
  const API = window.UI.api;
  const $ = (id) => document.getElementById(id);

  const ALL = [
    ["first", "🌱", "First Steps", "Save your first attempt"],
    ["warm", "🔥", "Warmed Up", "Save five attempts"],
    ["grind", "⚙️", "Grinder", "Save fifteen attempts"],
    ["sharp", "🎯", "Sharp Shooter", "Score 70% or more"],
    ["topper", "🏆", "Topper", "Score 85% or more"],
    ["allround", "🧠", "All-Rounder", "Practise three different papers"],
    ["star", "⭐", "Subject Star", "Average 75%+ in one subject"],
    ["bothparts", "🎓", "Both Parts", "Practise Part I and Part II"],
    ["rookie", "✍️", "Answer Rookie", "Check 10 answers"],
    ["century", "🏏", "Half Century", "Check 50 answers"],
    ["halfway", "🌗", "Halfway There", "Finish half of a paper"],
    ["complete", "✅", "Paper Complete", "Answer every question"],
    ["cleared", "🎖️", "Subject Cleared", "Complete with 75%+"],
    ["distinction", "👑", "Distinction", "Complete with 90%+"]
  ];

  function renderBadges(earned) {
    const ids = new Set((earned || []).map((b) => b.id.replace(/^star-.*/, "star")));
    const box = $("badges");
    box.innerHTML = "";
    ALL.forEach(([id, icon, label, desc]) => {
      const has = ids.has(id);
      const d = document.createElement("div");
      d.className = "badge-card" + (has ? "" : " locked");
      d.innerHTML = `<div class="ico">${icon}</div><strong>${label}</strong><small>${has ? desc : "Locked"}</small>`;
      box.appendChild(d);
    });
  }

  function show(user, data) {
    $("guest").hidden = !!user;
    $("profile").hidden = !user;
    if (!user) return;
    $("p-avatar").textContent = user.name[0].toUpperCase();
    $("p-name").textContent = user.name;
    $("p-email").textContent = user.email;
    $("p-attempts").textContent = data.totals.attempts;
    $("p-papers").textContent = data.totals.papers;
    $("p-best").textContent = Math.round((data.totals.best || 0) * 100) + "%";
    renderBadges(data.badges);

    const tb = $("history");
    tb.innerHTML = "";
    (data.attempts || []).slice(0, 20).forEach((a) => {
      const meta = window.ZUEB.find(a.paper);
      const tr = document.createElement("tr");
      const pct = a.total ? Math.round((a.score / a.total) * 100) : 0;
      tr.innerHTML = `<td>${meta ? meta.emoji + " " + meta.subject + " · Part " + (meta.part === 1 ? "I" : "II") : a.paper}</td>
        <td>${a.score} / ${a.total} <small style="color:#889">(${pct}%)</small></td>
        <td>${new Date(a.created_at).toLocaleDateString()}</td>`;
      tb.appendChild(tr);
    });
    $("no-history").hidden = (data.attempts || []).length > 0;
  }

  async function load() {
    try {
      const data = await API("/me");
      show(data.user, data);
    } catch {
      show(null, {});
    }
  }

  $("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = $("li-msg");
    msg.className = "form-msg";
    msg.textContent = "Signing in…";
    try {
      await API("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: $("li-email").value, password: $("li-pass").value }),
      });
      msg.className = "form-msg ok";
      msg.textContent = "Welcome back!";
      const next = new URLSearchParams(location.search).get("next");
      if (next) { location.href = next; return; }
      await load();
      window.UI.paintAuth();
    } catch (err) {
      msg.className = "form-msg err";
      msg.textContent = err.message || "Could not sign in.";
    }
  });

  $("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = $("su-msg");
    msg.className = "form-msg";
    msg.textContent = "Creating…";
    try {
      await API("/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name: $("su-name").value, email: $("su-email").value, password: $("su-pass").value }),
      });
      msg.className = "form-msg ok";
      msg.textContent = "Account created!";
      const next = new URLSearchParams(location.search).get("next");
      if (next) { location.href = next; return; }
      await load();
      window.UI.paintAuth();
    } catch (err) {
      msg.className = "form-msg err";
      msg.textContent = err.message || "Could not create the account.";
    }
  });

  $("logout").addEventListener("click", async () => {
    try { await API("/auth/logout", { method: "POST", body: "{}" }); } catch {}
    await load();
    window.UI.paintAuth();
  });

  load();
})();
