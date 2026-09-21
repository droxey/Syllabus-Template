---
name: acs-lesson-plan
description: >-
  Use when drafting or revising ACS lesson plans: in-session consumable only,
  SETUP.md for course ops, on-the-job voice (never jobsim label), engineer
  language (section not beat; no theater slang), topic-only resources, Lesson1
  shape.
---
# ACS lesson plan bars (Tech-at-DU / Dominican)

Standing rules for every ACS course lesson plan (ACS-4210, ACS-3210, ACS-2951, etc.). Apply before draft, Expert review, Writer TW-final, and PR. 

ACS repositories are located at https://github.com/orgs/Tech-at-DU/repositories. Course repositories are prefixed with `ACS-` + a four digit integer.

## Consumer (hard)

- Shipped lesson Markdown is **consumable in-session** — topic, GOAL, agenda, TT, activities, resources.
- **Never** put skill names, sand-workflow links, pipeline labels, or generation-technique names in any lesson file (body or author notes).
- **Never** write **jobsim**, **JOBSIM**, **job-sim**, or **job simulator** in lesson or course Markdown.
- Authors may use internal drafting habits; do not cite them in the repo.


## AI-writing gate (hard — Writer, Dani 2026-09-21)

AI-writing detection stays on **Writer** (no separate detection bot).

Applies to all ACS course/lesson Markdown: **Lessons/**, course **README**s, and learner-facing **SETUP** prose.

1. After TW-final or any humanize/polish, run [ai-writing-detection](sand-workflow:ai-writing-detection) **before** calling the draft done.
2. **Fail closed:** do not hand back ready-to-PR / ship until detection passes, **or** explicitly flag structured-template false-positive risk and list what was checked.
3. If flags are real, rewrite and re-run until pass — never ship known high-signal AI tells.
4. Teacher routes ACS lesson/course prose through Writer for this gate before droxey PRs.


## Course vs lesson ops (hard)

- **Course-level** setup / instructor / agent ops → **`SETUP.md`** at the course repo root (Syllabus-Template and each ACS course). Not in lesson bodies.
- **Lesson-level** instructor / facilitator notes → only under `## For Curriculum Authors` inside the bottom `<details>` after `## Additional Resources` (Lesson1 template). Never header, never mid-body.

## Additional Resources (hard)

- Heading always exactly `## Additional Resources`.
- Link **topic sources only** (official stack docs, APIs, short topic videos).
- **Never** link pedagogy / how-to-teach materials (e.g. “how to build a course,” classroom technique write-ups).


## Lesson title + ship filename (hard)

- **H1 = topic only** — no date, version, or course code in the heading.

- **H1:** topic title (+ optional day) only — never date, never version, no stack tags.
  - Example: `# Intro to WebSockets — Day 6`
- **Local draft filename:** include **date and version** with the topic slug — e.g. `2026-09-17-WebSocketsIntro-v2.md`. Date and version live in the **filename**, not the H1.
- **When pushing to GitHub:** ship as the **original topic filename** (`Lessons/WebSocketsIntro.md`) — strip date/version from the path. Keep `topic_name.md` as the repo canonical name.


## File naming (hard)

- Always name lesson files **`topic_name.md`**. Never use `LessonNN.md` as canonical content (pointer OK).


## Header (hard)

Never open with Author / Session / Bars / Accuracy / MVP meta. Open with `# Title`, then `⭐️ **GOAL:**`, then Lesson1 agenda.

## Heading names (hard)

Exact: `## Additional Resources`, `## For Curriculum Authors`, `### In Class`, `### Facilitator Notes`, `### Expert Follow-Ups`. All lesson headings use **Title Case** (small words a/an/the/and/or/but/for/of/in/on/to stay lowercase unless first/last).

## Voice and labels

- **On-the-job / builder voice only** — never students, classroom, or academic framing. Prefer the room, the team, this session, on-the-job tips.
- Use **`GOAL:`**. Callouts: **`PROTIP:`** (do this) and **`BE AWARE:`** (trap). Never hire-bar. Never “rookie tip/trap”.
- No roster / identifying info; no entrance/exit ticket wording.

## Structure

- Sole template: Syllabus-Template `Lessons/Lesson1.md` — [acs-lesson1-only-template](sand-workflow:acs-lesson1-only-template).
- TT 30–40m with 3–4 ASK AUDIENCE pulses (blockquote + answer `<details>`).
- No ADHD / diagnosis labels — use `### In Class`.

## Pulse checks (hard)

```markdown
> **ASK AUDIENCE:** <question ≤60s>

<details>
<summary>Answer</summary>

<expected answer>

</details>
```

## Activity labels (hard)

`Activity 1` / `Activity 2`; `Lab 1` / `Lab 2` Arabic only — never Hands-on, never Roman.

Every Activity/Lab header **must include a topic title** after the number:

```markdown
## [**25m**] 💻 Activity 1: Analyze Hacker News High Ranking Posts
```

Never bare `Activity 1` / `Activity 2` / `Lab 1` / `Lab 2`. Agenda links must match.

## Author directives (hard)

Bottom after Additional Resources, wrapped in `<details><summary>For Curriculum Authors</summary>…</details>` with `### In Class` / Facilitator notes / Expert follow-ups. Still no skill names, no jobsim labels, no pedagogy resource links.


## Engineer language (hard)

- Narrative outline parts are **sections** — never **beat** / **beats** / four-beat / “spine.”
- Callouts: **`PROTIP:`** and **`BE AWARE:`** only — never rookie tip/trap.
- No workshop or theater slang (vibe dump, plot/props, skateboard write-up).
- No coach-buzz in learner body: high-signal, spine, receipt(s), steal/stealing, travels/lands, foggy, stranger-as-reader, ship/shipped (metaphor), PR review energy, HN points, busy engineer’s time, Future-you, demos wobble, stack dump, problem statement (as slogan), thin write-up, shareable/not yet status labels, kill (as metaphor), handoff across time. Prefer plain eng words (outline, evidence, reuse, unclear, reader, publish, short draft, ready to link).
- No classroom leaks: prefer **session** / **team** / **teammate** over block / cohort / partner sticky. Wrap notes are optional notes, not stickies.
- Never **sharable** (typo). Prefer “draft you can link” / README / doc over “shareable.”
- Soft careers framing: prefer **final project / demo** over production cut when that metaphor reads off.
- Avoid em-dash negations like `X — not Y` in GOAL/objectives; state the positive target.
- Still never skill names, jobsim labels, or pedagogy links (see Consumer / Additional Resources).



## TT / Activity variety (hard — keep Lesson1 shell)

Keep Title → GOAL → Agenda → timed H2s → ASK AUDIENCE wrapper → Activity 1/2 titles → Additional Resources → author footer fixed. Vary *inside* TT and Activities:

1. **Rotate openers** — failure autopsy, bad paragraph, live demo, wrong-tool contrast, etc.
2. **Mix evidence types** — ticket, log, PR comment, broken UI, rough vs smoothed draft, etc.
3. **Change Activity artifact surface** — doc, issue body, terminal paste, 20s demo, etc.
4. **Pulse job variety** — A/B, spot-bug, predict, what’s missing (same ASK AUDIENCE + details shape).
5. **Asymmetric TT section lengths** — short punchy section next to a longer worked example.
6. **Example domain rotation across days** — chat, tickets, e-commerce, auth email, JSON, etc.
7. **Activity body texture** — checklist, bad→good rewrite, constraint box, demo prompt.
8. **One speakable imperfect line in TT** — hedge or “we skip this tonight” so talk track isn’t brochure-smooth.

Do not vary the hard scaffold listed under Structure / Pulse checks / Activity labels / Author directives.


## Activity callouts + list fences (hard)

Applies to **Activity 1 / Activity 2 / Lab 1 / Lab 2 only** — not Warm Up, not TT.

Order inside an Activity:
1. Header with topic title
2. `> **✅ DONE WHEN:** … (or other allowed ✅ labels)`
3. Numbered steps (`1.` each step)
4. Optional `> **📈 PROTIP:** …` and/or `> **‼️ BE AWARE:** …` (or other allowed labels) (blockquotes)
5. Optional `> **FINISHED EARLY?** …`

Rules:
- **DONE WHEN** is a blockquote callout under the header (`> **DONE WHEN:**`), not bare bold body text.
- Fenced code nested under a list item: blank line, then fence indented **4 spaces**.
- Fill-in cards / feedback maps use ` ```text ` fences.
- **PROTIP** / **BE AWARE** / **FINISHED EARLY?** are blockquotes in Activities: `> **PROTIP:** …`, `> **BE AWARE:** …`, `> **FINISHED EARLY?** …`
- Do **not** convert Warm Up or TT tip lines to this Activity callout layout.

## No ≤2m notes (hard)

Never write `≤2m`, `<=2m`, or “2m next/wrap/sticky/note” scaffolding in ACS lesson Markdown (learner body or author notes). Use plain next-step language only when needed, without the ≤2m label.


## Title Case headings (hard)

All Markdown headings (`#`–`###`) in ACS lesson plans use **Title Case**. Keep short words lowercase unless first or last (`a`, `an`, `the`, `and`, `or`, `but`, `for`, `of`, `in`, `on`, `to`, `from`, `by`, `with`). Hyphenated words capitalize each part (`Write-Up`, `Follow-Ups`). Timed/emoji prefixes stay as-is; title-case the topic words. Canonical author headings: `## For Curriculum Authors`, `### Facilitator Notes`, `### Expert Follow-Ups`.


## Section-only edits (hard)

Never fully rewrite ACS lesson plans, course READMEs, `SETUP.md`, sidebars, or other course Markdown. **Patch the relevant section(s) only** — keep untouched headings, activities, resources, and author notes intact unless the ask names them. New file only when Dani explicitly asks for a new draft / new topic file.


## Learner-facing resource (hard)

Lesson Markdown is a **topic resource for learners**, not a facilitator script.

- Stay on topic. No pedagogy / how-to-teach / classroom-management coaching in the learner body.
- **Never** tell the instructor what to say (`Say:`, scripted quotes for the teacher, “tell the room…”). Speakable lines for *learners* are OK when they are content (e.g. ASK AUDIENCE questions).
- Instructor / facilitator directions only under `## For Curriculum Authors` inside the bottom `<details>` — never outside it.
- Prefer plain eng words. Define any acronym on first use (or avoid it). No undefined jargon.


## Presenting lesson plans (hard)

Whenever you present, deliver, or announce a lesson plan to Dani, **always attach the Markdown file for download** (`SendToUser` attachment / file://). Path alone is not enough.


## Callout emoji + label variations (hard)

Always prefix callouts with the fixed emoji. Rotate the **ALL-CAPS** label from the allowed set (variation across a lesson / over days). Keep blockquote form in Activities for done/tip/aware/early; GOAL stays on the `⭐️ **LABEL:**` line; pulses stay `> **💬 LABEL:**`.

| Emoji | Role | Allowed ALL-CAPS labels (rotate) |
| --- | --- | --- |
| ✅ | Done state | `DONE WHEN`, `DONE`, `SHIP WHEN`, `COMPLETE WHEN`, `READY WHEN` |
| ‼️ | Trap / caution | `BE AWARE`, `WATCH OUT`, `TRAP`, `CAUTION`, `DON’T`, `PITFALL` |
| 💬 | Pulse / check | `ASK QUESTION`, `ASK AUDIENCE`, `QUICK CHECK`, `YOUR TURN` |
| 📈 | Tip | `PROTIP`, `TIP`, `SHORTCUT`, `DO THIS` |
| ⭐️ | Session goal | `GOAL`, `TARGET`, `OUTCOME`, `TODAY` |

Examples:

```markdown
⭐️ **GOAL:** …

> **💬 ASK QUESTION:** …

> **✅ DONE WHEN:** …

> **📈 PROTIP:** …

> **‼️ BE AWARE:** …
```

Do not invent labels outside the table. Do not drop the emoji. `FINISHED EARLY?` stays its own Activity stretch callout (unchanged by this table).


## Tip / trap callout placement (hard)

Do **not** end every Activity with the full set of 📈 tip + ‼️ trap (+ extra 📈). Mix it up.

- Per Activity: usually **0–2** of {📈 tip-family, ‼️ trap-family} — not all three stacked every time.
- Place most tip/trap callouts in **relevant spots** across the plan (Warm Up, after a TT section, beside an example, Wrap) — not only at Activity footers.
- Still use ✅ done-state on Activities; 💬 pulses mid-TT; ⭐️ goal once at top.
- Rotate allowed ALL-CAPS labels (see Callout emoji + label variations).


## Adjacent blockquotes (hard)

When two or more callout blockquotes sit back-to-back, **do not leave a blank line between them**. Stack them on consecutive lines:

```markdown
> **✅ DONE WHEN:** …
> **📈 SHORTCUT:** …
> **FINISHED EARLY?** …
```

Blank lines still separate a blockquote from non-blockquote prose or code fences.


## Gradescope (hard)

Do **not** put Gradescope links, drill names, or “submit on Gradescope” language in ACS **lesson plans** or course **README**s unless that assignment still exists as a real artifact in the course repo (and Dani confirmed it is live). Prefer in-repo deliverables (GitHub, Gradescope-free rubrics, project paths). During cleanup, remove the reference entirely — do not leave “INSERT LINK HERE” stubs.


## Sample instructions (hard)

When telling learners to copy a code sample from the plan into their editor, use **paste** — never **port**.

- Yes: `Paste the basic-types example.`
- No: `Port the basic-types example.`

Do not change unrelated “port” words (TCP port, `localhost:3000`, airport, etc.).


## Wording: cleanup not cleanup (hard)

In user-facing ACS course work (chat, PR titles/bodies, commit messages, lesson notes), say **cleanup** — never **cleanup**.

## Accuracy and ship

1. Calendar order. 2. Expert stack review. 3. NEW draft files. 4. Writer pipeline before final. 5. droxey authorship. 6. Dead-link recovery. 7. After writing any lesson/course `.md`, run [ai-writing-detection](sand-workflow:ai-writing-detection); fix high-signal AI tells (or note structured-template false-positive risk) before handoff/PR.


## Do not invent

Verify APIs with Context7 / official docs.
