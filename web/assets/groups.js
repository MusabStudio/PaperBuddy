(function () {
  const { el } = window.UI;
  const boardId = window.boardParam();
  const board = window.getBoard(boardId);
  let tab = "all";
  let query = "";

  document.title = "All Groups | " + board.full;

  // board switch
  const switchWrap = document.getElementById("board-switch");
  if (switchWrap) {
    switchWrap.innerHTML = Object.values(window.BOARDS).map((b) =>
      `<a class="board-pill ${b.id === board.id ? "on" : ""}" href="groups.html?board=${b.id}">
         <span>${b.label}</span><small>${b.short}</small>
       </a>`).join("");
  }

  // feature panel
  const feature = document.getElementById("feature");
  if (feature) {
    const first = board.groups[0];
    const isAdvanced = !!first.advanced;
    feature.querySelector("[data-feature-name]").textContent = first.name;
    feature.querySelector("[data-feature-sub]").textContent = first.subjects.join(" · ");
    feature.querySelector("[data-feature-state]").textContent = board.status === "live" ? "LIVE NOW" : "FILES COMING SOON";
    feature.querySelector("[data-feature-state]").className = "state " + (board.status === "live" ? "live" : "soon");
    const rows = feature.querySelector("[data-feature-rows]");
    rows.innerHTML = board.status === "live"
      ? `<a class="btn btn-gold shine" href="papers.html?board=${board.id}&part=1&group=${first.folder}">Part I · Class XI</a>
         <a class="btn btn-gold shine" href="papers.html?board=${board.id}&part=2&group=${first.folder}">Part II · Class XII</a>`
      : `<span class="state soon">Papers pending</span>`;
  }

  function matches(g) {
    if (!query) return true;
    return (g.name + " " + g.subjects.join(" ")).toLowerCase().includes(query);
  }

  function partRows(g) {
    if (g.advanced) {
      return `<div class="part-row"><span class="part-name">HSSC-A</span>
        ${board.status === "live"
          ? `<a class="btn btn-small btn-gold shine" href="papers.html?board=${board.id}&part=A&group=${g.folder}">Open</a>`
          : `<span class="state soon">pending</span>`}</div>`;
    }
    const parts = tab === "all" ? [2, 1] : [Number(tab)];
    return parts.map((part) => {
      const label = part === 2 ? "Part II" : "Part I";
      const live = board.status === "live";
      return `<div class="part-row"><span class="part-name">${label}</span>
        <span style="display:flex;gap:6px">
          ${live ? `<a class="btn btn-small" href="practice-any.html?board=${board.id}&part=${part}&group=${g.folder}">✍️ Practice</a>
                    <a class="btn btn-small btn-gold shine" href="papers.html?board=${board.id}&part=${part}&group=${g.folder}">Open</a>`
                 : `<span class="state soon">papers pending</span>`}
        </span></div>`;
    }).join("");
  }

  function card(g) {
    const c = el("article", "field-card spot");
    const state = board.status === "live"
      ? '<span class="state live">ALL PAPERS</span>'
      : '<span class="state soon">COMING SOON</span>';
    c.innerHTML = `
      <div class="field-top"><div class="field-ico">${g.emoji}</div>${state}</div>
      <h3>${g.name}</h3>
      <p class="field-sub">${g.subjects.join(" · ")}</p>
      <div class="chips">${g.subjects.slice(0, 6).map((s) => `<span class="mini-chip">${s}</span>`).join("")}</div>
      <div class="parts">${partRows(g)}</div>`;
    return c;
  }

  function render() {
    const host = document.getElementById("fields");
    host.innerHTML = "";
    const list = board.groups.filter(matches);
    list.forEach((g) => host.appendChild(card(g)));
    document.getElementById("empty").hidden = list.length > 0;
    document.getElementById("count-note").textContent =
      `${list.length} groups · ${board.label} · ${tab === "all" ? "both parts" : "Part " + (tab === "1" ? "I" : "II")}`;
    window.Premium && window.Premium.pointerFx();
  }

  document.getElementById("search").addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });
  document.querySelectorAll("[data-tab]").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll("[data-tab]").forEach((x) => x.classList.toggle("on", x === b));
      tab = b.dataset.tab;
      render();
    });
  });

  render();
})();
