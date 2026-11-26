# PROMPT 2 — Write guess papers for every group (HSSC Part I and Part II)

Copy everything below the line into your other AI. Run it **after** Prompt 1, so the official model papers exist in the folders.

---

You are an experienced Pakistani intermediate-level examiner and subject teacher. Write **one guess paper per subject** for every HSSC group at ZUEB, for both Part I (Class XI) and Part II (Class XII). Use the official model papers already downloaded as your template for structure, section names, marks and command words. Output real, usable documents — not notes about documents.

## Hard rules

1. **Never claim these are official.** Every file starts with this exact line in bold red:
   `GUESS PAPER — NOT AN OFFICIAL ZUEB PAPER. Generated for practice.`
2. **Never copy a model paper's questions verbatim.** Paraphrase and vary them. The goal is a fresh paper in the same style.
3. **Accuracy first.** Every MCQ must have exactly one correct option, and you must be able to justify it. Do not invent formulas, dates, hadith text, or ayah numbers. If unsure, choose a safer question.
4. **Match the real paper.** Take section names, number of questions, marks per question and total marks from the official model paper for that exact subject and class. Do not force every subject into one template.
5. **Language:** English, Physics, Chemistry, Biology, Mathematics, Computer Science and Commerce subjects in English. Urdu and Islamiyat in Urdu, right-to-left. Sindhi only if a Sindhi model paper exists.
6. **No answer keys for essays.** Provide an MCQ answer key for every paper. For short and long questions give a 3-6 point marking guide, not full model essays.

## Read before writing

For each subject, open:
1. the official model paper in `Model-Papers/` (structure, section marks, instructions),
2. the official syllabus PDF for that subject (topic list and SLOs).

If a model paper is missing, copy the structure of the closest subject in the same group and say so in the manifest.

## Folder and file naming

```
ZUEB-All-Papers/HSSC-Part-{1|2}/{Group}/Guess-Papers/
```

`HSSC-{I|II}_{Group}_{Subject}_Guess-Paper-2026.docx` and the same name as `.pdf`.

Examples:
- `HSSC-II_Pre-Engineering_Mathematics_Guess-Paper-2026.docx`
- `HSSC-I_General-Science_Computer-Science_Guess-Paper-2026.docx`
- `HSSC-II_Humanities_Sociology_Guess-Paper-2026.docx`

Deliver **both** DOCX and PDF for every paper. If you cannot make a PDF, deliver DOCX and say so.

## Subject list

**Part I compulsory:** English, Urdu Normal, Islamiyat.
**Part II compulsory:** English, Urdu Normal, Pakistan Studies.

**Pre-Medical:** Physics, Chemistry, Biology
**Pre-Engineering:** Physics, Chemistry, Mathematics
**General Science:** Physics, Computer Science, Mathematics
**Commerce:** Commercial Geography, Banking, Accounting-II, Business Statistics
**Humanities:** Islamic Studies, Mathematics, Sociology, Economics, Education, Civics, Computer Science (write all seven so any three can be chosen)
**Medical Technology:** Microbiology, Chemical Pathology and Serology, Elementary Chemistry and Chemical Pathology
**Pre-Nursing:** Bio-Chemistry, Fundamentals of Nursing, Elementary Anatomy and Micro Technique

That is roughly 45-50 documents per part. Work subject by subject and do not skip any.

## Required structure of each guess paper

Follow the model paper you read. As a guide for science subjects:

- **Header:** board name, `GUESS PAPER`, class, group, subject, time allowed, total marks, candidate instructions.
- **Section A — MCQs:** 16-20 questions, 1 mark each, four options, one correct. Include a small number of practical/PBA-style questions if the model paper does.
- **Section B — Short answers:** the same count and marks as the model paper (often 9 x 4 = 36), with "attempt any NINE" style instructions.
- **Section C — Detailed answers:** the same count and marks (often 2 x 16 = 32), each with parts (a) and (b).
- **Answer key page:** MCQ key in a compact grid (e.g. `1-B 2-C 3-A ...`), plus a short marking guide for Section B/C listing the points a examiner looks for.
- **Footer:** "Practice paper. Not affiliated with ZUEB."

For English: MCQs on grammar and texts, short answers on prose/poetry/novel, then writing tasks (email, essay, precis, translation) exactly as the model paper orders them.
For Urdu and Islamiyat: same sections in Urdu, correct RTL layout, Urdu numerals only if the model paper uses them.
For Mathematics: MCQs plus short questions and 2-3 long questions, with marks matching the model paper; show the final answer for numericals in the key.
For Computer Science: theory MCQs, short answers, and one or two programming/algorithm questions.
For Commerce subjects: definitions, ledger/accounting problems, and case-style questions as the model paper does.

## Quality bar

- Difficulty mix: about 40% easy, 40% medium, 20% hard.
- Cover every unit of the syllabus at least once across the paper.
- No duplicate questions inside one paper.
- No question that needs a diagram you cannot draw; if a diagram is essential, describe it in words or leave a labelled placeholder box.
- Check spelling of scientific terms and names.
- For Pakistan Studies and Islamiyat, verify historical dates and religious references carefully. If unsure, rephrase to avoid the risky detail.

## Manifest

Create `ZUEB-All-Papers/MANIFEST-Guess-Papers.csv` with columns:

`Part,Group,Subject,Files,TemplateUsed,Sections,TotalQuestions,TotalMarks,Status,Notes`

Status: `CREATED`, `PARTIAL`, `SKIPPED-NO-TEMPLATE`.

Also write `ZUEB-All-Papers/MANIFEST-Guess-Papers.md` listing what was created, which official model paper each one mirrors, and anything a teacher should double-check.

## Finish

Work through every group and both parts. When done, print a table: Part, Group, Subject, Questions, Marks, Files created. Then list the subjects you could not do and why. Do not stop early, and do not pad the folders with placeholders.
