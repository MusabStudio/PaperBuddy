(function () {
  const { el, api } = window.UI;
  const q = new URLSearchParams(location.search);
  const part = q.get("part") || "2";
  const group = q.get("group") || "Pre-Medical";
  const boardId = q.get("board") || "zueb";
  const board = window.getBoard ? window.getBoard(boardId) : null;
  let subject = q.get("subject") || "";
  const PART = { "1": "Part I · Class XI", "2": "Part II · Class XII", A: "HSSC Advanced" };

  const ELECTIVES = {
    "Pre-Medical": ["Physics", "Chemistry", "Biology"],
    "Pre-Engineering": ["Physics", "Chemistry", "Mathematics"],
    "General-Science": ["Physics", "Computer Science", "Mathematics"],
    "Commerce": ["Principles of Commerce", "Principles of Economics", "Accounting", "Business Mathematics"],
    "Humanities": ["Islamic Studies", "Mathematics", "Sociology", "Economics", "Education", "Civics", "Computer Science"],
    "Medical-Technology": ["Microbiology", "Hematology & Blood Banking", "Anatomy & Physiology"],
    "Pre-Nursing": ["Biochemistry", "Fundamentals of Nursing", "Elementary Anatomy & Microtechnique"],
    "Compulsory": ["English", "Urdu Normal"],
    "Advanced": ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English", "Urdu", "Islamiyat", "Pakistan Studies"]
  };
  const COMPULSORY = part === "1"
    ? ["English", "Urdu Normal", "Islamiyat"]
    : part === "A"
      ? ["English", "Urdu", "Islamiyat", "Pakistan Studies"]
      : ["English", "Urdu Normal", "Pakistan Studies"];

  let data = null;
  let results = new Map();
  const letters = ["A", "B", "C", "D"];

  const $ = (id) => document.getElementById(id);
  const pretty = (s) => s.replace(/-/g, " ");

  function subjectList() {
    const known = board && board.groups.find((g) => g.folder === group || g.name === group);
    const base = known ? known.subjects : (ELECTIVES[group] || []);
    return [...new Set([...base, ...COMPULSORY])];
  }

  function showPicker() {
    $("title").textContent = pretty(group);
    $("crumb").textContent = PART[part] || "Practice";
    $("sub").textContent = "Choose a subject. The AI writes a fresh set each time.";
    const host = $("subjects");
    host.innerHTML = "";
    subjectList().forEach((s) => {
      const a = el("a", "subject");
      a.href = `practice-any.html?board=${boardId}&part=${part}&group=${group}&subject=${encodeURIComponent(s)}`;
      a.innerHTML = `<div class="top"><div class="ico">✍️</div><div><h4>${s}</h4><div class="meta">10 MCQs + 4 written</div></div></div>`;
      host.appendChild(a);
    });
    $("picker").hidden = false;
    $("board").hidden = true;
  }

  function esc(t) {
    return String(t).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  }

  function updateChip() {
    const total = data.mcq.length + data.short.length;
    const done = results.size;
    $("set-chip").textContent = `${done}/${total} checked`;
  }

  function resultBox(node, res) {
    node.className = "result show " + (res.max && res.score / res.max >= 0.7 ? "good" : res.max && res.score / res.max >= 0.4 ? "mid" : "low");
    let html = `<div><span class="score">${res.score} / ${res.max}</span></div>`;
    if (res.feedback) html += `<div style="margin-top:4px">${esc(res.feedback)}</div>`;
    if (res.missing && res.missing.length) {
      html += `<div style="margin-top:6px;font-weight:600">Try to add:</div><ul>` +
        res.missing.map((m) => `<li>${esc(m)}</li>`).join("") + "</ul>";
    }
    node.innerHTML = html;
  }

  function renderSet() {
    const host = $("questions");
    host.innerHTML = "";
    $("set-title").textContent = subject;
    $("picker").hidden = true;
    $("board").hidden = false;

    data.mcq.forEach((item, i) => {
      const box = el("div", "qbox");
      box.innerHTML = `<div class="qhead"><div class="qnum">${i + 1}</div>
        <div class="qtext">${esc(item.q)}</div><div class="marks">1 mark</div></div>
        <div class="opts"></div><div class="result"></div>`;
      const opts = box.querySelector(".opts");
      const res = box.querySelector(".result");
      item.o.forEach((text, oi) => {
        const b = el("button", "opt", `<span class="key">${letters[oi] || "?"}</span><span>${esc(text)}</span>`);
        b.type = "button";
        b.onclick = () => {
          if (box.dataset.done) return;
          box.dataset.done = "1";
          const correct = oi === item.a;
          b.classList.add(correct ? "correct" : "wrong");
          if (!correct) opts.children[item.a]?.classList.add("correct");
          results.set("m" + i, { score: correct ? 1 : 0, max: 1 });
          resultBox(res, {
            score: correct ? 1 : 0, max: 1,
            feedback: correct ? "Correct." : "Correct option is " + (letters[item.a] || "?") + "."
          });
          updateChip();
        };
        opts.appendChild(b);
      });
      host.appendChild(box);
    });

    data.short.forEach((item, i) => {
      const max = Number(item.m) || 4;
      const box = el("div", "qbox");
      box.innerHTML = `<div class="qhead"><div class="qnum">${data.mcq.length + i + 1}</div>
        <div class="qtext">${esc(item.q)}</div><div class="marks">${max} marks</div></div>
        <textarea class="answer" placeholder="Write your answer…"></textarea>
        <div class="meter"><span>Ctrl + Enter to check</span></div>
        <button class="btn btn-small btn-gold check" type="button">✅ Check answer</button>
        <div class="result"></div>`;
      const ta = box.querySelector("textarea");
      const res = box.querySelector(".result");
      const run = async () => {
        if (!ta.value.trim()) { ta.focus(); return; }
        res.className = "result show mid";
        res.textContent = "Checking…";
        try {
          const r = await api("/grade-generic", {
            method: "POST",
            body: JSON.stringify({ subject, question: item.q, ref: item.ref, marks: max, answer: ta.value })
          });
          if (r.wall && window.UI.wallBreak) window.UI.wallBreak();
          resultBox(res, r);
          results.set("s" + i, { score: r.score, max: r.max });
          updateChip();
        } catch (e) {
          res.className = "result show low";
          res.textContent = e.message || "Could not check this answer.";
        }
      };
      box.querySelector(".check").onclick = run;
      ta.addEventListener("keydown", (e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") run(); });
      host.appendChild(box);
    });
  }

  async function generate() {
    results = new Map();
    $("loading").hidden = false;
    $("board").hidden = true;
    $("picker").hidden = true;
    try {
      data = await api("/generate", { method: "POST", body: JSON.stringify({ part, group, subject, board: boardId }) });
      $("loading").hidden = true;
      renderSet();
      updateChip();
      window.Premium && window.Premium.pointerFx();
    } catch (e) {
      $("loading").hidden = true;
      $("board").hidden = false;
      $("questions").innerHTML = `<div class="panel"><h3>Could not write the set</h3><p class="section-sub">${esc(e.message || "Try again in a moment.")}</p><button class="btn btn-gold" onclick="location.reload()">Try again</button></div>`;
    }
  }

  $("regen").onclick = generate;

  (async () => {
    try {
      const me = await api("/me");
      if (!me.user) {
        location.replace("account.html?next=" + encodeURIComponent(location.pathname.split("/").pop() + location.search));
        return;
      }
    } catch { return; }

    if (!subject) { showPicker(); return; }
    $("crumb").textContent = (PART[part] || "Practice") + " · " + pretty(group);
    $("sub").textContent = "10 MCQs and 4 written questions, written for you.";
    generate();
  })();
})();
