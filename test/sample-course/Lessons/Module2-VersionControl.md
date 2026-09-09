<!-- Run as a slideshow: reveal-md Lessons/Module2-VersionControl.md -w -->
# Module 2 — Version Control in the Small

⭐️ **GOAL**: Leave with a branch and a review you would actually merge — without touching the blank root starter.

> [!NOTE] Instructor
>
> <details>
> <summary>Prep and direction (not student-facing)</summary>
>
> - Paste the starter git commands in chat before you open breakouts.
> - Live-code the first 5 minutes only: branch, one-line edit, status. Then get out of the way.
> - Have one extension ready: write the PR test plan (`docsify serve` from this folder).
>
> </details>

<!-- omit in toc -->
## ⏱ Agenda

- [[**5m**] Attendance &amp; Announcements](#5m-attendance--announcements)
- [[**20m**] ⏺ Live Code](#20m--live-code)
- [[**10m**] 🌴 Break](#10m--break)
- [[**50m**] 🔭 Lab](#50m--lab)
- [[**5m**] Wrap Up](#5m-wrap-up)

<!-- > -->

<!-- omit in toc -->
## 🏆 Objectives

*By the end of this class, you'll be able to&hellip;*

1. Apply yesterday's file map to a real branch
1. Open a SAMPLE PR that only edits `test/sample-course/`
1. Name one review you would refuse (root placeholders, leftover Docker copy)

<!-- > -->

## [**5m**] Attendance &amp; Announcements

Lab day. We are not rewriting the whole syllabus. One small change, one review.

<!-- > -->

## [**20m**] ⏺ Live Code

Smallest path that works:

```bash
git checkout -b sample/fix-typo
# edit one line under test/sample-course/ only
git status
```

Narrate the failure I expect: someone edits root `README.md` and "fills" the starter. That breaks the template. The SAMPLE is this folder.

<!-- > -->

## [**10m**] 🌴 Break

<!-- > -->

## [**50m**] 🔭 Lab

Work in the repo. Done means:

1. Your branch only lists files under `test/sample-course/`
2. You can explain each file in `git status`
3. The PR description tells a reviewer to run `npx docsify-cli serve test/sample-course`

If you finish early, help a room that is still diffing the root.

<!-- > -->

## [**5m**] Wrap Up

Continue the lab if needed. Bring one review comment you would leave on a teammate's SAMPLE PR.

<!-- > -->

## 📚 Additional Resources

1. [SAMPLE Project — Challenge 2](../Projects/SampleProject.md#challenge-2-open-a-sample-pr)
2. [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
