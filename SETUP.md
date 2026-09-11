# Course setup

Course-level setup and instructor/agent ops live **here**. Not in lesson bodies. Not as skill-name dumps.

This file is for instructors and agents standing up a course repo. It is not a learner syllabus. Agent jobs are in [AGENTS.md](AGENTS.md).

## Clone and placeholders

1. Clone this repo, or use it as the GitHub template.
2. Replace every `ALL_CAPS` token. Search for `COURSE_`, `REPO_NAME`, `GITHUB_ORG`, `INSTRUCTOR_EMAIL`.
3. Set `index.html` title, description, author, `repo`, `name`, `search.namespace`, and OG URLs.
4. Rewrite `README.md` as this course's syllabus. Keep the ACS-3220 section order.
5. After you add `Web/logo-icononly.svg`, set `logo: 'Web/logo-icononly.svg'` in `index.html`.

The token table lives in [AGENTS.md](AGENTS.md#docsify-placeholders).

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

Do not link this file from `_sidebar.md`. Search only sees sidebar links; keep setup off the learner nav.

## New lessons (Lesson1 only)

Copy `Lessons/Lesson1.md` → `Lessons/topic_name.md` (kebab or short TopicCase). That file is the only starter. Never author from `Lesson2`.

Link every published lesson from `_sidebar.md`.

## Lesson instructor notes

Lesson-level instructor notes go **only** in the Lesson1 author block at the bottom of the lesson:

1. After `## Additional Resources`
2. Inside `<details>` wrapping `## For curriculum authors`
3. Subheads: `### In Class`, `### Facilitator notes`, `### Expert follow-ups`

Do not put instructor prep in the learner-facing mid-body (warm-up, TT, activity, lab, wrap). Do not put it in a header LESSON PREP toggle.

## Learner-facing voice

Lessons in `Lessons/*.md` must read as **job-sim**: I/you/we on the work. No students / classroom / academic framing. Never cite skill names or generation techniques in `Lessons/*.md`.

## Agent jobs

Refresh, runtime bumps, tech trends, missing curriculum, and the rest of the agent job list live in [AGENTS.md](AGENTS.md). Read that file after this one.
