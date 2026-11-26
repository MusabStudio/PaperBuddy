(function () {
  const API = window.UI.api;
  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const paperId = params.get("paper");

  let deck = [];
  let idx = 0;
  let rtl = false;

  function renderPicker() {
    $("picker").hidden = false;
    $("deck").hidden = true;
    const { SUBJECTS } = window.ZUEB;
    const grid = $("subjects");
    grid.innerHTML = "";
    [2, 1].forEach((part) => {
      const head = document.createElement("div");
      head.className = "section-block";
      head.style.gridColumn = "1 / -1";
      head.innerHTML = `<h3>${part === 1 ? "Part I · Class XI" : "Part II · Class XII"}</h3>`;
      grid.appendChild(head);
      SUBJECTS[part].forEach((s) => {
        const a = document.createElement("a");
        a.className = "subject";
        a.href = "flashcards.html?paper=" + s.id;
        a.innerHTML = `<div class="top"><div class="ico">${s.emoji}</div><div><h4>${s.name}</h4><div class="meta">12 cards</div></div></div>`;
        grid.appendChild(a);
      });
    });
  }

  function draw() {
    const card = deck[idx];
    if (!card) return;
    const f = $("flash");
    f.classList.remove("flipped");
    $("front").textContent = card.front;
    $("back").textContent = card.back;
    $("front").parentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
    $("back").parentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
    $("counter").textContent = `Card ${idx + 1} of ${deck.length}`;
    $("bar").style.width = ((idx + 1) / deck.length) * 100 + "%";
  }

  async function load() {
    try {
      const me = await API("/me");
      if (!me.user) { location.href = "account.html?next=flashcards.html%3Fpaper%3D" + encodeURIComponent(paperId || ""); return; }
    } catch {
      location.href = "account.html?next=flashcards.html";
      return;
    }
    if (!paperId) { renderPicker(); return; }
    const meta = window.ZUEB.find(paperId);
    rtl = ["p1-urdu", "p2-urdu", "p1-islamiyat"].includes(paperId);
    $("picker").hidden = true;
    $("deck").hidden = false;
    $("deck-title").textContent = (meta ? meta.emoji + " " + meta.name : "Deck") + " · " + deck.length + " cards";
    try {
      const data = await API("/flashcards/" + encodeURIComponent(paperId));
      deck = data.cards;
      idx = 0;
      $("deck-title").textContent = (meta ? meta.emoji + " " + meta.name : "Deck") + " · " + deck.length + " cards";
      draw();
    } catch (e) {
      if (e.status === 401) { location.href = "account.html?next=flashcards.html%3Fpaper%3D" + encodeURIComponent(paperId); return; }
      $("deck").innerHTML = `<div class="panel"><h3>Could not load cards</h3><p class="section-sub">${e.message}</p></div>`;
    }
  }

  $("flash").addEventListener("click", () => $("flash").classList.toggle("flipped"));
  $("next").onclick = () => { idx = (idx + 1) % deck.length; draw(); };
  $("prev").onclick = () => { idx = (idx - 1 + deck.length) % deck.length; draw(); };
  $("shuffle").onclick = () => {
    deck = deck.map((c) => [Math.random(), c]).sort((a, b) => a[0] - b[0]).map((x) => x[1]);
    idx = 0; draw();
  };
  document.addEventListener("keydown", (e) => {
    if (!deck.length) return;
    if (e.key === "ArrowRight") { idx = (idx + 1) % deck.length; draw(); }
    if (e.key === "ArrowLeft") { idx = (idx - 1 + deck.length) % deck.length; draw(); }
    if (e.key === " ") { e.preventDefault(); $("flash").classList.toggle("flipped"); }
  });

  load();
})();
