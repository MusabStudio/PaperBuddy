/* Inline SVG icon set. Replaces emoji with crisp vectors. */
(function () {
  const S = (body, opts) => {
    const o = opts || {};
    return `<svg class="ico" viewBox="0 0 24 24" fill="${o.fill || "none"}" stroke="${o.stroke || "currentColor"}" stroke-width="${o.w || 1.7}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
  };

  /* detailed four-leaf clover */
  const leaf = `<path d="M12 11.4c-2.5-2.4-6.6-1.2-6.6-4.2 0-2.2 2.6-3.2 4.3-1.5.7.7 1.6 1.9 2.3 2.9.7-1 1.6-2.2 2.3-2.9 1.7-1.7 4.3-.7 4.3 1.5 0 3-4.1 1.8-6.6 4.2Z" fill="currentColor" stroke="none"/>`;
  const clover = `<g>
    <g transform="rotate(0 12 11.5)">${leaf}</g>
    <g transform="rotate(90 12 11.5)">${leaf}</g>
    <g transform="rotate(180 12 11.5)">${leaf}</g>
    <g transform="rotate(270 12 11.5)">${leaf}</g>
    <path d="M12 11.5v9.2" stroke="currentColor" stroke-width="1.5"/>
    <path d="M12 11.5 9.6 8.4M12 11.5l2.4-3.1M12 11.5 9.6 14.6M12 11.5l2.4 3.1" stroke="rgba(255,255,255,.55)" stroke-width="0.9" fill="none"/>
  </g>`;

  const ICONS = {
    "🍀": S(clover, { fill: "currentColor", stroke: "currentColor" }),

    "→": S('<path d="M4 12h15M13 6l6 6-6 6"/>'),
    "➜": S('<path d="M4 12h15M13 6l6 6-6 6"/>'),

    "✍️": S('<path d="M4 20l4-1 9.6-9.6a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/><path d="M14 6l3 3"/>'),
    "✍": S('<path d="M4 20l4-1 9.6-9.6a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/><path d="M14 6l3 3"/>'),

    "⬇️": S('<path d="M12 4v11M7 10l5 5 5-5"/><path d="M4 20h16"/>'),
    "⬇": S('<path d="M12 4v11M7 10l5 5 5-5"/><path d="M4 20h16"/>'),

    "📊": S('<path d="M4 20V6M10 20V10M16 20v-6M22 20H2"/>'),
    "📈": S('<path d="M3 17l6-6 4 4 7-8"/><path d="M20 7h-5M20 7v5"/>'),

    "📘": S('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/>'),
    "📗": S('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/>'),
    "📙": S('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/>'),
    "📕": S('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/>'),
    "📚": S('<path d="M3 6h5v14H3zM10 5h5v15h-5zM17 7l4 1-3 13-4-1z"/>'),

    "🩺": S('<path d="M6 3v5a4 4 0 0 0 8 0V3"/><path d="M10 12v3a4 4 0 0 0 8 0v-2"/><circle cx="18" cy="11" r="2"/>'),
    "⚛️": S('<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>'),
    "⚛": S('<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>'),
    "🧪": S('<path d="M9 3h6M10 3v6L5 19a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19l-5-10V3"/><path d="M7.5 15h9"/>'),
    "🧬": S('<path d="M7 3c0 6 10 6 10 12M17 3c0 6-10 6-10 12M7 21c0-2 2-3 5-3s5 1 5 3"/><path d="M8.5 6h7M8.5 9h7"/>'),
    "📐": S('<path d="M4 20 20 4v16z"/><path d="M8 16h4M8 12h8"/>'),
    "🔬": S('<path d="M6 21h10M9 21V11l5-6 4 4-6 5v7"/><path d="M13 9l2 2"/>'),
    "💉": S('<path d="M14 4l6 6M17 3l4 4"/><path d="M12 6l6 6-7 7-6-6z"/><path d="M5 19l-2 2"/>'),
    "🧫": S('<ellipse cx="12" cy="9" rx="7" ry="3"/><path d="M5 9v7a7 3 0 0 0 14 0V9"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="14" r="1"/>'),

    "✅": S('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>'),
    "👀": S('<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="3"/>'),
    "⭐": S('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z"/>'),
    "🌟": S('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z"/>'),
    "🇵🇰": S('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M14.5 12a3.5 3.5 0 1 1-3.2-3.5"/><path d="m16 9 1.6 1.2-.6 1.9"/>'),
    "⚡": S('<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>'),
    "⚗️": S('<path d="M9 3h6M10 3v5l-4 8a2 2 0 0 0 1.8 3h8.4A2 2 0 0 0 18 16l-4-8V3"/><path d="M7.5 14h9"/>'),
    "⚗": S('<path d="M9 3h6M10 3v5l-4 8a2 2 0 0 0 1.8 3h8.4A2 2 0 0 0 18 16l-4-8V3"/><path d="M7.5 14h9"/>'),
    "🌿": S('<path d="M4 20c8 0 14-5 16-14C10 6 4 10 4 20Z"/><path d="M4 20c2-6 6-9 10-11"/>'),
    "✏️": S('<path d="M4 20l4-1 9.6-9.6a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/><path d="M14 6l3 3"/>'),
    "✏": S('<path d="M4 20l4-1 9.6-9.6a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/><path d="M14 6l3 3"/>'),
    "🕌": S('<path d="M4 20V11a8 8 0 0 1 16 0v9"/><path d="M8 20v-5a4 4 0 0 1 8 0v5"/><path d="M12 3v3"/>'),
    "📝": S('<path d="M5 3h9l5 5v13H5z"/><path d="M14 3v5h5"/><path d="M8 13h8M8 17h6"/>'),
    "📸": S('<rect x="3" y="7" width="18" height="13" rx="3"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>'),
    "📷": S('<rect x="3" y="7" width="18" height="13" rx="3"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>'),
    "🔒": S('<rect x="4.5" y="10" width="15" height="10" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v2"/>'),
    "✕": S('<path d="M6 6l12 12M18 6 6 18"/>'),
    "✖": S('<path d="M6 6l12 12M18 6 6 18"/>'),
    "↻": S('<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>'),
    "🔄": S('<path d="M20 12a8 8 0 0 1-13.7 5.6"/><path d="M4 12a8 8 0 0 1 13.7-5.6"/><path d="M17 3v4h-4M7 21v-4h4"/>'),
    "🔀": S('<path d="M4 7h4l8 10h4M4 17h4l8-10h4"/><path d="M18 4l3 3-3 3M18 14l3 3-3 3"/>'),
    "🖼️": S('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m4 18 5-5 4 4 3-3 4 4"/>'),
    "🔗": S('<path d="M10 13a4 4 0 0 0 6 .5l2-2a4 4 0 0 0-5.6-5.6L11 7"/><path d="M14 11a4 4 0 0 0-6-.5l-2 2A4 4 0 0 0 11.6 18L13 17"/>'),
    "💾": S('<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h7V3"/><rect x="8" y="13" width="8" height="6"/>'),
    "🤖": S('<rect x="4" y="7" width="16" height="12" rx="4"/><path d="M12 3v4"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M9.5 16.5h5"/>'),
    "🎯": S('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>'),
    "🏆": S('<path d="M8 4h8v4a4 4 0 0 1-8 0Z"/><path d="M8 5H5a3 3 0 0 0 3 5M16 5h3a3 3 0 0 1-3 5"/><path d="M12 12v5M8 21h8l-1-4H9z"/>'),
    "🌱": S('<path d="M12 21v-7"/><path d="M12 14c0-4 3-6 7-6 0 4-3 6-7 6Z"/><path d="M12 16c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z"/>'),
    "🔥": S('<path d="M12 22a6 6 0 0 0 6-6c0-5-6-9-6-14 0 0-6 4-6 9 0 2 1 3 2 3.5C8 13 9 12 9 12c0 4 3 10 3 10Z"/>'),
    "⚙️": S('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.2A1.6 1.6 0 0 0 7.5 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3.6 13H3a2 2 0 1 1 0-4h.2A1.6 1.6 0 0 0 5 7.5l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 11 3.6V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 20.4 11H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1Z"/>'),
    "⚙": S('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.2A1.6 1.6 0 0 0 7.5 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3.6 13H3a2 2 0 1 1 0-4h.2A1.6 1.6 0 0 0 5 7.5l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 11 3.6V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 20.4 11H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1Z"/>'),
    "🧠": S('<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 7 18a3 3 0 0 0 5 1V4.5A3 3 0 0 0 9 4Z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 17 18a3 3 0 0 1-5 1"/>'),
    "🏏": S('<path d="M6 21l3-3M4 17l6 6"/><path d="M9 15 19 5a2 2 0 0 1 3 3L12 18z"/>'),
    "🌗": S('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" stroke="none"/>'),
    "🎖️": S('<circle cx="12" cy="14" r="5"/><path d="m8 3 2 5M16 3l-2 5M12 12l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2L9 13.1l2-.3Z"/>'),
    "👑": S('<path d="M3 18h18l-2-9-4 3-3-6-3 6-4-3Z"/><path d="M4 21h16"/>'),
    "🎓": S('<path d="M2 9l10-4 10 4-10 4Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v5"/>'),
    "📄": S('<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h6"/>'),
    "⏱️": S('<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/>'),
  };

  const KEYS = Object.keys(ICONS).sort((a, b) => b.length - a.length);
  const RX = new RegExp("(" + KEYS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "g");

  function svgFor(ch) {
    return ICONS[ch] || null;
  }

  function processNode(node) {
    if (!node || node.nodeType !== 3) return;
    const text = node.nodeValue;
    if (!text || !RX.test(text)) { RX.lastIndex = 0; return; }
    RX.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, m;
    while ((m = RX.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const svg = svgFor(m[0]);
      if (svg) {
        const span = document.createElement("span");
        span.className = "ico-wrap";
        span.innerHTML = svg;
        frag.appendChild(span.firstChild);
      } else {
        frag.appendChild(document.createTextNode(m[0]));
      }
      last = m.index + m[0].length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }

  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) { processNode(root); return; }
    if (root.nodeType !== 1) return;
    if (/^(SCRIPT|STYLE|TEXTAREA|INPUT|svg|SVG)$/.test(root.tagName || "")) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && n.parentElement.closest("script,style,textarea,input,svg") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(processNode);
  }

  document.addEventListener("DOMContentLoaded", () => {
    scan(document.body);
    const mo = new MutationObserver((muts) => {
      mo.disconnect();
      for (const m of muts) {
        m.addedNodes.forEach((n) => scan(n));
      }
      mo.observe(document.body, { childList: true, subtree: true });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // BURST: pages render cards after fetch; catch those too
    [200, 600, 1200, 2000, 3200].forEach((t) => setTimeout(() => scan(document.body), t));
  });

  window.SVGICONS = { ICONS, svgFor, scan };
})();
