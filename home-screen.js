// ===== HOME SCREEN: slideshow, free sample, WhatsApp link =====
// Paste into script.js, anywhere after your other functions. It runs once on load.

// ---------- Free sample (5 questions) ----------
// Same fields as your data files, so you can paste question objects straight from the JSON.
// Use multiple-choice questions with plain text (no equations or images).
// NOTE: the 5th question (Biology) is a PLACEHOLDER. Replace it with a real one.
const HOME_SAMPLE_QUESTIONS = [
  {
    "subject": "Physics", "year": 2025, "category": "Wave Theory of Light", "type": "Objective",
    "question": "Which of the following phenomena posed a significant challenge to the wave theory of light in the 19th century?",
    "options": ["Interference patterns observed in double-slit experiments.", "Photoelectric effect observations.", "Polarization of light.", "Diffraction of light around obstacles."],
    "answer": "B",
    "explanation": "The photoelectric effect (explained by Einstein using photons) could not be explained by classical wave theory of light.\n\nInterference, polarization, and diffraction support wave theory."
  },
  {
    "subject": "Economics", "year": 2025, "category": "Theory of National Income Determination", "type": "Objective",
    "question": "One of the following reduces the level of economic activities within an economy.",
    "options": ["Investment.", "Savings.", "Pensions.", "Exports."],
    "answer": "B",
    "explanation": "Savings represent a leakage from the circular flow of income. When households save, they reduce consumption expenditure, which reduces aggregate demand and economic activity. Investment, pensions, and exports are injections that increase economic activity."
  },
  {
    "subject": "IRS", "year": 2025, "category": "Forms and Purposes of Taharah", "type": "Objective",
    "question": "The act of using sand to observe ritual purification is known as",
    "options": ["Wudu'.", "Tayammum.", "Ghusl.", "Taharah."],
    "answer": "B",
    "explanation": "The act of using sand (or clean earth) to observe ritual purification is known as Tayammum. It is performed when water is not available or when using water would be harmful."
  },
  {
    "subject": "Chemistry", "year": 2025, "category": "Macromolecules", "type": "Objective",
    "question": "An example of a zwitterion is",
    "options": ["alanine", "methyl acetate", "glucose", "sodium hydroxide"],
    "answer": "A",
    "explanation": "Amino acids like alanine exist as zwitterions (H₃N⁺–CH(CH₃)–COO⁻) at physiological pH."
  },
  {
    "subject": "Biology", "year": 2025, "category": "Cell Biology", "type": "Objective",
    "question": "Which organelle is the main site of aerobic respiration in a cell?",
    "options": ["Nucleus", "Ribosome", "Mitochondrion", "Golgi body"],
    "answer": "C",
    "explanation": "Mitochondria release most of the cell's energy (as ATP) through aerobic respiration."
  }
];

function homeEsc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

let homeSampleIndex = 0;
let homeSampleScore = 0;
let homeSampleLocked = false;

function renderHomeSample() {
  const body = document.getElementById("home-sample-body");
  if (!body) return;
  const total = HOME_SAMPLE_QUESTIONS.length;
  homeSampleLocked = false;

  if (homeSampleIndex >= total) {
    body.innerHTML = `
      <div class="home-sample-end">
        <div class="home-slide-icon">🎉</div>
        <h4>You got ${homeSampleScore} of ${total}</h4>
        <p>That was just ${total} of our 2,000+ past questions, every one with its answer and explanation.</p>
        <button class="home-btn home-btn--primary" id="home-sample-cta">Get full access · ₦5,000</button>
        <button class="home-link" id="home-sample-again">Try again</button>
      </div>`;
    return;
  }

  const q = HOME_SAMPLE_QUESTIONS[homeSampleIndex];
  const letters = "ABCDEFGH";
  body.innerHTML = `
    <p class="home-sample-meta">Question ${homeSampleIndex + 1} of ${total} · ${homeEsc(q.subject)}${q.year ? " " + homeEsc(q.year) + " past question" : ""}</p>
    <h4 class="home-sample-q">${homeEsc(q.question)}</h4>
    <div class="home-sample-options">
      ${q.options.map((o, k) => `
        <button class="home-sample-opt" data-k="${k}">
          <span class="home-sample-letter">${letters[k]}</span><span>${homeEsc(o)}</span>
        </button>`).join("")}
    </div>
    <div class="home-sample-explain" id="home-sample-explain" hidden></div>
    <button class="home-btn home-btn--primary" id="home-sample-next" hidden></button>`;
}

function openHomeSample() {
  const modal = document.getElementById("home-sample");
  if (!modal) return;
  homeSampleIndex = 0;
  homeSampleScore = 0;
  renderHomeSample();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeHomeSample() {
  const modal = document.getElementById("home-sample");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("home-sample-open")?.addEventListener("click", openHomeSample);
document.getElementById("home-sample-close")?.addEventListener("click", closeHomeSample);
document.getElementById("home-sample-backdrop")?.addEventListener("click", closeHomeSample);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.getElementById("home-sample")?.classList.contains("is-open")) closeHomeSample();
});

document.getElementById("home-sample-body")?.addEventListener("click", (e) => {
  const opt = e.target.closest(".home-sample-opt");
  if (opt && !homeSampleLocked) {
    homeSampleLocked = true;
    const q = HOME_SAMPLE_QUESTIONS[homeSampleIndex];
    const picked = Number(opt.dataset.k);
    const correct = "ABCDEFGH".indexOf(String(q.answer).toUpperCase());
    const buttons = document.querySelectorAll("#home-sample-body .home-sample-opt");
    buttons.forEach((b, k) => { if (k === correct) b.classList.add("is-correct"); });
    if (picked === correct) homeSampleScore++;
    else opt.classList.add("is-wrong");

    const box = document.getElementById("home-sample-explain");
    box.innerHTML = `<strong>${picked === correct ? "Correct!" : "Not quite."}</strong>\n${homeEsc(q.explanation)}`;
    box.hidden = false;
    const next = document.getElementById("home-sample-next");
    next.textContent = homeSampleIndex === HOME_SAMPLE_QUESTIONS.length - 1 ? "See my result" : "Next question →";
    next.hidden = false;
    next.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }
  if (e.target.closest("#home-sample-next")) { homeSampleIndex++; renderHomeSample(); return; }
  if (e.target.closest("#home-sample-again")) { homeSampleIndex = 0; homeSampleScore = 0; renderHomeSample(); return; }
  if (e.target.closest("#home-sample-cta")) {
    closeHomeSample();
    const info = document.getElementById("access-info");
    if (info && info.style.display === "none" && typeof toggleAccessInfo === "function") toggleAccessInfo();
    if (info) info.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// ---------- Slideshow ----------
// The progress bars at the top fill over 5 seconds; when one finishes, the next slide appears.
// Pausing the bar (by holding a finger on it, or hovering) pauses the slideshow.
(function initHomeSlideshow() {
  const hero = document.getElementById("home-hero");
  const track = document.getElementById("home-slides");
  const segsEl = document.getElementById("home-segs");
  if (!hero || !track || !segsEl) return;

  const count = track.children.length;
  let index = 0, startX = 0, startY = 0;

  segsEl.innerHTML = Array.from({ length: count }, (_, k) =>
    `<button class="home-seg" aria-label="Go to slide ${k + 1}"><span></span></button>`).join("");
  const segs = Array.from(segsEl.children);

  function go(k) {
    index = (k + count) % count;
    track.style.transform = `translateX(-${index * 100}%)`;
    segs.forEach(s => s.classList.remove("is-on", "is-done"));
    void segsEl.offsetWidth;                         // restart the fill animation
    segs.forEach((s, j) => {
      if (j < index) s.classList.add("is-done");
      if (j === index) s.classList.add("is-on");
    });
  }

  segsEl.addEventListener("animationend", (e) => {
    if (e.target.parentElement && e.target.parentElement.classList.contains("is-on")) go(index + 1);
  });
  segs.forEach((s, k) => s.addEventListener("click", () => go(k)));

  const pause = () => hero.classList.add("is-paused");
  const resume = () => hero.classList.remove("is-paused");
  hero.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; pause(); }, { passive: true });
  hero.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX, dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1));
    resume();
  }, { passive: true });
  hero.addEventListener("touchcancel", resume, { passive: true });
  // Hover-to-pause only on devices with a real mouse. On phones a tap fakes a "mouse enter"
  // and would leave the slideshow stuck on pause.
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    hero.addEventListener("mouseenter", pause);
    hero.addEventListener("mouseleave", resume);
  }

  go(0);
})();

// ---------- WhatsApp button ----------
// If the student came through a teacher's link, their code travels with the receipt message.
(function initHomeWhatsApp() {
  const btn = document.getElementById("home-wa-btn");
  if (!btn) return;
  function refresh() {
    const code = localStorage.getItem("jupeb_referral_code");
    let text = "Hi! I've paid ₦5,000 for JUPEB Question Bank.";
    if (code) text += "\nTeacher code: " + code;
    text += "\nMy Gmail: ";
    btn.href = "https://wa.me/2349035801863?text=" + encodeURIComponent(text);
  }
  refresh();
  btn.addEventListener("click", refresh);   // rebuilt on tap, so it is always current
})();
