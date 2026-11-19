// Topic summaries: MATHEMATICS
// Keys must match the topic names in courseStructure.maths exactly.
(window.TOPIC_NOTES = window.TOPIC_NOTES || {}).maths = {

  // ===== MAT 001 - Pure Mathematics =====
  "Real Numbers": {
    summary: "The number system and how to work with it: types of numbers, surds, indices, absolute value and number bases.",
    points: [
      "Number sets: natural ℕ ⊂ integers ℤ ⊂ rationals ℚ ⊂ reals ℝ. Irrationals (√2, π, e) are real but cannot be written as a fraction p/q.",
      "Every rational number has a terminating or repeating decimal. To convert a recurring decimal to a fraction, multiply by a power of 10 and subtract.",
      "Laws of indices: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ, a^(m/n) = ⁿ√(aᵐ).",
      "Surds: simplify by taking out square factors (√50 = 5√2). Rationalise denominators: 1/(a + √b) = (a − √b)/(a² − b).",
      "Absolute value |x| is the distance from zero: |x| = x if x ≥ 0 and −x if x < 0. |x − a| < b means a − b < x < a + b.",
      "Number bases: convert to base 10 by place values; from base 10 by repeated division, reading remainders from the bottom.",
      "Properties of real numbers: closure, commutative, associative and distributive laws, identity (0 and 1) and inverses.",
      "Proof methods: direct proof, proof by contradiction (e.g. √2 is irrational) and mathematical induction."
    ],
    formulas: [
      "aᵐ × aⁿ = aᵐ⁺ⁿ",
      "a^(−n) = 1/aⁿ,  a^(1/n) = ⁿ√a",
      "√(ab) = √a × √b",
      "1/(√a + √b) = (√a − √b)/(a − b)"
    ],
    tip: "When rationalising, multiply the top and bottom by the conjugate (change the sign between the terms)."
  },

  "Set Theory": {
    summary: "Sets and their notation, set operations, Venn diagrams and counting problems.",
    points: [
      "A set is a well-defined collection of elements. Notation: ∈ (element of), ⊂ (subset), ∅ (empty set), U or ξ (universal set).",
      "Sets can be finite or infinite, equal (same elements) or equivalent (same number of elements). n(A) is the number of elements in A.",
      "Union A ∪ B (in A or B or both), intersection A ∩ B (in both), complement A′ (in U but not A), difference A − B (in A but not B).",
      "A set with n elements has 2ⁿ subsets, including ∅ and the set itself. 2ⁿ − 1 of them are proper subsets.",
      "Laws: commutative, associative, distributive, and De Morgan's laws: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.",
      "Venn diagrams show set relationships. For counting problems, start from the innermost region (all sets) and work outwards.",
      "Disjoint sets have no elements in common: A ∩ B = ∅.",
      "The Cartesian product A × B is the set of ordered pairs (a, b); it has n(A) × n(B) elements."
    ],
    formulas: [
      "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
      "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(B∩C) − n(A∩C) + n(A∩B∩C)",
      "Number of subsets = 2ⁿ"
    ],
    tip: "In three-set Venn problems, fill in the centre (all three) first, then the 'two-only' regions, then 'one-only'."
  },

  "Mappings": {
    summary: "Relations and functions as mappings: domain, codomain and range, types of mapping, composite and inverse functions.",
    points: [
      "A relation links elements of one set to another. A mapping (function) links each element of the domain to exactly one element of the codomain.",
      "The range (image set) is the set of values actually produced; it is a subset of the codomain.",
      "One-to-one (injective): different inputs give different outputs. Onto (surjective): every element of the codomain is used. Bijective: both.",
      "Only bijective (one-to-one and onto) mappings have inverses.",
      "Composite function f∘g(x) = f(g(x)): apply g first, then f. In general f∘g ≠ g∘f.",
      "To find f⁻¹: write y = f(x), make x the subject, then swap x and y. Check that f(f⁻¹(x)) = x.",
      "The graph of f⁻¹ is the reflection of the graph of f in the line y = x.",
      "Binary operations (∗) on a set can be tested for closure, commutativity, associativity, identity and inverses."
    ],
    formulas: [
      "(f∘g)(x) = f(g(x))",
      "(f∘g)⁻¹ = g⁻¹∘f⁻¹",
      "f(f⁻¹(x)) = x"
    ],
    tip: "For a composite like f(g(2)), work from the inside out: find g(2) first, then put the answer into f."
  },

  "Quadratic Equations": {
    summary: "Solving ax² + bx + c = 0, the nature of the roots, sums and products of roots, and quadratic graphs.",
    points: [
      "Methods: factorisation, completing the square, the quadratic formula and graphs.",
      "The discriminant D = b² − 4ac decides the roots: D > 0 gives two distinct real roots, D = 0 equal (repeated) roots, D < 0 no real roots (complex roots).",
      "If α and β are the roots: α + β = −b/a and αβ = c/a.",
      "An equation with roots α and β is x² − (α + β)x + αβ = 0.",
      "Useful identities: α² + β² = (α + β)² − 2αβ and (α − β)² = (α + β)² − 4αβ.",
      "Completing the square: ax² + bx + c = a(x + b/2a)² − (b² − 4ac)/4a. The vertex (turning point) is at x = −b/2a.",
      "The graph is a parabola: it opens upward if a > 0 (minimum point) and downward if a < 0 (maximum point).",
      "Simultaneous equations (one linear, one quadratic): substitute the linear equation into the quadratic."
    ],
    formulas: [
      "x = [−b ± √(b² − 4ac)] / 2a",
      "α + β = −b/a,  αβ = c/a",
      "x² − (α + β)x + αβ = 0",
      "Vertex at x = −b/2a"
    ],
    tip: "For questions about new roots (e.g. 1/α and 1/β), find their sum and product in terms of α + β and αβ, then build the new equation."
  },

  "Polynomials": {
    summary: "Operations on polynomials, the remainder and factor theorems, division, and finding roots of cubic equations.",
    points: [
      "A polynomial's degree is its highest power of x. Add, subtract and multiply by collecting like terms.",
      "Long division (or synthetic division): P(x) = D(x) × Q(x) + R(x), where the remainder has a lower degree than the divisor.",
      "Remainder theorem: when P(x) is divided by (x − a), the remainder is P(a). Divided by (ax − b), it is P(b/a).",
      "Factor theorem: (x − a) is a factor of P(x) if and only if P(a) = 0.",
      "To factorise a cubic, test small values (±1, ±2, and factors of the constant term) to find one root, divide, then factorise the quadratic.",
      "Roots of a cubic ax³ + bx² + cx + d = 0: α + β + γ = −b/a, αβ + βγ + γα = c/a, αβγ = −d/a.",
      "Equate coefficients to find unknown constants in identities.",
      "A polynomial of degree n has at most n real roots."
    ],
    formulas: [
      "Remainder of P(x) ÷ (x − a) = P(a)",
      "Cubic roots: Σα = −b/a, Σαβ = c/a, αβγ = −d/a"
    ],
    tip: "If a question gives two remainders with unknown constants, use the remainder theorem twice to get two equations and solve them simultaneously."
  },

  "Partial Fractions": {
    summary: "Splitting a rational expression into simpler fractions: distinct linear, repeated linear and quadratic factors, and improper fractions.",
    points: [
      "Partial fractions reverse the process of adding fractions. They are used in integration and series expansion.",
      "The fraction must be proper (degree of numerator < degree of denominator). If not, divide first.",
      "Distinct linear factors: (px + q)/((x − a)(x − b)) = A/(x − a) + B/(x − b).",
      "Repeated linear factor: 1/((x − a)²(x − b)) = A/(x − a) + B/(x − a)² + C/(x − b).",
      "Irreducible quadratic factor: (px + q)/((x² + c)(x − a)) = (Ax + B)/(x² + c) + C/(x − a).",
      "Find constants by the cover-up (substitution) method: put x equal to each root of the denominator. Then compare coefficients for the remaining constants.",
      "Check your answer by recombining the fractions or by substituting a convenient value of x."
    ],
    formulas: [
      "A/(x − a) + B/(x − b)",
      "A/(x − a) + B/(x − a)² + C/(x − b)",
      "(Ax + B)/(x² + c) + C/(x − a)"
    ],
    tip: "Choose the form first, based on the factors of the denominator. Most errors come from using the wrong form for repeated or quadratic factors."
  },

  "Binomial Theorem": {
    summary: "Expanding (a + b)ⁿ: Pascal's triangle, the general term, particular terms, the expansion for any index, and approximations.",
    points: [
      "Pascal's triangle gives the coefficients for small positive whole n: each number is the sum of the two above it.",
      "For a positive integer n, the expansion has n + 1 terms with coefficients ⁿCᵣ.",
      "The general term T(r+1) = ⁿCᵣ aⁿ⁻ʳ bʳ. Use it to find a particular term, a coefficient, or the term independent of x.",
      "For a negative or fractional n, (1 + x)ⁿ is an infinite series, valid only for |x| < 1.",
      "For (a + bx)ⁿ with non-integer n, first factor out aⁿ: (a + bx)ⁿ = aⁿ(1 + bx/a)ⁿ, valid for |bx/a| < 1.",
      "Approximations: put a suitable small x into the first few terms, e.g. (1.02)⁸ = (1 + 0.02)⁸.",
      "The sum of the coefficients in (1 + x)ⁿ is 2ⁿ."
    ],
    formulas: [
      "(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ",
      "ⁿCᵣ = n! / (r!(n − r)!)",
      "T(r+1) = ⁿCᵣ aⁿ⁻ʳ bʳ",
      "(1 + x)ⁿ = 1 + nx + n(n−1)x²/2! + n(n−1)(n−2)x³/3! + …"
    ],
    tip: "For the term independent of x, write the general term, collect the powers of x, and set the total power to zero to find r."
  },

  "Logarithms": {
    summary: "Logarithms as inverses of powers: the laws, change of base, natural logs, and solving exponential and log equations.",
    points: [
      "If aˣ = N then logₐ N = x (a > 0, a ≠ 1, N > 0). Logarithms of zero or negative numbers are undefined.",
      "Key values: logₐ 1 = 0, logₐ a = 1, logₐ aˣ = x, and a^(logₐ x) = x.",
      "Laws: log(MN) = log M + log N; log(M/N) = log M − log N; log Mᵏ = k log M.",
      "Common logs use base 10 (log); natural logs use base e ≈ 2.718 (ln).",
      "Change of base: logₐ b = log b / log a. A useful special case: logₐ b = 1 / log_b a.",
      "To solve an exponential equation such as 3ˣ = 20, take logs of both sides: x = log 20 / log 3.",
      "Equations like 4ˣ − 3(2ˣ) + 2 = 0 become quadratics with the substitution y = 2ˣ.",
      "Always check solutions of log equations: the arguments of the logs must be positive."
    ],
    formulas: [
      "log(MN) = log M + log N",
      "log(M/N) = log M − log N",
      "log Mᵏ = k log M",
      "logₐ b = log_c b / log_c a"
    ],
    tip: "There is no rule for log(M + N). Students often wrongly split it into log M + log N."
  },

  "Matrices": {
    summary: "Matrix operations, determinants, inverses, and using matrices to solve simultaneous equations and represent transformations.",
    points: [
      "A matrix of order m × n has m rows and n columns. Add or subtract only matrices of the same order, element by element.",
      "Multiply AB only if the number of columns of A equals the number of rows of B. In general AB ≠ BA.",
      "The identity matrix I has 1s on the leading diagonal and 0s elsewhere: AI = IA = A.",
      "Determinant of a 2 × 2 matrix [a b; c d] is ad − bc. For 3 × 3, expand along a row using cofactors.",
      "A matrix is singular if its determinant is 0; then it has no inverse.",
      "Inverse of a 2 × 2: swap a and d, change the signs of b and c, then divide by the determinant. For 3 × 3: inverse = adjoint ÷ determinant.",
      "Solving simultaneous equations: write AX = B, so X = A⁻¹B, or use Cramer's rule.",
      "Transpose Aᵀ swaps rows and columns. Matrices also represent transformations (reflection, rotation, enlargement)."
    ],
    formulas: [
      "det [a b; c d] = ad − bc",
      "[a b; c d]⁻¹ = (1/(ad − bc)) [d −b; −c a]",
      "X = A⁻¹B",
      "Cramer: x = Δx/Δ, y = Δy/Δ",
      "(AB)⁻¹ = B⁻¹A⁻¹"
    ],
    tip: "Check that the determinant is not zero before trying to find an inverse. If it is zero, the system has no unique solution."
  },

  "Inequalities": {
    summary: "Solving linear, quadratic, rational and modulus inequalities, and graphing inequalities in two variables.",
    points: [
      "Solve linear inequalities like equations, but reverse the inequality sign when multiplying or dividing by a negative number.",
      "Quadratic inequalities: find the roots, sketch the parabola, and read off where it is above (> 0) or below (< 0) the x-axis.",
      "If (x − a)(x − b) < 0 with a < b, then a < x < b. If > 0, then x < a or x > b.",
      "Rational inequalities such as (x − 1)/(x + 2) > 0: use critical values (zeros of the top and bottom) and a sign table. Never multiply through by an expression whose sign is unknown.",
      "Modulus: |x| < a means −a < x < a; |x| > a means x < −a or x > a.",
      "Graphing in two variables: draw the boundary line (solid for ≤ or ≥, dashed for < or >), then shade the correct side by testing a point such as (0, 0).",
      "The region satisfying several inequalities at once is the feasible region, used in linear programming."
    ],
    formulas: [
      "|x − a| < b  ⇔  a − b < x < a + b",
      "(x − a)(x − b) < 0  ⇔  a < x < b (a < b)"
    ],
    tip: "A sketch of the parabola or a sign table almost always saves you from errors in quadratic and rational inequalities."
  },

  "Trigonometry": {
    summary: "Trigonometric ratios, identities, compound and double angles, the sine and cosine rules, solving equations and graphs.",
    points: [
      "Radian measure: π radians = 180°. Arc length s = rθ and sector area = ½r²θ (θ in radians).",
      "Special angles: sin 30° = ½, cos 60° = ½, sin 45° = cos 45° = 1/√2, tan 45° = 1, tan 60° = √3.",
      "ASTC (CAST) rule: All positive in the first quadrant, Sine in the second, Tan in the third, Cos in the fourth.",
      "Pythagorean identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ.",
      "Compound angles: sin(A ± B) = sin A cos B ± cos A sin B; cos(A ± B) = cos A cos B ∓ sin A sin B.",
      "Double angles: sin 2A = 2 sin A cos A; cos 2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1; tan 2A = 2 tan A / (1 − tan²A).",
      "Any triangle: sine rule a/sin A = b/sin B = c/sin C; cosine rule a² = b² + c² − 2bc cos A; area = ½ab sin C.",
      "a cos θ + b sin θ = R cos(θ − α), with R = √(a² + b²) and tan α = b/a. This is used to find maxima and solve equations."
    ],
    formulas: [
      "sin²θ + cos²θ = 1",
      "sin 2A = 2 sin A cos A",
      "cos 2A = 1 − 2sin²A",
      "a/sin A = b/sin B = c/sin C",
      "a² = b² + c² − 2bc cos A",
      "Area = ½ab sin C",
      "s = rθ,  Area of sector = ½r²θ"
    ],
    tip: "When solving trig equations, find all solutions in the given range using the quadrant rule, not just the calculator's first answer."
  },

  "Coordinate Geometry": {
    summary: "Points, lines, circles and conic sections on the Cartesian plane: distance, gradient, equations of lines and loci.",
    points: [
      "The distance between (x₁, y₁) and (x₂, y₂) is √[(x₂ − x₁)² + (y₂ − y₁)²]. The midpoint is ((x₁ + x₂)/2, (y₁ + y₂)/2).",
      "Gradient m = (y₂ − y₁)/(x₂ − x₁). Parallel lines have equal gradients; perpendicular lines have m₁m₂ = −1.",
      "Equation of a line: y = mx + c, or y − y₁ = m(x − x₁), or ax + by + c = 0.",
      "The perpendicular distance from (x₁, y₁) to ax + by + c = 0 is |ax₁ + by₁ + c| / √(a² + b²).",
      "Section formula: the point dividing AB in the ratio m : n is ((nx₁ + mx₂)/(m + n), (ny₁ + my₂)/(m + n)).",
      "Circle with centre (a, b) and radius r: (x − a)² + (y − b)² = r². General form x² + y² + 2gx + 2fy + c = 0 has centre (−g, −f) and radius √(g² + f² − c).",
      "A tangent to a circle is perpendicular to the radius at the point of contact.",
      "Conic sections: parabola y² = 4ax, ellipse x²/a² + y²/b² = 1, hyperbola x²/a² − y²/b² = 1. A locus is the path of a point satisfying a condition."
    ],
    formulas: [
      "d = √[(x₂ − x₁)² + (y₂ − y₁)²]",
      "m = (y₂ − y₁)/(x₂ − x₁)",
      "y − y₁ = m(x − x₁)",
      "Perpendicular lines: m₁m₂ = −1",
      "(x − a)² + (y − b)² = r²",
      "Distance from point to line = |ax₁ + by₁ + c| / √(a² + b²)"
    ],
    tip: "For the equation of a tangent to a circle, find the gradient of the radius first, then use the negative reciprocal."
  },

  "Complex Numbers": {
    summary: "Numbers of the form a + bi: arithmetic, conjugates, the Argand diagram, modulus–argument form and De Moivre's theorem.",
    points: [
      "i = √(−1), so i² = −1, i³ = −i, i⁴ = 1. A complex number z = a + bi has real part a and imaginary part b.",
      "Add and subtract by combining real and imaginary parts. Multiply by expanding brackets and using i² = −1.",
      "The conjugate of z = a + bi is z̄ = a − bi. Divide by multiplying top and bottom by the conjugate of the denominator. z z̄ = a² + b².",
      "Two complex numbers are equal only if their real parts are equal and their imaginary parts are equal.",
      "On an Argand diagram, z is the point (a, b). Modulus |z| = √(a² + b²); argument arg z = θ, where tan θ = b/a (check the quadrant).",
      "Polar (modulus–argument) form: z = r(cos θ + i sin θ). Multiply by multiplying moduli and adding arguments; divide by dividing moduli and subtracting arguments.",
      "De Moivre's theorem: [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ). It gives powers and roots of complex numbers.",
      "Complex roots of real polynomials come in conjugate pairs. The square root of a complex number can be found by equating real and imaginary parts."
    ],
    formulas: [
      "i² = −1",
      "|z| = √(a² + b²)",
      "z = r(cos θ + i sin θ)",
      "|z₁z₂| = |z₁||z₂|,  arg(z₁z₂) = arg z₁ + arg z₂",
      "De Moivre: (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ"
    ],
    tip: "Always sketch the point on an Argand diagram before giving the argument. The calculator's tan⁻¹ is wrong for points in the second and third quadrants."
  },

  "Sequences and Series": {
    summary: "Arithmetic and geometric progressions, sums to n terms and to infinity, sigma notation and other series.",
    points: [
      "A sequence is an ordered list of terms; a series is the sum of its terms.",
      "Arithmetic progression (AP): a constant difference d between terms. nth term a + (n − 1)d.",
      "Geometric progression (GP): a constant ratio r between terms. nth term arⁿ⁻¹.",
      "A GP converges (has a sum to infinity) only when |r| < 1.",
      "Means: arithmetic mean of a and b is (a + b)/2; geometric mean is √(ab).",
      "Sigma notation: Σ means 'sum of'. Standard results: Σr = n(n + 1)/2, Σr² = n(n + 1)(2n + 1)/6, Σr³ = [n(n + 1)/2]².",
      "Applications: compound interest and depreciation (GP), and savings plans or seating arrangements (AP).",
      "Mathematical induction proves formulas for series: prove it for n = 1, assume it for n = k, and show it then holds for n = k + 1."
    ],
    formulas: [
      "AP: Tₙ = a + (n − 1)d,  Sₙ = (n/2)[2a + (n − 1)d] = (n/2)(a + l)",
      "GP: Tₙ = arⁿ⁻¹,  Sₙ = a(1 − rⁿ)/(1 − r)",
      "S∞ = a/(1 − r), |r| < 1",
      "Σr = n(n + 1)/2"
    ],
    tip: "If three consecutive terms are in AP, the middle one is their average: 2b = a + c. If in GP, b² = ac."
  },

  // ===== MAT 002 - Calculus =====
  "Functions": {
    summary: "Types of function, domain and range, graphs and transformations, even, odd and periodic functions, and inverses.",
    points: [
      "A function assigns each input in the domain exactly one output. Use the vertical line test on a graph.",
      "Find the domain by excluding values that cause problems: division by zero, square roots of negatives, logs of non-positive numbers.",
      "Common types: polynomial, rational, exponential (eˣ), logarithmic (ln x), trigonometric, modulus and piecewise functions.",
      "Even functions satisfy f(−x) = f(x) and are symmetric about the y-axis (x², cos x). Odd functions satisfy f(−x) = −f(x) and have rotational symmetry about the origin (x³, sin x).",
      "Periodic functions repeat: sin x and cos x have period 2π; tan x has period π.",
      "Transformations: f(x) + a shifts up; f(x − a) shifts right; a f(x) stretches vertically; f(ax) compresses horizontally; −f(x) reflects in the x-axis.",
      "Composite and inverse functions follow the same rules as mappings. The inverse exists only if the function is one-to-one (restrict the domain if needed).",
      "eˣ and ln x are inverses of each other: e^(ln x) = x and ln(eˣ) = x."
    ],
    formulas: [
      "Even: f(−x) = f(x);  Odd: f(−x) = −f(x)",
      "e^(ln x) = x,  ln(eˣ) = x"
    ],
    tip: "To find the range, sketch the graph or complete the square. Do not guess from a few values."
  },

  "Limits and Continuity": {
    summary: "What a limit is, how to evaluate limits, important standard limits, limits at infinity, and when a function is continuous.",
    points: [
      "lim(x→a) f(x) = L means f(x) gets as close as we like to L as x approaches a. The value of f at a itself does not matter.",
      "First try direct substitution. If it gives 0/0, simplify by factorising, rationalising (multiply by the conjugate) or using standard limits.",
      "The limit exists only if the left-hand and right-hand limits are equal.",
      "Limits at infinity of rational functions: divide every term by the highest power of x in the denominator.",
      "Standard limits: lim(x→0) sin x / x = 1, lim(x→0) (1 − cos x)/x = 0, lim(x→0) (eˣ − 1)/x = 1, lim(n→∞) (1 + 1/n)ⁿ = e.",
      "L'Hôpital's rule: for 0/0 or ∞/∞ forms, lim f/g = lim f′/g′.",
      "f is continuous at x = a if f(a) is defined, the limit exists, and the limit equals f(a).",
      "Discontinuities can be removable (a hole), jumps (piecewise functions) or infinite (vertical asymptotes)."
    ],
    formulas: [
      "lim(x→0) sin x / x = 1",
      "lim(x→a) (xⁿ − aⁿ)/(x − a) = naⁿ⁻¹",
      "lim(n→∞) (1 + 1/n)ⁿ = e"
    ],
    tip: "If substitution gives 0/0, there is usually a common factor (x − a) to cancel. Factorise first."
  },

  "Differentiation": {
    summary: "Finding rates of change: first principles, standard derivatives, and the product, quotient and chain rules, plus implicit and parametric differentiation.",
    points: [
      "The derivative dy/dx is the gradient of the curve, the instantaneous rate of change of y with x.",
      "First principles: f′(x) = lim(h→0) [f(x + h) − f(x)] / h.",
      "Power rule: d/dx(xⁿ) = nxⁿ⁻¹. The derivative of a constant is 0; constants multiply through.",
      "Standard derivatives: d/dx(sin x) = cos x, d/dx(cos x) = −sin x, d/dx(tan x) = sec²x, d/dx(eˣ) = eˣ, d/dx(ln x) = 1/x.",
      "Product rule for uv, quotient rule for u/v, and chain rule for a function of a function, e.g. (3x + 1)⁵ or sin(x²).",
      "Implicit differentiation: differentiate both sides with respect to x, remembering that d/dx(y²) = 2y dy/dx.",
      "Parametric: if x and y are functions of t, then dy/dx = (dy/dt) ÷ (dx/dt).",
      "Higher derivatives: d²y/dx² is the derivative of dy/dx. Logarithmic differentiation helps with products of powers and with xˣ."
    ],
    formulas: [
      "d/dx(xⁿ) = nxⁿ⁻¹",
      "Product: d(uv)/dx = u v′ + v u′",
      "Quotient: d(u/v)/dx = (v u′ − u v′)/v²",
      "Chain: dy/dx = (dy/du)(du/dx)",
      "d/dx(eᵃˣ) = aeᵃˣ,  d/dx(ln f(x)) = f′(x)/f(x)",
      "Parametric: dy/dx = (dy/dt)/(dx/dt)"
    ],
    tip: "For the quotient rule, remember 'low d-high minus high d-low, over low squared': the bottom times the derivative of the top comes first."
  },

  "Applications of Differentiation": {
    summary: "Using derivatives: tangents and normals, stationary points, maxima and minima, rates of change, small changes and curve sketching.",
    points: [
      "The gradient of the tangent at x = a is f′(a). The normal is perpendicular to it, with gradient −1/f′(a).",
      "Stationary points occur where dy/dx = 0.",
      "Classify them with the second derivative: d²y/dx² > 0 is a minimum, < 0 a maximum. If it is 0, check the sign of dy/dx on either side (it may be a point of inflexion).",
      "Optimisation: write the quantity to maximise or minimise in terms of one variable, differentiate, set equal to zero, and check it is a maximum or minimum.",
      "Rates of change (related rates): dV/dt = (dV/dr)(dr/dt), e.g. a balloon's volume increasing or a ladder sliding.",
      "Small changes and approximations: δy ≈ (dy/dx) δx; percentage error ≈ (δy/y) × 100%.",
      "Kinematics: velocity v = ds/dt and acceleration a = dv/dt = d²s/dt².",
      "Curve sketching: find intercepts, stationary points, asymptotes and behaviour for large x. Newton–Raphson finds roots: xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)."
    ],
    formulas: [
      "Tangent: y − y₁ = f′(x₁)(x − x₁)",
      "Normal gradient = −1 / f′(x₁)",
      "Stationary point: dy/dx = 0",
      "δy ≈ (dy/dx) δx",
      "Newton–Raphson: xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)"
    ],
    tip: "In optimisation problems, use the constraint to remove one variable before differentiating. Then state the answer the question asks for."
  },

  "Maclaurin and Taylor Series": {
    summary: "Writing functions as infinite power series: Maclaurin series about 0, Taylor series about a, standard expansions and approximations.",
    points: [
      "A Maclaurin series expands f(x) as a power series about x = 0 using its derivatives at 0.",
      "A Taylor series expands f(x) about any point x = a using the derivatives at a. Maclaurin is the special case a = 0.",
      "Standard expansions: eˣ, sin x, cos x, ln(1 + x) and (1 + x)ⁿ. eˣ, sin x and cos x are valid for all x; ln(1 + x) for −1 < x ≤ 1; (1 + x)ⁿ for |x| < 1.",
      "Combine series by adding, multiplying or substituting, e.g. e^(2x) by putting 2x in the series for eˣ.",
      "Use the first few terms to approximate values (e^0.1, sin 0.2 with x in radians) or to find limits.",
      "The more terms used, the more accurate the approximation near the point of expansion."
    ],
    formulas: [
      "Maclaurin: f(x) = f(0) + xf′(0) + x²f″(0)/2! + x³f‴(0)/3! + …",
      "Taylor: f(x) = f(a) + (x − a)f′(a) + (x − a)²f″(a)/2! + …",
      "eˣ = 1 + x + x²/2! + x³/3! + …",
      "sin x = x − x³/3! + x⁵/5! − …",
      "cos x = 1 − x²/2! + x⁴/4! − …",
      "ln(1 + x) = x − x²/2 + x³/3 − …"
    ],
    tip: "Learn the standard series by heart. Many 'expand up to x³' questions are quicker by combining standard series than by repeated differentiation."
  },

  "Integration": {
    summary: "Reverse differentiation: standard integrals, definite integrals, substitution, integration by parts and partial fractions.",
    points: [
      "Integration reverses differentiation. Indefinite integrals need a constant of integration, + C.",
      "Power rule: ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C for n ≠ −1, and ∫(1/x) dx = ln|x| + C.",
      "Standard integrals: ∫eˣ dx = eˣ + C, ∫sin x dx = −cos x + C, ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C.",
      "Definite integrals: ∫ₐᵇ f(x) dx = F(b) − F(a). No + C is needed.",
      "Substitution: choose u so that its derivative appears in the integrand, change dx to du, and change the limits for definite integrals.",
      "Integration by parts handles products such as x eˣ, x sin x and ln x. Choose u by LIATE (Logs, Inverse trig, Algebraic, Trig, Exponential).",
      "Use partial fractions for rational functions, e.g. ∫ 1/((x − 1)(x + 2)) dx.",
      "Trig integrals often need identities first, e.g. sin²x = (1 − cos 2x)/2. The pattern ∫ f′(x)/f(x) dx = ln|f(x)| + C is very useful."
    ],
    formulas: [
      "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C",
      "∫(1/x) dx = ln|x| + C",
      "∫eᵃˣ dx = eᵃˣ/a + C",
      "By parts: ∫u dv = uv − ∫v du",
      "∫f′(x)/f(x) dx = ln|f(x)| + C",
      "∫(ax + b)ⁿ dx = (ax + b)ⁿ⁺¹ / [a(n + 1)] + C"
    ],
    tip: "Check an indefinite integral by differentiating your answer. You should get back exactly what you started with."
  },

  "Applications of Integration": {
    summary: "Using integration: area under and between curves, volumes of revolution, mean value, and motion problems.",
    points: [
      "The area between a curve and the x-axis from a to b is ∫ₐᵇ y dx. Areas below the axis come out negative, so split the integral at the roots.",
      "Area between two curves: ∫ₐᵇ (upper − lower) dx, with the limits at their intersection points.",
      "Area with respect to the y-axis: ∫ x dy.",
      "Volume of revolution about the x-axis: V = π ∫ₐᵇ y² dx. About the y-axis: V = π ∫ x² dy.",
      "The mean value of f(x) over [a, b] is (1/(b − a)) ∫ₐᵇ f(x) dx.",
      "Kinematics: displacement s = ∫ v dt and velocity v = ∫ a dt. Use the given conditions to find the constants.",
      "Numerical integration: the trapezium rule and Simpson's rule approximate integrals that are hard to find exactly."
    ],
    formulas: [
      "Area = ∫ₐᵇ y dx",
      "Area between curves = ∫ₐᵇ (y₁ − y₂) dx",
      "Volume about x-axis = π ∫ₐᵇ y² dx",
      "Mean value = (1/(b − a)) ∫ₐᵇ f(x) dx",
      "Trapezium rule: (h/2)[y₀ + 2(y₁ + … + yₙ₋₁) + yₙ]"
    ],
    tip: "Always sketch the region first. It shows where to split the integral and which curve is on top."
  },

  "First Order Differential Equations": {
    summary: "Equations involving dy/dx: forming them, separating variables, homogeneous and linear equations, and real-life applications.",
    points: [
      "A differential equation links a function and its derivatives. Its order is the highest derivative present. The general solution has arbitrary constants; a particular solution uses given initial conditions.",
      "Form a differential equation by eliminating the constants from a given general relation.",
      "Separable equations, dy/dx = f(x)g(y): rearrange to ∫(1/g(y)) dy = ∫ f(x) dx, then integrate both sides.",
      "Homogeneous equations, dy/dx = F(y/x): substitute y = vx, so dy/dx = v + x dv/dx, and the variables separate.",
      "Linear equations, dy/dx + P(x)y = Q(x): multiply through by the integrating factor e^(∫P dx). The left side becomes d/dx(y × IF).",
      "Exact equations are a further type, checked by comparing partial derivatives.",
      "Applications: exponential growth and decay (dN/dt = kN gives N = N₀eᵏᵗ), Newton's law of cooling, mixing problems and simple circuits."
    ],
    formulas: [
      "Separable: ∫dy/g(y) = ∫f(x) dx",
      "Integrating factor IF = e^(∫P dx)",
      "y × IF = ∫Q × IF dx",
      "dN/dt = kN ⇒ N = N₀eᵏᵗ"
    ],
    tip: "Identify the type first: separable, homogeneous or linear. The method follows directly from the type."
  },

  "Second Order Differential Equations": {
    summary: "Linear second-order equations with constant coefficients: auxiliary equations, complementary functions, particular integrals and applications.",
    points: [
      "The standard form is a y″ + b y′ + c y = f(x). If f(x) = 0 the equation is homogeneous.",
      "For the homogeneous case, try y = eᵐˣ to get the auxiliary equation am² + bm + c = 0.",
      "Two distinct real roots m₁, m₂: y = Ae^(m₁x) + Be^(m₂x).",
      "Equal roots m: y = (A + Bx)eᵐˣ.",
      "Complex roots p ± qi: y = eᵖˣ(A cos qx + B sin qx).",
      "Non-homogeneous case: general solution = complementary function (CF) + particular integral (PI). Choose the PI to match f(x): a polynomial for a polynomial, keᵏˣ for an exponential, and a cos + b sin for trig terms.",
      "If the trial PI is already part of the CF, multiply it by x.",
      "Use two initial conditions to find A and B. Applications include simple harmonic motion (y″ + ω²y = 0), damped oscillations and electrical circuits."
    ],
    formulas: [
      "Auxiliary: am² + bm + c = 0",
      "Real distinct: y = Ae^(m₁x) + Be^(m₂x)",
      "Equal: y = (A + Bx)eᵐˣ",
      "Complex p ± qi: y = eᵖˣ(A cos qx + B sin qx)",
      "y = CF + PI"
    ],
    tip: "Find the complementary function first, then the particular integral. Apply the initial conditions only to the complete solution."
  },

  // ===== MAT 003 - Statistics =====
  "Introduction to Statistics": {
    summary: "What statistics is, types of data, collecting data and sampling, and presenting data in tables and charts.",
    points: [
      "Statistics is the collection, organisation, presentation, analysis and interpretation of data.",
      "Descriptive statistics summarise data; inferential statistics draw conclusions about a population from a sample.",
      "Data types: qualitative (categorical: colour, gender) and quantitative (numerical), which is discrete (counts) or continuous (measurements).",
      "A population is the whole group of interest; a sample is part of it. Sampling methods: simple random, systematic, stratified, cluster and quota.",
      "Data sources: primary (questionnaires, interviews, experiments, observation) and secondary (records, publications).",
      "Frequency tables group data into classes. Know class limits, class boundaries, class width and class mark (midpoint).",
      "Charts: bar charts, pie charts (angle = frequency ÷ total × 360°), histograms (area represents frequency), frequency polygons, cumulative frequency curves (ogives) and stem-and-leaf plots."
    ],
    formulas: [
      "Pie chart angle = (f / Σf) × 360°",
      "Class mark = (lower limit + upper limit) / 2",
      "Histogram height (frequency density) = f / class width"
    ],
    tip: "For histograms with unequal class widths, plot frequency density, not frequency. This is a common trap."
  },

  "Measures of Location": {
    summary: "Averages that describe the centre of data: mean, median and mode for raw and grouped data, and quartiles and percentiles.",
    points: [
      "Mean: the sum of values ÷ number of values. It uses every value but is affected by extreme values (outliers).",
      "Median: the middle value when data are in order. It is not affected by outliers.",
      "Mode: the most frequent value. Data can be unimodal, bimodal or have no mode.",
      "For grouped data, use the class midpoints for the mean. An assumed mean A simplifies the working.",
      "Grouped median: use the formula, or read the value at n/2 from the ogive (cumulative frequency curve).",
      "Grouped mode: use the modal class and the formula, or the histogram method.",
      "Quartiles divide data into four parts: Q₁ at n/4, Q₂ (median) at n/2, Q₃ at 3n/4. Deciles and percentiles divide into 10 and 100 parts.",
      "Other means: weighted mean, geometric mean (for rates of growth) and harmonic mean (for average speeds)."
    ],
    formulas: [
      "Mean x̄ = Σfx / Σf",
      "Assumed mean: x̄ = A + Σfd / Σf  (d = x − A)",
      "Median = L + [(n/2 − F)/f] × c",
      "Mode = L + [Δ₁/(Δ₁ + Δ₂)] × c"
    ],
    tip: "In the grouped median formula, L is the lower class boundary (not the limit), F the cumulative frequency before the median class, f the median class frequency and c the class width."
  },

  "Measures of Dispersion": {
    summary: "How spread out data are: range, interquartile range, mean deviation, variance, standard deviation and coefficient of variation.",
    points: [
      "Range = largest − smallest value. It is simple but sensitive to outliers.",
      "Interquartile range IQR = Q₃ − Q₁ covers the middle 50% of the data. Semi-interquartile range = IQR ÷ 2.",
      "Mean deviation is the average absolute distance from the mean.",
      "Variance is the mean of the squared deviations from the mean. Standard deviation is its square root, in the same units as the data.",
      "Coding: adding a constant to every value does not change the standard deviation; multiplying every value by k multiplies the standard deviation by |k|.",
      "The coefficient of variation compares the spread of data sets with different means or units. A smaller value means more consistent data.",
      "Skewness: positive skew (mean > median > mode, long right tail) or negative skew (mean < median < mode).",
      "Box plots show the minimum, Q₁, median, Q₃ and maximum, and help spot outliers."
    ],
    formulas: [
      "Mean deviation = Σf|x − x̄| / Σf",
      "Variance σ² = Σf(x − x̄)² / Σf = Σfx²/Σf − x̄²",
      "Standard deviation σ = √variance",
      "Coefficient of variation = (σ / x̄) × 100%",
      "Pearson skewness = (mean − mode) / σ"
    ],
    tip: "The shortcut σ² = Σfx²/Σf − x̄² is faster and less error-prone than finding every deviation, especially with grouped data."
  },

  "Combinatorics": {
    summary: "Counting arrangements and selections: the counting principle, factorials, permutations and combinations.",
    points: [
      "Fundamental counting principle: if one task can be done in m ways and another in n ways, together they can be done in m × n ways.",
      "n! = n × (n − 1) × … × 2 × 1, and 0! = 1.",
      "Permutations count arrangements, where order matters. Combinations count selections, where order does not matter.",
      "Arrangements of n objects with repeats: divide n! by the factorial of each repeat count, e.g. the letters of STATISTICS.",
      "Circular arrangements of n distinct objects: (n − 1)!.",
      "Restrictions: treat items that must stay together as one block (then arrange inside the block); for items that must be apart, take the total minus the arrangements where they are together.",
      "Useful identities: ⁿCᵣ = ⁿCₙ₋ᵣ and ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ."
    ],
    formulas: [
      "ⁿPᵣ = n! / (n − r)!",
      "ⁿCᵣ = n! / (r!(n − r)!)",
      "Repeats: n! / (p! q! r! …)",
      "Circular: (n − 1)!"
    ],
    tip: "Ask yourself: does the order matter? Arranging, ranking or seating means permutations; choosing a team or committee means combinations."
  },

  "Probability": {
    summary: "Measuring chance: sample spaces, events, the addition and multiplication rules, conditional probability, tree diagrams and Bayes' theorem.",
    points: [
      "Probability P(E) = number of favourable outcomes ÷ total number of equally likely outcomes, with 0 ≤ P(E) ≤ 1.",
      "Complement: P(not E) = 1 − P(E).",
      "Mutually exclusive events cannot happen together: P(A or B) = P(A) + P(B). In general, P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
      "Independent events do not affect each other: P(A and B) = P(A) × P(B).",
      "Conditional probability: P(A | B) is the probability of A given that B has happened.",
      "Tree diagrams: multiply along the branches, add between the outcomes you want. Remember 'without replacement' changes the second probabilities.",
      "Bayes' theorem reverses conditional probabilities: from P(B | A) to P(A | B).",
      "Use counting methods (permutations and combinations) to find the numbers of outcomes in harder problems."
    ],
    formulas: [
      "P(A′) = 1 − P(A)",
      "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
      "Independent: P(A ∩ B) = P(A) P(B)",
      "P(A | B) = P(A ∩ B) / P(B)",
      "Bayes: P(A | B) = P(B | A) P(A) / P(B)"
    ],
    tip: "'At least one' problems are easiest as 1 − P(none)."
  },

  "Random Variables": {
    summary: "Discrete random variables, probability distributions, expectation and variance, and the binomial and Poisson distributions.",
    points: [
      "A random variable X takes numerical values determined by chance. A probability distribution lists each value with its probability; the probabilities add up to 1.",
      "Expected value (mean) E(X) is the long-run average. Variance measures spread about the mean.",
      "Rules: E(aX + b) = aE(X) + b and Var(aX + b) = a² Var(X).",
      "Binomial distribution B(n, p): n independent trials, each with two outcomes and a constant probability p of success.",
      "For the binomial, mean = np and variance = np(1 − p).",
      "Poisson distribution: counts of random events in a fixed interval (calls per hour, defects per metre), with mean = variance = λ.",
      "The Poisson can approximate the binomial when n is large and p is small, with λ = np.",
      "For continuous random variables, a probability density function f(x) is used, and probabilities are areas under it."
    ],
    formulas: [
      "E(X) = Σx P(x)",
      "Var(X) = E(X²) − [E(X)]²",
      "Binomial: P(X = r) = ⁿCᵣ pʳ (1 − p)ⁿ⁻ʳ",
      "Binomial mean = np, variance = npq",
      "Poisson: P(X = r) = e^(−λ) λʳ / r!"
    ],
    tip: "Check the four conditions for a binomial before using it: a fixed number of trials, two outcomes, a constant p, and independent trials."
  },

  "Normal Distribution": {
    summary: "The bell-shaped continuous distribution: its properties, standardising with z-scores, using tables, and approximating the binomial.",
    points: [
      "The normal distribution N(µ, σ²) is symmetric and bell-shaped, with mean = median = mode = µ.",
      "The total area under the curve is 1, and area represents probability.",
      "About 68% of values lie within 1σ of the mean, 95% within 2σ and 99.7% within 3σ.",
      "Standardise with z = (x − µ)/σ to use the standard normal table N(0, 1).",
      "Use symmetry for negatives: P(Z < −a) = 1 − P(Z < a).",
      "Reverse problems: find z from the table for a given probability, then x = µ + zσ.",
      "Normal approximation to the binomial (when np > 5 and nq > 5): use µ = np and σ² = npq, with a continuity correction of ±0.5.",
      "Many natural measurements (heights, test scores, errors) are approximately normally distributed."
    ],
    formulas: [
      "z = (x − µ) / σ",
      "P(a < X < b) = P(z_a < Z < z_b)",
      "Binomial approx: µ = np, σ = √(npq)"
    ],
    tip: "Draw a quick bell curve and shade the area you want before using the tables. It prevents most sign and side errors."
  },

  "Significance Testing": {
    summary: "Testing claims with data: hypotheses, significance levels, test statistics, critical regions, and z, t and chi-square tests.",
    points: [
      "The null hypothesis H₀ is the claim of no change or no difference. The alternative hypothesis H₁ is what you suspect instead.",
      "One-tailed tests check for a change in one direction (> or <); two-tailed tests check for any change (≠).",
      "The significance level α (often 5% or 1%) is the probability of rejecting H₀ when it is actually true (a Type I error). A Type II error is failing to reject a false H₀.",
      "Steps: state the hypotheses, choose α, calculate the test statistic, compare it with the critical value (or compare the p-value with α), then conclude in context.",
      "z-test for a mean: use it when σ is known or the sample is large (n ≥ 30).",
      "t-test: use it for small samples when σ is unknown, with n − 1 degrees of freedom.",
      "Chi-square (χ²) test: for goodness of fit and for independence in contingency tables.",
      "If the test statistic is in the critical region, reject H₀; otherwise there is not enough evidence to reject it."
    ],
    formulas: [
      "z = (x̄ − µ) / (σ/√n)",
      "t = (x̄ − µ) / (s/√n),  df = n − 1",
      "χ² = Σ (O − E)² / E",
      "Contingency table: df = (r − 1)(c − 1)"
    ],
    tip: "Always finish with a sentence in the context of the question, e.g. 'There is evidence at the 5% level that the mean mass has decreased.'"
  },

  "Correlation and Regression": {
    summary: "Relationships between two variables: scatter diagrams, correlation coefficients and the least-squares regression line.",
    points: [
      "A scatter diagram shows the relationship between paired data: positive, negative or no correlation, strong or weak.",
      "The product-moment correlation coefficient r lies between −1 and +1. Close to ±1 means strong linear correlation; close to 0 means little linear correlation.",
      "Spearman's rank correlation coefficient compares rankings, and is used for ordinal data or non-linear but steady trends.",
      "The regression line of y on x, y = a + bx, is found by least squares. It passes through the mean point (x̄, ȳ).",
      "Use the regression line to estimate y for a given x. Interpolation (within the data range) is reliable; extrapolation (outside it) is risky.",
      "Correlation does not prove causation: a third factor may cause both variables to change.",
      "The coefficient of determination r² gives the proportion of the variation in y explained by x."
    ],
    formulas: [
      "r = Sxy / √(Sxx Syy)",
      "Sxy = Σxy − (Σx Σy)/n,  Sxx = Σx² − (Σx)²/n",
      "Regression: b = Sxy / Sxx,  a = ȳ − b x̄",
      "Spearman: rₛ = 1 − 6Σd² / [n(n² − 1)]"
    ],
    tip: "In Spearman's formula, d is the difference between the two ranks for each item. Square each d before adding."
  },

  // ===== MAT 004A - Applied Mechanics =====
  "Vectors": {
    summary: "Vectors in two and three dimensions: components, magnitude, unit vectors, scalar and vector products, and vector equations of lines.",
    points: [
      "A vector has magnitude and direction. It can be written in column form or as ai + bj + ck.",
      "Magnitude: |ai + bj + ck| = √(a² + b² + c²). A unit vector in the direction of v is v/|v|.",
      "Add and subtract component by component. Multiplying by a scalar scales the length.",
      "Position vectors: if A and B have position vectors a and b, then AB = b − a. The midpoint has position vector (a + b)/2.",
      "Scalar (dot) product: a·b = |a||b| cos θ = a₁b₁ + a₂b₂ + a₃b₃. If a·b = 0 the vectors are perpendicular.",
      "Vector (cross) product a × b is perpendicular to both a and b, with magnitude |a||b| sin θ (the area of the parallelogram they form).",
      "Vector equation of a line: r = a + λd, where a is a point on the line and d its direction.",
      "Parallel vectors are scalar multiples of each other. Points are collinear if AB = k × BC."
    ],
    formulas: [
      "|v| = √(a² + b² + c²)",
      "AB = b − a",
      "a·b = |a||b| cos θ = a₁b₁ + a₂b₂ + a₃b₃",
      "cos θ = a·b / (|a||b|)",
      "r = a + λd"
    ],
    tip: "To find the angle between two vectors, use cos θ = a·b/(|a||b|). The dot product is quick with components."
  },

  "Kinematics": {
    summary: "Motion of a particle: displacement, velocity and acceleration, constant-acceleration equations, variable acceleration, projectiles and relative velocity.",
    points: [
      "Displacement, velocity and acceleration are vectors; distance and speed are scalars.",
      "For constant acceleration in a straight line, use the 'suvat' equations.",
      "Vertical motion under gravity: a = −g (taking upward as positive), with g = 9.8 m s⁻².",
      "Variable acceleration: v = ds/dt and a = dv/dt. Going the other way, s = ∫v dt and v = ∫a dt.",
      "Velocity–time graphs: the gradient is acceleration and the area is displacement. Use them for journeys with several stages.",
      "Projectiles: horizontal velocity u cos θ is constant; vertical motion has acceleration −g. Use time to link the two.",
      "Relative velocity: the velocity of A relative to B is v_A − v_B. It is used for closest approach and interception problems.",
      "In vector form: r = r₀ + vt for constant velocity, and r = r₀ + ut + ½at² for constant acceleration."
    ],
    formulas: [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "s = ½(u + v)t",
      "Range R = u² sin 2θ / g",
      "v_AB = v_A − v_B"
    ],
    tip: "If acceleration depends on time, you cannot use suvat. Differentiate or integrate instead."
  },

  "Newtonian Mechanics": {
    summary: "Newton's laws applied to particles: F = ma, connected particles and pulleys, friction, momentum and impulse, work, energy and power.",
    points: [
      "Newton's laws: (1) no resultant force means constant velocity; (2) resultant force F = ma; (3) action and reaction are equal and opposite.",
      "Draw a force diagram for each body: weight mg, normal reaction R, tension T, friction F and any applied forces.",
      "Connected particles over a smooth pulley: the tension is the same on both sides, and both particles have the same size of acceleration. Write F = ma for each, then solve.",
      "Friction: F ≤ µR, and F = µR when the body is moving or about to move (limiting friction).",
      "On a smooth inclined plane, the component of weight along the slope is mg sin θ and the normal reaction is mg cos θ.",
      "Momentum = mv; impulse = Ft = change in momentum. Momentum is conserved in collisions.",
      "Newton's experimental law for collisions: speed of separation = e × speed of approach, where 0 ≤ e ≤ 1 (coefficient of restitution).",
      "Work done = Fs cos θ. Kinetic energy ½mv² and potential energy mgh. Power P = Fv. Work–energy principle: work done = change in energy."
    ],
    formulas: [
      "F = ma",
      "F = µR (limiting)",
      "Impulse I = mv − mu",
      "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
      "v₂ − v₁ = −e(u₂ − u₁)",
      "P = Fv"
    ],
    tip: "For pulley problems, write a separate F = ma equation for each particle, then add them to eliminate the tension."
  },

  "Forces and Equilibrium": {
    summary: "Particles in equilibrium: resultant forces, resolving, the triangle of forces, Lami's theorem and friction on planes.",
    points: [
      "A particle is in equilibrium when the resultant force on it is zero, so the forces in any two perpendicular directions each balance.",
      "Resolve each force into horizontal and vertical (or along and perpendicular to a slope) components.",
      "The resultant of several forces is found by adding components: R = √(X² + Y²), with direction tan α = Y/X.",
      "Triangle of forces: three forces in equilibrium can be drawn as a closed triangle.",
      "Lami's theorem: for three forces in equilibrium, each force is proportional to the sine of the angle between the other two.",
      "Friction on an inclined plane: when a body is about to slide, friction acts up the slope and F = µR. The angle of friction λ satisfies tan λ = µ.",
      "A body on a rough slope stays at rest without any extra force if tan θ ≤ µ.",
      "Problems with strings, rods and hanging masses all use the same rule: resolve, then solve."
    ],
    formulas: [
      "ΣFx = 0,  ΣFy = 0",
      "R = √(X² + Y²),  tan α = Y/X",
      "Lami: P/sin α = Q/sin β = R/sin γ",
      "F = µR,  tan λ = µ"
    ],
    tip: "On slopes, resolve parallel and perpendicular to the slope. It avoids resolving the normal reaction and friction."
  },

  "Equilibrium of Rigid Bodies": {
    summary: "Bodies that can turn as well as move: moments, couples, conditions for equilibrium, centres of gravity, ladders and toppling.",
    points: [
      "The moment of a force about a point is force × perpendicular distance from the point to the line of action of the force.",
      "Principle of moments: for a body in equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments.",
      "Conditions for equilibrium of a rigid body: the resultant force is zero (resolve in two directions) and the total moment about any point is zero.",
      "A couple is two equal, opposite, parallel forces. It causes turning without moving the body along, and its moment (Fd) is the same about every point.",
      "Take moments about the point where unknown forces act. This removes them from the equation.",
      "Centre of gravity: for a uniform rod it is the midpoint. For composite bodies use x̄ = Σmx / Σm.",
      "Ladder problems: weight at the centre, normal reaction and friction at the ground, normal reaction at a smooth wall. When about to slip, F = µR.",
      "A body on a slope topples when the vertical line through its centre of gravity falls outside its base."
    ],
    formulas: [
      "Moment = F × d (perpendicular distance)",
      "Σ(clockwise moments) = Σ(anticlockwise moments)",
      "Couple moment = F × d",
      "Centre of mass x̄ = Σmx / Σm"
    ],
    tip: "Choose the pivot point for taking moments where the most unknown forces act. Fewer unknowns means less algebra."
  },

  // ===== MAT 004B - Business Mathematics =====
  "Mathematics of Finance": {
    summary: "Money over time: simple and compound interest, present value, annuities, sinking funds, loans, depreciation and discounts.",
    points: [
      "Simple interest is calculated on the original principal only.",
      "Compound interest is calculated on the principal plus the interest already earned. Compounding more often (monthly versus yearly) gives more interest.",
      "The effective annual rate converts a nominal rate compounded k times a year into an equivalent annual rate.",
      "Present value is how much a future amount is worth today. Use it to compare investments and payments at different times.",
      "An annuity is a series of equal payments at regular intervals. A sinking fund saves regular amounts to reach a target.",
      "Loan repayments (amortisation): each fixed payment covers that period's interest plus some of the principal.",
      "Depreciation: straight-line (equal amount each year) or reducing balance (a fixed percentage each year).",
      "Discount, commission, profit and loss percentages, and hire purchase are common business calculations."
    ],
    formulas: [
      "Simple interest I = PRT/100",
      "Compound amount A = P(1 + r/k)ᵏⁿ",
      "Present value PV = A(1 + r)⁻ⁿ",
      "Annuity amount S = R[(1 + r)ⁿ − 1]/r",
      "Annuity present value = R[1 − (1 + r)⁻ⁿ]/r",
      "Reducing balance: V = P(1 − r)ⁿ"
    ],
    tip: "Match the rate to the period. For monthly compounding, divide the annual rate by 12 and multiply the years by 12."
  },

  "Marginal Concepts": {
    summary: "Using derivatives in economics: marginal cost, revenue and profit, average values, and elasticity of demand.",
    points: [
      "'Marginal' means the extra cost, revenue or profit from producing or selling one more unit. In calculus it is the derivative.",
      "Marginal cost MC = dC/dQ; marginal revenue MR = dR/dQ, where revenue R = price × quantity.",
      "Profit π = R − C, and marginal profit = MR − MC.",
      "Average cost AC = C/Q. Marginal cost cuts average cost at the minimum point of average cost.",
      "Price elasticity of demand measures how responsive demand is to price. |E| > 1 is elastic, |E| < 1 is inelastic and |E| = 1 is unit elastic.",
      "Revenue is maximised where MR = 0, which happens where demand has unit elasticity.",
      "Integration reverses the process: total cost = ∫MC dQ + fixed cost."
    ],
    formulas: [
      "MC = dC/dQ,  MR = dR/dQ",
      "R = PQ,  π = R − C",
      "AC = C/Q",
      "Elasticity E = (dQ/dP) × (P/Q)",
      "Total cost = ∫MC dQ + fixed cost"
    ],
    tip: "Write revenue in terms of one variable first (substitute the demand equation for P), then differentiate."
  },

  "Production and Cost Functions": {
    summary: "Modelling production and costs: production functions, fixed and variable costs, average and marginal costs, and break-even analysis.",
    points: [
      "A production function shows output Q from inputs such as labour L and capital K, e.g. the Cobb–Douglas function Q = A Lᵅ Kᵝ.",
      "Marginal product of labour = ∂Q/∂L. The law of diminishing returns says it eventually falls as more labour is added.",
      "Total cost = fixed cost (does not change with output) + variable cost (rises with output).",
      "Average total cost = TC/Q, average fixed cost = FC/Q, average variable cost = VC/Q.",
      "Break-even point: total revenue = total cost, so profit is zero. Above it, the firm makes a profit; below it, a loss.",
      "For a linear model, break-even quantity = fixed cost ÷ (price − variable cost per unit).",
      "Cost functions are often quadratic or cubic, giving U-shaped average and marginal cost curves.",
      "Returns to scale (Cobb–Douglas): α + β > 1 is increasing, = 1 is constant, < 1 is decreasing."
    ],
    formulas: [
      "TC = FC + VC",
      "ATC = TC/Q",
      "Break-even: TR = TC",
      "Linear break-even Q = FC / (P − v)",
      "Cobb–Douglas: Q = A Lᵅ Kᵝ"
    ],
    tip: "For break-even, set revenue equal to cost and solve for Q. A quick sketch of both lines shows the profit and loss regions."
  },

  "Consumer and Producer Surplus": {
    summary: "Measuring the benefit to buyers and sellers using demand and supply curves, market equilibrium, and integration.",
    points: [
      "The demand curve P = D(Q) slopes down; the supply curve P = S(Q) slopes up.",
      "Market equilibrium is where demand = supply, giving the equilibrium quantity Q₀ and price P₀.",
      "Consumer surplus is the benefit buyers get from paying less than they were willing to pay: the area under the demand curve and above the price line.",
      "Producer surplus is the benefit sellers get from receiving more than the minimum they would accept: the area above the supply curve and below the price line.",
      "For straight-line curves, the surpluses are triangles: area = ½ × base × height.",
      "Total surplus (economic welfare) = consumer surplus + producer surplus, and is largest at equilibrium.",
      "Taxes, subsidies and price controls change the surpluses and can create a deadweight loss."
    ],
    formulas: [
      "Consumer surplus = ∫₀^Q₀ D(Q) dQ − P₀Q₀",
      "Producer surplus = P₀Q₀ − ∫₀^Q₀ S(Q) dQ",
      "Equilibrium: D(Q) = S(Q)"
    ],
    tip: "Find the equilibrium first. Both surpluses use Q₀ as the upper limit and P₀ as the price line."
  },

  "Optimization": {
    summary: "Finding the best values in business problems: maximising profit or revenue, minimising cost, and problems with several variables or constraints.",
    points: [
      "Single variable: set the first derivative to zero, then use the second derivative to check for a maximum (negative) or minimum (positive).",
      "Profit is maximised where marginal revenue = marginal cost, with the marginal cost curve cutting from below (d²π/dQ² < 0).",
      "Average cost is minimised where marginal cost = average cost.",
      "Two variables: use partial derivatives, setting ∂f/∂x = 0 and ∂f/∂y = 0.",
      "Classify a two-variable stationary point with D = f_xx f_yy − (f_xy)²: D > 0 and f_xx < 0 is a maximum, D > 0 and f_xx > 0 a minimum, D < 0 a saddle point.",
      "Constrained optimisation: substitute the constraint, or use Lagrange multipliers.",
      "Inventory: the economic order quantity (EOQ) minimises the total of ordering and holding costs."
    ],
    formulas: [
      "Stationary: dy/dx = 0",
      "Max profit: MR = MC",
      "D = f_xx f_yy − (f_xy)²",
      "Lagrange: L = f(x, y) − λ g(x, y)",
      "EOQ = √(2DS / H)"
    ],
    tip: "After finding the optimum, answer the question asked, e.g. the maximum profit itself, not just the quantity that gives it."
  },

  "Linear Programming": {
    summary: "Optimising a linear objective subject to linear constraints: formulating the problem, the graphical method and the corner-point rule.",
    points: [
      "Linear programming finds the maximum or minimum of a linear objective function (profit or cost) subject to linear constraints (limited resources).",
      "Formulation: define the decision variables (x, y), write the objective function, write each constraint as an inequality, and add the non-negativity constraints x ≥ 0, y ≥ 0.",
      "Graphical method (two variables): draw each constraint line, shade the region that satisfies them all (the feasible region).",
      "Corner-point theorem: the optimum value occurs at a vertex (corner) of the feasible region.",
      "Evaluate the objective function at every corner point and choose the largest (for maximising) or smallest (for minimising).",
      "Alternatively, slide an objective (iso-profit) line across the region to the last point it touches.",
      "Problems with more variables are solved by the simplex method.",
      "Applications: product mix, diet problems, transport and resource allocation."
    ],
    formulas: [
      "Maximise or minimise Z = ax + by",
      "Subject to: a₁x + b₁y ≤ c₁, …,  x ≥ 0, y ≥ 0"
    ],
    tip: "Find the corner points accurately by solving pairs of constraint equations simultaneously. Do not read them off a rough graph."
  }
};
