(function () {
  const { el, openPdf } = window.UI;
  let items = [];
  let part = "all";
  let search = "";

  function card(it) {
    const c = el("figure", "photo3d");
    c.setAttribute("data-tilt", "");
    c.innerHTML = `
      <img loading="lazy" src="${it.thumb}" alt="${it.subject} ${it.groupLabel} cover">
      <div class="glare"></div>
      <span class="label" data-depth="46">${it.subject}</span>`;
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
    document.getElementById("empty").hidden = list.length > 0;
    document.getElementById("count-chip").textContent = list.length + " covers";
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

  fetch("/files/gallery.json").then((r) => r.json()).then((d) => {
    items = d.items || [];
    render();
  }).catch(() => {
    document.getElementById("gallery").innerHTML =
      '<div class="panel"><h3>Could not load the gallery</h3><p class="section-sub">Refresh and try again.</p></div>';
  });
})();
