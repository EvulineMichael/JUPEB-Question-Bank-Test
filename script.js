// Sidebar state
let isSidebarCollapsed = false;
let isMobileMenuOpen = false;

// Global variables
let questionsData = [];
let currentSubject = "chemistry";
let currentTopic = null;

// Cache all subject data for instant switching
let allSubjectData = {
    chemistry: [],
    physics: [],
    maths: [],
    biology: [],
    economics: [],
    government: [],
    crs: [],
    irs: [],
    literature: []
};
let allSubjectYears = {
    chemistry: [],
    physics: [],
    maths: [],
    biology: [],
    economics: [],
    government: [],
    crs: [],
    irs: [],
    literature: []
};

// ===== THEME =====
function updateThemeIcons() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const navbarThemeToggle = document.getElementById('navbar-theme-toggle');
    const headerThemeToggle = document.getElementById('header-theme-toggle');
    if (currentTheme === 'dark') {
        const moonIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        if (navbarThemeToggle) navbarThemeToggle.innerHTML = moonIcon;
        if (headerThemeToggle) headerThemeToggle.innerHTML = moonIcon;
    } else {
        const sunIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        if (navbarThemeToggle) navbarThemeToggle.innerHTML = sunIcon;
        if (headerThemeToggle) headerThemeToggle.innerHTML = sunIcon;
    }
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
    if (sidebarThemeToggle) {
        const sidebarSun = sidebarThemeToggle.querySelector('.sidebar-sun-icon');
        const sidebarMoon = sidebarThemeToggle.querySelector('.sidebar-moon-icon');
        if (currentTheme === 'dark') {
            if (sidebarSun) sidebarSun.style.display = 'none';
            if (sidebarMoon) sidebarMoon.style.display = 'block';
        } else {
            if (sidebarSun) sidebarSun.style.display = 'block';
            if (sidebarMoon) sidebarMoon.style.display = 'none';
        }
    }
    const loginSun = document.getElementById('login-sun-icon');
const loginMoon = document.getElementById('login-moon-icon');
if (currentTheme === 'dark') {
    if (loginSun) loginSun.style.display = 'none';
    if (loginMoon) loginMoon.style.display = 'block';
} else {
    if (loginSun) loginSun.style.display = 'block';
    if (loginMoon) loginMoon.style.display = 'none';
}
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    updateThemeIcons();
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    updateThemeIcons();
}

function setupThemeListeners() {
    const navbarThemeToggle = document.getElementById('navbar-theme-toggle');
    const headerThemeToggle = document.getElementById('header-theme-toggle');
    if (navbarThemeToggle) navbarThemeToggle.addEventListener('click', toggleTheme);
    if (headerThemeToggle) headerThemeToggle.addEventListener('click', toggleTheme);
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
    if (sidebarThemeToggle) sidebarThemeToggle.addEventListener('click', toggleTheme);
}

// ===== COURSE STRUCTURE =====
const courseStructure = {
    chemistry: {
    "CHM 001 - General Chemistry": [
        "Measurement", "Mole Concept", "Atomic Structure", "Chemical Bonding"
    ],
    "CHM 002 - Physical Chemistry": [
        "Nature of Matter", "Kinetic Molecular Theory of Gases", "Solutions and Colligative Properties",
        "Thermochemistry", "Thermodynamics", "Electrochemistry", "Chemical Kinetics",
        "Equilibrium State", "Acid-Base Equilibria", "Ionic Equilibria", "Nuclear Chemistry"
    ],
    "CHM 003 - Inorganic Chemistry": [
        "Periodicity", "Chemistry of Hydrogen", "s-block elements", "p-block elements", "d-block elements",
        "Coordination Chemistry", "Chemistry of the Environment", "Nanochemistry"
    ],
    "CHM 004 - Organic Chemistry": [
        "Separation and Purification Techniques", "Structure and Bonding in Organic Compounds",
        "Organic Reactions", "Isomerism in Organic Compounds", "Alkanes, Alkenes, Alkynes", "Alcohols",
        "Alkyl Halides", "Carbonyl Compounds", "Carboxylic Acids and Derivatives",
        "Amines", "Aromatic Compounds", "Macromolecules", "Petroleum Industry"
    ]
},
    physics: {
    "PHY 001 - Mechanics & Properties of Matter": [
        "Physical Quantities and Units", "Vectors", "Kinematics", "Dynamics (Newton's Laws and Forces)",
        "The Gravitational Field", "Work, Energy and Power", "Circular and Oscillatory Motions",
        "Elasticity", "Hydrostatics", "Hydrodynamics"
    ],
    "PHY 002 - Heat, Waves & Optics": [
        "Temperature and Thermometry", "Heat and Energy", "Ideal Gases", 
        "Waves", "Sound Waves", "Geometric Optics (Light)", 
        "Lenses and Optical Instruments", "Wave Theory of Light"
    ],
    "PHY 003 - Electricity & Magnetism": [
        "Electrostatics", "Capacitors", "Current Electricity", "Magnetic Field",
        "Force on Conductor and Moving Charge", "Electromagnetic Induction", "Alternating Current Circuits"
    ],
    "PHY 004 - Modern Physics": [
        "Atomic Structure", "Elements of Modern Physics", "X-Rays", "Wave-Particle Duality",
        "Radioactivity and Nuclear Energy", "Semiconductors", "Applied Physics"
    ]
    },
    maths: {
        "MAT 001 - Pure Mathematics": [
            "Real Numbers", "Set Theory", "Mappings", "Quadratic Equations", "Polynomials",
            "Partial Fractions", "Binomial Theorem", "Logarithms", "Matrices", "Inequalities",
            "Trigonometry", "Coordinate Geometry", "Complex Numbers", "Sequences and Series"
        ],
        "MAT 002 - Calculus": [
            "Functions", "Limits and Continuity", "Differentiation", "Applications of Differentiation",
            "Maclaurin and Taylor Series", "Integration", "Applications of Integration",
            "First Order Differential Equations", "Second Order Differential Equations"
        ],
        "MAT 003 - Statistics": [
            "Introduction to Statistics", "Measures of Location", "Measures of Dispersion",
            "Combinatorics", "Probability", "Random Variables", "Normal Distribution",
            "Significance Testing", "Correlation and Regression"
        ],
        "MAT 004A - Applied Mechanics": [
            "Vectors", "Kinematics", "Newtonian Mechanics", "Forces and Equilibrium", "Equilibrium of Rigid Bodies"
        ],
        "MAT 004B - Business Mathematics": [
            "Mathematics of Finance", "Marginal Concepts", "Production and Cost Functions",
            "Consumer and Producer Surplus", "Optimization", "Linear Programming"
        ]
    },
    economics: {
    "ECN 001 - Principles of Economics I": [
        "Introduction to Economics",
        "Basic Economic Principles",
        "Tools and Methods of Economic Analysis",
        "The Price System",
        "Theory of Consumer Behavior",
        "Theory of the Firm",
        "Market Structure",
        "Theory of Income Distribution",
        "Government Intervention"
    ],
    "ECN 002 - Principles of Economics II": [
        "Circular Flow of Income",
        "National Income Accounting",
        "Theory of National Income Determination",
        "Money and Banking",
        "Inflation and Unemployment",
        "Public Finance"
    ],
    "ECN 003 - Applied Economics I": [
        "Economic Structure of West Africa",
        "Growth and Development",
        "Population",
        "International Trade"
    ],
    "ECN 004 - Applied Economics II": [
        "Measurement and Application in Macroeconomics",
        "Applied Issues in Labour Economics",
        "Stabilization Policies in Developing Countries",
        "International Economic Institutions"
    ]
},
crs: {
    "CRS 001 - Old Testament Studies": [
        "Formation and Composition of the Old Testament",
        "Mosaic Authorship of the Pentateuch",
        "The Rise of Monarchy in Israel",
        "The Divided Kingdoms and the Exiles",
        "The Rise of Prophecy in Israel"
    ],
    "CRS 002 - New Testament Studies": [
        "Historical Background of the New Testament",
        "The Synopsis, Materials and Canonization of the New Testament",
        "The Synoptic Gospels and the Synoptic Problem",
        "Modern Criticism of the Gospel",
        "Literature and Theology of the Synoptic Gospels"
    ],
    "CRS 003 - History of Christianity in West Africa": [
        "Previous Attempts at Christianizing Africa",
        "Establishing Christianity in Sierra Leone",
        "The Planting of Christianity in the Gold Coast (Ghana)",
        "The Planting of Christianity in Nigeria",
        "The Rise of the African Independent Churches",
        "Pentecostalism in Nigeria",
        "Proliferation of Churches in Nigeria"
    ],
    "CRS 004 - Religion and Society": [
        "Relationship Between Religion and Society",
        "Sociological Theories of Religion",
        "Measures of Religion",
        "Functions of Religion",
        "Religion, Peace and Conflict Resolution",
        "Religious Personality and Human Values",
        "Christianity Response to Contemporary Issues"
    ]
},
literature: {
    "LIT 001 - Introduction to Drama": [
        "Introduction",
        "The Classical Tradition",
        "European Drama (The Renaissance Tradition)",
        "European Drama (The Modern Tradition)",
        "American Drama (The Modern Tradition)",
        "African Drama (The Modern Tradition)"
    ],
    "LIT 002 - Prose Fiction": [
        "Introduction",
        "The European Prose Tradition",
        "African Prose (Modern African Novel)"
    ],
    "LIT 003 - Introduction to Poetry": [
        "Introduction",
        "The Classical Tradition",
        "European Poetry (The Medieval and Renaissance Traditions)",
        "European Poetry (19th and 20th Centuries)",
        "American Poetry (The Modern Tradition)",
        "African Poetry (The Modern Tradition)"
    ],
    "LIT 004 - Unseen Prose and Poetry": [
        "Unseen Prose and Poetry"
    ]
},
government: {
    "GOV 001 - Elements of Government": [
        "Nature of Government and Politics",
        "Basic Concepts of Government",
        "The State, Structure and Types of Government",
        "Constitution and Constitutionalism",
        "Governance and Citizenship"
    ],
    "GOV 002 - Fundamentals of Government": [
        "Political Ideas and Thoughts",
        "Political Parties, Party System and Pressure Groups",
        "Public Opinion and Propaganda",
        "Elections and Electoral System",
        "Political and Social Change",
        "Public Administration",
        "International Relations"
    ],
    "GOV 003 - Nigerian Government and Politics": [
        "Pre-Colonial Systems of Government in Nigeria",
        "Colonial Administration in Nigeria",
        "Development of Political Parties in Nigeria",
        "Elections and Electoral Process in Nigeria",
        "Major Political Crises in Nigeria",
        "Reasons for Military Rule of Military Regimes",
        "Nigerian Foreign Policy"
    ],
    "GOV 004 - African Government and Politics": [
        "Africa Before European Invasion and Colonial Conquest",
        "Colonial Systems of Administration in Africa",
        "Constitutional Development of Selected West African Countries",
        "The Nationalist Movement in West Africa",
        "Military Intervention in Africa",
        "Democratization and Political Process in Africa"
    ]
},
   biology: {
    "BIO 001 - General Biology": [
        "Origin of Living Things",
        "Origin of Organic Molecules",
        "Basic Biostatistics",
        "Diversity of Living Things",
        "Biological Molecules",
        "Cell Structure and Functions",
        "Cell Division, Genetics, Variations and Heredity",
        "Systematics, Taxonomy and Nomenclature",
        "Ecology",
        "Biological Methods and Application",
        "Evolution",
        "Enzymes"
    ],
    "BIO 002 - Microbiology": [
        "History of the Discovery of Microorganisms",
        "Types and Taxonomic Groupings of Microorganisms",
        "Structures, Morphology and Characteristics of Microorganisms",
        "Microbial Ecology",
        "Microbial Nucleic Acids in Information Storage and Transfer",
        "Microorganisms and their Application in Biotechnology"
    ],
    "BIO 003 - Botany": [
        "General Characteristics and Diversity of Plants",
        "Plant Morphology/Anatomy",
        "Nutrition in Plants",
        "Transport System in Plants",
        "Respiration",
        "Plant Reproduction",
        "Growth in Higher Plants and Growth Regulators",
        "Crop Improvement",
        "Economic and Ecological Importance of Plants"
    ],
    "BIO 004 - Zoology": [
        "Diversity and General Characteristics of Animals",
        "Systematics (Taxonomy) of Animals",
        "Evolution of Animals",
        "Invertebrates",
        "Introduction to Chordates",
        "Ecologic and Economic Importance of Animals",
        "Nutrition in Animals",
        "Respiration in Mammals",
        "Transport of Substances across Membranes",
        "Skeletal System and Muscles",
        "Reproduction",
        "Excretion",
        "Circulatory System",
        "Growth and Development",
        "Nervous System",
        "Sense Organs",
        "Endocrine System"
    ]
},
    irs: {
    "ISS 001 - History of Islam": [
        "An Appraisal of the Jahiliyyah Period and the Significance of the Islamic Reforms",
        "The Biography of Muhammad",
        "Life and Achievements of the Khulafa Rashidūn",
        "An Overview of the Umayyad and Abbasid Dynasties",
        "Life and Achievements of 'Umar ibn Abdul Aziz",
        "Life and Achievements of Hārūn ar-Rāshid",
        "Impact of the Spread of Islam to West Africa",
        "The Hausa-Fulani Jihād",
        "The Kanem-Bornu Empire",
        "Muslim-Non-Muslim Relations"
    ],
    "ISS 002 - Tawhid & Ibadat": [
        "Definition and Types of Tawhid",
        "Types and Implications of Shirk",
        "Nature and Implication of Engaging in Different Forms of Shirk",
        "The Islamic Concept of Ibadah",
        "Forms and Purposes of Taharah",
        "The Observance, Types, and Values of Salāt",
        "The Regulations Governing Zakat and Sadaqah",
        "The Regulations Governing Sawm",
        "Types of Fasts and the Significance of Fasting",
        "The Conditions, Performance, and Performance of Hajj and Umrah",
        "Islamic Marriage and Divorce and Comparison with Marriage and Divorce Practices in Other Cultures"
    ],
    "ISS 003 - Qur'anic Studies": [
        "Analysis of the Names and Attributes of the Qur'an",
        "Authenticity of the Qur'an as a Divine Book",
        "Arrangement and Means of Preserving the Qur'anic Text",
        "The Emergence of ar-Rasm al-'Uthmānī",
        "The Distinction between the Makki and Madani Suwar",
        "Asbāb an-Nuzūl and an-Nāsikh wal-Mansūkh",
        "Ethics of Interpreting the Qur'an",
        "A Study of the Text, Translation, and Interpretation of the Juz' 'Amma"
    ],
    "ISS 004 - Introduction to the Study of Hadith": [
        "Definition and Values of Hadith",
        "The Relationship between Hadith and Sunnah",
        "Types of Hadith (Nabawi and Qudsi)",
        "Basic Form of the Hadith (Isnād and Matn)",
        "Determining the Authenticity of Hadith",
        "The Ruwāt and the Muhaddithūn",
        "The Six Standard Works and Biographies of Compilers",
        "The Mu'jam of at-Tabarānī and Jāmi' of Ibn 'Athīr",
        "Textual Analyses of an-Nawawī's Collection",
        "A Critical Appraisal of Sahīh al-Bukhārī"
    ]
}
};

// DOM Elements
const categoriesList = document.getElementById("categories-list");
const questionsContainer = document.getElementById("questions-container");
const sidebarTitle = document.getElementById("sidebar-title");
const welcomeMessage = document.getElementById("welcome-message");
const backToTopBtn = document.getElementById("back-to-top");

// ===== SIDEBAR =====
function initSidebar() {
    const sidebar = document.getElementById('categories-sidebar');
    const collapseBtn = document.getElementById('sidebar-collapse-btn');
    if (!sidebar || !collapseBtn) return;
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState === 'true') {
        sidebar.classList.add('sidebar-collapsed');
        isSidebarCollapsed = true;
    }
    collapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-collapsed');
        isSidebarCollapsed = sidebar.classList.contains('sidebar-collapsed');
        localStorage.setItem('sidebarCollapsed', isSidebarCollapsed);
    });
}

function initMobileSidebar() {
    const originalHamburger = document.getElementById('hamburger-btn');
    const navbarHamburger = document.getElementById('navbar-hamburger');
    const closeBtn = document.getElementById('sidebar-close-btn');
    const sidebar = document.getElementById('categories-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if ((!originalHamburger && !navbarHamburger) || !sidebar || !overlay) return;

    let swipeArea = document.querySelector('.swipe-area');
    if (!swipeArea) {
        swipeArea = document.createElement('div');
        swipeArea.className = 'swipe-area';
        document.body.appendChild(swipeArea);
    }

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    function openMobileMenu() {
        sidebar.classList.add('sidebar-open');
        overlay.classList.add('active');
        if (originalHamburger) originalHamburger.style.display = 'none';
        if (navbarHamburger) navbarHamburger.style.display = 'none';
        isMobileMenuOpen = true;
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        sidebar.classList.remove('sidebar-open');
        overlay.classList.remove('active');
        if (window.innerWidth <= 768) {
            if (originalHamburger) originalHamburger.style.display = 'flex';
            if (navbarHamburger) navbarHamburger.style.display = 'flex';
        } else {
            if (originalHamburger) originalHamburger.style.display = 'none';
            if (navbarHamburger) navbarHamburger.style.display = 'none';
        }
        isMobileMenuOpen = false;
        document.body.style.overflow = '';
    }

    function resetHamburgerVisibility() {
        if (window.innerWidth <= 768) {
            if (!isMobileMenuOpen) {
                if (originalHamburger) originalHamburger.style.display = 'flex';
                if (navbarHamburger) navbarHamburger.style.display = 'flex';
            }
        } else {
            if (originalHamburger) originalHamburger.style.display = 'none';
            if (navbarHamburger) navbarHamburger.style.display = 'none';
        }
    }

    document.body.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.body.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = Math.abs(touchEndY - touchStartY);

        if (Math.abs(swipeDistanceX) < swipeDistanceY) return;

        if (swipeDistanceX > 50 && !isMobileMenuOpen && window.innerWidth <= 768) {
            openMobileMenu();
        } else if (swipeDistanceX < -50 && isMobileMenuOpen && window.innerWidth <= 768) {
            closeMobileMenu();
        }
    }, { passive: true });

    if (originalHamburger) originalHamburger.addEventListener('click', openMobileMenu);
    if (navbarHamburger) navbarHamburger.addEventListener('click', openMobileMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);

    document.addEventListener('click', (e) => {
        if (isMobileMenuOpen && window.innerWidth <= 768) {
            if (e.target.closest('.topic-btn') || e.target.closest('.course-header')) {
                setTimeout(closeMobileMenu, 200);
            }
        }
    });

    window.addEventListener('resize', () => {
        resetHamburgerVisibility();
        if (window.innerWidth > 768 && isMobileMenuOpen) closeMobileMenu();
    });

    resetHamburgerVisibility();
}

function autoOpenSidebarOnMobile() {
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('categories-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const originalHamburger = document.getElementById('hamburger-btn');
        const navbarHamburger = document.getElementById('navbar-hamburger');
        
        if (sidebar && !sidebar.classList.contains('sidebar-open')) {
            sidebar.classList.add('sidebar-open');
            if (overlay) overlay.classList.add('active');
            if (originalHamburger) originalHamburger.style.display = 'none';
            if (navbarHamburger) navbarHamburger.style.display = 'none';
            isMobileMenuOpen = true;
            document.body.style.overflow = 'hidden';
        }
    }
}

function handleSidebarResponsive() {
    const sidebar = document.getElementById('categories-sidebar');
    if (!sidebar) return;
    if (window.innerWidth <= 768) sidebar.classList.remove('sidebar-collapsed');
}

// ===== DATA LOADING =====
async function getAvailableYears(subject) {
    const possibleYears = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
    const availableYears = [];

    for (const year of possibleYears) {
        let foundAny = false;
        for (const type of ['A', 'B', 'C', 'D']) {
            try {
                const fileName = `data/${subject}/${year}-type${type.toLowerCase()}.json`;
                const response = await fetch(fileName); // Direct fetch, no HEAD
                if (response.ok) {
                    availableYears.push({ year, paper: `Type ${type}`, label: `${year} Type ${type}` });
                    foundAny = true;
                }
            } catch (error) {
                // File doesn't exist — skip
            }
        }

        if (!foundAny) {
            try {
                const response = await fetch(`data/${subject}/${year}.json`);
                if (response.ok) availableYears.push({ year, paper: null, label: String(year) });
            } catch (error) {
                // Doesn't exist — skip
            }
        }
    }

    return availableYears;
}
// ===== QUESTION BODY RENDERER =====
// Detects and renders equation, dataTable, and diagram fields
function renderQuestionBody(q) {
    let html = '';
    
    // 1. Question text
    html += `<div class="question-text">${escapeHtml(q.question)}</div>`;
    
    // 2. LaTeX equation (if present)
    if (q.equation) {
        html += `<div class="question-equation">\\[${q.equation}\\]</div>`;
    }
    
    // 3. Data table (if present)
    if (q.dataTable && q.dataTable.headers && q.dataTable.rows) {
        html += `<div class="question-table-wrap"><table class="question-table">
            <thead><tr>${q.dataTable.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>
            <tbody>${q.dataTable.rows.map(row => 
                `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`
            ).join('')}</tbody>
        </table></div>`;
    }
    
    // 4. Image (if present)
if (q.image && q.image.src) {
    html += `
        <div class="question-diagram">
            <img src="${q.image.src}" 
                 alt="${escapeHtml(q.image.alt || 'Question diagram')}" 
                 style="max-width:100%;height:auto;border-radius:8px;" 
                 loading="lazy" />
        </div>`;
}

// 5. Diagram missing warning (if flagged)
if (q.diagramMissing) {
    html += `<div class="quiz-diagram-note">⚠️ ${escapeHtml(q.diagramNote || 'Diagram missing — refer to past paper.')}</div>`;
}
    
    return html;
}

async function loadQuestions(forceSubject = null, callback = null) {
    if (forceSubject) {
        currentSubject = forceSubject;
    }

    const subjects = ['chemistry', 'physics', 'maths', 'biology', 'economics', 'government', 'crs', 'irs', 'literature'];

    // Create a promise for each subject that needs loading
    const loadPromises = subjects.map(async (subject) => {
        if (allSubjectData[subject].length > 0) return; // Skip already-loaded

        const availableYears = await getAvailableYears(subject);
        allSubjectYears[subject] = availableYears;

        if (availableYears.length === 0) return;

        let allQuestions = [];
        const fetchPromises = availableYears.map(async (yr) => {
            try {
                let fileName;
                if (yr.paper) {
                    const typeLetter = yr.paper.replace('Type ', '').toLowerCase();
                    fileName = `data/${subject}/${yr.year}-type${typeLetter}.json`;
                } else {
                    fileName = `data/${subject}/${yr.year}.json`;
                }
                const response = await fetch(fileName);
                if (response.ok) {
                    const yearData = await response.json();
                    if (Array.isArray(yearData)) {
                        return yearData.map(q => ({ ...q, paper: yr.paper || null }));
                    } else if (yearData.questions && Array.isArray(yearData.questions)) {
                        return yearData.questions.map(q => ({ ...q, paper: yr.paper || null }));
                    }
                }
                return [];
            } catch (error) {
                console.error(`Error loading ${subject}/${yr.year}${yr.paper ? '-type' + yr.paper.replace('Type ', '').toLowerCase() : ''}.json:`, error);
                return [];
            }
        });

        const yearResults = await Promise.all(fetchPromises);
        yearResults.forEach(result => {
            allQuestions = [...allQuestions, ...result];
        });

        allSubjectData[subject] = allQuestions;
        console.log(`Cached ${subject}: ${allQuestions.length} questions from years ${availableYears.map(y => y.label).join(', ')}`);
    });

    // Wait for ALL subjects to load simultaneously
    await Promise.all(loadPromises);

    questionsData = allSubjectData[currentSubject] || [];
    window.currentSubjectYears = allSubjectYears[currentSubject] || [];

    renderCategories();
    showWelcomeMessage();
    autoOpenSidebarOnMobile();

    if (callback) callback();
}

function getAvailableCategoriesFromJSON() {
    const categories = new Set();
    questionsData.forEach(q => { if (q.category) categories.add(q.category); });
    return categories;
}

function getQuestionCountForTopic(topic) {
    return questionsData.filter(q => q.category === topic).length;
}

function renderCategories() {
    const courses = courseStructure[currentSubject];
    const availableCategories = getAvailableCategoriesFromJSON();
    if (!courses || Object.keys(courses).length === 0) {
        categoriesList.innerHTML = '<p class="loading">📭 No categories available.</p>';
        return;
    }
let subjectDisplay = currentSubject === 'physics' ? 'Physics' : 
                     currentSubject === 'maths' ? 'Mathematics' : 
                     currentSubject === 'biology' ? 'Biology' :
                     currentSubject === 'government' ? 'Government' :
                     currentSubject === 'economics' ? 'Economics' : 
                     currentSubject === 'crs' ? 'CRS':
                     currentSubject === 'irs' ? 'IRS':
                     currentSubject === 'literature' ? 'Literature': 'Chemistry';
    const yearsLoaded = window.currentSubjectYears || [];
    sidebarTitle.innerHTML = `📚 ${subjectDisplay} <span style="font-size:0.7rem;font-weight:normal;">(${yearsLoaded.map(y => y.label).join(', ')})</span>`;

    let html = '';
    let courseIndex = 0;
    for (const [courseName, topics] of Object.entries(courses)) {
        const courseId = `course-${currentSubject}-${courseIndex}`;
        html += `<div class="course-group"><div class="course-header" data-course-id="${courseId}"><h4>📘 ${courseName}</h4><span class="dropdown-icon">▼</span></div><div class="course-topics" id="${courseId}">`;
        topics.forEach(topic => {
            const hasQuestions = availableCategories.has(topic);
            const questionCount = getQuestionCountForTopic(topic);
            const statusIcon = hasQuestions ? "✅" : "⏳";
html += `<button class="topic-btn" data-topic="${escapeHtml(topic)}" ${!hasQuestions ? 'disabled' : ''}>
    ${statusIcon} <span class="topic-text">📖 ${escapeHtml(topic)}</span>
    ${hasQuestions ? `<span class="question-count">${questionCount}</span>` : ''}
</button>`;
    });
        html += `</div></div>`;
        courseIndex++;
    }
    categoriesList.innerHTML = html;

    document.querySelectorAll(".course-header").forEach(header => {
        header.addEventListener("click", (e) => {
            e.stopPropagation();
            const courseId = header.dataset.courseId;
            const topicsDiv = document.getElementById(courseId);
            document.querySelectorAll(".course-topics").forEach(div => { if (div.id !== courseId) div.classList.remove("show"); });
            document.querySelectorAll(".course-header").forEach(h => { if (h.dataset.courseId !== courseId) h.classList.remove("open"); });
            topicsDiv.classList.toggle("show");
            header.classList.toggle("open");
        });
    });

    document.querySelectorAll(".topic-btn:not([disabled])").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".topic-btn").forEach(b => b.classList.remove("active-topic"));
            btn.classList.add("active-topic");
            currentTopic = btn.dataset.topic;
            displayQuestions(currentTopic);
        });
    });
}

// ===== DISPLAY QUESTIONS (STUDY MODE) =====
function displayQuestions(topic) {
    if (welcomeMessage) welcomeMessage.style.display = "none";
    const quizTab = document.getElementById('quiz-mode-tab');
    if (quizTab) quizTab.classList.remove('active');

    // Show loading state immediately
    questionsContainer.innerHTML = `
        <div class="loading-container" style="text-align:center;padding:60px 20px;">
            <div class="loading-spinner" style="display:inline-block;width:40px;height:40px;border:4px solid var(--border-color);border-top:4px solid var(--tab-active-bg);border-radius:50%;animation:spin 0.8s linear infinite;"></div>
            <p style="margin-top:16px;color:var(--text-secondary);font-size:1rem;">Loading ${escapeHtml(topic)} questions...</p>
        </div>
    `;

    // Use setTimeout to allow the loading state to render
    setTimeout(() => {
        // Use a local copy instead of modifying the global
        let allQuestions = questionsData.filter(q => q.category === topic);

// Deduplicate: keep only one copy of identical questions
// Prefer Type A (or first loaded) when duplicates exist
const seen = new Set();
allQuestions = allQuestions.filter(q => {
    const key = q.question.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
});
        
        // SEPARATE Objective and Essay questions
        const objectiveQuestions = allQuestions.filter(q => q.type === "Objective");
        const essayQuestions = allQuestions.filter(q => q.type === "Essay");
        
        // Sort objective questions by year (newest first) then by question number
        objectiveQuestions.sort((a, b) => {
            if (b.year !== a.year) return b.year - a.year;
            const aNum = parseInt(a.questionNumber) || 0;
            const bNum = parseInt(b.questionNumber) || 0;
            return aNum - bNum;
        });
        
        // Sort essay questions by year (newest first) then by question number
        essayQuestions.sort((a, b) => {
            if (b.year !== a.year) return b.year - a.year;
            const aNum = parseInt(a.questionNumber) || 0;
            const bNum = parseInt(b.questionNumber) || 0;
            return aNum - bNum;
        });

        const totalQuestions = objectiveQuestions.length + essayQuestions.length;
        
        if (totalQuestions === 0) {
            questionsContainer.innerHTML = `<div class="welcome-message"><h2>📭 No questions found</h2><p>No questions for "${escapeHtml(topic)}" yet.</p></div>`;
            return;
        }

        // Get unique years for display
        const allYears = [...new Set(allQuestions.map(q => q.year))].sort((a, b) => b - a);

        let questionsHtml = `<h2 style="margin-bottom:10px;color:#0d6efd;">📖 ${escapeHtml(topic)}</h2>`;
        questionsHtml += `<p style="margin-bottom:20px;color:#6c757d;padding-bottom:10px;border-bottom:1px solid #e9ecef;">${totalQuestions} question(s) | 📅 Years: ${allYears.join(", ")}</p>`;

        let questionIndex = 1;
        
        // --- SECTION 1: OBJECTIVE QUESTIONS ---
        if (objectiveQuestions.length > 0) {
            questionsHtml += `
                <div class="past-section-header">
                    <h3 style="color:#0d6efd;font-size:1.1rem;margin:24px 0 16px 0;padding-bottom:8px;border-bottom:2px solid var(--border-color);">
                        📝 Multiple-Choice Questions
                        <span style="font-size:0.8rem;font-weight:normal;color:var(--text-secondary);">(${objectiveQuestions.length})</span>
                    </h3>
                </div>`;
            
            objectiveQuestions.forEach((q) => {
                questionsHtml += buildQuestionCard(q, q.year, questionIndex);
                questionIndex++;
            });
        }
        
        // --- SECTION 2: ESSAY QUESTIONS ---
        if (essayQuestions.length > 0) {
            questionsHtml += `
                <div class="past-section-header">
                    <h3 style="color:#059669;font-size:1.1rem;margin:32px 0 16px 0;padding-bottom:8px;border-bottom:2px solid var(--border-color);">
                        ✍️ Essay Questions
                        <span style="font-size:0.8rem;font-weight:normal;color:var(--text-secondary);">(${essayQuestions.length})</span>
                    </h3>
                </div>`;
            
            essayQuestions.forEach((q) => {
                questionsHtml += buildQuestionCard(q, q.year, questionIndex);
                questionIndex++;
            });
        }

        questionsContainer.innerHTML = questionsHtml;

        // Re-render MathJax for new LaTeX content
if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([questionsContainer]).catch(err => console.log('MathJax error:', err));
}

        // Set up event listeners for show answer buttons
        document.querySelectorAll('.show-answer-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const qIdx = btn.dataset.qIdx;
                const answerDisplay = document.getElementById(`answer-${qIdx}`);
                if (answerDisplay.classList.contains('show')) {
                    answerDisplay.classList.remove('show');
                    btn.textContent = '🔍 Show Answer';
                    document.getElementById(`options-list-${qIdx}`)?.querySelectorAll('.option-item').forEach(opt => opt.classList.remove('option-correct-highlight'));
                } else {
                    answerDisplay.classList.add('show');
                    btn.textContent = '🙈 Hide Answer';
                    const answer = btn.dataset.answer;
                    document.getElementById(`options-list-${qIdx}`)?.querySelectorAll('.option-item').forEach(opt => {
                        if (opt.dataset.option === answer.toUpperCase()) opt.classList.add('option-correct-highlight');
                    });
                }
            });
        });

        document.querySelectorAll('.show-essay-answer-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const essayIdx = btn.dataset.essayIdx;
                const answerDisplay = document.getElementById(`essay-answer-${essayIdx}`);
                if (answerDisplay.style.display === 'none') {
                    answerDisplay.style.display = 'block';
                    btn.textContent = '🙈 Hide Model Answer';
                } else {
                    answerDisplay.style.display = 'none';
                    btn.textContent = '📝 Show Model Answer';
                }
            });
        });

        document.getElementById("questions-area").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // Small delay to ensure loading state renders
}

function showWelcomeMessage() {
    if (welcomeMessage) welcomeMessage.style.display = "block";
    questionsContainer.innerHTML = "";
    document.querySelectorAll(".topic-btn").forEach(b => b.classList.remove("active-topic"));
    currentTopic = null;
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Subject dropdown items
    document.querySelectorAll('.subject-dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const subject = item.dataset.subject;
            
            // Update active states
            document.querySelectorAll('.subject-dropdown-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('subjects-dropdown-btn').classList.add('active');
            
            // Close dropdown
            document.getElementById('subjects-dropdown-menu').classList.remove('show');
            document.getElementById('subjects-dropdown-btn').classList.remove('open');
            
            // Switch subject
            currentSubject = subject;
            currentTopic = null;
            clearQuizTimer();
            questionsData = allSubjectData[currentSubject] || [];
            window.currentSubjectYears = allSubjectYears[currentSubject] || [];
            renderCategories();
            showWelcomeMessage();
            autoOpenSidebarOnMobile();
        });
    });

    // Quiz mode tab
    const quizModeTab = document.getElementById('quiz-mode-tab');
    if (quizModeTab) {
        quizModeTab.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.subject-dropdown-item').forEach(i => i.classList.remove('active'));
            document.getElementById('subjects-dropdown-btn').classList.remove('active');
            quizModeTab.classList.add('active');
            clearQuizTimer();
            showQuizLobby();
        });
    }

    // Past questions tab
    const pastQuestionsTab = document.getElementById('past-questions-tab');
    if (pastQuestionsTab) {
        pastQuestionsTab.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.subject-dropdown-item').forEach(i => i.classList.remove('active'));
            document.getElementById('subjects-dropdown-btn').classList.remove('active');
            pastQuestionsTab.classList.add('active');
            clearQuizTimer();
            showPastQuestionsSidebar();
        });
    }

    // Back to top
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
}

function escapeHtml(text) {
    if (!text) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function shuffleOptions(question) {
    if (question.type !== 'Objective' || !question.options || !question.answer) return question;
    
    const labels = ['A','B','C','D','E','F'];
    const originalIndex = labels.indexOf(question.answer.trim().toUpperCase());
    if (originalIndex === -1 || originalIndex >= question.options.length) return question;
    
    const correctText = question.options[originalIndex];
    const shuffled = [...question.options];
    
    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    const newCorrectLetter = labels[shuffled.indexOf(correctText)];
    
    return { ...question, options: shuffled, answer: newCorrectLetter, originalAnswer: question.answer };
}

// ===== STICKY NAVBAR =====
let lastScrollY = window.scrollY;
let ticking = false;

function handleNavbarOnScroll() {
    const navbar = document.getElementById('sticky-navbar');
    const mainHeader = document.querySelector('header');
    if (!navbar) return;
    const currentScrollY = window.scrollY;
    if (currentScrollY > 80) {
        if (currentScrollY < lastScrollY) {
            navbar.classList.add('visible');
            if (mainHeader) mainHeader.classList.add('header-hidden');
        } else {
            navbar.classList.remove('visible');
            if (mainHeader) mainHeader.classList.remove('header-hidden');
        }
    } else {
        navbar.classList.remove('visible');
        if (mainHeader) mainHeader.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
    ticking = false;
}

function initStickyNavbar() {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => { handleNavbarOnScroll(); ticking = false; });
            ticking = true;
        }
    });
    handleNavbarOnScroll();
}

// ============================================================
// ===== QUIZ MODE ==============================================
// ============================================================

// ----- QUIZ STATE -----
let quizState = {
    subject: null,
    mode: null,
    filter: null,
    selectedTopics: [],
    count: 40,
    timed: false,
    totalTime: 0,
    questions: [],
    currentIndex: 0,
    answers: {},
    flagged: new Set(),
    startTime: null,
    timerInterval: null,
    timeRemaining: 0,
    submitted: false,
    weakAreas: {},
    history: []
};

// ----- WEAK AREAS CONFIG -----
const WEAK_AREA_CONFIG = {
    MIN_ATTEMPTS_TO_JUDGE: 3,
    WEAK_THRESHOLD: 0.6,
    STRONG_THRESHOLD: 0.7,
    TOTAL_QUESTIONS_TO_UNLOCK: 10
};

function clearQuizTimer() {
    clearInterval(quizState.timerInterval);
}

function getPracticeStats() {
    const subjectWeak = quizState.weakAreas[currentSubject] || {};
    const totalTopics = getAllTopicsForSubject().length;
    
    let totalAttempts = 0;
    let totalCorrect = 0;
    let topicsWithAttempts = 0;
    let topicsAboveThreshold = 0;
    let weakTopicsList = [];
    
    Object.entries(subjectWeak).forEach(([topic, data]) => {
        if (data.attempts > 0) {
            topicsWithAttempts++;
            totalAttempts += data.attempts;
            totalCorrect += data.correct;
            
            const pct = data.correct / data.attempts;
            
            if (data.attempts >= WEAK_AREA_CONFIG.MIN_ATTEMPTS_TO_JUDGE) {
                if (pct < WEAK_AREA_CONFIG.WEAK_THRESHOLD) {
                    weakTopicsList.push({ topic, pct, attempts: data.attempts, correct: data.correct });
                }
                if (pct >= WEAK_AREA_CONFIG.STRONG_THRESHOLD) {
                    topicsAboveThreshold++;
                }
            }
        }
    });
    
    const progressToUnlock = Math.min(100, Math.round((totalAttempts / WEAK_AREA_CONFIG.TOTAL_QUESTIONS_TO_UNLOCK) * 100));
    
    return {
        totalAttempts, totalCorrect, topicsWithAttempts, topicsAboveThreshold,
        weakTopicsList, totalTopics, progressToUnlock,
        isUnlocked: totalAttempts >= WEAK_AREA_CONFIG.TOTAL_QUESTIONS_TO_UNLOCK,
        questionsRemaining: Math.max(0, WEAK_AREA_CONFIG.TOTAL_QUESTIONS_TO_UNLOCK - totalAttempts)
    };
}

function getWeakAreasMessage(stats) {
    if (stats.totalAttempts === 0) {
        return { icon: '🌱', title: 'Start Your Journey', desc: `Answer <strong>${stats.questionsRemaining}+ questions</strong> to unlock`, progressText: `${stats.progressToUnlock}% to unlock` };
    }
    if (!stats.isUnlocked) {
        return { icon: '📊', title: 'Gathering Data...', desc: `<strong>${stats.questionsRemaining} more questions</strong> needed.`, progressText: `${stats.progressToUnlock}% to unlock` };
    }
    if (stats.weakTopicsList.length === 0) {
        return { icon: '🎉', title: 'All Topics Strong!', desc: `${stats.topicsWithAttempts} topics analyzed`, progressText: 'Keep it up!' };
    }
    return {
        icon: '⚡', title: `${stats.weakTopicsList.length} Weak Area${stats.weakTopicsList.length > 1 ? 's' : ''} Found`,
        desc: stats.weakTopicsList.map(w => `${w.topic.split(' ').slice(0, 2).join(' ')}... (${Math.round(w.pct * 100)}%)`).join('<br>'),
        progressText: `Click to focus practice`
    };
}

function getWeakTopics() {
    const weak = quizState.weakAreas[currentSubject] || {};
    if (!quizState.history || quizState.history.length === 0) return [];
    return Object.entries(weak)
        .filter(([, data]) => data && data.attempts >= WEAK_AREA_CONFIG.MIN_ATTEMPTS_TO_JUDGE && (data.correct / data.attempts) < WEAK_AREA_CONFIG.WEAK_THRESHOLD)
        .map(([topic]) => topic);
}

function getWeakAreasCount() {
    if (!quizState.history || quizState.history.length === 0) return 0;
    return getWeakTopics().length;
}

// ----- ENTRY POINT -----
function showQuizLobby() {
    if (welcomeMessage) welcomeMessage.style.display = 'none';
    loadQuizPersistentData();

    quizState.subject = currentSubject;
    quizState.mode = null;
    quizState.filter = null;
    quizState.selectedTopics = [];
    
    questionsData = allSubjectData[currentSubject] || [];
    window.currentSubjectYears = allSubjectYears[currentSubject] || [];

    const stats = getPracticeStats();
    const msg = getWeakAreasMessage(stats);
    const hasWeakTopics = stats.weakTopicsList.length > 0;

    questionsContainer.innerHTML = `
        <div class="quiz-lobby">
            <div class="quiz-lobby-header">
                <h2>📝 Quiz Mode</h2>
                <p class="quiz-subtitle">Choose your subject and configure your session</p>
            </div>

            <!-- STEP 0: Choose Subject -->
<div class="quiz-step" id="qstep-0">
    <div class="quiz-step-label"><span class="step-number">1</span> Choose Subject</div>
    <div class="quiz-subject-select">
        <select id="quiz-subject-select" style="width:100%;padding:14px 16px;border:2px solid var(--border-color);border-radius:12px;background:var(--bg-secondary);color:var(--text-primary);font-size:1rem;cursor:pointer;appearance:none;-webkit-appearance:none;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>');background-repeat:no-repeat;background-position:right 16px center;padding-right:40px;">
            <option value="chemistry" ${currentSubject === 'chemistry' ? 'selected' : ''}>🧪 Chemistry</option>
            <option value="physics" ${currentSubject === 'physics' ? 'selected' : ''}>⚛️ Physics</option>
            <option value="maths" ${currentSubject === 'maths' ? 'selected' : ''}>📐 Mathematics</option>
            <option value="biology" ${currentSubject === 'biology' ? 'selected' : ''}>🧬 Biology</option>
            <option value="crs" ${currentSubject === 'crs' ? 'selected' : ''}>🕊️ CRS</option>
            <option value="irs" ${currentSubject === 'irs' ? 'selected' : ''}>☪️ IRS</option>
            <option value="literature" ${currentSubject === 'literature' ? 'selected' : ''}>📖 Literature</option>
            <option value="economics" ${currentSubject === 'economics' ? 'selected' : ''}>💰 Economics</option>
<option value="government" ${currentSubject === 'government' ? 'selected' : ''}>🏛️ Government</option>
        </select>
    </div>
</div>

            <div class="quiz-step" id="qstep-1">
                <div class="quiz-step-label"><span class="step-number">2</span> Choose Quiz Mode</div>
                <div class="quiz-mode-grid">
                    <button class="quiz-mode-card" data-mode="practice">
                        <div class="qmc-icon">📝</div><div class="qmc-title">Practice Quiz</div><div class="qmc-desc">Select topics or random • Up to 50 questions</div>
                    </button>
                    <button class="quiz-mode-card" data-mode="exam">
                        <div class="qmc-icon">📅</div><div class="qmc-title">Past Exam</div><div class="qmc-desc">Questions from a specific exam year</div>
                    </button>
                    <button class="quiz-mode-card weak-area-card ${!stats.isUnlocked && stats.totalAttempts === 0 ? 'disabled' : ''} ${stats.isUnlocked && !hasWeakTopics ? 'all-strong' : ''}" 
                            data-mode="weak" ${!hasWeakTopics ? 'disabled' : ''}>
                        <div class="qmc-icon">${msg.icon}</div><div class="qmc-title">${msg.title}</div><div class="qmc-desc">${msg.desc}</div>
                        ${!stats.isUnlocked ? `<div class="weak-progress-bar"><div class="weak-progress-fill" style="width:${stats.progressToUnlock}%"></div></div><div class="weak-progress-label">${msg.progressText}</div>` : ''}
                        ${stats.isUnlocked && hasWeakTopics ? `<div class="weak-topics-preview">${stats.weakTopicsList.slice(0, 3).map(w => `<span class="weak-topic-tag">${w.topic.split(' ').slice(0, 2).join(' ')} ${Math.round(w.pct * 100)}%</span>`).join('')}${stats.weakTopicsList.length > 3 ? `<span class="weak-topic-tag">+${stats.weakTopicsList.length - 3} more</span>` : ''}</div>` : ''}
                    </button>
                </div>
                ${!stats.isUnlocked ? `<div class="weak-info-box"><p>💡 <strong>How Weak Areas work:</strong> After answering <strong>${WEAK_AREA_CONFIG.TOTAL_QUESTIONS_TO_UNLOCK}+ questions</strong>, topics where you score below <strong>${Math.round(WEAK_AREA_CONFIG.WEAK_THRESHOLD * 100)}%</strong> will appear here for focused practice.</p></div>` : ''}
            </div>

            <div class="quiz-step hidden" id="qstep-2">
                <div class="quiz-step-label"><span class="step-number">3</span> <span id="qstep-2-label">Select Filter</span></div>
                <div id="quiz-filter-options"></div>
            </div>

            <div class="quiz-step hidden" id="qstep-3">
                <div class="quiz-step-label"><span class="step-number">4</span> Timer</div>
                <div class="quiz-timer-grid">
                    <button class="quiz-timer-btn active" data-time="0">⏱️ No Timer</button>
                    <button class="quiz-timer-btn" data-time="1800">30 min</button>
                    <button class="quiz-timer-btn" data-time="3600">60 min</button>
                    <button class="quiz-timer-btn" data-time="5400">90 min</button>
                </div>
            </div>

            <div class="quiz-step hidden" id="qstep-4">
                <div class="quiz-step-label"><span class="step-number">5</span> Ready?</div>
                <div class="quiz-summary" id="quiz-summary"></div>
                <button class="quiz-start-btn" id="quiz-start-btn">🚀 Start Quiz</button>
            </div>
        </div>
    `;

    setupLobbyListeners();
}
// Toggle subjects dropdown
function toggleSubjectsDropdown() {
    const menu = document.getElementById('subjects-dropdown-menu');
    const btn = document.getElementById('subjects-dropdown-btn');
    menu.classList.toggle('show');
    btn.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.subjects-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        const menu = document.getElementById('subjects-dropdown-menu');
        const btn = document.getElementById('subjects-dropdown-btn');
        if (menu) menu.classList.remove('show');
        if (btn) btn.classList.remove('open');
    }
});
// ===== PAST QUESTIONS MODE =====
function showPastQuestionsSidebar() {
    if (welcomeMessage) welcomeMessage.style.display = 'none';
    
    // Show loading state in sidebar
    categoriesList.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
            <div class="loading-spinner" style="display:inline-block;width:30px;height:30px;border:3px solid var(--border-color);border-top:3px solid var(--tab-active-bg);border-radius:50%;animation:spin 0.8s linear infinite;"></div>
            <p style="margin-top:12px;color:var(--text-secondary);font-size:0.9rem;">Loading past questions...</p>
        </div>
    `;
    sidebarTitle.innerHTML = '📄 Past Questions';
    
    // Show loading in questions area too
    questionsContainer.innerHTML = `
        <div class="loading-container" style="text-align:center;padding:60px 20px;">
            <div class="loading-spinner" style="display:inline-block;width:40px;height:40px;border:4px solid var(--border-color);border-top:4px solid var(--tab-active-bg);border-radius:50%;animation:spin 0.8s linear infinite;"></div>
            <p style="margin-top:16px;color:var(--text-secondary);font-size:1rem;">Loading past questions...</p>
        </div>
    `;
    
    // Use setTimeout to allow loading state to render, then check if data is ready
    setTimeout(() => {
        // Check if data is loaded
        const subjects = ['chemistry', 'physics', 'maths', 'biology', 'economics', 'government', 'crs', 'irs', 'literature'];
        const subjectEmojis = { chemistry: '🧪', physics: '⚛️', maths: '📐', biology: '🧬', economics: '📊', government: '🏛️', crs: '🕊️', irs: '☪️', literature: '📖' };
        
        // Check if any subject has data loaded
        let hasData = false;
        for (const subject of subjects) {
            if (allSubjectData[subject] && allSubjectData[subject].length > 0) {
                hasData = true;
                break;
            }
        }
        
        if (!hasData) {
            // Data not loaded yet - show retry option
            categoriesList.innerHTML = `
                <div style="text-align:center;padding:40px 20px;color:var(--text-secondary);">
                    <p style="font-size:1.2rem;margin-bottom:16px;">⏳ Data is still loading...</p>
                    <p style="font-size:0.9rem;margin-bottom:20px;">Please wait a moment or try refreshing.</p>
                    <button onclick="location.reload()" style="padding:10px 24px;background:var(--tab-active-bg);color:white;border:none;border-radius:8px;cursor:pointer;font-size:0.9rem;">
                        🔄 Refresh
                    </button>
                </div>
            `;
            questionsContainer.innerHTML = `
                <div class="welcome-message">
                    <h2>⏳ Loading...</h2>
                    <p>Please wait while questions are being loaded.</p>
                    <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:12px;">This may take a few seconds on slower connections.</p>
                </div>
            `;
            return;
        }
        
        // Data is ready - build the sidebar
        buildPastQuestionsSidebar();
    }, 300); // Give time for loading state to render
}

// Helper function to build the past questions sidebar
function buildPastQuestionsSidebar() {
    const subjects = ['chemistry', 'physics', 'maths', 'biology', 'economics', 'government', 'crs', 'irs', 'literature'];
    const subjectEmojis = { chemistry: '🧪', physics: '⚛️', maths: '📐', biology: '🧬', economics: '📊', government: '🏛️', crs: '🕊️', irs: '☪️', literature: '📖' };
    
    let html = '';
    
    subjects.forEach(subject => {
        const years = allSubjectYears[subject] || [];
        const displayName = subject.charAt(0).toUpperCase() + subject.slice(1);
        const subjectId = `past-subject-${subject}`;
        
        if (years.length === 0) {
            html += `
                <div class="course-group">
                    <div class="course-header" style="opacity:0.5;cursor:default;">
                        <h4>${subjectEmojis[subject]} ${displayName}</h4>
                        <span style="font-size:0.7rem;color:var(--text-secondary);">(No data)</span>
                    </div>
                </div>`;
        } else {
            html += `
                <div class="course-group">
                    <div class="course-header" data-course-id="${subjectId}">
                        <h4>${subjectEmojis[subject]} ${displayName}</h4>
                        <span class="dropdown-icon">▼</span>
                    </div>
                    <div class="course-topics" id="${subjectId}">
                        ${(() => {
    // Group years with same year number
    const yearGroups = {};
    years.forEach(yr => {
        if (!yearGroups[yr.year]) yearGroups[yr.year] = [];
        yearGroups[yr.year].push(yr);
    });
    
    let yearButtons = '';
    for (const [yearNum, entries] of Object.entries(yearGroups).sort((a, b) => b[0] - a[0])) {
        if (entries.length === 1 && !entries[0].paper) {
            // Single file, no paper type
            yearButtons += `
                <button class="topic-btn" data-subject="${subject}" data-year="${yearNum}" data-paper="">
                    📖 📅 ${yearNum}
                </button>`;
        } else {
            // Has paper types - show as sub-items
            yearButtons += `
                <div class="past-year-group">
                    <div class="past-year-header" style="font-weight:600;padding:8px 12px;color:var(--text-primary);font-size:0.85rem;">
                        📅 ${yearNum}
                    </div>`;
            entries.sort((a, b) => (a.paper || '').localeCompare(b.paper || ''));
            entries.forEach(entry => {
                yearButtons += `
                    <button class="topic-btn" data-subject="${subject}" data-year="${yearNum}" data-paper="${entry.paper || ''}" style="padding-left:28px;">
                        📖 ${entry.paper || 'Standard'}
                    </button>`;
            });
            yearButtons += `</div>`;
        }
    }
    return yearButtons;
})()}
                    </div>
                </div>`;
        }
    });
    
    categoriesList.innerHTML = html;
    sidebarTitle.innerHTML = '📄 Past Questions';
    
    // Set up event listeners for dropdowns
    document.querySelectorAll(".course-header").forEach(header => {
        header.addEventListener("click", (e) => {
            e.stopPropagation();
            const courseId = header.dataset.courseId;
            if (!courseId) return; // Skip if no data
            const topicsDiv = document.getElementById(courseId);
            if (!topicsDiv) return;
            document.querySelectorAll(".course-topics").forEach(div => { 
                if (div.id !== courseId) div.classList.remove("show"); 
            });
            document.querySelectorAll(".course-header").forEach(h => { 
                if (h.dataset.courseId !== courseId) h.classList.remove("open"); 
            });
            topicsDiv.classList.toggle("show");
            header.classList.toggle("open");
        });
    });
    
    // Set up event listeners for year buttons
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener("click", () => {
    document.querySelectorAll(".topic-btn").forEach(b => b.classList.remove("active-topic"));
    btn.classList.add("active-topic");
    const subject = btn.dataset.subject;
    const year = parseInt(btn.dataset.year);
    const paper = btn.dataset.paper || null;
    displayPastQuestions(subject, year, paper);
});
    });
    
    // Clear the questions area if no year is selected
    if (!document.querySelector('.topic-btn.active-topic')) {
        showWelcomeMessage();
    }
    
    autoOpenSidebarOnMobile();
}

function displayPastQuestions(subject, year, paper = null) {
    if (welcomeMessage) welcomeMessage.style.display = 'none';
    const quizTab = document.getElementById('quiz-mode-tab');
    if (quizTab) quizTab.classList.remove('active');
    
    // Check if data is loaded
    const data = allSubjectData[subject] || [];
    if (data.length === 0) {
        questionsContainer.innerHTML = `
            <div class="loading-container" style="text-align:center;padding:60px 20px;">
                <div class="loading-spinner" style="display:inline-block;width:40px;height:40px;border:4px solid var(--border-color);border-top:4px solid var(--tab-active-bg);border-radius:50%;animation:spin 0.8s linear infinite;"></div>
                <p style="margin-top:16px;color:var(--text-secondary);font-size:1rem;">Loading ${subject.charAt(0).toUpperCase() + subject.slice(1)} ${year} questions...</p>
                <p style="margin-top:8px;font-size:0.85rem;color:var(--text-secondary);">Please wait, data is still loading...</p>
            </div>
        `;
        // Try reloading data
        loadQuestions(subject).then(() => {
            // Retry after data loads
            setTimeout(() => {
                displayPastQuestions(subject, year);
            }, 500);
        });
        return;
    }
    
    // Show loading state immediately
    questionsContainer.innerHTML = `
        <div class="loading-container" style="text-align:center;padding:60px 20px;">
            <div class="loading-spinner" style="display:inline-block;width:40px;height:40px;border:4px solid var(--border-color);border-top:4px solid var(--tab-active-bg);border-radius:50%;animation:spin 0.8s linear infinite;"></div>
            <p style="margin-top:16px;color:var(--text-secondary);font-size:1rem;">Loading ${subject.charAt(0).toUpperCase() + subject.slice(1)} ${year} questions...</p>
        </div>
    `;
    
    // Use setTimeout to allow the loading state to render
    setTimeout(() => {
        // Read DIRECTLY from allSubjectData - never touch questionsData
        let allQuestions = data.filter(q => {
    if (q.year !== year) return false;
    if (paper) return q.paper === paper;
    return true; // Show all if no specific paper selected
});
        
        const subjectEmojis = { chemistry: '🧪', physics: '⚛️', maths: '📐', biology: '🧬', economics: '📊', government: '🏛️', crs: '🕊️', irs: '☪️', literature: '📖' };
        const displayName = subject.charAt(0).toUpperCase() + subject.slice(1);
        
        if (allQuestions.length === 0) {
            questionsContainer.innerHTML = `<div class="welcome-message"><h2>📭 No questions found</h2><p>No questions for ${displayName} ${year}.</p></div>`;
            return;
        }
        
        // SEPARATE Objective and Essay questions
        const objectiveQuestions = allQuestions.filter(q => q.type === "Objective");
        const essayQuestions = allQuestions.filter(q => q.type === "Essay");
        
        // Sort objective questions by question number
        objectiveQuestions.sort((a, b) => {
            const aNum = parseInt(a.questionNumber) || 0;
            const bNum = parseInt(b.questionNumber) || 0;
            return aNum - bNum;
        });
        
        // Sort essay questions by question number
        essayQuestions.sort((a, b) => {
            const aNum = parseInt(a.questionNumber) || 0;
            const bNum = parseInt(b.questionNumber) || 0;
            return aNum - bNum;
        });
        
        // Build the HTML
        let questionsHtml = `
            <div class="past-questions-header">
                <div>
                    <h2 style="margin-bottom:4px;color:#0d6efd;">${subjectEmojis[subject]} ${displayName} — <span style="color:#059669;">${year}</span></h2>
                    <p style="color:#6c757d;font-size:0.9rem;margin-bottom:0;">${objectiveQuestions.length} Objective • ${essayQuestions.length} Essay</p>
                </div>
<button class="past-take-quiz-btn" onclick="takePastQuestionsAsQuiz('${subject}', ${year}, '${paper || ''}')">
                    📝 Take This as a Quiz
                </button>
            </div>`;
        
        // --- SECTION 1: OBJECTIVE QUESTIONS ---
        if (objectiveQuestions.length > 0) {
            questionsHtml += `
                <div class="past-section-header">
                    <h3 style="color:#0d6efd;font-size:1.2rem;margin:24px 0 16px 0;padding-bottom:8px;border-bottom:2px solid var(--border-color);">
                        📝 Multiple-Choice Questions
                    </h3>
                </div>`;
            
            let questionIndex = 1;
            objectiveQuestions.forEach((q) => {
                questionsHtml += buildQuestionCard(q, year, questionIndex);
                questionIndex++;
            });
        }
        
        // --- SECTION 2: ESSAY QUESTIONS ---
        if (essayQuestions.length > 0) {
            questionsHtml += `
                <div class="past-section-header">
                    <h3 style="color:#059669;font-size:1.2rem;margin:32px 0 16px 0;padding-bottom:8px;border-bottom:2px solid var(--border-color);">
                        ✍️ Essay Questions
                    </h3>
                </div>`;
            
            let questionIndex = 1;
            essayQuestions.forEach((q) => {
                questionsHtml += buildQuestionCard(q, year, questionIndex);
                questionIndex++;
            });
        }

        questionsContainer.innerHTML = questionsHtml;

// Re-render MathJax for new LaTeX content
if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([questionsContainer]).catch(err => console.log('MathJax error:', err));
}      

        // Set up event listeners for show answer buttons
        document.querySelectorAll('.show-answer-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const qIdx = btn.dataset.qIdx;
                const answerDisplay = document.getElementById(`answer-${qIdx}`);
                if (answerDisplay.classList.contains('show')) {
                    answerDisplay.classList.remove('show');
                    btn.textContent = '🔍 Show Answer';
                    document.getElementById(`options-list-${qIdx}`)?.querySelectorAll('.option-item').forEach(opt => opt.classList.remove('option-correct-highlight'));
                } else {
                    answerDisplay.classList.add('show');
                    btn.textContent = '🙈 Hide Answer';
                    const answer = btn.dataset.answer;
                    document.getElementById(`options-list-${qIdx}`)?.querySelectorAll('.option-item').forEach(opt => {
                        if (opt.dataset.option === answer.toUpperCase()) opt.classList.add('option-correct-highlight');
                    });
                }
            });
        });

        document.querySelectorAll('.show-essay-answer-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const essayIdx = btn.dataset.essayIdx;
                const answerDisplay = document.getElementById(`essay-answer-${essayIdx}`);
                if (answerDisplay.style.display === 'none') {
                    answerDisplay.style.display = 'block';
                    btn.textContent = '🙈 Hide Model Answer';
                } else {
                    answerDisplay.style.display = 'none';
                    btn.textContent = '📝 Show Model Answer';
                }
            });
        });

        document.getElementById("questions-area").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // Small delay to ensure loading state renders
}

function buildQuestionCard(q, year, questionIndex) {
    const qNumberDisplay = q.questionNumber.toString().padStart(2, '0');
    const optionLabels = ['A','B','C','D','E','F'];
    let html = `<div class="question-card" data-question-idx="${questionIndex}">
        <div class="question-header">
            <span class="question-year">📅 ${year}</span>
            <span class="question-number-badge">🔢 Q${qNumberDisplay}</span>
            <span class="question-type">${q.type === "Objective" ? "🔘 Multiple Choice" : "✍️ Essay"}</span>
            ${q.diagramMissing ? '<span class="question-diagram-badge">⚠️ Missing Diagram</span>' : ''}
        </div>
        ${renderQuestionBody(q)}`;
    if (q.diagramMissing) html += `<div style="background:var(--warning-bg);border-left:4px solid var(--warning-border);padding:12px;margin:12px 0;border-radius:6px;color:var(--warning-text);">⚠️ <strong>Diagram Missing</strong><br>${escapeHtml(q.diagramNote || 'Refer to original paper.')}</div>`;
    if (q.type === "Objective" && q.options?.length > 0) {
        html += `<ul class="options-list" id="options-list-${questionIndex}">`;
        q.options.forEach((opt, optIdx) => {
            if (opt?.trim()) html += `<li class="option-item" data-option="${optionLabels[optIdx]}"><strong>${optionLabels[optIdx]})</strong> ${escapeHtml(opt)}</li>`;
        });
        html += `</ul>`;
        if (q.answer && q.explanation) html += `<button class="show-answer-btn" data-q-idx="${questionIndex}" data-answer="${q.answer}" data-explanation="${escapeHtml(q.explanation)}">🔍 Show Answer</button><div class="answer-display" id="answer-${questionIndex}"><div class="correct-answer">✅ Correct Answer: ${q.answer}</div><div class="explanation">💡 ${formatModelAnswer(q.explanation)}</div></div>`;
    }
    if (q.type === "Essay") {
        if (q.modelAnswer) html += `<button class="show-essay-answer-btn" data-essay-idx="${questionIndex}">📝 Show Model Answer</button><div class="essay-answer-display" id="essay-answer-${questionIndex}" style="display:none;"><div class="model-answer"><strong>📖 Model Answer:</strong><br>${formatModelAnswer(q.modelAnswer)}</div></div>`;
        else if (!q.diagramMissing) html += `<div class="essay-note">📝 Essay question (answer in your notebook)</div>`;
    }
    return html + `</div>`;
}
// ===== FORMAT MODEL ANSWER =====
function formatModelAnswer(text) {
    if (!text) return "";
    
    const paragraphs = text.split("\n\n");
    
    return paragraphs.map(paragraph => {
        const lines = paragraph.split("\n");
        const firstLine = lines[0] || "";
        
        const isHeader = /^\([iIvVxX]+\)\s|^Final Answers|^Finding|^Actual directions|^Step\s\d/.test(firstLine);
        
        let paragraphHtml;
        
        if (isHeader) {
            const header = escapeHtml(firstLine);
            const restLines = lines.slice(1);
            const restHtml = processLinesForVisuals(restLines);
            paragraphHtml = `<strong style="display:block;margin-top:12px;color:#17a2b8;">${header}</strong>${restHtml ? `<br>${restHtml}` : ''}`;
        } else {
            paragraphHtml = processLinesForVisuals(lines);
        }
        
        return paragraphHtml;
    }).join("<div style='height:10px;'></div>");
}
// ===== PROCESS LINES FOR VISUALS (IMAGES & TABLES) =====
function processLinesForVisuals(lines) {
    const imageRegex = /\[IMAGE:\s*([^\|]+)\s*\|\s*([^\]]+)\]/g;
    const tableRegex = /\[TABLE:\s*([^\]]+)\]/g;
    
    return lines.map(line => {
        // 1. Check for TABLE marker first
        if (tableRegex.test(line)) {
            return line.replace(tableRegex, (match, tableData) => {
                return renderTableFromMarker(tableData);
            });
        }
        
        // 2. Check for IMAGE marker
        if (imageRegex.test(line)) {
            return line.replace(imageRegex, (match, src, alt) => {
                return `<div class="question-diagram" style="margin:12px 0;"><img src="${src.trim()}" alt="${escapeHtml(alt.trim())}" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" /></div>`;
            });
        }
        
        // 3. Plain text — escape it
        return escapeHtml(line);
    }).join("<br>");
}

// ===== RENDER TABLE FROM MARKER =====
function renderTableFromMarker(tableData) {
    // Format: col1 | col2 | col3 | row1c1 | row1c2 | row1c3 | row2c1 | row2c2 | row2c3 | ...
    const cells = tableData.split("|").map(cell => cell.trim());
    
    // First 3 cells are headers
    const headers = cells.slice(0, 3);
    const rowData = cells.slice(3);
    
    let html = `<div class="question-table-wrap"><table class="question-table">`;
    html += `<thead><tr>${headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>`;
    html += `<tbody>`;
    
    for (let i = 0; i < rowData.length; i += 3) {
        const rowCells = rowData.slice(i, i + 3);
        html += `<tr>${rowCells.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`;
    }
    
    html += `</tbody></table></div>`;
    return html;
}

function processLinesForImages(lines) {
    const imageRegex = /\[IMAGE:\s*([^\|]+)\s*\|\s*([^\]]+)\]/g;
    
    return lines.map(line => {
        // Check if this line contains an image marker
        if (imageRegex.test(line)) {
            return line.replace(imageRegex, (match, src, alt) => {
                return `<div class="question-diagram" style="margin:12px 0;"><img src="${src.trim()}" alt="${escapeHtml(alt.trim())}" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" /></div>`;
            });
        }
        return escapeHtml(line);
    }).join("<br>");
}

function takePastQuestionsAsQuiz(subject, year, paper = null) {
    currentSubject = subject;
    questionsData = allSubjectData[subject] || [];
    window.currentSubjectYears = allSubjectYears[subject] || [];
    quizState.subject = subject;
    quizState.mode = 'exam';
    quizState.filter = { year: year, paper: paper };
    quizState.selectedTopics = [];
    quizState.timed = false;
    quizState.totalTime = 0;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const quizTab = document.getElementById('quiz-mode-tab');
    if (quizTab) quizTab.classList.add('active');
    clearQuizTimer();
    showQuizLobby();
    setTimeout(() => {
        const examCard = document.querySelector('.quiz-mode-card[data-mode="exam"]');
        if (examCard) examCard.click();
        setTimeout(() => {
    const yearBtn = document.querySelector(`.quiz-year-btn[data-filter="${year}"][data-paper="${paper || ''}"]`);
    if (yearBtn) yearBtn.click();
}, 150);
    }, 100);
}

function setupLobbyListeners() {
    // Subject dropdown in quiz lobby
const quizSubjectSelect = document.getElementById('quiz-subject-select');
if (quizSubjectSelect) {
    quizSubjectSelect.addEventListener('change', () => {
        const newSubject = quizSubjectSelect.value;
        if (newSubject === currentSubject) return;
        
        currentSubject = newSubject;
        quizState.subject = newSubject;
        questionsData = allSubjectData[currentSubject] || [];
        window.currentSubjectYears = allSubjectYears[currentSubject] || [];
        
        quizState.mode = null;
        quizState.filter = null;
        quizState.selectedTopics = [];
        document.querySelectorAll('.quiz-mode-card').forEach(c => c.classList.remove('selected'));
        document.querySelectorAll('.quiz-timer-btn').forEach(b => { 
            b.classList.remove('active'); 
            if (b.dataset.time === '0') b.classList.add('active'); 
        });
        quizState.timed = false;
        quizState.totalTime = 0;
        
        ['qstep-2','qstep-3','qstep-4'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });
        
        showQuizLobby();
    });
}
    
    document.querySelectorAll('.quiz-mode-card:not([disabled])').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.quiz-mode-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            quizState.mode = card.dataset.mode;
            quizState.filter = null;
            quizState.selectedTopics = [];
            quizState.timed = false;
            quizState.totalTime = 0;
            document.querySelectorAll('.quiz-timer-btn').forEach(b => { b.classList.remove('active'); if (b.dataset.time === '0') b.classList.add('active'); });
            showQuizStep2();
        });
    });
}

function showQuizStep2() {
    ['qstep-3','qstep-4'].forEach(id => { const el = document.getElementById(id); if (el) el.classList.add('hidden'); });

    if (quizState.mode === 'weak') {
        document.getElementById('qstep-2').classList.add('hidden');
        quizState.filter = 'weak';
        showQuizStep3();
        return;
    }

    const step2 = document.getElementById('qstep-2');
    const label = document.getElementById('qstep-2-label');
    const filterOptions = document.getElementById('quiz-filter-options');
    step2.classList.remove('hidden');
    step2.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (quizState.mode === 'practice') {
        label.textContent = 'Select Topics or Random';
        const allTopics = getAllTopicsForSubject();
        filterOptions.innerHTML = `
            <div class="quiz-filter-search"><input type="text" id="topic-search" placeholder="🔍 Search topics..." class="quiz-search-input"></div>
            <p class="multi-select-hint">Select specific topics, or leave empty for random mix. Selected: <span id="selected-count">0</span></p>
            <div class="quiz-filter-list" id="topic-filter-list">
                ${allTopics.map(t => `<button class="quiz-filter-btn multi-select-topic" data-filter="${escapeHtml(t.name)}"><span>${escapeHtml(t.name)}</span><span class="filter-count">${t.count}q</span></button>`).join('')}
            </div>
            <button class="quiz-confirm-topics-btn" id="confirm-topics-btn">Continue (Random Mix)</button>`;
        
        document.getElementById('topic-search').addEventListener('input', function() {
            const q = this.value.toLowerCase();
            document.querySelectorAll('#topic-filter-list .quiz-filter-btn').forEach(btn => {
                btn.style.display = btn.dataset.filter.toLowerCase().includes(q) ? '' : 'none';
            });
        });

        document.querySelectorAll('.multi-select-topic').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const topicName = btn.dataset.filter;
                if (quizState.selectedTopics.includes(topicName)) {
                    quizState.selectedTopics = quizState.selectedTopics.filter(t => t !== topicName);
                    btn.classList.remove('selected');
                } else {
                    quizState.selectedTopics.push(topicName);
                    btn.classList.add('selected');
                }
                const countEl = document.getElementById('selected-count');
                const confirmBtn = document.getElementById('confirm-topics-btn');
                if (countEl) countEl.textContent = quizState.selectedTopics.length;
                if (confirmBtn) confirmBtn.textContent = `Continue (${quizState.selectedTopics.length === 0 ? 'Random Mix' : quizState.selectedTopics.length + ' topic(s)'})`;
            });
        });

        document.getElementById('confirm-topics-btn').addEventListener('click', () => {
            quizState.filter = quizState.selectedTopics.length > 0 ? quizState.selectedTopics : 'all';
            showQuizStep3();
        });

    } else if (quizState.mode === 'exam') {
    label.textContent = 'Select Exam Year & Paper';
    
    // Build list of unique year-paper combinations
    const yearPapers = [];
    questionsData.forEach(q => {
        const key = `${q.year}|||${q.paper || 'standard'}`;
        if (!yearPapers.find(yp => yp.key === key)) {
            yearPapers.push({ 
                key, 
                year: q.year, 
                paper: q.paper, 
                label: q.paper ? `${q.year} — ${q.paper}` : `${q.year}`,
                count: 0 
            });
        }
        const entry = yearPapers.find(yp => yp.key === key);
        if (q.type === 'Objective' && q.options && q.options.length > 0 && q.answer) {
            entry.count++;
        }
    });
    
    const yearsWithCounts = yearPapers
        .filter(yp => yp.count > 0)
        .sort((a, b) => b.year - a.year || (a.paper || '').localeCompare(b.paper || ''));
        
        if (yearsWithCounts.length === 0) {
            filterOptions.innerHTML = `<p class="no-data-message">No quiz-ready questions found.</p>`;
        } else {
filterOptions.innerHTML = `<div class="quiz-year-grid">${yearsWithCounts.map(y => `<button class="quiz-year-btn" data-filter="${y.year}" data-paper="${y.paper || ''}"><span class="year-num">${y.label}</span><span class="year-count">${y.count}q</span></button>`).join('')}</div>`;
            filterOptions.querySelectorAll('.quiz-year-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    filterOptions.querySelectorAll('.quiz-year-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    quizState.filter = { year: parseInt(btn.dataset.filter), paper: btn.dataset.paper || null };
                    showQuizStep3();
                });
            });
        }
    }
}

function showQuizStep3() {
    const available = getAvailableQuestions().length;
    quizState.count = Math.min(available, quizState.mode === 'practice' ? 50 : available);
    ['qstep-3'].forEach(id => { const el = document.getElementById(id); if (el) el.classList.add('hidden'); });
    showQuizStep4();
}

function showQuizStep4() {
    const step4 = document.getElementById('qstep-3');
    step4.classList.remove('hidden');
    step4.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    document.getElementById('qstep-4').classList.add('hidden');

    document.querySelectorAll('.quiz-timer-btn').forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });
    document.querySelectorAll('.quiz-timer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.quiz-timer-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const t = parseInt(btn.dataset.time);
            quizState.timed = t > 0;
            quizState.totalTime = t;
            showQuizStep5();
        });
    });

    showQuizStep5();
}

function showQuizStep5() {
    const step5 = document.getElementById('qstep-4');
    step5.classList.remove('hidden');
    step5.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    const modeLabels = {
        practice: quizState.filter === 'all' ? 'Random Practice' : 'Selected Topics',
        exam: `Past Exam: ${quizState.filter.paper ? quizState.filter.year + ' — ' + quizState.filter.paper : quizState.filter.year}`,
        weak: 'Weak Areas Focus'
    };
    const modeLabel = modeLabels[quizState.mode] || quizState.mode;
    const timerLabel = !quizState.timed ? 'No timer' : quizState.totalTime >= 3600 ? `${quizState.totalTime/3600}h` : `${quizState.totalTime/60} min`;
    const finalCount = Math.min(quizState.count, getAvailableQuestions().length);

    document.getElementById('quiz-summary').innerHTML = `
        <div class="quiz-summary-grid">
            <div class="qs-item"><span class="qs-label">Subject</span><span class="qs-value">${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)}</span></div>
            <div class="qs-item"><span class="qs-label">Mode</span><span class="qs-value">${modeLabel}</span></div>
            <div class="qs-item"><span class="qs-label">Questions</span><span class="qs-value">${finalCount}</span></div>
            <div class="qs-item"><span class="qs-label">Timer</span><span class="qs-value">${timerLabel}</span></div>
        </div>`;

    const startBtn = document.getElementById('quiz-start-btn');
    const newBtn = startBtn.cloneNode(true);
    startBtn.parentNode.replaceChild(newBtn, startBtn);
    document.getElementById('quiz-start-btn').addEventListener('click', () => startQuiz());
}

// ----- HELPERS -----
function getAllTopicsForSubject() {
    const courses = courseStructure[currentSubject] || {};
    const result = [];
    for (const topics of Object.values(courses)) {
        for (const topic of topics) {
            const count = questionsData.filter(q => q.category === topic && q.type === 'Objective').length;
            if (count > 0) result.push({ name: topic, count });
        }
    }
    return result;
}

function getAvailableQuestions() {
    let pool = questionsData.filter(q => q.type === 'Objective' && q.options && q.options.length > 0 && q.answer &&
        !q.diagramMissing);
    
    if (quizState.mode === 'practice') {
        if (quizState.filter !== 'all') {
            const topics = Array.isArray(quizState.filter) ? quizState.filter : [quizState.filter];
            pool = pool.filter(q => topics.includes(q.category));
        }
        if (pool.length > 50) pool = shuffleArray(pool).slice(0, 50);
    } else if (quizState.mode === 'exam') {
    const filter = quizState.filter;
    pool = pool.filter(q => {
        if (q.year !== filter.year) return false;
        if (filter.paper) return q.paper === filter.paper;
        return true;
    });
} else if (quizState.mode === 'weak') {
        const weakTopics = getWeakTopics();
        if (weakTopics.length > 0) pool = pool.filter(q => weakTopics.includes(q.category));
    }
    return pool;
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2,'0')}`;
}

// ----- PERSISTENT DATA -----
function loadQuizPersistentData() {
    try {
        const weak = localStorage.getItem('jupeb_weak_areas');
        if (weak) {
            const parsed = JSON.parse(weak);
            if (typeof parsed === 'object' && !Array.isArray(parsed)) quizState.weakAreas = parsed;
            else { quizState.weakAreas = {}; localStorage.removeItem('jupeb_weak_areas'); }
        }
        const hist = localStorage.getItem('jupeb_quiz_history');
        if (hist) {
            const parsed = JSON.parse(hist);
            if (Array.isArray(parsed)) quizState.history = parsed;
            else { quizState.history = []; localStorage.removeItem('jupeb_quiz_history'); }
        }
    } catch(e) {
        quizState.weakAreas = {};
        quizState.history = [];
    }
}

function saveQuizPersistentData() {
    try {
        localStorage.setItem('jupeb_weak_areas', JSON.stringify(quizState.weakAreas));
        localStorage.setItem('jupeb_quiz_history', JSON.stringify(quizState.history.slice(-50)));
    } catch(e) {}
}

function updateWeakAreas(questions, answers) {
    if (!quizState.weakAreas[currentSubject]) quizState.weakAreas[currentSubject] = {};
    questions.forEach((q, i) => {
        const cat = q.category;
        if (!quizState.weakAreas[currentSubject][cat]) quizState.weakAreas[currentSubject][cat] = { attempts: 0, correct: 0 };
        quizState.weakAreas[currentSubject][cat].attempts++;
        if (answers[i] && answers[i].toUpperCase() === q.answer.toUpperCase()) quizState.weakAreas[currentSubject][cat].correct++;
    });
    saveQuizPersistentData();
}

// ----- START QUIZ -----
function startQuiz() {
    const pool = shuffleArray(getAvailableQuestions());
    const finalCount = Math.min(quizState.count, pool.length);
    quizState.questions = pool.slice(0, finalCount).map(q => shuffleOptions(q));
    quizState.currentIndex = 0;
    quizState.answers = {};
    quizState.flagged = new Set();
    quizState.submitted = false;
    quizState.startTime = Date.now();
    quizState.timeRemaining = quizState.totalTime;
    renderQuizExam();
    if (quizState.timed && quizState.totalTime > 0) startTimer();
}

function startTimer() {
    clearInterval(quizState.timerInterval);
    quizState.timerInterval = setInterval(() => {
        quizState.timeRemaining--;
        updateTimerDisplay();
        if (quizState.timeRemaining <= 0) { clearInterval(quizState.timerInterval); submitQuiz(true); }
    }, 1000);
}

function updateTimerDisplay() {
    const el = document.getElementById('quiz-timer-display');
    if (!el) return;
    el.textContent = formatTime(quizState.timeRemaining);
    if (quizState.timeRemaining <= 300) el.classList.add('timer-warning');
}

// ----- RENDER EXAM -----
function renderQuizExam() {
    const q = quizState.questions[quizState.currentIndex];
    const total = quizState.questions.length;
    const answered = Object.keys(quizState.answers).length;
    const progress = Math.round((answered / total) * 100);
    const optionLabels = ['A','B','C','D','E'];

    const navDots = quizState.questions.map((_, i) => {
        let cls = 'nav-dot';
        if (i === quizState.currentIndex) cls += ' current';
        else if (quizState.answers[i] !== undefined) cls += ' answered';
        if (quizState.flagged.has(i)) cls += ' flagged';
        return `<button class="${cls}" data-idx="${i}">${i+1}</button>`;
    }).join('');

    questionsContainer.innerHTML = `
        <div class="quiz-exam-wrapper">
            <div class="quiz-top-bar">
                <div class="quiz-meta">
                    <span class="quiz-progress-text">${quizState.currentIndex + 1} / ${total}</span>
                    <div class="quiz-progress-bar-wrap"><div class="quiz-progress-bar-fill" style="width:${progress}%"></div></div>
                    <span class="quiz-stats-inline">${answered} answered · ${quizState.flagged.size} flagged</span>
                </div>
                <div class="quiz-top-actions">
                    ${quizState.timed ? `<div class="quiz-timer-box"><span>⏱</span><span id="quiz-timer-display">${formatTime(quizState.timeRemaining)}</span></div>` : ''}
                    <button class="quiz-submit-early-btn" id="quiz-submit-early">Submit</button>
                </div>
            </div>
            <div class="quiz-navigator" id="quiz-navigator">${navDots}</div>
           <div class="quiz-question-card">
                <div class="quiz-q-meta">
                    <span class="quiz-q-badge year-badge">📅 ${q.year}</span>
                    <span class="quiz-q-badge num-badge">🔢 Q${q.questionNumber.toString().padStart(2, '0')}</span>
                    <span class="quiz-q-badge cat-badge">🏷️ ${escapeHtml(q.category)}</span>
                    ${q.diagramMissing ? '<span class="quiz-q-badge diagram-badge">⚠️ Diagram</span>' : ''}
                    ${quizState.flagged.has(quizState.currentIndex) ? '<span class="quiz-q-badge flag-badge">🚩 Flagged</span>' : ''}
                </div>
                ${renderQuestionBody(q)}
                <div class="quiz-options" id="quiz-options">
                    ${q.options.filter(o => o && o.trim()).map((opt, i) => {
                        const label = optionLabels[i];
                        const isSelected = quizState.answers[quizState.currentIndex] === label;
                        return `<button class="quiz-option-btn ${isSelected ? 'selected' : ''}" data-label="${label}"><span class="option-label">${label}</span><span class="option-text">${escapeHtml(opt)}</span></button>`;
                    }).join('')}
                </div>
                <div class="quiz-card-actions">
                    <button class="quiz-flag-btn ${quizState.flagged.has(quizState.currentIndex) ? 'flagged' : ''}" id="quiz-flag-btn">${quizState.flagged.has(quizState.currentIndex) ? '🚩 Unflag' : '🏳️ Flag'}</button>
                    <div class="quiz-nav-btns">
                        <button class="quiz-prev-btn" id="quiz-prev-btn" ${quizState.currentIndex === 0 ? 'disabled' : ''}>← Prev</button>
                        <button class="quiz-next-btn" id="quiz-next-btn">${quizState.currentIndex === total - 1 ? 'Review →' : 'Next →'}</button>
                    </div>
                </div>
            </div>
        </div>`;
// Re-render MathJax for new LaTeX content
if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([questionsContainer]).catch(err => console.log('MathJax error:', err));
}

    setupExamListeners();
    updateTimerDisplay();
}

function setupExamListeners() {
    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            quizState.answers[quizState.currentIndex] = btn.dataset.label;
            document.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            updateNavigatorDot(quizState.currentIndex);
        });
    });
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.addEventListener('click', () => { quizState.currentIndex = parseInt(dot.dataset.idx); renderQuizExam(); });
    });
    document.getElementById('quiz-prev-btn').addEventListener('click', () => {
        if (quizState.currentIndex > 0) { quizState.currentIndex--; renderQuizExam(); }
    });
    document.getElementById('quiz-next-btn').addEventListener('click', () => {
        if (quizState.currentIndex < quizState.questions.length - 1) { quizState.currentIndex++; renderQuizExam(); }
        else showQuizReviewScreen();
    });
    document.getElementById('quiz-flag-btn').addEventListener('click', () => {
        if (quizState.flagged.has(quizState.currentIndex)) quizState.flagged.delete(quizState.currentIndex);
        else quizState.flagged.add(quizState.currentIndex);
        renderQuizExam();
    });
    document.getElementById('quiz-submit-early').addEventListener('click', () => showQuizReviewScreen());
}

function updateNavigatorDot(idx) {
    const dot = document.querySelector(`.nav-dot[data-idx="${idx}"]`);
    if (!dot) return;
    dot.classList.remove('current');
    if (quizState.answers[idx] !== undefined) dot.classList.add('answered');
    if (quizState.flagged.has(idx)) dot.classList.add('flagged');
}

// ----- REVIEW SCREEN -----
function showQuizReviewScreen() {
    const total = quizState.questions.length;
    const answered = Object.keys(quizState.answers).length;
    const unanswered = total - answered;
    const flaggedList = [...quizState.flagged];

    questionsContainer.innerHTML = `
        <div class="quiz-review-screen">
            <h2>📋 Review Before Submitting</h2>
            <div class="quiz-review-stats">
                <div class="review-stat"><span class="rs-num">${total}</span><span class="rs-label">Total</span></div>
                <div class="review-stat answered"><span class="rs-num">${answered}</span><span class="rs-label">Answered</span></div>
                <div class="review-stat unanswered"><span class="rs-num">${unanswered}</span><span class="rs-label">Unanswered</span></div>
                <div class="review-stat flagged-stat"><span class="rs-num">${flaggedList.length}</span><span class="rs-label">Flagged</span></div>
            </div>
            ${flaggedList.length > 0 ? `<div class="review-flagged-section">🚩 Flagged: ${flaggedList.map(i => `<button class="review-jump-btn" data-idx="${i}">Q${i+1}</button>`).join('')}</div>` : ''}
            ${unanswered > 0 ? `<p class="review-warning">⚠️ ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}.</p>` : '<p class="review-all-done">✅ All questions answered!</p>'}
            <div class="review-actions">
                <button class="review-back-btn" id="review-back-btn">← Continue Quiz</button>
                <button class="review-submit-btn" id="review-submit-btn">✅ Submit & See Results</button>
            </div>
        </div>`;

    document.querySelectorAll('.review-jump-btn').forEach(btn => {
        btn.addEventListener('click', () => { quizState.currentIndex = parseInt(btn.dataset.idx); renderQuizExam(); });
    });
    document.getElementById('review-back-btn').addEventListener('click', () => renderQuizExam());
    document.getElementById('review-submit-btn').addEventListener('click', () => submitQuiz(false));
}

// ----- SUBMIT & DEBRIEF -----
function submitQuiz(timeUp = false) {
    clearInterval(quizState.timerInterval);
    quizState.submitted = true;
    const questions = quizState.questions;
    const answers = quizState.answers;
    const total = questions.length;
    let correct = 0, incorrect = 0, skipped = 0;

    questions.forEach((q, i) => {
        if (answers[i] === undefined) skipped++;
        else if (answers[i].toUpperCase() === q.answer.toUpperCase()) correct++;
        else incorrect++;
    });

    const score = Math.round((correct / total) * 100);
    const timeTaken = Math.round((Date.now() - quizState.startTime) / 1000);

    updateWeakAreas(questions, answers);
    quizState.history.push({ date: new Date().toLocaleDateString(), subject: currentSubject, mode: quizState.mode, total, correct, score, timeTaken });
    saveQuizPersistentData();

    const topicBreakdown = {};
    questions.forEach((q, i) => {
        const cat = q.category;
        if (!topicBreakdown[cat]) topicBreakdown[cat] = { correct: 0, total: 0 };
        topicBreakdown[cat].total++;
        if (answers[i] && answers[i].toUpperCase() === q.answer.toUpperCase()) topicBreakdown[cat].correct++;
    });

    const gradeInfo = getGrade(score);
    const circumference = 327;
    const dashOffset = circumference - (circumference * score / 100);

    questionsContainer.innerHTML = `
        <div class="quiz-debrief">
            ${timeUp ? '<div class="time-up-banner">⏰ Time Up! Auto-Submitted</div>' : ''}
            <div class="debrief-hero">
                <div class="debrief-score-ring">
                    <svg viewBox="0 0 120 120" class="score-ring-svg"><circle cx="60" cy="60" r="52" class="ring-track"/><circle cx="60" cy="60" r="52" class="ring-fill" style="stroke-dashoffset:${dashOffset}"/></svg>
                    <div class="score-ring-label"><span class="score-pct">${score}%</span><span class="score-grade" style="color:${gradeInfo.color}">${gradeInfo.grade}</span></div>
                </div>
                <div class="debrief-summary-text">
                    <h2>${gradeInfo.message}</h2>
                    <div class="debrief-stats-row">
                        <div class="ds-item correct-item"><span class="ds-num">${correct}</span><span class="ds-label">✅ Correct</span></div>
                        <div class="ds-item incorrect-item"><span class="ds-num">${incorrect}</span><span class="ds-label">❌ Wrong</span></div>
                        <div class="ds-item skipped-item"><span class="ds-num">${skipped}</span><span class="ds-label">⏭️ Skipped</span></div>
                    </div>
                    <p class="debrief-time">⏱ Time taken: ${formatTime(timeTaken)}</p>
                </div>
            </div>
            <div class="debrief-section">
                <h3>📊 Performance by Topic</h3>
                <div class="topic-breakdown">
                    ${Object.entries(topicBreakdown).sort((a,b) => (a[1].correct/a[1].total) - (b[1].correct/b[1].total)).map(([cat, data]) => {
                        const pct = Math.round((data.correct / data.total) * 100);
                        const barColor = pct >= 70 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
                        return `<div class="topic-row"><span class="topic-name">${escapeHtml(cat)}</span><div class="topic-bar-wrap"><div class="topic-bar" style="width:${pct}%;background:${barColor}"></div></div><span class="topic-pct" style="color:${barColor}">${data.correct}/${data.total}</span></div>`;
                    }).join('')}
                </div>
            </div>
            <div class="debrief-actions">
                <button class="da-btn primary" id="review-answers-btn">🔍 Review Answers</button>
                <button class="da-btn secondary" id="retry-wrong-btn" ${incorrect === 0 ? 'disabled' : ''}>🔁 Retry Wrong (${incorrect})</button>
                <button class="da-btn secondary" id="new-quiz-btn">➕ New Quiz</button>
            </div>
            <div id="answer-review-section" style="display:none">
                <div class="debrief-section">
                    <h3>🔍 Question Review</h3>
                    ${questions.map((q, i) => {
                        const userAns = answers[i];
                        const correctAns = q.answer.toUpperCase();
                        const isCorrect = userAns && userAns.toUpperCase() === correctAns;
                        const isSkipped = !userAns;
                        const optLabels = ['A','B','C','D','E'];
                        return `<div class="review-q-card ${isCorrect ? 'rq-correct' : isSkipped ? 'rq-skipped' : 'rq-wrong'}">
                            <div class="rq-header">
                                <span class="rq-num">Q${i+1}</span><span class="rq-year">📅 ${q.year}</span><span class="rq-paper-num">📄 Paper Q${q.questionNumber.toString().padStart(2, '0')}</span><span class="rq-cat">🏷️ ${escapeHtml(q.category)}</span>${q.diagramMissing ? '<span class="rq-diagram-badge">⚠️</span>' : ''}<span class="rq-status">${isCorrect ? '✅' : isSkipped ? '⏭️' : '❌'}</span>
                            </div>
                            <div class="rq-question">${escapeHtml(q.question)}</div>
                            <div class="rq-options">
                                ${q.options.filter(o => o && o.trim()).map((opt, oi) => {
                                    const label = optLabels[oi];
                                    let cls = 'rq-opt';
                                    if (label === correctAns) cls += ' rq-opt-correct';
                                    else if (label === userAns) cls += ' rq-opt-wrong';
                                    return `<div class="${cls}"><strong>${label})</strong> ${escapeHtml(opt)}</div>`;
                                }).join('')}
                            </div>
                            ${!isCorrect && !isSkipped ? `<div class="rq-your-ans">Your answer: <strong>${userAns}</strong></div>` : ''}
                            <div class="rq-correct-ans">Correct answer: <strong>${correctAns}</strong></div>
                            ${q.explanation ? `<div class="rq-explanation">💡 ${formatModelAnswer(q.explanation)}</div>` : ''}
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>`;

    document.getElementById('review-answers-btn').addEventListener('click', function() {
        const section = document.getElementById('answer-review-section');
        const visible = section.style.display !== 'none';
        section.style.display = visible ? 'none' : 'block';
        this.textContent = visible ? '🔍 Review Answers' : '🙈 Hide Review';
        if (!visible) section.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('retry-wrong-btn').addEventListener('click', () => {
        const wrongQs = questions.filter((q, i) => answers[i] && answers[i].toUpperCase() !== q.answer.toUpperCase());
        if (wrongQs.length === 0) return;
        quizState.questions = shuffleArray(wrongQs);
        quizState.currentIndex = 0; quizState.answers = {}; quizState.flagged = new Set();
        quizState.submitted = false; quizState.startTime = Date.now(); quizState.timeRemaining = quizState.totalTime;
        renderQuizExam();
        if (quizState.timed && quizState.totalTime > 0) startTimer();
    });
    document.getElementById('new-quiz-btn').addEventListener('click', () => showQuizLobby());
    questionsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getGrade(score) {
    if (score >= 70) return { grade: 'A', color: '#22c55e', message: 'Excellent! 🎉' };
    if (score >= 60) return { grade: 'B', color: '#84cc16', message: 'Good job! 👍' };
    if (score >= 50) return { grade: 'C', color: '#f59e0b', message: 'Pass! Keep pushing 📈' };
    if (score >= 45) return { grade: 'D', color: '#f97316', message: 'Just below pass mark 💪' };
    return { grade: 'F', color: '#ef4444', message: 'Keep studying — you\'ve got this! 📚' };
}

// ============================================================
// ===== INIT ===================================================
// ============================================================
function initJUPEBApp() {
    initTheme();
    initSidebar();
    initMobileSidebar();
    handleSidebarResponsive();
    setupThemeListeners();
    initStickyNavbar();
    setupEventListeners();
    loadQuestions(null, () => {
        console.log('All data loaded!');
        if (document.getElementById('past-questions-tab')?.classList.contains('active')) {
            showPastQuestionsSidebar();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // App waits for Firebase auth before loading
});

window.addEventListener('resize', () => { handleSidebarResponsive(); });