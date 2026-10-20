// topic-resources.js
// Learn resources per topic, keyed EXACTLY by topic name as it appears in courseStructure.
// If a key doesn't match character-for-character, its banner won't show (no error).
// type: "video" → 🎬 | "article" → 📄 | anything else → 🔗
//
// Every syllabus topic has a key. Empty [] = no "Learn this topic" banner.

const TOPIC_RESOURCES = {
  // ========== CHEMISTRY ==========
  // CHM 001 - General Chemistry
  "Measurement": [
    { type: "video", title: "Intro to Chemistry & Measurements", url: "https://www.youtube.com/watch?v=nIf93Y2GHQA&t=30s" },
  ],
  "Mole Concept": [
    { type: "video", title: "The Organic Chemistry Tutor", url: "https://www.youtube.com/watch?v=74-X94OP2XI" },
  ],
  "Atomic Structure": [
    { type: "video", title: "Atomic Structure Explained", url: "https://youtu.be/VrNm5EsHkxY?si=rhl57y9x0sSQCURE" },
    { type: "video", title: "Electronic Configuration", url: "https://youtu.be/NIwcDnFjj98?si=5ciLB-uOjiUR5OQX" },
    { type: "video", title: "History of Atomic Theory", url: "https://youtu.be/9B3DDY27ZtE?si=JzM9EnzVLBBpF-qO" },
    { type: "article", title: "Khan Academy — Atomic Structure", url: "https://www.khanacademy.org/science/hs-chemistry/x2613d8165d88df5e:atoms-isotopes-and-ions/x2613d8165d88df5e:atomic-structure/a/atomic-structure" },
  ],
  "Chemical Bonding": [
    { type: "video", title: "Chemical Bonding", url: "https://youtu.be/bOV3DQZflZA?si=-u0JPlDXNzzvWp6G" },
    { type: "article", title: "Khan Academy — Chemical Bonding", url: "https://www.khanacademy.org/science/ap-biology/chemistry-of-life/introduction-to-biological-macromolecules/a/chemical-bonds-article" },
  ],

  // CHM 002 - Physical Chemistry
  "Nature of Matter": [
    { type: "video", title: "Phase Diagram, States of Matter & Intermolecular Forces", url: "https://youtu.be/Qp87Z4m8R-w?si=vkNCzozOJh-bAw3-" },
  ],
  "Kinetic Molecular Theory of Gases": [
    { type: "video", title: "Kinetic Molecular Theory of Gases", url: "https://youtu.be/HkSXiHz9vUc?si=QPYKHDtG2GE14RNh" },
    { type: "video", title: "Kinetic Molecular Theory of Gases", url: "https://youtu.be/iAsP-9m2aH0?si=1Uk2M_iAGt8Ob0yZ" },
    { type: "video", title: "Kinetic Molecular Theory of Gases", url: "https://www.youtube.com/watch?v=o3f_VJ87Df0&xstg=CAMSEBUJ_b-oH-PhF0yjBgavkzY%3D" },
  ],
  "Solutions and Colligative Properties": [
    { type: "video", title: "Colligative Properties", url: "https://www.youtube.com/watch?v=c8dDLe37ONg&xstg=CAMSEBUJ_b-oH-PhF0yjBgavkzY%3D" },
    { type: "video", title: "Solutions & Colligative Properties", url: "https://www.youtube.com/watch?v=SfKVX2K9u88&xstg=CAMSEBUJ_b-oH-PhF0yjBgavkzY%3D" },
  ],
  "Thermochemistry": [
    { type: "video", title: "Thermochemistry(Enthalpy Change Calculations)", url: "https://youtu.be/ifrQGMcL-gw?si=4u1HgILAuZxUJw0d" },
    { type: "video", title: "Thermochemistry: Equations and Calculations", url: "https://youtu.be/LsqKL3pBVMA?si=EP7l1z6vv5DJkHke" },
    { type: "video", title: "Hess's Law Calculations", url: "https://youtu.be/2ixEf2zpR8E?si=URCUUrkRuHr3kUmF" },
  ],
  "Thermodynamics": [
    { type: "video", title: "Laws of Thermodynamics", url: "https://youtu.be/8N1BxHgsoOw?si=ctKl_PlFPfpnDl7Y" },
    { type: "video", title: "Thermodynamics: Terms Explained", url: "https://youtu.be/TnDCxw0y6YM?si=Y37jc2xXU7oNCBr5" },
  ],
  "Electrochemistry": [
    { type: "video", title: "Electrochemistry Explained", url: "https://youtu.be/ImV8LyujjqY?si=AQNumCkRss-Z9Hwu" },
    { type: "article", title: "Unacademy - Electrochemistry", url: "https://unacademy.com/content/wp-content/uploads/sites/2/2022/10/21.-Electrochemistry-Notes.pdf" },
  ],
  "Chemical Kinetics": [
    { type: "video", title: "Chemical Kinetics: Full Review", url: "https://youtu.be/7I0Xg92_eA4?si=fv1QGQ0eCmYtdpg9" },
    { type: "video", title: "Organic Chemistry Tutor: Chemical Kinetics", url: "https://youtu.be/kgpgdReUR6g?si=u5noc1idah2uDQBt" },
  ],
  "Equilibrium State": [
    { type: "video", title: "Organic Chemistry Tutor: Chemical Equilibrium", url: "https://youtu.be/J4WJCYpTYj8?si=0sAr3Y3PT4EfAZxP" },
    { type: "video", title: "Chemical Equilibrium Tutorial. How to solve questions on Le Chatelier's principle(GCSE Chemistry)", url: "https://youtu.be/GeKzlLc4yGs?si=-qIScetomKHaB7CS" },
  ],
  "Acid-Base Equilibria": [
    { type: "video", title: "Acids and Bases - Formulas and Equations - pH, pOH, Ka, Kb, pKa, pKb, Kw - Chemistry", url: "https://youtu.be/8VXyvMXbUa8?si=hPdQqXC64IZh6xlI" },
    { type: "video", title: "Khan Academy: Acid-Base Equilibria", url: "https://youtu.be/ss7Ap-6bFYw?si=TSYjwzDvfkVRWCI9" },
  ],
  "Ionic Equilibria": [
    { type: "video", title: "Pankaj Sir Chemistry: Ionic Equilibrium", url: "https://youtu.be/QhNcRpaE2Rk?si=9l80v9fP0IHQu3Zk" },
  ],
  "Nuclear Chemistry": [
    { type: "video", title: "Radioactivity and Radioactive Isotopes", url: "https://youtu.be/yU9VZ-bzP04?si=KbBKx4ho8o0N5AHM" },
  ],

  // CHM 003 - Inorganic Chemistry
  "Periodicity": [],
  "Chemistry of Hydrogen": [],
  "s-block elements": [],
  "p-block elements": [],
  "d-block elements": [],
  "Coordination Chemistry": [],
  "Chemistry of the Environment": [],
  "Nanochemistry": [],

  // CHM 004 - Organic Chemistry
  "Separation and Purification Techniques": [],
  "Structure and Bonding in Organic Compounds": [],
  "Organic Reactions": [],
  "Isomerism in Organic Compounds": [],
  "Alkanes, Alkenes, Alkynes": [],
  "Alcohols": [],
  "Alkyl Halides": [],
  "Carbonyl Compounds": [],
  "Carboxylic Acids and Derivatives": [],
  "Amines": [],
  "Aromatic Compounds": [],
  "Macromolecules": [],
  "Petroleum Industry": [],

  // ========== PHYSICS ==========
  // PHY 001 - Mechanics & Properties of Matter
  "Physical Quantities and Units": [],
  "Vectors": [],
  "Kinematics": [],
  "Dynamics (Newton's Laws and Forces)": [],
  "The Gravitational Field": [],
  "Work, Energy and Power": [],
  "Circular and Oscillatory Motions": [],
  "Elasticity": [],
  "Hydrostatics": [],
  "Hydrodynamics": [],

  // PHY 002 - Heat, Waves & Optics
  "Temperature and Thermometry": [],
  "Heat and Energy": [],
  "Ideal Gases": [],
  "Waves": [],
  "Sound Waves": [],
  "Geometric Optics (Light)": [],
  "Lenses and Optical Instruments": [],
  "Wave Theory of Light": [],

  // PHY 003 - Electricity & Magnetism
  "Electrostatics": [],
  "Capacitors": [],
  "Current Electricity": [],
  "Magnetic Field": [],
  "Force on Conductor and Moving Charge": [],
  "Electromagnetic Induction": [],
  "Alternating Current Circuits": [],

  // PHY 004 - Modern Physics
  // NOTE: "Atomic Structure" already keyed under chemistry above —
  // same topic name, so the same resource array is used for both.
  "Elements of Modern Physics": [],
  "X-Rays": [],
  "Wave-Particle Duality": [],
  "Radioactivity and Nuclear Energy": [],
  "Semiconductors": [],
  "Applied Physics": [],

  // ========== MATHS ==========
  // MAT 001 - Pure Mathematics
  "Real Numbers": [],
  "Set Theory": [],
  "Mappings": [],
  "Quadratic Equations": [],
  "Polynomials": [],
  "Partial Fractions": [],
  "Binomial Theorem": [],
  "Logarithms": [],
  "Matrices": [],
  "Inequalities": [],
  "Trigonometry": [],
  "Coordinate Geometry": [],
  "Complex Numbers": [],
  "Sequences and Series": [],

  // MAT 002 - Calculus
  "Functions": [],
  "Limits and Continuity": [],
  "Differentiation": [],
  "Applications of Differentiation": [],
  "Maclaurin and Taylor Series": [],
  "Integration": [],
  "Applications of Integration": [],
  "First Order Differential Equations": [],
  "Second Order Differential Equations": [],

  // MAT 003 - Statistics
  "Introduction to Statistics": [],
  "Measures of Location": [],
  "Measures of Dispersion": [],
  "Combinatorics": [],
  "Probability": [],
  "Random Variables": [],
  "Normal Distribution": [],
  "Significance Testing": [],
  "Correlation and Regression": [],

  // MAT 004A - Applied Mechanics
  // NOTE: "Vectors" and "Kinematics" already keyed under physics above —
  // same topic names, shared resource arrays.
  "Newtonian Mechanics": [],
  "Forces and Equilibrium": [],
  "Equilibrium of Rigid Bodies": [],

  // MAT 004B - Business Mathematics
  "Mathematics of Finance": [],
  "Marginal Concepts": [],
  "Production and Cost Functions": [],
  "Consumer and Producer Surplus": [],
  "Optimization": [],
  "Linear Programming": [],

  // ========== BIOLOGY ==========
  // BIO 001 - General Biology
  "Origin of Living Things": [],
  "Origin of Organic Molecules": [],
  "Basic Biostatistics": [],
  "Diversity of Living Things": [],
  "Biological Molecules": [
    { type: "video", title: "Introduction to Biochemistry", url: "https://youtu.be/BjzH4Hr_wGg?si=4rrlg6rghAOVAKLT" },
    { type: "video", title: "Molecular Biology", url: "https://www.youtube.com/watch?v=0f5g8k0g3J6A" },
    { type: "video", title: "Introduction to Biological Molecules", url: "https://youtu.be/t3VPjObFd0I?si=LBf2Ru_3v86LldwY" },
  ],
  "Cell Structure and Functions": [
    { type: "video", title: "Ninja Nerd: Cell Structure and Function", url: "https://youtu.be/t5DvF5OVr1Y?si=RsPlhgbFoz75ADnl" },
    { type: "article", title: "Cell Structure A-Level Biology Revision Notes", url: "https://alevelbiology.co.uk/notes/cell-structure/" },
  ],
  "Cell Division, Genetics, Variations and Heredity": [
    { type: "video", title: "Ninja Nerd: DNA Structure & Organization", url: "https://youtu.be/S6LXyzZn5Ls?si=bHQJqlNCVXgqp6pQ" },
    { type: "article", title: "Genetics A-Level Biology Revision Notes", url: "https://alevelbiology.co.uk/notes/genetics/" },
  ],
  "Systematics, Taxonomy and Nomenclature": [],
  "Ecology": [
    { type: "video", title: "GCSE Biology Revision: Ecology", url: "https://youtu.be/ePsjdKoSA9g?si=FbQ1JLDHCvtOr53E" },
    { type: "article", title: "A Level Biology Notes: Ecology and Ecosystems", url: "https://biologyeducation.co.uk/ecology-ecosystems-resources/" },
  ],
  "Biological Methods and Application": [],
  "Evolution": [
    { type: "video", title: "GCSE Biology Revision: Evolution and Variation", url: "https://youtu.be/_LoPYfhTgeI?si=84iktsQqZttdG2hI" },
  ],
  "Enzymes": [],

  // BIO 002 - Microbiology
  "History of the Discovery of Microorganisms": [
    { type: "video", title: "An Introduction to Microbiology", url: "https://youtu.be/ukT8YrZ_kM8?si=6Q2cVjrDOhRAICmi" },
  ],
  "Types and Taxonomic Groupings of Microorganisms": [],
  "Structures, Morphology and Characteristics of Microorganisms": [],
  "Microbial Ecology": [],
  "Microbial Nucleic Acids in Information Storage and Transfer": [],
  "Microorganisms and their Application in Biotechnology": [],

  // BIO 003 - Botany
  "General Characteristics and Diversity of Plants": [
    { type: "video", title: "Plant Science: An Introduction to Botany", url: "https://youtu.be/8-G7D_sy7qE?si=DnHuOrYdX8VBz1XM" },
  ],
  "Plant Morphology/Anatomy": [],
  "Nutrition in Plants": [],
  "Transport System in Plants": [],
  "Respiration": [],
  "Plant Reproduction": [],
  "Growth in Higher Plants and Growth Regulators": [],
  "Crop Improvement": [],
  "Economic and Ecological Importance of Plants": [],

  // BIO 004 - Zoology
  "Diversity and General Characteristics of Animals": [
    { type: "video", title: "Anatomical Orientation & Regional + Directional Terminology", url: "https://youtu.be/gfC4t6iyFVc?si=ilhWhuelfc53ZNFe" },
    { type: "article", title: "Biology Notes — Anatomy and Physiology", url: "https://alevelbiology.co.uk/notes/homeostasis/" },
  ],
  "Systematics (Taxonomy) of Animals": [],
  "Evolution of Animals": [],
  "Invertebrates": [],
  "Introduction to Chordates": [],
  "Ecologic and Economic Importance of Animals": [],
  "Nutrition in Animals": [],
  "Respiration in Mammals": [],
  "Transport of Substances across Membranes": [],
  "Skeletal System and Muscles": [],
  "Reproduction": [],
  "Excretion": [],
  "Circulatory System": [],
  "Growth and Development": [],
  "Nervous System": [],
  "Sense Organs": [],
  "Endocrine System": [],
};