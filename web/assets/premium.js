/* Vanilla versions of the premium effects (no React needed). */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touch = matchMedia("(hover: none), (pointer: coarse)").matches;

  /* spotlight + 3D tilt + glare */
  function pointerFx() {
    document.querySelectorAll(".spot").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });

    if (reduce) return;
    // Tilted Card behaviour (rotateAmplitude, scaleOnHover, glare), in vanilla.
    const AMP = 14;
    const SCALE = 1.05;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      let raf = null;
      card.style.transformStyle = "preserve-3d";
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (0.5 - py) * AMP;
        const ry = (px - 0.5) * AMP;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform =
            `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${SCALE})`;
          const glare = card.querySelector(".glare");
          if (glare) {
            glare.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
            glare.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
          }
          card.querySelectorAll("[data-depth]").forEach((layer) => {
            const d = Number(layer.dataset.depth) || 20;
            layer.style.transform = `translateZ(${d}px) translate(${(px - 0.5) * -6}px, ${(py - 0.5) * -6}px)`;
          });
        });
      });
      card.addEventListener("pointerleave", () => {
        card.style.transition = "transform .5s cubic-bezier(.2,.9,.3,1.2)";
        card.style.transform = "";
        card.querySelectorAll("[data-depth]").forEach((l) => { l.style.transform = ""; });
        setTimeout(() => { card.style.transition = ""; }, 520);
      });
    });
  }

  /* magnet buttons */
  function magnets() {
    if (reduce) return;
    document.querySelectorAll(".magnetic").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.12;
        const y = (e.clientY - r.top - r.height / 2) * 0.18;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });
  }

  /* stagger reveal */
  function staggers() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".stagger").forEach((n) => io.observe(n));
  }

  /* animated bar chart */
  function charts() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll(".bar").forEach((b, i) => {
          const h = b.dataset.h || 50;
          setTimeout(() => { b.style.height = h + "%"; }, i * 70);
        });
        io.unobserve(e.target);
      });
    }, { threshold: 0.35 });
    document.querySelectorAll(".chart").forEach((c) => io.observe(c));
  }

  /* simple tab groups: [data-tabs] with buttons[data-tab] and panes[data-pane] */
  function tabs() {
    document.querySelectorAll("[data-tabs]").forEach((wrap) => {
      const buttons = wrap.querySelectorAll("[data-tab]");
      const panes = wrap.querySelectorAll("[data-pane]");
      buttons.forEach((b) => {
        b.addEventListener("click", () => {
          buttons.forEach((x) => x.classList.toggle("on", x === b));
          panes.forEach((p) => { p.hidden = p.dataset.pane !== b.dataset.tab; });
        });
      });
    });
  }

  function animeHero() {
    if (reduce || !window.anime) return;
    const brand = document.querySelector(".hero h1");
    if (!brand) return;
    window.anime({
      targets: ".hero .reveal",
      translateY: [26, 0],
      opacity: [0, 1],
      delay: window.anime.stagger(90, { start: 120 }),
      duration: 850,
      easing: "easeOutExpo"
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    animeHero();
    pointerFx();
    magnets();
    staggers();
    charts();
    tabs();
  });

  window.Premium = { pointerFx, magnets, charts };
})();
