# Term Start And Course Plan

Instructor/agent checklist for standing up an ACS course and opening day 1. Not a published syllabus page. Do not link from `_sidebar.md`.

**Agents:** read this file before any course-plan or day-1 work. Execute autonomous steps; stop and ask Dani for approval gates listed below.

Related ops: [CALENDAR.md](CALENDAR.md) · [SLACK.md](SLACK.md) · [setup.md](setup.md) · [DECISIONS.md](DECISIONS.md) · [agents/TEACHING-FLEET.md](agents/TEACHING-FLEET.md)

## Human Gates (Do Not Skip)

1. **Content review:** outcomes + week topics + README `## Schedule` one-pass draft → Dani reviews before lesson writing continues.
2. **Calendar create:** draft the series, then ask approval **before** creating events.
3. **Slack invites:** only when Dani hands an Ellucian roster CSV/list (that handoff is the OK).
4. **Slack messages / emails:** confirm with Dani before any send.
5. **Lesson/tutorial code snippets:** hand to Code Review to verify they run before ready-to-PR or teach-from (unless Dani waives).

## Plan A Course (Content)

1. **Outcomes → week topics → README `## Schedule`** in **one pass** for Dani's review.
2. If outcomes / week topics / schedule / `Lessons/OUTLINE.md` / lesson plans **already exist**: keep them intact. Section-only updates only. Do **not** redraft from a prior term.
3. If outcomes / week topics are **missing**: assistant drafts first; Dani edits.
4. Next: create **`Lessons/OUTLINE.md`** with `## Day X - Topic` and a short outline under each header for every lesson.
   - Instructor-only — **no** `_sidebar.md` link (same lane as `setup.md`).
5. Then full lesson plans (`Lessons/topic_name.md` or `lessons/<topic_name>.md`) → update `_sidebar.md`.
6. Before ready-to-PR: Writer **AI-writing pass-gate** (mandatory, stricter). Fail closed until pass or an explicit template false-positive note.
7. Before ready-to-PR / teach-from: pass **code snippets** in lessons and tutorials to **Code Review** to verify they run. Fail closed until pass or Dani waives.

Always update README **`## Schedule`** when the session list or dates change.

## Day-1 Launch

1. **Slack invites** to existing `#acs-xxxx` (`xxxx` = 4-digit course code from the repo prefix). Channels are usually already created — invites only. When Dani hands an Ellucian roster CSV/list, add those people. Details: [SLACK.md](SLACK.md).
2. **Calendar series** once term dates are set: draft the full recurrence (Zoom bits + holiday EXDATEs), then **ask for approval before creating** events. Details: [CALENDAR.md](CALENDAR.md).
3. **Docsify / GitHub Pages**: usually already live — **verify** the course site before day 1; fix only if broken.

That is the full day-1 launch set.

## Autonomous Vs Ask

| Step | Autopilot | Ask Dani |
| ---- | --------- | -------- |
| Verify Docsify / Pages live | Yes | Only if broken and fix is unclear |
| Draft missing outcomes / topics / Schedule | Yes (one pass) | Review before continuing |
| Keep existing Schedule / OUTLINE / lessons intact | Yes | — |
| Draft `Lessons/OUTLINE.md` when missing | Yes | Review before full lessons |
| Full lesson drafts | Yes (after OUTLINE) | Review / Writer gate before PR merge ask |
| Draft calendar series | Yes | Before create |
| Slack invites | After CSV handoff | CSV handoff is the OK |
| Slack/email sends | Draft only | Before send |

## Capture

After any planning interview or standing lock: first update the relevant canonical document or skill, then append a dated entry to [DECISIONS.md](DECISIONS.md) with **Decision**, **Reason**, and **Canon**. Do not leave locks only in chat.
