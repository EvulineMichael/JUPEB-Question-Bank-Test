// ===== EXAM MODE (JUPEB / IJMB) =====
// Its own file: exam-mode.js, loaded right AFTER script.js and BEFORE auth.js.
//
// Decides which exam the page shows, points the question loader at the right
// folder (data/ for JUPEB, data/ijmb/ for IJMB), puts the JUPEB | IJMB switch
// in the sidebar, hides what IJMB doesn't have (quiz mode, quick practice, weak
// topics), and shows a locked screen for an exam the student hasn't paid for.
// Which exams a student has comes from window.userExams, set by auth.js.

// The site's name, in one place. Every element marked data-site-name shows it,
// so renaming the site later means changing only this line.
const SITE_NAME = 'JUPEB & IJMB Prep';
function applySiteName() {
  document.querySelectorAll('[data-site-name]').forEach(el => { el.textContent = SITE_NAME; });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applySiteName);
else applySiteName();

// IJMB subjects that have papers. When you add a subject's files under
// data/ijmb/<subject>/, add the subject here too.
const IJMB_SUBJECTS = ['chemistry', 'physics', 'maths', 'biology', 'economics', 'government', 'crs', 'irs', 'literature', 'accounting', 'businessManagement', 'geography', 'sociology'];

const ALL_SUBJECTS = ['chemistry', 'physics', 'maths', 'biology', 'economics', 'government', 'crs', 'irs', 'literature'];
const EXAM_LABELS = { jupeb: 'JUPEB', ijmb: 'IJMB' };
const EXAM_PERKS = {
  jupeb: 'Objective and essay past questions, quiz mode and weak-topic tracking.',
  ijmb: 'Essay past questions with step-by-step model answers.'
};
const EXAM_ADD_PRICE = '₦3,000';
const EXAM_PAY = { bank: 'Moniepoint', account: '5282798033', name: 'Michael Evuline', whatsapp: '2349035801863' };
const EXAM_PREF_KEY = 'qb_current_exam';

// The exams this student has paid for (auth.js sets window.userExams).
function userExamList() {
  const list = Array.isArray(window.userExams) ? window.userExams.filter(e => e === 'jupeb' || e === 'ijmb') : [];
  return list.length ? list : ['jupeb'];
}

// The exam this page is showing: the student's last choice if they still have
// access to it, otherwise JUPEB if they have it, otherwise IJMB.
function getCurrentExam() {
  const mine = userExamList();
  const saved = localStorage.getItem(EXAM_PREF_KEY);
  if (saved && mine.includes(saved)) return saved;
  return mine.includes('jupeb') ? 'jupeb' : 'ijmb';
}
function currentExamIs(exam) { return getCurrentExam() === exam; }

// Used by script.js
function examDataRoot() { return currentExamIs('ijmb') ? 'data/ijmb' : 'data'; }
function examSubjects() { return currentExamIs('ijmb') ? IJMB_SUBJECTS.slice() : ALL_SUBJECTS.slice(); }
// Things saved per exam (Quick Access, last session, progress) get their own
// storage key in IJMB: "jupeb_pinned_subjects" becomes "ijmb_pinned_subjects".
// JUPEB keeps its existing keys, so nobody loses anything.
function examKey(key) { return currentExamIs('ijmb') ? key.replace(/^jupeb_/, 'ijmb_') : key; }

function examEsc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Called at the start of initJUPEBApp(), before any questions load.
function applyExamMode() {
  const exam = getCurrentExam();
  window.currentExam = exam;
  document.body.classList.toggle('exam-ijmb', exam === 'ijmb');
  document.body.classList.toggle('exam-jupeb', exam === 'jupeb');

  if (exam === 'ijmb') {
    // Only IJMB subjects appear in the subject picker, past papers and Quick Access
    if (typeof courseStructure === 'object') {
      Object.keys(courseStructure).forEach(id => { if (!IJMB_SUBJECTS.includes(id)) delete courseStructure[id]; });
    }
    if (typeof currentSubject !== 'undefined' && !IJMB_SUBJECTS.includes(currentSubject)) {
      currentSubject = IJMB_SUBJECTS[0];
    }
    // IJMB has no quiz mode
    if (/^\/quiz/.test(location.pathname)) history.replaceState(null, '', '/');
  }

  const logoLabel = document.querySelector('#app-sidebar .sidebar-logo .sidebar-label');
  if (logoLabel) logoLabel.textContent = EXAM_LABELS[exam];
  renderExamSwitch();
}

// After the questions load, drop IJMB subjects that have no files yet
document.addEventListener('jupebDataLoaded', () => {
  if (!currentExamIs('ijmb') || typeof courseStructure !== 'object' || typeof allSubjectData !== 'object') return;
  Object.keys(courseStructure).forEach(id => {
    if (!(allSubjectData[id] || []).length) delete courseStructure[id];
  });
  if (typeof renderPinnedSubjects === 'function') renderPinnedSubjects();
});

// ----- The JUPEB | IJMB switch at the top of the sidebar -----
function renderExamSwitch() {
  const brand = document.querySelector('#app-sidebar .sidebar-brand');
  if (!brand) return;
  let el = document.getElementById('exam-switch');
  if (!el) {
    el = document.createElement('div');
    el.id = 'exam-switch';
    el.className = 'exam-switch';
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', 'Choose your exam');
    brand.insertAdjacentElement('afterend', el);
    el.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-exam]');
      if (btn) switchExam(btn.dataset.exam);
    });
  }
  const current = getCurrentExam();
  const mine = userExamList();
  el.innerHTML = ['jupeb', 'ijmb'].map(x => `
    <button type="button" class="exam-switch-btn ${x === current ? 'is-active' : ''}" data-exam="${x}" aria-pressed="${x === current}">
      ${mine.includes(x) ? '' : '<span class="exam-switch-lock" aria-hidden="true">🔒</span>'}${EXAM_LABELS[x]}
    </button>`).join('');
}

function switchExam(target) {
  if (target === getCurrentExam()) return;
  if (!userExamList().includes(target)) { showExamLock(target); return; }
  localStorage.setItem(EXAM_PREF_KEY, target);
  // Start fresh on the home page so nothing from the other exam is left behind
  window.location.replace('/');
}

// ----- Locked screen for an exam the student hasn't paid for -----
function showExamLock(target) {
  const current = getCurrentExam();
  const T = EXAM_LABELS[target], C = EXAM_LABELS[current];
  let email = '';
  try { email = (firebase.auth().currentUser || {}).email || ''; } catch (e) { /* not signed in */ }
  const message = `Hello, I want to add ${T} to my ${SITE_NAME} account. My Gmail is ${email || '(your Gmail)'}. Here is my ${EXAM_ADD_PRICE} payment receipt:`;
  const waLink = `https://wa.me/${EXAM_PAY.whatsapp}?text=${encodeURIComponent(message)}`;

  let overlay = document.getElementById('exam-lock');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'exam-lock';
    overlay.className = 'exam-lock';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('[data-lock-close]')) hideExamLock();
      const copy = e.target.closest('[data-copy]');
      if (copy) {
        const done = () => { copy.textContent = 'Copied ✓'; setTimeout(() => (copy.textContent = 'Copy'), 1500); };
        if (navigator.clipboard) navigator.clipboard.writeText(copy.dataset.copy).then(done, () => {}); else done();
      }
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideExamLock(); });
  }
  overlay.innerHTML = `
    <div class="exam-lock-card" role="dialog" aria-modal="true" aria-labelledby="exam-lock-title">
      <div class="exam-lock-icon" aria-hidden="true">🔒</div>
      <h2 id="exam-lock-title">${T} is locked</h2>
      <p class="exam-lock-sub">Add ${T} to your account for <strong>${EXAM_ADD_PRICE}</strong>. You keep ${C} too.</p>
      <p class="exam-lock-perks">${examEsc(EXAM_PERKS[target])}</p>
      <ol class="exam-lock-steps">
        <li>Pay <strong>${EXAM_ADD_PRICE}</strong> to <strong>${EXAM_PAY.bank} ${EXAM_PAY.account}</strong> (${EXAM_PAY.name})
          <button type="button" class="exam-lock-copy" data-copy="${EXAM_PAY.account}">Copy</button></li>
        <li>Send the receipt on WhatsApp with your Gmail address${email ? ` (<strong>${examEsc(email)}</strong>)` : ''}.</li>
        <li>Once we've unlocked ${T}, reload the page and tap ${T} in the menu.</li>
      </ol>
      <a class="exam-lock-wa" href="${waLink}" target="_blank" rel="noopener">Send receipt on WhatsApp</a>
      <button type="button" class="exam-lock-back" data-lock-close>Back to ${C}</button>
    </div>`;
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  if (typeof closeSidebar === 'function') closeSidebar();   // close the drawer on phones
}

function hideExamLock() {
  const overlay = document.getElementById('exam-lock');
  if (!overlay || !overlay.classList.contains('is-open')) return;
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}