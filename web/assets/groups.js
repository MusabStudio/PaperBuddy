(function () {
  const { el } = window.UI;

  const GROUPS = [
    { name: "Pre-Medical", folder: "Pre-Medical", emoji: "🩺", subjects: ["Physics", "Chemistry", "Biology"] },
    { name: "Pre-Engineering", folder: "Pre-Engineering", emoji: "📐", subjects: ["Physics", "Chemistry", "Mathematics"] },
    { name: "General Science", folder: "General-Science", emoji: "🔬", subjects: ["Physics", "Computer Science", "Mathematics"] },
    { name: "Commerce", folder: "Commerce", emoji: "📊", subjects: ["Accounting-I", "Business Mathematics", "Principles of Commerce", "Principles of Economics"] },
    { name: "Humanities", folder: "Humanities", emoji: "📚", subjects: ["Islamic Studies", "Mathematics", "Sociology", "Economics", "Education", "Civics", "Computer Science"] },
    { name: "Medical Technology", folder: "Medical-Technology", emoji: "🧫", subjects: ["Microbiology", "Hematology & Blood Banking", "Anatomy & Physiology"] },
    { name: "Pre-Nursing", folder: "Pre-Nursing", emoji: "💉", subjects: ["Biochemistry", "Fundamentals of Nursing", "Elementary Anatomy & Microtechniques"] }
  ];

  const COMPULSORY = { name: "Compulsory Subjects", folder: "Compulsory", emoji: "📘", subjects: ["English", "Urdu Normal", "Islamiyat (Part I)", "Pakistan Studies (Part II)"] };
  const ADVANCED = { name: "HSSC Advanced", folder: "Advanced", emoji: "🚀", subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English", "Urdu", "Islamiyat", "Pakistan Studies"] };

  let tab = "all";
  let query = "";

  function matches(g) {
    if (!query) return true;
    return (g.name + " " + g.subjects.join(" ")).toLowerCase().includes(query);
  }

  function partRows(g) {
    if (g === ADVANCED) {
      return `<div class="part-row"><span class="part-name">HSSC-A</span>
        <span style="display:flex;gap:6px">
          <a class="btn btn-small" href="practice-any.html?part=A&group=Advanced">✍️ Practice</a>
          <a class="btn btn-small btn-gold shine" href="papers.html?part=A&group=Advanced">Open</a>
        </span></div>`;
    }
    const parts = tab === "all" ? [2, 1] : [Number(tab)];
    return parts.map((part) => {
      const label = part === 2 ? "Part II" : "Part I";
      return `<div class="part-row"><span class="part-name">${label}</span>
        <span style="display:flex;gap:6px">
          <a class="btn btn-small" href="practice-any.html?part=${part}&group=${g.folder}">✍️ Practice</a>
          <a class="btn btn-small btn-gold shine" href="papers.html?part=${part}&group=${g.folder}">Open</a>
        </span></div>`;
    }).join("");
  }

  function card(g) {
    const c = el("article", "field-card spot");
    c.innerHTML = `
      <div class="field-top">
        <div class="field-ico">${g.emoji}</div>
        <span class="state live">ALL PAPERS</span>
      </div>
      <h3>${g.name}</h3>
      <p class="field-sub">${g.subjects.join(" · ")}</p>
      <div class="chips">${g.subjects.slice(0, 6).map((s) => `<span class="mini-chip">${s}</span>`).join("")}</div>
      <div class="parts">${partRows(g)}</div>`;
    return c;
  }

  function render() {
    const host = document.getElementById("fields");
    host.innerHTML = "";
    const list = GROUPS.filter(matches);
    list.forEach((g) => host.appendChild(card(g)));
    if (matches(COMPULSORY)) host.appendChild(card(COMPULSORY));
    if (matches(ADVANCED) && tab === "all") host.appendChild(card(ADVANCED));
    document.getElementById("empty").hidden = list.length > 0;
    document.getElementById("count-note").textContent =
      `${list.length + 1} groups · ${tab === "all" ? "both parts" : "Part " + (tab === "1" ? "I" : "II")}`;
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
