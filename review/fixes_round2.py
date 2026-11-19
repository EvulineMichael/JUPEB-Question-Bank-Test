"""Answer-review fixes (round 2: full read of every objective question).
Run once from the project folder:  python3 review/fixes_round2.py
Uses the same safe field-level editing as apply_fixes.py and appends to review/changes-log.md."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from apply_fixes import spans, set_field, ROOT

FIXES = []
def fx(**k): FIXES.append(k)
def ex(f, n, note, why=None): fx(f=f, n=n, kind="exclude", note=note, why=why or note.split("\n")[0])
def ans(f, n, a, expl, why): fx(f=f, n=n, kind="answer", answer=a, explanation=expl, why=why)
def expl(f, n, e, why): fx(f=f, n=n, kind="explanation", explanation=e, why=why)

# ======== FIXES (appended subject by subject) ========
# ---- maths/2015 ----
ex("maths/2015.json", 5, "The point (−3, 6) is not on the circle as printed: (−3)² + 6² = 45, but x² + y² = 15. So there is no tangent at that point.\n\nThe paper most likely meant 2x² + 2y² = 90 (x² + y² = 45). Then the tangent at (x₁, y₁) is xx₁ + yy₁ = 45:\n−3x + 6y = 45 → x − 2y + 15 = 0 (option D).",
   "Point (−3, 6) is not on x² + y² = 15; the old working actually gave option B. Intended answer D only if the circle is x² + y² = 45.")
ex("maths/2015.json", 15, "∫₁ᵉ x⁻² dx = [−1/x]₁ᵉ = −1/e + 1 = 1 − 1/e ≈ 0.632.\n\nNone of the options (0, 2, 1, 2e) is correct as printed. The answer would be 1 if the integrand were 1/x (∫₁ᵉ 1/x dx = ln e − ln 1 = 1), which is probably what was meant.",
   "Correct value 1 − 1/e is not an option (key said 1).")
ex("maths/2015.json", 16, "∫₀^π cos x dx = [sin x]₀^π = sin π − sin 0 = 0.\n\nNone of the options (2, 7, −1, 1) is 0. If the integrand were sin x, the answer would be 2.",
   "Correct value 0 is not an option (key said 1).")
ex("maths/2015.json", 19, "dy/dx = 2x + 3 → y = x² + 3x + C. Through the origin, C = 0, so y = x² + 3x = x(x + 3).\n\nNone of the options gives x(x + 3). Option A, x(x + 2), would be right if the gradient were 2x + 2.",
   "Correct curve x(x + 3) is not an option (key said x(x + 2)).")
ex("maths/2015.json", 25, "By the product rule: dy/dx = eˣ + (x − 1)eˣ = xeˣ.\n\nNone of the printed options is xeˣ (option B is printed as 'eˣ 2x').",
   "Correct derivative xeˣ is not an option.")
ex("maths/2015.json", 29, "Scalar projection of a on b = (a·b)/|b|.\na·b = 3(2) + (−1)(1) + 5(−3) = −10, |b| = √14, so the projection is −10/√14 ≈ −2.67.\n\nNone of the options is −10/√14 (option A is −2/√14).",
   "Correct value −10/√14 is not an option.")
ex("maths/2015.json", 37, "2a − 5b = (4 − 15, 6 + 25, 10 − 10) = (−11, 31, 0). Adding λc = (λ, −λ, 0) gives (λ − 11, 31 − λ, 0).\n\nPerpendicular to the x-axis means the i-component is 0, so λ = 11. None of the options (8, 9, 10, 7) is 11.",
   "Working gives λ = 11, which is not an option (key said 10).")
expl("maths/2015.json", 36, "Let T₁ be the string at 30° and T₂ the string at 45° to the horizontal. Weight = 8 × 9.8 = 78.4 N.\n\nHorizontal (the pulls balance): T₁ cos30° = T₂ cos45° → 0.866 T₁ = 0.7071 T₂ → T₁ = 0.8165 T₂\nVertical (they hold up the weight): T₁ sin30° + T₂ sin45° = 78.4 → 0.5 T₁ + 0.7071 T₂ = 78.4\n\nSubstitute: 0.408 T₂ + 0.7071 T₂ = 78.4 → 1.115 T₂ = 78.4 → T₂ ≈ 70.3 N\nT₁ = 0.8165 × 70.3 ≈ 57.4 N",
     "Old working mixed up sin and cos and reached T₂ = 40.6 N, contradicting the answer.")
# ---- maths/2019 ----
ans("maths/2019.json", 28, "C", "The upper limit should read z, not 2: ∫₀ᶻ 12x² dx = 1372.\n\n∫₀ᶻ 12x² dx = [4x³]₀ᶻ = 4z³\n4z³ = 1372 → z³ = 343 → z = 7.",
    "With the upper limit z (printed as 2), 4z³ = 1372 gives z = 7 = option C. The old key 14 came from guessing z² = 196.")
expl("maths/2019.json", 15, "The second factor should read log₃4 (the chain of logs only links up that way): log₂3 × log₃4 × log₄5 × log₅6 × log₆7 × log₇8.\n\nChange of base: logₐb × log_b c = logₐc. Each step cancels the middle number:\nlog₂3 × log₃4 = log₂4\nlog₂4 × log₄5 = log₂5 … and so on, down to log₂8.\n\nlog₂8 = 3, because 2³ = 8.",
     "Old working mixed log₂4 and log₃4 and multiplied 2 × 3/2. Explained the chain properly and noted the misprint.")
# ---- maths/2021 ----
ans("maths/2021.json", 41, "C", "A 5-letter code-word that starts and ends with A uses both A's at the ends:\nA _ _ _ A\n\nThe 3 middle places are filled from the 5 other letters L, G, E, B, R with no repeats:\n5 × 4 × 3 = ⁵P₃ = 60.",
    "Only the 3 middle places are free: ⁵P₃ = 60 = option C. The old working filled '5 remaining positions' (5! = 120), but a 5-letter word has only 3 middle places.")
expl("maths/2021.json", 5, "The left side should read 9^(x²) (9 to the power x²).\n\n9^(x²) = (3²)^(x²) = 3^(2x²)\nSo 3^(2x²) = 3^(5x − 2) → 2x² = 5x − 2\n2x² − 5x + 2 = 0 → (2x − 1)(x − 2) = 0\nx = 1/2 or x = 2.",
     "Old working treated 9x² as (3x)² and jumped to the answer. Shown the index method properly.")
ex("maths/2021.json", 27, "y = e^(2x−1): dy/dx = 2e^(2x−1), d²y/dx² = 4e^(2x−1).\n\nd²y/dx² − 2 dy/dx − 2y = 4e^(2x−1) − 4e^(2x−1) − 2e^(2x−1) = −2e^(2x−1) = −2y.\n\nThe result is −2y, which changes with x, so none of the constant options (2, 1, 0, −2) is correct.",
   "The expression equals −2y, not a constant; no option is correct (key said −2).")
ex("maths/2021.json", 34, "Weight = 6 × 9.8 = 58.8 N. With the strings at 20° and 60° to the vertical (Lami's theorem):\nT₁ = 58.8 × sin60° ÷ sin80° ≈ 51.7 N\nT₂ = 58.8 × sin20° ÷ sin80° ≈ 20.4 N\nT₁ + T₂ ≈ 72.1 N.\n\nNone of the options matches (the key gave 87.71 N without working).",
   "Working gives T₁ + T₂ ≈ 72.1 N; no option matches (key 87.71 N had no working).")
# ---- maths/2025 (all types) ----
ans("maths/2025-typea.json", 7, "D", "BURNING has 7 letters, with N appearing twice.\n\nFix B at the start and G at the end. The 5 letters in between are U, R, N, I, N.\n\nArrangements = 5!/2! = 120/2 = 60.",
    "N appears twice in BURNING, so 5!/2! = 60 = option D (same fix as Type B Q37; Type C is keyed D).")
def sub(f, n, old, new, why, answer=None, explanation=None):
    fx(f=f, n=n, kind="text", old=old, new=new, why=why, answer=answer, explanation=explanation)
sub("maths/2025-typea.json", 48, '"(x cos x + sin x + 1)/(x + sin x)²", "(x sin x + cos x + 1)/(x + sin x)²"',
    '"-(x cos x + sin x + 1)/(x + sin x)²", "-(x sin x + cos x + 1)/(x + sin x)²"',
    "Options A and B had lost their leading minus signs (Type B Q50 prints them). Restored, and the key moved from C to B = −(x sin x + cos x + 1)/(x + sin x)².",
    answer="B", explanation="Quotient rule: y′ = [(−sin x)(x + sin x) − cos x(1 + cos x)] / (x + sin x)²\n= [−x sin x − (sin²x + cos²x) − cos x] / (x + sin x)²\n= −(x sin x + cos x + 1) / (x + sin x)²")
# ---- physics/2015 ----
expl("physics/2015.json", 23, "Heisenberg's uncertainty principle: Δx Δp ≥ ħ/2, where ħ = h/2π (so ħ/2 = h/4π).\n\nThe options write 'h' where ħ (h-bar) is meant, so option C, Δx Δp ≥ h/2, is the intended answer. The key point is the 'greater than or equal to' sign: the product of the uncertainties can never be smaller than this limit.",
     "Old explanation claimed h/2 = ħ/2, which is wrong; explained that the option means ħ/2.")
ex("physics/2015.json", 44, "Magnetic flux (Φ = BA cos θ) is a scalar, so option A is not 'entirely vectors' as printed. Every other option also contains a scalar (mass, power, work, pressure).\n\nThe examiners' answer is A, which would be fully correct if it said magnetic field (flux density) instead of magnetic flux: velocity, magnetic field and reaction are all vectors.",
   "Magnetic flux is a scalar, so no option is entirely vectors (old explanation called flux a vector).")
ex("physics/2015.json", 50, "Both alpha rays (positive) and beta rays (negative) are charged, so both are deflected by electric and magnetic fields; only gamma rays are not. Options C and D are therefore both correct.\n\nThe examiners' answer is D (beta rays). Beta particles are bent much more than alpha particles because they are far lighter.",
   "Alpha and beta rays are both deflected by electric and magnetic fields: two correct options.")
# ---- physics/2019 ----
expl("physics/2019.json", 14, "Pressure is the same throughout the liquid: F₁/A₁ = F₂/A₂.\n\nThe area ratio is the square of the diameter ratio: A₁/A₂ = (4/30)² = 16/900.\nWeight of the car (g = 10 m/s²) = 1500 × 10 = 15 000 N.\n\nF₁ = 15 000 × 16/900 ≈ 266.7 N.\n\n(With g = 9.8 m/s² you get 261.3 N; the options use g = 10.)",
     "Old working used g = 9.8 (261.3 N) and then wrote '≈ 266.7 N'. Now worked with g = 10 throughout.")
ex("physics/2019.json", 37, "The statement in this question is wrong as printed: parallel conductors carrying currents in the SAME direction attract; currents in opposite directions repel.\n\nThe law the examiners meant is Ampère's law (option D), which describes the force between current-carrying conductors.",
   "The question states the physics backwards (opposite currents repel, not attract).")
# ---- physics/2021 ----
ans("physics/2021.json", 17, "D", "Entropy is a property of the system's state, so in any cyclic operation the system returns to its starting state and its entropy change is zero. That rules out options B and C.\n\nWhen work is turned into heat that the system absorbs at a constant temperature T (for example, stirring a liquid at constant temperature), the system's entropy rises by ΔS = Q/T > 0.\nTurning heat into work at constant temperature (option A) removes heat from the system, so its entropy falls.",
    "In a cyclic operation the system's entropy change is zero (entropy is a state function), so C cannot be right; converting work into heat at constant temperature gives ΔS = Q/T > 0 = option D.")
# ---- physics/2022 ----
ex("physics/2022.json", 27, "The net electric flux through any closed surface with no charge inside it is zero (Gauss's law): field lines enter one side of the ball and leave the other.\n\nThe flux that passes through the ball (lines entering it) equals E × its cross-section: Φ = E × πr² = 150 × π × 0.05² ≈ 1.18 N m²/C.\n\nThe key, 4.7 N m²/C, multiplies E by the whole surface area 4πr², which is not a flux in a uniform field. No option is correct.",
   "Flux through a sphere in a uniform field is 0 net, or E·πr² ≈ 1.18 N m²/C passing through; the key (E × 4πr²) is not physically meaningful.")
# ---- physics/2024 ----
ex("physics/2024.json", 6, "The question asks about the magnitudes. At uniform speed round a level curve:\n- acceleration: v²/r, constant in size (its direction keeps changing towards the centre)\n- velocity: its size (the speed) is constant; only its direction changes\n- force: mv²/r, constant in size\n\nSo strictly, option B (constant, constant, constant) describes the magnitudes. The examiners' answer is C, treating velocity as 'changing' because its direction changes. Because both readings are defensible, this question is left out of quizzes.",
   "Asks for magnitudes, so B (all constant) is strictly right, but the key is C (velocity 'changing' in direction). Ambiguous.")
# ---- physics/2025 ----
ex("physics/2025-typea.json", 34, "Magnitude: √(18² + 15²) = √549 ≈ 23.4 m/s.\n\nDirection: a wind blowing FROM the east pushes the boat towards the west, so the resultant points north-west, about tan⁻¹(15/18) ≈ 39.8° west of north.\n\nOption B gives the right speed but says north-east, so no option is fully correct as printed.",
   "A wind from the east pushes west: resultant is 23.4 m/s north-WEST; option B says north-east.")
# ---- chemistry/2015 ----
ans("chemistry/2015.json", 48, "B", "Hydrogen resembles the halogens because, like them, it is one electron short of a noble-gas configuration (H has 1 electron; helium has 2). So it can gain one electron to form a −1 ion.\n\nWith alkali metals it forms ionic hydrides such as Na⁺H⁻, just as chlorine forms Na⁺Cl⁻. It is also diatomic (H₂, like Cl₂).\n\nOption C (one electron in its shell) is how hydrogen resembles the alkali metals, not the halogens, which have 7 outer electrons.",
    "Forming ionic hydrides (Na⁺H⁻, like Na⁺Cl⁻) is hydrogen's resemblance to halogens = option B. The old key C (one outer electron) is its resemblance to alkali metals; halogens have 7 outer electrons.")
expl("chemistry/2015.json", 3, "Moles of Cu = 35.4 ÷ 63.5 = 0.557 mol.\nNumber of atoms = 0.557 × 6.02 × 10²³ ≈ 3.36 × 10²³ atoms.\n\nThe nearest option is B (3.27 × 10²³); the small difference comes from rounding in the original paper. The other options are far off: C is one whole mole, A is nearly two moles.",
     "Working gives 3.36 × 10²³; explained why B (3.27 × 10²³) is still the intended answer.")
# ---- chemistry/2019 ----
ex("chemistry/2019.json", 10, "Average oxidation number of sulphur:\nIn S₂O₃²⁻: 2x + 3(−2) = −2 → x = +2\nIn S₄O₆²⁻: 4x + 6(−2) = −2 → x = +2.5\n\nSo sulphur goes from +2 to +2.5 (it is oxidised while iodine is reduced). None of the options shows +2 to +2.5; the examiners' answer is B (+2 to +3).",
   "Sulphur goes from +2 to +2.5; no option shows this (key B says +2 to +3).")
sub("chemistry/2019.json", 49, '"C2H7COCl", "C2H7COCH3"', '"C3H7COCl", "C3H7COCH3"',
    "Options B and C printed the impossible group C₂H₇; corrected to C₃H₇ (propyl), and the explanation now names the right ketone (pentan-2-one, not butan-2-one).",
    explanation="A Grignard reagent adds to the C=O carbon of a ketone; after hydrolysis this gives a tertiary alcohol.\n\nIn the product C₂H₅–C(OH)(CH₃)–C₃H₇, the ethyl group came from C₂H₅MgBr. The other two groups on that carbon, CH₃ and C₃H₇, were already on the carbonyl carbon.\n\nSo P is CH₃COC₃H₇ (C₃H₇COCH₃), pentan-2-one.")
# ---- chemistry/2020 ----
ex("chemistry/2020.json", 14, "sp² hybrid orbitals are not involved in two of these species:\n- PCl₃: phosphorus has 3 bond pairs and 1 lone pair, so it is sp³ (option A).\n- CO₂: the carbon forms two double bonds in a straight line (180°), so it is sp (option D).\n\nBF₃ (boron) and C₂H₄ (each carbon) are sp². Because A and D are both correct, this question is left out of quizzes. The examiners' answer is A.",
   "Both PCl₃ (sp³) and CO₂ (sp) involve no sp² orbitals: two correct options.")
# ---- chemistry/2021 ----
sub("chemistry/2021.json", 34, '"Na⁺, Ne, F"]', '"Na⁺, Ne, F⁻"]',
    "Option B (N³⁻, O²⁻, F⁻) is in DEcreasing size. Option D is Na⁺, Ne, F⁻ (as in Chemistry 2015 Q20, keyed D); its minus sign had been lost. Restored it and moved the key from B to D.",
    answer="D", explanation="Na⁺, Ne and F⁻ all have 10 electrons (they are isoelectronic). With the same number of electrons, the particle with fewer protons holds its electrons less tightly and is larger:\nNa⁺ (11 protons) < Ne (10 protons) < F⁻ (9 protons).\nSo D is in order of increasing size.\n\nB is the wrong way round: N³⁻ > O²⁻ > F⁻ (decreasing). A and C also decrease in size across the period.")
ex("chemistry/2021.json", 49, "Two of the options are not reducing sugars:\n- Sucrose (B): its glycosidic bond joins the reducing carbons of glucose and fructose, so it has no free reducing group.\n- Cellulose (D): a polysaccharide, classed as non-reducing (only one end of each very long chain could reduce).\n\nFructose and maltose are reducing sugars. The examiners' answer is B (sucrose), but D is also correct.",
   "Sucrose and cellulose are both non-reducing: two correct options.")
# ---- chemistry/2023 ----
ans("chemistry/2023.json", 53, "B", "A nitrile R–CN is hydrolysed to the acid R–COOH (the CN carbon becomes the COOH carbon). A primary alcohol R–CH₂OH is oxidised (not hydrolysed) to R–COOH.\n\nB: CH₃CH₂CN → CH₃CH₂COOH (propanoic acid); CH₃CH₂CH₂OH → CH₃CH₂COOH (propanoic acid). Same acid.\n\nC: (CH₃)₂CHCN gives (CH₃)₂CHCOOH, but (CH₃)₂CHOH is a secondary alcohol and oxidises to propanone (a ketone), not an acid.\nA gives 2-methylpropanoic acid and ethanoic acid; D gives pentanoic acid and propanone.",
    "(CH₃)₂CHOH is a secondary alcohol and oxidises to propanone, not an acid, so C is wrong. CH₃CH₂CN and CH₃CH₂CH₂OH both give propanoic acid = option B.")
ex("chemistry/2023.json", 11, "This question cannot be answered as printed. Alkanes, ketones and carboxylic acids are not 'solvents used in the preparation of soap', and they do not share one type of intermolecular force: alkanes have only London (dispersion) forces, ketones add dipole–dipole forces, and only carboxylic acids form hydrogen bonds.\n\nThe examiners' answer is B (hydrogen bonding), which applies only to the carboxylic acids.",
   "Premise is wrong and the three compound classes have different intermolecular forces; no single option fits.")
ex("chemistry/2023.json", 17, "Every method listed gives hydrogen:\n- zinc + dilute acid: Zn + 2HCl → ZnCl₂ + H₂ (the usual laboratory method)\n- potassium hydride + water: KH + H₂O → KOH + H₂\n- sodium + water: 2Na + 2H₂O → 2NaOH + H₂\n- electrolysis of water: hydrogen at the cathode\n\nThe question means 'not a safe laboratory method'. Both B and C are violent reactions, so it is not clear which one is meant. The examiners' answer is B.",
   "KH + water and Na + water both produce H₂ and are both unsafe; the 'except' is ambiguous between B and C.")
ex("chemistry/2023.json", 29, "At the anode of the diaphragm cell: 2Cl⁻ → Cl₂ + 2e⁻.\n\nThis single reaction is described by two options: chloride ions are oxidised (C) and chlorine gas is produced (D). Both are correct, so this question is left out of quizzes. Hydrogen and hydroxide ions (A, B) are formed at the cathode.",
   "Options C (chloride oxidised) and D (chlorine produced) describe the same anode reaction: both correct.")
ex("chemistry/2023.json", 33, "Magnesium reacts with steam: Mg + H₂O → MgO + H₂, so X is magnesium oxide.\n\nMgO is a basic oxide (B) with a very high melting point, about 2850 °C (C). Two statements are NOT properties of MgO:\n- A: it is only very slightly soluble in water\n- D: it is not a reducing agent (magnesium metal is; its oxide is not)\n\nThe examiners' answer is A, but D is also correct.",
   "MgO is neither very soluble nor a reducing agent: options A and D are both 'not a property'.")
ex("chemistry/2023.json", 50, "Boyle's law: at constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure.\n\nThis can be written as P ∝ 1/V (option D) or as PV = constant (option C). Both say the same thing, so this question is left out of quizzes. PV = nRT is the ideal gas equation and V ∝ T is Charles's law.",
   "PV = constant (C) and P ∝ 1/V (D) are the same law: two correct options.")
ex("chemistry/2023.json", 55, "The structure as printed, CH₃CHClCH₂C≡C(CH₃)₂, is impossible: the last carbon would have five bonds (a triple bond plus two methyl groups).\n\nWithout knowing the intended structure, the name cannot be checked. Note also that IUPAC numbering gives the triple bond the lowest number, so a name like '5-chloro-2-methylpent-3-yne' (the key) would not be written that way.",
   "Printed structure gives a carbon five bonds; it cannot be named reliably.")
# ---- chemistry/2024 ----
ans("chemistry/2024.json", 26, "D", "CH₃–CHBr–CHBr–COOH has two chiral centres, C2 and C3. Each carries four different groups:\nC2: H, Br, COOH and CHBrCH₃\nC3: H, Br, CH₃ and CHBrCOOH\n\nThe two ends of the molecule are different (COOH and CH₃), so there is no internal mirror plane and no meso form. The number of optical isomers is 2ⁿ = 2² = 4 (two pairs of enantiomers).\n\n(A meso form, giving only 3 stereoisomers, needs identical ends, as in 2,3-dibromobutane or tartaric acid.)",
    "The two ends (COOH and CH₃) differ, so no meso form exists: 2² = 4 optical isomers = option D. The old explanation wrongly assumed a meso compound.")
ex("chemistry/2024.json", 16, "More than one statement here is not true:\n- B is false: a conjugate base is formed from an acid (by losing a proton), not from a base.\n- D is false: the conjugate base of a weak acid is an ion (e.g. CH₃COO⁻), not a salt, though it is often supplied as a salt.\n- A is an over-simplification: the conjugate base of a weak acid is a relatively strong base, but it is usually still a weak base.\n\nC is true. Because several options are 'not true', this question is left out of quizzes. The examiners' answer is D.",
   "Options B and D are both false (and A is loosely worded); more than one answer to 'which is not true'.")
# ---- chemistry/2025 ----
ans("chemistry/2025.json", 10, "C", "Hydrogen resembles the halogens because, like them, it is one electron short of a noble-gas configuration (H has 1 electron; helium has 2). So it can gain one electron to form a −1 ion.\n\nWith alkali metals it forms ionic hydrides such as Na⁺H⁻, just as chlorine forms Na⁺Cl⁻. It is also diatomic (H₂, like Cl₂).\n\nOption B (one electron in its shell) is how hydrogen resembles the alkali metals, not the halogens, which have 7 outer electrons.",
    "Same question as Chemistry 2015 Q48: forming ionic hydrides (like halides) is the resemblance to halogens = option C. One outer electron (old key B) is the resemblance to alkali metals.")
# ---- chemistry/2026-typea ----
sub("chemistry/2026-typea.json", 13, '"options": ["42", "1.6 x 0.8", "2.42", "1.62 x 0.8"]',
    '"options": ["(0.8² × 0.8) / 4²", "(1.6 × 0.8) / 2.4²", "(1.6² × 0.8) / 4²", "(1.6² × 0.8) / 2.4²"]',
    "The options had lost their fraction bars and powers (e.g. '42' for '/4²'). Restored them from the same question in Chemistry 2019 Q13; key D unchanged.",
    explanation="2NO₂ ⇌ 2NO + O₂, in a 1 dm³ container.\n\nStart: NO₂ = 4, NO = 0, O₂ = 0\nChange: O₂ formed = 0.8, so NO formed = 2 × 0.8 = 1.6 and NO₂ used = 1.6\nEquilibrium: NO₂ = 2.4, NO = 1.6, O₂ = 0.8 (mol dm⁻³)\n\nKc = [NO]²[O₂] / [NO₂]² = (1.6² × 0.8) / 2.4² ≈ 0.356")
ex("chemistry/2026-typea.json", 31, "None of the options is a correct rule as printed.\n\nSignificant figures are all the digits that are known reliably plus the first uncertain digit. All non-zero digits count, zeros between non-zero digits count, and trailing zeros after a decimal point count, but leading zeros (as in 0.0045) never count.\n\nOption D ('all digits in a number') is the examiners' answer but would wrongly count leading zeros; option A wrongly excludes every zero.",
   "No option states the rule correctly (D would count leading zeros); explanation already flagged it.")
expl("chemistry/2026-typea.json", 33, "Copper (Z = 29) would be expected to be [Ar] 4s² 3d⁹, but one 4s electron moves into the 3d subshell to fill it completely: [Ar] 4s¹ 3d¹⁰.\n\nA completely filled (d¹⁰) or exactly half-filled (d⁵) d subshell is especially stable. Copper is the filled case; chromium ([Ar] 4s¹ 3d⁵) is the half-filled case.",
     "Clarified that copper's anomaly comes from a completely filled 3d subshell (the old text said half-filled).")
# ---- biology/2015 ----
ex("biology/2015.json", 32, "Trace elements (micronutrients) are minerals needed in very small amounts. Both iron (A) and copper (B) are trace elements in human nutrition and plant nutrition: iron is needed for haemoglobin and for making chlorophyll, copper for some enzymes.\n\nCalcium and sulphur are major elements (macronutrients), needed in larger amounts. The examiners' answer is B (copper), but iron is equally correct.",
   "Iron and copper are both trace elements: two correct options.")
# ---- biology/2019 ----
fx(f="biology/2019.json", n=30, kind="dropdup", why="Question 30 was stored twice (identical apart from a line break), so it appeared twice in the paper.")
IMG = {"src": "/images/questions/biology/2019/bio-2019-obj-30.png", "alt": "Labelled diagram used for questions 30 to 32"}
for n in (31, 32):
    fx(f="biology/2019.json", n=n, kind="field", field="image", value=IMG,
       why="Questions 30–32 share one diagram, but only Q30 showed it; in quizzes and on its own Q%d could not be answered. Linked the same diagram." % n)
# ---- biology/2021 ----
ex("biology/2021.json", 35, "All three statements are true of the adult butterfly:\nI. It is the specialised reproductive stage of the life cycle (the caterpillar is the feeding and growing stage).\nII. Flight takes a lot of energy, which it gets from sugary nectar.\nIII. Because it flies, it carries the species to new places (dispersal).\n\nThat makes D (I, II and III) correct, but the key is A (II and III only). Because the key and the biology disagree, this question is left out of quizzes.",
   "All three statements are true (the adult is the specialised reproductive and dispersal stage), but the key is A (II and III only).")
ex("biology/2021.json", 46, "The evidence for evolution usually listed is: fossils (palaeontology), comparative embryology, comparative anatomy, molecular biology and the geographical distribution of species (biogeography).\n\nNatural selection (C) is not evidence for evolution at all: it is Darwin's explanation of how evolution happens. So C, not geography, is arguably the 'least supportive evidence'. The examiners' answer is D (geography). Because both can be argued, this question is left out of quizzes.",
   "Natural selection is the mechanism, not evidence, and biogeography is standard evidence; key D (geography) is doubtful.")
# ---- biology/2024 ----
ex("biology/2024.json", 19, "Yellowing of leaves (chlorosis) happens when a plant cannot make enough chlorophyll. Two of the options cause it:\n- Nitrogen (A): needed for chlorophyll and proteins; lack of it yellows the older leaves first, all over.\n- Magnesium (C): the central atom of every chlorophyll molecule; lack of it yellows the leaf between the veins.\n\nWithout more detail about the pattern of yellowing, both are correct. The examiners' answer is A.",
   "Both nitrogen and magnesium deficiency cause yellow leaves: two correct options.")
# ---- biology/2025 ----
ex("biology/2025.json", 4, "Two of the options are not sex-linked:\n- Sickle cell anaemia (A) is autosomal recessive: the gene is on chromosome 11.\n- Pattern baldness (D) is sex-influenced, not sex-linked: its gene is mainly autosomal, but it shows up more in males because of male hormones.\n\nHaemophilia and red–green colour blindness are true X-linked disorders. The examiners' answer is A, which is the clearest choice, but D is also not sex-linked.",
   "Baldness is sex-influenced (autosomal), not sex-linked, so A and D are both 'except' answers.")
ex("biology/2025.json", 49, "The common iliac artery divides into the internal iliac artery, which supplies the pelvis and its organs (including the womb), and the external iliac artery, which continues into the leg as the femoral artery.\n\nSo 'iliac artery' supplies both the leg (A) and the pelvis (C). The examiners' answer is A.",
   "Iliac arteries supply both the legs (external) and the pelvis (internal): two correct options.")
# ---- diagrams that exist but were not attached ----
fx(f="chemistry/2026-typea.json", n=22, kind="field", field="image",
   value={"src": "/images/questions/chemistry/2019/chem-2019-obj-44.png", "alt": "Organic compound structure for IUPAC naming"},
   why="'The compound below' had no structure shown. It is the same question (same options and answer) as Chemistry 2019 Q44, so that structure diagram is now linked.")
fx(f="physics/2024.json", n=4, kind="field", field="image",
   value={"src": "/images/questions/physics/2024/phy-2024-obj-3.png", "alt": "Velocity-time graph from question 3"},
   why="Q4 uses the graph from Q3 but did not show it, so in quizzes it could not be answered. Linked the same graph.")
# ---- economics/2019 ----
fx(f="economics/2019.json", n=5, kind="missing", note="The graph this question refers to is not in this copy of the paper, so point E cannot be identified.\n\nThe examiners' answer is A (productive efficiency). On a production possibility curve, any point on the curve shows productive efficiency: the economy is using all its resources fully.",
   why="'From the graph below' but no graph is included; the old explanation admitted guessing.")
# ---- economics/2020 ----
ex("economics/2020.json", 47, "Real national income grows by about 12% − 10% = 2% (more exactly, 1.12 ÷ 1.10 ≈ 1.018, a rise of 1.8%). So real national income has increased: option A is true.\n\nBut population grew by 3%, faster than real income, so real income per head fell: 1.018 ÷ 1.03 ≈ 0.988, a fall of about 1.2%. So option B is also true.\n\nBecause two options are correct, this question is left out of quizzes. The examiners' answer is A.",
   "Real income rose about 1.8% but population rose 3%, so A (real income up) and B (real income per head down) are both true.")
# ---- economics/2021 ----
ans("economics/2021.json", 40, "B", "Who bears a tax depends on elasticities: the side of the market that is less able to react carries more of the burden.\n\nIf demand is perfectly ('purely') elastic, buyers will not pay even a slightly higher price, so the price cannot rise at all. The whole tax then comes out of the producer's receipts: the producer bears the entire burden (option B).\n\nOption D (demand more elastic than supply) only means the producer bears the larger share, not all of it.",
    "'Entire burden' needs perfectly elastic demand = option B; demand merely more elastic than supply (old key D) gives the producer only the larger share.")
ex("economics/2021.json", 5, "All four options are factors that raise a country's national income: natural resources, the size and quality of the labour force, technical knowledge, and water resources (for farming, power and industry). There is no real exception.\n\nThe examiners' answer is D, presumably because water is already part of 'natural resources' (option A), so it is not a separate factor.",
   "All four options positively affect national income; the 'except' answer is not defensible (old explanation admitted this).")
ex("economics/2021.json", 30, "The labour force is everyone of working age who is either employed or actively looking for work (the employed plus the unemployed).\n\nNeither printed option matches exactly: C ('in paid employment') leaves out the unemployed who are seeking work, and B ('within the working age') also counts people who are not working or seeking work, such as students. The examiners' answer is C.",
   "Labour force = employed + job-seekers; neither C (paid employment only) nor B (all of working age) is correct.")
fx(f="economics/2021.json", n=39, kind="missing", note="The table this question refers to ('the table above') is not in this copy of the paper.\n\nThe examiners' answer is B: a table where each extra unit adds less total utility than the one before illustrates the law of diminishing marginal utility.",
   why="Refers to 'the table above', which is not included; the old explanation described numbers that are not shown.")
# ---- economics/2024 ----
ex("economics/2024.json", 44, "Saving is income not consumed: S = Y − C = Y − (300 + 0.45Y) = −300 + 0.55Y.\n\n(Check: MPS = 1 − MPC = 1 − 0.45 = 0.55, and when income is zero people dis-save 300.)\n\nNone of the options is printed as −300 + 0.55Y. Option D (S = −300 − 0.55Y) has the wrong sign on 0.55Y, which would mean saving falls as income rises.",
   "Correct saving function −300 + 0.55Y is not an option; D has the sign of 0.55Y wrong.")
ex("economics/2024.json", 11, "Allocative efficiency means resources are used to produce the combination of goods that society values most, where price equals marginal cost (P = MC).\n\nOption C ('output is produced using least-cost technique') is the definition of productive efficiency, not allocative efficiency. None of the options states allocative efficiency correctly, though D (satisfying households' wants) is the closest idea. The examiners' answer is C.",
   "The key (least-cost technique) defines productive, not allocative, efficiency.")
# ---- economics/2025 ----
ex("economics/2025.json", 21, "The simple multiplier is k = 1/(1 − MPC) = 1/MPS. So the size of the multiplier is determined by the marginal propensity to consume (C) and, equally, by the marginal propensity to save (D): a higher MPC (lower MPS) gives a larger multiplier.\n\nBecause C and D are both correct, this question is left out of quizzes. The examiners' answer is C.",
   "Multiplier = 1/(1 − MPC) = 1/MPS, so MPC (C) and MPS (D) are both correct.")
# ---- government/2015 ----
ex("government/2015.json", 6, "In the Old Oyo Empire, the Alaafin was chosen by the Oyo Mesi, the council of seven kingmakers led by the Bashorun. The Oyo Mesi is not among the options.\n\nThe Ogboni (the examiners' answer, D) was a powerful council of elders and earth priests that checked the Oyo Mesi and played a part in the Alaafin's installation, but it did not select him. So no option is fully correct.",
   "The Alaafin was selected by the Oyo Mesi, which is not an option (old explanation admitted this).")
ex("government/2015.json", 21, "In a federal system, power is divided by the constitution between the central government and the component units (states or regions); each is supreme in its own sphere. The constitution is usually written and rigid, and it is supreme over the laws of every unit.\n\nNone of the options describes this correctly. Option A (the central government has power over everything) describes a unitary system, not a federal one. The examiners' answer is A.",
   "The key (central government has power over everything) describes a unitary system; no option is correct for federalism.")
ex("government/2015.json", 27, "Getting involved in the political activities of a society (voting, campaigning, joining parties, protesting) is called political participation. That term is not among the options.\n\nPolitical education (the examiners' answer, A) means teaching people about politics, which can lead to participation but is not the same thing.",
   "The correct term, political participation, is not an option (old explanation admitted this).")
# ---- government/2019 ----
expl("government/2019.json", 7, "The traditional approach (philosophical, legal, historical and institutional) is called non-scientific because it is normative: it asks what the ideal state ought to be and relies on value judgments, not on observation and measurement.\n\nThat is what 'utopian and idealistic' (option A) means. Options B and C describe the scientific (behavioural) approach, which uses facts and empirical observation.",
     "Removed a note claiming the right answer was 'not listed'; option A ('utopian and idealistic') is a fair description of the normative traditional approach.")
ex("government/2019.json", 29, "Nigeria was a founding member of more than one of these organisations:\n- OAU (A): founded in Addis Ababa in 1963, with Nigeria among the 32 founding states.\n- ECOWAS (D): founded by the Treaty of Lagos in 1975, with Nigeria (under Gowon) as a leading founder.\n- AU (C): replaced the OAU in 2002, with Nigeria a founding member.\nECOMOG is a peacekeeping force, not a membership organisation.\n\nBecause A, C and D are all correct, this question is left out of quizzes. The examiners' answer is A.",
   "Nigeria was a founding member of the OAU, ECOWAS and the AU: three correct options.")
# ---- government/2020 ----
ans("government/2020.json", 32, "B", "The three parties registered for the 1999 elections that returned Nigeria to civilian rule were the People's Democratic Party (PDP), the All People's Party (APP) and the Alliance for Democracy (AD).\n\nThe APP was renamed the All Nigeria People's Party (ANPP) only later, in 2002, so 'ANPP' (option C) did not exist in 1999. The APC was formed in 2013.",
    "In 1999 the third party was the APP; it became the ANPP only in 2002. So PDP, APP and AD = option B.")
# ---- government/2021 ----
ex("government/2021.json", 39, "None of the options is correct. Nigeria's first coup, on 15 January 1966, killed the Prime Minister, Sir Abubakar Tafawa Balewa, and the premiers of the Northern and Western Regions. The Head of State, President Nnamdi Azikiwe, was abroad and survived.\n\nGeneral Aguiyi-Ironsi (the examiners' answer, C) came to power after that first coup and was killed in the second (counter-)coup of 29 July 1966.",
   "Aguiyi-Ironsi was killed in the second coup (July 1966), not the first; the first coup killed PM Balewa, who is not an option.")
ex("government/2021.json", 32, "Laws made by a local government are called bye-laws. 'By-laws' (option B) is simply another accepted spelling of the same word, so options A and B are both correct. This question is left out of quizzes.",
   "'Bye-laws' and 'by-laws' are both correct spellings: two correct options.")
# ---- literature: questions on unseen passages / extracts that are not in this copy ----
def lit_missing(year, nums, what="passage"):
    for n in nums:
        fx(f=f"literature/{year}.json", n=n, kind="missing",
           note=f"This question is about a {what} printed in the original exam paper, but the {what} is not included in this copy, so it cannot be answered here. "
                "The examiners' answer is shown, but without the text you cannot check it.\n\n"
                "Tip: in the exam, read the passage at least twice before answering, and look for evidence in specific words and lines.",
           why=f"Refers to a {what} that is not included; it cannot be answered without it.")
lit_missing(2015, [40, 41, 43, 44, 45, 46, 47, 49], "prose passage and poem")
lit_missing(2019, [30, 31, 37, 38, 40, 41, 42, 43, 44], "poem and prose passage")
lit_missing(2020, [29, 31, 33, 37, 39, 40, 41, 42], "poem and prose passage")
lit_missing(2021, [31, 32, 35, 36, 37, 44, 46, 47, 48, 49], "poem and prose passage")
fx(f="literature/2021.json", n=28, kind="missing", note="This question asks about 'the poems studied', meaning the poems on the course syllabus for that year, which are not listed here. It cannot be answered without that list.",
   why="Depends on the list of set poems for that year, which is not included.")
lit_missing(2024, [18, 19, 20, 31, 33, 42, 43, 44, 45, 46, 47, 50], "extract (including extracts from Othello)")
lit_missing(2025, [1, 2, 3, 23, 27, 28, 29, 33, 34, 44, 45, 46, 47], "extract (including extracts from Othello)")

# ---- literature: wrong or ambiguous keys ----
ex("literature/2015.json", 4, "Options B, C and D are all made up of plays by Sophocles: Antigone, Oedipus at Colonus and Electra are all his. (Option A is wrong because The Flies is by Jean-Paul Sartre.)\n\nHis best-known plays are usually said to be Oedipus Rex (Oedipus the King) and Antigone, a pair that is not offered. Because more than one option fits, this question is left out of quizzes. The examiners' answer is B.",
   "B, C and D all list genuine Sophocles plays; 'best known' (Oedipus Rex and Antigone) is not an option.")
for yr, n, key in ((2015, 23, "A (Daniel Defoe)"), (2020, 16, "B (Daniel Defoe)")):
    ex(f"literature/{yr}.json", n, "Both Daniel Defoe (Robinson Crusoe, 1719) and Henry Fielding (Tom Jones, 1749) are commonly called 'the father of the English novel'. Samuel Richardson (Pamela, 1740) is also sometimes given the title. Defoe is credited with the first English novel, while Fielding is credited with giving the novel its form and theory.\n\nBecause both Defoe and Fielding are among the options, this question is left out of quizzes. The examiners' answer is " + key + ".",
       "Defoe and Fielding are both widely called the father of the English novel, and both are options.")
ex("literature/2020.json", 19, "Several of the listed periods came before the Victorian period (1837–1901): the Middle Ages, the Renaissance, the Classical (Neoclassical/Augustan) period and the Romantic period. All four options are correct as the question is worded.\n\nThe examiners' answer is C (the Romantic period), the one that comes immediately before the Victorian period.",
   "Every option lists a period that came before the Victorian era; only 'immediately before' would make C the single answer.")
ex("literature/2020.json", 22, "Eighteenth-century English literature had two great prose successes: the periodical essay (Addison and Steele's The Spectator, Johnson's The Rambler) and the rise of the novel (Defoe, Richardson, Fielding, Sterne).\n\nThe examiners' answer is D (the essay), but many textbooks name the novel (C) as the century's greatest achievement. Because both answers can be argued, this question is left out of quizzes.",
   "The 18th century is known for both the periodical essay and the rise of the novel; key D vs C is ambiguous.")
ex("literature/2021.json", 3, "The parts of a Greek tragedy come in this order: prologue → parodos (the chorus's entry song) → episodes separated by stasima (choral odes) → exodos (the closing scene).\n\nThe exodos therefore comes after all of the prologue, the parodos and the stasima. The most precise answer is 'after the (last) stasimon' (C), but the examiners' answer is A (parodos). Because the question allows more than one answer, it is left out of quizzes.",
   "The exodos follows the prologue, parodos and stasima; the key (parodos) is not the most precise, and several options fit.")
ex("literature/2025.json", 18, "Figures of sound depend on the sound of words: consonance, assonance, alliteration and onomatopoeia. A pun plays on words that sound alike (or the same) but differ in meaning, so it is partly a figure of sound.\n\nParallelism (B) repeats a grammatical structure ('I came, I saw, I conquered'); it is a figure of structure, not of sound. So B is a strong 'except' answer, but the examiners' answer is A (pun). This question is left out of quizzes.",
   "Parallelism is a structural device, so B is at least as good an 'except' answer as the key (pun).")
# ---- crs ----
ans("crs/2021.json", 49, "D", "The Apostolic Church in Nigeria grew out of a prayer group formed in Ijebu-Ode during the 1918 influenza epidemic, which killed many people. Members of St Saviour's Anglican Church, led by Joseph Shadare (with Sophia Odunlami, whose visions about prayer and healing were central), met to pray for healing instead of relying on medicine.\n\nThe group became known as the Precious Stone (Diamond) Society. It later linked with the Faith Tabernacle and then the British Apostolic Church, and the Joseph Ayo Babalola revival of 1930 followed. There was no 1918 earthquake in Ijebu-Ode.",
    "The movement began in the 1918 influenza epidemic (Precious Stone Society, Ijebu-Ode) = option D; there was no 1918 earthquake.")
ex("crs/2021.json", 46, "Textual criticism tries to recover the exact original wording of the New Testament books by comparing the surviving hand-written copies (manuscripts) and their variant readings. (Chemistry-style rule of thumb: textual = text; Q21 of this same paper defines it correctly.)\n\nNone of the options says this. Translation into other languages (B, the key) is a separate task; authorship (A) belongs to historical criticism; origins in different traditions (C) is source/form criticism; circulation (D) is the history of transmission.",
   "Textual criticism establishes the original wording from manuscripts; the key (translation into other languages) is wrong and no option is right.")
ex("crs/2015.json", 49, "Moses Orimolade Tunolase founded the Cherubim and Seraphim Church in 1925 (the examiners' answer). But Garrick Sokari Braide led an independent prophetic movement in the Niger Delta from about 1915, which became the Christ Army Church, ten years earlier.\n\nWhich founder counts as 'first' depends on the textbook, so this question is left out of quizzes.",
   "Garrick Braide's movement (c. 1915) predates Orimolade's Cherubim and Seraphim (1925); 'first' is disputed.")
ex("crs/2019.json", 18, "Matthew presents Jesus above all as a new Moses: he escapes a king's massacre of baby boys as a child, comes out of Egypt, and gives the new law on a mountain (the Sermon on the Mount, in five teaching blocks like the five books of Moses). Moses is not among the options.\n\nMatthew does quote Isaiah often to show that prophecy is fulfilled (the examiners' answer, A), but quoting a prophet is not the same as likening Jesus to him.",
   "Matthew's Christology likens Jesus to Moses, who is not an option; the key (Isaiah) only reflects Matthew's quotations.")
ans("crs/2025.json", 12, "C", "The Deuteronomic source (D) is the one that insists on a single central shrine: Deuteronomy 12 commands Israel to worship and sacrifice only 'at the place the LORD your God will choose', which became Jerusalem. This matches King Josiah's reform (621 BC), when the 'book of the law' was found and local shrines were destroyed.\n\nThe Priestly source (P) is concerned with worship, priesthood, sacrifice and holiness in general, but centralisation of worship is the hallmark of D.",
    "Centralisation of worship in one shrine is the hallmark of the Deuteronomist (D) = option C, not P.")
ans("crs/2024.json", 38, "B", "Matthean priority means Matthew was the first Gospel written. The neo-Griesbachian (Two-Gospel) hypothesis (option C) supports Matthean priority: it says Matthew came first, then Luke, and Mark used both.\n\nThe hypothesis against Matthean priority is the Two-Document (Two-Source) Theory: Mark was written first, and Matthew and Luke each used Mark plus the sayings source Q.",
    "The neo-Griesbach hypothesis SUPPORTS Matthean priority (Matthew first); the theory against it is the Two-Document theory (Markan priority) = option B.")
ex("crs/2024.json", 19, "African Independent (Indigenous) Churches (AICs) are churches founded and led by Africans, such as the Christ Apostolic Church.\n\nThe Apostolic Church (A) came from the British Apostolic Church and the Apostolic Faith (C) from the United States, so neither is strictly an AIC. 'The Apostolic Gospel' (D, the examiners' answer) is not a known church. Because more than one option is 'not an AIC', this question is left out of quizzes.",
   "The Apostolic Church (British) and Apostolic Faith (American) are also not AICs: more than one correct option.")
ex("crs/2025.json", 39, "The kingdom divided after Solomon's death (about 931 BC) because of Solomon's heavy taxes, forced labour and idolatry, and Rehoboam's harsh refusal to lighten the burden (1 Kings 11–12).\n\nTwo options are not causes of the division: Saul's disobedience (A) cost Saul's family the throne, and 'David's bad economic policy' (B) is not a biblical cause. The examiners' answer is B.",
   "Neither Saul's disobedience nor 'David's economic policy' caused the division: two correct options.")
# ---- irs ----
ex("irs/2015.json", 49, "'Innamal-a'malu binniyat' (actions are judged by intentions) is the first hadith in Imam an-Nawawi's Forty Hadith. In hadith classification it is the classic example of a Hadith Gharib (A): in its earliest links it was reported by only one narrator at each stage ('Umar, then 'Alqamah, then Muhammad at-Taymi, then Yahya ibn Sa'id), though it is fully authentic (sahih).\n\n'Hadith an-Nawawi' (D, the examiners' answer) names the collection it appears in, not a type of hadith. Because A is the stronger answer by hadith science, this question is left out of quizzes.",
   "By hadith classification this hadith is the standard example of a gharib hadith (A); 'Hadith an-Nawawi' (key D) is a collection, not a type.")
ex("irs/2020.json", 10, "The Makkan leaders opposed Islam for religious, social, political and economic reasons together. Religion was in fact central: Islam's call to worship Allah alone attacked the idols of the Ka'bah and the religion of their forefathers.\n\nSo 'religious reason' (the examiners' answer, A) is not a sound 'except'. All four options were real reasons, and this question is left out of quizzes.",
   "Religious reasons (rejecting idol worship) were central to Makkan opposition, so the 'except' key is not defensible.")
ex("irs/2022.json", 29, "Historians usually stress the economic reason: the Quraysh earned wealth and prestige from pilgrims visiting the idols of the Ka'bah, and feared Islam would end that trade. But 'economic' (C, the key) and 'financial' (D) mean almost the same thing here, so a student choosing D is not wrong. This question is left out of quizzes.",
   "'Economic' (key) and 'financial' are effectively the same answer: two correct options.")
ex("irs/2021.json", 11, "During the Prophet's lifetime the Qur'an was written on whatever was available: palm-leaf stalks, thin white stones (tablets), pieces of leather and parchment, and the shoulder blades (scapulae) of camels and other animals.\n\nSo the scapula of a camel (the examiners' answer, B) WAS used. Among the options, 'dried leaves' (D) is the only doubtful one, since palm stalks rather than leaves were used. Because the key is wrong, this question is left out of quizzes.",
   "Camel shoulder-blades (scapulae) were among the best-known writing materials for the Qur'an, so the key is wrong.")
ex("irs/2021.json", 32, "'Sunnah' is often used interchangeably with 'hadith'. But isnad (the chain of narrators) and matn (the text) are the two parts of a hadith, not other names for it, and 'Sunni' names a Muslim group.\n\nSo A (Sunni), C (Isnad) and D (Matn) are all 'not used interchangeably for hadith'. The examiners' answer is A. This question is left out of quizzes.",
   "Isnad and Matn are parts of a hadith, not synonyms for it, so three options fit the 'except'.")
ans("irs/2025.json", 38, "A", "Hadith 1 of an-Nawawi ('Actions are judged by intentions…') is a famous example of a hadith ahad. In its first generations it was reported by only one narrator at each stage: 'Umar ibn al-Khattab, then 'Alqamah, then Muhammad ibn Ibrahim at-Taymi, then Yahya ibn Sa'id al-Ansari. Only after Yahya did hundreds of people narrate it.\n\nA mutawatir hadith must be reported by large numbers in every generation, so this hadith is not mutawatir, even though it is completely authentic (sahih). Scholars call it ahad, and more specifically gharib.",
    "This hadith has a single narrator in each of its first four generations, the classic example of an ahad (gharib) hadith = option A, not mutawatir.")
ex("irs/2025.json", 17, "The 'Year of Sorrow' ('Amul-Huzn, about 619 CE) was named after two deaths that came close together: the Prophet's uncle and protector Abu Talib, and his wife Khadijah.\n\nSo options A (Abu Talib) and B (Khadijah, the examiners' answer) are both correct, and this question is left out of quizzes.",
   "The Year of Sorrow marks the deaths of both Abu Talib and Khadijah: two correct options.")
ex("irs/2024.json", 14, "Yawmul-Qiyamah (Day of Resurrection), Yawmul-Hisab (Day of Reckoning) and Yawmud-Din (Day of Judgement) are all names of the Last Day. Each one points to the Hereafter, so B, C and D are all correct. Only Yawmul-'Arafah (the 9th of Dhul-Hijjah, during Hajj) is not.\n\nThe examiners' answer is B. Because three options are correct, this question is left out of quizzes.",
   "Yawmul-Qiyamah, Yawmul-Hisab and Yawmud-Din are all names of the Last Day: three correct options.")
# ---- ijmb economics ----
ex("ijmb/economics/2023-paper3.json", 46, "Upward pressure on price comes from excess demand, which can be caused by either an increase in demand (A) or a decrease in supply (D). Both shift the market so that, at the old price, buyers want more than sellers offer.\n\nBecause A and D are both correct, this question is left out of quizzes. The examiners' answer is A.",
   "Both an increase in demand (A) and a decrease in supply (D) push price up: two correct options.")
ex("ijmb/economics/2025-paper3.json", 43, "A demand curve shifts when something other than the good's own price changes. Both a change in the price of other goods (substitutes or complements, option A) and a change in money income (option C) shift the demand curve.\n\nA change in the good's own price (B) only causes a movement along the curve, so 'all of the above' (D) is wrong. Because A and C are both correct, this question is left out of quizzes. The examiners' answer is A.",
   "Both a change in other goods' prices (A) and a change in income (C) shift demand: two correct options.")
