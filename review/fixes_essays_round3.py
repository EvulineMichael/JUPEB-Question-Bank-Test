"""Essay model answers corrected in the full read of every essay (round 3). Run once:  python3 review/fixes_essays_round3.py"""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from apply_fixes import spans, set_field, ROOT

E = []
def essay(f, n, answer, why): E.append(dict(f=f, n=str(n), answer=answer, why=why))
def patch(f, n, old, new, why): E.append(dict(f=f, n=str(n), old=old, new=new, why=why))

# ======== FIXES ========

# ---- physics/2019 ----
patch("physics/2019.json", "4c", "(ii) Requires exact evaluation of sin function — depends on α.",
      """(ii) Read the phase as ωt − kx = 4π × 10⁹ t − 30πx (the printed 'x' after 4π is a misprint).
x = 2.1 × 10⁻² cm = 2.1 × 10⁻⁴ m, t = 0.32 s.
ωt = 4π × 10⁹ × 0.32 = 1.28π × 10⁹ = 6.4 × 10⁸ × 2π, a whole number of cycles, so it adds nothing to the sine.
kx = 30π × 2.1 × 10⁻⁴ = 0.0063π ≈ 0.0198 rad.
V = 10e^(−α) sin(−0.0198) ≈ 10e^(−α) × (−0.0198) ≈ −0.198 e^(−α) V.
Using the amplitude from (iii), 10e^(−α) = 2 V: V ≈ 2 × (−0.0198) ≈ −0.040 V.""",
      "Part (ii) was left unanswered ('requires exact evaluation'). Worked it out: ωt is a whole number of cycles, so V ≈ −0.198e^(−α) V, i.e. about −0.040 V.")

# ---- physics/2021 ----
patch("physics/2021.json", "3c", "(i) Efficiency η = 1 - T_cold/T_hot = 1 - 450/600 = 25%.",
      """(i) 'Coefficient of performance' (COP) normally describes a heat pump or refrigerator run between the two reservoirs:
COP (refrigerator) = T_cold/(T_hot − T_cold) = 450/(600 − 450) = 450/150 = 3.0
If the examiner means the engine's efficiency instead:
η = 1 − T_cold/T_hot = 1 − 450/600 = 0.25 = 25%
Give both in the exam and say which is which.""",
      "'Coefficient of performance' is T_c/(T_h − T_c) = 3.0; the old answer gave only the engine's efficiency (25%). Both are now shown and labelled.")
patch("physics/2021.json", "7b", """E_K = -13.6 × 42²/1² = -24.0 keV.
E_L = -13.6 × 42²/2² = -6.0 keV.

ΔE = E_L - E_K = -6.0 - (-24.0) = +18.0 keV.""",
      """For a K-shell (Kα) transition, the remaining K electron screens one unit of nuclear charge, so the effective charge is (Z − 1) = 41 (Moseley's law):
E_K ≈ −13.6 × 41²/1² eV = −22.9 keV
E_L ≈ −13.6 × 41²/2² eV = −5.7 keV
ΔE = E_L − E_K ≈ 13.6 × 41² × (1 − 1/4) eV ≈ 17.1 keV
The electron loses about 17 keV, which is emitted as a Kα X-ray photon. (The measured value for molybdenum is 17.5 keV.)
Without the screening correction (using Z = 42), you get about 18.0 keV, a rougher estimate.""",
      "Used Moseley's (Z − 1) screening for the K-shell, giving ≈17.1 keV (measured 17.5 keV); the old answer used Z = 42 (18.0 keV) without saying it is the rougher estimate.")
patch("physics/2021.json", "8a", "BE per nucleon = 25.80/4 = 6.45 MeV/nucleon.",
      """BE per nucleon = 25.80/4 = 6.45 MeV/nucleon (with the masses as printed).

Note: the paper gives the neutron the same mass as the proton (1.0073 u). The real neutron mass is 1.0087 u. With it:
Mass defect = 2(1.0073) + 2(1.0087) − 4.0015 = 0.0305 u
BE = 0.0305 × 931.5 ≈ 28.4 MeV, i.e. about 7.1 MeV per nucleon (the accepted value for helium-4).
Use the printed values in the exam, but know the true figure.""",
      "The paper's neutron mass (1.0073 u) is the proton's; added the result with the real neutron mass (≈7.1 MeV per nucleon).")

# ---- physics/2024 ----
essay("physics/2024.json", "1d", """Let F = k η^a r^b ω^c, where k is a dimensionless constant.

Dimensions:
[F] = MLT⁻², [η] = ML⁻¹T⁻¹, [r] = L, [ω] = T⁻¹

So MLT⁻² = (ML⁻¹T⁻¹)^a (L)^b (T⁻¹)^c = M^a L^(−a+b) T^(−a−c)

Equate the powers:
M: a = 1
L: −a + b = 1 → b = 2
T: −a − c = −2 → c = 1

Therefore F = k η r² ω, i.e. F ∝ η r² ω.

Check: ηr²ω has dimensions (ML⁻¹T⁻¹)(L²)(T⁻¹) = MLT⁻², the dimensions of force. ✓""",
      "The old answer reached F ∝ ηr²/ω, which is dimensionally wrong (the T power gives c = +1). Correct result: F ∝ ηr²ω, with a check.")

# ---- physics/2025-typec ----
patch("physics/2025-typec.json", "4b", "Rate of energy loss = 400/1800 ≈ 0.22 W.",
      """Rate of energy loss = 400/1800 ≈ 0.22 W.

Note: the printed data don't fit together, so treat this as the expected method rather than an exact result. A 10 g piece of copper cooling all the way from 125 °C can give out at most 0.01 × 400 × 100 = 400 J, which would warm 100 g of water by under 1 °C, not 5 °C (and certainly not 25 °C). The working above reads the question as: the copper has cooled to the water's final temperature (25 °C) during the half-hour in air, so all 400 J were lost to the surroundings. In the exam, state the assumption you make, then use: rate of loss = heat lost ÷ time (in seconds).""",
      "The data are inconsistent (the copper can't hold enough heat to warm the water as stated); added a note explaining this and the assumption used, so students aren't misled.")

# ---- physics/2026-typea ----
patch("physics/2026-typea.json", "3c", "Note: The question states \"50 cm thick\" — this is physically unrealistic. If the intended thickness is 5 cm (0.05 m), Q = 8.43 × 10⁸ J. Please verify the original question.",
      "Note: '50 cm thick' is unusually thick for a tube wall; the paper may mean 5 cm. With d = 0.05 m the answer is ten times larger: Q = 8.43 × 10⁸ J. Use the thickness printed in your exam.",
      "Replaced 'please verify the original question' with a clear note for students.")
patch("physics/2026-typea.json", "8c", "= 1.988 × 10⁻²⁵/(3.2 × 10⁻¹⁷) = 6.21 × 10⁻⁹ m = 6.21 nm.",
      """= 1.988 × 10⁻²⁵/(3.2 × 10⁻¹⁷) = 6.21 × 10⁻⁹ m = 6.21 nm.
This is the shortest wavelength of the X-ray photon the electron can produce when it hits a target.

If the question means the electron's own (de Broglie) wavelength:
λ = h/√(2meV) = 6.626 × 10⁻³⁴/√(2 × 9.11 × 10⁻³¹ × 1.6 × 10⁻¹⁹ × 200) = 6.626 × 10⁻³⁴/7.64 × 10⁻²⁴ ≈ 8.7 × 10⁻¹¹ m (0.087 nm).
State which one you are calculating.""",
      "'Minimum wavelength of an electron' is ambiguous; added the electron's de Broglie wavelength (8.7 × 10⁻¹¹ m) alongside the X-ray cut-off (6.21 nm).")

# ---- physics/2026-typec ----
patch("physics/2026-typec.json", "3b", """For red: sin i = n sin r = 1.604 × sin 30° = 0.802 → i = 53.3°. Deviation δ_red = 2i − A = 106.6° − 60° = 46.6°.
For blue: sin i = 1.620 × 0.5 = 0.810 → i = 54.1°. δ_blue = 108.2° − 60° = 48.2°.

(iii) Angular dispersion θ = δ_blue − δ_red = 48.2° − 46.6° = 1.6° = 0.0279 rad.
Length of spectrum = fθ = 0.25 × 0.0279 = 6.98 × 10⁻³ m ≈ 7.0 mm.""",
      """For red: sin i = n sin r = 1.604 × sin 30° = 0.802 → i = 53.32°. Deviation δ_red = 2i − A = 106.65° − 60° = 46.65°.
For blue: sin i = 1.620 × 0.5 = 0.810 → i = 54.10°. δ_blue = 108.19° − 60° = 48.19°.

(iii) Angular dispersion θ = δ_blue − δ_red = 48.19° − 46.65° = 1.55° = 1.55 × π/180 = 0.0270 rad.
Length of spectrum = fθ = 0.25 × 0.0270 = 6.7 × 10⁻³ m ≈ 6.7 mm.
(Keep at least two decimal places in the angles: the dispersion is a small difference between two large numbers, and rounding to 0.1° early gives about 7.0 mm.)""",
      "Rounding the deviations to 0.1° before subtracting gave 7.0 mm; with proper precision the spectrum is about 6.7 mm long. Added a tip on why.")

# ---- chemistry/2015 ----
patch("chemistry/2015.json", "2a", "(ii) C₃H₈ + 3H₂O → 3CO + 7H₂ (steam reforming)",
      """(ii) The question most likely means propene (listed above), since steam adds across a C=C double bond. With a phosphoric acid catalyst (about 300 °C, 60–70 atm), steam adds by Markovnikov's rule to give propan-2-ol:
CH₃CH=CH₂ + H₂O → CH₃CH(OH)CH₃
(If propane really is meant, the only reaction with steam is industrial steam reforming over a nickel catalyst: C₃H₈ + 3H₂O → 3CO + 7H₂.)""",
      "'Steam on propane' is almost certainly propene (hydration to propan-2-ol, Markovnikov); the old answer gave only steam reforming of propane.")
patch("chemistry/2015.json", "8", "Atomic mass = 0.528/0.0194 = 27.2 g/mol.",
      """Atomic mass = 0.528/0.0194 = 27.2 g/mol.
(Note: the paper prints '528g'. That would give a relative atomic mass of about 27 000, which is impossible, so the mass deposited must be 0.528 g.)""",
      "The paper's '528 g' must be 0.528 g (which the working silently used); added a note saying so.")
patch("chemistry/2015.json", "4", """(a) Hydrogen bonding.

Partial charges arise from fluorine's high electronegativity.""",
      """(a) Hydrogen bonding.

Diagram: draw two H–F molecules side by side, H–F ··· H–F. On each fluorine show three lone pairs. Mark each H as δ+ and each F as δ−. Draw a dotted line from the δ+ hydrogen of one molecule to a lone pair on the δ− fluorine of the other; the F–H···F atoms lie roughly in a straight line.

Partial charges arise because fluorine is the most electronegative element: it pulls the shared electron pair of the H–F bond towards itself, leaving the hydrogen nucleus almost bare (δ+) and the fluorine electron-rich (δ−).""",
      "Part (a) asked for a labelled diagram with lone pairs and partial charges; added a description of it and a fuller reason for the charges.")

# ---- chemistry/2020 ----
patch("chemistry/2020.json", "5a", "(c) Al₂O₃(s) + 3H₂O(l) → 2Al(OH)₃(s)", "(c) Al₂O₃: no reaction. Aluminium oxide is insoluble in water, so nothing dissolves. (It is amphoteric: it reacts with acids and with alkalis, but not with water.)",
      "Al₂O₃ does not react with or dissolve in water; the old answer wrote an equation for it and called the result weakly acidic.")
patch("chemistry/2020.json", "5a", "(c) pH slightly < 7 (weakly acidic)", "(c) pH ≈ 7 (the water is unchanged, because the oxide does not dissolve)",
      "Al₂O₃ is insoluble, so the pH stays about 7.")
patch("chemistry/2020.json", "8d", """Pentanoic acid < 4-chloropentanoic acid < 3-chloropentanoic acid < 2-chloropentanoic acid < 3,3-dichloropentanoic acid < 2,2-dichloropentanoic acid""",
      """Pentanoic acid < 4-chloropentanoic acid < 3-chloropentanoic acid < 3,3-dichloropentanoic acid < 2-chloropentanoic acid < 2,2-dichloropentanoic acid""",
      "Position matters more than number here: one Cl on C2 (next to COOH) withdraws more strongly than two Cl on C3, so 2-chloro is the stronger acid (compare pKa ≈ 2.9 for 2-chlorobutanoic vs ≈ 4.1 for 3-chlorobutanoic). Order corrected.")
patch("chemistry/2020.json", "8d", "More Cl atoms = greater electron withdrawal = stronger acid.",
      """More Cl atoms = greater electron withdrawal = stronger acid, but distance matters more than number: the inductive effect fades quickly along the chain (roughly by half for each extra C–C bond). So a single Cl on C2 has more effect than two Cl atoms on C3, which is why 2-chloropentanoic acid is stronger than 3,3-dichloropentanoic acid.""",
      "Explained why one α-chlorine beats two β-chlorines.")

# ---- chemistry/2022, 2023 ----
patch("chemistry/2022.json", "5c", "(iii) Dichlorobis(ethylenediamine)nickel(II) ion.",
      """(iii) Dichloridobis(ethylenediamine)nickel(IV) ion.
Check the oxidation state: en is neutral and each Cl is −1, so x + 2(0) + 2(−1) = +2, giving x = +4.
(Nickel(IV) is very unusual. With the common nickel(II), the complex [Ni(en)₂Cl₂] would be neutral, so the '2+' in the paper may be a misprint. Name the formula exactly as printed and show the working.)""",
      "With a 2+ charge, en neutral and two Cl⁻, nickel must be +4, not +2; corrected and explained the likely misprint.")
patch("chemistry/2023.json", "3b", "(i) Note: The original equation doesn't balance. Corrected: ²¹¹₈₉Ac + ⁴₂He → ²¹⁴₉₁Pa + ¹₀n.",
      """(i) Balance mass numbers and atomic numbers:
Mass: 211 + 4 = 213 + A → A = 2
Atomic number: 89 + 2 = 90 + Z → Z = 1
The missing particle is ²₁H (a deuteron):
²¹¹₈₉Ac + ⁴₂He → ²¹³₉₀Th + ²₁H""",
      "The equation does balance: the missing particle is a deuteron (²₁H). The old answer wrongly said it didn't balance and changed the product.")
patch("chemistry/2023.json", "6b", "(i) Mn: [Ar] 3d⁵ 4s² — stable half-filled d⁵. Removing an electron from this stable configuration requires more energy. Fe: [Ar] 3d⁶ 4s² — removal gives stable d⁵, less energy needed.",
      """(i) Note: for the FIRST ionisation energy the data actually show Mn (717 kJ mol⁻¹) slightly below Fe (762 kJ mol⁻¹), because the first electron comes from 4s in both. The statement is true for the THIRD ionisation energy (Mn²⁺ → Mn³⁺: 3248 kJ mol⁻¹; Fe²⁺ → Fe³⁺: 2957 kJ mol⁻¹), which is almost certainly what is meant.

Reason: Mn²⁺ is [Ar] 3d⁵, a half-filled d subshell with one electron in each d orbital. This arrangement is especially stable (maximum exchange energy, no paired electrons), so removing an electron from it takes extra energy.
Fe²⁺ is [Ar] 3d⁶: it has one paired electron, which is repelled by its partner, and removing it leaves the stable half-filled 3d⁵ of Fe³⁺. So less energy is needed.""",
      "The first IE of Mn is actually lower than Fe's; the 'Mn higher' anomaly applies to the third IE (Mn²⁺ d⁵ vs Fe²⁺ d⁶). Clarified, and the reasoning now refers to the ions.")

# ---- chemistry/2024, 2025 ----
patch("chemistry/2024.json", "7c", "(i) 3-iodobutanamide.",
      "(i) 2-iodobutanamide. Number from the amide carbon: C1 is CONH₂, so the CHI next to it is C2 (CH₃–CH₂–CHI–CONH₂).",
      "In CH₃CH₂CHICONH₂ the iodine is on C2 (C1 is the CONH₂ carbon): 2-iodobutanamide, not 3-.")
patch("chemistry/2025.json", "4a", """Note: The question asks for grams used, but 0.259 g is the amount remaining.
Grams used = 0.35 − 0.259 = 0.091 g.""",
      """The phosphorus-32 still present after 6.5 days is what is used in the experiment, so about 0.259 g (≈ 0.26 g) of P-32 was used.
(The amount that had decayed before the experiment is 0.35 − 0.259 = 0.091 g; give this as well if you are unsure which the examiner wants.)""",
      "The P-32 used in the experiment is what remains after 6.5 days (0.259 g); the old note said 'used' meant the decayed 0.091 g.")

# ---- chemistry/2026 types ----
patch("chemistry/2026-typeb.json", "3a", "K = e^197.32 ≈ 2.1 × 10⁸⁵.",
      "K = e^197.32. Convert to a power of ten: log₁₀K = 197.32/2.303 = 85.70, so K = 10^85.70 ≈ 5.0 × 10⁸⁵.\n(Such a huge K means the reaction goes essentially to completion.)",
      "e^197.32 = 10^85.70 ≈ 5.0 × 10⁸⁵, not 2.1 × 10⁸⁵.")
patch("chemistry/2026-typeb.json", "7c", "ii) With one molecule of acidified KMnO₄: cyclohexane-1,2-diol (cis-1,2-cyclohexanediol).",
      """ii) With acidified KMnO₄ the product depends on the conditions:
• Hot, concentrated acidified KMnO₄ breaks the C=C bond completely and oxidises both ends to COOH, giving hexanedioic acid (adipic acid), HOOC(CH₂)₄COOH.
• Cold, dilute (usually alkaline) KMnO₄ only adds two OH groups across the double bond, giving cyclohexane-1,2-diol.
Because the question says 'acidified', hexanedioic acid is the expected answer.""",
      "Acidified (hot) KMnO₄ cleaves the ring C=C to hexanedioic acid; the diol forms only with cold, dilute (alkaline) permanganate. Both now explained.")
essay("chemistry/2026-typec.json", "8a", """(i) K gives a silver mirror with Tollens' reagent, so it is an aldehyde, and its reaction with 2,4-DNPH confirms a C=O group. So J must be a primary alcohol, which oxidises to an aldehyde.

Note on the formula: an alcohol C₅H₁₀O would have to contain a ring or a C=C bond. The question almost certainly means J = C₅H₁₂O (a saturated alcohol), which oxidises to K = C₅H₁₀O.

J: pentan-1-ol, CH₃CH₂CH₂CH₂CH₂OH (C₅H₁₂O).
K: pentanal, CH₃CH₂CH₂CH₂CHO (C₅H₁₀O), formed by mild oxidation (e.g. acidified K₂Cr₂O₇, distilling the aldehyde off as it forms):
CH₃(CH₂)₃CH₂OH + [O] → CH₃(CH₂)₃CHO + H₂O

(Any primary C₅ alcohol fits, e.g. 2-methylbutan-1-ol giving 2-methylbutanal; pentan-1-ol is the simplest answer.)

(ii) The product of an aldehyde or ketone with 2,4-dinitrophenylhydrazine is a 2,4-dinitrophenylhydrazone (yellow/orange crystals).""",
      "The old answer called pentan-1-ol 'C₅H₁₀O' (it is C₅H₁₂O) and referred to a 'K = C₄H₈O' that isn't in the question. Rewritten with the correct formulae and a note on the misprint.")
patch("chemistry/2026-typec.json", "7a", "\n\nNote: The question originally wrote CH₃CH₂COOCH₂H — corrected to CH₃CH₂COOCH₃.", "",
      "Removed a confusing note about a misprint that no longer appears in the question.")

# ---- chemistry/2026 typea vs typed consistency ----
PYRO = """(ii) Alkaline pyrogallol is the standard absorbent for oxygen, so the 25 cm³ of O₂ is removed, leaving 350 cm³ of CO₂. This is the answer expected.
(Strictly, the alkali in the solution can also absorb CO₂, which is why in gas analysis CO₂ is removed first with KOH solution and O₂ afterwards with alkaline pyrogallol. If the examiner treats the solution as absorbing both, the volume left would be 0 cm³.)"""
patch("chemistry/2026-typea.json", "3c", "(ii) Alkaline pyrogallol absorbs both CO₂ and O₂. Volume left = 0 cm³.", PYRO,
      "Made the two versions of this question agree: alkaline pyrogallol is the oxygen absorbent (350 cm³ CO₂ left), with a note on why some books say 0 cm³.")
patch("chemistry/2026-typed.json", "3c", "(ii) Alkaline pyrogallol absorbs oxygen only. The 25 cm³ of O₂ is absorbed, leaving 350 cm³ of CO₂.", PYRO,
      "Added the same note as Type A so both versions agree.")
patch("chemistry/2026-typed.json", "1a", "(iii) Element T has a lower first ionization energy than R because T has a stable electronic configuration (a completely filled shell or half-filled subshell), which makes it more difficult to remove an electron from R than from T; the increased stability of T's configuration means the electron removed is more easily lost relative to the general trend.",
      "(iii) R has a half-filled p subshell (p³ configuration, one electron in each p orbital), which is especially stable, so its ionization energy is unusually high. T, the next element, has p⁴: its fourth p electron has to pair up in an orbital that already holds an electron. The repulsion between the paired electrons makes that electron easier to remove, so T has a lower first ionization energy than R (e.g. N > O, or P > S).",
      "The old reason was muddled (it credited T with the stable configuration). Rewritten: R is the half-filled p³ element; T's paired p⁴ electron is easier to remove.")
patch("chemistry/2026-typed.json", "2a", "(iii) BH₃ is electron-deficient and has a vacant orbital that accepts the lone pair from NH₃. AlCl₃, although also electron-deficient, dimerises to Al₂Cl₆ to satisfy the octet of aluminium, so it is not strongly electron-deficient and does not readily accept the lone pair from NH₃ under the same conditions.",
      "(iii) BH₃ is electron-deficient (boron has only six outer electrons and an empty p orbital), so it accepts a lone pair. NH₃ is a good electron-pair donor (Lewis base), with a lone pair on nitrogen. AlCl₃ is not a donor: like BH₃, it is itself electron-deficient and is an electron-pair acceptor (Lewis acid). Two acceptors do not form a donor–acceptor bond with each other.\n\n(AlCl₃ itself does react with NH₃, forming AlCl₃·NH₃, because aluminium also has an empty orbital. The point is that BH₃ needs an electron-pair donor, and NH₃ is one while AlCl₃ is not.)",
      "The old answer claimed AlCl₃ doesn't accept NH₃'s lone pair (it does); rewritten to match the corrected Type A answer.")

# ---- maths/2015 ----
patch("maths/2015.json", "7", "75-79 | 9", "75-79 | 8",
      "Recounted from the raw data: 75-79 has 8 scores (total must be 50, not 51).")
patch("maths/2015.json", "7", """(ii) Mean x̄ = Σfx/Σf ≈ 71.35
Standard deviation s ≈ 9.5
CV = (s/x̄) × 100% ≈ 13.3%""", """(Check: total frequency = 1 + 2 + 4 + 4 + 12 + 14 + 8 + 3 + 0 + 1 + 1 = 50.)

(ii) Use the class mid-points x: 47, 52, 57, 62, 67, 72, 77, 82, 87, 92, 97.5.
Σfx = 47 + 104 + 228 + 248 + 804 + 1008 + 616 + 246 + 0 + 92 + 97.5 = 3490.5
Mean x̄ = Σfx/Σf = 3490.5/50 = 69.81
Σfx² = 248 007.25
Variance s² = (Σfx² − n x̄²)/(n − 1) = (248 007.25 − 50 × 69.81²)/49 = 4335.4/49 = 88.48
Standard deviation s = √88.48 ≈ 9.41
CV = (s/x̄) × 100% = (9.41/69.81) × 100% ≈ 13.5%
(If the population formula, dividing by n, is used: σ ≈ 9.31 and CV ≈ 13.3%.)""",
      "Mean was 71.35 (from a table summing to 51); correct grouped mean 69.81, s ≈ 9.41, CV ≈ 13.5%.")

# ---- maths/2020 ----
patch("maths/2020.json", "4c", "= 2π [(π/4 + sinπ/4) - (0 + 0)]", "= 2π [(π/4 + (sin π)/4) - (0 + 0)]",
      "Clarity: the term is sin(4 × π/4)/4 = (sin π)/4 = 0, not sin(π/4).")
# ---- maths/2021 ----
patch("maths/2021.json", "1c", "Circle: x² + y² + 2x - 3y + 1 = 0.\n\nCentre:", """Note: (3, 4) does not actually lie on the circle as printed: 3² + 4² + 2(3) − 3(4) = 19, not −1. The circle with the same centre that passes through (3, 4) is x² + y² + 2x − 3y = 19, and for that circle the working below gives exactly the tangent at (3, 4). The method (the tangent is perpendicular to the radius at the point of contact) is what the question tests.

Circle: x² + y² + 2x - 3y + 1 = 0.

Centre:""",
      "The given point is not on the printed circle; added a note.")
patch("maths/2021.json", "5c", """Driving power at end of trip:
P = F_d × v = 200 × 18 = 3600 W = 3.6 kW.""", """Average driving power over the trip (the answer expected, since the distance and time are given):
Work done by the driving force = F_d × s = 200 × 200 = 40 000 J.
P = work/time = 40 000/20 = 2000 W = 2.0 kW.

(The power is not constant, because the speed changes. At the end of the trip, P = F_d × v = 200 × 18 = 3600 W; at the start it is 200 × 2 = 400 W.)""",
      "Question gives distance and time, so average power = Fs/t = 2000 W; 3600 W is only the instantaneous value at the end.")

# ---- maths/2022 ----
patch("maths/2022.json", "5c", """A 18-34: 311×253/849 = 92.65
A 35-59: 311×292/849 = 107.01
A 60+: 311×304/849 = 111.34
B 18-34: 538×253/849 = 160.35
B 35-59: 538×292/849 = 184.99
B 60+: 538×304/849 = 192.66

χ² = (85−92.65)²/92.65 + (95−107.01)²/107.01 + (131−111.34)²/111.34
+ (168−160.35)²/160.35 + (197−184.99)²/184.99 + (173−192.66)²/192.66
= 0.632 + 1.348 + 3.469 + 0.365 + 0.780 + 2.005
= 8.60.""", """A 18-34: 311×253/849 = 92.68
A 35-59: 311×292/849 = 106.96
A 60+: 311×304/849 = 111.36
B 18-34: 538×253/849 = 160.32
B 35-59: 538×292/849 = 185.04
B 60+: 538×304/849 = 192.64

χ² = (85−92.68)²/92.68 + (95−106.96)²/106.96 + (131−111.36)²/111.36
+ (168−160.32)²/160.32 + (197−185.04)²/185.04 + (173−192.64)²/192.64
= 0.636 + 1.338 + 3.464 + 0.368 + 0.773 + 2.002
= 8.58.""", "Expected frequencies had small arithmetic slips; χ² = 8.58 (conclusion unchanged).")
patch("maths/2022.json", "5c", "Since 8.60 > 5.991", "Since 8.58 > 5.991", "Follows from corrected χ².")
patch("maths/2022.json", "9b", "t = 3.75 years.", """t = 3.75 years.
So the first amount takes 3.75 years (3 years 9 months) and the second, invested 9 months later, takes 3 years.""",
      "Part (i) asks for the period in each case; added the second investment's period.")

# ---- maths/2025-typea ----
patch("maths/2025-typea.json", "3b", "f(2/3) ≈ 0.820738.\nf(5/6) ≈ 0.617337.", "f(2/3) ≈ 0.820755.\nf(5/6) ≈ 0.617391.",
      "Two ordinates slightly off (e^(-16/81) = 0.820755, e^(-625/1296) = 0.617391); result 0.8449 unchanged.")
patch("maths/2025-typea.json", "3b", "+ 2(0.820738) + 4(0.617337) + 0.367879]\n= (1/18)(15.208729)", "+ 2(0.820755) + 4(0.617391) + 0.367879]\n= (1/18)(15.208980)",
      "Sum updated with corrected ordinates.")
patch("maths/2025-typea.json", "5a", """Cumulative frequencies""", """Note: the class limits are misprinted in the paper (21-33, 31-44, ...). They are read as 21-30, 31-40, 41-50, 51-60, 61-70, 71-80, with upper class boundaries 30.5, 40.5, 50.5, 60.5, 70.5, 80.5.

Cumulative frequencies""", "Explain how the misprinted classes are read.")
patch("maths/2025-typea.json", "5a", """(ii) Q1 (at cf = 25) ≈ 39.
Q3 (at cf = 75) ≈ 60.

Semi-IQR = (60 - 39)/2 = 10.5.

(iii) At mark = 50: cf ≈ 53.

Number who passed = 100 - 53 = 47 students.""", """(ii) Q1 is at cf = 25, in the 31-40 class: Q1 ≈ 30.5 + (25 − 9)/22 × 10 ≈ 37.8.
Q3 is at cf = 75, in the 51-60 class: Q3 ≈ 50.5 + (75 − 56)/20 × 10 ≈ 60.0.

Semi-interquartile range = (Q3 − Q1)/2 = (60.0 − 37.8)/2 ≈ 11.1.
(Values read from a hand-drawn ogive will be close to these.)

(iii) Students scoring below 50 are those up to the boundary 49.5: cf ≈ 31 + (49.5 − 40.5)/10 × 25 ≈ 53.5.

Number who passed ≈ 100 − 53.5 ≈ 46 students (about 46 to 47).""",
      "Q1 was misread (39); interpolation gives Q1 ≈ 37.8, SIQR ≈ 11.1.")
# ---- maths/2025-typeb ----
patch("maths/2025-typeb.json", "1", """Remaining factor: 3x - 2.

Full factorization: (x+5)(2x-1)(3x-2).""", """6x³ + 31x² + 3x − 10 = (2x² + 9x − 5)(3x + 2).
Remaining factor: 3x + 2.
(Check the constant term: (5)(−1)(2) = −10 ✓.)

Full factorization: (x+5)(2x-1)(3x+2).""", "Remaining factor is (3x + 2), not (3x − 2): constant term must be −10.")
patch("maths/2025-typeb.json", "5", """∑x = 390, ∑y = 117, ∑xy = 6686, ∑x² = 23400.

β₁ = (7×6686 - 390×117)/(7×23400 - 390²)
= 1172/11700
= 0.1002.

β₀ = (117 - 0.1002×390)/7 = 11.132.

Y = 0.1002x + 11.132.

For X = 10: Y = 0.1002(10) + 11.132 = 12.134.""", """∑x = 390, ∑y = 117, ∑xy = 6686, ∑x² = 23398.

β₁ = (7×6686 - 390×117)/(7×23398 - 390²)
= (46802 − 45630)/(163786 − 152100)
= 1172/11686
= 0.1003.

β₀ = (117 - 0.1003×390)/7 = (117 − 39.11)/7 = 11.127.

Y = 0.1003x + 11.127.

For X = 10: Y = 0.1003(10) + 11.127 ≈ 12.13.""", "Σx² is 23398, not 23400.")
patch("maths/2025-typeb.json", "6", "χ² = Σ(O-E)²/E = 65.68.", """Note: the table totals 2000 adults, not 1000 as stated; the totals from the table are used.

χ² = (700−610.4)²/610.4 + (390−479.6)²/479.6 + (420−509.6)²/509.6 + (490−400.4)²/400.4
= 13.15 + 16.74 + 15.75 + 20.05
= 65.70.""", "Show the χ² working; note table total is 2000.")
patch("maths/2025-typeb.json", "7", """(a) r(t) = ∫v dt = sin t i + (3t - t³/3) j + 2eᵗ k.

r(2) = 0.909i + 3.333j + 14.778k.
|r(2)| = √(0.826 + 11.11 + 218.4) = √230.34 = 15.18 m.""", """(a) Displacement from t = 0 to t = 2:
s = ∫₀² v dt = [sin t]₀² i + [3t − t³/3]₀² j + [2eᵗ]₀² k
= sin 2 i + (6 − 8/3) j + (2e² − 2) k
= 0.909i + 3.333j + 12.778k.
(The lower limit matters for the k-component: 2e⁰ = 2 must be subtracted.)
|s| = √(0.826 + 11.111 + 163.28) = √175.22 ≈ 13.24 m.""", "Displacement omitted r(0) = 2k; correct magnitude ≈ 13.24 m.")

patch("maths/2025-typeb.json", "8", """(i) Conservation of momentum:
500(30) + 400(-50) = 500(40) + 400v₂.
15000 - 20000 = 20000 + 400v₂.
-5000 = 20000 + 400v₂.
400v₂ = -25000.
v₂ = -62.5 m/s.

The Honda Accord moves at 62.5 m/s in the direction it originally came from (left).

(ii) KE_loss of Accord = ½(400)[50² - (-62.5)²]
= 200(2500 - 3906.25)
= 200(-1406.25)
= -281,250 J.

The Accord loses 281,250 J of kinetic energy.""", """Note: if the Toyota kept moving forward at 40 m/s (faster than before), momentum would give the Honda −62.5 m/s, and the total kinetic energy would rise from 725 000 J to 1 181 250 J. A collision cannot create energy, so the Toyota must rebound: it moves at 40 m/s backwards (−40 m/s).

(i) Conservation of momentum (Toyota after = −40 m/s):
500(30) + 400(−50) = 500(−40) + 400v₂
15000 − 20000 = −20000 + 400v₂
−5000 = −20000 + 400v₂
400v₂ = 15000
v₂ = +37.5 m/s.

The Honda Accord rebounds and moves at 37.5 m/s in the Toyota's original direction.
(Check: total KE after = ½(500)(40²) + ½(400)(37.5²) = 400 000 + 281 250 = 681 250 J, less than 725 000 J before ✓.)

(ii) Loss in KE of the Accord = ½(400)(50²) − ½(400)(37.5²)
= 200(2500 − 1406.25)
= 200 × 1093.75
= 218 750 J (about 2.19 × 10⁵ J).""", "Literal reading gives an impossible KE gain (and a negative 'loss'); Toyota must rebound, giving v = 37.5 m/s and loss 218 750 J.")
# ---- maths/2025-typec ----
patch("maths/2025-typec.json", "3", """(a) Differentiating implicitly:
3x² + y + x(dy/dx) + 2y(dy/dx) = 0.

At (-1, 3):
3(1) + 3 + (-1)(dy/dx) + 6(dy/dx) = 0.
6 + 5(dy/dx) = 0.
dy/dx = -6/5.

Gradient of normal = 5/6.

Equation: y - 3 = (5/6)(x + 1).
6y - 18 = 5x + 5.
5x - 6y + 23 = 0.""", """(a) Differentiate y = x³ + xy + y² + 10 implicitly (the left side gives dy/dx):
dy/dx = 3x² + y + x(dy/dx) + 2y(dy/dx)
dy/dx(1 − x − 2y) = 3x² + y
dy/dx = (3x² + y)/(1 − x − 2y).

At (−1, 3):
dy/dx = (3 + 3)/(1 + 1 − 6) = 6/(−4) = −3/2.

Gradient of normal = 2/3.

Equation: y − 3 = (2/3)(x + 1)
3y − 9 = 2x + 2
2x − 3y + 11 = 0.

Note: (−1, 3) does not satisfy the equation as printed (the right side gives 15, not 3), so the paper contains a misprint. If the curve is read as x³ + xy + y² + 10 = 0, then 3x² + y + x(dy/dx) + 2y(dy/dx) = 0 gives dy/dx = −6/5 at (−1, 3), and the normal is 5x − 6y + 23 = 0.""",
      "Implicit differentiation ignored the y on the left of 'y = ...'; correct gradient −3/2, normal 2x − 3y + 11 = 0 (alternative reading noted).")

# ======== END ========

def apply():
    by = {}
    for e in E: by.setdefault(e["f"], []).append(e)
    log = []
    for rel, items in by.items():
        p = os.path.join(ROOT, "data", rel); raw = open(p, encoding="utf-8").read()
        for e in items:
            m = [(s, t, o) for s, t, o in spans(raw) if o.get("type") == "Essay" and str(o.get("questionNumber")) == e["n"]]
            if len(m) != 1: raise SystemExit(f"{rel} Q{e['n']}: {len(m)} matches")
            s, t, o = m[0]
            cur = o["modelAnswer"]
            if "old" in e:
                if (e["new"] and e["new"] in cur) or (not e["new"] and e["old"] not in cur): continue   # already applied
                if cur.count(e["old"]) != 1: raise SystemExit(f"{rel} Q{e['n']}: patch text found {cur.count(e['old'])} times")
                new_answer = cur.replace(e["old"], e["new"])
            else:
                if cur == e["answer"]: continue                               # already applied
                new_answer = e["answer"]
            text = set_field(raw[s:t], "modelAnswer", new_answer); json.loads(text)
            raw = raw[:s] + text + raw[t:]; log.append((rel, e["n"], e["why"]))
        json.loads(raw)
        if not DRY: open(p, "w", encoding="utf-8").write(raw)
    if DRY: print("dry run OK:", len(log), "new changes"); return
    if not log: print("nothing new"); return
    with open(os.path.join(ROOT, "review", "changes-log.md"), "a", encoding="utf-8") as out:
        out.write(f"\n## Essay model answers corrected in the full essay read, batch of {len(log)}\n\n| File | Q | Why |\n|---|---|---|\n")
        for r in log: out.write(f"| {r[0]} | {r[1]} | {r[2]} |\n")
    print("rewrote", len(log), "model answers")

DRY = "--dry" in sys.argv
if __name__ == "__main__":
    apply()
