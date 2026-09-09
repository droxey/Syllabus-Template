# Guide: Preview this SAMPLE course

This folder is a **filled sample**, not the blank Syllabus-Template starter. Serve *this* directory so Docsify reads `index.html`, `_sidebar.md`, and the SAMPLE syllabus here — not the root placeholders.

## From the Syllabus-Template root

```bash
npx docsify-cli serve test/sample-course
```

Open [http://localhost:3000](http://localhost:3000). You should see **ACS 9999** in the sidebar, a SAMPLE warning on the syllabus, and five **Go** modules — not leftover `COURSE_TITLE` tokens and not Docker lessons.

## From this folder

```bash
cd test/sample-course
npm install
npm run serve
```

Same URL. `package.json` in this folder only exists so the sample can be served without changing the root starter scripts.

## What to click

1. Syllabus — SAMPLE callout, 7-week table, five Go module links
2. Each module in the sidebar (search only sees sidebar links)
3. Reading map, SAMPLE Project, and this guide
4. Theme — vue.css plus docsify-themeable, same as the root template. No dark/light toggle.

## What this is not

- Not GitHub Pages for a live `droxey/sample-course` repo. `index.html` uses that `REPO_NAME` / `GITHUB_ORG` pair to show the filled convention.
- Not ACS-3220 Docker content. We copied that course's folder shape and filled a SAMPLE Go track.
- Not a copy of the Go 101 / Optimizations 101 PDFs. Read [go101.org](https://go101.org/article/101.html).
