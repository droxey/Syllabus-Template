---
name: ACS Google Calendar Class Series
description: >-
  Use when creating or updating ACS class Google Calendar series or invites
  (Zoom, EXDATE holidays, titles, attendees), or when setting the matching
  #acs- Slack channel from the repo ACS-#### prefix.
---
# ACS Google Calendar class series

Instructor ops for ACS class recurrence on the teaching/work calendar. Repo canon: `droxey/Syllabus-Template/CALENDAR.md` (linked from `setup.md`).

## Hard rules

1. **Timezone:** Sheet/baseline times are Pacific. Create events in `America/Los_Angeles`.
2. **Always invite:** `danielle.roxberry@dominican.edu`.
3. **Title:** space form — `ACS 4210` (not `ACS-4210`). Matching treats space and dash as equivalent.
4. **Video:** Zoom only — never Google Meet. Use the standing personal Zoom room when that is the class room.
5. **Description must include:**
   - Zoom Meetings: `https://bit.ly/droxey-zoom`
   - Appointments: `https://bit.ly/droxey-meet`
6. **Holidays:** Never schedule on campus or academic holidays. **EXDATE** those dates from the recurrence (Labor Day, Fall Break, Thanksgiving Academic Holiday + Campus Closed, Winter Break, MLK, President's Day, Spring Break, Good Friday, Farmworkers'/Cesar Chavez Day, Memorial Day, Juneteenth, Independence Day Observed, etc.).
7. **Days:** No Friday or weekend student class meetings. If a target falls there, move to the closest Monday–Thursday.
8. **Calendar:** Teaching/work calendar for ACS series — not personal IRL.

## Slack channel (day-1)

Repo canon: `droxey/Syllabus-Template/SLACK.md`.

- Pattern: `#acs-xxxx` where `xxxx` is the **4-digit course code**.
- Derive from the repo name prefix: `ACS-3220-...` → `#acs-3220`.
- Invite students to that channel before day 1.
- Confirm with Dani before any Slack send; never grades/scores or private feedback in channels.

## Do not

- Put Google Meet conference data on class events
- Skip the dominican.edu invite
- Leave holiday meetings on the series without EXDATE
- Put these ops rules in learner-facing README or lesson bodies

## Related day-1 launch (separate from content plan)

Slack student invites (`#acs-####`) → calendar series live → Docsify live.

Content plan order: outcomes → week topics → schedule table (`## Schedule` in README) → lesson drafts → sidebar.
