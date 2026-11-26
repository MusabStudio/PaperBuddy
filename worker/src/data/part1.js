// Part I (Class XI) Pre-Medical question banks.
export const part1 = {
  "p1-physics": {
    part: 1, subject: "Physics", emoji: "⚛️",
    sections: [
      { name: "A", title: "Multiple choice", type: "mcq", marks: 1, items: [
        { q: "The SI unit of force is:", o: ["Joule", "Newton", "Watt", "Pascal"], a: 1 },
        { q: "The dimensional formula of velocity is:", o: ["LT", "LT⁻¹", "L²T⁻¹", "LT⁻²"], a: 1 },
        { q: "Which is a vector quantity?", o: ["Speed", "Mass", "Velocity", "Time"], a: 2 },
        { q: "Work done by a force perpendicular to displacement is:", o: ["Maximum", "Zero", "Equal to force", "Negative"], a: 1 },
        { q: "The SI unit of power is:", o: ["Joule", "Newton", "Watt", "Erg"], a: 2 },
        { q: "The kinetic energy of a 2 kg body at 3 m/s is:", o: ["3 J", "6 J", "9 J", "12 J"], a: 2 },
        { q: "Angular velocity is measured in:", o: ["rad/s", "m/s", "m/s²", "rev/min"], a: 0 },
        { q: "The time period of a simple pendulum depends on:", o: ["Mass", "Length", "Colour", "Material"], a: 1 },
        { q: "The SI unit of pressure is:", o: ["Newton", "Pascal", "Joule", "Watt"], a: 1 },
        { q: "Coulomb's law: electric force is proportional to:", o: ["r", "1/r", "1/r²", "r²"], a: 2 },
        { q: "The frequency of a wave of period 0.02 s is:", o: ["20 Hz", "50 Hz", "0.02 Hz", "200 Hz"], a: 1 },
        { q: "Newton's third law is also called the law of:", o: ["Inertia", "Action and reaction", "Gravitation", "Acceleration"], a: 1 },
        { q: "The unit of specific heat capacity is:", o: ["J/kg", "J kg⁻¹ K⁻¹", "kg/J", "K/J"], a: 1 },
        { q: "Sound intensity is measured in:", o: ["W/m", "W/m²", "Hz", "N/m"], a: 1 },
        { q: "The acceleration of a freely falling body is about:", o: ["9.8 m/s²", "9.8 m/s", "0", "98 m/s²"], a: 0 },
        { q: "Atmospheric pressure is measured by a:", o: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"], a: 0 },
        { q: "One newton is equal to:", o: ["1 kg m/s", "1 kg m/s²", "1 kg m²/s²", "1 kg/m"], a: 1 },
        { q: "The work done in lifting a 5 kg mass by 2 m (g = 10 m/s²) is:", o: ["10 J", "25 J", "50 J", "100 J"], a: 2 },
        { q: "The first law of thermodynamics is the law of:", o: ["Conservation of mass", "Conservation of energy", "Entropy", "Momentum"], a: 1 },
        { q: "Which is a scalar quantity?", o: ["Displacement", "Force", "Energy", "Acceleration"], a: 2 }
      ]},
      { name: "B", title: "Short answers", type: "short", marks: 4, items: [
        { q: "Differentiate scalar and vector quantities with one example each.", ref: "scalar: magnitude only, e.g. speed; vector: magnitude and direction, e.g. velocity" },
        { q: "State Newton's second law and write its mathematical form.", ref: "F = ma; force ∝ rate of change of momentum; direction of force" },
        { q: "Define impulse and relate it to change in momentum.", ref: "impulse = FΔt; equals change in momentum; area under force-time graph" },
        { q: "Find the time period of a pendulum of length 1 m (g = 9.8 m/s²).", ref: "T = 2π√(L/g); ≈ 2.0 s" },
        { q: "Differentiate transverse and longitudinal waves with examples.", ref: "transverse: perpendicular, light; longitudinal: parallel, sound" },
        { q: "Define specific heat capacity and give its SI unit.", ref: "heat to raise 1 kg by 1 K; J kg⁻¹ K⁻¹" },
        { q: "State Ohm's law and write its formula.", ref: "V = IR at constant temperature; resistance constant" },
        { q: "State the law of conservation of linear momentum.", ref: "total momentum constant if no external force; m1u1 + m2u2 = m1v1 + m2v2" },
        { q: "Define frequency and time period, and relate them.", ref: "f = 1/T; cycles per second; hertz" },
        { q: "Define moment of inertia and state what it depends on.", ref: "I = Σmr²; depends on mass and distribution about axis" }
      ]},
      { name: "C", title: "Detailed answers", type: "long", marks: 16, items: [
        { q: "a) Derive the range and maximum height of a projectile. b) State Newton's three laws with one example each.", ref: "R = v²sin2θ/g; H = v²sin²θ/2g; laws of inertia, F = ma, action-reaction" },
        { q: "a) Explain SHM and derive the time period of a mass-spring system. b) Explain superposition and standing waves.", ref: "a = -ω²x; T = 2π√(m/k); nodes and antinodes; interference" }
      ]}
    ]
  },

  "p1-chemistry": {
    part: 1, subject: "Chemistry", emoji: "🧪",
    sections: [
      { name: "A", title: "Multiple choice", type: "mcq", marks: 1, items: [
        { q: "The atomic number of carbon is:", o: ["4", "6", "8", "12"], a: 1 },
        { q: "Avogadro's number is:", o: ["6.022×10²³", "6.022×10²²", "3.011×10²³", "1.6×10⁻¹⁹"], a: 0 },
        { q: "Moles in 18 g of water (M = 18):", o: ["0.5", "1", "2", "18"], a: 1 },
        { q: "Electronic configuration of sodium (Z = 11):", o: ["2,8,1", "2,9", "2,7,2", "1,8,2"], a: 0 },
        { q: "Noble gases belong to group:", o: ["1", "17", "18", "2"], a: 2 },
        { q: "The bond in NaCl is:", o: ["Covalent", "Ionic", "Metallic", "Hydrogen"], a: 1 },
        { q: "Hybridisation of carbon in methane is:", o: ["sp", "sp²", "sp³", "dsp²"], a: 2 },
        { q: "The shape of a water molecule is:", o: ["Linear", "Bent", "Tetrahedral", "Trigonal planar"], a: 1 },
        { q: "Molar mass of CO₂ is:", o: ["28", "32", "44", "16"], a: 2 },
        { q: "For an exothermic reaction, ΔH is:", o: ["Positive", "Zero", "Negative", "Infinite"], a: 2 },
        { q: "pH of a neutral solution at 25 °C is:", o: ["0", "7", "14", "1"], a: 1 },
        { q: "In redox, the oxidising agent is:", o: ["Oxidised", "Reduced", "Unchanged", "Not involved"], a: 1 },
        { q: "Functional group of an alcohol is:", o: ["-CHO", "-COOH", "-OH", "-NH₂"], a: 2 },
        { q: "Isomers have:", o: ["Different molecular formulae", "Same formula, different structures", "Same structure", "No relation"], a: 1 },
        { q: "Moles in 4 g of NaOH (M = 40):", o: ["0.1", "0.4", "1", "4"], a: 0 },
        { q: "At STP, one mole of gas occupies:", o: ["11.2 L", "22.4 L", "24.5 L", "1 L"], a: 1 },
        { q: "The number of neutrons in ¹²C is:", o: ["6", "12", "18", "4"], a: 0 },
        { q: "Which is a noble gas?", o: ["Neon", "Nitrogen", "Oxygen", "Chlorine"], a: 0 },
        { q: "The oxidation state of S in H₂SO₄ is:", o: ["+2", "+4", "+6", "−2"], a: 2 },
        { q: "The general formula of alkenes is:", o: ["CnH2n+2", "CnH2n", "CnH2n−2", "CnHn"], a: 1 }
      ]},
      { name: "B", title: "Short answers", type: "short", marks: 4, items: [
        { q: "Define a mole and explain its significance.", ref: "6.022×10^23 particles; amount of substance; links mass to number" },
        { q: "Write the electronic configuration of chlorine (Z = 17).", ref: "1s2 2s2 2p6 3s2 3p5; or 2,8,7" },
        { q: "Differentiate ionic and covalent bonds with examples.", ref: "transfer vs sharing; NaCl vs H2O; conductivity" },
        { q: "Define oxidation and reduction in terms of electrons.", ref: "oxidation loses electrons; reduction gains; OIL RIG" },
        { q: "Balance: H₂ + O₂ → H₂O.", ref: "2H2 + O2 -> 2H2O" },
        { q: "Calculate moles in 9 g of water.", ref: "n = m/M = 9/18 = 0.5 mol" },
        { q: "Define isotopes with one example.", ref: "same protons, different neutrons; C-12 and C-14" },
        { q: "State Le Chatelier's principle.", ref: "system shifts to oppose change; concentration, pressure, temperature" },
        { q: "Differentiate empirical and molecular formula.", ref: "simplest ratio vs actual atoms; glucose CH2O vs C6H12O6" },
        { q: "Define electronegativity and its trend across a period.", ref: "ability to attract shared electrons; increases across period" }
      ]},
      { name: "C", title: "Detailed answers", type: "long", marks: 16, items: [
        { q: "a) Describe the Bohr model and the four quantum numbers. b) Use VSEPR to predict shapes of NH₃ and H₂O.", ref: "shells and orbits; n, l, m, s; NH3 pyramidal 107°; H2O bent 104.5°; lone pairs" },
        { q: "a) Explain limiting reagent with a worked example. b) Define homologous series and name the first four alkanes.", ref: "reactant used up first; mole ratio; methane, ethane, propane, butane" }
      ]}
    ]
  },

  "p1-biology": {
    part: 1, subject: "Biology", emoji: "🧬",
    sections: [
      { name: "A", title: "Multiple choice", type: "mcq", marks: 1, items: [
        { q: "The basic unit of life is the:", o: ["Tissue", "Cell", "Organ", "Organism"], a: 1 },
        { q: "Most ATP is produced by the:", o: ["Ribosome", "Mitochondrion", "Lysosome", "Golgi body"], a: 1 },
        { q: "Enzymes are mainly:", o: ["Lipids", "Proteins", "Carbohydrates", "Nucleic acids"], a: 1 },
        { q: "The main photosynthetic pigment is:", o: ["Haemoglobin", "Chlorophyll", "Melanin", "Carotene"], a: 1 },
        { q: "The plant cell wall is made of:", o: ["Chitin", "Cellulose", "Peptidoglycan", "Keratin"], a: 1 },
        { q: "A prokaryotic cell lacks a:", o: ["Cell membrane", "Ribosome", "Nuclear membrane", "Cytoplasm"], a: 2 },
        { q: "Movement across a membrane without energy is:", o: ["Active transport", "Passive transport", "Endocytosis", "Exocytosis"], a: 1 },
        { q: "The universal solvent of life is:", o: ["Ethanol", "Water", "Oil", "Mercury"], a: 1 },
        { q: "Oxygen is carried by:", o: ["White blood cells", "Platelets", "Red blood cells", "Neurons"], a: 2 },
        { q: "The monomer of proteins is:", o: ["Nucleotide", "Amino acid", "Glucose", "Fatty acid"], a: 1 },
        { q: "Seed plants without fruits are:", o: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Algae"], a: 2 },
        { q: "Mushrooms belong to:", o: ["Plantae", "Animalia", "Fungi", "Protista"], a: 2 },
        { q: "Enzymes are denatured mainly by:", o: ["Low temperature", "High temperature", "Darkness", "Water"], a: 1 },
        { q: "The smallest unit of heredity is the:", o: ["Chromosome", "Gene", "Nucleus", "Cell"], a: 1 },
        { q: "The hormone that lowers blood glucose is:", o: ["Glucagon", "Adrenaline", "Insulin", "Thyroxine"], a: 2 },
        { q: "The human heart has:", o: ["2 chambers", "3 chambers", "4 chambers", "6 chambers"], a: 2 },
        { q: "The site of protein synthesis is the:", o: ["Ribosome", "Lysosome", "Vacuole", "Nucleolus"], a: 0 },
        { q: "Osmosis is the movement of water from:", o: ["Low to high water potential", "High to low water potential", "Cold to hot", "Inside to outside only"], a: 1 },
        { q: "Blood clotting is aided by:", o: ["Platelets", "Red cells", "Plasma water", "Lymph"], a: 0 },
        { q: "Which is an example of a connective tissue?", o: ["Muscle", "Bone", "Neuron", "Epidermis"], a: 1 }
      ]},
      { name: "B", title: "Short answers", type: "short", marks: 4, items: [
        { q: "Define osmosis with one daily-life example.", ref: "water across semipermeable membrane; high to low water potential; roots absorb water" },
        { q: "Differentiate prokaryotic and eukaryotic cells.", ref: "no nucleus vs nucleus; size; organelles; examples" },
        { q: "Define enzyme and list two factors affecting activity.", ref: "biological catalyst; temperature and pH; denaturation" },
        { q: "What is the function of stomata?", ref: "gas exchange; transpiration; guard cells" },
        { q: "Differentiate xylem and phloem.", ref: "water and minerals upward vs food bidirectional; dead vs living" },
        { q: "Define homeostasis with one example.", ref: "constant internal environment; temperature or glucose regulation" },
        { q: "Describe the stages of mitosis briefly.", ref: "prophase, metaphase, anaphase, telophase; chromosomes separate" },
        { q: "Name the four basic animal tissues.", ref: "epithelial, connective, muscle, nervous" },
        { q: "Define photosynthesis and write its equation.", ref: "6CO2 + 6H2O -> C6H12O6 + 6O2; light and chlorophyll" },
        { q: "Define ATP and state its role.", ref: "adenosine triphosphate; energy currency; stores energy in phosphate bonds" },
        { q: "Classify vertebrates and invertebrates with examples.", ref: "backbone present vs absent; fish vs insect" }
      ]},
      { name: "C", title: "Detailed answers", type: "long", marks: 16, items: [
        { q: "a) Describe the fluid mosaic model of the cell membrane. b) Explain active and passive transport.", ref: "phospholipid bilayer; proteins; cholesterol; diffusion, osmosis, facilitated; active uses ATP and carriers" },
        { q: "a) Explain light and dark reactions of photosynthesis. b) Describe glycolysis.", ref: "thylakoid; photolysis; ATP and NADPH; Calvin cycle; glycolysis in cytoplasm; glucose to pyruvate; net 2 ATP" }
      ]}
    ]
  },

  "p1-english": {
    part: 1, subject: "English", emoji: "📘",
    sections: [
      { name: "A", title: "Multiple choice", type: "mcq", marks: 1, items: [
        { q: "Plural of 'child':", o: ["Childs", "Children", "Childes", "Childen"], a: 1 },
        { q: "Synonym of 'happy':", o: ["Sad", "Joyful", "Angry", "Tired"], a: 1 },
        { q: "Antonym of 'expand':", o: ["Grow", "Contract", "Increase", "Enlarge"], a: 1 },
        { q: "'She ___ to school every day.'", o: ["go", "goes", "going", "gone"], a: 1 },
        { q: "'He is ___ European.'", o: ["a", "an", "the", "no article"], a: 0 },
        { q: "Past tense of 'eat':", o: ["eated", "eaten", "ate", "eat"], a: 2 },
        { q: "'I am interested ___ music.'", o: ["at", "on", "in", "for"], a: 2 },
        { q: "Passive of 'The boy broke the window':", o: ["The window was broken by the boy.", "The window broke by the boy.", "The boy was broken the window.", "The window is broke by the boy."], a: 0 },
        { q: "The prefix 'un-' in 'unhappy' means:", o: ["Again", "Not", "Before", "Very"], a: 1 },
        { q: "'You are coming, ___?'", o: ["are you", "aren't you", "don't you", "isn't it"], a: 1 },
        { q: "Correctly spelled word:", o: ["Accommodation", "Acommodation", "Accomodation", "Acomodation"], a: 0 },
        { q: "Indirect speech: He said, 'I am tired.'", o: ["He said that he was tired.", "He said that I was tired.", "He said I am tired.", "He says he is tired."], a: 0 },
        { q: "'And' is a:", o: ["Preposition", "Coordinating conjunction", "Article", "Pronoun"], a: 1 },
        { q: "'Honesty' is a:", o: ["Common noun", "Proper noun", "Abstract noun", "Collective noun"], a: 2 },
        { q: "'Each of the boys ___ a book.'", o: ["has", "have", "are", "were"], a: 0 },
        { q: "A group of bees is a:", o: ["Herd", "Swarm", "Flock", "Pride"], a: 1 },
        { q: "Synonym of 'rapid':", o: ["Slow", "Quick", "Late", "Calm"], a: 1 },
        { q: "Antonym of 'generous':", o: ["Kind", "Stingy", "Rich", "Happy"], a: 1 },
        { q: "'He runs fast.' The word 'fast' is:", o: ["Adjective", "Adverb", "Noun", "Preposition"], a: 1 },
        { q: "Choose the correct sentence:", o: ["I have been living here since 2020.", "I am living here since 2020.", "I live here since 2020.", "I lived here since 2020."], a: 0 }
      ]},
      { name: "B", title: "Short answers", type: "short", marks: 3, items: [
        { q: "Define noun, verb and adverb with one example each.", ref: "naming word; action word; modifies verb; examples" },
        { q: "Change into negative: 'They are playing cricket.'", ref: "They are not playing cricket." },
        { q: "Write two idioms and use each in a sentence.", ref: "correct idiom; meaning; sentence context" },
        { q: "Change into a question: 'She has finished her homework.'", ref: "Has she finished her homework?" },
        { q: "Correct: 'Neither the teacher nor the students was present.'", ref: "were present; nearest subject rule" },
        { q: "Combine using a relative pronoun: 'This is the book. I bought it yesterday.'", ref: "This is the book which/that I bought yesterday." }
      ]},
      { name: "C", title: "Detailed answers", type: "long", marks: 16, items: [
        { q: "Write an essay (about 250 words) on the importance of education.", ref: "introduction; three body paragraphs; examples; conclusion; linking words; range of vocabulary" },
        { q: "Write a formal letter to your principal asking for three days' leave.", ref: "address; date; salutation; subject; reason; request; closing; signature" }
      ]}
    ]
  },

  "p1-urdu": {
    part: 1, subject: "Urdu", emoji: "📗", rtl: true,
    sections: [
      { name: "A", title: "کثیر الانتخابی سوالات", type: "mcq", marks: 1, items: [
        { q: "’کتاب‘ کی جمع ہے:", o: ["کتابیں", "کتابوں", "کتابات", "کتابیاں"], a: 0 },
        { q: "’امیر‘ کا متضاد ہے:", o: ["غریب", "بڑا", "خوش", "عالم"], a: 0 },
        { q: "’شیر‘ کی مؤنث ہے:", o: ["شیرنی", "شیرنیاں", "شیرہ", "شیرینی"], a: 0 },
        { q: "’آنکھ کا تارا‘ کا مطلب ہے:", o: ["بہت پیارا", "بہت بڑا", "بہت دور", "بہت کمزور"], a: 0 },
        { q: "علامہ اقبال کی جائے پیدائش ہے:", o: ["سیالکوٹ", "لاہور", "کراچی", "دہلی"], a: 0 },
        { q: "اردو کا رسم الخط ہے:", o: ["دیوناگری", "نستعلیق", "رومن", "گرمکھی"], a: 1 },
        { q: "’اساتذہ‘ کا واحد ہے:", o: ["استاد", "استادہ", "استاذ", "استادیں"], a: 0 },
        { q: "’بیٹا‘ کی مؤنث ہے:", o: ["بیٹی", "بیٹیاں", "بیٹنی", "بیٹہ"], a: 0 },
        { q: "’قافیہ‘ کی جمع ہے:", o: ["قوافی", "قافیوں", "قافیات", "قافیہیں"], a: 0 },
        { q: "درست املا ہے:", o: ["ذمہ دار", "زمہ دار", "ذمے دار", "زمّہدار"], a: 0 },
        { q: "’وہ کتاب پڑھتا ہے‘ میں فعل ہے:", o: ["لازم", "متعدی", "ناقص", "امدادی"], a: 1 },
        { q: "’آگ بگولہ ہونا‘ کا مطلب ہے:", o: ["غصے میں آنا", "خوش ہونا", "حیران ہونا", "ڈر جانا"], a: 0 },
        { q: "’سیدھا‘ کا متضاد ہے:", o: ["الٹا", "سیدھی", "اونچا", "تیز"], a: 0 },
        { q: "’ہاتھ بٹانا‘ کا مطلب ہے:", o: ["مدد کرنا", "مارنا", "چھیننا", "روکنا"], a: 0 },
        { q: "’دریا‘ کی جمع ہے:", o: ["دریاؤں", "دریوں", "دریاہ", "دریائیں"], a: 0 },
        { q: "’پھول‘ کی جمع ہے:", o: ["پھول", "پھولوں", "پھولات", "پھولیں"], a: 1 },
        { q: "’سست‘ کا متضاد ہے:", o: ["محنتی", "کمزور", "نیند", "دھیما"], a: 0 },
        { q: "’باغ‘ کی جمع ہے:", o: ["باغات", "باغوں", "باغیاں", "باغہ"], a: 0 },
        { q: "’روشنی‘ کا متضاد ہے:", o: ["اندھیرا", "چمک", "سورج", "دن"], a: 0 },
        { q: "’مہمان‘ کے معنی ہیں:", o: ["آمدہ", "مالک", "دوست", "پڑوسی"], a: 0 }
      ]},
      { name: "B", title: "مختصر سوالات", type: "short", marks: 6, items: [
        { q: "اسم کی تعریف لکھیں اور دو مثالیں دیں۔", ref: "نام; شخص، جگہ یا چیز; مثالیں" },
        { q: "فعل اور حرف کی تعریف لکھیں۔", ref: "کام کا بتانا; حرف جملے جوڑتا ہے" },
        { q: "متضاد لکھیں: آسان، روشن، بلند۔", ref: "مشکل; اندھیرا; پست" },
        { q: "درج ذیل الفاظ سے جملے بنائیں: محنت، دیانت۔", ref: "درست معنی; قواعد" },
        { q: "’دل لگانا‘ محاورے کا جملے میں استعمال کریں۔", ref: "توجہ دینا; درست جملہ" },
        { q: "نظم اور نثر میں فرق بیان کریں۔", ref: "وزن اور بحر; تخیل; نثر سادہ" }
      ]},
      { name: "C", title: "تفصیلی سوالات", type: "long", marks: 16, items: [
        { q: "’وقت کی قدر‘ یا ’صفائی نصف ایمان ہے‘ پر مضمون لکھیں۔", ref: "تمہید; نکات; مثالیں; نتیجہ; املا اور روانی" },
        { q: "اپنے استاد کو چھٹی کی درخواست لکھیں۔", ref: "بسم اللہ; مخاطب; وجہ; تاریخ; التماس; نام" }
      ]}
    ]
  },

  "p1-islamiyat": {
    part: 1, subject: "Islamiyat", emoji: "🕌", rtl: true,
    sections: [
      { name: "A", title: "کثیر الانتخابی سوالات", type: "mcq", marks: 1, items: [
        { q: "ارکان اسلام کی تعداد ہے:", o: ["4", "5", "6", "7"], a: 1 },
        { q: "کلمہ طیبہ کا درست متن ہے:", o: ["لا الٰہ الا اللہ محمد رسول اللہ", "اللہ اکبر", "سبحان اللہ", "الحمد للہ"], a: 0 },
        { q: "پہلی وحی کس غار میں نازل ہوئی؟", o: ["غار حرا", "غار ثور", "غار ابو طالب", "غار خیبر"], a: 0 },
        { q: "نبی اکرم ﷺ کی جائے پیدائش ہے:", o: ["مکہ مکرمہ", "مدینہ منورہ", "طائف", "یروشلم"], a: 0 },
        { q: "رمضان المبارک کون سا مہینہ ہے؟", o: ["نواں", "دسواں", "بارہواں", "ساتواں"], a: 0 },
        { q: "حج کا مہینہ ہے:", o: ["ذوالحجہ", "محرم", "شوال", "رجب"], a: 0 },
        { q: "قرآن کی سب سے بڑی سورت ہے:", o: ["سورۃ البقرہ", "سورۃ الفاتحہ", "سورۃ الکوثر", "سورۃ یٰسین"], a: 0 },
        { q: "قرآن کی سب سے چھوٹی سورت ہے:", o: ["سورۃ الکوثر", "سورۃ الاخلاص", "سورۃ الناس", "سورۃ الفلق"], a: 0 },
        { q: "خلفائے راشدین کی تعداد ہے:", o: ["3", "4", "5", "6"], a: 1 },
        { q: "اسلام کا پہلا رکن ہے:", o: ["کلمہ شہادت", "نماز", "روزہ", "زکوٰۃ"], a: 0 },
        { q: "نماز فجر کی فرض رکعات ہیں:", o: ["2", "3", "4", "5"], a: 0 },
        { q: "وضو میں دھونے والے اعضاء کی تعداد ہے:", o: ["3", "4", "5", "6"], a: 1 },
        { q: "قرآن مجید کی زبان ہے:", o: ["عربی", "فارسی", "اردو", "انگریزی"], a: 0 },
        { q: "نبی اکرم ﷺ کے والد کا نام ہے:", o: ["حضرت عبداللہ", "حضرت ابوطالب", "حضرت عبدالمطلب", "حضرت حمزہ"], a: 0 },
        { q: "اسلام میں سود کا حکم ہے:", o: ["حرام", "حلال", "مکروہ", "مباح"], a: 0 },
        { q: "زکوٰۃ کس پر فرض ہے؟", o: ["صاحب نصاب پر", "ہر شخص پر", "صرف بچوں پر", "صرف عورتوں پر"], a: 0 },
        { q: "نماز مغرب کی فرض رکعات ہیں:", o: ["2", "3", "4", "5"], a: 1 },
        { q: "روزہ کس مہینے میں فرض ہے؟", o: ["رمضان", "شعبان", "رجب", "محرم"], a: 0 },
        { q: "قرآن کے کل پارے ہیں:", o: ["30", "20", "40", "10"], a: 0 },
        { q: "ہجرت مدینہ کا سال ہے:", o: ["622 عیسوی", "610 عیسوی", "632 عیسوی", "570 عیسوی"], a: 0 }
      ]},
      { name: "B", title: "مختصر سوالات", type: "short", marks: 4, items: [
        { q: "ایمان مفصل کے الفاظ لکھیں۔", ref: "اللہ، فرشتے، کتابیں، رسول، آخرت، تقدیر، بعث بعد الموت" },
        { q: "نماز کی اہمیت مختصراً بیان کریں۔", ref: "دین کا ستون; پانچ وقت; پابندی; روحانی تربیت" },
        { q: "روزے کے بنیادی مقاصد بیان کریں۔", ref: "تقویٰ; صبر; ہمدردی; نفس کی تربیت" },
        { q: "زکوٰۃ کی تعریف اور اہمیت لکھیں۔", ref: "2.5 فیصد; صاحب نصاب; غریبوں کی مدد; معاشی توازن" },
        { q: "حج کی فرضیت کی شرائط بیان کریں۔", ref: "اسلام; بلوغت; عقل; استطاعت; آزادی" },
        { q: "والدین کے ساتھ حسن سلوک کی اہمیت بیان کریں۔", ref: "قرآنی حکم; جنت والدین کے قدموں میں; خدمت; احترام" }
      ]},
      { name: "C", title: "تفصیلی سوالات", type: "long", marks: 8, items: [
        { q: "ارکان اسلام کا تفصیلی تعارف لکھیں۔", ref: "شہادت، نماز، روزہ، زکوٰۃ، حج; ہر ایک کی وضاحت" },
        { q: "اسلام میں اخلاقیات کی اہمیت پر مضمون لکھیں۔", ref: "سچائی; امانت; حسن سلوک; معاشرتی اصلاح; احادیث" }
      ]}
    ]
  }
};
