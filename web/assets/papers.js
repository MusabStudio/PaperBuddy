(function () {
  const { el, openPdf } = window.UI;
  const q = new URLSearchParams(location.search);
  const part = q.get("part") || "2";
  const group = q.get("group") || "Pre-Medical";

  let items = [];
  let type = "all";
  let search = "";

  const PART_LABEL = { "1": "Part I · Class XI", "2": "Part II · Class XII", A: "HSSC Advanced" };

  function prettyGroup(g) {
    return g.replace(/-/g, " ");
  }

  function setHeader() {
    document.getElementById("eyebrow").textContent = PART_LABEL[part] || "HSSC";
    document.getElementById("crumb").textContent = prettyGroup(group) + " · papers";
    document.getElementById("group-title").textContent = prettyGroup(group);
    document.getElementById("group-sub").innerHTML =
      "Everything available for this group in " + (PART_LABEL[part] || "HSSC") +
      ` · <a class="btn btn-small btn-gold" href="practice-any.html?part=${part}&group=${group}">✍️ Practice this group</a>`;
    document.title = prettyGroup(group) + " | ZUEB Papers Hub";
    const openClass = part === "1" || part === "2";
    if (group === "Pre-Medical" && openClass) {
      document.getElementById("group-sub").innerHTML =
        'Everything for this group. <a href="class.html?part=' + part + '">Open the class area →</a>' +
        ` · <a class="btn btn-small btn-gold" href="practice-any.html?part=${part}&group=${group}">✍️ Practice</a>`;
    }
  }

  function card(it) {
    const c = el("article", "paper-card spot");
    const isDocx = it.ext === "docx";
    c.innerHTML = `
      <div class="pc-top">
        <span class="badge ${it.type}">${it.type === "model" ? "MODEL" : "GUESS"}</span>
        <span class="pc-size">${it.sizeKB} KB</span>
      </div>
      <h4>${it.subjectLabel}</h4>
      <p>${it.ext.toUpperCase()} · ${PART_LABEL[it.part] || ""}</p>
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
    document.getElementById("empty").hidden = list.length > 0;
    document.getElementById("count-chip").textContent = list.length + (list.length === 1 ? " paper" : " papers");
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
  fetch("/files/all/manifest.json")
    .then((r) => r.json())
    .then((d) => {
      items = (d.items || []).filter((it) => String(it.part) === String(part) && it.group === group);
      if (!items.length) {
        document.getElementById("group-sub").textContent = "No files found for this group yet.";
      }
      render();
      window.Premium && window.Premium.pointerFx();
    })
    .catch(() => {
      document.getElementById("papers").innerHTML =
        '<div class="panel"><h3>Could not load the paper list</h3><p class="section-sub">Refresh the page and try again.</p></div>';
    });
})();
