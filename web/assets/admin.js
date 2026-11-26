(function () {
  const $ = (id) => document.getElementById(id);
  let data = null;
  let filter = "all";
  let q = "";

  const fmt = (t) => t ? new Date(t).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "—";
  const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

  function key() { return sessionStorage.getItem("pb_admin") || ""; }

  async function load() {
    $("err").textContent = "";
    try {
      const res = await fetch("/api/admin/overview", {
        method: "POST",
        headers: { "content-type": "application/json", "x-admin-key": key() },
        body: "{}",
      });
      if (res.status === 401) throw new Error("Wrong admin key.");
      if (!res.ok) throw new Error("Server error " + res.status);
      data = await res.json();
      $("gate").hidden = true;
      $("panel").hidden = false;
      render();
    } catch (e) {
      $("gate").hidden = false;
      $("panel").hidden = true;
      $("err").textContent = e.message || "Could not load.";
    }
  }

  function render() {
    const s = data.stats;
    $("stamp").textContent = "Updated " + fmt(data.generatedAt);
    const cards = [
      ["Users", s.users], ["Joined today", s.newToday], ["Last 7 days", s.new7d],
      ["Active 7d", s.active7d], ["Never practised", s.neverPractised],
      ["Attempts", s.attempts], ["Answers", s.answers]
    ];
    $("stats").innerHTML = cards.map(([k, v]) =>
      `<div class="stat-card"><span>${k}</span><strong>${v}</strong></div>`).join("");

    const rows = (data.users || []).filter((u) => {
      const okQ = !q || (u.name + " " + u.email).toLowerCase().includes(q);
      const okF = filter === "all" || (filter === "never" ? u.attempts === 0 : u.status === "active");
      return okQ && okF;
    });

    $("rows").innerHTML = rows.length ? rows.map((u) => {
      const tag = u.attempts === 0 ? "never" : (u.status === "active" ? "active" : "inactive");
      const label = u.attempts === 0 ? "never practised" : u.status;
      return `<tr>
        <td>${esc(u.name)}</td>
        <td>${esc(u.email)}</td>
        <td>${fmt(u.joined)}</td>
        <td>${fmt(u.lastLogin)}</td>
        <td>${u.attempts}</td>
        <td>${u.answers}</td>
        <td>${fmt(u.lastAttempt)}</td>
        <td><span class="tag ${tag}">${label}</span></td>
      </tr>`;
    }).join("") : `<tr><td colspan="8" style="text-align:center;color:#889;padding:20px">No users match.</td></tr>`;
  }

  $("unlock").onclick = () => {
    const v = $("key").value.trim();
    if (!v) return;
    sessionStorage.setItem("pb_admin", v);
    load();
  };
  $("key").addEventListener("keydown", (e) => { if (e.key === "Enter") $("unlock").click(); });
  $("refresh").onclick = load;
  $("lock").onclick = () => { sessionStorage.removeItem("pb_admin"); $("panel").hidden = true; $("gate").hidden = false; };
  $("search").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); render(); });
  document.querySelectorAll("[data-f]").forEach((b) => {
    b.onclick = () => {
      document.querySelectorAll("[data-f]").forEach((x) => x.classList.toggle("on", x === b));
      filter = b.dataset.f;
      render();
    };
  });
  $("csv").onclick = () => {
    const head = "name,email,joined,last_login,attempts,answers,last_attempt,status\n";
    const body = (data.users || []).map((u) => [
      JSON.stringify(u.name), JSON.stringify(u.email), fmt(u.joined), fmt(u.lastLogin), u.attempts, u.answers, fmt(u.lastAttempt), u.status
    ].join(",")).join("\n");
    const blob = new Blob([head + body], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "paperbuddy-users.csv";
    a.click();
  };

  if (key()) load();
})();
