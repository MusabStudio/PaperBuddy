(function () {
const TYPE_LABEL = { model: "MODEL", guess: "GUESS", past: "PAST", practice: "PRACTICE" };
  const { el, openPdf } = window.UI;
  const q = new URLSearchParams(location.search);
  const boardId = q.get("board") || "zueb";
  const board = window.getBoard(boardId);
  const part = q.get("part") || "2";
  const group = q.get("group") || "Pre-Medical";

  let items = [];
  let type = "all";
  let search = "";
  let loaded = false;

  const PART_LABEL = { "1": "Part I · Class XI", "2": "Part II · Class XII", A: "HSSC Advanced" };
  const prettyGroup = (g) => g.replace(/-/g, " ");

  function setHeader() {
    document.getElementById("eyebrow").textContent = board.full;
    document.getElementById("crumb").textContent = prettyGroup(group) + " · papers";
    document.getElementById("group-title").textContent = prettyGroup(group);
    document.title = prettyGroup(group) + " | " + board.label;

    const live = board.status === "live";
    document.getElementById("group-sub").innerHTML =
      "Everything available for this group in " + (PART_LABEL[part] || "HSSC") + "." +
      (live
        ? ` · <a class="btn btn-small btn-gold" href="practice-any.html?board=${board.id}&part=${part}&group=${group}">✍️ Practice this group</a>`
        : ' · <span class="state soon">papers pending</span>');
  }

  function card(it) {
    const c = el("article", "paper-card spot");
    const isDocx = it.ext === "docx";
    c.innerHTML = `
      <div class="pc-top">
        <span class="badge ${it.type}">${TYPE_LABEL[it.type] || "PAPER"}</span>
        <span class="pc-size">${it.sizeKB} KB</span>
      </div>
      <h4>${it.subjectLabel}</h4>
      <p>${it.ext.toUpperCase()} · ${PART_LABEL[it.part] || ""}${it.year ? " · " + it.year : ""}</p>
      <div class="actions"></div>`;
    const actions = c.querySelector(".actions");
    if (!isDocx) {
      const v = el("button", "btn btn-small btn-gold shine", "👀 View");
      v.type = "button";
      v.onclick = () => openPdf(it.file, it.subjectLabel + " " + it.type + " paper");
      actions.appendChild(v);
    }
    const d = el("a", "btn btn-small", "⬇️ Download");
    d.href = it.file;
    d.setAttribute("download", it.file.split("/").pop());
    actions.appendChild(d);
    return c;
  }

  function render() {
    const host = document.getElementById("papers");
    host.innerHTML = "";
    const list = items.filter((it) => {
      const okType = type === "all" || it.type === type;
      const okSearch = !search || (it.subjectLabel + " " + it.type).toLowerCase().includes(search);
      return okType && okSearch;
    });
    list.forEach((it) => host.appendChild(card(it)));
    document.getElementById("empty").hidden = list.length > 0 || !loaded;
    document.getElementById("count-chip").textContent = list.length + (list.length === 1 ? " paper" : " papers");

    if (loaded && !items.length) {
      host.innerHTML = `<div class="panel" style="grid-column:1/-1">
        <h3>No ${board.label} papers for this group yet</h3>
        <p class="section-sub">The ${board.full} pack is still being built. Files will appear here automatically once they are added.</p>
        <a class="btn btn-small" href="groups.html?board=${board.id}">Back to ${board.label} groups →</a>
      </div>`;
    }
    window.Premium && window.Premium.pointerFx();
  }

  document.getElementById("search").addEventListener("input", (e) => {
    search = e.target.value.trim().toLowerCase();
    render();
  });
  document.querySelectorAll("[data-type]").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll("[data-type]").forEach((x) => x.classList.toggle("on", x === b));
      type = b.dataset.type;
      render();
    });
  });

  setHeader();
  render();

  fetch(board.manifest)
    .then((r) => { if (!r.ok) throw new Error("no manifest"); return r.json(); })
    .then((d) => {
      items = (d.items || []).filter((it) => String(it.part) === String(part) && it.group === group);
      loaded = true;
      render();
    })
    .catch(() => { loaded = true; render(); });
})();
