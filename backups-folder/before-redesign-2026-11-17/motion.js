// ===== MOTION helpers for motion.css =====
// Load after home-screen.js. It only adds classes and small touches; nothing else depends on it.

(function initMotion() {
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Home slideshow: mark the slide on screen so its content animates in ----------
  const track = document.getElementById("home-slides");
  if (track) {
    const slides = track.querySelectorAll(".home-slide");
    let current = -1;
    const markActive = () => {
      const m = /translateX\(-?(\d+(?:\.\d+)?)%\)/.exec(track.style.transform || "");
      const index = m ? Math.round(parseFloat(m[1]) / 100) : 0;
      if (index === current) return;
      current = index;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    };
    markActive();
    new MutationObserver(markActive).observe(track, { attributes: true, attributeFilter: ["style"] });
  }

  // ---------- Home FAQ: fade in as it scrolls into view ----------
  if (!calm && "IntersectionObserver" in window) {
    const items = document.querySelectorAll(".home-faq h3, .home-faq-item");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    items.forEach((el, i) => {
      el.classList.add("m-reveal");
      el.style.transitionDelay = `${Math.min(i, 8) * 50}ms`;
      io.observe(el);
    });
  }

  // ---------- Dashboard: wave + streak count-up each time it opens ----------
  const dash = document.getElementById("dashboard-screen");
  if (!dash) return;

  function wrapWave() {
    const h = document.getElementById("dash-greeting-text");
    if (!h || h.querySelector(".dash-wave")) return;
    const text = h.textContent;
    const at = text.lastIndexOf("👋");
    if (at === -1) return;
    const wave = document.createElement("span");
    wave.className = "dash-wave";
    wave.textContent = "👋";
    h.textContent = text.slice(0, at);
    h.appendChild(wave);
    h.appendChild(document.createTextNode(text.slice(at + 2)));
  }

  function countUpStreak() {
    const el = document.getElementById("dash-streak-text");
    const node = el && el.firstChild;
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const target = parseInt(node.textContent, 10);
    if (!target || target < 2) return;
    const start = performance.now();
    const duration = Math.min(1200, 400 + target * 60);
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = `${Math.round(target * eased)} `;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  let wasVisible = false;
  function onDashChange() {
    const visible = dash.style.display !== "none";
    if (visible && !wasVisible) {
      // renderDashboard runs right after showScreen, so wait a frame for its text
      requestAnimationFrame(() => {
        wrapWave();
        if (!calm) countUpStreak();
      });
    }
    wasVisible = visible;
  }
  new MutationObserver(onDashChange).observe(dash, { attributes: true, attributeFilter: ["style"] });
  onDashChange();
})();
