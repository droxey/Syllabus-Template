# Course setup

Course-level setup and instructor/agent ops live **here**. Not in lesson bodies. Not as skill-name dumps.

This file is for instructors and agents standing up a course repo. It is not a published syllabus. Agent jobs are in [AGENTS.md](AGENTS.md).

## Clone and placeholders

1. Clone this repo, or use it as the GitHub template.
2. Replace every `ALL_CAPS` token. Search for `COURSE_`, `REPO_NAME`, `GITHUB_ORG`, `INSTRUCTOR_EMAIL`.
3. Set `index.html` title, description, author, `repo`, `name`, `search.namespace`, and OG URLs.
4. Rewrite `README.md` as this course's syllabus. Keep the ACS-3220 section order.
5. After you add `Web/logo-icononly.svg`, set `logo: 'Web/logo-icononly.svg'` in `index.html`.

| Token | Where | Example |
| ----- | ----- | ------- |
| `COURSE_TITLE` | `index.html` title + OG, `README.md` H1 | `ACS 3220: Docker, DevOps, & Deployments` |
| `COURSE_NAME` | Docsify sidebar name | `ACS 3220` |
| `COURSE_DESCRIPTION` | meta description, syllabus pitch | one paragraph |
| `COURSE_INSTRUCTOR` | author meta | `Dani Roxberry` |
| `INSTRUCTOR_EMAIL` | author meta | `dani@musexmachine.com` |
| `COURSE_KEYWORDS` | meta keywords | `docker, devops, deployment` |
| `GITHUB_ORG` | OG URLs, `repo` | `droxey` or `Tech-at-DU` |
| `REPO_NAME` | OG URLs, `repo`, search namespace | `ACS-3220-Docker-DevOps-Deployments` |

## Docsify serve and GitHub Pages

```bash
npm install
npm run serve
```

Open `http://localhost:3000`. Enable GitHub Pages from the default branch (site root `/`).

Link check (local targets only; leftover placeholders are listed, not failed):

```bash
npm run check-links
```

Add course-specific Prism languages in `index.html` if you need them (`prism-docker`, `prism-go`, …).

Do not link this file from `_sidebar.md`. Search only sees sidebar links; keep setup off the published nav.

## Docsify config (already baked in)

Reviewed against ACS-3220 and docsify-course. Do not re-fight these:

- **`maxLevel` once.** Both source repos set `maxLevel: 6` then `maxLevel: 3`. The second wins; the first is dead. This template sets `maxLevel: 3` and `subMaxLevel: 2` once.
- **Pagination script is loaded.** The old template configured `pagination` and never included `docsify-pagination`. ACS-3220 does.
- **GIF hover control from ACS-3220.** `docsify-gifcontrol` is in the dependency list for lesson GIFs.
- **Theme is ACS-3220 `vue.css` + pinned `docsify-themeable@0.9.0`.** Do not also load `docsify-darklight-theme` — the two stacks fight on CSS variables.
- **`cache-control: max-age=600`** matches GitHub Pages, not 180s.
- **No Make School chrome.** Favicons and `makeschool.com` service-worker entries are gone. SW whitelist includes `cdn.jsdelivr.net`.
- **Logo starts empty.** ACS-3220 points at a missing `Web/logo-icononly.svg`. Empty `logo` avoids a broken image.
- **Prism starter set:** bash, javascript, json, markdown, python, yaml. Add packs per course.

## New lessons (Lesson1 only)

Copy `Lessons/Lesson1.md` → `Lessons/topic_name.md` (kebab or short TopicCase). That file is the only starter. Never author from `Lesson2`. Never keep `LessonNN.md` as canonical content.

Link every published lesson from `_sidebar.md` and the syllabus schedule.

Shape:

- Title + one-line **GOAL**
- Timed **Agenda** with jump links
- **Objectives** with action verbs
- Timed blocks: warm-up, TT, break, activity or lab, wrap up
- `<!-- > -->` / `<!-- v -->` for `reveal-md` slides
- `## Additional Resources` (exact heading), then `## For curriculum authors` in a `<details>` wrap at the bottom (`### In Class`)

`reveal-md Lessons/` still builds `Slides/` if you want a deck. See `Reveal/README.md`.

## Lesson instructor notes

Lesson-level instructor notes go **only** in the Lesson1 author block at the bottom of the lesson:

1. After `## Additional Resources`
2. Inside `<details>` wrapping `## For curriculum authors`
3. Subheads: `### In Class`, `### Facilitator notes`, `### Expert follow-ups`

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

Do not put instructor prep in the published mid-body (warm-up, TT, activity, lab, wrap). Do not put it in a header LESSON PREP toggle. `### In Class` is not at the top after the agenda.

## Additional Resources

The heading is always exactly `## Additional Resources`. Never rename it. Never add parentheticals.

This section is **topic sources only**: official docs, APIs, specs, and short topic references. Official sources first — that is list order inside the section, not heading text.

Do not put pedagogy or how-to-teach links here. Teaching notes belong under `## For curriculum authors`.

## Published course voice

Published lesson, syllabus, activity, and README prose is **on-the-job / builder** voice: practical, direct, example-first, engineering-grounded. I/you/we.

Never frame that prose as students, classroom, or academic.

Never write `jobsim`, `JOBSIM`, or `job simulator`.

Never cite skill names or generation techniques in `Lessons/*.md`.

Use **`GOAL:`**. Rookie or beginner tips for on-the-job success — never “hire-bar” in the plan.

## File map

| Path | Role |
| ---- | ---- |
| `SETUP.md` | This file — course setup + instructor/agent ops |
| `AGENTS.md` | Agent jobs |
| `index.html` | Docsify config and CDN dependencies |
| `README.md` | Published syllabus (Docsify home) |
| `_sidebar.md` | Searchable nav — link every published lesson |
| `_navbar.md` | Top nav |
| `Lessons/` | Session pages — starter is `Lessons/Lesson1.md` only |
| `Assignments/` | Project specs |
| `updates.md` | Tech Trends + Add to Course |
| `Web/` | Theme + service worker |
| `agents/skills/acs-lesson1-only-template/` | Lesson1-only starter pin |
| `agents/skills/acs-lesson-plan/` | Standing lesson-plan bars |

## Agent jobs

Refresh, runtime bumps, tech trends, missing curriculum, and the rest of the agent job list live in [AGENTS.md](AGENTS.md). Read that file after this one.
