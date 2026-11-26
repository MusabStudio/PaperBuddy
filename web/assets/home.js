(function () {
  const { SUBJECTS, EXTRA_MODELS } = window.ZUEB;
  const { el, openPdf } = window.UI;

  /* ---------- library cards ---------- */
  function card(name, emoji, kind, open, dl, practiceId) {
    const c = el("article", "card spot " + (kind === "guess" ? "guess" : ""));
    c.innerHTML = `<div class="emoji">${emoji}</div>
      <span class="badge ${kind === "guess" ? "guess" : "model"}">${kind === "guess" ? "GUESS PAPER" : "MODEL PAPER"}</span>
      <h3>${name}</h3>
      <p>${kind === "guess" ? "Practice paper, not official" : "Official ZUEB model paper"}</p>
      <div class="actions"></div>`;
    const actions = c.querySelector(".actions");
    if (open) {
      const v = el("button", "btn btn-small btn-gold shine", "👀 View");
      v.type = "button";
      v.onclick = () => openPdf(open, name + " model paper");
      actions.appendChild(v);
    }
    if (dl) {
      const a = el("a", "btn btn-small", "⬇️ Download");
      a.href = dl; a.setAttribute("download", dl.split("/").pop());
      actions.appendChild(a);
    }
    if (practiceId) {
      const p = el("a", "btn btn-small btn-green", "✍️ Practise");
      p.href = "practice.html?paper=" + practiceId;
      actions.appendChild(p);
    }
    return c;
  }

  function fill(id, list) {
    const grid = document.getElementById(id);
    if (!grid) return;
    list.forEach((c) => grid.appendChild(c));
  }

  // a short showcase on the home page; the rest lives in library.html
  const featured = [];
  [[2, "model"], [2, "model"], [2, "model"], [2, "guess"], [2, "guess"], [1, "model"], [1, "guess"], [1, "model"]]
    .forEach(([part, kind], i) => {
      const s = SUBJECTS[part][i % SUBJECTS[part].length];
      const path = s[kind];
      if (path) featured.push(card(`${s.name} · Part ${part === 1 ? "I" : "II"}`, s.emoji, kind, path, path, s.id));
    });
  fill("featured", featured.slice(0, 8));

  /* ---------- groups ---------- */
  const GROUPS = [
    { name: "Pre-Medical", emoji: "🩺", subjects: "Physics · Chemistry · Biology", live: true },
    { name: "Pre-Engineering", emoji: "📐", subjects: "Physics · Chemistry · Mathematics", live: false },
    { name: "General Science", emoji: "🔬", subjects: "Physics · Computer Science · Mathematics", live: false },
    { name: "Commerce", emoji: "📊", subjects: "Commercial Geography · Banking · Accounting-II · Business Statistics", live: false },
    { name: "Humanities", emoji: "📚", subjects: "Islamic Studies · Maths · Sociology · Economics · Education · Civics", live: false },
    { name: "Medical Technology", emoji: "🧫", subjects: "Microbiology · Chemical Pathology · Elementary Chemistry", live: false },
    { name: "Pre-Nursing", emoji: "💉", subjects: "Bio-Chemistry · Fundamentals of Nursing · Anatomy", live: false }
  ];

  function renderGroups(part) {
    const wrap = document.getElementById("groups-p" + part);
    if (!wrap) return;
    GROUPS.forEach((g) => {
      const c = el("article", "group-card spot");
      c.innerHTML = `
        <div style="font-size:26px">${g.emoji}</div>
        <span class="state ${g.live ? "live" : "soon"}">${g.live ? "LIVE" : "FILES COMING SOON"}</span>
        <h4>${g.name}</h4>
        <p>${g.subjects}</p>
        <div class="row">${
          g.live
            ? `<a class="btn btn-small btn-gold shine" href="class.html?part=${part}">Open class area</a>`
            : `<button class="btn btn-small" type="button" disabled style="opacity:.55;cursor:not-allowed">Coming soon</button>`
        }</div>`;
      wrap.appendChild(c);
    });
  }
  renderGroups(2);
  renderGroups(1);

  /* ---------- 3D gallery ---------- */
  const GALLERY = [
    { label: "Physics · Part II", thumb: "files/thumbs/p2-physics.png", pdf: "files/model/HSSC-II_Physics_ZUEB-Official-Model-Paper-2026.pdf" },
    { label: "Chemistry · Part II", thumb: "files/thumbs/p2-chemistry.png", pdf: "files/model/HSSC-II_Chemistry_ZUEB-Official-Model-Paper-2026.pdf" },
    { label: "Biology · Part II", thumb: "files/thumbs/p2-biology.png", pdf: "files/model/HSSC-II_Biology_ZUEB-Official-Model-Paper-2026.pdf" },
    { label: "English · Part II", thumb: "files/thumbs/p2-english.png", pdf: "files/model/HSSC-II_English_ZUEB-Official-Model-Paper-2026.pdf" },
    { label: "Physics · Part I", thumb: "files/thumbs/p1-physics.png", pdf: "files/part1/model/HSSC-I_Physics_ZUEB-Official-Model-Paper-2026.pdf" },
    { label: "Islamiyat · Part I", thumb: "files/thumbs/p1-islamiyat.png", pdf: "files/part1/model/HSSC-I_Islamiyat_ZUEB-Official-Model-Paper-2026.pdf" }
  ];
  const gal = document.getElementById("gallery-grid");
  GALLERY.forEach((g) => {
    const c = el("figure", "photo3d");
    c.setAttribute("data-tilt", "");
    c.innerHTML = `<img src="${g.thumb}" alt="${g.label} model paper first page" loading="lazy"><div class="glare"></div><span class="label" data-depth="46">${g.label}</span>`;
    c.onclick = () => openPdf(g.pdf, g.label + " model paper");
    gal.appendChild(c);
  });

  /* ---------- charts: Apache ECharts with CSS fallback ---------- */
  function cssFallback(part, rows) {
    const host = document.querySelector(`.chart[data-chart="${part}"]`);
    if (!host || host.dataset.built) return;
    host.dataset.built = "1";
    host.hidden = false;
    const max = Math.max(...rows.map((r) => r.total), 1);
    rows.forEach((r, i) => {
      const col = el("div", "bar-col");
      const h = Math.round((r.total / max) * 100);
      col.innerHTML = `<div class="bar ${i % 2 ? "alt" : ""}" data-h="${h}"><span>${r.total}</span></div><small>${r.subject}</small>`;
      host.appendChild(col);
    });
    window.Premium && window.Premium.charts();
  }

  function echartsFor(id, rows, palette) {
    const box = document.getElementById(id);
    if (!box || !window.echarts) return false;
    const chart = window.echarts.init(box, null, { renderer: "canvas" });
    chart.setOption({
      grid: { left: 34, right: 10, top: 26, bottom: 46 },
      tooltip: {
        trigger: "axis",
        backgroundColor: "#0b2545",
        borderWidth: 0,
        textStyle: { color: "#fff", fontSize: 12 },
        formatter: (p) => `${p[0].name}: <b>${p[0].value}</b> questions`
      },
      xAxis: {
        type: "category",
        data: rows.map((r) => r.subject),
        axisLine: { lineStyle: { color: "#dfe5ee" } },
        axisTick: { show: false },
        axisLabel: { color: "#5b6776", fontSize: 10, interval: 0, width: 64, overflow: "truncate" }
      },
      yAxis: {
        type: "value",
        splitLine: { lineStyle: { color: "#eef2f9" } },
        axisLabel: { color: "#8894a6", fontSize: 10 }
      },
      series: [{
        type: "bar",
        data: rows.map((r) => r.total),
        barWidth: "52%",
        itemStyle: {
          borderRadius: [8, 8, 4, 4],
          color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, palette)
        },
        emphasis: { itemStyle: { shadowBlur: 12, shadowColor: "rgba(251,133,0,.45)" } },
        animationDelay: (i) => i * 90,
        animationDuration: 900,
        animationEasing: "cubicOut",
        label: { show: true, position: "top", color: "#0b2545", fontSize: 10, fontWeight: 700 }
      }]
    });
    window.addEventListener("resize", () => chart.resize());
    return true;
  }

  fetch("/api/papers").then((r) => r.json()).then((d) => {
    const papers = d.papers || [];
    const rowsFor = (part) => papers.filter((p) => p.part === part);

    let tries = 0;
    const timer = setInterval(() => {
      tries++;
      if (window.echarts) {
        clearInterval(timer);
        const ok2 = echartsFor("chart-p2", rowsFor(2), [
          { offset: 0, color: "#f6c453" }, { offset: 1, color: "#e08a2e" }
        ]);
        const ok1 = echartsFor("chart-p1", rowsFor(1), [
          { offset: 0, color: "#63c7bb" }, { offset: 1, color: "#2e9a90" }
        ]);
        if (!ok2) cssFallback(2, rowsFor(2));
        if (!ok1) cssFallback(1, rowsFor(1));
      } else if (tries > 20) {
        clearInterval(timer);
        cssFallback(2, rowsFor(2));
        cssFallback(1, rowsFor(1));
      }
    }, 200);
  }).catch(() => {});

  /* ---------- years ---------- */
  const years = [
    [2021, "No papers found"], [2022, "Result gazette only"], [2023, "Result gazette only"],
    [2024, "Exam schedule only"], [2025, "Result gazette only"]
  ];
  const yg = document.getElementById("year-grid");
  years.forEach(([y, n]) => yg.appendChild(el("div", "year reveal", `<strong>${y}</strong><span>${n}</span>`)));

  /* ---------- report ---------- */
  const rep = el("article", "card report spot");
  rep.innerHTML = `<div class="emoji">📊</div><span class="badge report">REPORT</span>
    <h3>Research Report</h3><p>Sources, verification and missing papers</p>
    <div class="actions"><a class="btn btn-small" href="files/REPORT.md" download>⬇️ Download</a></div>`;
  document.getElementById("report-grid").appendChild(rep);

  /* ---------- quote + counters ---------- */
  const QUOTES = [
    "You've got this. Every page you revise is a step closer.",
    "Small steps every day beat one big cram session.",
    "Believe you can and you're halfway there.",
    "Breathe, focus, and trust the hard work you've done.",
    "Mistakes are proof you're trying. Learn and move on!",
    "Your future doctor self is cheering for you right now."
  ];
  const q = document.getElementById("quote");
  let i = 0;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    setInterval(() => {
      q.style.opacity = 0;
      setTimeout(() => { i = (i + 1) % QUOTES.length; q.textContent = QUOTES[i]; q.style.opacity = 1; }, 400);
    }, 4500);
  }
  document.querySelectorAll("[data-count]").forEach((n) => {
    const target = +n.dataset.count;
    if (reduce) { n.textContent = target; return; }
    let v = 0;
    const step = () => { v = Math.min(target, v + Math.ceil(target / 40)); n.textContent = v; if (v < target) requestAnimationFrame(step); };
    setTimeout(step, 300);
  });

  // refresh pointer effects for dynamically added cards
  window.Premium && window.Premium.pointerFx();
})();
