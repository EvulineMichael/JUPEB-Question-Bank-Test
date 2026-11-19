// ===== UI helpers for home.css and dashboard.css =====
// Load after home-screen.js. Adds scrolling, the plan buttons, scroll-in effects
// and number count-ups. Nothing else depends on this file.

(function initUI() {
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const smooth = calm ? "auto" : "smooth";

  // Count a number up from 0. el.dataset.value (or data-count) is the target.
  function countUp(el, duration = 1100) {
    const target = Number(el.dataset.value ?? el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (!Number.isFinite(target)) return;
    if (calm || target < 2) { el.textContent = target.toLocaleString() + suffix; return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));   // the frame time can be a hair before start
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // =================== HOME ===================
  const home = document.getElementById("login-screen");
  if (home) {
    // Buttons that scroll to a section: data-scroll="<section id>" or "top"
    home.addEventListener("click", (e) => {
      const scrollBtn = e.target.closest("[data-scroll]");
      if (scrollBtn) {
        const id = scrollBtn.dataset.scroll;
        const target = id === "top" ? home : document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: smooth, block: "start" });
        return;
      }

      // Plan buttons: pick that exam in "How to get access", open it and scroll to it
      const planBtn = e.target.closest("[data-plan]");
      if (planBtn) {
        const choice = document.querySelector(`#home-exam-pick button[data-exam="${planBtn.dataset.plan}"]`);
        if (choice) choice.click();                       // home-screen.js updates the price + WhatsApp text
        const info = document.getElementById("access-info");
        if (info && info.style.display === "none" && typeof toggleAccessInfo === "function") toggleAccessInfo();
        if (info) info.scrollIntoView({ behavior: smooth, block: "start" });
        return;
      }

      // Extra "Try 5 free questions" buttons open the same sample as the hero button
      if (e.target.closest("[data-open-sample]")) {
        document.getElementById("home-sample-open")?.click();
      }
    });

    // Top bar gets a border once the page has scrolled (the page may scroll on
    // <body> rather than the window, so listen to every scroll)
    const nav = document.getElementById("lp-nav");
    if (nav) {
      const onScroll = () => {
        const y = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0, document.body.scrollTop || 0);
        nav.classList.toggle("is-scrolled", y > 8);
      };
      document.addEventListener("scroll", onScroll, { capture: true, passive: true });
      onScroll();
    }

    // Slideshow: mark the slide on screen so its content animates in
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

    // Sections fade up as they come into view; the numbers count up
    if (!calm && "IntersectionObserver" in window) {
      home.classList.add("lp-anim");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          entry.target.querySelectorAll("[data-count]").forEach((el) => countUp(el, 1400));
          io.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

      home.querySelectorAll(".lp-reveal").forEach((el) => {
        // Cards in the same grid come in one after another
        const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains("lp-reveal"));
        const i = siblings.indexOf(el);
        if (i > 0) el.style.transitionDelay = `${Math.min(i, 6) * 80}ms`;
        io.observe(el);
      });
    }
  }

  // =================== DASHBOARD ===================
  const dash = document.getElementById("dashboard-screen");
  if (!dash) return;

  // Wrap the 👋 in the greeting so it can wave
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
    if (calm || !target || target < 2) return;
    const start = performance.now();
    const duration = Math.min(1200, 400 + target * 60);
    const step = (now) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));   // the frame time can be a hair before start
      node.textContent = `${Math.round(target * (1 - Math.pow(1 - t, 3)))} `;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // The progress ring animates from empty each time the dashboard opens
  function replayRing() {
    const ring = document.getElementById("db-continue-ring");
    if (!ring || calm) return;
    const final = ring.style.strokeDashoffset;
    ring.style.transition = "none";
    ring.style.strokeDashoffset = String(2 * Math.PI * 50);
    void ring.getBoundingClientRect();
    ring.style.transition = "";
    ring.style.strokeDashoffset = final;
  }

  let wasVisible = false;
  function onDashChange() {
    const visible = dash.style.display !== "none";
    if (visible && !wasVisible) {
      // renderDashboard runs right after the screen is shown, so wait a frame for its content
      requestAnimationFrame(() => {
        wrapWave();
        countUpStreak();
        replayRing();
        dash.querySelectorAll(".db-stat [data-count]").forEach((el) => countUp(el));
      });
    }
    wasVisible = visible;
  }
  new MutationObserver(onDashChange).observe(dash, { attributes: true, attributeFilter: ["style"] });
  onDashChange();
})();
