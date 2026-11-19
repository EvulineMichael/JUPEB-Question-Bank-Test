"""Essay model answers corrected during the answer review (round 2). Run once:  python3 review/fixes_essays.py"""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from apply_fixes import spans, set_field, ROOT

E = []
def essay(f, n, answer, why): E.append(dict(f=f, n=str(n), answer=answer, why=why))

essay("chemistry/2015.json", 1, """(a) A reaction is at chemical equilibrium when the rate of the forward reaction equals the rate of the reverse reaction. Both reactions keep going (dynamic equilibrium), but the concentrations of A, B, C and D no longer change. Equilibrium can only be reached in a closed system at constant temperature.

For aA + bB ⇌ cC + dD:
Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ

(b) (i) Kc = [C₆H₆] / [C₂H₂]³
(ii) Kc = [NO]²[Cl₂] / [NOCl]²
(iii) Kc = [NO₂]² / [N₂O₄]

(c) H₂ + I₂ ⇌ 2HI, Kc = [HI]² / ([H₂][I₂])

Note: the data as printed cannot all be right. In a 2 L container, [I₂] starts at 0.002/2 = 0.0010 M, so at most 0.0020 M of HI can form. The paper's 0.0022 M of HI would need more iodine than there is. The figures work if the container is 1 L, which is most likely what was meant:

Initial: [H₂] = 0.0030 M, [I₂] = 0.0020 M, [HI] = 0
Change: 2x = 0.0022, so x = 0.0011 M of H₂ and of I₂ react
Equilibrium: [H₂] = 0.0030 − 0.0011 = 0.0019 M; [I₂] = 0.0020 − 0.0011 = 0.0009 M; [HI] = 0.0022 M

Kc = (0.0022)² / (0.0019 × 0.0009) = 4.84 × 10⁻⁶ / 1.71 × 10⁻⁶ ≈ 2.8

In the exam, show the ICE table (Initial, Change, Equilibrium) clearly. Most of the marks are for the method.""",
      "The old answer reached a negative iodine concentration and then gave Kc ≈ 121 with no working. Explained why the printed data are impossible in 2 L and worked it fully for 1 L (Kc ≈ 2.8).")

essay("chemistry/2026-typea.json", "2a", """(i) High melting point: silicon has a giant covalent (macromolecular) structure, like diamond. Every atom is joined to four others by strong covalent bonds in three dimensions, and a lot of energy is needed to break them.
Low conductivity: all four outer electrons of each atom are used in covalent bonds, so there are almost no free electrons (and no ions) to carry charge. Silicon is a semiconductor: it conducts a little, and more when heated.

(ii) A coordinate (dative) covalent bond: the nitrogen of NH₃ donates its lone pair into the empty orbital of boron, giving H₃N→BH₃.

(iii) The answer expected: BH₃ is electron-deficient (boron has only six outer electrons and an empty p orbital), so it accepts a lone pair. NH₃ is a good electron-pair donor (Lewis base), with a lone pair on nitrogen. AlCl₃ is not a donor: like BH₃, it is itself electron-deficient and is an electron-pair acceptor (Lewis acid). Two acceptors do not form a donor–acceptor bond with each other.

Be careful with the wording: AlCl₃ itself does react with NH₃ (forming AlCl₃·NH₃), because aluminium also has an empty orbital. The point of the question is that BH₃ needs an electron-pair donor, and NH₃ is one while AlCl₃ is not.""",
      "The old answer said AlCl₃ does not react with NH₃ and then contradicted itself in a 'flagged' note. Rewritten around the real reason: BH₃ and AlCl₃ are both electron-pair acceptors, while NH₃ is a donor.")

essay("chemistry/2026-typec.json", "5a", """(i) [Ni(NH₃)₄]SO₄: tetraamminenickel(II) sulphate
(ii) [Cd(CN)₄]²⁻: tetracyanidocadmate(II) ion (older name: tetracyanocadmate(II))
(iii) [Co(OH)₂(H₂O)₄]²⁺: tetraaquadihydroxidocobalt(IV) ion (older name: tetraaquadihydroxocobalt(IV))
Check: x + 2(−1) + 4(0) = +2, so x = +4. Cobalt(IV) is very unusual; the paper probably meant the +1 ion [Co(OH)₂(H₂O)₄]⁺, which would be cobalt(III). Name whatever formula is printed, and show the charge working.
(iv) [Co(NH₃)₆]Cl₃: hexaamminecobalt(III) chloride

Rules used: list ligands in alphabetical order (aqua before hydroxido), give the number of each with di-, tri-, tetra-, and end with the metal and its oxidation state in Roman numerals. If the complex is an anion, the metal name ends in -ate (cadmate).""",
      "Replaced the 'flagged for examiner clarification' note with clear working of cobalt's oxidation state and the naming rules.")

essay("physics/2026-typeb.json", "5c", """Note: the paper gives the electron's mass as 1.67 × 10⁻²⁷ kg, which is the mass of a proton. An electron's mass is 9.11 × 10⁻³¹ kg. Use the value printed in the exam (that is what the marking scheme expects), but know the true value.

i. Acceleration (force eE on the charge, a = F/m):
a = eE/m = (1.60 × 10⁻¹⁹ × 200) / (1.67 × 10⁻²⁷) = 3.20 × 10⁻¹⁷ / 1.67 × 10⁻²⁷ ≈ 1.92 × 10¹⁰ m/s²
(With the true electron mass: a = 3.20 × 10⁻¹⁷ / 9.11 × 10⁻³¹ ≈ 3.51 × 10¹³ m/s².)
The acceleration is perpendicular to the plates (vertical): towards the positive plate for an electron.

ii. The electric field acts only vertically, so the horizontal velocity stays at v₀:
t = l / v₀ = 0.100 / (3.00 × 10⁶) ≈ 3.33 × 10⁻⁸ s
This time does not depend on the mass.""",
      "Kept the paper's (proton) mass for the expected answer, but replaced the 'flagged' note with a clear explanation and both results.")

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
            text = set_field(raw[s:t], "modelAnswer", e["answer"]); json.loads(text)
            raw = raw[:s] + text + raw[t:]; log.append((rel, e["n"], e["why"]))
        json.loads(raw); open(p, "w", encoding="utf-8").write(raw)
    with open(os.path.join(ROOT, "review", "changes-log.md"), "a", encoding="utf-8") as out:
        out.write(f"## Essay model answers rewritten ({len(log)})\n\n| File | Q | Why |\n|---|---|---|\n")
        for r in log: out.write(f"| {r[0]} | {r[1]} | {r[2]} |\n")
        out.write("\n## IJMB papers stored under the wrong subject or year (8)\n\nSee review/misfiled-papers/README.md. Seven files were moved out of the app, and 11 duplicated Paper II questions were removed from ijmb/biology/2016-paper1.json.\n")
    print("rewrote", len(log), "model answers")

if __name__ == "__main__":
    apply()
