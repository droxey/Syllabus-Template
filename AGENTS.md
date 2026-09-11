# AGENTS.md

This repo is Dani Roxberry's course-ops template. Clone it to start a new course. Agents following this file operate the template.

Course-level ops live in [SETUP.md](SETUP.md). This file is agent jobs. Lesson-level instructor notes → Lesson1 author `<details>` only. Never put skill names in `Lessons/*.md`.

Published course pages live in Docsify. The layout comes from [Tech-at-DU/ACS-3220-Docker-DevOps-Deployments](https://github.com/Tech-at-DU/ACS-3220-Docker-DevOps-Deployments), with placeholders and dark/light theme from [droxey/docsify-course](https://github.com/droxey/docsify-course).

## Next action

1. Read this file and [SETUP.md](SETUP.md). Course-level ops → SETUP.md.
2. Do the smallest change that finishes the request.
3. Lesson-level instructor notes → Lesson1 author `<details>` only (`## For curriculum authors` at the bottom). Never put skill names in `Lessons/*.md`.
4. Keep instructor prep out of the published mid-body.
5. Gate finished published markdown through the Technical Writer pass.

## Voice and output

Three layers. Do not mix them.

| Layer | When | What |
| ----- | ---- | ---- |
| **i-have-adhd** | Agent replies to Dani | Lead with the next action. Number the steps. Restate state each turn. No tangents. Make the win visible. |
| **Teaching voice** | Published lesson, syllabus, activity, README prose | On-the-job / builder: practical, direct, example-first, engineering-grounded, clear over polished, verification-oriented, tradeoff-aware. I/you/we. Never students / classroom / academic. Never write `jobsim`, `JOBSIM`, or `job simulator`. Never cite skill names. |
| **Technical Writer** | Final human-readable markdown | Structure, headings, links, placeholders, and a humanize pass. This is the last gate before commit. |

ADHD-friendly replies stay in the agent conversation. They do not leak into published course pages. Voice bars for course content live in [SETUP.md](SETUP.md).

## Agent jobs

### 1. Create a new course from this repo

Follow [SETUP.md](SETUP.md): clone, replace placeholders, rewrite the syllabus, copy `Lessons/Lesson1.md` only to `topic_name.md`, serve Docsify, enable GitHub Pages.

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
- Live-code the first five minutes only; narrate the failure the room will hit
- Breakouts of 3–4; early finishers help the room
- One physical or visual beat per session when you can (whiteboard trace, comic, status page)

Do not invent a new assignment unless the request says so.

### 5. Instructor notes stay at the bottom

Follow [SETUP.md](SETUP.md). Lesson-level instructor notes live only in the Lesson1 author `<details>` (`## For curriculum authors` after `## Additional Resources`). That resources section is topic sources only — no pedagogy or how-to-teach links.

### 6. Tech Trends → `updates.md`

Since the last commit, scan:

- X
- GitHub
- Hacker News
- Dev.to

Look for language, framework, and implementation trends that affect this course. Write them under **Tech Trends** in `updates.md`. Include the last-scanned date and the commit SHA you scanned from.

### 7. Missing curriculum → `updates.md`

Read every published markdown file. List gaps under **Add to Course** in `updates.md`. Do not implement those gaps unless asked.

### 8. Smallest change

Default: update or add only. Leave the rest of each document verbatim. Do not rewrite a lesson to sound nicer. Do not restyle the repo.

### 9. Optional voice pipeline

When Dani asks to apply voice:

1. Shape the **agent reply** with `i-have-adhd` (action-first, numbered, state restated).
2. Rewrite **published course prose** in the teaching voice (see the table above and [SETUP.md](SETUP.md)).
3. Run the Technical Writer gate on the final markdown.

How to create this process in another repo:

1. Copy this `AGENTS.md` and [SETUP.md](SETUP.md).
2. Install [i-have-adhd](https://github.com/ayghri/i-have-adhd) as a skill for agent replies.
3. Install [dani-roxberrys-teaching-voice](https://github.com/droxey/skills/tree/main/dani-roxberrys-teaching-voice) for published lesson assets.
4. Treat Technical Writer as the last pass: heading scan, link check, placeholder check, [humanize](https://github.com/droxey/skills/tree/main/humanize) for leftover AI cadence.
5. Keep content authority in the lesson plan. Voice never adds curriculum.

## Lesson template

Course-level ops → [SETUP.md](SETUP.md). Lesson-level instructor notes → Lesson1 author `<details>` only. Never put skill names in `Lessons/*.md`.

Copy `Lessons/Lesson1.md` only → `topic_name.md`. Naming, header, Author directives, Activity labels, and GOAL bars: [`agents/skills/acs-lesson1-only-template/SKILL.md`](agents/skills/acs-lesson1-only-template/SKILL.md) and [`agents/skills/acs-lesson-plan/SKILL.md`](agents/skills/acs-lesson-plan/SKILL.md).

## File map

See [SETUP.md](SETUP.md) for the course file map. This file is agent jobs.

## Technical Writer gate

Before you call published course markdown done:

1. Headings match the template. Objectives use action verbs.
2. Instructor direction is only under `## For curriculum authors` at the bottom (after `## Additional Resources`) — wrap it in `<details>`, never in the header or mid-body. See [SETUP.md](SETUP.md).
3. `## Additional Resources` is topic sources only (no pedagogy / how-to-teach links).
4. Placeholders that should have been replaced are gone.
5. Local links resolve (`npm run check-links`).
6. Prose is on-the-job / builder — never students / classroom / academic; never `jobsim` / `JOBSIM` / `job simulator`; never skill-name cites.
7. You changed the fewest lines that finish the job.

## ACS lesson plan bars

Standing bars for lesson Markdown live in [`agents/skills/acs-lesson-plan/SKILL.md`](agents/skills/acs-lesson-plan/SKILL.md). Course-level ops live in [SETUP.md](SETUP.md).

- Course-level ops → SETUP.md; lesson-level instructor notes → Lesson1 author details only; never put skill names in `Lessons/*.md`
- Sole template: copy `Lessons/Lesson1.md` only — never author from Lesson2
- File naming: `topic_name.md` (never `LessonNN.md` as canonical content)
- Header: no Author / Session / Bars / Accuracy / MVP meta stack — open with `# Title` → `GOAL:` → agenda
- H1 is topic + optional day only — never a course code
- Additional Resources: heading is exactly `## Additional Resources` — topic sources only; never pedagogy / how-to-teach links; never rename or add parentheticals
- Author directives: `## For curriculum authors` at the bottom after Additional Resources, contents in `<details>` (`### In Class` / facilitator / Expert follow-ups — never header or mid-body)
- Activity labels: `Activity 1` / `Activity 2` (never Hands-on); labs stay `Lab 1` / `Lab 2` — never Roman (`Lab I`)
- TT pulses: `> **ASK AUDIENCE:** <question ≤60s>` plus `<details><summary>Answer</summary>` — never open-body Question/Expected paragraphs
- Voice: on-the-job / builder; `GOAL:`; rookie/beginner on-the-job tips (never hire-bar in the plan)
- Never write `jobsim`, `JOBSIM`, or `job simulator`
- TT: 30–40m with 3–4 mid-talk pulse checks
- Never put the word ADHD (or other diagnosis labels) in a lesson file
