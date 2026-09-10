---
name: acs-lesson-plan
description: >-
  Use when drafting or revising ACS / Tech-at-DU course lesson plans
  (Syllabus-Template Days): naming, voice, TT structure, and ship bars for Dani
  Roxberry’s ACS courses.
---
# ACS lesson plan bars (Tech-at-DU / Dominican)

Standing rules for every ACS course lesson plan (ACS-4210, ACS-3210, ACS-2951, etc.). Apply before draft, Expert review, Writer TW-final, and PR.

## Sole template (hard)

- In Syllabus-Template, **`Lessons/Lesson1.md` is the only lesson starter.** Copy it, then rename to `topic_name.md`.
- **Never** author from `Lesson2` / `Lessons/Lesson2.md` / `Slides/Lesson2.html`. Those files are gone.
- See [`acs-lesson1-only-template`](../acs-lesson1-only-template/SKILL.md).

## File naming (hard)

- Always name lesson files **`topic_name.md`** (kebab or short TopicCase as used in the repo — e.g. `middleware.md`, `Emails.md`, `3rdPartyLibs.md`).
- **Never** use `LessonNN.md` / `Lesson05.md` as the canonical content file.
- If an old `LessonNN.md` exists, turn it into a short **pointer** to `topic_name.md`, or update README/schedule Day `NN` to link `Lessons/topic_name.md`.
- Vault / box drafts: `YYYY-MM-DD-<topic>.md` or pack-flattened `topic_name.md` — still topic-named, not LessonNN.

## Lesson titles (hard)

- H1 is **topic + optional day only** — never include the course code.
- Good: `# Sending Emails (Transactional) — Day 5`
- Bad: `# Sending Emails (Transactional) — ACS-3210 Day 5`
- Course lives in the repo / Docsify site name, not the lesson H1.

## Header (hard)

**Never** put this meta summary at the top of a lesson plan:

- Author / Authorship
- Session block / Session window / date-time
- Topic / Mode / Bars
- Accuracy check
- MVP (≤15m) as a header field

Open with `# Title`, then `⭐️ **GOAL:**`, then the elapsed agenda table. Put MVP into Why/Objectives or activity “Done when” — not a top meta stack.

**Never** put instructor / facilitator / curriculum-author directives near the top or mid-body. See **Author directives (hard)** below.

## Additional Resources (hard)

The section title is always exactly `## Additional Resources`.

Never rename it. Never add parentheticals in the heading (no `## Additional Resources (official first)`).

“Official first” is link-ordering guidance **inside** the section only.

## Heading names (hard)

Use these headings exactly:

- `## Additional Resources`
- `## For curriculum authors`
- `### In Class`
- `### Facilitator notes`
- `### Expert follow-ups`

Never rename them. Never add parentheticals. Official-first is list order under Additional Resources only.

## Voice and labels

- **Job-simulation voice only** — never students / classroom / academic framing in the plan body.
- Use **`GOAL:`** — never “destination for today” / destination-first section labels.
- Tips language: **rookie** or **beginner tips for on-the-job success** — **never** “hire-bar” in the plan (Experts may use a hiring lens in *internal* review notes only).
- Topic content only — no classroom-management directives, no roster / student-identifying info, no entrance/exit ticket wording (standup / check-in / wrap OK if job-sim phrased).

## Structure

- Copy **`Lessons/Lesson1.md` only** (never Lesson2). Shape: Elapsed / Time / Activity table, Why, Learning Objectives, Overview/TT, Activities, BREAK, Lab/Wrap, then exactly `## Additional Resources` (official sources first), then **For curriculum authors** (bottom only, `<details>`-wrapped).
- Teacher talk **30–40m** with **3–4 mid-TT ASK AUDIENCE pulse checks** (≤60s). Use this shape only — never open-body `**ASK AUDIENCE**` plus Question/Expected paragraphs:

```markdown
> **ASK AUDIENCE:** <question ≤60s>

<details>
<summary>Answer</summary>

<expected answer>

</details>
```
- Scannable structure on the overall plan and each activity block: next action, numbered steps, done state, time, ≤2m next — **without naming ADHD or any diagnosis in the lesson file**.
- Skills (for authors drafting — do **not** cite these skill names in the lesson Markdown): [dani-roxberrys-teaching-voice](sand-workflow:dani-roxberrys-teaching-voice), [write-like-you-talk](sand-workflow:write-like-you-talk), [dani-roxberry-s-social-learning](sand-workflow:dani-roxberry-s-social-learning).



## Activity labels (hard)

- Use **`Activity 1` / `Activity 2`** for primary practice blocks — **never** `Hands-on` / `Hands-on I`.
- Number labs with **Arabic numerals**: `Lab 1`, `Lab 2` — **never** Roman (`Lab I`, `Lab II`).
- Keep the same numeral style in the agenda table, headings, and in-body cross-references.


## No diagnosis labels in the plan (hard)

- **Never** put the word **ADHD** (or other diagnosis/neurotype labels) in a lesson plan — not in headings, body, facilitator notes, or resources.
- Prefer neutral labels: `### In Class`, next-action / done-when blocks, pulse checks.
- Authors may still *use* scannable / write-like-you-talk habits when drafting; just don’t name the habit or diagnosis in the shipped Markdown.

## Author directives (hard)

Any directive for **instructors**, **facilitators**, or **curriculum authors** belongs at the **bottom** of the lesson — after Additional Resources — under:

```markdown
## Additional Resources

- Official docs first…

<details>
<summary>For curriculum authors</summary>

## For curriculum authors

### In Class
### Facilitator notes
### Expert follow-ups

</details>
```

- Wrap `## For curriculum authors` and its subsections in a `<details>` block after Additional Resources.
- Do **not** put these in the header, in a top callout, or mid-body.
- Learner-facing body stays topic-only (GOAL, agenda, Why, TT, activities, wrap, resources).
- Internal Expert accuracy notes may live under Reviews/ instead of the lesson body; if they must ship in-file, nest them under **For curriculum authors**.

## Accuracy and ship

1. Calendar order when updating multiple courses (soonest class first).
2. 2026 stack accuracy + Expert technical review (Go → Go Engineer, Node/JS → Node Engineer, etc.).
3. Always create a **NEW** draft file — never overwrite prior drafts in place.
4. Writer [technical-writer-pipeline](sand-workflow:technical-writer-pipeline) before anything is final.
5. Ship via droxey PR (`dani@musexmachine.com` authorship) → Curricula Docsify/sidebar after merge.
6. Dead links: [broken-link-recovery](sand-workflow:broken-link-recovery) + Google Drive copies / additional materials.

## Do not invent

Never invent framework APIs — verify with Context7 / official docs (Echo, Nodemailer, Docsify, etc.).
