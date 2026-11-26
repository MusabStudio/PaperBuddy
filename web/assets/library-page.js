(function () {
  const { el, openPdf } = window.UI;
  let items = [];
  let part = "all";
  let type = "all";
  let group = "all";
  let search = "";

  const PART_LABEL = { "1": "Part I", "2": "Part II", A: "Advanced" };

  function card(it) {
    const c = el("article", "paper-card spot");
    c.innerHTML = `
      <div class="pc-top">
        <span class="badge ${it.type}">${it.type === "model" ? "MODEL" : "GUESS"}</span>
        <span class="pc-size">${it.sizeKB} KB</span>
      </div>
      <h4>${it.subjectLabel}</h4>
      <p>${it.groupLabel} · ${PART_LABEL[it.part] || ""} · ${it.ext.toUpperCase()}</p>
      <div class="actions"></div>`;
    const actions = c.querySelector(".actions");
    if (it.ext === "pdf") {
      const v = el("button", "btn btn-small btn-gold shine", "👀 View");
      v.type = "button";
      v.onclick = () => openPdf(it.file, it.subjectLabel);
      actions.appendChild(v);
    }
    const d = el("a", "btn btn-small", "⬇️ Download");
    d.href = it.file;
    d.setAttribute("download", it.file.split("/").pop());
    actions.appendChild(d);
    return c;
  }

  function rebuildGroups() {
    const sel = document.getElementById("group");
    const current = sel.value;
    const groups = [...new Set(items.filter((i) => part === "all" || String(i.part) === String(part)).map((i) => i.groupLabel))].sort();
    sel.innerHTML = '<option value="all">All groups</option>' +
      groups.map((g) => `<option value="${g}">${g}</option>`).join("");
    if (groups.includes(current)) sel.value = current;
    else group = "all";
  }

  function render() {
    const host = document.getElementById("papers");
    host.innerHTML = "";
    const list = items.filter((it) => {
      const okPart = part === "all" || String(it.part) === String(part);
      const okType = type === "all" || it.type === type;
      const okGroup = group === "all" || it.groupLabel === group;
      const hay = (it.subjectLabel + " " + it.groupLabel).toLowerCase();
      return okPart && okType && okGroup && (!search || hay.includes(search));
    });
    list.slice(0, 400).forEach((it) => host.appendChild(card(it)));
    document.getElementById("empty").hidden = list.length > 0;
    document.getElementById("count-chip").textContent = list.length + (list.length === 1 ? " paper" : " papers");
    window.Premium && window.Premium.pointerFx();
  }

  document.getElementById("search").addEventListener("input", (e) => {
    search = e.target.value.trim().toLowerCase();
    render();
  });
  document.querySelectorAll("[data-part]").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll("[data-part]").forEach((x) => x.classList.toggle("on", x === b));
      part = b.dataset.part;
      rebuildGroups();
      render();
    });
  });
  document.querySelectorAll("[data-type]").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll("[data-type]").forEach((x) => x.classList.toggle("on", x === b));
      type = b.dataset.type;
      render();
    });
  });
  document.getElementById("group").addEventListener("change", (e) => {
    group = e.target.value;
    render();
  });

  fetch("/files/all/manifest.json").then((r) => r.json()).then((d) => {
    items = d.items || [];
    rebuildGroups();
    render();
  }).catch(() => {
    document.getElementById("papers").innerHTML =
      '<div class="panel"><h3>Could not load the library</h3><p class="section-sub">Refresh and try again.</p></div>';
  });
})();
