// Topic summaries: PHYSICS
// Keys must match the topic names in courseStructure.physics exactly.
// Each topic: summary (one line), points (key ideas), formulas, tip (exam tip).
(window.TOPIC_NOTES = window.TOPIC_NOTES || {}).physics = {

  // ===== PHY 001 - Mechanics & Properties of Matter =====
  "Physical Quantities and Units": {
    summary: "How physical quantities are measured and expressed: base and derived quantities, SI units, dimensions and measurement errors.",
    points: [
      "The 7 SI base quantities: length (m), mass (kg), time (s), electric current (A), temperature (K), amount of substance (mol), luminous intensity (cd).",
      "Derived quantities are built from base ones: velocity (m s⁻¹), force (N = kg m s⁻²), energy (J = N m), power (W = J s⁻¹), pressure (Pa = N m⁻²).",
      "Dimensions express a quantity in M, L and T: velocity = LT⁻¹, force = MLT⁻², energy = ML²T⁻², pressure = ML⁻¹T⁻².",
      "A correct equation is dimensionally consistent: every term has the same dimensions. Use this to check equations or find unknown powers.",
      "Scalars have magnitude only (mass, speed, energy, time); vectors have magnitude and direction (displacement, velocity, force, momentum).",
      "Prefixes: n = 10⁻⁹, µ = 10⁻⁶, m = 10⁻³, c = 10⁻², k = 10³, M = 10⁶, G = 10⁹.",
      "Systematic errors (zero error, poor calibration) shift every reading the same way; random errors scatter readings and are reduced by repeating and averaging.",
      "Instrument precision: metre rule ±0.1 cm, vernier caliper ±0.01 cm, micrometer screw gauge ±0.001 cm."
    ],
    formulas: [
      "Percentage error = (absolute error ÷ measured value) × 100%",
      "If Q = AᵃBᵇ, then ΔQ/Q = a(ΔA/A) + b(ΔB/B)"
    ],
    tip: "For dimension questions, write every quantity as powers of M, L and T, then equate the powers on both sides of the equation."
  },

  "Vectors": {
    summary: "Quantities with magnitude and direction: adding, resolving and multiplying vectors, and conditions for equilibrium.",
    points: [
      "A vector is drawn as an arrow: its length shows magnitude, its direction shows direction.",
      "Add vectors with the triangle or parallelogram law. The single vector that has the same effect is the resultant; the equilibrant is equal and opposite to it.",
      "Resolve a vector F at angle θ into components F cos θ (along the reference line) and F sin θ (perpendicular to it).",
      "For many forces, add all x-components and all y-components separately, then combine them to get the resultant.",
      "Dot (scalar) product A·B = AB cos θ gives a scalar, e.g. work = F·s. Cross (vector) product |A×B| = AB sin θ gives a vector (right-hand rule), e.g. torque.",
      "In unit-vector form A = aᵢi + aⱼj + aₖk, with magnitude √(aᵢ² + aⱼ² + aₖ²).",
      "Relative velocity of A with respect to B: v_AB = v_A − v_B.",
      "Three forces in equilibrium form a closed triangle, and Lami's theorem applies."
    ],
    formulas: [
      "R² = A² + B² + 2AB cos θ (θ = angle between A and B)",
      "R = √(ΣFx² + ΣFy²),  tan α = ΣFy / ΣFx",
      "Lami: P/sin α = Q/sin β = R/sin γ"
    ],
    tip: "Draw a clear diagram and resolve everything along two perpendicular directions first: most vector questions become simple after that."
  },

  "Kinematics": {
    summary: "Describing motion without asking what causes it: displacement, velocity, acceleration, motion graphs, free fall and projectiles.",
    points: [
      "Distance and speed are scalars; displacement and velocity are vectors. Acceleration is the rate of change of velocity.",
      "On a displacement–time graph, the gradient is velocity. On a velocity–time graph, the gradient is acceleration and the area under the graph is displacement.",
      "The equations of motion apply only when acceleration is uniform (constant).",
      "Free fall: acceleration g ≈ 9.8 m s⁻² (often 10) downwards, ignoring air resistance. Time to reach maximum height = u/g.",
      "In projectile motion, horizontal velocity u cos θ stays constant while vertical motion has acceleration g. The two are treated separately.",
      "Maximum range happens at a launch angle of 45°. Angles θ and (90° − θ) give the same range.",
      "For a body thrown horizontally from height h: time of flight t = √(2h/g); horizontal distance = u × t."
    ],
    formulas: [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "s = ½(u + v)t",
      "Time of flight T = 2u sin θ / g",
      "Max height H = u² sin²θ / 2g",
      "Range R = u² sin 2θ / g"
    ],
    tip: "List u, v, a, s and t, tick the three you know, and pick the equation that links them to the one you want."
  },

  "Dynamics (Newton's Laws and Forces)": {
    summary: "Why bodies move the way they do: Newton's three laws, momentum, impulse, collisions and friction.",
    points: [
      "First law (inertia): a body stays at rest or moves uniformly in a straight line unless a resultant force acts. Mass measures inertia.",
      "Second law: resultant force equals the rate of change of momentum, F = Δ(mv)/t, which gives F = ma for constant mass.",
      "Third law: action and reaction are equal and opposite, and act on different bodies.",
      "Momentum p = mv is a vector. Impulse = Ft = change in momentum (area under a force–time graph).",
      "Conservation of momentum: in a closed system total momentum is unchanged. Elastic collisions also conserve kinetic energy; inelastic ones do not (bodies that stick together are perfectly inelastic).",
      "Recoil and rockets: the gun and bullet (or rocket and exhaust) gain equal and opposite momentum, m₁v₁ = m₂v₂.",
      "Friction opposes relative motion. Limiting friction F = µR; static friction is greater than kinetic friction. On an incline at the angle of repose, µ = tan θ.",
      "In a lift, the apparent weight is R = m(g + a) accelerating up, m(g − a) accelerating down, and zero in free fall."
    ],
    formulas: [
      "F = ma = Δp / t",
      "Impulse = Ft = mv − mu",
      "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
      "F = µR",
      "W = mg"
    ],
    tip: "For collisions, write momentum before = momentum after with signs for direction. Only use kinetic energy if the question says the collision is elastic."
  },

  "The Gravitational Field": {
    summary: "Newton's law of gravitation, gravitational field strength and potential, escape velocity, satellites and Kepler's laws.",
    points: [
      "Every pair of masses attracts with a force proportional to the product of the masses and inversely proportional to the square of their separation.",
      "Gravitational field strength g is the force per unit mass. At the Earth's surface g = GM/R².",
      "Above the surface, g falls as 1/r². Below the surface it falls steadily to zero at the centre. It also varies slightly with latitude because the Earth spins and is not a perfect sphere.",
      "Gravitational potential V = −GM/r: the work done bringing a unit mass from infinity. It is negative, and zero at infinity.",
      "Escape velocity is the minimum launch speed needed to leave the field for good, about 11.2 km s⁻¹ for the Earth.",
      "For a satellite in circular orbit, gravity provides the centripetal force: GMm/r² = mv²/r.",
      "A geostationary (parking-orbit) satellite has a 24-hour period, orbits above the equator at about 36,000 km and is used for communication.",
      "Kepler's laws: planets move in ellipses with the Sun at one focus; they sweep equal areas in equal times; T² ∝ r³."
    ],
    formulas: [
      "F = Gm₁m₂ / r²  (G = 6.67 × 10⁻¹¹ N m² kg⁻²)",
      "g = GM / R²",
      "V = −GM / r,  U = −GMm / r",
      "Escape velocity v = √(2GM/R) = √(2gR)",
      "Orbital speed v = √(GM/r)",
      "Period T = 2π√(r³ / GM)"
    ],
    tip: "Many questions only need GM = gR². Substitute it to avoid needing G or the Earth's mass."
  },

  "Work, Energy and Power": {
    summary: "Work as force times displacement, kinetic and potential energy, conservation of energy, power and machines.",
    points: [
      "Work done W = Fs cos θ. No work is done if there is no displacement, or if the force is perpendicular to the motion.",
      "Kinetic energy = ½mv²; gravitational potential energy = mgh. Work–energy theorem: net work done = change in kinetic energy.",
      "Energy cannot be created or destroyed, only converted. Without friction, mechanical energy (KE + PE) is conserved, so mgh = ½mv² gives v = √(2gh).",
      "Power is the rate of doing work: P = W/t = Fv. 1 horsepower ≈ 746 W.",
      "Efficiency = (useful energy output ÷ energy input) × 100%. Real machines are less than 100% efficient, mainly because of friction.",
      "Machines: mechanical advantage MA = load ÷ effort; velocity ratio VR = effort distance ÷ load distance; efficiency = MA/VR × 100%.",
      "VR of common machines: pulley system = number of supporting strands; inclined plane = 1/sin θ; wheel and axle = R/r; screw jack = 2πL/p (L = arm length, p = pitch).",
      "Energy sources: renewable (solar, wind, hydro, biomass) and non-renewable (coal, oil, gas, nuclear fuel)."
    ],
    formulas: [
      "W = Fs cos θ",
      "KE = ½mv²,  PE = mgh",
      "P = W/t = Fv",
      "Efficiency = MA / VR × 100%"
    ],
    tip: "On rough surfaces: energy at the start = energy at the end + work done against friction (friction force × distance)."
  },

  "Circular and Oscillatory Motions": {
    summary: "Motion in a circle (angular speed, centripetal force) and simple harmonic motion (pendulums, springs, energy and resonance).",
    points: [
      "Angles are measured in radians. Angular velocity ω = θ/t = 2π/T = 2πf, and linear speed v = ωr.",
      "A body moving in a circle accelerates towards the centre even at constant speed. The force causing this is the centripetal force, directed inward.",
      "Examples: tension in a whirled string, friction on a car turning a corner, gravity on a satellite. Banked roads use the normal reaction: tan θ = v²/rg.",
      "Vertical circle: tension is greatest at the bottom and least at the top. The minimum speed at the top is √(gr).",
      "Simple harmonic motion (SHM): acceleration is proportional to displacement and directed towards the centre, a = −ω²x.",
      "In SHM, speed is maximum at the centre (x = 0), and acceleration is maximum at the extremes (x = ±A).",
      "Energy in SHM swaps between kinetic and potential; the total stays ½mω²A².",
      "Damping makes oscillations die away. Forced oscillation at the natural frequency gives resonance (large amplitude), e.g. tuning a radio or swaying bridges."
    ],
    formulas: [
      "v = ωr,  ω = 2π/T",
      "a = v²/r = ω²r,  F = mv²/r",
      "a = −ω²x,  x = A sin ωt",
      "v = ω√(A² − x²),  v_max = ωA",
      "Pendulum T = 2π√(l/g)",
      "Spring T = 2π√(m/k)"
    ],
    tip: "The period of a simple pendulum does not depend on the mass or (for small swings) the amplitude: only on length and g."
  },

  "Elasticity": {
    summary: "How solids stretch and recover: Hooke's law, stress, strain, Young's modulus and energy stored in a stretched material.",
    points: [
      "Elastic deformation disappears when the load is removed; plastic deformation is permanent.",
      "Hooke's law: extension is proportional to the applied force, up to the limit of proportionality.",
      "Stress–strain curve: limit of proportionality → elastic limit → yield point → maximum (ultimate) stress → breaking point.",
      "Ductile materials (copper) stretch a lot before breaking; brittle materials (glass) break with little plastic deformation.",
      "Stress = force ÷ cross-sectional area; strain = extension ÷ original length (no unit).",
      "Young's modulus is stress ÷ strain, a property of the material, not of the specimen's size.",
      "The work done stretching a wire is stored as elastic potential energy, equal to the area under the force–extension graph.",
      "Springs in series share the force (weaker overall); springs in parallel share the extension (stiffer overall)."
    ],
    formulas: [
      "F = ke",
      "Stress = F/A,  Strain = e/l",
      "Young's modulus E = Fl / (Ae)",
      "Energy stored = ½Fe = ½ke²",
      "Series: 1/k = 1/k₁ + 1/k₂;  Parallel: k = k₁ + k₂"
    ],
    tip: "Convert units first: diameter to radius, mm to m and cm² to m². Most Young's modulus mistakes are unit mistakes."
  },

  "Hydrostatics": {
    summary: "Fluids at rest: pressure in liquids and gases, Pascal's principle, Archimedes' principle, flotation and surface tension.",
    points: [
      "Pressure is force per unit area. In a liquid it depends only on depth and density, not on the shape of the container, and acts equally in all directions.",
      "Atmospheric pressure ≈ 1.01 × 10⁵ Pa (760 mmHg). It is measured with a mercury or aneroid barometer; a manometer measures gas pressure.",
      "Pascal's principle: pressure applied to an enclosed fluid is transmitted equally throughout. This is how hydraulic presses, jacks and brakes multiply force.",
      "Archimedes' principle: a body in a fluid experiences an upthrust equal to the weight of fluid it displaces.",
      "Law of flotation: a floating body displaces its own weight of fluid. A hydrometer floats deeper in less dense liquids.",
      "Relative density = density of substance ÷ density of water = weight in air ÷ loss of weight in water.",
      "Surface tension makes a liquid surface behave like a stretched skin; it causes capillary rise, which is greater in narrower tubes."
    ],
    formulas: [
      "P = F/A",
      "P = hρg",
      "Hydraulic press: F₁/A₁ = F₂/A₂",
      "Upthrust = ρ(fluid) × V(displaced) × g",
      "Capillary rise h = 2γ cos θ / (ρgr)"
    ],
    tip: "For a floating object, upthrust = its weight. For a fully submerged object, upthrust uses the whole volume of the object."
  },

  "Hydrodynamics": {
    summary: "Fluids in motion: streamline and turbulent flow, the continuity equation, Bernoulli's principle and viscosity.",
    points: [
      "In streamline (laminar) flow, particles follow smooth paths. Above a critical velocity the flow becomes turbulent.",
      "Continuity equation: for an incompressible fluid, flow rate is the same everywhere, so fluid speeds up where the pipe narrows.",
      "Bernoulli's principle: where a fluid moves faster, its pressure is lower. It explains aeroplane lift, the Venturi meter, spray guns, Bunsen burners and roofs blown off in storms.",
      "Viscosity is internal friction in a fluid. Honey is very viscous; water is not.",
      "The viscosity of liquids decreases as temperature rises; the viscosity of gases increases.",
      "A sphere falling through a viscous fluid speeds up until weight = upthrust + viscous drag, then moves at constant terminal velocity.",
      "Stokes' law gives the drag on a small sphere moving slowly through a fluid."
    ],
    formulas: [
      "Continuity: A₁v₁ = A₂v₂",
      "Bernoulli: P + ½ρv² + ρgh = constant",
      "Stokes: F = 6πηrv",
      "Terminal velocity v = 2r²(ρ − σ)g / 9η",
      "Poiseuille: V/t = πPr⁴ / (8ηl)"
    ],
    tip: "In terminal-velocity questions, ρ is the density of the sphere and σ the density of the fluid. Mixing them up flips the sign."
  },

  // ===== PHY 002 - Heat, Waves & Optics =====
  "Temperature and Thermometry": {
    summary: "What temperature is, temperature scales, thermometric properties and the main types of thermometer.",
    points: [
      "Temperature measures the degree of hotness and decides the direction of heat flow: heat flows from higher to lower temperature until thermal equilibrium.",
      "A thermometric property changes steadily with temperature: length of a liquid column, resistance of a wire, thermocouple emf, pressure of a gas at constant volume.",
      "Fixed points: the ice point (0 °C) and steam point (100 °C) at standard pressure. Absolute zero is 0 K = −273 °C.",
      "Liquid-in-glass: mercury (−39 °C to 357 °C; opaque, does not wet glass, expands uniformly) or alcohol (for low temperatures, freezes at −115 °C).",
      "Clinical thermometer: narrow range (35–43 °C) and a constriction that stops the mercury falling back.",
      "Six's thermometer records maximum and minimum temperatures.",
      "Platinum resistance thermometer: accurate, wide range, slow. Thermocouple: very wide range, fast, small. Pyrometer: for very high temperatures (furnaces).",
      "The constant-volume gas thermometer is the standard against which others are calibrated."
    ],
    formulas: [
      "θ = (X_θ − X₀) / (X₁₀₀ − X₀) × 100 °C",
      "T(K) = θ(°C) + 273",
      "F = 9C/5 + 32"
    ],
    tip: "Different thermometers can disagree at the same temperature away from the fixed points, because their properties do not vary in exactly the same way."
  },

  "Heat and Energy": {
    summary: "Heat as energy: specific and latent heat, thermal expansion, how heat travels, and boiling, evaporation and vapour pressure.",
    points: [
      "Heat is energy transferred because of a temperature difference. The specific heat capacity c is the heat needed to raise 1 kg by 1 K.",
      "Method of mixtures: heat lost by the hot body = heat gained by the cold body (no losses).",
      "Latent heat is absorbed or released during a change of state at constant temperature: fusion (melting) and vaporisation (boiling).",
      "Solids expand when heated: linear (α), area (β = 2α) and volume (γ = 3α) expansivity. This matters for railway gaps, bimetallic strips and thermostats.",
      "Liquids show real and apparent expansion. Water is unusual: it contracts from 0 °C to 4 °C, so it is densest at 4 °C and ponds freeze from the top.",
      "Heat travels by conduction (through solids), convection (fluid currents, sea and land breezes) and radiation (no medium needed; dull black surfaces absorb and emit best).",
      "Evaporation happens at any temperature from the surface and causes cooling. Boiling happens throughout the liquid when vapour pressure equals external pressure.",
      "Boiling point rises with pressure (pressure cooker) and with dissolved impurities. A vacuum flask reduces all three kinds of heat transfer."
    ],
    formulas: [
      "Q = mcΔθ",
      "Q = mL",
      "ΔL = L₀αΔθ",
      "Conduction: Q/t = kAΔθ / l",
      "Radiation (Stefan): P = σAT⁴"
    ],
    tip: "In mixture questions with a change of state, include the latent heat term as well as the mcΔθ terms on the correct side."
  },

  "Ideal Gases": {
    summary: "The gas laws, the ideal gas equation, kinetic theory and the molecular meaning of pressure and temperature.",
    points: [
      "Boyle's law: at constant temperature, pressure is inversely proportional to volume.",
      "Charles' law: at constant pressure, volume is proportional to absolute temperature. Pressure law: at constant volume, pressure is proportional to absolute temperature.",
      "The ideal gas equation PV = nRT combines all three. Temperatures must be in kelvin.",
      "Kinetic theory assumptions: molecules are tiny compared with the spaces between them, move randomly, collide elastically and exert no forces except during collisions.",
      "Pressure comes from molecules hitting the container walls. The average kinetic energy of a molecule is proportional to absolute temperature.",
      "Dalton's law: the total pressure of a gas mixture is the sum of the partial pressures.",
      "Real gases behave like ideal gases at low pressure and high temperature, and deviate at high pressure and low temperature.",
      "Isothermal change: temperature constant (PV = constant). Adiabatic change: no heat exchange (PVᵞ = constant)."
    ],
    formulas: [
      "P₁V₁/T₁ = P₂V₂/T₂",
      "PV = nRT  (R = 8.31 J mol⁻¹ K⁻¹)",
      "P = ⅓ρ c̄²",
      "Average KE = (3/2)kT",
      "c_rms = √(3RT/M)",
      "Cp − Cv = R"
    ],
    tip: "Always change °C to kelvin before using any gas law. Using °C is the most common mistake."
  },

  "Waves": {
    summary: "How waves carry energy: types of wave, wave terms, the wave equation, wave properties, superposition and stationary waves.",
    points: [
      "A wave transfers energy from place to place without transferring matter.",
      "Mechanical waves need a medium (sound, water waves); electromagnetic waves do not (light, radio).",
      "Transverse waves vibrate perpendicular to the direction of travel (light, water waves); longitudinal waves vibrate parallel to it (sound).",
      "Key terms: amplitude, wavelength λ, frequency f, period T = 1/f, phase.",
      "All waves can be reflected, refracted, diffracted and show interference. Only transverse waves can be polarised.",
      "Superposition: when waves meet, displacements add. Crest on crest is constructive interference; crest on trough is destructive.",
      "Stationary waves form when two identical waves travel in opposite directions. They have nodes (no motion) and antinodes. Node to node = λ/2.",
      "Electromagnetic spectrum, in order of increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-rays, gamma rays. All travel at 3 × 10⁸ m s⁻¹ in vacuum."
    ],
    formulas: [
      "v = fλ",
      "T = 1/f",
      "y = A sin(ωt − kx),  k = 2π/λ",
      "Phase difference = 2πx/λ"
    ],
    tip: "Frequency is set by the source and does not change when a wave enters a new medium. Speed and wavelength change."
  },

  "Sound Waves": {
    summary: "Sound as a longitudinal wave: speed, echoes, pitch, loudness and quality, vibrating strings and air columns, beats and the Doppler effect.",
    points: [
      "Sound is a longitudinal mechanical wave that needs a medium. It travels fastest in solids and slowest in gases (about 330–340 m s⁻¹ in air).",
      "In a gas, sound speed rises with temperature (v ∝ √T) but does not depend on pressure.",
      "Echo: sound reflected from a surface, used for depth sounding (sonar) and measuring distances.",
      "Pitch depends on frequency, loudness on amplitude, and quality (timbre) on the overtones present.",
      "Humans hear about 20 Hz to 20 kHz. Ultrasound (above 20 kHz) is used in medical scanning and cleaning.",
      "A stretched string vibrates with all harmonics. A closed pipe gives only odd harmonics; an open pipe gives all harmonics.",
      "Resonance tube: the first and second resonance lengths differ by λ/2. An end correction accounts for the antinode just beyond the open end.",
      "Beats are heard when two close frequencies sound together. The Doppler effect is the change in observed frequency when source or observer moves."
    ],
    formulas: [
      "Echo: 2d = vt",
      "String: f = (1/2l)√(T/µ)",
      "Closed pipe: f₀ = v/4l;  Open pipe: f₀ = v/2l",
      "Resonance tube: l₂ − l₁ = λ/2",
      "Beat frequency = f₁ − f₂",
      "Doppler: f′ = f(v ± v_o)/(v ∓ v_s)"
    ],
    tip: "In echo questions, the sound travels to the wall and back, so the distance is half of speed × time."
  },

  "Geometric Optics (Light)": {
    summary: "How light travels and reflects and refracts: shadows, plane and curved mirrors, Snell's law, total internal reflection and prisms.",
    points: [
      "Light travels in straight lines (rectilinear propagation), which explains shadows, eclipses and the pinhole camera.",
      "Laws of reflection: the angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal lie in the same plane.",
      "Plane mirror image: virtual, upright, same size, laterally inverted, as far behind the mirror as the object is in front. Rotating a mirror by θ turns the reflected ray by 2θ.",
      "Concave mirrors converge light (used in torches and shaving mirrors); convex mirrors diverge light and give a wide field of view (driving mirrors). Focal length f = r/2.",
      "Refraction: light bends when it changes speed. Going into a denser medium, it bends towards the normal.",
      "Refractive index n = c/v. Objects under water look shallower than they are.",
      "Total internal reflection happens when light in a denser medium meets the boundary at more than the critical angle. It is used in optical fibres, periscope prisms and explains mirages.",
      "A prism disperses white light into a spectrum (ROYGBIV). Violet is deviated most, red least."
    ],
    formulas: [
      "1/f = 1/u + 1/v,  m = v/u  (mirrors)",
      "n = sin i / sin r",
      "n = real depth / apparent depth",
      "sin C = 1/n",
      "Inclined mirrors: images n = 360°/θ − 1",
      "Prism: n = sin((A + D_min)/2) / sin(A/2)"
    ],
    tip: "State the sign convention you use (real-is-positive is common in Nigerian exams) and stick to it all the way through."
  },

  "Lenses and Optical Instruments": {
    summary: "Converging and diverging lenses, the lens formula and power, the human eye and its defects, and microscopes, telescopes and cameras.",
    points: [
      "A converging (convex) lens brings parallel rays to a real focus; a diverging (concave) lens spreads them out from a virtual focus.",
      "Power of a lens P = 1/f (f in metres), measured in dioptres. Converging lenses have positive power.",
      "Convex lens images: object beyond 2F gives a real, inverted, smaller image; at 2F, same size; between F and 2F, magnified; inside F, a virtual, upright, magnified image (magnifying glass).",
      "The eye focuses by changing the shape of its lens (accommodation). The normal near point is 25 cm and the far point is infinity.",
      "Short sight (myopia) is corrected with a diverging lens; long sight (hypermetropia) with a converging lens. Astigmatism needs a cylindrical lens.",
      "Compound microscope: two converging lenses (objective and eyepiece). Total magnification = objective magnification × eyepiece magnification.",
      "Astronomical telescope in normal adjustment: magnifying power = f_objective ÷ f_eyepiece, and tube length = f_o + f_e.",
      "Camera vs eye: the camera focuses by moving the lens; the eye changes the lens shape. A projector forms a magnified real image on a screen."
    ],
    formulas: [
      "1/f = 1/u + 1/v",
      "m = v/u",
      "P = 1/f (dioptres)",
      "Lenses in contact: 1/F = 1/f₁ + 1/f₂",
      "Magnifying glass: M = 1 + D/f (D = 25 cm)",
      "Telescope: M = f_o / f_e"
    ],
    tip: "For eye-defect questions, the correcting lens must form an image of the object at the person's near or far point. Use that as v."
  },

  "Wave Theory of Light": {
    summary: "Evidence that light is a wave: Huygens' principle, interference, diffraction and polarisation, and where the wave theory falls short.",
    points: [
      "Newton's corpuscular theory treated light as particles; Huygens' wave theory treated it as waves.",
      "Huygens' principle: every point on a wavefront acts as a source of secondary wavelets, and the new wavefront is the envelope of these wavelets.",
      "The wave theory correctly predicts that light travels slower in a denser medium, which supports it over the corpuscular theory.",
      "Interference needs coherent sources (same frequency, constant phase difference). Young's double-slit experiment produces equally spaced bright and dark fringes.",
      "Diffraction is the spreading of light through narrow gaps. A diffraction grating produces sharp, bright maxima at particular angles.",
      "Polarisation shows that light is a transverse wave. Polaroid filters, and light reflected at Brewster's angle, are polarised.",
      "Thin films (soap bubbles, oil on water) show colours because of interference between light reflected from the two surfaces.",
      "The wave theory cannot explain the photoelectric effect, which needs the photon (particle) model."
    ],
    formulas: [
      "Young's fringes: y = λD/a",
      "Grating: d sin θ = nλ",
      "Brewster: tan θ_p = n"
    ],
    tip: "The photoelectric effect is the classic evidence against the pure wave theory. It often appears in multiple-choice questions."
  },

  // ===== PHY 003 - Electricity & Magnetism =====
  "Electrostatics": {
    summary: "Charges at rest: charging, Coulomb's law, electric field and potential, and how charge spreads over conductors.",
    points: [
      "Like charges repel; unlike charges attract. A body can be charged by friction, contact or induction. A gold-leaf electroscope detects and tests charge.",
      "Conductors let charge move freely; insulators do not.",
      "Coulomb's law: the force between two point charges is proportional to the product of the charges and inversely proportional to the square of their distance.",
      "Electric field strength E is the force per unit positive charge. Field lines go from + to −, and never cross.",
      "Between parallel plates the field is uniform: E = V/d.",
      "Electric potential is the work done per unit charge in bringing a positive charge from infinity. Potential difference is the work done per unit charge between two points.",
      "Equipotential surfaces are perpendicular to field lines, and no work is done moving along them.",
      "Charge collects at sharp points on a conductor (action of points), which is how lightning conductors work. Inside a hollow conductor there is no field (shielding)."
    ],
    formulas: [
      "F = kq₁q₂ / r²  (k = 1/4πε₀ = 9 × 10⁹ N m² C⁻²)",
      "E = F/q,  E = kQ/r²",
      "E = V/d (uniform field)",
      "V = kQ/r",
      "W = qV  (1 eV = 1.6 × 10⁻¹⁹ J)"
    ],
    tip: "Force and field are vectors, so add them with directions. Potential is a scalar, so just add the values with their signs."
  },

  "Capacitors": {
    summary: "Devices that store charge and energy: capacitance, parallel plates, dielectrics, series and parallel combinations, and charging and discharging.",
    points: [
      "A capacitor is two conductors separated by an insulator (dielectric). It stores charge: Q = CV. Capacitance is measured in farads (F).",
      "For parallel plates, capacitance increases with plate area and decreases with separation.",
      "Inserting a dielectric increases capacitance by the relative permittivity εᵣ.",
      "Capacitors in series carry the same charge and the combination is smaller. In parallel they share the same p.d. and capacitances add.",
      "Energy stored = ½QV, equal to the area under a Q–V graph.",
      "Charging through a resistor: the charge rises quickly at first, then levels off. Discharging, the charge falls exponentially.",
      "The time constant RC is the time for the charge to fall to about 37% of its initial value when discharging.",
      "Uses: smoothing rectified d.c., tuning circuits with inductors, camera flash, timing circuits, blocking d.c. while passing a.c."
    ],
    formulas: [
      "C = Q/V",
      "C = ε₀εᵣA / d",
      "Series: 1/C = 1/C₁ + 1/C₂",
      "Parallel: C = C₁ + C₂",
      "W = ½QV = ½CV² = Q²/2C",
      "Discharge: Q = Q₀e^(−t/RC)"
    ],
    tip: "Capacitors combine the opposite way from resistors: in series use the reciprocal rule, in parallel just add."
  },

  "Current Electricity": {
    summary: "Steady currents: Ohm's law, resistance and resistivity, emf and internal resistance, circuit rules, bridges and electrical energy.",
    points: [
      "Current is the rate of flow of charge. Conventional current flows from + to −; electrons flow the other way.",
      "Ohm's law: for a metal conductor at constant temperature, current is proportional to potential difference.",
      "Resistance depends on length, cross-sectional area, material (resistivity ρ) and temperature. Metals' resistance rises with temperature; semiconductors' falls.",
      "Emf is the energy given per unit charge by a source. The terminal p.d. is less than the emf when current flows, because of the internal resistance r (the 'lost volts' Ir).",
      "Kirchhoff's laws: currents into a junction equal currents out (charge conserved); around a closed loop, total emf = total IR drops (energy conserved).",
      "Wheatstone bridge and metre bridge find an unknown resistance at balance (no galvanometer current).",
      "The potentiometer compares emfs and measures internal resistance without drawing current at balance.",
      "A galvanometer becomes an ammeter with a small shunt resistor in parallel, and a voltmeter with a large multiplier resistor in series."
    ],
    formulas: [
      "I = Q/t",
      "V = IR",
      "R = ρl / A",
      "E = I(R + r),  V = E − Ir",
      "Series: R = R₁ + R₂;  Parallel: 1/R = 1/R₁ + 1/R₂",
      "Bridge: R₁/R₂ = R₃/R₄",
      "P = IV = I²R = V²/R",
      "Energy = IVt  (1 kWh = 3.6 × 10⁶ J)"
    ],
    tip: "For electricity bills: power in kW × time in hours = energy in kWh, then multiply by the price per kWh."
  },

  "Magnetic Field": {
    summary: "Magnets and magnetic fields, the Earth's field, fields produced by currents, electromagnets and magnetic materials.",
    points: [
      "Like poles repel, unlike poles attract. Field lines run from north to south outside a magnet.",
      "Magnetic materials: ferromagnetic (iron, nickel, cobalt) are strongly attracted; paramagnetic weakly attracted; diamagnetic weakly repelled.",
      "Soft iron magnetises and demagnetises easily (used in electromagnets and transformer cores). Steel keeps its magnetism (used in permanent magnets).",
      "The Earth's field: declination is the angle between magnetic and geographic north; inclination (dip) is the angle the field makes with the horizontal.",
      "A current produces a magnetic field. The right-hand grip rule gives its direction around a straight wire and through a coil.",
      "A solenoid's field is like a bar magnet's and is uniform inside. A soft-iron core makes it much stronger.",
      "Magnetic flux Φ = BA cos θ is measured in webers (Wb). Flux density B is in tesla (T).",
      "Uses of electromagnets: electric bells, relays, circuit breakers, telephone earpieces, loudspeakers and lifting scrap metal."
    ],
    formulas: [
      "Straight wire: B = µ₀I / 2πr",
      "Circular coil (centre): B = µ₀NI / 2r",
      "Solenoid: B = µ₀nI  (n = turns per metre)",
      "Φ = BA cos θ",
      "µ₀ = 4π × 10⁻⁷ H m⁻¹"
    ],
    tip: "In a solenoid, n is the number of turns per metre, not the total number of turns. Divide by the length first."
  },

  "Force on Conductor and Moving Charge": {
    summary: "The motor effect: forces on current-carrying wires and moving charges in magnetic fields, and the devices built on them.",
    points: [
      "A current-carrying conductor in a magnetic field feels a force. Its direction comes from Fleming's left-hand rule.",
      "The force is greatest when the wire is perpendicular to the field and zero when parallel.",
      "Two parallel wires carrying current in the same direction attract; opposite directions repel. This is used to define the ampere.",
      "A charge moving perpendicular to a magnetic field moves in a circle, because the magnetic force is always at right angles to its velocity. The force does no work, so the speed is unchanged.",
      "A rectangular coil in a field feels a turning effect (torque). This drives the moving-coil galvanometer and the d.c. motor; a commutator keeps the motor turning one way.",
      "Crossed electric and magnetic fields act as a velocity selector: only particles with v = E/B pass straight through.",
      "These principles are used in mass spectrometers, cathode-ray tubes and measuring e/m for the electron."
    ],
    formulas: [
      "F = BIl sin θ",
      "F = qvB sin θ",
      "Circular path: r = mv / qB",
      "Parallel wires: F/l = µ₀I₁I₂ / 2πd",
      "Torque on coil: τ = BANI (plane parallel to field)",
      "Velocity selector: v = E/B"
    ],
    tip: "Fleming's left hand: First finger = Field, seCond finger = Current, thuMb = Motion (force)."
  },

  "Electromagnetic Induction": {
    summary: "Generating electricity from changing magnetic fields: Faraday's and Lenz's laws, generators, transformers and inductance.",
    points: [
      "An emf is induced whenever the magnetic flux linking a circuit changes, by moving the magnet, moving the coil or changing the current in a nearby coil.",
      "Faraday's law: the induced emf is proportional to the rate of change of flux linkage.",
      "Lenz's law: the induced current flows so as to oppose the change that causes it. This is conservation of energy.",
      "Fleming's right-hand rule gives the direction of induced current in a moving conductor (the generator rule).",
      "A.c. generators use slip rings; d.c. generators use a split-ring commutator.",
      "Transformers change a.c. voltage. A step-up transformer has more turns on the secondary. They do not work on steady d.c.",
      "Transformer losses: eddy currents (reduced by a laminated core), hysteresis (soft-iron core), copper I²R heating (thick wires) and flux leakage.",
      "Power is transmitted at high voltage so the current, and therefore the I²R loss in the cables, is small. Self-inductance opposes changes of current in a coil."
    ],
    formulas: [
      "E = −N dΦ/dt",
      "Moving rod: E = Blv",
      "Generator: E = NBAω sin ωt,  E₀ = NBAω",
      "Transformer: Vs/Vp = Ns/Np",
      "Ideal transformer: VpIp = VsIs",
      "Self-induction: E = −L dI/dt,  energy = ½LI²"
    ],
    tip: "Transformer efficiency = (output power ÷ input power) × 100%. If it is not 100%, VpIp ≠ VsIs; use the efficiency."
  },

  "Alternating Current Circuits": {
    summary: "Alternating current and voltage: r.m.s. values, resistors, inductors and capacitors in a.c. circuits, impedance, resonance, power and rectification.",
    points: [
      "Alternating current varies sinusoidally. The r.m.s. value is the steady d.c. value that produces the same heating.",
      "In a pure resistor, current and voltage are in phase.",
      "In a pure inductor, current lags voltage by 90°. Inductive reactance rises with frequency, so inductors block high frequencies.",
      "In a pure capacitor, current leads voltage by 90°. Capacitive reactance falls with frequency, so capacitors pass high frequencies and block d.c.",
      "In a series RLC circuit, the total opposition to current is the impedance Z.",
      "Resonance happens when X_L = X_C. Then the impedance is smallest (Z = R) and the current is largest. This is how radios are tuned.",
      "Average power is used only in the resistance. Pure inductors and capacitors use no net power; the power factor cos φ measures this.",
      "Rectification turns a.c. into d.c. with diodes: half-wave (one diode) or full-wave (bridge). A capacitor smooths the output."
    ],
    formulas: [
      "I_rms = I₀/√2,  V_rms = V₀/√2",
      "X_L = 2πfL",
      "X_C = 1/(2πfC)",
      "Z = √(R² + (X_L − X_C)²)",
      "tan φ = (X_L − X_C)/R",
      "Resonance: f₀ = 1/(2π√(LC))",
      "P = V_rms I_rms cos φ"
    ],
    tip: "Mnemonic CIVIL: in a Capacitor, I leads V; in an inductor (L), V leads I."
  },

  // ===== PHY 004 - Modern Physics =====
  "Atomic Structure": {
    summary: "Models of the atom from Thomson to Bohr, energy levels, and line spectra.",
    points: [
      "Thomson's 'plum pudding' model pictured electrons embedded in a sphere of positive charge.",
      "Rutherford's alpha-scattering experiment: most alpha particles passed straight through gold foil, a few were deflected and very few bounced back. So the atom is mostly empty space with a tiny, dense, positive nucleus.",
      "Bohr's model: electrons move only in certain allowed orbits (energy levels) without radiating; angular momentum is quantised.",
      "An electron emits a photon when it drops to a lower level and absorbs one when it jumps up. The photon energy equals the difference between the levels.",
      "Hydrogen energy levels are negative, with the ground state at −13.6 eV, so the ionisation energy of hydrogen is 13.6 eV.",
      "Hydrogen spectral series: Lyman (to n = 1, ultraviolet), Balmer (to n = 2, visible), Paschen (to n = 3, infrared).",
      "Emission spectra are bright lines on a dark background; absorption spectra are dark lines at the same positions. Each element has a unique spectrum.",
      "Bohr's model works well for hydrogen but cannot explain the spectra of atoms with many electrons."
    ],
    formulas: [
      "hf = E₂ − E₁",
      "Eₙ = −13.6 / n² eV (hydrogen)",
      "mvr = nh / 2π",
      "1 eV = 1.6 × 10⁻¹⁹ J"
    ],
    tip: "To find a wavelength, convert the energy difference from eV to joules, then use λ = hc/E."
  },

  "Elements of Modern Physics": {
    summary: "Quantum ideas: Planck's quantum, the photoelectric effect, thermionic emission, cathode rays and the charge on the electron.",
    points: [
      "Planck: energy is emitted and absorbed in packets (quanta). A photon of light carries energy E = hf.",
      "Photoelectric effect: light above a threshold frequency ejects electrons from a metal surface instantly, however dim the light.",
      "The maximum kinetic energy of photoelectrons depends on frequency, not intensity. Intensity only changes how many electrons are emitted.",
      "Einstein's equation: photon energy = work function + maximum kinetic energy of the electron.",
      "The stopping potential is the reverse voltage that just stops the fastest photoelectrons.",
      "Thermionic emission: a heated metal emits electrons. This supplies cathode-ray tubes and old valve electronics.",
      "Cathode rays are streams of electrons. They travel in straight lines, are deflected by electric and magnetic fields, cause fluorescence and carry negative charge.",
      "Millikan's oil-drop experiment showed that charge is quantised in units of e = 1.6 × 10⁻¹⁹ C. Mass and energy are linked by E = mc²."
    ],
    formulas: [
      "E = hf = hc/λ  (h = 6.63 × 10⁻³⁴ J s)",
      "hf = W₀ + ½mv²_max",
      "Threshold frequency f₀ = W₀ / h",
      "eV_s = ½mv²_max",
      "E = mc²"
    ],
    tip: "Brighter light means more photoelectrons, not faster ones. Higher frequency means faster ones."
  },

  "X-Rays": {
    summary: "How X-rays are produced, their properties and spectrum, their uses, and their dangers.",
    points: [
      "X-rays are produced when high-speed electrons from a hot cathode strike a heavy-metal target (usually tungsten) in an evacuated tube.",
      "Only about 1% of the electrons' energy becomes X-rays; the rest is heat. The anode is cooled with copper fins, oil, or by rotating it.",
      "The tube voltage controls the quality (penetrating power): higher voltage gives 'hard', more penetrating X-rays. The filament current controls the intensity (how many X-rays).",
      "The X-ray spectrum has a continuous part (braking radiation) plus sharp characteristic lines of the target metal.",
      "Properties: electromagnetic waves of very short wavelength; not deflected by electric or magnetic fields; they ionise gases, affect photographic film, cause fluorescence and penetrate matter.",
      "Uses: radiography (bones, teeth), radiotherapy (cancer), detecting flaws in metal, airport security, and crystal structure analysis (X-ray diffraction).",
      "Hazards: X-rays damage living cells. Use lead shielding, keep exposure short and keep a safe distance."
    ],
    formulas: [
      "Minimum wavelength λ_min = hc / eV",
      "Maximum photon energy = eV",
      "Bragg's law: 2d sin θ = nλ"
    ],
    tip: "Remember the pair: voltage controls penetration (quality), filament current controls intensity (quantity)."
  },

  "Wave-Particle Duality": {
    summary: "Light and matter both behave as waves and as particles: photons, de Broglie waves, electron diffraction and the Compton effect.",
    points: [
      "Light behaves as a wave in interference and diffraction, and as a particle (photon) in the photoelectric effect and Compton scattering.",
      "A photon has energy E = hf and momentum p = h/λ, even though it has no rest mass.",
      "de Broglie: moving particles have a wavelength λ = h/p, so matter also behaves like a wave.",
      "Electron diffraction (Davisson and Germer) proved that electrons behave as waves. This is the basis of the electron microscope.",
      "Compton effect: X-rays scattered by electrons come out with a longer wavelength, showing that photons carry momentum.",
      "Heisenberg's uncertainty principle: position and momentum cannot both be known exactly at the same time.",
      "Wave behaviour is only noticeable for very small masses (electrons, neutrons). Everyday objects have wavelengths far too small to detect."
    ],
    formulas: [
      "E = hf = hc/λ",
      "p = h/λ",
      "de Broglie: λ = h/mv",
      "Accelerated electron: λ = h / √(2meV)",
      "Compton: Δλ = (h/mc)(1 − cos θ)",
      "Δx Δp ≥ h/4π"
    ],
    tip: "For an electron accelerated through V volts, find its momentum from eV = p²/2m, then use λ = h/p."
  },

  "Radioactivity and Nuclear Energy": {
    summary: "Unstable nuclei: alpha, beta and gamma radiation, decay and half-life, binding energy, fission and fusion, and uses and safety.",
    points: [
      "Radioactivity is the spontaneous, random decay of unstable nuclei. It is not affected by temperature, pressure or chemical state.",
      "Alpha (α) = helium nucleus: charge +2, strongly ionising, stopped by paper or a few cm of air.",
      "Beta (β) = fast electron: charge −1, moderately ionising, stopped by a few mm of aluminium.",
      "Gamma (γ) = electromagnetic wave: no charge, weakly ionising, very penetrating; reduced by thick lead or concrete.",
      "Alpha decay lowers the mass number by 4 and the atomic number by 2. Beta decay keeps the mass number and raises the atomic number by 1. Gamma emission changes neither.",
      "Half-life is the time for half the nuclei (or half the activity) to decay. Detectors include the Geiger–Müller tube, cloud chamber and photographic film.",
      "Mass defect is the mass lost when nucleons bind together; it is released as binding energy (E = Δmc²). Binding energy per nucleon is highest around iron.",
      "Fission: a heavy nucleus (U-235) splits after absorbing a neutron, releasing energy and more neutrons (a chain reaction). Reactors use a moderator, control rods and coolant. Fusion joins light nuclei, powers the Sun and needs extremely high temperatures.",
      "Uses: carbon dating, medical tracers, radiotherapy, sterilising equipment, thickness gauges. Handle sources with tongs, use shielding and limit exposure time."
    ],
    formulas: [
      "N = N₀e^(−λt)",
      "T½ = 0.693 / λ",
      "After n half-lives: N = N₀(½)ⁿ",
      "Activity A = λN",
      "E = Δmc²  (1 u = 931 MeV)"
    ],
    tip: "Half-life questions are easiest by counting halvings: 100 → 50 → 25 → 12.5 means three half-lives."
  },

  "Semiconductors": {
    summary: "Materials between conductors and insulators: energy bands, doping, p–n junction diodes, transistors and logic gates.",
    points: [
      "Energy band theory: conductors have overlapping bands; insulators have a wide forbidden gap; semiconductors have a small gap.",
      "Intrinsic semiconductors (pure silicon, germanium) conduct by electrons and holes. Their resistance falls as temperature rises.",
      "Doping adds impurities. n-type uses pentavalent atoms (phosphorus, arsenic) that give extra electrons. p-type uses trivalent atoms (boron, aluminium, gallium) that create holes.",
      "A p–n junction forms a depletion layer. Forward biased (p to +), it conducts; reverse biased, it blocks. This lets diodes rectify a.c.",
      "Special diodes: the Zener diode regulates voltage in reverse breakdown; an LED emits light; a photodiode responds to light.",
      "A transistor (npn or pnp) has an emitter, base and collector. A small base current controls a much larger collector current, so it works as an amplifier or a switch.",
      "Logic gates: AND (output 1 only if all inputs are 1), OR (1 if any input is 1), NOT (inverts), NAND and NOR (inverted AND and OR). Integrated circuits pack many of these on one chip."
    ],
    formulas: [
      "I_E = I_B + I_C",
      "Current gain β = I_C / I_B"
    ],
    tip: "Learn the truth tables. NAND and NOR are just AND and OR with every output flipped."
  },

  "Applied Physics": {
    summary: "Physics at work in technology: electronics, telecommunications, medical imaging, lasers and energy conversion.",
    points: [
      "Telecommunication: information is carried on radio waves by modulation. AM varies the carrier's amplitude; FM varies its frequency and is less affected by noise.",
      "A radio receiver uses an aerial, a tuned (LC) circuit to select a station, a demodulator (diode) to recover the signal, an amplifier and a loudspeaker.",
      "Satellites, optical fibres (total internal reflection) and microwaves carry long-distance telephone, television and internet signals.",
      "The cathode-ray oscilloscope displays and measures voltage, frequency and waveform.",
      "Medical physics: X-rays and CT scans image bones and organs; ultrasound scans soft tissue safely; radioisotopes act as tracers and treat cancer.",
      "Lasers produce intense, monochromatic, coherent light, used in surgery, fibre-optic communication, barcode readers and cutting.",
      "Energy conversion: solar cells (light to electricity), generators (kinetic to electrical), batteries (chemical to electrical). Renewable sources reduce pollution."
    ],
    formulas: [
      "c = fλ for radio waves (c = 3 × 10⁸ m s⁻¹)",
      "Tuned circuit: f = 1/(2π√(LC))"
    ],
    tip: "Questions here often join two topics, e.g. tuning a radio uses a.c. resonance and total internal reflection explains optical fibres. Name the principle behind each device."
  }
};
