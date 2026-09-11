# AGENTS.md

This repo is Dani Roxberry's course-ops template. Clone it to start a new course. Agents following this file operate the template.

Course-level ops (clone, placeholders, Docsify serve/Pages) live in [SETUP.md](SETUP.md). This file is agent jobs. Lesson-level instructor notes go only in the Lesson1 author `<details>`. Never put skill names in `Lessons/*.md`.

Student-facing pages live in Docsify. The layout comes from [Tech-at-DU/ACS-3220-Docker-DevOps-Deployments](https://github.com/Tech-at-DU/ACS-3220-Docker-DevOps-Deployments), with placeholders and dark/light theme from [droxey/docsify-course](https://github.com/droxey/docsify-course).

## Next action

1. Read this file and [SETUP.md](SETUP.md). Course-level ops → SETUP.md.
2. Do the smallest change that finishes the request.
3. Lesson-level instructor notes → Lesson1 author `<details>` only (`## For curriculum authors` at the bottom). Never put skill names in `Lessons/*.md`.
4. Keep instructor prep out of the student-facing mid-body.
5. Gate finished student-facing markdown through the Technical Writer pass.

## Voice and output

Three layers. Do not mix them.

| Layer | When | What |
| ----- | ---- | ---- |
| **i-have-adhd** | Agent replies to Dani | Lead with the next action. Number the steps. Restate state each turn. No tangents. Make the win visible. |
| **Teaching voice** | Student-facing lesson, syllabus, activity, README prose | Dani's builder-teacher voice: practical, direct, example-first, engineering-grounded, clear over polished, verification-oriented, tradeoff-aware. I/you/we. Not academic, not corporate, not AI-generic. |
| **Technical Writer** | Final human-readable markdown | Structure, headings, links, placeholders, and a humanize pass. This is the last gate before commit. |

ADHD-friendly replies stay in the agent conversation. They do not leak into student pages.

## Agent jobs

### 1. Create a new course from this repo

Course-level ops for this job live in [SETUP.md](SETUP.md).

1. Clone or use this repo as the template.
2. Replace every `ALL_CAPS` placeholder. Search for `COURSE_`, `REPO_NAME`, `GITHUB_ORG`, `INSTRUCTOR_EMAIL`.
3. Set `index.html` title, description, author, `repo`, `name`, `search.namespace`, and OG URLs.
4. Rewrite `README.md` as this course's syllabus. Keep the ACS-3220 section order.
5. Create each session as `Lessons/<topic_name.md>` (kebab or TopicCase as used in the repo). Copy-from-and-rename **`Lessons/Lesson1.md` only** — it is the sole lesson template. Never author from `Lesson2`. Update `_sidebar.md` so every published lesson is linked (search only sees sidebar links).
6. Add course-specific Prism languages in `index.html` if you need them (`prism-docker`, `prism-go`, …).
7. Run `npm install` and `npm run serve`. Open `http://localhost:3000`.
8. Enable GitHub Pages from the default branch.

### 2. Refresh an existing course (research)

Research current-year practice for this course's topics. Update curriculum and code materials. Sources: official docs, ACS-3220-style labs, and the Tech Trends scan in job 6.

### 3. Bump runtimes and audit materials

Move the course to the latest **stable** language and framework. Then audit every:

- code snippet
- numbered instruction list
- project README
- activity

If a command, API, or flag died, fix it. If a snippet still runs, leave it.

### 4. Add active learning

Use "how to build a course" patterns. Design Activities that are easy to explain, memorable, and fun — Zoom needs variety.

Patterns that work (from ACS-3220 and Dani's classroom):

- Short warm-up: scavenger hunt, comic, think-pair-share, 3-question recap
- I do → we do → you do, then a lab with a clear done state
- Live-code the first five minutes only; narrate the failure students will hit
- Breakouts of 3–4; early finishers help the room
- One physical or visual beat per session when you can (whiteboard trace, comic, status page)

Do not invent a new assignment unless the request says so.

### 5. Instructor notes stay at the bottom

Never put instructor prep or direction in the student-facing mid-body (warm-up, TT, activity, lab, wrap), and never in a header LESSON PREP toggle.

The resources heading is always exactly `## Additional Resources` — never rename it, and never add parentheticals in the heading. “Official first” is link-ordering guidance inside the section only. That section is **topic sources only** — no pedagogy or how-to-teach links. See [`SETUP.md`](SETUP.md).

Put instructor, facilitator, and curriculum-author directives after Additional Resources. Wrap `## For curriculum authors` and its subsections in a `<details>` block so students can ignore it:

```markdown
## Additional Resources

- Official docs first…

<details>
<summary>For curriculum authors</summary>

## For curriculum authors

### In Class

- Open the demo before class.
- Breakouts of 3–4.

### Facilitator notes

- Visit rooms. Debrief one failure mode in the main room.

### Expert follow-ups

- Optional stretch after the lab.

</details>
```

`### In Class` is not at the top after the agenda. Author notes stay in that bottom `<details>` block. The student-facing body stays student-facing.

`Lessons/Lesson1.md` is the **only** starter. Copy it, rename to `topic_name.md`, and never author from `Lesson2`. Follow this section, [`agents/skills/acs-lesson1-only-template/SKILL.md`](agents/skills/acs-lesson1-only-template/SKILL.md), and [`agents/skills/acs-lesson-plan/SKILL.md`](agents/skills/acs-lesson-plan/SKILL.md) when writing new lessons.

### 6. Tech Trends → `updates.md`

Since the last commit, scan:

- X
- GitHub
- Hacker News
- Dev.to

Look for language, framework, and implementation trends that affect this course. Write them under **Tech Trends** in `updates.md`. Include the last-scanned date and the commit SHA you scanned from.

### 7. Missing curriculum → `updates.md`

Read every markdown file students see. List gaps under **Add to Course** in `updates.md`. Do not implement those gaps unless asked.

### 8. Smallest change

Default: update or add only. Leave the rest of each document verbatim. Do not rewrite a lesson to sound nicer. Do not restyle the repo.

### 9. Optional voice pipeline

When Dani asks to apply voice:

1. Shape the **agent reply** with `i-have-adhd` (action-first, numbered, state restated).
2. Rewrite **student-facing prose** in the teaching voice (see below).
3. Run the Technical Writer gate on the final markdown.

How to create this process in another repo:

1. Copy this `AGENTS.md`.
2. Install [i-have-adhd](https://github.com/ayghri/i-have-adhd) as a skill for agent replies.
3. Install [dani-roxberrys-teaching-voice](https://github.com/droxey/skills/tree/main/dani-roxberrys-teaching-voice) for student-facing lesson assets.
4. Treat Technical Writer as the last pass: heading scan, link check, placeholder check, [humanize](https://github.com/droxey/skills/tree/main/humanize) for leftover AI cadence.
5. Keep content authority in the lesson plan. Voice never adds curriculum.

## Docsify placeholders

Token table and course-level placeholder ops live in [`SETUP.md`](SETUP.md).

## Docsify config review

Reviewed against ACS-3220 and docsify-course. Changes baked into `index.html`:

- **Fixed duplicate `maxLevel`.** Both source repos set `maxLevel: 6` then `maxLevel: 3`. The second wins; the first is dead. This template sets `maxLevel: 3` and `subMaxLevel: 2` once.
- **Pagination script is actually loaded.** The old template configured `pagination` and never included `docsify-pagination`. ACS-3220 does.
- **GIF hover control from ACS-3220.** `docsify-gifcontrol` is in the dependency list for lesson GIFs.
- **Theme is ACS-3220 `vue.css` + pinned `docsify-themeable@0.9.0`.** Do not also load `docsify-darklight-theme` — the two stacks fight on CSS variables.
- **`cache-control: max-age=600`** matches GitHub Pages, not 180s.
- **No Make School chrome.** Favicons and `makeschool.com` service-worker entries are gone. SW whitelist includes `cdn.jsdelivr.net`.
- **Logo starts empty.** ACS-3220 points at a missing `Web/logo-icononly.svg`. Empty `logo` avoids a broken image.
- **Prism starter set:** bash, javascript, json, markdown, python, yaml. Add packs per course. ACS-3220 adds docker, nginx, python, yaml for that class.

Local preview:

```bash
npm install
npm run serve
```

Link check (local targets only; leftover placeholders are listed, not failed):

```bash
npm run check-links
```

## Lesson template

Course-level ops → [SETUP.md](SETUP.md). Lesson-level instructor notes → Lesson1 author `<details>` only (`## For curriculum authors` at the bottom). Never put skill names in `Lessons/*.md`.

Copy the starter shape from `Lessons/Lesson1.md` only, then rename to `topic_name.md`. There is no Lesson2 template. For naming, header, Author directives, Activity labels (`Activity 1` / `Activity 2`), and GOAL bars, follow [`agents/skills/acs-lesson1-only-template/SKILL.md`](agents/skills/acs-lesson1-only-template/SKILL.md) and [`agents/skills/acs-lesson-plan/SKILL.md`](agents/skills/acs-lesson-plan/SKILL.md). Structure matches ACS-3220:

- Title + one-line **GOAL**
- Timed **Agenda** with jump links
- **Objectives** with action verbs
- Timed blocks: warm-up, TT, break, activity or lab, wrap up
- `<!-- > -->` / `<!-- v -->` for `reveal-md` slides
- `## Additional Resources` (exact heading), then `## For curriculum authors` in a `<details>` wrap at the bottom (`### In Class`)

`reveal-md Lessons/` still builds `Slides/` if you want a deck. See `Reveal/README.md`.

## File map

| Path | Role |
| ---- | ---- |
| `index.html` | Docsify config and CDN dependencies |
| `README.md` | Student syllabus (Docsify home) |
| `_sidebar.md` | Searchable nav — link every published lesson |
| `_navbar.md` | Top nav |
| `Lessons/` | Session pages — starter is `Lessons/Lesson1.md` only |
| `Assignments/` | Project specs |
| `updates.md` | Tech Trends + Add to Course |
| `Web/` | Theme + service worker |
| `SETUP.md` | Course-level setup + instructor/agent ops |
| `AGENTS.md` | Agent jobs (this file) |
| `agents/skills/acs-lesson1-only-template/` | Lesson1-only starter pin |
| `agents/skills/acs-lesson-plan/` | Standing lesson-plan bars |

## Technical Writer gate

Before you call student-facing markdown done:

1. Headings match the template. Objectives use action verbs.
2. Instructor direction is only under `## For curriculum authors` at the bottom (after `## Additional Resources`) — wrap it in `<details>`, never in the header or mid-body.
3. Placeholders that should have been replaced are gone.
4. Local links resolve (`npm run check-links`).
5. Prose sounds like Dani teaching, not like a template.
6. You changed the fewest lines that finish the job.


## ACS lesson plan bars

Standing bars for lesson Markdown live in [`agents/skills/acs-lesson-plan/SKILL.md`](agents/skills/acs-lesson-plan/SKILL.md):

- Sole template: copy `Lessons/Lesson1.md` only — never author from Lesson2
- File naming: `topic_name.md` (never `LessonNN.md` as canonical content)
- Header: no Author / Session / Bars / Accuracy / MVP meta stack — open with `# Title` → `GOAL:` → agenda
- H1 is topic + optional day only — never a course code
- Additional Resources: heading is exactly `## Additional Resources` — topic sources only; never pedagogy / how-to-teach links; never rename or add parentheticals (“official first” is link order inside the section)
- Author directives: `## For curriculum authors` at the bottom after Additional Resources, contents in `<details>` (`### In Class` / facilitator / Expert follow-ups — never header or mid-body)
- Activity labels: `Activity 1` / `Activity 2` (never Hands-on); labs stay `Lab 1` / `Lab 2` — never Roman (`Lab I`)
- TT pulses: `> **ASK AUDIENCE:** <question ≤60s>` plus `<details><summary>Answer</summary>` — never open-body Question/Expected paragraphs
- Voice: on-the-job / builder; `GOAL:`; rookie/beginner on-the-job tips (never hire-bar in the plan)
- Never write `jobsim`, `JOBSIM`, or `job simulator`
- Never cite skill names in lesson Markdown
- TT: 30–40m with 3–4 mid-talk pulse checks
- Never put the word ADHD (or other diagnosis labels) in a lesson file
- Course-level ops → SETUP.md; lesson-level instructor notes → Lesson1 author details only; never put skill names in `Lessons/*.md`
