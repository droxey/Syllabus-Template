# SAMPLE Project: Ship one module

<!-- omit in toc -->
## Contents

1. [Project Goals](#project-goals)
1. [Project Requirements](#project-requirements)
1. [Challenges](#challenges)
1. [Deliverables](#deliverables)
1. [Rubric](#rubric)

This is a **SAMPLE** spec. You are not dockerizing a codebase. You are proving you can customize Syllabus-Template the way this folder already does.

## Project Goals

| Goal | Description |
| ---- | ----------- |
| `map` | Point at every file the Docsify shell needs and say what it does. |
| `review` | Open a small PR a teammate can merge without fear. |
| `voice` | Rewrite one student-facing heading so it sounds like a builder teaching, not a template. |
| `demo` | Serve this folder and walk the room through what shipped. |

## Project Requirements

Copy this table into your notes. Check a row only after you can show it.

| Category | Requirement | ✅ |
| -------- | ----------- | :-: |
| **Shell** | You can name `index.html`, `_sidebar.md`, `_navbar.md`, `Web/style.css`, `Web/sw.js` | |
| **Modules** | Sidebar lists the same five modules as the syllabus | |
| **SAMPLE** | No `COURSE_*`, `REPO_NAME`, or `GITHUB_ORG` tokens remain in *this* folder | |
| **Preview** | `docsify serve` from `test/sample-course` loads ACS 9999 | |
| **Docs** | README still says this is not a live ACS offering | |

## Challenges

### Challenge 1: Map the shell

Write a short note (comment, gist, or PR description) that maps:

- Docsify entry: `index.html`
- Nav: `_sidebar.md`, `_navbar.md`
- Student home: `README.md`
- Assets: `Web/`, `Images/sample-badge.svg`

Do not list ACS-3220 Docker lessons. Those files were not copied here.

### Challenge 2: Open a SAMPLE PR

Branch from the template default. Change only files under `test/sample-course/`. The root starter stays full of placeholders.

### Challenge 3: One heading pass

Pick one heading in a module. Rewrite it so a student knows the next action. Leave instructor prep inside the header `<details>` callout.

## Deliverables

_All SAMPLE submissions are due **Wednesday, April 15, 2026 at 11:59pm** unless we say otherwise._

1. **Repository or PR** — the filled module plus this folder still serving
2. **Three-minute demo** — syllabus, one module, project page
3. **Gradescope submit** — demo link only; there is no live ACS 9999 roster

## Rubric

[SAMPLE Project Rubric](SampleRubric.md)
