# Website CV — Aditya Bayu Pratama

Static site. No build step, no dependencies. 4 files + assets.

```
index.html   shell (title, meta, fonts, theme bootstrap)
data.js      ← ALL CONTENT. This is the only file you normally edit.
app.js       rendering, EN/ID switch, dark/light, scroll reveal
styles.css   design system
assets/img/  photos & screenshots       assets/docs/  CV PDFs
```

## Preview locally

```bash
cd "C:/Users/SERVER/Downloads/CV" && python -m http.server 8765
```

Then open http://127.0.0.1:8765 (opening `index.html` directly does not work — the browser blocks `data.js`).

## Update content

Everything is in `data.js`. Each text is a pair:

```js
role: { en: "Supervisor MES & IT", id: "Supervisor MES & IT" }
```

- **Add a project** → copy one `{ ... }` block inside `projects: [ ]`. Three card types:
  - `images: ["a.png", "b.png", ...]` → the card runs a slideshow (all cards rotate together, every 4.2s); clicking it opens the lightbox with ← → and Esc.
  - `points: [{en, id}, ...]` → card with no image, rendered as a list.
  - `link: "https://..."` (+ `video: true`, `image:` a thumbnail) → the whole card becomes a link, with a play badge.
- **Add a product implementation** → `products.categories[].companies[]` in `data.js`: company `name`, `logo`, and one or more `items` (product `name` + `image`). Product photos also open in the lightbox.
- **Add a certificate** → copy one block inside `certifications: [ ]`. Put the verification link in `url`. Empty `url` = card shown but not clickable. `featured: true` adds a ★.
- **Add photos** → drop files in `assets/img/projects/` or `assets/img/experience/`, then set `image: "assets/img/projects/xxx.jpg"` or `images: ["...", "..."]`.
  A path that does not exist yet is hidden automatically — nothing breaks.
- **Profile photo** → save as `assets/img/profile/aditya.jpg` (portrait 4:5). Until then the frame shows an "AB" monogram.
- **Company logos** → `assets/img/experience/giken.png`, `cladtek.png`, `polibatam.png`.
- **New CV PDF** → replace the files in `assets/docs/` (keep the same filenames, or update `meta.cv` / `meta.cvShort`).

Menu labels and section headings are in `UI` at the top of `app.js`.

## Certificate links

Coursera and Dicoding URLs were built from the credential IDs on your LinkedIn.
Open each card once and fix any URL that does not resolve. BNSP / LPJK / Toyota
certificates have no public link, so their `url` is empty — upload a scan to
`assets/docs/` and point `url` at it if you want them clickable.

## Deploy (Netlify)

Drag this whole folder onto https://app.netlify.com/drop, or connect a Git repo.
`Material/` is git-ignored: it holds the original full-resolution sources. The site uses the copies in `assets/img/` and `assets/docs/`.
