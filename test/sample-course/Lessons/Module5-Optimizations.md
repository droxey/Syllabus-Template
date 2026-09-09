<!-- Run as a slideshow: reveal-md Lessons/Module5-Optimizations.md -w -->
# Module 5 — Optimizations

⭐️ **GOAL**: Give a three-minute demo of your tool and name one allocation you would change — or keep.

> [!NOTE] Instructor
>
> <details>
> <summary>Prep and direction (not student-facing)</summary>
>
> - Time demos at 3 minutes. Cut off kindly.
> - Pre-read is the free [Optimizations 101 index](https://go101.org/optimizations/101.html) and [introduction](https://go101.org/optimizations/0.1-introduction.html). Skip paid-only chapters.
> - After demos, collect one Add-to-Course row for `updates.md`. Do not implement it unless asked.
>
> </details>

<!-- omit in toc -->
## ⏱ Agenda

- [[**5m**] Attendance &amp; Announcements](#5m-attendance--announcements)
- [[**15m**] ☀️ Warm Up](#15m-️-warm-up)
- [[**25m**] 📚 TT: Overview](#25m--tt-overview)
- [[**10m**] 🌴 Break](#10m--break)
- [[**40m**] 💻 Activity](#40m--activity)
- [[**5m**] Wrap Up](#5m-wrap-up)

<!-- > -->

<!-- omit in toc -->
## 🏆 Objectives

*By the end of this class, you'll be able to&hellip;*

1. Identify when *not* to optimize
1. Explain one escape-analysis or allocation idea in your own words
1. Deliver a timed walkthrough of the SAMPLE project

<!-- > -->

## [**5m**] Attendance &amp; Announcements

Studio week starts after this module. Final presentations are Wednesday, April 15 (SAMPLE term).

<!-- > -->

## [**15m**] ☀️ Warm Up

Three-question recap:

1. Where does the blank starter live?
2. Where do we read Go 101?
3. What command proves the Go tool still works?

<!-- > -->

## [**25m**] 📚 TT: Overview

Most of your CLI does not need to be fast. [Optimizations 101](https://go101.org/optimizations/101.html) is for the hot path.

In class we only keep three moves:

1. Measure or at least name the allocation
2. Ask whether it is on the hot path
3. Change one thing, or write why you will not

We do not paste book chapters. We do not require paid pages.

```bash
go test -bench=. -benchmem
go build -gcflags='-m' .
```

<aside class="notes">
If Docsify is not running for the course-site half of the demo, start it before you talk.
</aside>

<!-- > -->

## [**10m**] 🌴 Break

<!-- > -->

## [**40m**] 💻 Activity

Rehearse in breakouts of 3–4. One person shares. Others hold a phone timer.

Demo beats:

1. `go test`
2. One run of the tool
3. One allocation sentence ([Challenge 3](Projects/SampleProject.md#challenge-3-one-allocation))

Done means you hit the three beats and stopped talking.

<!-- > -->

## [**5m**] Wrap Up

- Project due last day of the SAMPLE term
- Bring a question, not a slide deck, to studio

<!-- > -->

## 📚 Additional Resources

1. [SAMPLE Project](Projects/SampleProject.md)
2. [About Go Optimizations 101](https://go101.org/optimizations/0.1-introduction.html)
