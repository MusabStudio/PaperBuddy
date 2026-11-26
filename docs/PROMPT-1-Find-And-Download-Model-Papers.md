# PROMPT 1 — Find and download every ZUEB HOESC model paper

Copy everything below the line into your other AI, then attach this file's folder path.

---

You are an educational research assistant with file-system access and web access. Your job is to collect every **official Ziauddin University Examination Board (ZUEB)** model paper for **HSSC Part I (Class XI)** and **HSSC Part II (Class XII)** across all groups, save them in the correct folders, and produce a verified manifest.

## Hard rules

1. **ZUEB only.** Never save Karachi Board (BIEK), FBISE, AKUEB, Punjab or Sindh BISE papers as ZUEB. If a document is from another board, skip it and note it in the manifest.
2. **Official sources first.** Use zueb.edu.pk and old.zueb.edu.pk. Only fall back to a third-party copy if the official file is gone, and label the source.
3. **Never fabricate.** Do not create empty PDFs, placeholder files, or AI-written "papers" in this task. If a document is missing, record `NOT FOUND`.
4. **Do not bypass logins or paywalls.** Do not use portal.zueb.edu.pk unless a login is already provided. Do not scrape Scribd, Facebook groups, or paid bookshops.
5. Verify every file: it must open, be a PDF, and mention the right class and subject. Reject files that are actually syllabi, result gazettes, date sheets, or another subject.

## Target folder structure (already created)

```
ZUEB-All-Papers/
  HSSC-Part-1/
    Pre-Medical/Model-Papers/
    Pre-Engineering/Model-Papers/
    General-Science/Model-Papers/
    Commerce/Model-Papers/
    Humanities/Model-Papers/
    Medical-Technology/Model-Papers/
    Pre-Nursing/Model-Papers/
  HSSC-Part-2/
    ... same seven groups ...
```

File name format:
`HSSC-{I|II}_{Group}_{Subject}_ZUEB-Model-Paper-{Year}.pdf`
Example: `HSSC-II_Pre-Engineering_Mathematics_ZUEB-Model-Paper-2026.pdf`

If several versions exist (M1, M2, revised), save each separately and append `_M1`, `_M2`, `_Revised`.

## Groups and subjects to cover

Confirm every list against https://zueb.edu.pk/hssc and the marks break-up grids before downloading. Current expected scheme:

**Part I (Class XI) — compulsory:** English, Urdu Normal (or Urdu Easy / Sindhi Normal), Islamiyat (or Ethics for non-Muslims, if published).
**Part II (Class XII) — compulsory:** English, Urdu Normal (or Sindhi Normal), Pakistan Studies.

Electives by group:
- **Pre-Medical:** Physics, Chemistry, Biology
- **Pre-Engineering:** Physics, Chemistry, Mathematics
- **General Science:** Physics, Computer Science, Mathematics
- **Commerce:** Commercial Geography, Banking, Accounting-II, Business Statistics
- **Humanities:** any three of Islamic Studies, Mathematics, Sociology, Economics, Education, Civics, Computer Science
- **Medical Technology:** Microbiology, Chemical Pathology and Serology, Elementary Chemistry and Chemical Pathology
- **Pre-Nursing:** Bio-Chemistry, Fundamentals of Nursing, Elementary Anatomy and Micro Technique

Also collect, if published: Urdu Easy, Sindhi Normal, Ethics, and any HSSC-A model papers, but keep HSSC-A in a separate `HSSC-Advanced/` folder so it is not confused with the regular qualification.

## Where to look

Start with these, then follow every link you find:

1. `https://zueb.edu.pk/hssc` — group and subject index.
2. Per-subject pages, e.g. `https://zueb.edu.pk/hssc/grade-12/pre-medical/elective/physics/` — each has **Syllabus** and **Model Paper** download buttons.
3. Legacy index: `https://old.zueb.edu.pk/hssc-examination-materials-25` — a table of every subject with Syllabus and Model Paper links.
4. Known file patterns (verify each; names change):
   - `https://old.zueb.edu.pk/assets/images/resource/modalpaper25/grade_11/HSSC-I%20<Subject>%20M1.pdf`
   - `https://old.zueb.edu.pk/assets/images/resource/modalpaper25/grade_12/HSSC-II%20<Subject>%20M1.pdf`
   - `https://zueb.edu.pk/wp-content/uploads/2026/09/HSSC-II-<Subject>-M1.pdf`
   - `https://zueb.edu.pk/wp-content/uploads/2026/08/HSSC-I-<Subject>-M1.pdf`
5. `https://zueb.edu.pk/archive-circulars/` and `https://zueb.edu.pk/marks-break-up/` for any newly posted model papers.
6. If a subject page has no model paper, try the legacy table and the 2025/2026 upload folders. Do not guess random file names beyond one or two reasonable variations.

## Verification checklist for each file

- Opens as a valid PDF (check the `%PDF` header and page count).
- Header says `MODEL PAPER` and the correct class (`Class XI` / `Class XII`).
- Subject in the header matches the folder and file name.
- Not a syllabus, gazette, date sheet, or textbook chapter.
- Record: file size, page count, source URL, download date, and whether it is an M1/M2/revised version.

## Manifest

Create `ZUEB-All-Papers/MANIFEST-Model-Papers.csv` with columns:

`Part,Group,Subject,File,SourceURL,Pages,SizeKB,Version,Status,Notes`

Status must be one of `DOWNLOADED`, `NOT FOUND`, `REJECTED-OTHER-BOARD`, `REJECTED-WRONG-TYPE`.

Also write `ZUEB-All-Papers/MANIFEST-Model-Papers.md` summarising:
- totals per part and group,
- every missing paper,
- every rejection and why,
- any broken links you found on the official site.

## Finish

Print a short summary table of what you downloaded and what is missing. Do not stop after a few files: keep going until every subject in every group has been checked. If a group has no published model paper at all, say so explicitly rather than inventing one.
