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
| ----- | ---- | ------- |
| `COURSE_TITLE` | `index.html` title + OG, `README.md` H1 | `ACS 3220: Docker, DevOps, & Deployments` |
| `COURSE_NAME` | Docsify sidebar name | `ACS 3220` |
| `COURSE_DESCRIPTION` | meta description, syllabus pitch | one paragraph |
| `COURSE_INSTRUCTOR` | author meta | `Dani Roxberry` |
| `INSTRUCTOR_EMAIL` | author meta | `dani@musexmachine.com` |
| `COURSE_KEYWORDS` | meta keywords | `docker, devops, deployment` |
| `GITHUB_ORG` | OG URLs, `repo` | `droxey` or `Tech-at-DU` |
| `REPO_NAME` | OG URLs, `repo`, search namespace | `ACS-3220-Docker-DevOps-Deployments` |

## Docsify preview and GitHub Pages

```bash
npm install
npm run serve
```

Open `http://localhost:3000`. Enable GitHub Pages from the default branch.

Link check (local targets only; leftover placeholders are listed, not failed):

```bash
npm run check-links
```

Add course-specific Prism languages in `index.html` if you need them (`prism-docker`, `prism-go`, …).

Do not link this file from `_sidebar.md`. Search only sees sidebar links; keep setup off the published nav.

## New lessons (Lesson1 only)

Copy `Lessons/Lesson1.md` → `Lessons/topic_name.md` (kebab or short TopicCase). That file is the only starter. Never author from `Lesson2`.

Link every published lesson from `_sidebar.md`.

## Lesson instructor notes

Lesson-level instructor notes go **only** in the Lesson1 author block at the bottom of the lesson:

1. After `## Additional Resources`
2. Inside `<details>` wrapping `## For curriculum authors`
3. Subheads: `### In Class`, `### Facilitator notes`, `### Expert follow-ups`

Do not put instructor prep in the published mid-body (warm-up, TT, activity, lab, wrap). Do not put it in a header LESSON PREP toggle.

## Additional Resources

The heading is always exactly `## Additional Resources`. Never rename it. Never add parentheticals.

This section is **topic sources only**: official docs, APIs, specs, and short topic references. Official sources first (list order, not heading text).

Do **not** put pedagogy or how-to-teach links here. Teaching notes belong under `## For curriculum authors`.

## Course content voice

Published lesson, syllabus, activity, and README prose is **on-the-job / builder** voice: practical, direct, example-first, I/you/we on the work.

Never frame that prose as students, classroom, or academic.

Never write `jobsim`, `JOBSIM`, or `job simulator`.

Never cite skill names in published course Markdown.

## Agent jobs

Refresh, runtime bumps, tech trends, missing curriculum, and the rest of the agent job list live in [AGENTS.md](AGENTS.md). Read that file after this one.
