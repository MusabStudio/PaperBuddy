(function () {
  const API = window.UI.api;
  const el = window.UI.el;
  const params = new URLSearchParams(location.search);
  const paperId = params.get("paper");

  const state = {
    paper: null,
    results: new Map(), // itemId -> {score,max}
    vision: true,
  };

  const $ = (id) => document.getElementById(id);
  const letters = ["A", "B", "C", "D"];

  /* ---------- subject picker ---------- */
  function renderPicker() {
    const { SUBJECTS } = window.ZUEB;
    const box = $("picker");
    if (!box) return;
    $("paper-title").textContent = "Choose a subject";
    [2, 1].forEach((part) => {
      const h = el("div", "section-block", `<h3>${part === 1 ? "Part I · Class XI" : "Part II · Class XII"}</h3>`);
      const g = el("div", "subject-grid");
      SUBJECTS[part].forEach((s) => {
        const a = el("a", "subject", `<div class="top"><div class="ico">${s.emoji}</div><div><h4>${s.name}</h4><div class="meta">Open practice set</div></div></div>`);
        a.href = "practice.html?paper=" + s.id;
        g.appendChild(a);
      });
      h.appendChild(g);
      box.parentElement.appendChild(h);
    });
    box.remove();
  }

  /* ---------- switch list ---------- */
  function renderSwitch() {
    const { SUBJECTS } = window.ZUEB;
    const box = $("switch");
    box.innerHTML = "";
    [2, 1].forEach((part) => {
      SUBJECTS[part].forEach((s) => {
        const a = el("a", "", `${s.emoji} ${s.name} <small style="color:#889">· ${part === 1 ? "I" : "II"}</small>`);
        a.href = "practice.html?paper=" + s.id;
        a.style.cssText = "font-size:13px;text-decoration:none;padding:6px 8px;border-radius:8px;" +
          (s.id === paperId ? "background:#eef3ff;color:#1d4f8c;font-weight:700" : "color:#41506a");
        box.appendChild(a);
      });
    });
  }

  /* ---------- progress ---------- */
  function updateProgress() {
    const results = [...state.results.values()];
    const score = results.reduce((n, r) => n + r.score, 0);
    const attempted = results.reduce((n, r) => n + r.max, 0);
    const qcount = state.qcount || 0;

    // The ring shows how much of the paper is answered, not how many
    // checked answers were right. One MCQ must never read 100%.
    const done = qcount ? Math.min(100, Math.round((results.length / qcount) * 100)) : 0;
    const accuracy = attempted ? Math.round((score / attempted) * 100) : null;

    $("ring").style.setProperty("--p", done);
    $("ring-num").textContent = done + "%";
    const mini = $("mini-bar");
    if (mini) mini.style.width = done + "%";
    $("st-checked").textContent = qcount ? `${results.length} / ${qcount}` : results.length;
    $("st-acc").textContent = accuracy === null ? "—" : accuracy + "%";
    $("st-score").textContent = `${score} / ${attempted}`;
  }

  /* ---------- result panel ---------- */
  function showResult(node, data) {
    node.className = "result show " + (data.max && data.score / data.max >= 0.7 ? "good" : data.max && data.score / data.max >= 0.4 ? "mid" : "low");
    const pct = data.max ? data.score / data.max : 0;
    let html = `<div><span class="score">${data.score} / ${data.max}</span> <span class="pill-src">${data.source === "ai" ? "AI checked" : data.source === "key" ? "Answer key" : data.source === "ai-vision" ? "Photo checked" : "Rubric check"}</span></div>`;
    if (data.feedback) html += `<div style="margin-top:4px">${escapeHtml(data.feedback)}</div>`;
    if (data.missing && data.missing.length) {
      html += `<div style="margin-top:6px;font-weight:600">Try to add:</div><ul>` +
        data.missing.map((m) => `<li>${escapeHtml(m)}</li>`).join("") + `</ul>`;
    }
    if (data.transcript) {
      html += `<details style="margin-top:8px"><summary style="cursor:pointer;font-size:12px">What the checker read</summary>
        <div style="margin-top:6px;font-size:13px;white-space:pre-wrap">${escapeHtml(data.transcript)}</div></details>`;
    }
    node.innerHTML = html;
    node.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ---------- grade ---------- */
  async function grade(itemId, sectionIndex, itemIndex, payload, resultNode, meta) {
    resultNode.className = "result show mid";
    resultNode.textContent = "Checking…";
    try {
      const data = await API("/grade", {
        method: "POST",
        body: JSON.stringify({ paperId, section: sectionIndex, index: itemIndex, ...payload }),
      });
      if (data.wall && window.UI.wallBreak) window.UI.wallBreak();
      showResult(resultNode, data);
      state.results.set(itemId, { score: data.score, max: data.max });
      updateProgress();
      return data;
    } catch (e) {
      resultNode.className = "result show low";
      resultNode.textContent = e.message || "Could not check this answer.";
      return null;
    }
  }

  /* ---------- render ---------- */
  function renderPaper(paper) {
    state.paper = paper;
    document.title = paper.subject + " Practice | ZUEB Papers Hub";
    $("crumb").textContent = (paper.part === 1 ? "HSSC Part I · Class XI" : "HSSC Part II · Class XII") + " · Work area";
    $("paper-title").innerHTML = `${paper.emoji} ${paper.subject} <span class="hl">practice</span>`;
    const totalQ = paper.sections.reduce((n, s) => n + s.items.length, 0);
    $("paper-sub").textContent = `${totalQ} questions · Section A MCQs, Section B short answers, Section C detailed answers.`;
    $("st-count").textContent = totalQ;
    state.qcount = totalQ;

    const host = $("questions");
    host.innerHTML = "";

    paper.sections.forEach((sec, si) => {
      const head = el("div", "panel");
      head.style.marginBottom = "14px";
      head.innerHTML = `<h3>Section ${sec.name} — ${escapeHtml(sec.title)}</h3>
        <p class="section-sub">${sec.items.length} questions · ${sec.marks} mark${sec.marks > 1 ? "s" : ""} each${
          sec.type === "mcq" ? " · choose one option" : sec.type === "long" ? " · write a full answer" : " · write 3-5 points"
        }</p>`;
      host.appendChild(head);

      sec.items.forEach((item, ii) => {
        host.appendChild(sec.type === "mcq" ? mcqCard(sec, si, item, ii) : writtenCard(sec, si, item, ii, paper));
      });
    });

    $("save-btn").onclick = saveAttempt;
    refreshSaveNote();
  }

  function mcqCard(sec, si, item, ii) {
    const box = el("div", "qbox");
    const id = `${si}-${ii}`;
    box.innerHTML = `<div class="qhead"><div class="qnum">${ii + 1}</div>
      <div class="qtext"${sec.rtl ? ' dir="rtl"' : ""}>${escapeHtml(item.q)}</div>
      <div class="marks">1 mark</div></div><div class="opts"></div><div class="result"></div>`;
    const opts = box.querySelector(".opts");
    const res = box.querySelector(".result");
    item.o.forEach((text, oi) => {
      const b = el("button", "opt" + (sec.rtl ? "" : ""), `<span class="key">${letters[oi]}</span><span>${escapeHtml(text)}</span>`);
      b.type = "button";
      if (sec.rtl) b.setAttribute("dir", "rtl");
      b.onclick = async () => {
        opts.querySelectorAll(".opt").forEach((n) => n.classList.remove("sel", "correct", "wrong"));
        b.classList.add("sel");
        const data = await grade(id, si, ii, { answer: oi }, res, {});
        if (data) {
          const nodes = [...opts.querySelectorAll(".opt")];
          nodes[data.correctIndex]?.classList.add("correct");
          if (data.score === 0) b.classList.add("wrong");
        }
      };
      opts.appendChild(b);
    });
    return box;
  }

  function writtenCard(sec, si, item, ii, paper) {
    const box = el("div", "qbox");
    const id = `${si}-${ii}`;
    const rtl = paper.rtl;
    box.innerHTML = `<div class="qhead"><div class="qnum">${ii + 1}</div>
      <div class="qtext"${rtl ? ' dir="rtl"' : ""}>${escapeHtml(item.q)}</div>
      <div class="marks">${sec.marks} marks</div></div>
      <textarea class="answer" ${rtl ? 'dir="rtl"' : ""} placeholder="${rtl ? "یہاں اپنا جواب لکھیں…" : "Write your answer here…"}"></textarea>
      <div class="meter"><span class="words">0 words</span><span>Ctrl + Enter to check</span></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-small btn-gold check" type="button">✅ Check answer</button>
        <button class="btn btn-small clear" type="button">Clear</button>
      </div>
      ${rtl ? (state.vision ? `<div class="upload" data-upload>
        <div style="font-size:14px;font-weight:600">📷 Or write it in your copy and upload a photo</div>
        <div class="section-sub" style="margin-top:2px">JPG or PNG, under 4 MB</div>
        <input type="file" accept="image/*" hidden>
        <img hidden alt="preview">
        <div style="margin-top:8px"><button class="btn btn-small btn-green photocheck" type="button" hidden>Check photo</button></div>
      </div>` : `<div class="upload" style="cursor:default;border-style:solid;background:#f8fafc">
        <div style="font-size:13.5px;font-weight:600">📷 Photo marking</div>
        <div class="section-sub" style="margin-top:2px">The connected AI reads text only, so handwritten photos cannot be checked yet. Type your Urdu answer in the box above and it will be marked normally.</div>
      </div>`) : ""}
      <div class="result"></div>`;

    const ta = box.querySelector("textarea");
    const words = box.querySelector(".words");
    const res = box.querySelector(".result");
    const updateWords = () => {
      const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      words.textContent = n + (n === 1 ? " word" : " words");
    };
    ta.addEventListener("input", updateWords);

    const check = async () => {
      const answer = ta.value.trim();
      if (!answer) { ta.focus(); return; }
      await grade(id, si, ii, { answer }, res, {});
    };
    box.querySelector(".check").onclick = check;
    box.querySelector(".clear").onclick = () => { ta.value = ""; updateWords(); res.className = "result"; res.innerHTML = ""; state.results.delete(id); updateProgress(); };
    ta.addEventListener("keydown", (e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") check(); });

    if (rtl && state.vision) {
      const up = box.querySelector("[data-upload]");
      const input = up.querySelector("input");
      const img = up.querySelector("img");
      const pb = up.querySelector(".photocheck");
      let dataUrl = null;
      up.onclick = (e) => { if (e.target.tagName !== "BUTTON") input.click(); };
      input.onchange = () => {
        const f = input.files[0];
        if (!f) return;
        if (f.size > 4 * 1024 * 1024) { window.UI.toast("Photo is too large (max 4 MB)."); return; }
        const r = new FileReader();
        r.onload = () => { dataUrl = r.result; img.src = dataUrl; img.hidden = false; pb.hidden = false; };
        r.readAsDataURL(f);
      };
      pb.onclick = async (e) => {
        e.stopPropagation();
        if (!dataUrl) return;
        res.className = "result show mid";
        res.textContent = "Reading your photo…";
        try {
          const data = await API("/grade-photo", {
            method: "POST",
            body: JSON.stringify({ paperId, section: si, index: ii, image: dataUrl }),
          });
          showResult(res, data);
          state.results.set(id, { score: data.score, max: data.max });
          updateProgress();
        } catch (err) {
          res.className = "result show low";
          res.textContent = err.data?.message || err.message || "Could not read the photo. Try typing the answer instead.";
        }
      };
    }

    return box;
  }

  /* ---------- save ---------- */
  async function refreshSaveNote() {
    const note = $("save-note");
    try {
      const { user } = await API("/me");
      note.textContent = user ? `Saving to ${user.name}'s profile.` : "Sign in to keep your scores and earn badges.";
    } catch { note.textContent = "Sign in to keep your scores and earn badges."; }
  }

  async function saveAttempt() {
    const results = [...state.results.values()];
    if (!results.length) { window.UI.toast("Check at least one answer first."); return; }
    const score = results.reduce((n, r) => n + r.score, 0);
    const total = results.reduce((n, r) => n + r.max, 0);
    try {
      const data = await API("/attempt", {
        method: "POST",
        body: JSON.stringify({ paperId, score, total, answered: results.length, qcount: state.qcount || 0 }),
      });
      window.UI.toast(`Saved! ${score}/${total}. Badges: ${data.badges.length}`);
      window.UI.paintAuth();
    } catch (e) {
      if (e.status === 401) { window.UI.toast("Sign in to save your attempt."); location.href = "account.html?next=practice.html%3Fpaper%3D" + paperId; return; }
      window.UI.toast(e.message || "Could not save.");
    }
  }

  /* ---------- boot ---------- */
  renderSwitch();
  if (!paperId) {
    renderPicker();
  } else {
    fetch("/api/capabilities").then((r) => r.json()).then((c) => { state.vision = !!c.vision; }).catch(() => {})
      .then(() => fetch("/api/paper/" + encodeURIComponent(paperId)))
      .then((r) => {
        if (r.status === 401) {
          window.UI.lockPanel($("questions"), "Sign in to practise", "Browsing is free. An account checks your answers and saves your score.");
          throw new Error("signin");
        }
        if (!r.ok) throw new Error("Paper not found");
        return r.json();
      })
      .then(renderPaper)
      .catch(() => {
        $("questions").innerHTML = `<div class="panel"><h3>Paper not found</h3><p class="section-sub">Pick a subject from the class area.</p></div>`;
      });
  }
  updateProgress();
})();
