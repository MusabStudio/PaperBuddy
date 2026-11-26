(function () {
const TYPE_LABEL = { model: "MODEL", guess: "GUESS", past: "PAST", practice: "PRACTICE" };
  const { el, openPdf } = window.UI;
  const boardId = window.boardParam();
  const board = window.getBoard(boardId);
  let items = [];
  let part = "all";
  let type = "all";
  let group = "all";
  let search = "";
  let loaded = false;

  const PART_LABEL = { "1": "Part I", "2": "Part II", A: "Advanced" };

  document.title = "Library | " + board.full;
  document.getElementById("eyebrow").textContent = board.full;

  const tabs = document.getElementById("board-tabs");
  if (tabs) {
    tabs.innerHTML = Object.values(window.BOARDS).map((b) =>
      `<a class="board-pill ${b.id === board.id ? "on" : ""}" href="library.html?board=${b.id}">
         <span>${b.label}</span><small>${b.short}</small></a>`).join("");
  }

  function card(it) {
    const c = el("article", "paper-card spot");
    c.innerHTML = `
      <div class="pc-top">
        <span class="badge ${it.type}">${TYPE_LABEL[it.type] || "PAPER"}</span>
        <span class="pc-size">${it.sizeKB} KB</span>
      </div>
      <h4>${it.subjectLabel}</h4>
      <p>${it.groupLabel} · ${PART_LABEL[it.part] || ""}${it.year ? " · " + it.year : ""} · ${it.ext.toUpperCase()}</p>
      <div class="actions"></div>`;
    const actions = c.querySelector(".actions");
    if (it.type === "practice") {
      const pr = el("a", "btn btn-small btn-gold shine", "✍️ Practise");
      pr.href = "practice-set.html?file=" + encodeURIComponent(it.file) + "&subject=" + encodeURIComponent(it.subjectLabel);
      actions.appendChild(pr);
      return c;
    }
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
    const names = [...new Set(items.filter((i) => part === "all" || String(i.part) === String(part)).map((i) => i.groupLabel))].sort();
    const fallback = board.groups.map((g) => g.name).sort();
    const list = names.length ? names : fallback;
    sel.innerHTML = '<option value="all">All groups</option>' + list.map((g) => `<option value="${g}">${g}</option>`).join("");
    if (list.includes(current)) sel.value = current;
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
    document.getElementById("empty").hidden = list.length > 0 || !loaded;
    document.getElementById("count-chip").textContent = list.length + (list.length === 1 ? " paper" : " papers");

    if (loaded && !items.length) {
      host.innerHTML = `<div class="panel" style="grid-column:1/-1">
        <h3>${board.label} files are not here yet</h3>
        <p class="section-sub">The ${board.full} pack is still being built. Once the papers land in <code>files/biek/</code>, this page fills automatically.</p>
        <a class="btn btn-small" href="groups.html?board=${board.id}">See the ${board.label} groups →</a>
      </div>`;
    }
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

  rebuildGroups();
  render();

  fetch(board.manifest)
    .then((r) => { if (!r.ok) throw new Error("no manifest"); return r.json(); })
    .then((d) => { items = d.items || []; loaded = true; rebuildGroups(); render(); })
    .catch(() => { loaded = true; render(); });
})();
