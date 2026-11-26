(function () {
  const { el, api } = window.UI;
  const q = new URLSearchParams(location.search);
  const file = q.get("file") || "";
  const subject = q.get("subject") || "Practice";
  const letters = ["A", "B", "C", "D"];
  let checked = 0;

  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

  function bump() {
    checked++;
    $("chip").textContent = checked + " checked";
  }

  function result(node, r) {
    node.className = "result show " + (r.max && r.score / r.max >= 0.7 ? "good" : r.max && r.score / r.max >= 0.4 ? "mid" : "low");
    let html = `<div><span class="score">${r.score} / ${r.max}</span></div>`;
    if (r.feedback) html += `<div style="margin-top:4px">${esc(r.feedback)}</div>`;
    if (r.missing && r.missing.length) {
      html += `<div style="margin-top:6px;font-weight:600">Try to add:</div><ul>` +
        r.missing.map((m) => `<li>${esc(m)}</li>`).join("") + "</ul>";
    }
    node.innerHTML = html;
  }

  function render(data) {
    const rtl = !!data.rtl;
    $("title").textContent = data.subject || subject;
    $("crumb").textContent = (data.group ? data.group + " · " : "") + "Part " + (data.part || "") + " · Practice set";
    const host = $("questions");
    host.innerHTML = "";

    (data.sections || []).forEach((sec) => {
      const head = el("div", "panel");
      head.style.marginBottom = "12px";
      head.innerHTML = `<h3>Section ${sec.name} — ${esc(sec.title || "")}</h3>
        <p class="section-sub">${sec.items.length} questions · ${sec.marks} mark${sec.marks > 1 ? "s" : ""} each</p>`;
      host.appendChild(head);

      sec.items.forEach((item, i) => {
        const box = el("div", "qbox");
        const id = sec.name + i;
        box.innerHTML = `<div class="qhead"><div class="qnum">${i + 1}</div>
          <div class="qtext"${rtl ? ' dir="rtl"' : ""}>${esc(item.q)}</div>
          <div class="marks">${sec.marks} mark${sec.marks > 1 ? "s" : ""}</div></div>`;

        if (sec.type === "mcq") {
          const opts = el("div", "opts");
          item.o.forEach((text, oi) => {
            const b = el("button", "opt", `<span class="key">${letters[oi] || "?"}</span><span>${esc(text)}</span>`);
            b.type = "button";
            if (rtl) b.setAttribute("dir", "rtl");
            b.onclick = () => {
              if (box.dataset.done) return;
              box.dataset.done = "1";
              const ok = oi === item.a;
              b.classList.add(ok ? "correct" : "wrong");
              if (!ok) opts.children[item.a]?.classList.add("correct");
              const r = el("div", "result");
              result(r, { score: ok ? 1 : 0, max: 1, feedback: ok ? "Correct." : "Correct option is " + letters[item.a] + "." });
              box.appendChild(r);
              bump();
            };
            opts.appendChild(b);
          });
          box.appendChild(opts);
        } else {
          box.insertAdjacentHTML("beforeend",
            `<textarea class="answer" ${rtl ? 'dir="rtl"' : ""} placeholder="Write your answer…"></textarea>
             <div class="meter"><span>Ctrl + Enter to check</span></div>
             <button class="btn btn-small btn-gold chk" type="button">✅ Check answer</button>
             <div class="result"></div>`);
          const ta = box.querySelector("textarea");
          const out = box.querySelector(".result");
          const run = async () => {
            if (!ta.value.trim()) { ta.focus(); return; }
            out.className = "result show mid";
            out.textContent = "Checking…";
            try {
              const r = await api("/grade-generic", {
                method: "POST",
                body: JSON.stringify({ subject, question: item.q, ref: item.ref, marks: sec.marks, answer: ta.value }),
              });
              if (r.wall && window.UI.wallBreak) window.UI.wallBreak();
              result(out, r);
              bump();
            } catch (e) {
              out.className = "result show low";
              out.textContent = e.message || "Could not check this answer.";
            }
          };
          box.querySelector(".chk").onclick = run;
          ta.addEventListener("keydown", (e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") run(); });
        }
        host.appendChild(box);
      });
    });
    window.Premium && window.Premium.pointerFx();
  }

  (async () => {
    try {
      const me = await api("/me");
      if (!me.user) {
        window.UI.lockPanel($("questions"), "Sign in to practise", "This set is free with an account. It takes 20 seconds.");
        return;
      }
    } catch { return; }

    if (!file) {
      window.UI.lockPanel($("questions"), "No set selected", "Open a practice set from the library.");
      return;
    }

    try {
      const res = await fetch(file, { credentials: "same-origin" });
      if (!res.ok) throw new Error("Could not load this set.");
      render(await res.json());
    } catch (e) {
      window.UI.lockPanel($("questions"), "Set unavailable", e.message || "Try another set.");
    }
  })();
})();
