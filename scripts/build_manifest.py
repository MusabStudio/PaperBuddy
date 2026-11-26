import os, re, json, shutil, pathlib

SRC = pathlib.Path(r"C:\D\Other\Ayesha\ZUEB-All-Papers")
DEST = pathlib.Path(r"C:\D\Other\Ayesha\ZUEB-Website\files\all")

def pretty(s):
    s = s.replace("-", " ").replace("_", " ")
    small = {"and", "of", "the", "to", "in"}
    words = []
    for i, w in enumerate(s.split()):
        lw = w.lower()
        if lw in small and i > 0:
            words.append(lw)
        elif w.isupper():
            words.append(w)
        else:
            words.append(w[:1].upper() + w[1:])
    out = " ".join(words)
    return (out.replace("Ii", "II").replace("Iii", "III")
               .replace("Zueb", "ZUEB").replace("Hssc", "HSSC"))

entries = []
for root, dirs, files in os.walk(SRC):
    for fn in files:
        ext = os.path.splitext(fn)[1].lower()
        if ext not in (".pdf", ".docx"):
            continue
        full = pathlib.Path(root) / fn
        rel = full.relative_to(SRC)
        parts = rel.parts

        if parts[0].startswith("HSSC-Advanced"):
            part = "A"
            group = "Advanced"
            group_label = "HSSC Advanced"
            name = os.path.splitext(fn)[0]
            subj = re.sub(r"^HSSC-A\s*", "", name)
            subj = re.sub(r"\s*(M\d+|Model Paper\s*\d+|modal paper\s*\d+|modal|Final Model.*)$", "", subj, flags=re.I).strip()
            subject = subj or "General"
            typ = "model"
        else:
            m = re.match(r"HSSC-(I|II)_([^_]+)_([^_]+)_(.+)$", os.path.splitext(fn)[0])
            if not m:
                continue
            roman, group, subject, tail = m.groups()
            part = "1" if roman == "I" else "2"
            typ = "guess" if "Guess" in tail else "model"
            group_label = pretty(group)

        target_dir = DEST / (f"Part-{part}" if part != "A" else "Advanced") / group / ("Guess" if typ == "guess" else "Model")
        target_dir.mkdir(parents=True, exist_ok=True)
        shutil.copy2(full, target_dir / fn)

        entries.append({
            "part": part,
            "group": group,
            "groupLabel": group_label,
            "subject": subject,
            "subjectLabel": pretty(subject),
            "type": typ,
            "ext": ext.lstrip("."),
            "file": "/" + (target_dir / fn).relative_to(pathlib.Path(r"C:\D\Other\Ayesha\ZUEB-Website")).as_posix(),
            "sizeKB": round(full.stat().st_size / 1024),
        })

entries.sort(key=lambda e: (e["part"], e["groupLabel"], e["subjectLabel"], e["type"], e["ext"]))
out = DEST / "manifest.json"
out.write_text(json.dumps({"count": len(entries), "items": entries}, ensure_ascii=False), encoding="utf-8")

print("entries:", len(entries))
from collections import Counter
print("by part:", Counter(e["part"] for e in entries))
print("by type:", Counter(e["type"] for e in entries))
print("groups:", len({(e["part"], e["group"]) for e in entries}))
print("manifest KB:", round(out.stat().st_size / 1024, 1))
