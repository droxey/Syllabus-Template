---
name: acs-lesson1-only-template
description: >-
  Use when drafting or copying a Syllabus-Template lesson. Lesson1.md is the
  only starter. Never author from Lesson2.
---
# Lesson1 is the sole Syllabus-Template starter

Syllabus-Template ships **one** lesson file to copy-from-and-rename: [`Lessons/Lesson1.md`](../../../Lessons/Lesson1.md).

## Hard rules

- **Copy `Lessons/Lesson1.md` only.** Rename the copy to `topic_name.md` (kebab or short TopicCase).
- **Never** author from `Lesson2`, `Lessons/Lesson2.md`, or `Slides/Lesson2.html`. Those files are removed.
- **Never** treat `LessonNN.md` as published canonical content. Lesson1.md is a starter, not a Day 1 filename you keep after you fill the course.
- Ship bars for naming, voice, TT, and labels live in [`acs-lesson-plan`](../acs-lesson-plan/SKILL.md). This skill only pins the starter file.

## How to start a session

1. Copy `Lessons/Lesson1.md` → `Lessons/topic_name.md`.
2. Replace `LESSON_TITLE` and the placeholder CONCEPT / activity copy.
3. Link the new file from `_sidebar.md` and the syllabus schedule. Search only sees sidebar links.
4. Keep the locked bars below. Do not invent a second starter.

## Locked bars (do not drop)

These must appear in every lesson copied from Lesson1:

| Bar | Required shape |
| --- | -------------- |
| Resources heading | Exactly `## Additional Resources` |
| Author notes | After Additional Resources, `<details>` wrapping `## For curriculum authors` |
| In-class prep | `### In Class` inside that `<details>` (not a header LESSON PREP toggle) |
| TT pulses | Blockquote `> **ASK AUDIENCE:** <question ≤60s>` plus `<details><summary>Answer</summary>` — 3–4 mid-talk. Never open-body Question/Expected paragraphs. |
| Practice labels | `Activity 1` / `Activity 2` (labs: `Lab 1`, `Lab 2`) — never Roman, never `Hands-on` |
| Diagnosis labels | Never put ADHD (or other diagnosis/neurotype words) in the lesson file |
| H1 | Topic + optional day only — never a course code |

ASK AUDIENCE pulse shape:

```markdown
> **ASK AUDIENCE:** <question ≤60s>

<details>
<summary>Answer</summary>

<expected answer>

</details>
```

Author-notes shape:

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

## Out of scope

- Do not rewrite other ACS course repos from this skill. This pin is Syllabus-Template only.
- Do not restore Lesson2 as a "lab day" twin. Lab-heavy days still start from Lesson1 and keep Activity 1 / Activity 2.
