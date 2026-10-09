// topic-resources.js
// Learn resources per topic, keyed EXACTLY by topic name as it appears in courseStructure.
// If a key doesn't match character-for-character, its banner won't show (no error).
// type: "video" → 🎬 | "article" → 📄 | anything else → 🔗

const TOPIC_RESOURCES = {
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
    { type: "video", title: "Electrochemistry Explained", url: "https://youtu.be/ImV8LyujjqY?si=AQNumCkRss-Z9Hwu" },
    { type: "article", title: "Unacademy - Electrochemistry", url: "https://unacademy.com/content/wp-content/uploads/sites/2/2022/10/21.-Electrochemistry-Notes.pdf#:~:text=Electrochemistry%20is%20defined%20as%20the,produced%20in%20a%20redox%20reaction" },
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
    { type: "article", title: "Placeholder: Khan Academy — Acid-Base Equilibria", url: "https://example.com/article-acid-base" },
  ],

  "Ionic Equilibria": [
    { type: "video", title: "Placeholder: Ionic Equilibria", url: "https://example.com/video-ionic" },
    { type: "article", title: "Placeholder: Khan Academy — Ionic Equilibria", url: "https://example.com/article-ionic" },
  ],

  "Nuclear Chemistry": [
    { type: "video", title: "Placeholder: Nuclear Chemistry", url: "https://example.com/video-nuclear" },
    { type: "article", title: "Placeholder: Khan Academy — Nuclear Chemistry", url: "https://example.com/article-nuclear" },
  ],
};