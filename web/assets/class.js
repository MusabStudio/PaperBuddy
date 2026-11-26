(function () {
  const params = new URLSearchParams(location.search);
  const part = params.get("part") === "1" ? 1 : 2;
  const { SUBJECTS } = window.ZUEB;
  const { el, openPdf } = window.UI;

  document.getElementById("part-label").textContent = part === 1 ? "HSSC Part I" : "HSSC Part II";
  document.getElementById("part-title").innerHTML =
    (part === 1 ? "Class XI" : "Class XII") + ' <span class="hl">Pre-Medical</span>';
  document.getElementById("subject-heading").textContent = (part === 1 ? "Part I" : "Part II") + " subjects";
  document.getElementById("subject-note").textContent =
    part === 1
      ? "Includes Islamiyat, which is compulsory in Part I."
      : "Pakistan Studies and Sindhi model papers are available in the library.";

  // class area requires an account
  fetch("/api/me", { credentials: "same-origin" })
    .then((r) => r.json())
    .then((d) => {
      if (!d.user) {
        location.replace("account.html?next=" + encodeURIComponent("class.html?part=" + part));
      }
    })
    .catch(() => {});

  let counts = {};
  fetch("/api/papers").then((r) => r.json()).then((d) => {
    (d.papers || []).forEach((p) => { counts[p.id] = p; });
    render();
  }).catch(render);

  function render() {
    const grid = document.getElementById("subjects");
    grid.innerHTML = "";
    SUBJECTS[part].forEach((s) => {
      const meta = counts[s.id];
      const total = meta ? meta.total : "—";
      const card = el("article", "subject reveal");
      card.innerHTML = `
        <div class="top"><div class="ico">${s.emoji}</div><div><h4>${s.name}</h4>
          <div class="meta">${total} practice questions</div></div></div>
        <div class="row">
          <button class="btn btn-small" type="button" data-model>📄 Model</button>
          <button class="btn btn-small" type="button" data-guess>📝 Guess</button>
          <a class="btn btn-small btn-green" href="practice.html?paper=${s.id}">✍️ Practise</a>
        </div>`;
      card.querySelector("[data-model]").onclick = () => openPdf(s.model, s.name + " model paper");
      card.querySelector("[data-guess]").onclick = () => openPdf(s.guess, s.name + " guess paper");
      grid.appendChild(card);
    });
    document.querySelectorAll(".reveal").forEach((n) => n.classList.add("in"));
  }
})();
