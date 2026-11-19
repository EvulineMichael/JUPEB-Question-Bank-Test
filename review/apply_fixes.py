"""Answer-review fixes (round 1). Run once from the project folder:  python3 review/apply_fixes.py

Edits only the named fields inside each question, so the rest of every file stays
exactly as it was. Writes review/changes-log.md listing every change with its reason.
Kinds of change:
  answer         the answer key was wrong; corrected
  explanation    key was right, explanation was wrong / unclear / had drafting notes
  exclude        no option is correct as printed (or two options are the same):
                 kept for study with a note, left out of quizzes
  missing        the excerpt / diagram / data the question needs is not in this copy
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEC = json.JSONDecoder()

FIXES = [
    # ---------------- wrong answer keys ----------------
    dict(f="maths/2025-typea.json", n=1, kind="answer", answer="B",
         why="Solving x − 2y = −3 and x + 4y = 3 gives (−1, 1) = option B, not C. Types B and C of the same paper are keyed B.",
         explanation="2ˣ × 4⁻ʸ = 2ˣ × 2⁻²ʸ = 2ˣ⁻²ʸ = 1/8 = 2⁻³, so x − 2y = −3 … (1)\n3ˣ × 9²ʸ = 3ˣ × 3⁴ʸ = 3ˣ⁺⁴ʸ = 27 = 3³, so x + 4y = 3 … (2)\n\nSubtract (1) from (2): 6y = 6, so y = 1.\nThen x = 2y − 3 = −1.\n\n(x, y) = (−1, 1)."),
    dict(f="physics/2021.json", n=37, kind="answer", answer="B",
         why="KE = ½mv² = 1.98 × 10⁻¹⁶ J = 1235 eV (the old explanation wrote 1.24 eV). λ = 1240 eV·nm ÷ 1240 eV = 1.0 nm = option B.",
         explanation="Kinetic energy of the electrons:\nKE = ½mv² = ½ × 9.11×10⁻³¹ × (2.084×10⁷)² = 1.98 × 10⁻¹⁶ J\n= 1.98×10⁻¹⁶ ÷ 1.6×10⁻¹⁹ ≈ 1235 eV.\n\nPhoton energy = work function + KE = 4.92 + 1235 ≈ 1240 eV.\n\nλ = hc/E = (1240 eV·nm) ÷ 1240 eV ≈ 1.0 nm."),
    dict(f="maths/2025-typeb.json", n=37, kind="answer", answer="D",
         why="BURNING with B first and G last: arrange U, R, N, I, N = 5!/2! = 60 = option D (Type C is keyed D).",
         explanation="BURNING has 7 letters, with N appearing twice.\n\nFix B at the start and G at the end. The 5 letters in between are U, R, N, I, N.\n\nArrangements = 5!/2! = 120/2 = 60."),

    # ---------------- explanation fixes (key unchanged) ----------------
    dict(f="biology/2015.json", n=13, kind="explanation",
         why="Removed an incorrect note claiming 'Gynecology' was a typo for 'Autecology' (Autecology is already option B).",
         explanation="Synecology is the study of groups of organisms (communities) and their relationships with the environment.\n\nAutecology is the study of a single species or individual. Ecology is the whole field. Gynecology is a branch of medicine, not ecology."),
    dict(f="chemistry/2026-typea.json", n=16, kind="explanation",
         why="Option C is not 'arguable': same moles of gas and ΔS ≈ −14 J K⁻¹ (slightly negative).",
         explanation="Melting ice (solid → liquid) increases disorder, so ΔS is positive.\n\nA: aqueous ions and a solid form fewer, more ordered particles, so ΔS is negative.\nB: 3 mol of gas → 2 mol of gas, so ΔS is negative.\nC: 2 mol of gas → 2 mol of gas; ΔS is very small (about −14 J K⁻¹ mol⁻¹), not positive."),
    dict(f="economics/2020.json", n=5, kind="explanation",
         why="Replaced 'the answer key indicates D' with an actual explanation.",
         explanation="A tax raises the price buyers pay and reduces their disposable income, so as taxes rise, the quantity demanded falls: an inverse relationship.\n\nPrice and quantity supplied move together (direct). Income and quantity consumed also move together for normal goods. Option C says much the same as D; the examiners' answer is D, 'taxes and quantity demanded'."),
    dict(f="ijmb/economics/2024-paper3.json", n=6, kind="explanation",
         why="The note on option C had the economics backwards: a fall in the price of millet (a competing crop) increases guinea-corn supply.",
         explanation="Better technology (A, D) and cheaper machinery (B) all increase the supply of guinea corn.\n\nA fall in the price of millet (C), a crop competing for the same land, makes farmers switch to guinea corn, so it also increases supply.\n\nA rise in the price of beans (E), another competing crop, pulls land and resources away from guinea corn, so it reduces supply. E is the answer."),
    dict(f="ijmb/economics/2024-paper3.json", n=32, kind="explanation",
         why="Removed a leftover transcription note ('labelled c) in the photo').",
         explanation="A labour-intensive technique uses relatively more labour than capital (a high labour-to-capital ratio), e.g. hand weeding instead of using machines."),
    dict(f="ijmb/economics/2024-paper3.json", n=26, kind="explanation",
         why="Removed a leftover transcription note ('blurred in the photo').",
         explanation="In Stage I of production, marginal product is rising at first, so total product (output) increases at an increasing rate.\n\nIn Stage II output still rises but at a decreasing rate, and in Stage III it falls."),
    dict(f="ijmb/economics/2025-paper3.json", n=40, kind="explanation",
         why="Removed a leftover photo note; kept the reasoning.",
         explanation="Price is the amount received per unit sold, i.e. average revenue. Of the cost items listed, average cost (cost per unit) is the one compared with price: in long-run competitive equilibrium price equals average cost, and many firms set prices by adding a margin to average cost."),
    dict(f="ijmb/economics/2026-paper3.json", n=19, kind="explanation",
         why="Removed 'the question is ambiguous' drafting note; kept the reasoning.",
         explanation="Price is the amount received per unit sold, i.e. average revenue. Of the cost items listed, average cost (cost per unit) is the one compared with price: in long-run competitive equilibrium price equals average cost, and many firms set prices by adding a margin to average cost."),
    dict(f="physics/2020.json", n=38, kind="explanation",
         why="The old working used πr² for the area. The coil is rectangular: area = axial length × diameter, which gives 0.048 N m = option C.",
         explanation="For a rectangular coil, area A = axial length × diameter = 0.030 m × 0.020 m = 6.0 × 10⁻⁴ m².\n\nMaximum torque τ = BANI = 0.8 × 6.0×10⁻⁴ × 200 × 0.5 = 0.048 N m."),
    dict(f="physics/2015.json", n=34, kind="explanation",
         why="The examiner treats density as constant, so v ∝ √P gives 390 m/s = option D. Old explanation said no option was correct.",
         explanation="With the density taken as constant, v ∝ √P.\n\nNew pressure = 0.95P, so v = 400 × √0.95 = 400 × 0.9747 ≈ 390 m/s.\n\n(Strictly, if temperature stays constant, density falls with pressure and v does not change. The question intends density to stay constant.)"),
    dict(f="physics/2021.json", n=43, kind="explanation",
         why="Option D comes from 1 u = 931 MeV; explained that instead of 'closest option'.",
         explanation="Using 1 u = 931 MeV:\n1.007277 × 931 = 937.77 MeV.\n\n(With the more precise 931.5 MeV the value is about 938.3 MeV; the paper uses 931.)"),
    dict(f="physics/2024.json", n=24, kind="explanation",
         why="Cleaned up the 'closest option' wording; C is the intended answer.",
         explanation="F = qvB sin θ, with θ = 90° (the velocity is perpendicular to the field).\n\nF = 1.6×10⁻¹⁹ × 5.6×10⁶ × 0.5 = 4.5 × 10⁻¹³ N.\n\nThis matches option C (4.8 × 10⁻¹³ N) to the precision the paper uses; the other options are far off."),
    dict(f="physics/2025-typea.json", n=4, kind="explanation",
         why="Explained that D is the only option with the correct uncertainty, instead of 'closest option'.",
         explanation="ΔV/V = 2(Δr/r) + ΔL/L = 2(0.05/3.30) + 0.4/25 = 0.030 + 0.016 = 0.046 (4.6%).\n\nWith the paper's V = 869 cm³, ΔV = 0.046 × 869 ≈ 40 cm³, so V = (869 ± 40) cm³.\n\n(Using the printed values exactly, V = π × 3.30² × 25 ≈ 855 cm³; either way the uncertainty is about ±40 cm³, which only option D has.)"),
    dict(f="chemistry/2020.json", n=14, kind="explanation",
         why="The old note wrongly conceded CO₂: its oxygen atoms are sp² hybridised, so only PCl₃ has no sp² orbitals.",
         explanation="PCl₃: phosphorus has 3 bonds and 1 lone pair, so it is sp³. No sp² orbitals are involved.\n\nBF₃: boron is sp². C₂H₄: each carbon is sp².\nCO₂: carbon is sp, but each oxygen (one σ bond and two lone pairs) is sp² hybridised, so sp² orbitals are involved."),
    dict(f="chemistry/2015.json", n=3, kind="explanation", type="Objective",
         why="Replaced 'closest option' wording with the working; B is the intended answer.",
         explanation="Moles of Cu = 35.4 / 63.5 = 0.557 mol.\n\nNumber of atoms = 0.557 × 6.02×10²³ ≈ 3.36 × 10²³.\n\nThis is option B (3.27 × 10²³), the only option of the right size; the paper's figure comes from rounding (e.g. using Cu = 65)."),
    dict(f="chemistry/2019.json", n=10, kind="explanation",
         why="Replaced a confusing +5/−1 discussion with average oxidation numbers (+2 to +2.5).",
         explanation="Average oxidation number of sulphur:\nIn S₂O₃²⁻: 2x + 3(−2) = −2, so x = +2.\nIn S₄O₆²⁻: 4x + 6(−2) = −2, so x = +2.5.\n\nSulphur is oxidised from +2 to +2.5 (on average). Option B (+2 to +3) is the paper's answer for this increase from +2."),
    dict(f="chemistry/2025.json", n=49, kind="explanation",
         why="Removed 'closest option' drafting note.",
         explanation="A catalyst adsorbs reactant molecules on its surface, weakening their bonds (activating them) so that they react to form products. Of the options, only a catalyst does this.\n\n(If products stay stuck to the surface, the catalyst becomes 'poisoned' and stops working.)"),
    dict(f="maths/2021.json", n=38, kind="explanation",
         why="060° and 330° are bearings (clockwise from north), so the x-component is 5√3 − 3 = option A. Old working used ordinary angles.",
         explanation="060° and 330° are bearings, measured clockwise from north. The x-component (east) of a force F on bearing θ is F sin θ.\n\n10 N on 060°: 10 sin 60° = 10(√3/2) = 5√3.\n6 N on 330°: 6 sin 330° = 6(−½) = −3.\n\nx-component of the resultant = 5√3 − 3."),

    # ---------------- missing excerpt / diagram / data ----------------
    dict(f="literature/2024.json", n=15, kind="missing",
         note="The excerpt this question refers to is not included in this copy of the paper, so it cannot be answered here. It is left out of quizzes.",
         why="Excerpt missing; answer was 'N/A' and the question could appear in quizzes."),
    dict(f="maths/2021.json", n=39, kind="missing",
         note="The velocity–time graph this question refers to is not included in this copy of the paper, so it cannot be answered here. It is left out of quizzes.",
         why="Diagram missing; answer was 'N/A' and the question could appear in quizzes."),
    dict(f="economics/2025.json", n=28, kind="missing", type="Objective",
         note="The set of numbers for this question is not included in this copy of the paper, so it cannot be answered here. It is left out of quizzes.",
         why="The data set the question needs is missing."),

    # ---------------- no correct option as printed: study only ----------------
    dict(f="physics/2019.json", n=45, kind="exclude", why="No option matches λ = 8.7 × 10⁻¹¹ m.",
         note="Working: λ = h/√(2meV) = 6.63×10⁻³⁴ / √(2 × 9.11×10⁻³¹ × 1.6×10⁻¹⁹ × 200) ≈ 8.7 × 10⁻¹¹ m (0.087 nm).\n\nNone of the printed options matches this, so the question is left out of quizzes."),
    dict(f="physics/2020.json", n=29, kind="exclude", why="Correct mass is 142 g; not among the options.",
         note="Working: heat to melt the ice = 0.035 × 3.4×10⁵ = 11 900 J. Heat from water cooling from 20 °C to 0 °C = m × 4200 × 20.\n\nm = 11 900 / 84 000 = 0.142 kg = 142 g.\n\nNone of the printed options matches this, so the question is left out of quizzes."),
    dict(f="physics/2020.json", n=44, kind="exclude", why="As printed hf < work function; probably a misprint.",
         note="As printed, the photon energy hf = 6.63×10⁻³⁴ × 8.6×10¹⁵ = 5.7 × 10⁻¹⁸ J is less than the work function (25 × 10⁻¹⁸ J), so no electrons would be emitted.\n\nIf the work function is 2.5 × 10⁻¹⁸ J (a likely misprint), KE_max = 5.7×10⁻¹⁸ − 2.5×10⁻¹⁸ ≈ 3.2 × 10⁻¹⁸ J (close to option C). Because of the misprint, the question is left out of quizzes."),
    dict(f="physics/2021.json", n=23, kind="exclude", why="Data do not lead to any option.",
         note="The data given (near point 0.1 m and a focal length of 5.0 cm) do not lead to any of the printed options, so part of the question is probably missing or misprinted. It is left out of quizzes."),
    dict(f="physics/2024.json", n=7, kind="exclude", why="Correct values 24 m/s, 28.8 m; no option has both.",
         note="Working: rebound speed v₁ = e × 40 = 0.6 × 40 = 24 m/s (upwards). Rebound height h = v₁²/2g = 576/20 = 28.8 m.\n\nNo printed option gives both 24 m/s and 28.8 m, so the question is left out of quizzes."),
    dict(f="physics/2025-typea.json", n=2, kind="exclude", why="|3A − B| = 28.7 m; not among options.",
         note="Working: 3A − B = (24 − 4)i + (9 + 6)j + (−6 − 8)k = 20i + 15j − 14k.\n|3A − B| = √(400 + 225 + 196) = √821 ≈ 28.7 m.\n\nNone of the printed options matches this, so the question is left out of quizzes."),
    dict(f="physics/2025-typec.json", n=3, kind="exclude", why="|3A − B| = 28.7 m; not among options.",
         note="Working: 3A − B = (24 − 4)i + (9 + 6)j + (−6 − 8)k = 20i + 15j − 14k.\n|3A − B| = √(400 + 225 + 196) = √821 ≈ 28.7 m.\n\nNone of the printed options matches this, so the question is left out of quizzes."),
    dict(f="chemistry/2019.json", n=17, kind="exclude", why="Nuclear equation as printed does not balance.",
         note="The nuclear equation is misprinted in this copy of the paper (the mass and atomic numbers do not balance), so the species A cannot be worked out reliably. The question is left out of quizzes."),
    dict(f="chemistry/2022.json", n=22, kind="exclude", why="Keyed D, but D is a true statement; C is the false one.",
         note="When temperature rises, the most probable speed increases (A, true), collisions increase (B, true), and the curve becomes lower and broader. The total area under the curve stays the same, because it represents the total number of molecules (D, true).\n\nOption C's wording ('the area … becomes broader') is the incorrect statement: the curve broadens, the area does not change. Because the printed key (D) is a true statement, the question is left out of quizzes."),
    dict(f="chemistry/2022.json", n=23, kind="exclude", why="Asks for ammonia, which is not in the mixture; percentages total 115%.",
         note="This question is misprinted: it asks for the partial pressure of ammonia, which is not in the mixture, and the percentages add up to 115%. It is left out of quizzes."),
    dict(f="chemistry/2022.json", n=24, kind="exclude", why="Kp = Kc needs Δn = 0; no option has Δn = 0.",
         note="Kp = Kc only when Δn (moles of gaseous products − moles of gaseous reactants) = 0.\nA: Δn = +1. B: Δn = −1. C: Δn = −1. D: Δn = −2.\n\nNo printed option has Δn = 0, so the question is left out of quizzes."),
    dict(f="chemistry/2023.json", n=36, kind="exclude", why="CH₃CH₂CH₂C≡CH is pent-1-yne; not among options.",
         note="CH₃CH₂CH₂C≡CH has five carbons with a triple bond at C-1, so its IUPAC name is pent-1-yne.\n\nThat name is not among the printed options, so the question is left out of quizzes."),
    dict(f="chemistry/2023.json", n=41, kind="exclude", why="None of the options favours the forward reaction.",
         note="2NO(g) + Cl₂(g) ⇌ 2NOCl(g) is exothermic and has fewer gas moles on the right. The forward reaction is favoured by adding Cl₂ or NO, increasing pressure (smaller volume) or lowering temperature.\n\nEach printed option either has no effect (adding Ar at constant volume) or favours the reverse reaction, so the question is left out of quizzes."),
    dict(f="chemistry/2023.json", n=45, kind="exclude", why="Units of Kp are atm; not among options.",
         note="Kp = (P_H₂ × P_CO) / P_H₂O. C(s) is a solid and is left out. The units are atm × atm / atm = atm.\n\n'atm' is not among the printed options, so the question is left out of quizzes."),
    dict(f="chemistry/2024.json", n=31, kind="exclude", why="As printed both B and C are correct; likely 'ethanal/methanal'.",
         note="As printed, both B and C fail to give a secondary alcohol: a Grignard reagent reacts with any alcohol (ethanol or methanol) simply to form an alkane.\n\nThe paper probably meant ethanal and methanal. RMgX + ethanal gives a secondary alcohol; RMgX + methanal gives a primary alcohol, which would make C the answer. Because of the misprint, the question is left out of quizzes."),
    dict(f="chemistry/2015.json", n=8, kind="exclude", type="Objective", why="C and D are both true; the same question is keyed differently in 2026 (D).",
         note="Both C and D are true: caesium's larger atomic radius (D) puts its outer electron further from the nucleus, which makes its metallic bonding weaker than sodium's (C), so it melts at a lower temperature.\n\nBecause two options are correct (and the 2015 and 2026 papers give different keys), the question is left out of quizzes."),
    dict(f="chemistry/2026-typea.json", n=32, kind="exclude", why="C and D are both true; the same question is keyed C in 2015.",
         note="Both C and D are true: caesium's larger atomic radius (D) puts its outer electron further from the nucleus, which makes its metallic bonding weaker than sodium's (C), so it melts at a lower temperature.\n\nBecause two options are correct (and the 2015 and 2026 papers give different keys), the question is left out of quizzes."),
    dict(f="economics/2020.json", n=38, kind="exclude", type="Objective", why="NEO works out to −8bn (or 0); 2bn is not supported.",
         note="Current account = 8% of 50bn = 4bn. With a capital and financial account of 4bn, the balance of payments identity (CA + KA + net errors and omissions = 0) gives net errors and omissions of −8bn (or 0 if the two accounts have opposite signs).\n\nNone of the printed options follows from the data, so the question is left out of quizzes."),
    dict(f="maths/2019.json", n=5, kind="exclude", why="tan 75° = 2 + √3; not among options.",
         note="tan 75° = tan(45° + 30°) = (1 + 1/√3)/(1 − 1/√3) = (√3 + 1)/(√3 − 1) = (√3 + 1)²/2 = 2 + √3.\n\n2 + √3 is not among the printed options (B is half of it), so the question is left out of quizzes."),
    dict(f="maths/2019.json", n=39, kind="exclude", why="AB·BC = +18; only negative options.",
         note="AB = (3, 7, 0), BC = (6, 0, −1), so AB · BC = 18 + 0 + 0 = 18.\n\nThe printed options are all negative, so the question is left out of quizzes."),
    dict(f="maths/2020.json", n=17, kind="exclude", why="f(x + 3) − f(x) = 26 f(x); not among options.",
         note="f(x + 3) = 3^(x+2) = 27 × 3^(x−1) = 27 f(x), so f(x + 3) − f(x) = 26 f(x).\n\n26 f(x) is not among the printed options, so the question is left out of quizzes."),
    dict(f="maths/2020.json", n=49, kind="exclude", why="r = 0.787 from the given sums; not among options.",
         note="r = (nΣxy − ΣxΣy) / √[(nΣx² − (Σx)²)(nΣy² − (Σy)²)] = (825 − 150) / √(1400 × 525) = 675 / 857.3 ≈ 0.79.\n\nNo printed option is close, so the question is left out of quizzes."),
    dict(f="maths/2021.json", n=37, kind="exclude", why="k-component should be −3(1 − cos 2); option B has +.",
         note="∫₀² 2e⁻ᵗ dt = 2(1 − e⁻²); ∫₀² 5 cos t dt = 5 sin 2; ∫₀² −3 sin t dt = 3(cos 2 − 1) = −3(1 − cos 2).\n\nResult: 2(1 − e⁻²)i + 5 sin 2 j − 3(1 − cos 2)k. Option B has the wrong sign on the k term, so the question is left out of quizzes."),
    dict(f="maths/2022.json", n=20, kind="exclude", why="d/dx(eˣ cos x) = eˣ(cos x − sin x); not among options.",
         note="Product rule: d/dx(eˣ cos x) = eˣ cos x + eˣ(−sin x) = eˣ(cos x − sin x).\n\nThis is not among the printed options, so the question is left out of quizzes."),
    dict(f="maths/2024.json", n=7, kind="exclude", why="Identity is inconsistent as printed (likely numerator 10x + 29).",
         note="As printed, the identity cannot hold: putting x = 2 gives k = 41/7, but putting x = −5 gives −29 = −21. If the numerator is 10x + 29 (a likely misprint), x = 2 gives 49 = 7k, so k = 7 (option D). Because of the misprint, the question is left out of quizzes."),
    dict(f="maths/2024.json", n=27, kind="exclude", why="Correct equation y² − 4y + 6x − 11 = 0; not among options.",
         note="Distance to focus = distance to directrix: (x − 1)² + (y − 2)² = (x − 4)², which simplifies to y² − 4y + 6x − 11 = 0.\n\nThis is not among the printed options, so the question is left out of quizzes."),
    dict(f="maths/2025-typea.json", n=15, kind="exclude", why="t = 3.78 s = 0.063 min; not among options.",
         note="a = (8 − 6) × 9.8 / 14 = 1.4 m/s². 10 = ½ × 1.4 × t², so t = √14.3 ≈ 3.78 s ≈ 0.063 min.\n\nNone of the printed options matches this, so the question is left out of quizzes."),
    dict(f="maths/2025-typeb.json", n=20, kind="exclude", why="t = 3.78 s = 0.063 min; not among options.",
         note="a = (8 − 6) × 9.8 / 14 = 1.4 m/s². 10 = ½ × 1.4 × t², so t = √14.3 ≈ 3.78 s ≈ 0.063 min.\n\nNone of the printed options matches this, so the question is left out of quizzes."),
    dict(f="maths/2025-typec.json", n=3, kind="exclude", why="t = 3.78 s = 0.063 min; not among options.",
         note="a = (8 − 6) × 9.8 / 14 = 1.4 m/s². 10 = ½ × 1.4 × t², so t = √14.3 ≈ 3.78 s ≈ 0.063 min.\n\nNone of the printed options matches this, so the question is left out of quizzes."),
    dict(f="maths/2025-typea.json", n=41, kind="exclude", why="k = 2; options A and D are both −2.",
         note="Gradient of 3x − ky = 5 is 3/k; gradient of 6x + 9y = 7 is −2/3. Perpendicular: (3/k)(−2/3) = −1, so k = 2.\n\nOptions A and D are both printed as −2 (one is probably a misprint of 2), so the question is left out of quizzes."),
    dict(f="ijmb/economics/2023-paper3.json", n=11, kind="exclude", why="Answer is 'perfectly inelastic'; options A and C both read 'perfectly elastic'.",
         note="When quantity demanded does not change at all as price changes, demand is perfectly inelastic (elasticity = 0, a vertical demand curve).\n\nIn this copy, options A and C are both printed as 'perfectly elastic', so the question is left out of quizzes."),
    dict(f="ijmb/economics/2023-paper3.json", n=39, kind="exclude", why="Options A and D are both 'profit'.",
         note="Under free enterprise, firms aim to maximise profit.\n\nOptions A and D are both printed as 'profit', so either would be correct; the question is left out of quizzes."),
    dict(f="ijmb/economics/2025-paper3.json", n=37, kind="exclude", why="Y = 266.67; not among options. Old key D (60) is wrong.",
         note="Y = C + I = 20 + 0.7Y + 60, so 0.3Y = 80 and Y ≈ 266.7.\n\nThis is not among the printed options (if I were 160, Y would be 600, option B, so the paper probably has a misprint). The question is left out of quizzes."),
    dict(f="ijmb/economics/2025-paper3.json", n=41, kind="exclude", why="Option B describes a Giffen good, not an inferior good in general.",
         note="An inferior good is one whose demand falls as income rises: its income effect works against the substitution effect but is usually smaller. When the income effect is larger than the substitution effect (option B's wording), the good is a Giffen good, a special kind of inferior good.\n\nNo option states the general definition, so the question is left out of quizzes."),
    dict(f="ijmb/economics/2026-paper3.json", n=20, kind="exclude", why="Balanced budget multiplier = 1; option printed '.1'.",
         note="Government spending multiplier = 1/(1 − b); tax multiplier = −b/(1 − b). Added together they give (1 − b)/(1 − b) = 1, so the balanced budget multiplier is 1.\n\nOption C is printed as '.1', so the question is left out of quizzes."),
    dict(f="ijmb/economics/2026-paper3.json", n=38, kind="exclude", why="Answer is substitutability/complementarity; not among options.",
         note="Cross elasticity of demand shows whether two goods are substitutes (positive) or complements (negative), and how closely related they are.\n\nThat is not among the printed options, so the question is left out of quizzes."),
]

# questions where the correct answer appears twice among the options
DUPLICATE_KEY = ["chemistry/2021.json:44", "chemistry/2022.json:21", "maths/2015.json:11", "maths/2019.json:9",
                 "maths/2022.json:29", "maths/2025-typea.json:19", "maths/2025-typec.json:18",
                 "physics/2022.json:3", "physics/2025-typea.json:18"]


def spans(raw):
    """(start, end, obj) for each question object in a top-level JSON list."""
    i = raw.index("[") + 1
    out = []
    while True:
        while i < len(raw) and raw[i] in " \t\r\n,":
            i += 1
        if i >= len(raw) or raw[i] == "]":
            return out
        obj, end = DEC.raw_decode(raw, i)
        out.append((i, end, obj))
        i = end


def set_field(text, field, value):
    """Replace "field": <value> inside one object's text, or add it after "answer"/"options"."""
    enc = json.dumps(value, ensure_ascii=False)
    pat = re.compile(r'("%s"\s*:\s*)("(?:[^"\\]|\\.)*"|true|false|null|-?\d+(?:\.\d+)?)' % re.escape(field))
    if pat.search(text):
        return pat.sub(lambda m: m.group(1) + enc, text, count=1)
    # add the new field on its own line after a single-line field ("answer", else "questionNumber")
    anchor = (re.search(r'\n(\s*)"answer"\s*:\s*"(?:[^"\\]|\\.)*",?', text)
              or re.search(r'\n(\s*)"questionNumber"\s*:[^\n]*', text))
    indent = anchor.group(1) if anchor else "    "
    pos = anchor.end() if anchor else text.rindex("}")
    line_has_comma = text[pos - 1] == ","
    insert = ("" if line_has_comma else ",") + f"\n{indent}\"{field}\": {enc}" + ("," if line_has_comma else "")
    return text[:pos] + insert + text[pos:]


def apply():
    log = []
    by_file = {}
    for fx in FIXES:
        by_file.setdefault(fx["f"], []).append(fx)
    for spec in DUPLICATE_KEY:
        f, n = spec.rsplit(":", 1)
        by_file.setdefault(f, []).append(dict(f=f, n=int(n), kind="duplicate"))

    for rel, fixes in by_file.items():
        path = os.path.join(ROOT, "data", rel)
        raw = open(path, encoding="utf-8").read()
        for fx in fixes:
            want_type = fx.get("type", "Objective")
            match = [(s, e, o) for s, e, o in spans(raw)
                     if str(o.get("questionNumber")) == str(fx["n"]) and o.get("type") == want_type]
            if len(match) != 1:
                raise SystemExit(f"{rel} Q{fx['n']}: found {len(match)} matching questions")
            s, e, q = match[0]
            text = raw[s:e]
            kind = fx["kind"]
            if kind == "answer":
                old = q.get("answer")
                text = set_field(text, "answer", fx["answer"])
                text = set_field(text, "explanation", fx["explanation"])
                log.append((rel, fx["n"], f"Answer key {old} → {fx['answer']}", fx["why"]))
            elif kind == "explanation":
                text = set_field(text, "explanation", fx["explanation"])
                log.append((rel, fx["n"], "Explanation rewritten (answer unchanged)", fx["why"]))
            elif kind in ("exclude", "missing"):
                text = set_field(text, "excludeFromQuiz", True)
                text = set_field(text, "reviewNote", fx["note"])
                label = "Left out of quizzes, note added" if kind == "exclude" else "Missing excerpt/diagram/data: left out of quizzes, note added"
                log.append((rel, fx["n"], label, fx["why"]))
            elif kind == "duplicate":
                opts = q["options"]; key = q["answer"]
                same = [("ABCDEF")[i] for i, o in enumerate(opts) if o.strip().lower() == opts["ABCDEF".index(key)].strip().lower()]
                note = (f"Options {' and '.join(same)} are printed the same in this copy of the paper, so this question is left out of quizzes.\n\n"
                        f"Correct answer: {opts['ABCDEF'.index(key)]}\n\n{q.get('explanation', '')}").strip()
                text = set_field(text, "excludeFromQuiz", True)
                text = set_field(text, "reviewNote", note)
                log.append((rel, fx["n"], "Left out of quizzes (correct answer appears twice)", f"Options {', '.join(same)} are identical."))
            raw = raw[:s] + text + raw[e:]
        json.loads(raw)                      # must still be valid JSON
        open(path, "w", encoding="utf-8").write(raw)

    with open(os.path.join(ROOT, "review", "changes-log.md"), "w", encoding="utf-8") as out:
        out.write("# Answer review: changes made (round 1)\n\n")
        out.write("Every change below was checked by working the question out. Original files are in "
                  "backups-folder/before-answer-review-2026-11-18/data.\n\n")
        for kind_title in ["Answer key", "Explanation", "Left out", "Missing"]:
            rows = [r for r in log if r[2].startswith(kind_title)]
            if not rows:
                continue
            out.write(f"## {kind_title} ({len(rows)})\n\n| File | Q | Change | Why |\n|---|---|---|---|\n")
            for rel, n, change, why in rows:
                out.write(f"| {rel} | {n} | {change} | {why} |\n")
            out.write("\n")
    print(f"applied {len(log)} changes in {len(by_file)} files")


if __name__ == "__main__":
    apply()
