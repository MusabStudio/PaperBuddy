// Part II (Class XII) Pre-Medical question banks.
// Structure mirrors the ZUEB model paper: Section A (MCQs), B (short), C (long).
export const part2 = {
  "p2-physics": {
    part: 2, subject: "Physics", emoji: "⚛️",
    sections: [
      { name: "A", title: "Multiple choice", type: "mcq", marks: 1, items: [
        { q: "A practical application of mutual induction is:", o: ["AC generator", "Transformer", "Rectifier", "Dynamo"], a: 1 },
        { q: "This particle has no charge, no rest mass, and can interact with all charged and neutral particles:", o: ["Alpha particle", "Neutron", "Photon", "Positron"], a: 2 },
        { q: "The ratio of molar specific heat at constant pressure to that at constant volume is:", o: ["Less than one", "Greater than one", "Equal to one", "Equal to zero"], a: 1 },
        { q: "In the photoelectric effect, if the frequency of incident radiation increases, the stopping potential:", o: ["Decreases", "Does not change", "Increases", "Becomes zero"], a: 2 },
        { q: "The number of energy levels required for laser production is:", o: ["2", "3", "4", "5"], a: 1 },
        { q: "Resistors of 3Ω, 5Ω and 7Ω are in parallel. If the p.d. across the 5Ω resistor is 6 V, the p.d. across the 7Ω resistor is:", o: ["3 V", "6 V", "7 V", "8 V"], a: 1 },
        { q: "The Balmer series of the hydrogen spectrum lies in the:", o: ["Infrared", "Ultraviolet", "Visible", "Radio"], a: 2 },
        { q: "The most suitable material for the core of an electromagnet is:", o: ["Air", "Steel", "Copper-nickel alloy", "Soft iron"], a: 3 },
        { q: "A voltmeter is ideal if its internal resistance is:", o: ["Very large", "Large", "Small", "Infinite"], a: 3 },
        { q: "A transformer steps down:", o: ["Energy", "AC only", "DC only", "Both AC and DC"], a: 1 },
        { q: "The section of a transistor that supplies charge carriers is the:", o: ["Collector", "Base", "Emitter", "Junction"], a: 2 },
        { q: "A 2.2 kW electric iron operates at 220 V. The current drawn is:", o: ["20 A", "22 A", "10 A", "5 A"], a: 2 },
        { q: "Lenz's law is a direct consequence of:", o: ["Ohm's law", "Coulomb's law", "Faraday's law", "Conservation of energy"], a: 3 },
        { q: "A frame of reference is inertial if it is:", o: ["Rotating", "Accelerating", "Vibrating", "Moving with uniform velocity"], a: 3 },
        { q: "An ammeter is used to measure:", o: ["Current", "Potential difference", "Resistance", "Capacitance"], a: 0 },
        { q: "If the current through a wire in a uniform magnetic field is doubled, the force on the wire becomes:", o: ["Half", "Double", "Four times", "Six times"], a: 1 },
        { q: "De Broglie wavelength is given by:", o: ["λ = mv/h", "λ = h/(mv²)", "λ = h/(mv)", "λ = mh/v"], a: 2 },
        { q: "The SI unit of magnetic flux is:", o: ["Weber", "Tesla", "Henry", "Farad"], a: 0 },
        { q: "A Carnot engine works between 400 K and 300 K. Its efficiency is:", o: ["25%", "50%", "75%", "33%"], a: 0 },
        { q: "A 16 g radioactive sample decays for 3 half-lives. The mass remaining is:", o: ["8 g", "4 g", "2 g", "1 g"], a: 2 }
      ]},
      { name: "B", title: "Short answers", type: "short", marks: 4, items: [
        { q: "Derive an expression for the force on a current-carrying conductor in a uniform magnetic field.", ref: "F = BIL sinθ; direction by right-hand rule; depends on angle between I and B" },
        { q: "Define electric flux and show that the flux due to a point charge q is q/ε0.", ref: "flux = EA cosθ; spherical surface area 4πr²; E = q/4πε0r²; product gives q/ε0" },
        { q: "How many electrons pass through a wire per second if it carries 0.7 A? (e = 1.6×10⁻¹⁹ C)", ref: "I = ne/t; n = I/e; 4.375×10^18 electrons per second" },
        { q: "Define an equipotential surface and state two of its properties.", ref: "same potential everywhere; no work moving charge along it; perpendicular to field lines" },
        { q: "Explain why water is rarely used as a dielectric in capacitors.", ref: "high dielectric constant but conducts/ionises; leakage current; not stable insulator" },
        { q: "State the Stefan-Boltzmann law and write its expression.", ref: "energy radiated ∝ T^4; E = σT^4; σ = 5.67×10^-8 W m^-2 K^-4" },
        { q: "Define half-life and write the relation N = N0 e^(−λt).", ref: "time for half nuclei to decay; λ = 0.693/T½; N = N0e^-λt" },
        { q: "With a diagram, explain the working of an NPN transistor as an amplifier.", ref: "emitter forward biased, collector reverse biased; small base current controls large collector current; gain; phase inversion" },
        { q: "A coil of 200 turns and area 0.05 m² rotates at 50 rev/s in 0.5 T. Find the peak emf.", ref: "ε0 = NBAω; ω = 2πf; 2×0.5? no: 200×0.5×0.05×314 ≈ 1570 V" },
        { q: "Light of 3×10⁻⁷ m falls on sodium (work function 2.46 eV). Find the maximum kinetic energy.", ref: "E = hc/λ ≈ 4.13 eV; Kmax = E − φ ≈ 1.67 eV" }
      ]},
      { name: "C", title: "Detailed answers", type: "long", marks: 16, items: [
        { q: "a) Define a Carnot engine and derive its efficiency. b) What is a transformer? Derive the relation between turns and voltages.", ref: "Carnot: two isothermal + two adiabatic; η = 1 − T2/T1; transformer: Vs/Vp = Ns/Np; ideal power equal; AC only" },
        { q: "a) Describe the construction and working of a moving-coil galvanometer. b) State the law of radioactive decay and explain alpha, beta and gamma emission.", ref: "coil in radial field; restoring torque; I ∝ θ; N = N0e^-λt; alpha He-4, beta electron/positron, gamma photon" }
      ]}
    ]
  },

  "p2-chemistry": {
    part: 2, subject: "Chemistry", emoji: "🧪",
    sections: [
      { name: "A", title: "Multiple choice", type: "mcq", marks: 1, items: [
        { q: "Which alcohol has the highest boiling point?", o: ["Methanol", "Ethanol", "1-Propanol", "1-Butanol"], a: 3 },
        { q: "The main objective of green chemistry is to:", o: ["Maximise production", "Minimise waste generation", "Increase reaction time", "Use more solvent"], a: 1 },
        { q: "Catechol and resorcinol are examples of:", o: ["Chain isomers", "Position isomers", "Metamers", "Functional isomers"], a: 1 },
        { q: "The stratosphere extends from about:", o: ["0–11 km", "11–50 km", "50–80 km", "80–600 km"], a: 1 },
        { q: "Which metal does not corrode easily?", o: ["Iron", "Copper", "Zinc", "Gold"], a: 3 },
        { q: "The IUPAC name of isopropyl alcohol is:", o: ["1-Propanol", "2-Propanol", "1-Butanol", "2-Butanol"], a: 1 },
        { q: "Alkanes are also known as:", o: ["Olefins", "Paraffins", "Alkynes", "Aromatics"], a: 1 },
        { q: "Which is an acidic oxide?", o: ["Na₂O", "MgO", "SO₂", "CaO"], a: 2 },
        { q: "Potassium salts give which flame colour?", o: ["Red", "Yellow", "Lilac", "Green"], a: 2 },
        { q: "The catalyst in the Haber process is:", o: ["Iron", "Copper", "Zinc", "Silver"], a: 0 },
        { q: "Which hydrocarbon is saturated?", o: ["Ethene", "Ethyne", "Ethane", "Benzene"], a: 2 },
        { q: "Tollens' reagent tests for:", o: ["Aldehydes", "Alkanes", "Alcohols", "Amines"], a: 0 },
        { q: "Oxidation of an aldehyde gives:", o: ["An alcohol", "A carboxylic acid", "A ketone", "An alkane"], a: 1 },
        { q: "Dimethylamine is a:", o: ["Primary amine", "Secondary amine", "Tertiary amine", "Quaternary salt"], a: 1 },
        { q: "A carboxylic acid plus an alcohol with acid catalyst gives:", o: ["An ester", "An amide", "An aldehyde", "An ether"], a: 0 },
        { q: "The chief constituent of natural gas is:", o: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"], a: 0 },
        { q: "The number of electrons in the outer shell of a halogen is:", o: ["5", "6", "7", "8"], a: 2 },
        { q: "Bromine water is decolourised by:", o: ["Ethane", "Ethene", "Methane", "Propane"], a: 1 },
        { q: "The pH of 0.01 M HCl is:", o: ["1", "2", "7", "12"], a: 1 },
        { q: "Propanone is an example of a:", o: ["Aldehyde", "Ketone", "Alcohol", "Acid"], a: 1 }
      ]},
      { name: "B", title: "Short answers", type: "short", marks: 4, items: [
        { q: "Discuss the group trend of ionisation energy in Group IIIA.", ref: "decreases down group; increased shielding and atomic size; nuclear attraction falls" },
        { q: "Explain why the acidity of hydrogen halides increases from HF to HI.", ref: "bond length increases; bond strength decreases; H+ released more easily" },
        { q: "Balance: Cr₂O₇²⁻ + Fe²⁺ + H⁺ → Cr³⁺ + Fe³⁺ + H₂O.", ref: "Cr2O7^2- + 6Fe2+ + 14H+ -> 2Cr3+ + 6Fe3+ + 7H2O" },
        { q: "State the flame colours of Li, Na, K, Rb and Cs.", ref: "Li crimson; Na golden yellow; K lilac; Rb red-violet; Cs blue" },
        { q: "What is a diagonal relationship? Give three pairs.", ref: "similar properties across diagonal; Li-Mg, Be-Al, B-Si" },
        { q: "Write the reaction of cold dilute NaOH with chlorine.", ref: "Cl2 + 2NaOH -> NaCl + NaOCl + H2O; disproportionation" },
        { q: "Write the reaction converting ethyl chloride to ethyl alcohol.", ref: "C2H5Cl + NaOH(aq) -> C2H5OH + NaCl; hydrolysis" },
        { q: "Define catenation with one example.", ref: "self-linking of same atoms; carbon chains; silicon also shows it" },
        { q: "Write the preparation of a Grignard reagent from methyl bromide.", ref: "CH3Br + Mg in dry ether -> CH3MgBr; anhydrous conditions" },
        { q: "Mention four functions of proteins.", ref: "structure; enzymes; transport; hormones; immunity; muscle" },
        { q: "Explain the vital force theory and why it was rejected.", ref: "organic compounds only from living things; rejected when urea synthesised by Wohler" }
      ]},
      { name: "C", title: "Detailed answers", type: "long", marks: 16, items: [
        { q: "a) Discuss group trends of atomic radius, ionisation energy and electronegativity for alkali metals. b) Describe reactions of nitrogen and sulfur oxides that cause acid rain.", ref: "radius increases down group; IE decreases; EN decreases; NOx and SO2 oxidise to HNO3 and H2SO4; pH below 5" },
        { q: "a) Describe the molecular orbital structure of benzene. b) Write equations: ethanol to diethyl ether; phenol to benzoquinone; ethyl bromide to ethanol.", ref: "6 p orbitals; delocalised pi cloud; bond order 1.5; symmetrical; 150 pm bonds; ether by dehydration at 140C; phenol oxidation; hydrolysis" }
      ]}
    ]
  },

  "p2-biology": {
    part: 2, subject: "Biology", emoji: "🧬",
    sections: [
      { name: "A", title: "Multiple choice", type: "mcq", marks: 1, items: [
        { q: "The source of carbon for plants in the carbon cycle is:", o: ["Carbonate rocks", "Atmospheric CO₂", "Fossil fuels", "All of these"], a: 1 },
        { q: "Which hormone stimulates contraction of uterine muscles?", o: ["Oxytocin", "Thyroxine", "Growth hormone", "Insulin"], a: 0 },
        { q: "Life is believed to have originated in:", o: ["Air", "Water", "Land", "Space"], a: 1 },
        { q: "The genetic material of a zygote is a combination of:", o: ["Mother only", "Father only", "Both parents", "Neither"], a: 2 },
        { q: "Wings of insects and wings of birds are:", o: ["Homologous", "Analogous", "Vestigial", "Atavistic"], a: 1 },
        { q: "The population theory that inspired Darwin was proposed by:", o: ["Malthus", "Lyell", "Hutton", "Wallace"], a: 0 },
        { q: "Cell differentiation involves:", o: ["Gamete formation", "Zygote formation", "Specialisation of cells", "DNA replication"], a: 2 },
        { q: "Worker honey bees are:", o: ["Fertile females", "Fertile males", "Sterile females", "Sterile males"], a: 2 },
        { q: "The major inhibitory neurotransmitter of the brain is:", o: ["Acetylcholine", "Epinephrine", "GABA", "Endorphin"], a: 2 },
        { q: "Thyroxine is produced by the:", o: ["Thyroid", "Pancreas", "Adrenal", "Pituitary"], a: 0 },
        { q: "Philosophie Zoologique was written by:", o: ["Wallace", "Darwin", "Weismann", "Lamarck"], a: 3 },
        { q: "Pioneers of xerarch succession on bare rock are:", o: ["Foliose lichens", "Mosses", "Crustose lichens", "Shrubs"], a: 2 },
        { q: "The number of chromosomes in a human somatic cell is:", o: ["23", "44", "46", "48"], a: 2 },
        { q: "The second messenger for many hydrophilic hormones is:", o: ["cAMP", "ATP", "DNA", "Glucose"], a: 0 },
        { q: "Rh incompatibility is dangerous when:", o: ["Rh− mother, Rh+ fetus", "Rh+ mother, Rh− fetus", "Both Rh−", "Both Rh+"], a: 0 },
        { q: "The main lipid of the cell membrane bilayer is:", o: ["Phospholipid", "Cellulose", "Starch", "Chitin"], a: 0 },
        { q: "Fertilisation in humans normally occurs in the:", o: ["Uterus", "Fallopian tube", "Ovary", "Cervix"], a: 1 },
        { q: "Deficiency of vitamin D causes:", o: ["Scurvy", "Rickets", "Beriberi", "Night blindness"], a: 1 },
        { q: "The plasma protein that forms fibrin is:", o: ["Albumin", "Globulin", "Fibrinogen", "Heparin"], a: 2 },
        { q: "The enzyme that unwinds DNA during replication is:", o: ["Ligase", "Helicase", "Polymerase", "Primase"], a: 1 }
      ]},
      { name: "B", title: "Short answers", type: "short", marks: 4, items: [
        { q: "How does DNA structure give it a negative charge, and why does this matter?", ref: "phosphate backbone; negative at physiological pH; binds histones; moves to anode in electrophoresis" },
        { q: "How do homologous organs provide evidence for evolution?", ref: "same basic structure and origin; different functions; common ancestry; e.g. forelimbs" },
        { q: "What is a gene?", ref: "unit of heredity; DNA segment coding a polypeptide; locus on chromosome" },
        { q: "What are biological rhythms and why are they important?", ref: "cyclic changes; circadian; sleep-wake; hormone release; adaptation" },
        { q: "What is Rh incompatibility and why is it dangerous?", ref: "Rh− mother sensitised by Rh+ fetus; antibodies cross placenta; haemolytic disease of newborn" },
        { q: "Define stimulus and explain how organisms respond to it.", ref: "change detected by receptor; impulse; effector response; taxes and reflexes" },
        { q: "Differentiate primary and secondary induction.", ref: "primary: organizer initiates; secondary: induced tissue induces another; lens/optic cup example" },
        { q: "State Mendel's law of segregation and its relevance.", ref: "alleles separate in meiosis; one per gamete; explains 3:1 and variation" },
        { q: "Differentiate selection and hybridisation.", ref: "selection: choosing desirable individuals; hybridisation: crossing different varieties; both used in breeding" },
        { q: "Why do animals produce different excretory wastes?", ref: "habitat and water availability; ammonia toxic/water soluble; urea less toxic; uric acid conserves water" },
        { q: "What is a palindrome sequence in DNA?", ref: "same sequence on complementary strand read 5'->3'; recognition site for restriction enzymes" },
        { q: "Define goitre and state its cause.", ref: "enlarged thyroid; iodine deficiency; low thyroxine; TSH rises" }
      ]},
      { name: "C", title: "Detailed answers", type: "long", marks: 16, items: [
        { q: "a) Explain the structure of a nephron with a labelled diagram. b) Describe inheritance of two traits using a dihybrid cross.", ref: "glomerulus, Bowman's capsule, PCT, loop, DCT, collecting duct; filtration, reabsorption, secretion; dihybrid 9:3:3:1; independent assortment" },
        { q: "a) Describe the menstrual cycle with a diagram. b) Explain the central dogma of gene expression.", ref: "FSH, LH, oestrogen, progesterone; follicular, ovulation, luteal; 28 days; DNA->RNA->protein; transcription and translation" }
      ]}
    ]
  },

  "p2-english": {
    part: 2, subject: "English", emoji: "📘",
    sections: [
      { name: "A", title: "Multiple choice", type: "mcq", marks: 1, items: [
        { q: "Past participle of 'begin':", o: ["began", "begun", "beginned", "begin"], a: 1 },
        { q: "Antonym of 'ancient':", o: ["Old", "Modern", "Historic", "Early"], a: 1 },
        { q: "Synonym of 'brave':", o: ["Fearful", "Courageous", "Weak", "Lazy"], a: 1 },
        { q: "Plural of 'criterion':", o: ["Criterions", "Criterium", "Criteria", "Criterias"], a: 2 },
        { q: "'She is ___ honest woman.'", o: ["a", "an", "the", "no article"], a: 1 },
        { q: "Passive of 'They built this house in 1990':", o: ["This house has been built in 1990.", "This house built in 1990.", "This house was built in 1990.", "This house is built in 1990."], a: 2 },
        { q: "'If I ___ rich, I would travel the world.'", o: ["am", "was", "were", "be"], a: 2 },
        { q: "Great Expectations was written by:", o: ["Charles Dickens", "Thomas Hardy", "Jane Austen", "Mark Twain"], a: 0 },
        { q: "Pip is apprenticed to a:", o: ["Carpenter", "Blacksmith", "Baker", "Farmer"], a: 1 },
        { q: "'I Have a Dream' was delivered at the:", o: ["White House", "Lincoln Memorial", "United Nations", "Capitol"], a: 1 },
        { q: "Kipling's 'If' is addressed to:", o: ["A son", "A daughter", "A friend", "A teacher"], a: 0 },
        { q: "Pahom's central trait is:", o: ["Unsatisfied and desirous", "Contented and proud", "Humble and kind", "Wise and watchful"], a: 0 },
        { q: "Theme of Auden's 'Stop All Clocks':", o: ["Adventure", "Love and irreparable loss", "Nature", "Family"], a: 1 },
        { q: "'Mother's bosom was a world to me' is:", o: ["Metaphor", "Simile", "Personification", "Alliteration"], a: 0 },
        { q: "The prefix 'macro' means:", o: ["Large", "Small", "Under", "Over"], a: 0 },
        { q: "Climate change affects water mainly by:", o: ["Reducing crops", "Increasing floods", "Causing droughts", "Melting glaciers"], a: 2 },
        { q: "Choose the correct sentence:", o: ["He has finished his work.", "He have finished his work.", "He has finish his work.", "He finishing his work."], a: 0 },
        { q: "Synonym of 'abundant':", o: ["Scarce", "Plentiful", "Tiny", "Weak"], a: 1 },
        { q: "'The wind whispered through the trees' is:", o: ["Simile", "Metaphor", "Personification", "Hyperbole"], a: 2 },
        { q: "Antonym of 'scarce':", o: ["Rare", "Plentiful", "Little", "Few"], a: 1 }
      ]},
      { name: "B", title: "Short answers", type: "short", marks: 3, items: [
        { q: "How does Martin Luther King use contrast between past injustice and future hope?", ref: "repetition; antithesis; emotional appeal; 'I have a dream'; moral authority" },
        { q: "What role does curiosity play in 'The Age of Infancy'?", ref: "child explores world; wonder; sensory discovery; shapes identity" },
        { q: "What does the ending of 'How Much Land Does a Man Need?' reveal about Pahom?", ref: "greed destroys him; only six feet needed; irony; moral lesson" },
        { q: "What role does Miss Havisham play in Pip's life?", ref: "manipulates Estella; breaks Pip's heart; symbol of frozen past; class ambition" },
        { q: "How does Joe Gargery represent integrity and love?", ref: "loyal; honest; forgives Pip; humble; father figure" },
        { q: "Significance of integrity with 'crowds' and 'kings' in 'If':", ref: "stay grounded; neither flattered nor broken; self-trust; humility" },
        { q: "Use 'spill the beans' and 'once in a blue moon' in sentences.", ref: "reveal a secret; very rarely; correct tense and context" },
        { q: "Change the voice: 'Challenges had strengthened her resolve.'", ref: "Her resolve had been strengthened by challenges." }
      ]},
      { name: "C", title: "Detailed answers", type: "long", marks: 16, items: [
        { q: "Write a formal email to a college accounts office requesting an extension for fee payment.", ref: "subject line; salutation; reason; specific request; dates; polite close; name and roll number" },
        { q: "Write an essay (about 300 words) on the impact of social media on teenagers' mental health.", ref: "thesis; two or three arguments; examples; counterargument; conclusion; cohesion; vocabulary" }
      ]}
    ]
  },

  "p2-urdu": {
    part: 2, subject: "Urdu", emoji: "📗", rtl: true,
    sections: [
      { name: "A", title: "کثیر الانتخابی سوالات", type: "mcq", marks: 1, items: [
        { q: "’کتاب‘ کی جمع ہے:", o: ["کتابیں", "کتابوں", "کتابات", "کتابیاں"], a: 0 },
        { q: "’امیر‘ کا متضاد ہے:", o: ["غریب", "بڑا", "خوش", "عالم"], a: 0 },
        { q: "’شیر‘ کی مؤنث ہے:", o: ["شیرنی", "شیرنیاں", "شیرہ", "شیرینی"], a: 0 },
        { q: "محاورہ ’آنکھ کا تارا‘ کا مطلب ہے:", o: ["بہت پیارا", "بہت بڑا", "بہت دور", "بہت کمزور"], a: 0 },
        { q: "علامہ اقبال کی جائے پیدائش ہے:", o: ["سیالکوٹ", "لاہور", "کراچی", "دہلی"], a: 0 },
        { q: "اردو زبان کا رسم الخط ہے:", o: ["دیوناگری", "عربی فارسی (نستعلیق)", "رومن", "گرمکھی"], a: 1 },
        { q: "’اساتذہ‘ کا واحد ہے:", o: ["استاد", "استادہ", "استاذ", "استادیں"], a: 0 },
        { q: "’بیٹا‘ کی مؤنث ہے:", o: ["بیٹی", "بیٹیاں", "بیٹنی", "بیٹہ"], a: 0 },
        { q: "’قافیہ‘ کی جمع ہے:", o: ["قوافی", "قافیوں", "قافیات", "قافیہیں"], a: 0 },
        { q: "درست املا ہے:", o: ["ذمہ دار", "زمہ دار", "ذمے دار", "زمّہدار"], a: 0 },
        { q: "’وہ کتاب پڑھتا ہے‘ میں فعل کی قسم ہے:", o: ["لازم", "متعدی", "ناقص", "امدادی"], a: 1 },
        { q: "محاورہ ’آگ بگولہ ہونا‘ کا مطلب ہے:", o: ["غصے میں آنا", "خوش ہونا", "حیران ہونا", "ڈر جانا"], a: 0 },
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
        { q: "مرکب کی تعریف لکھیں اور دو مثالیں دیں۔", ref: "دو یا زیادہ الفاظ کا مجموعہ; مرکب اضافی; مرکب توصیفی; مثال" },
        { q: "فعل لازم اور فعل متعدی میں فرق واضح کریں۔", ref: "لازم مفعول نہیں لیتا; متعدی مفعول لیتا ہے; مثال" },
        { q: "علامہ اقبال کے کلام میں ’خودی‘ کے تصور کو مختصراً بیان کریں۔", ref: "خود شناسی; خود اعتمادی; عمل; مسلسل جدوجہد" },
        { q: "محاورہ اور ضرب المثل میں فرق بیان کریں۔", ref: "محاورہ جملے کا حصہ; ضرب المثل مکمل جملہ; مثال" },
        { q: "درج ذیل الفاظ کے مترادف لکھیں: آسمان، پانی، دوست۔", ref: "آسمان: فلک; پانی: آب; دوست: رفیق" },
        { q: "درج ذیل الفاظ سے جملے بنائیں: ہوشیار، سمجھ۔", ref: "درست جملہ; معنی کی مطابقت; قواعد" },
        { q: "’ہاتھ بٹانا‘ محاورے کا جملے میں استعمال کریں۔", ref: "مدد کرنا; درست جملہ" },
        { q: "واحد اور جمع میں فرق مثال سے واضح کریں۔", ref: "ایک کی کثرت; مثال کتاب/کتابیں" }
      ]},
      { name: "C", title: "تفصیلی سوالات", type: "long", marks: 16, items: [
        { q: "کسی ایک موضوع پر مضمون لکھیں: ’تعلیم کی اہمیت‘ یا ’موبائل فون کے فوائد و نقصانات‘۔", ref: "تمہید; اہم نکات; مثالیں; نتیجہ; درست املا; روانی" },
        { q: "اپنے پرنسپل کو چھٹی کی درخواست لکھیں۔", ref: "بسم اللہ; مخاطب; وجہ; تاریخ; التماس; نام اور کلاس" }
      ]}
    ]
  }
};
