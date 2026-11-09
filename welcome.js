// ===== WELCOME STEP =====
// Its own file: welcome.js, loaded with its own <script> tag after home-screen.js.
// Needs the globals you already have: db, firebase. Uses renderSidebarUser(),
// showDashboard() and renderPinnedSubjects() if they exist.
//
// auth.js calls maybeShowWelcome(user, docRef) after the dashboard appears.
// It shows the welcome once per student (new AND existing), and on every load it
// restores the name the student chose, so it survives reloads and other devices.
// Everything is saved on the student's own surveys/<email> document.

const WELCOME_SUBJECTS = [
  { id: "chemistry",  name: "Chemistry",   icon: "🧪" },
  { id: "physics",    name: "Physics",     icon: "⚛️" },
  { id: "maths",      name: "Mathematics", icon: "📐" },
  { id: "biology",    name: "Biology",     icon: "🧬" },
  { id: "crs",        name: "CRS",         icon: "✝️" },
  { id: "irs",        name: "IRS",         icon: "☪️" },
  { id: "literature", name: "Literature",  icon: "📖" },
  { id: "economics",  name: "Economics",   icon: "💰" },
  { id: "government", name: "Government",  icon: "🏛️" }
];

let _welcome = null;                 // { user, docRef, askSource, askExam }

function welcomeFirstName(user) {
  return user && user.displayName ? user.displayName.split(" ")[0] : "";
}

// Quick Access is kept separately per exam (qbKey is in script.js)
function welcomePinKey() {
  return (typeof qbKey === "function") ? qbKey("jupeb_pinned_subjects") : "jupeb_pinned_subjects";
}

// Quick Access is saved on the device. On a new phone, or on the new web address,
// it starts empty, so fill it once from the subjects the student gave in the
// welcome popup. Only once per device and exam, so if they clear it on purpose,
// it stays cleared.
function restoreQuickAccess(saved) {
  if (!saved || !Array.isArray(saved.subjects) || saved.subjects.length === 0) return;
  const doneKey = (typeof qbKey === "function") ? qbKey("jupeb_pins_restored") : "jupeb_pins_restored";
  if (localStorage.getItem(doneKey)) return;
  localStorage.setItem(doneKey, "1");
  let current = [];
  try { current = JSON.parse(localStorage.getItem(welcomePinKey()) || "[]"); } catch (e) { current = []; }
  if (current.length) return;                       // they already have Quick Access here
  const available = (typeof courseStructure === "object") ? Object.keys(courseStructure) : saved.subjects;
  const pins = saved.subjects.filter(id => available.includes(id));
  if (!pins.length) return;
  localStorage.setItem(welcomePinKey(), JSON.stringify(pins));
  if (typeof renderPinnedSubjects === "function") renderPinnedSubjects();
}

function applyPreferredName(user, name) {
  if (!name) return;
  localStorage.setItem("jupeb_user_name", name);
  if (typeof renderSidebarUser === "function") {
    renderSidebarUser({ name: name, isPremium: true, photoURL: user.photoURL || null });
  }
  if (typeof showDashboard === "function") showDashboard();   // refreshes the greeting
}

async function maybeShowWelcome(user, docRef) {
  if (!user || !user.email) return;
  let saved = {};
  try {
    const snap = await db.collection("surveys").doc(user.email).get();
    saved = snap.exists ? snap.data() : {};
  } catch (err) {
    console.error("Welcome check failed:", err);
    return;                          // never block the app over this
  }
  if (saved.preferredName) applyPreferredName(user, saved.preferredName);
  restoreQuickAccess(saved);
  if (saved.profileCompletedAt) return;

  // Ask "Which exam are you writing?" only of students added since IJMB arrived
  // (their record has an exams list). Earlier students are JUPEB students.
  let askExam = false;
  try {
    const rec = await docRef.get();
    askExam = rec.exists && Array.isArray(rec.data().exams) && !saved.examsWriting;
  } catch (err) { /* not essential */ }

  // Skip "how did you hear" for students who came through a teacher's link,
  // or who already answered it in the old survey.
  showWelcome(user, docRef, { askSource: !saved.referralCode && !saved.source, askExam: askExam, saved: saved });
}

function showWelcome(user, docRef, opts) {
  const overlay = document.getElementById("welcome-overlay");
  if (!overlay) return;
  const saved = (opts && opts.saved) || {};
  _welcome = { user: user, docRef: docRef, askSource: !!(opts && opts.askSource), askExam: !!(opts && opts.askExam) };

  document.getElementById("welcome-title").textContent =
    welcomeFirstName(user) ? `Welcome, ${welcomeFirstName(user)}!` : "Welcome!";
  document.getElementById("welcome-name").value =
    saved.preferredName || localStorage.getItem("jupeb_user_name") || welcomeFirstName(user);
  document.getElementById("welcome-school").value = saved.school || "";

  let chosen = Array.isArray(saved.subjects) ? saved.subjects : [];
  if (chosen.length === 0) {
    try { chosen = JSON.parse(localStorage.getItem(welcomePinKey()) || "[]"); } catch (e) { chosen = []; }
  }
  document.getElementById("welcome-subjects").innerHTML = WELCOME_SUBJECTS.map(s => `
    <button type="button" class="welcome-subject ${chosen.includes(s.id) ? "is-on" : ""}"
            data-id="${s.id}" aria-pressed="${chosen.includes(s.id)}">
      <span>${s.icon}</span>${s.name}
    </button>`).join("");

  document.getElementById("welcome-source-wrap").hidden = !_welcome.askSource;

  // Exam question: start on what they paid for, so most students just confirm it
  document.getElementById("welcome-exam-wrap").hidden = !_welcome.askExam;
  const mine = Array.isArray(window.userExams) ? window.userExams : ["jupeb"];
  const paid = ["jupeb", "ijmb"].filter(e => mine.includes(e)).join(",");
  document.querySelectorAll("#welcome-exams button").forEach(b => {
    const on = _welcome.askExam && b.dataset.exams === paid;
    b.classList.toggle("is-on", on);
    b.setAttribute("aria-checked", on ? "true" : "false");
  });
  document.getElementById("welcome-error").textContent = "";

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideWelcome() {
  const overlay = document.getElementById("welcome-overlay");
  if (!overlay) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

async function submitWelcome() {
  if (!_welcome) return;
  const { user, docRef, askSource, askExam } = _welcome;
  const errorEl = document.getElementById("welcome-error");
  const btn = document.getElementById("welcome-submit");
  const say = (msg) => { errorEl.textContent = msg; };

  const preferredName = document.getElementById("welcome-name").value.trim();
  const school = document.getElementById("welcome-school").value.trim();
  const subjects = [...document.querySelectorAll("#welcome-subjects .welcome-subject.is-on")].map(b => b.dataset.id);

  let examsWriting = null;
  if (askExam) {
    const on = document.querySelector("#welcome-exams button.is-on");
    if (!on) return say("Please tell us which exam you're writing.");
    examsWriting = on.dataset.exams.split(",");
  }
  if (!preferredName) return say("Please tell us what to call you.");
  if (subjects.length === 0) return say("Please pick at least one subject.");
  if (school.length < 2) return say("Please enter your school or JUPEB centre.");

  let source = null;
  if (askSource) {
    source = document.getElementById("welcome-source").value;
    if (!source) return say("Please tell us how you heard about us.");
    if (source === "Other") {
      const other = document.getElementById("welcome-source-other").value.trim();
      if (!other) return say("Please tell us where you heard about us.");
      source = "Other: " + other;
    }
  }

  say("");
  btn.disabled = true;
  btn.textContent = "Saving…";
  try {
    const data = {
      email: user.email,
      name: user.displayName || null,
      preferredName: preferredName,
      school: school,
      subjects: subjects,
      profileCompletedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    if (source) data.source = source;
    if (examsWriting) data.examsWriting = examsWriting;

    // merge: keeps anything already there, such as the teacher referral code
    await db.collection("surveys").doc(user.email).set(data, { merge: true });
    try { await docRef.update({ hasSeenSurvey: true }); } catch (e) { /* not essential */ }

    // Their subjects become their Quick Access, for the exam they're in now
    // (in IJMB, only the subjects that have IJMB papers)
    const available = (typeof courseStructure === "object") ? Object.keys(courseStructure) : subjects;
    localStorage.setItem(welcomePinKey(), JSON.stringify(subjects.filter(id => available.includes(id))));
    applyPreferredName(user, preferredName);
    if (typeof renderPinnedSubjects === "function") renderPinnedSubjects();

    hideWelcome();
    _welcome = null;
  } catch (err) {
    console.error("Welcome save failed:", err);
    say("Could not save. Please check your connection and try again.");
  }
  btn.disabled = false;
  btn.textContent = "Continue →";
}

// ----- Wiring (runs once, on load) -----
(function initWelcome() {
  document.getElementById("welcome-subjects")?.addEventListener("click", (e) => {
    const b = e.target.closest(".welcome-subject");
    if (!b) return;
    b.classList.toggle("is-on");
    b.setAttribute("aria-pressed", b.classList.contains("is-on"));
  });
  document.getElementById("welcome-exams")?.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-exams]");
    if (!b) return;
    document.querySelectorAll("#welcome-exams button").forEach(x => {
      x.classList.toggle("is-on", x === b);
      x.setAttribute("aria-checked", x === b ? "true" : "false");
    });
  });
  document.getElementById("welcome-source")?.addEventListener("change", (e) => {
    document.getElementById("welcome-source-other").hidden = e.target.value !== "Other";
  });
  document.getElementById("welcome-submit")?.addEventListener("click", submitWelcome);
  document.getElementById("welcome-later")?.addEventListener("click", hideWelcome);   // asks again next time
})();