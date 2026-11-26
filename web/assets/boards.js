/* Board registry: every board's groups, subjects and data endpoints.
   Adding a new board later = one object here, no page rewrites. */
window.BOARDS = {
  zueb: {
    id: "zueb",
    label: "ZUEB",
    short: "Ziauddin",
    full: "Ziauddin University Examination Board",
    status: "live",
    manifest: "/files/all/manifest.json",
    gallery: "/files/gallery.json",
    groups: [
      { name: "Pre-Medical", folder: "Pre-Medical", emoji: "🩺", subjects: ["Physics", "Chemistry", "Biology"] },
      { name: "Pre-Engineering", folder: "Pre-Engineering", emoji: "📐", subjects: ["Physics", "Chemistry", "Mathematics"] },
      { name: "General Science", folder: "General-Science", emoji: "🔬", subjects: ["Physics", "Computer Science", "Mathematics"] },
      { name: "Commerce", folder: "Commerce", emoji: "📊", subjects: ["Accounting-I", "Business Mathematics", "Principles of Commerce", "Principles of Economics"] },
      { name: "Humanities", folder: "Humanities", emoji: "📚", subjects: ["Islamic Studies", "Mathematics", "Sociology", "Economics", "Education", "Civics", "Computer Science"] },
      { name: "Medical Technology", folder: "Medical-Technology", emoji: "🧫", subjects: ["Microbiology", "Hematology & Blood Banking", "Anatomy & Physiology"] },
      { name: "Pre-Nursing", folder: "Pre-Nursing", emoji: "💉", subjects: ["Biochemistry", "Fundamentals of Nursing", "Elementary Anatomy & Microtechniques"] },
      { name: "Compulsory", folder: "Compulsory", emoji: "📘", subjects: ["English", "Urdu Normal", "Islamiyat (Part I)", "Pakistan Studies (Part II)"] },
      { name: "HSSC Advanced", folder: "Advanced", emoji: "🚀", subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English", "Urdu", "Islamiyat", "Pakistan Studies"], advanced: true }
    ]
  },
  biek: {
    id: "biek",
    label: "Sindh Board",
    short: "BIEK",
    full: "Board of Intermediate Education Karachi",
    status: "pending",
    manifest: "/files/biek/manifest.json",
    gallery: "/files/biek/gallery.json",
    groups: [
      { name: "Pre-Medical", folder: "Pre-Medical", emoji: "🩺", subjects: ["Physics", "Chemistry", "Biology"] },
      { name: "Pre-Engineering", folder: "Pre-Engineering", emoji: "📐", subjects: ["Physics", "Chemistry", "Mathematics"] },
      { name: "General Science", folder: "General-Science", emoji: "🔬", subjects: ["Physics", "Chemistry", "Mathematics"] },
      { name: "Computer Science", folder: "Computer-Science", emoji: "💻", subjects: ["Physics", "Computer Science", "Mathematics"] },
      { name: "Commerce", folder: "Commerce", emoji: "📊", subjects: ["Accounting", "Business Mathematics", "Economics", "Commerce", "Banking", "Commercial Geography"] },
      { name: "Humanities", folder: "Humanities", emoji: "📚", subjects: ["Islamic Studies", "Civics", "Education", "Sociology", "Economics", "Psychology"] },
      { name: "Home Economics", folder: "Home-Economics", emoji: "🏠", subjects: ["Home Economics", "Food & Nutrition", "Clothing & Textiles"] },
      { name: "Compulsory", folder: "Compulsory", emoji: "📘", subjects: ["English", "Urdu Normal", "Urdu Easy", "Islamiyat (Part I)", "Pakistan Studies (Part II)", "Sindhi"] }
    ]
  }
};

window.getBoard = function (id) {
  return window.BOARDS[id] || window.BOARDS.zueb;
};

window.boardParam = function () {
  return new URLSearchParams(location.search).get("board") || "zueb";
};
