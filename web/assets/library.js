/* Shared library metadata: subjects, papers and file paths. */
window.ZUEB = (function () {
  const SUBJECTS = {
    2: [
      { id: "p2-physics", name: "Physics", emoji: "⚛️", model: "files/model/HSSC-II_Physics_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/guess/Guess-Paper_Physics_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_Physics_HSSC-II_PreMedical.docx" },
      { id: "p2-chemistry", name: "Chemistry", emoji: "🧪", model: "files/model/HSSC-II_Chemistry_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/guess/Guess-Paper_Chemistry_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_Chemistry_HSSC-II_PreMedical.docx" },
      { id: "p2-biology", name: "Biology", emoji: "🧬", model: "files/model/HSSC-II_Biology_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/guess/Guess-Paper_Biology_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_Biology_HSSC-II_PreMedical.docx" },
      { id: "p2-english", name: "English", emoji: "📘", model: "files/model/HSSC-II_English_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/guess/Guess-Paper_English_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_English_HSSC-II_PreMedical.docx" },
      { id: "p2-urdu", name: "Urdu", emoji: "📗", model: "files/model/HSSC-II_Urdu-Normal_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/guess/Guess-Paper_Urdu-Normal_HSSC-II_PreMedical.pdf", docx: "files/guess/Guess-Paper_Urdu-Normal_HSSC-II_PreMedical.docx" }
    ],
    1: [
      { id: "p1-physics", name: "Physics", emoji: "⚛️", model: "files/part1/model/HSSC-I_Physics_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/part1/guess/Guess-Paper_PartI_Physics_HSSC-I_PreMedical.pdf" },
      { id: "p1-chemistry", name: "Chemistry", emoji: "🧪", model: "files/part1/model/HSSC-I_Chemistry_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/part1/guess/Guess-Paper_PartI_Chemistry_HSSC-I_PreMedical.pdf" },
      { id: "p1-biology", name: "Biology", emoji: "🧬", model: "files/part1/model/HSSC-I_Biology_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/part1/guess/Guess-Paper_PartI_Biology_HSSC-I_PreMedical.pdf" },
      { id: "p1-english", name: "English", emoji: "📘", model: "files/part1/model/HSSC-I_English_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/part1/guess/Guess-Paper_PartI_English_HSSC-I_PreMedical.pdf" },
      { id: "p1-urdu", name: "Urdu", emoji: "📗", model: "files/part1/model/HSSC-I_Urdu-Lazmi_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/part1/guess/Guess-Paper_PartI_Urdu-Lazmi_HSSC-I_PreMedical.pdf" },
      { id: "p1-islamiyat", name: "Islamiyat", emoji: "🕌", model: "files/part1/model/HSSC-I_Islamiyat_ZUEB-Official-Model-Paper-2026.pdf", guess: "files/part1/guess/Guess-Paper_PartI_Islamiyat_HSSC-I_PreMedical.pdf" }
    ]
  };

  const EXTRA_MODELS = [
    { name: "Pakistan Studies", emoji: "🇵🇰", file: "files/model/HSSC-II_Pakistan-Studies_ZUEB-Official-Model-Paper-2026.pdf" },
    { name: "Sindhi (Normal)", emoji: "📙", file: "files/model/HSSC-II_Sindhi-Normal_ZUEB-Official-Model-Paper.pdf" }
  ];

  function find(id) {
    for (const part of [1, 2]) {
      const s = SUBJECTS[part].find((x) => x.id === id);
      if (s) return { ...s, part };
    }
    return null;
  }

  return { SUBJECTS, EXTRA_MODELS, find };
})();
