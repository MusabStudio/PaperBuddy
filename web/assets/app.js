(function () {
  const FILES = {
    model: [
      { title: "Physics", emoji: "⚛️", file: "files/model/HSSC-II_Physics_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB model paper" },
      { title: "Chemistry", emoji: "🧪", file: "files/model/HSSC-II_Chemistry_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB model paper" },
      { title: "Biology", emoji: "🧬", file: "files/model/HSSC-II_Biology_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB model paper" },
      { title: "English-II", emoji: "📘", file: "files/model/HSSC-II_English_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB model paper" },
      { title: "Urdu (Normal)", emoji: "📗", file: "files/model/HSSC-II_Urdu-Normal_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB model paper" },
      { title: "Pakistan Studies", emoji: "🇵🇰", file: "files/model/HSSC-II_Pakistan-Studies_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB model paper" },
      { title: "Sindhi (Normal)", emoji: "📙", file: "files/model/HSSC-II_Sindhi-Normal_ZUEB-Official-Model-Paper.pdf", type: "pdf", badge: "model", note: "Official ZUEB model paper" }
    ],
    guess: [
      { title: "Physics", emoji: "⚡", file: "files/guess/Guess-Paper_Physics_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_Physics_HSSC-II_PreMedical.docx", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "Chemistry", emoji: "⚗️", file: "files/guess/Guess-Paper_Chemistry_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_Chemistry_HSSC-II_PreMedical.docx", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "Biology", emoji: "🌿", file: "files/guess/Guess-Paper_Biology_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_Biology_HSSC-II_PreMedical.docx", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "English-II", emoji: "✏️", file: "files/guess/Guess-Paper_English_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_English_HSSC-II_PreMedical.docx", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "Urdu (Normal)", emoji: "🖋️", file: "files/guess/Guess-Paper_Urdu-Normal_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_Urdu-Normal_HSSC-II_PreMedical.docx", type: "pdf", badge: "guess", note: "Practice paper, not official" }
    ],
    part1Model: [
      { title: "Physics (Part I)", emoji: "⚛️", file: "files/part1/model/HSSC-I_Physics_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB Class XI model paper" },
      { title: "Chemistry (Part I)", emoji: "🧪", file: "files/part1/model/HSSC-I_Chemistry_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB Class XI model paper" },
      { title: "Biology (Part I)", emoji: "🧬", file: "files/part1/model/HSSC-I_Biology_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB Class XI model paper" },
      { title: "English (Part I)", emoji: "📘", file: "files/part1/model/HSSC-I_English_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB Class XI model paper" },
      { title: "Urdu Lazmi (Part I)", emoji: "📗", file: "files/part1/model/HSSC-I_Urdu-Lazmi_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB Class XI model paper" },
      { title: "Islamiyat (Part I)", emoji: "🕌", file: "files/part1/model/HSSC-I_Islamiyat_ZUEB-Official-Model-Paper-2026.pdf", type: "pdf", badge: "model", note: "Official ZUEB Class XI model paper" }
    ],
    part1Guess: [
      { title: "Physics (Part I)", emoji: "⚡", file: "files/part1/guess/Guess-Paper_PartI_Physics_HSSC-I_PreMedical.pdf", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "Chemistry (Part I)", emoji: "⚗️", file: "files/part1/guess/Guess-Paper_PartI_Chemistry_HSSC-I_PreMedical.pdf", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "Biology (Part I)", emoji: "🌿", file: "files/part1/guess/Guess-Paper_PartI_Biology_HSSC-I_PreMedical.pdf", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "English (Part I)", emoji: "✏️", file: "files/part1/guess/Guess-Paper_PartI_English_HSSC-I_PreMedical.pdf", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "Urdu Lazmi (Part I)", emoji: "🖋️", file: "files/part1/guess/Guess-Paper_PartI_Urdu-Lazmi_HSSC-I_PreMedical.pdf", type: "pdf", badge: "guess", note: "Practice paper, not official" },
      { title: "Islamiyat (Part I)", emoji: "📿", file: "files/part1/guess/Guess-Paper_PartI_Islamiyat_HSSC-I_PreMedical.pdf", type: "pdf", badge: "guess", note: "Practice paper, not official" }
    ],
    report: [
      { title: "Research Report", emoji: "📊", file: "files/REPORT.md", type: "text", badge: "report", note: "Sources, verification and missing papers" }
    ],
    years: [
      { y: 2021, n: "No papers found" },
      { y: 2022, n: "Result gazette only" },
      { y: 2023, n: "Result gazette only" },
      { y: 2024, n: "Exam schedule only" },
      { y: 2025, n: "Result gazette only" }
    ]
  };

  const QUOTES = [
    "You've got this. Every page you revise is a step closer.",
    "Small steps every day beat one big cram session.",
    "Believe you can and you're halfway there.",
    "Breathe, focus, and trust the hard work you've done.",
    "Mistakes are proof you're trying. Learn and move on!",
    "Your future doctor self is cheering for you right now."
  ];

  const viewer = document.getElementById("viewer");
  const frame = document.getElementById("viewer-frame");
  const title = document.getElementById("viewer-title");
  const openLink = document.getElementById("viewer-open");
  const dlLink = document.getElementById("viewer-download");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function openViewer(item) {
    title.textContent = "📄 " + item.title;
    openLink.href = item.file;
    dlLink.href = item.file;
    dlLink.setAttribute("download", item.file.split("/").pop());
    frame.src = item.file;
    viewer.hidden = false;
  }

  function closeViewer() {
    viewer.hidden = true;
    frame.src = "about:blank";
  }

  function btn(cls, text, href, dl) {
    const a = document.createElement("a");
    a.className = "btn btn-small " + cls;
    a.href = href;
    if (dl) a.setAttribute("download", href.split("/").pop());
    a.textContent = text;
    return a;
  }

  function card(item) {
    const el = document.createElement("article");
    el.className = "card reveal " + item.badge;
    const label = item.badge === "model" ? "MODEL PAPER" : item.badge === "guess" ? "GUESS PAPER" : "REPORT";
    el.innerHTML =
      '<div class="emoji"></div><span class="badge ' + item.badge + '">' + label + "</span>" +
      "<h3></h3><p></p><div class='actions'></div>";
    el.querySelector(".emoji").textContent = item.emoji;
    el.querySelector("h3").textContent = item.title;
    el.querySelector("p").textContent = item.note;
    const actions = el.querySelector(".actions");
    if (item.type === "pdf") {
      const v = document.createElement("button");
      v.className = "btn btn-small btn-gold";
      v.type = "button";
      v.textContent = "👀 View";
      v.addEventListener("click", () => openViewer(item));
      actions.appendChild(v);
    }
    actions.appendChild(btn("", "⬇️ Download", item.file, true));
    if (item.docx) actions.appendChild(btn("", "📝 Word", item.docx, true));
    return el;
  }

  function fill(id, list) {
    const grid = document.getElementById(id);
    list.forEach((item, i) => {
      const c = card(item);
      c.style.transitionDelay = (i * 80) + "ms";
      grid.appendChild(c);
    });
  }

  fill("model-grid", FILES.model);
  fill("guess-grid", FILES.guess);
  fill("part1-model-grid", FILES.part1Model);
  fill("part1-guess-grid", FILES.part1Guess);
  fill("report-grid", FILES.report);

  const yearGrid = document.getElementById("year-grid");
  FILES.years.forEach((yr, i) => {
    const div = document.createElement("div");
    div.className = "year reveal";
    div.style.transitionDelay = (i * 80) + "ms";
    div.innerHTML = "<strong>" + yr.y + "</strong><span>" + yr.n + "</span>";
    yearGrid.appendChild(div);
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Count-up stats
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    if (reduce) { el.textContent = target; return; }
    let n = 0;
    const step = () => {
      n += 1;
      el.textContent = n;
      if (n < target) setTimeout(step, 140);
    };
    setTimeout(step, 400);
  });

  // Rotating motivation quote
  const quote = document.getElementById("quote");
  let qi = 0;
  if (!reduce) {
    setInterval(() => {
      quote.style.opacity = 0;
      setTimeout(() => {
        qi = (qi + 1) % QUOTES.length;
        quote.textContent = QUOTES[qi];
        quote.style.opacity = 1;
      }, 400);
    }, 4500);
  }

  // Confetti
  function confetti() {
    if (reduce) return;
    const colors = ["#ffb703", "#fb8500", "#2ec4b6", "#ff6b9a", "#1d4f8c"];
    for (let i = 0; i < 90; i++) {
      const p = document.createElement("span");
      p.className = "confetti";
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = (2 + Math.random() * 2.5) + "s";
      p.style.animationDelay = Math.random() * 0.4 + "s";
      p.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 5000);
    }
  }
  document.getElementById("cheer").addEventListener("click", confetti);

  document.getElementById("viewer-close").addEventListener("click", closeViewer);
  viewer.addEventListener("click", (e) => { if (e.target === viewer) closeViewer(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !viewer.hidden) closeViewer(); });
})();
