(function () {
  const { el, openPdf } = window.UI;
  const boardId = window.boardParam();
  const board = window.getBoard(boardId);
  let items = [];
  let part = "all";
  let search = "";

  document.title = "3D Gallery | " + board.full;

  const tabs = document.getElementById("board-tabs");
  if (tabs) {
    tabs.innerHTML = Object.values(window.BOARDS).map((b) =>
      `<a class="board-pill ${b.id === board.id ? "on" : ""}" href="gallery.html?board=${b.id}">
         <span>${b.label}</span><small>${b.short}</small></a>`).join("");
  }

  function card(it) {
    const c = el("figure", "photo3d");
    c.setAttribute("data-tilt", "");
    c.innerHTML = `
      <img loading="lazy" src="${it.thumb}" alt="${it.label || it.subject} cover">
      <div class="glare"></div>
      <span class="label" data-depth="46">${it.label || it.subject}</span>`;
    c.onclick = () => openPdf(it.file, it.subject + " · " + it.groupLabel);
    return c;
  }

  function render() {
    const host = document.getElementById("gallery");
    host.innerHTML = "";
    const list = items.filter((it) => {
      const okPart = part === "all" || String(it.part) === String(part);
      const hay = (it.subject + " " + it.groupLabel).toLowerCase();
      return okPart && (!search || hay.includes(search));
    });
    list.forEach((it) => host.appendChild(card(it)));
    document.getElementById("count-chip").textContent = list.length + " covers";

    if (!items.length) {
      document.getElementById("empty").hidden = false;
      document.getElementById("empty").innerHTML = `${board.label} covers are still being prepared. <a href="groups.html?board=${board.id}">See the groups →</a>`;
    } else {
      document.getElementById("empty").hidden = list.length > 0;
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
      render();
    });
  });

  fetch(board.gallery)
    .then((r) => { if (!r.ok) throw new Error("no gallery"); return r.json(); })
    .then((d) => { items = d.items || []; render(); })
    .catch(() => { render(); });
})();
