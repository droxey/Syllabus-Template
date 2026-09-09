# Guide: Preview this SAMPLE course

This folder is a **filled sample**, not the blank Syllabus-Template starter. Serve *this* directory so Docsify reads `index.html`, `_sidebar.md`, and the SAMPLE syllabus here — not the root placeholders.

## From the Syllabus-Template root

```bash
npx docsify-cli serve test/sample-course
```

Open [http://localhost:3000](http://localhost:3000). You should see **ACS 9999** in the sidebar, a SAMPLE warning on the syllabus, and five modules — not leftover `COURSE_TITLE` tokens.

## From this folder

```bash
cd test/sample-course
npm install
npm run serve
```

Same URL. `package.json` in this folder only exists so the sample can be served without changing the root starter scripts.

## What to click

1. Syllabus — SAMPLE callout, 7-week table, five module links
2. Each module in the sidebar (search only sees sidebar links)
3. SAMPLE Project and this guide
4. Dark / light toggle — `Web/style.css` plus the darklight theme from the template shell

## What this is not

- Not GitHub Pages for a live `droxey/sample-course` repo. `index.html` uses that `REPO_NAME` / `GITHUB_ORG` pair to show the filled convention.
- Not ACS-3220 content. We copied that course's folder shape (`Web/`, `Lessons/`, `Projects/`, `Guides/`, `Resources/`, `Images/`) and rewrote the markdown.
