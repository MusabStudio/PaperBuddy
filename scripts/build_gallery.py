import json, pathlib, re, os
import pymupdf

SITE = pathlib.Path(r"C:\D\Other\Ayesha\ZUEB-Website")
man = json.loads((SITE / "files" / "all" / "manifest.json").read_text(encoding="utf-8"))
out_dir = SITE / "files" / "thumbs" / "all"
out_dir.mkdir(parents=True, exist_ok=True)

def slug(s):
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s).strip("-").lower()
    return s[:60]

items = []
seen = set()
for it in man["items"]:
    if it["type"] != "model" or it["ext"] != "pdf":
        continue
    key = (it["part"], it["group"], it["subject"])
    if key in seen:
        continue
    seen.add(key)
    src = SITE / it["file"].lstrip("/")
    if not src.exists():
        continue
    name = f'{it["part"]}-{slug(it["group"])}-{slug(it["subject"])}.jpg'
    dest = out_dir / name
    if not dest.exists():
        try:
            d = pymupdf.open(src)
            pix = d[0].get_pixmap(dpi=70)
            if pix.width > 520:
                scale = 520 / pix.width
                pix = d[0].get_pixmap(matrix=pymupdf.Matrix(scale, scale))
            pix.save(str(dest), jpg_quality=62)
            d.close()
        except Exception as e:
            print("skip", it["file"], e)
            continue
    items.append({
        "part": it["part"],
        "group": it["group"],
        "groupLabel": it["groupLabel"],
        "subject": it["subjectLabel"],
        "thumb": "/files/thumbs/all/" + name,
        "file": it["file"],
    })

items.sort(key=lambda x: (x["part"], x["groupLabel"], x["subject"]))
(SITE / "files" / "gallery.json").write_text(
    json.dumps({"count": len(items), "items": items}, ensure_ascii=False), encoding="utf-8"
)
total = sum(f.stat().st_size for f in out_dir.glob("*.jpg")) / 1024 / 1024
print("thumbs:", len(items), "size MB:", round(total, 1))
