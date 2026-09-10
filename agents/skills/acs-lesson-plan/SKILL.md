---
name: acs-lesson-plan
description: >-
  Use when drafting or revising ACS / Tech-at-DU course lesson plans
  (Syllabus-Template Days): naming, voice, TT structure, and ship bars for Dani
  Roxberry’s ACS courses.
---
# ACS lesson plan bars (Tech-at-DU / Dominican)

Standing rules for every ACS course lesson plan (ACS-4210, ACS-3210, ACS-2951, etc.). Apply before draft, Expert review, Writer TW-final, and PR.

## File naming (hard)

- Always name lesson files **`topic_name.md`** (kebab or short TopicCase as used in the repo — e.g. `middleware.md`, `Emails.md`, `3rdPartyLibs.md`).
- **Never** use `LessonNN.md` / `Lesson05.md` as the canonical content file.
- If an old `LessonNN.md` exists, turn it into a short **pointer** to `topic_name.md`, or update README/schedule Day `NN` to link `Lessons/topic_name.md`.
- Vault / box drafts: `YYYY-MM-DD-<topic>.md` or pack-flattened `topic_name.md` — still topic-named, not LessonNN.


## Header (hard)

**Never** put this meta summary at the top of a lesson plan:

- Author / Authorship
- Session block / Session window / date-time
- Topic / Mode / Bars
- Accuracy check
- MVP (≤15m) as a header field

Open with `# Title`, then `⭐️ **GOAL:**`, then the elapsed agenda table (and ADHD run-of-show if used). Put MVP into Why/Objectives or activity “Done when” — not a top meta stack.

## Voice and labels

- **Job-simulation voice only** — never students / classroom / academic framing in the plan body.
- Use **`GOAL:`** — never “destination for today” / destination-first section labels.
- Tips language: **rookie** or **beginner tips for on-the-job success** — **never** “hire-bar” in the plan (Experts may use a hiring lens in *internal* review notes only).
- Topic content only — no classroom-management directives, no roster / student-identifying info, no entrance/exit ticket wording (standup / check-in / wrap OK if job-sim phrased).

## Structure

- Syllabus-Template / Lesson09 shape: Elapsed / Time / Activity table, Why, Learning Objectives, Overview/TT, Activities, BREAK, Lab/Wrap, Additional Resources.
- Teacher talk **30–40m** with **3–4 mid-TT active-learning audience questions** (pulse checks ≤60s, expected answer named).
- ADHD structure on the overall plan and each activity block: next action, numbered steps, done state, time, ≤2m next.
- Skills: [dani-roxberrys-teaching-voice](sand-workflow:dani-roxberrys-teaching-voice), [write-like-you-talk](sand-workflow:write-like-you-talk), [dani-roxberry-s-social-learning](sand-workflow:dani-roxberry-s-social-learning), [i-have-adhd](sand-workflow:i-have-adhd).

## Accuracy and ship

1. Calendar order when updating multiple courses (soonest class first).
2. 2026 stack accuracy + Expert technical review (Go → Go Engineer, Node/JS → Node Engineer, etc.).
3. Always create a **NEW** draft file — never overwrite prior drafts in place.
4. Writer [technical-writer-pipeline](sand-workflow:technical-writer-pipeline) before anything is final.
5. Ship via droxey PR (`dani@musexmachine.com` authorship) → Curricula Docsify/sidebar after merge.
6. Dead links: [broken-link-recovery](sand-workflow:broken-link-recovery) + Google Drive copies / additional materials.

## Do not invent

Never invent framework APIs — verify with Context7 / official docs (Echo, Nodemailer, Docsify, etc.).
