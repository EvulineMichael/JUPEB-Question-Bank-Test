// Topic summaries: CHEMISTRY
// Keys must match the topic names in courseStructure.chemistry exactly.
(window.TOPIC_NOTES = window.TOPIC_NOTES || {}).chemistry = {

  // ===== CHM 001 - General Chemistry =====
  "Measurement": {
    summary: "Measuring in chemistry: SI units, significant figures, accuracy and precision, unit conversion and errors.",
    points: [
      "SI base units used in chemistry: mass (kg), length (m), time (s), temperature (K), amount of substance (mol).",
      "Common derived units: volume (m³; 1 dm³ = 1 L = 1000 cm³), density (g cm⁻³ or kg m⁻³), pressure (Pa; 1 atm = 101 325 Pa = 760 mmHg).",
      "Significant figures show how precise a measurement is. When multiplying or dividing, keep the fewest significant figures in the data; when adding or subtracting, keep the fewest decimal places.",
      "Accuracy is how close a result is to the true value; precision is how close repeated results are to each other.",
      "Scientific notation writes numbers as a × 10ⁿ with 1 ≤ a < 10.",
      "Convert units with conversion factors (dimensional analysis), cancelling units as you go.",
      "Systematic errors bias results one way (a badly calibrated balance); random errors scatter them (reading a burette). Repeat readings and average.",
      "Common apparatus: burette and pipette (accurate volumes), measuring cylinder (approximate), analytical balance (mass), thermometer."
    ],
    formulas: [
      "Density = mass / volume",
      "K = °C + 273",
      "% error = |measured − true| / true × 100%"
    ],
    tip: "Read significant figures carefully: zeros between digits and after a decimal point count; leading zeros (0.005) do not."
  },

  "Mole Concept": {
    summary: "Counting particles by weighing: the mole, Avogadro's number, molar mass, empirical and molecular formulae, and reacting quantities.",
    points: [
      "One mole contains 6.02 × 10²³ particles (Avogadro's constant), the number of atoms in exactly 12 g of carbon-12.",
      "Relative atomic mass (Ar) and relative molecular mass (Mr) compare masses with 1/12 of a carbon-12 atom. Molar mass in g mol⁻¹ has the same number.",
      "At s.t.p. (0 °C, 1 atm), one mole of any gas occupies 22.4 dm³. At room conditions it is about 24 dm³.",
      "Empirical formula: the simplest whole-number ratio of atoms. Find it from % composition: divide each % by Ar, then divide by the smallest result.",
      "Molecular formula = (empirical formula)ₙ, where n = Mr ÷ empirical formula mass.",
      "A balanced equation gives the mole ratio of reactants and products. Use it to find reacting masses and gas volumes.",
      "The limiting reagent is used up first and decides how much product forms. Percentage yield compares actual with theoretical yield.",
      "Concentration is moles per dm³ (mol dm⁻³). Mass concentration in g dm⁻³ = molarity × molar mass."
    ],
    formulas: [
      "n = mass / molar mass",
      "n = number of particles / 6.02 × 10²³",
      "n (gas) = volume / 22.4 dm³ (s.t.p.)",
      "C = n / V (V in dm³)",
      "% yield = actual / theoretical × 100%"
    ],
    tip: "Almost every calculation goes through moles: turn the data into moles, use the equation's mole ratio, then turn moles back into what is asked."
  },

  "Atomic Structure": {
    summary: "What atoms are made of: subatomic particles, isotopes, quantum numbers, orbitals and electron configuration.",
    points: [
      "Atoms contain protons (+1, mass 1), neutrons (0, mass 1) in the nucleus, and electrons (−1, mass about 1/1840) around it.",
      "Atomic number Z = number of protons; mass number A = protons + neutrons. Neutrons = A − Z.",
      "Isotopes have the same Z but different A (e.g. ¹²C and ¹⁴C). Relative atomic mass is the weighted average of the isotope masses.",
      "Key models: Dalton (indivisible atoms), Thomson (plum pudding), Rutherford (nuclear atom), Bohr (energy levels).",
      "Quantum numbers: principal n (shell), azimuthal l (sub-shell s, p, d, f), magnetic mₗ (orbital orientation), spin mₛ (+½ or −½).",
      "Orbitals: s holds 2 electrons, p 6, d 10, f 14. A shell holds at most 2n² electrons.",
      "Electrons fill orbitals by the Aufbau principle (lowest energy first: 1s 2s 2p 3s 3p 4s 3d 4p…), Pauli's exclusion principle (two electrons per orbital, opposite spins) and Hund's rule (fill degenerate orbitals singly first).",
      "Exceptions: chromium is [Ar] 3d⁵ 4s¹ and copper is [Ar] 3d¹⁰ 4s¹, because half-filled and full d sub-shells are extra stable."
    ],
    formulas: [
      "Neutrons = A − Z",
      "Maximum electrons in a shell = 2n²",
      "Ar = Σ(isotope mass × abundance) / 100"
    ],
    tip: "When writing configurations, 4s fills before 3d, but 4s electrons are removed first when a transition metal forms an ion."
  },

  "Chemical Bonding": {
    summary: "How atoms join: ionic, covalent, dative and metallic bonds, shapes of molecules, hybridisation and intermolecular forces.",
    points: [
      "Atoms bond to reach a stable electron arrangement, usually an octet (noble-gas configuration).",
      "Ionic (electrovalent) bonds form by electron transfer from a metal to a non-metal. Ionic compounds have high melting points, dissolve in water, and conduct when molten or dissolved.",
      "Covalent bonds form by sharing electron pairs between non-metals. Simple molecules have low melting points and do not conduct.",
      "A dative (coordinate) bond is a covalent bond in which both shared electrons come from one atom, e.g. NH₄⁺ and H₃O⁺.",
      "Metallic bonding: positive ions in a 'sea' of delocalised electrons. This explains conductivity, malleability and ductility.",
      "VSEPR theory: electron pairs repel and spread out. Shapes: linear (BeCl₂, 180°), trigonal planar (BF₃, 120°), tetrahedral (CH₄, 109.5°), pyramidal (NH₃, 107°), bent (H₂O, 104.5°).",
      "Hybridisation: sp (linear), sp² (trigonal planar), sp³ (tetrahedral). Sigma bonds come from head-on overlap; pi bonds from sideways overlap.",
      "Intermolecular forces, weakest to strongest: van der Waals (London) forces, dipole–dipole, hydrogen bonds (H bonded to N, O or F). Hydrogen bonding gives water its high boiling point."
    ],
    formulas: [
      "Electronegativity difference > ~1.7: mainly ionic",
      "Bond order = (bonding − antibonding electrons) / 2"
    ],
    tip: "To predict a shape, count bonding pairs and lone pairs around the central atom. Lone pairs repel more and squeeze the bond angles smaller."
  },

  // ===== CHM 002 - Physical Chemistry =====
  "Nature of Matter": {
    summary: "The states of matter, the kinetic theory, changes of state, and how particles are arranged in solids, liquids and gases.",
    points: [
      "Matter has mass and occupies space. It exists as solid, liquid or gas (and plasma).",
      "Solids: particles closely packed in fixed positions, vibrating only; definite shape and volume.",
      "Liquids: particles close together but free to move; definite volume, no fixed shape.",
      "Gases: particles far apart, moving fast and randomly; no fixed shape or volume; easily compressed.",
      "Changes of state: melting, freezing, boiling or evaporation, condensation, sublimation (solid straight to gas, e.g. iodine, naphthalene, dry ice).",
      "During a change of state the temperature stays constant while energy breaks or forms intermolecular attractions (latent heat).",
      "Diffusion (spreading out of particles) and Brownian motion (random jiggling of particles) are evidence that particles move.",
      "Phase diagrams show which state is stable at each temperature and pressure, including the triple point and critical point.",
      "Crystalline solids have a regular arrangement and sharp melting points; amorphous solids (glass) do not."
    ],
    formulas: [
      "Rate of diffusion ∝ 1/√(molar mass) (Graham)"
    ],
    tip: "If a question asks for evidence that particles move, give diffusion or Brownian motion and explain what you would observe."
  },

  "Kinetic Molecular Theory of Gases": {
    summary: "The gas laws and the kinetic theory that explains them: Boyle, Charles, Gay-Lussac, Graham, Dalton, the ideal gas equation and real gases.",
    points: [
      "Kinetic theory assumptions: gas molecules are in constant random motion, their own volume is negligible, collisions are elastic, and there are no attractive forces between them.",
      "Pressure comes from molecules colliding with the container walls. Average kinetic energy is proportional to absolute temperature.",
      "Boyle's law: at constant temperature, P ∝ 1/V. Charles' law: at constant pressure, V ∝ T. Pressure law: at constant volume, P ∝ T.",
      "Avogadro's law: equal volumes of gases at the same temperature and pressure contain equal numbers of molecules.",
      "Gay-Lussac's law of combining volumes: gases react in simple whole-number volume ratios.",
      "Graham's law: lighter gases diffuse faster; the rate is inversely proportional to the square root of molar mass.",
      "Dalton's law of partial pressures: the total pressure of a gas mixture equals the sum of the partial pressures. Used for gases collected over water.",
      "Real gases deviate from ideal behaviour at high pressure and low temperature, because molecular volume and attractions start to matter (van der Waals equation)."
    ],
    formulas: [
      "PV = nRT  (R = 8.314 J mol⁻¹ K⁻¹ or 0.082 atm dm³ mol⁻¹ K⁻¹)",
      "P₁V₁/T₁ = P₂V₂/T₂",
      "r₁/r₂ = √(M₂/M₁)",
      "P_total = P₁ + P₂ + …",
      "(P + an²/V²)(V − nb) = nRT"
    ],
    tip: "Always use kelvin, and keep the units of R consistent with the units of pressure and volume you use."
  },

  "Solutions and Colligative Properties": {
    summary: "Solutions and solubility, ways of expressing concentration, and the colligative properties that depend only on the number of solute particles.",
    points: [
      "A solution is a homogeneous mixture of solute in solvent. Saturated solutions hold the maximum solute at that temperature; supersaturated hold more, temporarily.",
      "Solubility of most solids rises with temperature; solubility of gases falls with temperature and rises with pressure (Henry's law).",
      "Concentration can be expressed as molarity (mol dm⁻³), molality (mol kg⁻¹ of solvent), mole fraction, or mass percentage.",
      "Colligative properties depend on the number of dissolved particles, not their identity.",
      "The four colligative properties: lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure.",
      "Raoult's law: the vapour pressure of a solvent in a solution equals its mole fraction × the pure solvent's vapour pressure.",
      "Electrolytes give more particles (NaCl gives 2 ions), so their effects are larger. The van 't Hoff factor i accounts for this.",
      "Colligative properties are used to find molar masses, salt roads in winter, and antifreeze in car radiators."
    ],
    formulas: [
      "Molality m = moles of solute / kg of solvent",
      "Raoult: P = x_solvent × P°",
      "ΔT_b = i K_b m",
      "ΔT_f = i K_f m",
      "Osmotic pressure π = iCRT"
    ],
    tip: "Colligative formulas use molality (per kg of solvent), not molarity. Check which one the question gives you."
  },

  "Thermochemistry": {
    summary: "Heat changes in reactions: exothermic and endothermic reactions, standard enthalpy changes, Hess's law and bond energies.",
    points: [
      "Exothermic reactions release heat to the surroundings (ΔH negative); endothermic reactions absorb heat (ΔH positive).",
      "Standard conditions: 298 K and 1 atm, with substances in their standard states.",
      "Key enthalpy changes: formation (1 mol of compound from its elements), combustion (1 mol burned completely in oxygen), neutralisation (1 mol of water formed, about −57 kJ mol⁻¹ for strong acid with strong base), solution, atomisation.",
      "The standard enthalpy of formation of an element in its standard state is zero.",
      "Hess's law: the total enthalpy change is the same whatever route is taken. Use enthalpy cycles or add and subtract equations.",
      "Bond breaking absorbs energy; bond making releases energy. ΔH ≈ bonds broken − bonds formed.",
      "Calorimetry: measure the temperature change of water or solution to find the heat released.",
      "Energy profile diagrams show reactants, products, the activation energy and ΔH."
    ],
    formulas: [
      "q = mcΔT",
      "ΔH = −q / n (per mole)",
      "ΔH°r = ΣΔH°f(products) − ΣΔH°f(reactants)",
      "ΔH ≈ Σ(bonds broken) − Σ(bonds formed)"
    ],
    tip: "Watch the sign: heat released by the reaction makes ΔH negative, even though the temperature of the water goes up."
  },

  "Thermodynamics": {
    summary: "Energy, entropy and spontaneity: the laws of thermodynamics, internal energy, enthalpy, entropy and Gibbs free energy.",
    points: [
      "A system is the part being studied; the surroundings are everything else. Systems can be open, closed or isolated.",
      "First law: energy is conserved. The change in internal energy equals heat added plus work done on the system.",
      "Enthalpy H is the heat content at constant pressure: ΔH = ΔU + PΔV.",
      "Entropy S measures disorder. It increases from solid to liquid to gas, when gases are produced, and when substances dissolve or mix.",
      "Second law: in any spontaneous process the total entropy of the universe increases.",
      "Third law: the entropy of a perfect crystal at absolute zero is zero.",
      "Gibbs free energy decides spontaneity: a reaction is spontaneous when ΔG is negative.",
      "Effect of temperature: if ΔH < 0 and ΔS > 0, always spontaneous; if ΔH > 0 and ΔS < 0, never; otherwise it depends on T. ΔG° is linked to the equilibrium constant."
    ],
    formulas: [
      "ΔU = q + w",
      "ΔH = ΔU + PΔV",
      "ΔS°r = ΣS°(products) − ΣS°(reactants)",
      "ΔG = ΔH − TΔS",
      "ΔG° = −RT ln K"
    ],
    tip: "Entropy values are usually in J K⁻¹ mol⁻¹ but ΔH in kJ mol⁻¹. Convert one before using ΔG = ΔH − TΔS."
  },

  "Electrochemistry": {
    summary: "Chemistry and electricity: redox, electrolysis and Faraday's laws, electrochemical cells, electrode potentials and corrosion.",
    points: [
      "Oxidation is loss of electrons (increase in oxidation number); reduction is gain of electrons (OIL RIG).",
      "Electrolysis uses electricity to decompose an electrolyte. Cations go to the cathode (reduction), anions to the anode (oxidation).",
      "Which ion is discharged depends on its position in the electrochemical series, its concentration, and the electrode material (inert like Pt or graphite, or active like copper).",
      "Faraday's first law: mass deposited is proportional to the charge passed. Second law: one mole of electrons (96 500 C, 1 faraday) deposits 1/z mole of an ion of charge z.",
      "A galvanic (voltaic) cell turns chemical energy into electricity. The anode is negative (oxidation) and the cathode positive (reduction), joined by a salt bridge.",
      "Standard electrode potentials are measured against the standard hydrogen electrode (0.00 V). More negative E° means a stronger reducing agent.",
      "Applications: electroplating, purifying copper, extracting reactive metals (Na, Al), anodising, batteries and fuel cells.",
      "Corrosion (rusting) is electrochemical and needs water and oxygen. Prevent it by painting, galvanising, sacrificial protection (zinc or magnesium) or alloying."
    ],
    formulas: [
      "Q = It",
      "Moles of electrons = Q / 96 500",
      "Mass deposited = (Q × M) / (z × 96 500)",
      "E°cell = E°(cathode) − E°(anode)",
      "ΔG° = −nFE°cell",
      "Nernst: E = E° − (0.059/n) log Q (at 25 °C)"
    ],
    tip: "A positive E°cell means the reaction is spontaneous. Write both half-equations first, then combine them."
  },

  "Chemical Kinetics": {
    summary: "How fast reactions go: rate and rate laws, order of reaction, half-life, collision theory, activation energy and catalysts.",
    points: [
      "Rate of reaction is the change in concentration of a reactant or product per unit time.",
      "Factors affecting rate: concentration (or pressure for gases), temperature, surface area, catalysts and light (for some reactions).",
      "Collision theory: particles must collide with enough energy (at least the activation energy) and the correct orientation.",
      "Raising the temperature increases the fraction of molecules with energy above Ea (Maxwell–Boltzmann distribution). This, more than the extra collisions, speeds up the reaction.",
      "A catalyst provides an alternative pathway with lower activation energy and is not used up. It does not change ΔH or the position of equilibrium.",
      "The rate law, rate = k[A]ˣ[B]ʸ, is found by experiment, not from the balanced equation. The overall order is x + y.",
      "Zero order: rate does not depend on concentration. First order: rate doubles when concentration doubles and the half-life is constant. Second order: rate quadruples.",
      "The slowest step in a mechanism (rate-determining step) controls the overall rate. The Arrhenius equation links k to temperature and Ea."
    ],
    formulas: [
      "Rate = k[A]ˣ[B]ʸ",
      "First order: ln[A] = ln[A]₀ − kt",
      "First-order half-life t½ = 0.693 / k",
      "Arrhenius: k = Ae^(−Ea/RT)",
      "ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂)"
    ],
    tip: "To find order from a data table, compare two experiments where only one concentration changes: doubling it and seeing rate ×2 means first order, ×4 second order."
  },

  "Equilibrium State": {
    summary: "Reversible reactions at dynamic equilibrium: Kc and Kp, Le Chatelier's principle and industrial applications.",
    points: [
      "Dynamic equilibrium: in a closed system the forward and reverse rates are equal, so concentrations stay constant though both reactions continue.",
      "The equilibrium constant Kc uses equilibrium concentrations; Kp uses partial pressures for gases. Pure solids and liquids are left out.",
      "A large K means products are favoured; a small K means reactants are favoured.",
      "The reaction quotient Q, compared with K, shows which way a mixture will move to reach equilibrium.",
      "Le Chatelier's principle: if conditions change, the equilibrium shifts to oppose the change.",
      "Increasing pressure favours the side with fewer gas moles. Raising temperature favours the endothermic direction. Adding a reactant shifts it towards products.",
      "Only temperature changes the value of K. A catalyst only helps equilibrium be reached faster.",
      "Industrial use: the Haber process (N₂ + 3H₂ ⇌ 2NH₃, iron catalyst, ~450 °C, ~200 atm) and the Contact process (2SO₂ + O₂ ⇌ 2SO₃, V₂O₅ catalyst, ~450 °C) choose a compromise between yield and rate."
    ],
    formulas: [
      "aA + bB ⇌ cC + dD:  Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ",
      "Kp = Kc(RT)^Δn  (Δn = gas moles of products − reactants)"
    ],
    tip: "Use an ICE table (Initial, Change, Equilibrium) for every Kc calculation. It keeps the mole ratios straight."
  },

  "Acid-Base Equilibria": {
    summary: "Acids and bases: Arrhenius, Brønsted–Lowry and Lewis definitions, strengths, pH, Ka and Kb, and titrations with indicators.",
    points: [
      "Arrhenius: acids give H⁺ in water, bases give OH⁻. Brønsted–Lowry: acids donate protons, bases accept them. Lewis: acids accept electron pairs, bases donate them.",
      "Every Brønsted acid has a conjugate base (HA/A⁻); the stronger the acid, the weaker its conjugate base.",
      "Strong acids (HCl, HNO₃, H₂SO₄) and strong bases (NaOH, KOH) ionise completely. Weak acids (ethanoic) and weak bases (ammonia) ionise only partly.",
      "Water ionises slightly: Kw = [H⁺][OH⁻] = 1 × 10⁻¹⁴ at 25 °C, so pH + pOH = 14.",
      "pH < 7 is acidic, 7 neutral, > 7 alkaline at 25 °C. Each pH unit is a tenfold change in [H⁺].",
      "Weak acid strength is measured by Ka (or pKa). A larger Ka or smaller pKa means a stronger acid.",
      "Titration curves show the equivalence point. Choose an indicator that changes colour there: methyl orange for strong acid/weak base, phenolphthalein for weak acid/strong base.",
      "Salts can be acidic (NH₄Cl), basic (CH₃COONa) or neutral (NaCl) because of hydrolysis."
    ],
    formulas: [
      "pH = −log[H⁺],  pOH = −log[OH⁻]",
      "Kw = [H⁺][OH⁻] = 10⁻¹⁴",
      "Ka = [H⁺][A⁻] / [HA]",
      "Weak acid: [H⁺] ≈ √(Ka × C)",
      "Ka × Kb = Kw",
      "Titration: CaVa / CbVb = na / nb"
    ],
    tip: "For a strong acid, [H⁺] = acid concentration × number of H⁺ per molecule. For a weak acid, use Ka. Do not mix up the two methods."
  },

  "Ionic Equilibria": {
    summary: "Equilibria involving ions in solution: buffers, the common-ion effect, solubility product, hydrolysis of salts and precipitation.",
    points: [
      "A buffer resists pH change when small amounts of acid or base are added. It is a weak acid with its salt (ethanoic acid + sodium ethanoate) or a weak base with its salt (ammonia + ammonium chloride).",
      "Buffers work because the weak acid neutralises added OH⁻ and the conjugate base neutralises added H⁺. Blood is buffered at about pH 7.4.",
      "The Henderson–Hasselbalch equation gives a buffer's pH.",
      "Common-ion effect: adding an ion already in an equilibrium shifts it back, e.g. adding NaCl lowers the solubility of AgCl.",
      "The solubility product Ksp applies to sparingly soluble salts in a saturated solution.",
      "A precipitate forms when the ionic product exceeds Ksp. It does not form if the ionic product is below Ksp.",
      "Salt hydrolysis: salts of a weak acid and strong base are alkaline; salts of a strong acid and weak base are acidic.",
      "Uses: qualitative analysis (selective precipitation of metal ions) and controlling pH in industry and medicine."
    ],
    formulas: [
      "Buffer: pH = pKa + log([salt] / [acid])",
      "AB ⇌ A⁺ + B⁻:  Ksp = [A⁺][B⁻] = s²",
      "AB₂: Ksp = 4s³",
      "Precipitation if ionic product > Ksp"
    ],
    tip: "Write the dissolving equation first, then express each ion's concentration in terms of s (solubility). The powers in Ksp come straight from the equation."
  },

  "Nuclear Chemistry": {
    summary: "Changes in the nucleus: radioactive decay, nuclear equations, half-life, fission and fusion, and uses of radioisotopes.",
    points: [
      "Radioactive nuclei are unstable and decay spontaneously, emitting alpha, beta or gamma radiation.",
      "Alpha (⁴₂He) lowers mass number by 4 and atomic number by 2. Beta (⁰₋₁e) raises atomic number by 1 with no change in mass number. Gamma changes neither.",
      "In a nuclear equation, mass numbers and atomic numbers must balance on both sides.",
      "Penetration: alpha is stopped by paper, beta by aluminium, gamma reduced by thick lead. Ionising power is the reverse order.",
      "Half-life is the time for half of a radioactive sample to decay. It is constant for a given isotope.",
      "Fission splits a heavy nucleus (U-235) into smaller nuclei and neutrons, releasing large energy in a chain reaction (nuclear reactors, atomic bombs).",
      "Fusion joins light nuclei (hydrogen isotopes into helium), as in the Sun. It releases even more energy per gram.",
      "Uses: carbon-14 dating, cobalt-60 radiotherapy, iodine-131 thyroid treatment, tracers in medicine and agriculture, food sterilisation. Hazards: cell damage and cancer."
    ],
    formulas: [
      "N = N₀(½)ⁿ  (n = number of half-lives)",
      "λ = 0.693 / t½",
      "E = Δmc²"
    ],
    tip: "Balance nuclear equations by checking the top numbers (mass) and bottom numbers (charge) separately."
  },

  // ===== CHM 003 - Inorganic Chemistry =====
  "Periodicity": {
    summary: "Patterns in the periodic table: periods, groups and blocks, and trends in atomic radius, ionisation energy, electronegativity and electron affinity.",
    points: [
      "The modern periodic table arranges elements by increasing atomic number. Elements in the same group have the same outer-electron configuration and similar chemistry.",
      "Blocks: s-block (Groups 1–2), p-block (Groups 13–18), d-block (transition metals), f-block (lanthanides and actinides).",
      "Across a period (left to right): nuclear charge increases, so atomic radius decreases, and ionisation energy and electronegativity increase.",
      "Down a group: extra shells and shielding increase atomic radius, while ionisation energy and electronegativity decrease.",
      "Ionisation energy dips slightly from Group 2 to 13 (a new p sub-shell starts) and from Group 15 to 16 (pairing in a p orbital).",
      "Metallic character decreases across a period and increases down a group. Oxides go from basic (Na₂O) through amphoteric (Al₂O₃) to acidic (SO₃).",
      "Electronegativity is highest at fluorine and lowest at caesium and francium.",
      "Diagonal relationships: Li resembles Mg, Be resembles Al, B resembles Si."
    ],
    formulas: [
      "Effective nuclear charge Z_eff = Z − S (shielding)"
    ],
    tip: "Explain every trend with nuclear charge, distance from the nucleus and shielding. Examiners want the reason, not just the trend."
  },

  "Chemistry of Hydrogen": {
    summary: "Hydrogen's position in the periodic table, its preparation, properties and uses, its isotopes, and hydrides and water.",
    points: [
      "Hydrogen has the configuration 1s¹. It resembles Group 1 (forms H⁺, one outer electron) and Group 17 (forms H⁻, needs one electron), so its placement is debated.",
      "Isotopes: protium (¹H), deuterium (²H, used in heavy water D₂O) and tritium (³H, radioactive).",
      "Laboratory preparation: zinc with dilute HCl or H₂SO₄, collected over water. Industrial preparation: steam reforming of methane, electrolysis of water, water-gas reaction.",
      "Properties: colourless, odourless, lightest gas, burns with a 'pop' (test), a good reducing agent (reduces CuO to Cu).",
      "Hydrides: ionic (NaH, with H⁻), covalent (CH₄, NH₃, H₂O) and metallic or interstitial (with transition metals).",
      "Water: hard water contains Ca²⁺ and Mg²⁺. Temporary hardness (hydrogencarbonates) is removed by boiling; permanent hardness (sulphates, chlorides) needs washing soda or ion exchange.",
      "Hydrogen peroxide (H₂O₂) is both an oxidising and a reducing agent and decomposes to water and oxygen.",
      "Uses: making ammonia (Haber process), hardening vegetable oils to margarine, rocket fuel, fuel cells, and producing HCl."
    ],
    formulas: [
      "Zn + 2HCl → ZnCl₂ + H₂",
      "CH₄ + H₂O → CO + 3H₂",
      "CuO + H₂ → Cu + H₂O"
    ],
    tip: "The test for hydrogen is a lighted splint giving a 'squeaky pop'. Do not confuse it with oxygen (relights a glowing splint)."
  },

  "s-block elements": {
    summary: "Group 1 (alkali metals) and Group 2 (alkaline earth metals): configurations, trends, reactions, compounds and uses.",
    points: [
      "Group 1 (Li, Na, K, Rb, Cs) have ns¹ and form +1 ions. Group 2 (Be, Mg, Ca, Sr, Ba) have ns² and form +2 ions.",
      "These are reactive metals and strong reducing agents. Reactivity increases down each group as the outer electron is lost more easily.",
      "Group 1 metals react vigorously with water to give hydroxides and hydrogen (K bursts into lilac flame). They are stored under oil.",
      "Group 2 metals react less vigorously; magnesium reacts slowly with cold water but quickly with steam.",
      "Flame colours: Li crimson, Na yellow-orange, K lilac, Ca brick-red, Sr crimson, Ba apple-green.",
      "Thermal stability of carbonates and nitrates increases down the group, because larger cations polarise the anion less.",
      "Solubility of Group 2 hydroxides increases down the group, while solubility of the sulphates decreases (BaSO₄ is insoluble).",
      "Important compounds: NaOH (soap, paper), Na₂CO₃ (glass, water softening), NaCl, CaO (quicklime), Ca(OH)₂ (slaked lime), CaCO₃ (limestone, cement), MgO. Beryllium is anomalous (covalent compounds, amphoteric)."
    ],
    formulas: [
      "2Na + 2H₂O → 2NaOH + H₂",
      "CaCO₃ → CaO + CO₂ (heat)",
      "CaO + H₂O → Ca(OH)₂"
    ],
    tip: "Be ready to explain trends in thermal stability with the polarising power of the cation (charge ÷ size)."
  },

  "p-block elements": {
    summary: "Groups 13 to 18: boron and aluminium, carbon and silicon, nitrogen and phosphorus, oxygen and sulphur, the halogens and the noble gases.",
    points: [
      "Group 13: aluminium is amphoteric, protected by an oxide layer, and extracted by electrolysis of alumina in molten cryolite.",
      "Group 14: carbon forms allotropes (diamond: hard, non-conducting; graphite: soft, conducting; fullerenes). CO is poisonous; CO₂ is acidic. Silicon is used in semiconductors and glass. The inert-pair effect makes +2 more stable down the group (lead).",
      "Group 15: nitrogen is unreactive (strong triple bond). Ammonia is made by the Haber process; nitric acid by the Ostwald process. Phosphorus has white (reactive, stored under water) and red allotropes.",
      "Group 16: oxygen supports combustion; ozone (O₃) absorbs UV. Sulphur has rhombic and monoclinic allotropes. Sulphuric acid is made by the Contact process and is a dehydrating and oxidising agent.",
      "Group 17 (halogens): diatomic, coloured, oxidising agents. Reactivity decreases down the group, so a halogen displaces those below it (Cl₂ + 2KBr → 2KCl + Br₂).",
      "Hydrogen halides: HF is a weak acid (strong H–F bond and hydrogen bonding); HCl, HBr and HI are strong acids.",
      "Group 18 (noble gases): full outer shells, very unreactive. Used in lighting (neon), welding (argon) and balloons (helium). Xenon forms some fluorides.",
      "Down the p-block groups, metallic character increases (C and Si are non-metals, Ge a metalloid, Sn and Pb metals)."
    ],
    formulas: [
      "N₂ + 3H₂ ⇌ 2NH₃",
      "2SO₂ + O₂ ⇌ 2SO₃",
      "Cl₂ + 2KBr → 2KCl + Br₂"
    ],
    tip: "Learn the industrial processes (Haber, Contact, Ostwald) with catalyst, temperature and pressure. They are favourite exam questions."
  },

  "d-block elements": {
    summary: "Transition metals: electron configuration and characteristic properties such as variable oxidation states, coloured compounds, catalysis and complex formation.",
    points: [
      "A transition element forms at least one stable ion with a partly filled d sub-shell. By this definition scandium and zinc are not true transition metals.",
      "The first row runs from Sc to Zn, filling 3d after 4s. Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹) are the exceptions.",
      "They show variable oxidation states because 4s and 3d electrons have similar energies (e.g. Fe²⁺ and Fe³⁺; Mn from +2 to +7).",
      "Their compounds are often coloured, because d electrons absorb visible light when moving between split d levels. Cu²⁺ is blue, Fe³⁺ yellow-brown, MnO₄⁻ purple.",
      "Many are paramagnetic (unpaired electrons) and many are good catalysts: Fe in the Haber process, V₂O₅ in the Contact process, Ni in hydrogenation.",
      "They form complex ions with ligands, e.g. [Cu(NH₃)₄]²⁺, deep blue.",
      "They are typical metals: hard, dense, high melting points, good conductors, and they form alloys (steel, brass, bronze).",
      "Iron is extracted in the blast furnace (coke, limestone, haematite). Copper is purified by electrolysis."
    ],
    formulas: [
      "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
      "Cu²⁺(aq) + 2OH⁻ → Cu(OH)₂ (blue precipitate)"
    ],
    tip: "Know the colours of common ions and hydroxide precipitates (Cu²⁺ blue, Fe²⁺ green, Fe³⁺ red-brown). They identify ions in practical questions."
  },

  "Coordination Chemistry": {
    summary: "Complex compounds: ligands, coordination number, naming, shapes, isomerism, crystal field theory and uses.",
    points: [
      "A complex has a central metal atom or ion bonded to ligands by dative (coordinate) bonds. The ligands donate lone pairs.",
      "Ligands can be monodentate (H₂O, NH₃, Cl⁻, CN⁻), bidentate (ethylenediamine, oxalate) or polydentate (EDTA, hexadentate). Multidentate ligands form chelates.",
      "The coordination number is the number of donor atoms bonded to the metal, usually 2, 4 or 6.",
      "Shapes: coordination number 2 is linear, 4 is tetrahedral or square planar, 6 is octahedral.",
      "Naming (IUPAC): ligands in alphabetical order before the metal, with prefixes di-, tri-, tetra-. Add '-ate' to the metal in anionic complexes, and give the oxidation state in Roman numerals, e.g. potassium hexacyanoferrate(III).",
      "Isomerism: geometrical (cis/trans in square planar and octahedral complexes), optical, ionisation and hydrate isomerism.",
      "Crystal field theory: ligands split the d orbitals. The size of the split decides the colour absorbed and whether the complex is high- or low-spin.",
      "Uses: haemoglobin (iron complex) carries oxygen, chlorophyll contains magnesium, EDTA treats metal poisoning and softens water, cisplatin is an anticancer drug."
    ],
    formulas: [
      "Oxidation state of metal = complex charge − sum of ligand charges"
    ],
    tip: "To find the metal's oxidation state, set the sum of all charges (metal + ligands) equal to the charge on the complex ion."
  },

  "Chemistry of the Environment": {
    summary: "Chemistry of air, water and soil: pollution and its effects, the greenhouse effect, ozone depletion, acid rain and water treatment.",
    points: [
      "Air is about 78% nitrogen, 21% oxygen, 0.9% argon and 0.04% carbon dioxide, plus water vapour.",
      "Major air pollutants: CO (from incomplete combustion, binds haemoglobin), SO₂ and NOₓ (cause acid rain), particulates, unburnt hydrocarbons, and lead from old petrol.",
      "Acid rain (from SO₂ and NOₓ dissolving in rain) damages buildings, forests, lakes and fish.",
      "Greenhouse effect: CO₂, methane and water vapour trap infrared radiation. Increasing levels cause global warming and climate change.",
      "Ozone depletion: CFCs release chlorine radicals in the stratosphere that destroy ozone, letting harmful UV reach the Earth.",
      "Photochemical smog forms when sunlight acts on NOₓ and hydrocarbons in polluted cities.",
      "Water pollution: sewage, industrial waste, oil spills, fertilisers (eutrophication: algal blooms that use up oxygen), and heavy metals (Pb, Hg, Cd).",
      "Water treatment: screening, coagulation (alum), sedimentation, filtration and chlorination. Solid waste is managed by recycling, incineration and landfill."
    ],
    formulas: [
      "S + O₂ → SO₂;  SO₂ + H₂O → H₂SO₃",
      "CFCl₃ → CFCl₂ + Cl• (UV);  Cl• + O₃ → ClO• + O₂"
    ],
    tip: "For each pollutant, learn three things: its source, its effect, and how to control it. Questions usually ask for all three."
  },

  "Nanochemistry": {
    summary: "Chemistry at the scale of 1–100 nanometres: what nanomaterials are, why their properties change, how they are made, and their uses and risks.",
    points: [
      "A nanometre is 10⁻⁹ m. Nanomaterials have at least one dimension between about 1 and 100 nm.",
      "At this scale, surface area to volume ratio is very large, so nanoparticles are more reactive and make better catalysts.",
      "Properties such as colour, melting point, strength and conductivity can change at the nanoscale (gold nanoparticles look red or purple, not gold).",
      "Examples: fullerenes (C₆₀, buckyballs), carbon nanotubes (very strong, conduct electricity), graphene (one atom thick), quantum dots, and silver and titanium dioxide nanoparticles.",
      "Top-down methods break bulk materials down (milling, lithography). Bottom-up methods build from atoms and molecules (chemical vapour deposition, sol–gel, self-assembly).",
      "Uses: targeted drug delivery and medical imaging, sunscreens (TiO₂, ZnO), antibacterial silver dressings, catalysts, electronics, stronger lighter materials, water purification.",
      "Risks: nanoparticles may enter cells and lungs, and their long-term health and environmental effects are not fully known, so they need careful regulation."
    ],
    formulas: [
      "1 nm = 10⁻⁹ m",
      "Surface area / volume of a sphere = 3/r (rises as r falls)"
    ],
    tip: "The key idea is surface area: smaller particles have far more surface per unit mass, which explains most of their special properties."
  },

  // ===== CHM 004 - Organic Chemistry =====
  "Separation and Purification Techniques": {
    summary: "Methods for separating mixtures and purifying organic compounds, and tests for purity.",
    points: [
      "Filtration separates an insoluble solid from a liquid. Evaporation and crystallisation recover a dissolved solid.",
      "Recrystallisation purifies a solid: dissolve it in minimum hot solvent, filter hot, cool to crystallise, filter and dry.",
      "Simple distillation separates a liquid from dissolved solids. Fractional distillation separates miscible liquids with close boiling points (crude oil, ethanol from water).",
      "Steam distillation separates volatile, water-immiscible substances that would decompose at their boiling point (essential oils).",
      "Solvent extraction uses a separating funnel to pull a compound into a solvent in which it is more soluble.",
      "Chromatography (paper, thin-layer, column, gas) separates mixtures by how strongly components are held by the stationary phase. Rf = distance moved by spot ÷ distance moved by solvent.",
      "Sublimation separates a substance that sublimes (iodine, naphthalene, ammonium chloride) from one that does not.",
      "Tests for purity: a pure solid has a sharp, fixed melting point; a pure liquid a fixed boiling point. Impurities lower and broaden the melting point."
    ],
    formulas: [
      "Rf = distance moved by substance / distance moved by solvent front"
    ],
    tip: "Match the method to the property that differs: solubility, boiling point, adsorption or the ability to sublime."
  },

  "Structure and Bonding in Organic Compounds": {
    summary: "Why carbon forms so many compounds: hybridisation, functional groups, homologous series, formulae, IUPAC naming and bond fission.",
    points: [
      "Carbon is tetravalent and forms strong bonds to itself (catenation), giving chains, branches and rings.",
      "Hybridisation: sp³ carbon is tetrahedral (alkanes, 109.5°), sp² trigonal planar (alkenes, 120°), sp linear (alkynes, 180°).",
      "A homologous series has the same functional group and general formula, similar chemistry, and members differing by CH₂, with gradually changing physical properties.",
      "Functional groups: C=C (alkene), C≡C (alkyne), –OH (alcohol), –CHO (aldehyde), C=O (ketone), –COOH (carboxylic acid), –COOR (ester), –NH₂ (amine), –X (halide).",
      "Formulae: molecular (C₂H₆O), structural (CH₃CH₂OH), displayed (all bonds shown) and skeletal.",
      "IUPAC naming: find the longest chain with the functional group, number it to give the group the lowest number, and name substituents alphabetically.",
      "Homolytic fission gives free radicals; heterolytic fission gives ions (carbocations and carbanions).",
      "Electrophiles (electron-pair acceptors, e.g. H⁺, NO₂⁺) and nucleophiles (electron-pair donors, e.g. OH⁻, CN⁻, NH₃) drive most organic reactions. Inductive and resonance effects explain stability."
    ],
    formulas: [
      "Alkanes CₙH₂ₙ₊₂;  Alkenes CₙH₂ₙ;  Alkynes CₙH₂ₙ₋₂",
      "Alcohols CₙH₂ₙ₊₁OH",
      "Carbocation stability: 3° > 2° > 1° > methyl"
    ],
    tip: "Practise naming from structures and drawing structures from names. Nearly every organic question needs one or the other."
  },

  "Organic Reactions": {
    summary: "The main types of organic reaction and their mechanisms: substitution, addition, elimination, oxidation, reduction, condensation and polymerisation.",
    points: [
      "Substitution: one atom or group replaces another. Free-radical substitution of alkanes with halogens in UV light; nucleophilic substitution of haloalkanes (SN1 and SN2); electrophilic substitution of benzene.",
      "Free-radical mechanism: initiation (radicals formed), propagation (chain continues), termination (radicals combine).",
      "Addition: atoms add across a double or triple bond. Electrophilic addition to alkenes (HBr, Br₂, H₂O); nucleophilic addition to carbonyls (HCN).",
      "Markovnikov's rule: when HX adds to an unsymmetrical alkene, H goes to the carbon that already has more hydrogens (via the more stable carbocation).",
      "Elimination: a small molecule is removed to form a double bond, e.g. dehydration of alcohols, or dehydrohalogenation of haloalkanes with hot ethanolic KOH.",
      "Oxidation and reduction: primary alcohol → aldehyde → carboxylic acid; secondary alcohol → ketone. Reducing agents include LiAlH₄, NaBH₄ and H₂/Ni.",
      "Condensation: two molecules join with loss of a small molecule (water), e.g. esterification.",
      "Polymerisation: addition (polythene from ethene) or condensation (nylon, polyesters)."
    ],
    formulas: [
      "CH₄ + Cl₂ → CH₃Cl + HCl (UV)",
      "CH₂=CH₂ + HBr → CH₃CH₂Br",
      "C₂H₅OH → CH₂=CH₂ + H₂O (conc. H₂SO₄, 170 °C)"
    ],
    tip: "For mechanisms, draw curly arrows from a lone pair or bond to where the electrons go. Every arrow starts from electrons."
  },

  "Isomerism in Organic Compounds": {
    summary: "Compounds with the same molecular formula but different arrangements: structural isomerism and stereoisomerism (geometrical and optical).",
    points: [
      "Isomers share a molecular formula but differ in structure or in the arrangement of atoms in space.",
      "Chain isomerism: different carbon skeletons (butane and 2-methylpropane).",
      "Position isomerism: the functional group is in a different position (propan-1-ol and propan-2-ol).",
      "Functional group isomerism: different functional groups (ethanol and methoxymethane; propanal and propanone).",
      "Geometrical (cis–trans, E–Z) isomerism needs restricted rotation (a C=C bond) and two different groups on each carbon of the double bond, e.g. cis- and trans-but-2-ene.",
      "Optical isomerism happens when a molecule has a chiral carbon (four different groups attached). The two forms are non-superimposable mirror images (enantiomers).",
      "Enantiomers rotate plane-polarised light in opposite directions. A 50:50 mixture (racemic) is optically inactive.",
      "Isomers can have different physical properties (boiling point) and different biological activity (drug action)."
    ],
    formulas: [
      "Butane C₄H₁₀: 2 isomers;  Pentane C₅H₁₂: 3 isomers"
    ],
    tip: "To spot a chiral carbon, check that all four groups attached to it are different. CH₃ and CH₂CH₃ count as different."
  },

  "Alkanes, Alkenes, Alkynes": {
    summary: "The hydrocarbons: preparation, properties and reactions of saturated alkanes and unsaturated alkenes and alkynes, and tests to tell them apart.",
    points: [
      "Alkanes (CₙH₂ₙ₊₂) are saturated and fairly unreactive. They burn (complete combustion gives CO₂ + H₂O) and undergo free-radical substitution with halogens in UV light.",
      "Alkanes are obtained from crude oil and natural gas. Boiling points rise with chain length; branching lowers them.",
      "Alkenes (CₙH₂ₙ) have a C=C double bond and undergo electrophilic addition: hydrogenation (H₂/Ni), halogenation, HX, hydration (steam/H₃PO₄ gives alcohols).",
      "Alkenes are made by cracking long alkanes or by dehydrating alcohols. Ethene polymerises to polythene.",
      "Test for unsaturation: bromine water is decolourised (orange to colourless) by alkenes and alkynes but not alkanes. Acidified KMnO₄ is also decolourised.",
      "Alkynes (CₙH₂ₙ₋₂) have a C≡C triple bond. Ethyne is made from calcium carbide and water, and burns very hot (oxy-acetylene welding).",
      "Terminal alkynes are weakly acidic: they form precipitates with ammoniacal silver nitrate or copper(I) chloride, which distinguishes them from alkenes.",
      "Ozonolysis splits alkenes at the double bond into carbonyl compounds, which shows where the double bond was."
    ],
    formulas: [
      "CH₄ + 2O₂ → CO₂ + 2H₂O",
      "CH₂=CH₂ + H₂ → CH₃CH₃ (Ni, 150 °C)",
      "CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂",
      "nCH₂=CH₂ → (–CH₂–CH₂–)ₙ"
    ],
    tip: "Bromine water decolourising proves unsaturation. Use ammoniacal AgNO₃ to tell a terminal alkyne from an alkene."
  },

  "Alcohols": {
    summary: "Alcohols (R–OH): classification, naming, preparation, physical properties, reactions and tests, and uses including ethanol.",
    points: [
      "Classification by the carbon carrying the –OH: primary (1°, RCH₂OH), secondary (2°, R₂CHOH) and tertiary (3°, R₃COH).",
      "Hydrogen bonding gives alcohols higher boiling points than alkanes of similar mass. Small alcohols are soluble in water.",
      "Preparation: hydration of alkenes (steam, H₃PO₄ catalyst), fermentation of sugars by yeast (ethanol), and hydrolysis of haloalkanes.",
      "Oxidation with acidified K₂Cr₂O₇ (orange to green): 1° gives an aldehyde then a carboxylic acid; 2° gives a ketone; 3° does not oxidise easily.",
      "Other reactions: with sodium (gives H₂), esterification with carboxylic acids (sweet smell), dehydration to alkenes (conc. H₂SO₄, 170 °C), and substitution to haloalkanes (PCl₅, HX).",
      "Lucas test (ZnCl₂/HCl) distinguishes them: tertiary turns cloudy at once, secondary in a few minutes, primary not at room temperature.",
      "Iodoform test: alcohols with CH₃CH(OH)– (ethanol, propan-2-ol) give a yellow precipitate with I₂/NaOH.",
      "Uses: ethanol in drinks, fuel and solvents, and methylated spirit. Methanol is toxic and causes blindness. Glycerol and ethylene glycol are polyhydric alcohols."
    ],
    formulas: [
      "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast)",
      "C₂H₅OH + CH₃COOH ⇌ CH₃COOC₂H₅ + H₂O",
      "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂"
    ],
    tip: "Oxidation questions come down to whether the alcohol is 1°, 2° or 3°. Classify it first."
  },

  "Alkyl Halides": {
    summary: "Haloalkanes (R–X): naming and classification, preparation, nucleophilic substitution and elimination, and uses and environmental problems.",
    points: [
      "In alkyl halides a halogen replaces a hydrogen in an alkane. They are classified as primary, secondary or tertiary by the carbon carrying the halogen.",
      "The C–X bond is polar (C slightly positive), so the carbon is attacked by nucleophiles.",
      "Preparation: from alcohols with PCl₅, PCl₃, SOCl₂ or HX; from alkenes by adding HX; from alkanes by free-radical halogenation.",
      "Nucleophilic substitution: with aqueous NaOH (gives alcohols), KCN in ethanol (nitriles, adding one carbon), and ammonia (amines).",
      "SN2 happens in one step and is typical of primary halides. SN1 goes through a carbocation and is typical of tertiary halides.",
      "Elimination: hot ethanolic KOH removes HX and gives an alkene. Aqueous conditions favour substitution; ethanolic and hot conditions favour elimination.",
      "Reactivity: R–I > R–Br > R–Cl > R–F, because the C–I bond is weakest.",
      "Test: warm with NaOH, acidify with HNO₃, add AgNO₃: white (Cl), cream (Br) or yellow (I) precipitate. Uses: solvents, refrigerants (CFCs damage ozone), anaesthetics, PVC."
    ],
    formulas: [
      "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻ (aqueous)",
      "CH₃CH₂Br + KOH → CH₂=CH₂ + KBr + H₂O (ethanolic, heat)",
      "R–X + CN⁻ → R–CN + X⁻"
    ],
    tip: "'Aqueous' means substitution and 'ethanolic' means elimination. That one word in a question tells you the product."
  },

  "Carbonyl Compounds": {
    summary: "Aldehydes and ketones (C=O): naming, preparation, nucleophilic addition and condensation, and tests to tell them apart.",
    points: [
      "Aldehydes (RCHO) have the carbonyl group at the end of the chain; ketones (RCOR′) have it within the chain.",
      "Preparation: oxidise primary alcohols to aldehydes (distil off as formed) and secondary alcohols to ketones with acidified dichromate.",
      "The C=O bond is polar, so carbonyls undergo nucleophilic addition, e.g. with HCN to form cyanohydrins.",
      "Condensation with 2,4-dinitrophenylhydrazine (Brady's reagent) gives orange-yellow crystals with both aldehydes and ketones. Their melting points identify the compound.",
      "Aldehydes are easily oxidised, so they react with Tollens' reagent (silver mirror) and Fehling's or Benedict's solution (brick-red Cu₂O precipitate). Ketones do not.",
      "Reduction with NaBH₄ or LiAlH₄ gives primary alcohols from aldehydes and secondary alcohols from ketones.",
      "Iodoform test: methyl ketones (CH₃CO–) and ethanal give a yellow precipitate of CHI₃.",
      "Uses: methanal (formalin, preservative, resins), propanone (solvent, nail-polish remover)."
    ],
    formulas: [
      "RCHO + [O] → RCOOH",
      "RCHO + HCN → RCH(OH)CN",
      "RCOR′ + 2[H] → RCH(OH)R′"
    ],
    tip: "To distinguish an aldehyde from a ketone, use Tollens' (silver mirror) or Fehling's (red precipitate). Only aldehydes react."
  },

  "Carboxylic Acids and Derivatives": {
    summary: "Carboxylic acids (–COOH) and their derivatives (esters, acid chlorides, amides, anhydrides): preparation, acidity, reactions and uses.",
    points: [
      "Carboxylic acids are weak acids. They are more acidic than alcohols because the carboxylate ion is stabilised by resonance.",
      "Electron-withdrawing groups (Cl) increase acidity: Cl₃CCOOH is stronger than CH₃COOH.",
      "Preparation: full oxidation of primary alcohols or aldehydes, and hydrolysis of nitriles.",
      "Typical acid reactions: with metals (H₂), bases (salt + water) and carbonates (CO₂, the test is effervescence that turns limewater milky).",
      "Esterification: acid + alcohol with a conc. H₂SO₄ catalyst gives a sweet-smelling ester and water. The reaction is reversible.",
      "Derivatives: acid chlorides (RCOCl, very reactive, made with PCl₅ or SOCl₂), anhydrides, esters (RCOOR′) and amides (RCONH₂).",
      "Ester hydrolysis: acid hydrolysis is reversible; alkaline hydrolysis (saponification) goes to completion and is how soap is made from fats.",
      "Uses: ethanoic acid (vinegar), esters in flavourings and perfumes, fats and oils (esters of glycerol), polyesters."
    ],
    formulas: [
      "RCOOH + R′OH ⇌ RCOOR′ + H₂O",
      "2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂",
      "Fat + 3NaOH → glycerol + 3 soap (RCOONa)"
    ],
    tip: "Name esters with the alcohol part first: CH₃COOC₂H₅ is ethyl ethanoate (from ethanol and ethanoic acid)."
  },

  "Amines": {
    summary: "Organic bases derived from ammonia: classification, naming, basicity, preparation, reactions and uses.",
    points: [
      "Amines replace one, two or three hydrogens of ammonia with alkyl or aryl groups: primary (RNH₂), secondary (R₂NH) and tertiary (R₃N).",
      "The lone pair on nitrogen makes amines bases and nucleophiles.",
      "Aliphatic amines are stronger bases than ammonia, because alkyl groups push electron density onto the nitrogen.",
      "Aromatic amines (aniline, C₆H₅NH₂) are weaker bases than ammonia, because the lone pair is delocalised into the benzene ring.",
      "Preparation: ammonia with haloalkanes (gives a mixture), reduction of nitriles or amides with LiAlH₄, and reduction of nitrobenzene with Sn/HCl (gives aniline).",
      "Reactions: with acids to form salts, with acid chlorides to form amides, and with nitrous acid (HNO₂).",
      "Aniline with HNO₂ at 0–5 °C gives a diazonium salt, which couples with phenol to make azo dyes.",
      "Uses: dyes, drugs, nylon (hexane-1,6-diamine), and amino acids are the building blocks of proteins."
    ],
    formulas: [
      "RNH₂ + HCl → RNH₃⁺Cl⁻",
      "C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O (Sn/HCl)",
      "C₆H₅NH₂ + HNO₂ + HCl → C₆H₅N₂⁺Cl⁻ + 2H₂O (0–5 °C)"
    ],
    tip: "Explain basicity in terms of how available the nitrogen's lone pair is: alkyl groups make it more available, a benzene ring less."
  },

  "Aromatic Compounds": {
    summary: "Benzene and its derivatives: structure and stability, electrophilic substitution, directing effects, and phenol, toluene and other key compounds.",
    points: [
      "Benzene (C₆H₆) is a planar hexagon with six delocalised π electrons. All C–C bonds are the same length, between single and double.",
      "Delocalisation makes benzene unusually stable (resonance energy), so it prefers substitution to addition. It does not decolourise bromine water.",
      "Hückel's rule: a planar, cyclic, conjugated ring with (4n + 2) π electrons is aromatic.",
      "Electrophilic substitution: nitration (conc. HNO₃ + H₂SO₄, gives the NO₂⁺ electrophile), halogenation (Br₂ with FeBr₃), sulphonation, Friedel–Crafts alkylation and acylation (AlCl₃).",
      "Activating, ortho/para-directing groups: –OH, –NH₂, –CH₃. Deactivating, meta-directing groups: –NO₂, –COOH, –CHO.",
      "Phenol is more acidic than alcohols (the phenoxide ion is stabilised) and reacts readily with bromine water to give a white precipitate of 2,4,6-tribromophenol.",
      "Phenol gives a violet colour with neutral FeCl₃ solution.",
      "Methylbenzene (toluene) can be oxidised at the side chain to benzoic acid by KMnO₄. Uses of aromatics: dyes, drugs (aspirin), explosives (TNT), plastics."
    ],
    formulas: [
      "C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (conc. H₂SO₄, 50 °C)",
      "C₆H₆ + Br₂ → C₆H₅Br + HBr (FeBr₃)",
      "C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl (AlCl₃)"
    ],
    tip: "Learn which groups direct to ortho/para and which to meta. Questions on the product of a second substitution depend on it."
  },

  "Macromolecules": {
    summary: "Giant molecules: synthetic polymers (addition and condensation) and natural ones (carbohydrates, proteins, fats, nucleic acids, rubber).",
    points: [
      "Polymers are large molecules made of repeating monomer units joined by polymerisation.",
      "Addition polymers form from alkenes without losing any atoms: polythene, PVC, polystyrene, Teflon (PTFE), Perspex.",
      "Condensation polymers form with loss of a small molecule such as water or HCl: nylon (polyamide), Terylene (polyester), Bakelite.",
      "Thermoplastics soften when heated and can be remoulded (polythene). Thermosets set permanently (Bakelite).",
      "Carbohydrates: glucose is a monomer of starch, glycogen and cellulose. Sucrose is glucose + fructose. Starch gives a blue-black colour with iodine.",
      "Proteins are polymers of amino acids linked by peptide bonds (–CONH–). Tests: biuret (purple), xanthoproteic (yellow with HNO₃).",
      "Fats and oils are esters of glycerol and fatty acids. Natural rubber is polyisoprene; vulcanising with sulphur makes it harder and more elastic.",
      "Problems: most plastics are non-biodegradable and cause pollution. Solutions include recycling and biodegradable polymers."
    ],
    formulas: [
      "nCH₂=CHCl → (–CH₂–CHCl–)ₙ (PVC)",
      "Amino acid + amino acid → dipeptide + H₂O"
    ],
    tip: "To spot the type of polymer, check whether a small molecule is lost. If yes, it is a condensation polymer; if not, an addition polymer."
  },

  "Petroleum Industry": {
    summary: "Crude oil and natural gas: formation, refining by fractional distillation, cracking and reforming, fuel quality, petrochemicals and the Nigerian oil industry.",
    points: [
      "Crude oil (petroleum) formed over millions of years from buried marine organisms under heat and pressure. It is a mixture of hydrocarbons, mainly alkanes.",
      "Fractional distillation separates crude oil by boiling point into fractions: refinery gas, petrol (gasoline), naphtha, kerosene, diesel, lubricating oil, and bitumen at the bottom.",
      "Cracking breaks long-chain alkanes into shorter, more useful alkanes and alkenes, using heat (thermal) or a catalyst (catalytic cracking, zeolites).",
      "Reforming and isomerisation turn straight chains into branched or cyclic hydrocarbons, which raises the octane number.",
      "Octane number measures resistance to knocking (pre-ignition). 2,2,4-trimethylpentane is 100 and heptane is 0. Branched alkanes have higher octane numbers.",
      "Natural gas is mainly methane. It is used as fuel and to make hydrogen and petrochemicals. Liquefied petroleum gas (LPG) is mainly propane and butane.",
      "Petrochemicals made from oil: plastics, fertilisers, detergents, synthetic rubber, solvents and drugs.",
      "Nigeria's oil comes mainly from the Niger Delta. Refineries are at Port Harcourt, Warri and Kaduna. Problems include oil spills, gas flaring and environmental damage."
    ],
    formulas: [
      "C₁₀H₂₂ → C₈H₁₈ + C₂H₄ (cracking)"
    ],
    tip: "Know the fractions in order from top to bottom of the column, with a use for each. Boiling point and chain length increase going down."
  }
};
