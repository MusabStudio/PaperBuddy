# PROMPT 3 — Sindh Board Karachi (BIEK) master harvest

Copy everything below the line into your other AI. Give it a folder with write access.

---

You are an educational research assistant with web access and file-system access. Build a complete, verified resource pack for the **Board of Intermediate Education Karachi (BIEK)** — the Sindh Board, Karachi — for **HSSC Part I (Class XI)** and **HSSC Part II (Class XII)**, across the important groups. Then create guess papers and machine-readable practice sets for every subject.

## Hard rules

1. **BIEK only.** Every file must be from `biek.edu.pk` or clearly identified BIEK material. Never save ZUEB, FBISE, AKUEB, or another BISE's paper as BIEK.
2. **Official first.** Start at `https://www.biek.edu.pk`. Crawl its navigation for *Past Papers*, *Model Papers*, *Syllabus*, *Date Sheets*. Only use a mirror if the official file is gone, and label it.
3. **No login bypass, no paywalls, no Scribd/Facebook scraping.** Public files only.
4. **Never fabricate a paper.** If a year or subject is missing, record `NOT FOUND`. Do not create empty PDFs.
5. **Verify each file:** it opens, is a PDF, shows the board name, the correct class (XI/XII), the subject, and the year. Reject syllabus files, date sheets, result gazettes and textbooks.
6. **Label guess papers clearly:** `GUESS PAPER — NOT AN OFFICIAL BIEK PAPER. Generated for practice.`

## Step 1 — confirm the scheme (do this before downloading)

Open `biek.edu.pk` and record the current official group and subject scheme for HSSC I and II. Expected groups (confirm, do not assume):

- **Pre-Medical** — Physics, Chemistry, Biology (check whether it is one Biology paper or Botany + Zoology papers in the year you download)
- **Pre-Engineering** — Physics, Chemistry, Mathematics
- **General Science** — Physics, Chemistry, Mathematics / Biology (whichever the board lists)
- **Computer Science / ICS** — if offered, list its subjects
- **Commerce** — Accounting, Business Mathematics / Statistics, Economics, Commerce, Banking, Commercial Geography
- **Humanities** — Islamic Studies / Islamic History, Civics, Education, Sociology, Economics, Psychology
- **Home Economics** — if offered
- **Compulsory (all groups):** English, Urdu (Normal or Easy), Islamic Studies / Islamiyat (Part I), Pakistan Studies (Part II), Sindhi (if applicable)

Write this scheme to `SCHEME.md` with a source URL for each row.

## Step 2 — model papers

Download every official BIEK model paper for both parts and all groups. Known starting points (verify, links change):

- `https://www.biek.edu.pk/ModelPaper/2024/Model-Paper-for-Examinations-2024.pdf`
- the *Model Papers* section of the site navigation for other years

Some subjects share one combined PDF — split only if the board provides separate files; otherwise save the combined file once per group and note it in the manifest.

## Step 3 — past papers, last 5 years

Collect **2021, 2022, 2023, 2024, 2025** for every subject in every group, for both parts. Include Annual and Supplementary sessions when published. Where a year had no exam (COVID), record `NOT HELD`.

Save each file separately with a descriptive name; never merge papers.

## Step 4 — guess papers (create these)

For every subject and part, write one guess paper that mirrors that subject's real paper:

- same sections, same number of questions, same marks as the model paper you downloaded
- 20 MCQs with one correct option, plus Section B and C questions in the board's style
- MCQ answer key at the end plus a 3-6 point marking guide for written questions
- Urdu / Islamiyat / Sindhi papers in Urdu script, right-to-left
- do not copy model questions verbatim; paraphrase
- output **both DOCX and PDF**; if PDF is impossible, DOCX only and say so

## Step 5 — practice sets (machine-readable)

For every subject and part, also output a JSON practice set so the website can render a **Practice** button. Use exactly this schema:

```json
{
  "id": "biek-p2-pre-medical-physics",
  "part": 2,
  "group": "Pre-Medical",
  "subject": "Physics",
  "sections": [
    {
      "name": "A",
      "title": "Multiple choice",
      "type": "mcq",
      "marks": 1,
      "items": [
        { "q": "Question text", "o": ["A", "B", "C", "D"], "a": 1 }
      ]
    },
    {
      "name": "B",
      "title": "Short answers",
      "type": "short",
      "marks": 4,
      "items": [
        { "q": "Question text", "ref": "point one; point two; point three", "m": 4 }
      ]
    },
    {
      "name": "C",
      "title": "Detailed answers",
      "type": "long",
      "marks": 16,
      "items": [
        { "q": "Question text", "ref": "expected points; second point", "m": 16 }
      ]
    }
  ]
}
```

Rules for the sets: 20 MCQs exactly, 8-12 short questions, 2-3 long questions, total **never above 50 items**. `a` is the zero-based index of the correct option. Every written item needs a `ref` with 3-6 key points.

## Folder structure

```
Sindh-Board-Karachi/
  SCHEME.md
  MANIFEST.csv
  MANIFEST.md
  HSSC-Part-1/
    Pre-Medical/
      Model-Papers/
      Past-Papers/2021/ 2022/ 2023/ 2024/ 2025/
      Guess-Papers/
      Practice/            <- JSON sets
    Pre-Engineering/  General-Science/  Commerce/  Humanities/  Home-Economics/  Compulsory/
  HSSC-Part-2/
    ...same groups...
```

## File naming

- Model: `BIEK_HSSC-I_Pre-Medical_Physics_Model-Paper-2024.pdf`
- Past: `BIEK_HSSC-II_Pre-Medical_Physics_Annual-2023.pdf`
- Supplementary: `..._Supplementary-2023.pdf`
- Guess: `BIEK_HSSC-II_Pre-Medical_Physics_Guess-Paper-2026.docx` and `.pdf`
- Practice: `biek-p2-pre-medical-physics.json`

Use `HSSC-I` for Part I and `HSSC-II` for Part II in filenames.

## MANIFEST.csv columns

`Part,Group,Subject,Type,Year,Session,File,SourceURL,Pages,SizeKB,Status,Notes`

`Type` = `model` | `past` | `guess` | `practice`.
`Status` = `DOWNLOADED` | `CREATED` | `NOT FOUND` | `NOT HELD` | `REJECTED-OTHER-BOARD` | `REJECTED-WRONG-TYPE`.

## MANIFEST.md must include

1. an availability matrix: subject rows × years 2021-2025, cells marked ✔ / missing;
2. every missing paper and why;
3. every rejection with the reason;
4. which subjects have no official model paper at all;
5. a short note on scheme changes you noticed (for example Biology split into Botany/Zoology).

## Quality checks before you finish

- [ ] Every PDF opens and the board name appears inside it.
- [ ] No file from another board, no syllabus or gazette in a paper folder.
- [ ] Every group has a model paper or an explicit `NOT FOUND`.
- [ ] Every subject has a guess paper with the disclaimer header.
- [ ] Every practice JSON parses and has ≤50 items.
- [ ] Filenames follow the pattern and match the manifest.
- [ ] Nothing invented to fill a gap.

## Finish

Print a summary table: Part, Group, Subjects, Model papers, Past papers found, Guess papers created, Practice sets created. Then list what is missing. Do not stop early and do not pad folders with placeholders.
