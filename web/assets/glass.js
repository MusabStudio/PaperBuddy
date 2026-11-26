/* Glass-shatter "fourth wall" effect. */
(function () {
  const LINE = "Sorry Kiddo You cant break 4th wall --Musab";
  let busy = false;

  function crackPaths() {
    // radial cracks from the centre, in a 100x100 viewBox
    const paths = [];
    const cx = 50, cy = 46;
    for (let i = 0; i < 14; i++) {
      const a = (Math.PI * 2 * i) / 14 + (Math.random() - 0.5) * 0.25;
      let d = `M${cx} ${cy}`;
      let x = cx, y = cy;
      const steps = 3 + Math.floor(Math.random() * 3);
      for (let s = 0; s < steps; s++) {
        const len = 14 + Math.random() * 22;
        x += Math.cos(a + (Math.random() - 0.5) * 0.4) * len;
        y += Math.sin(a + (Math.random() - 0.5) * 0.4) * len;
        d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
      }
      paths.push(`<path d="${d}"/>`);
    }
    // a couple of cross cracks
    paths.push('<path d="M5 15 L28 34 L40 30 L62 55 L78 50 L95 70"/>');
    paths.push('<path d="M8 78 L30 62 L48 70 L70 44 L92 38"/>');
    return paths.join("");
  }

  function buildShards(host) {
    const cols = 6, rows = 4;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const s = document.createElement("div");
        s.className = "shard";
        s.style.left = (c * 100) / cols + "%";
        s.style.top = (r * 100) / rows + "%";
        s.style.width = 100 / cols + 0.4 + "%";
        s.style.height = 100 / rows + 0.4 + "%";
        // slight irregular chipped corners so it reads as glass
        const j = () => (Math.random() * 6).toFixed(1);
        s.style.clipPath = `polygon(${j()}% 0, 100% ${j()}%, ${100 - j()}% 100%, 0 ${100 - j()}%)`;
        const dirX = (c - cols / 2) * (28 + Math.random() * 30);
        const dirY = 40 + Math.random() * 45 + (r * 6);
        s.style.setProperty("--tx", dirX.toFixed(0) + "px");
        s.style.setProperty("--ty", dirY.toFixed(0) + "px");
        s.style.setProperty("--rot", ((Math.random() - 0.5) * 90).toFixed(0) + "deg");
        s.style.setProperty("--d", (Math.random() * 0.28).toFixed(2) + "s");
        host.appendChild(s);
      }
    }
  }

  function shatter() {
    if (busy) return;
    busy = true;

    const stage = document.createElement("div");
    stage.className = "wall-stage";
    stage.setAttribute("aria-live", "polite");
    stage.innerHTML =
      '<div class="wall-flash"></div>' +
      '<svg class="wall-cracks" viewBox="0 0 100 100" preserveAspectRatio="none">' + crackPaths() + "</svg>" +
      '<div class="wall-shards"></div>' +
      '<div class="wall-msg"><div class="inner">' +
        '<div class="kicker">the fourth wall is gone</div>' +
        '<div class="line">' + LINE + "</div>" +
        '<div class="sig">— Musab</div>' +
        '<div class="hint">Now go back to studying.</div>' +
      "</div></div>";

    document.body.appendChild(stage);
    buildShards(stage.querySelector(".wall-shards"));
    document.body.classList.add("wall-shake");

    setTimeout(() => document.body.classList.remove("wall-shake"), 620);
    setTimeout(() => {
      stage.style.transition = "opacity .45s ease";
      stage.style.opacity = "0";
      setTimeout(() => {
        stage.remove();
        busy = false;
      }, 460);
    }, 3000);
  }

  // expose to the rest of the site
  document.addEventListener("DOMContentLoaded", () => {
    if (window.UI) window.UI.wallBreak = shatter;
    // clicking the creator badge is also a way in
    document.querySelectorAll(".creator-title").forEach((n) => {
      n.style.cursor = "pointer";
      n.title = "don't";
      n.addEventListener("click", shatter);
    });
  });

  window.WallBreak = shatter;
})();
