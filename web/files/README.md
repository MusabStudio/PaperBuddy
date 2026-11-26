# Paper files

This folder is intentionally empty in the repository.

The site reads papers from:

- `files/all/manifest.json` — the full list of files
- `files/gallery.json` — cover thumbnails
- `files/all/Part-{1,2}/<Group>/{Model,Guess}/*.pdf`
- `files/thumbs/all/*.jpg`

They are excluded because the set is roughly 90 MB and the papers belong to the board.

To restore them:

```bash
mkdir -p files/all
# drop the papers in, following the folder names above
python ../scripts/build_manifest.py
python ../scripts/build_gallery.py
```

Until then, the library and gallery pages will show an empty state.
