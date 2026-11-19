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

// =================== APP NAVIGATION (nav.css) ===================
(function initAppNav() {
  const body = document.body;
  const SCREENS = ["login-screen", "dashboard-screen", "app-content", "progress-screen", "settings-screen", "help-screen"];
  const INSIDE_APP_CONTENT = ["quiz-screen", "past-papers-screen", "subjects-screen"];

  // Remember the desktop "collapsed" choice between visits
  if (typeof restoreSidebarCollapseState === "function") restoreSidebarCollapseState();

  // Which screen is showing goes on <body data-screen="...">; the phone tab bar uses it
  function setScreen(id) {
    if (!id) return;
    body.dataset.screen = id;
    document.querySelectorAll(".tabbar-link").forEach((b) => b.classList.toggle("is-active", b.dataset.screen === id));
  }
  function detectScreen() {
    const shown = SCREENS.find((id) => {
      const el = document.getElementById(id);
      return el && el.style.display && el.style.display !== "none";
    });
    // Quiz, Past Papers and Subjects all live inside app-content: keep the more exact name
    if (shown === "app-content" && INSIDE_APP_CONTENT.includes(body.dataset.screen)) return;
    setScreen(shown);
  }
  document.addEventListener("screenchange", (e) => setScreen(e.detail && e.detail.screenId));
  const watch = new MutationObserver(detectScreen);
  SCREENS.forEach((id) => {
    const el = document.getElementById(id);
    if (el) watch.observe(el, { attributes: true, attributeFilter: ["style"] });
  });
  detectScreen();

  // Top bar: exam name and the same avatar as the sidebar
  const examEl = document.getElementById("topbar-exam");
  const setExamName = () => {
    if (examEl && typeof getCurrentExam === "function" && typeof EXAM_LABELS === "object") {
      examEl.textContent = EXAM_LABELS[getCurrentExam()] || "JUPEB";
    }
  };
  setExamName();
  new MutationObserver(setExamName).observe(body, { attributes: true, attributeFilter: ["class"] });   // exam-ijmb / exam-jupeb

  const sideAvatar = document.getElementById("sidebar-avatar");
  const topAvatar = document.getElementById("topbar-avatar");
  if (sideAvatar && topAvatar) {
    const copy = () => { topAvatar.innerHTML = sideAvatar.innerHTML; };
    copy();
    new MutationObserver(copy).observe(sideAvatar, { childList: true, subtree: true, characterData: true });
  }

  // Sidebar streak badge
  function updateStreakBadge() {
    let days = 0;
    try { days = Number(JSON.parse(localStorage.getItem("jupeb_streak") || "{}").days) || 0; } catch (e) {}
    const num = document.getElementById("sidebar-streak-days");
    const note = document.getElementById("sidebar-streak-note");
    if (num) num.textContent = days;
    if (note) note.textContent = days > 0 ? "Keep it going today" : "Study today to start one";
  }
  updateStreakBadge();
  document.addEventListener("screenchange", updateStreakBadge);
})();

// =================== DASHBOARD EXTRAS: exam countdown + study tip ===================
(function initDashExtras() {
  // ---------- Exam countdown ----------
  const view = document.getElementById("db-countdown-view");
  const form = document.getElementById("db-countdown-form");
  const input = document.getElementById("db-countdown-input");
  const edit = document.getElementById("db-countdown-edit");
  const DAY = 24 * 60 * 60 * 1000;
  // Saved per exam, like Quick Access (qbKey is in script.js)
  const key = () => (typeof qbKey === "function" ? qbKey("jupeb_exam_date") : "jupeb_exam_date");
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const parseDay = (s) => { const [y, m, d] = String(s).split("-").map(Number); return new Date(y, (m || 1) - 1, d || 1); };
  const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  function load() {
    try {
      const v = JSON.parse(localStorage.getItem(key()) || "null");
      return v && /^\d{4}-\d{2}-\d{2}$/.test(v.date) ? v : null;
    } catch (e) { return null; }
  }

  function showForm() {
    if (!form) return;
    const saved = load();
    input.min = isoDay(today());
    input.value = saved ? saved.date : "";
    form.hidden = false;
    view.hidden = true;
    edit.hidden = true;
    input.focus();
  }

  function renderCountdown() {
    if (!view || !form) return;
    const saved = load();
    form.hidden = true;
    view.hidden = false;
    edit.hidden = !saved;

    if (!saved) {
      view.innerHTML = `
        <p class="db-countdown-msg">Add your exam date and we'll count down the days with you.</p>
        <button type="button" class="dash-btn-primary db-countdown-set" data-countdown-set>Set exam date</button>`;
      return;
    }
    const exam = parseDay(saved.date);
    const days = Math.round((exam - today()) / DAY);
    const dateText = exam.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "long", year: "numeric" });

    if (days < 0) {
      view.innerHTML = `
        <p class="db-countdown-msg">Your exam date (${dateText}) has passed. Got another one coming up?</p>
        <button type="button" class="dash-btn-primary db-countdown-set" data-countdown-set>Set a new date</button>`;
      edit.hidden = true;
      return;
    }
    if (days === 0) {
      view.innerHTML = `
        <div class="db-countdown-num"><strong>Today</strong><span>is the day 🎉</span></div>
        <p class="db-countdown-date">You've put in the work. Good luck!</p>`;
      return;
    }
    // How much of the time between setting the date and the exam has gone by
    const start = saved.setOn ? parseDay(saved.setOn) : today();
    const total = Math.max(1, Math.round((exam - start) / DAY));
    const gone = Math.min(100, Math.max(4, Math.round(((total - days) / total) * 100)));
    view.innerHTML = `
      <div class="db-countdown-num"><strong>${days}</strong><span>${days === 1 ? "day" : "days"} to go</span></div>
      <p class="db-countdown-date">${dateText}</p>
      <div class="db-countdown-bar" aria-hidden="true"><i style="width:${gone}%"></i></div>`;
  }

  if (view && form) {
    view.addEventListener("click", (e) => { if (e.target.closest("[data-countdown-set]")) showForm(); });
    edit.addEventListener("click", showForm);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!input.value) return;
      const old = load();
      localStorage.setItem(key(), JSON.stringify({
        date: input.value,
        setOn: old && old.setOn ? old.setOn : isoDay(today())
      }));
      renderCountdown();
    });
    renderCountdown();
    // Re-check when the dashboard opens (the day may have changed, or the exam switched)
    document.addEventListener("screenchange", (e) => { if (e.detail && e.detail.screenId === "dashboard-screen") renderCountdown(); });
  }

  // ---------- Study tip ----------
  const TIPS = [
    "Little and often beats one long cram. Twenty focused minutes a day adds up fast.",
    "Got a question wrong? Read the explanation, then try a similar question tomorrow. That's how it sticks.",
    "Do one full past paper under a timer each week, so exam day feels familiar.",
    "Start with your weak topics while your mind is fresh, and finish with ones you enjoy.",
    "Explain a topic out loud as if teaching a friend. If you get stuck, that's what to revise.",
    "Look for patterns: some topics come up almost every year. Practise those until they're easy.",
    "Sleep is revision too. Your brain saves what you studied while you rest.",
    "Put your phone on silent for one study session. Notice how much more you get done.",
    "Before you check the answer, commit to one. Guessing first makes the explanation stick better.",
    "Revisit yesterday's mistakes for five minutes before you start something new.",
    "In essay questions, plan your points first. A clear structure earns marks on its own.",
    "Take a short break every 25–30 minutes. Stretch, drink water, then go again."
  ];
  const tipEl = document.getElementById("db-tip-text");
  const nextBtn = document.getElementById("db-tip-next");
  if (tipEl) {
    const start = new Date(new Date().getFullYear(), 0, 0);
    let index = Math.floor((new Date() - start) / (24 * 60 * 60 * 1000)) % TIPS.length;   // a new tip each day
    tipEl.textContent = TIPS[index];
    nextBtn?.addEventListener("click", () => {
      index = (index + 1) % TIPS.length;
      tipEl.textContent = TIPS[index];
      tipEl.classList.remove("is-changing");
      void tipEl.offsetWidth;
      tipEl.classList.add("is-changing");
    });
  }
})();

// =================== QUIZ: keyboard shortcuts + celebration (study.css) ===================
// While a quiz question is on screen: A–E (or 1–5) picks an answer, ← / → move, F flags.
document.addEventListener("keydown", (e) => {
  if (!document.querySelector(".quiz-exam-wrapper")) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const tag = (e.target && e.target.tagName) || "";
  if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || (e.target && e.target.isContentEditable)) return;

  const key = e.key.toLowerCase();
  const letters = { a: "A", b: "B", c: "C", d: "D", e: "E", 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" };
  let target = null;
  if (letters[key]) target = document.querySelector(`.quiz-option-btn[data-label="${letters[key]}"]`);
  else if (e.key === "ArrowRight") target = document.getElementById("quiz-next-btn");
  else if (e.key === "ArrowLeft") target = document.getElementById("quiz-prev-btn");
  else if (key === "f") target = document.getElementById("quiz-flag-btn");
  if (target && !target.disabled) {
    e.preventDefault();
    target.click();
  }
});

// Confetti for a great score. script.js calls this from submitQuiz().
function celebrate() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "confetti-layer";
  layer.setAttribute("aria-hidden", "true");
  const colours = ["#0d6efd", "#7c3aed", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];
  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colours[i % colours.length];
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 220}px`);
    piece.style.setProperty("--spin", `${(Math.random() - 0.5) * 1080}deg`);
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    piece.style.animationDuration = `${2.2 + Math.random() * 1.6}s`;
    if (i % 3 === 0) piece.style.borderRadius = "50%";
    layer.appendChild(piece);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 4800);
}

// =================== SETTINGS + HELP (account.css) ===================
// Option buttons (quiz length, timer) drive the hidden <select>s that script.js saves from.
function syncSettingsOptions() {
  const saved = { "settings-default-length": "jupeb_default_quiz_length", "settings-default-timer": "jupeb_default_timer" };
  document.querySelectorAll(".acc-seg[data-for]").forEach((group) => {
    const select = document.getElementById(group.dataset.for);
    if (!select) return;
    const stored = localStorage.getItem(saved[group.dataset.for]);
    if (stored !== null && [...select.options].some((o) => o.value === stored)) select.value = stored;
    group.querySelectorAll("button[data-value]").forEach((b) => {
      const on = b.dataset.value === select.value;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-checked", on);
      b.setAttribute("role", "radio");
    });
  });
}
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".acc-seg button[data-value]");
  if (!btn) return;
  const select = document.getElementById(btn.closest(".acc-seg").dataset.for);
  if (!select || select.value === btn.dataset.value) return;
  select.value = btn.dataset.value;
  select.dispatchEvent(new Event("change"));      // script.js saves it
  syncSettingsOptions();
});
syncSettingsOptions();

// Theme cards in Settings
function setThemeTo(theme) {
  if (document.documentElement.getAttribute("data-theme") !== theme && typeof toggleTheme === "function") toggleTheme();
  const toggle = document.getElementById("settings-theme-toggle");
  if (toggle) toggle.checked = theme === "dark";
}

// FAQ search on the Help page
(function initHelpSearch() {
  const input = document.getElementById("help-search");
  if (!input) return;
  input.addEventListener("input", () => {
    const words = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    document.querySelectorAll("#help-faq-list .help-faq-item").forEach((item) => {
      const text = item.textContent.toLowerCase();
      const match = words.every((w) => text.includes(w));
      item.hidden = !match;
      if (match) shown++;
    });
    const empty = document.getElementById("help-faq-empty");
    if (empty) empty.hidden = shown > 0;
  });
})();
