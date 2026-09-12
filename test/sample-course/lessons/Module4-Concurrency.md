<!-- Run as a slideshow: reveal-md lessons/Module4-Concurrency.md -w -->
# Module 4 — Concurrency

⭐️ **GOAL**: Leave with one working channel pipeline — and one failure mode you already unblocked.

> [!NOTE] Instructor
>
> <details>
> <summary>Prep and direction (not student-facing)</summary>
>
> - Paste a tiny producer/consumer in chat before breakouts.
> - Live-code a deadlock for five minutes. Then get out of the way.
> - Extension: `go test -race`. Do not add a new assignment.
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

1. Apply channels to a one-stage pipeline
1. Build and run the lab without a deadlock
1. Name one mistake from the [concurrency overview](https://go101.org/article/concurrent-synchronization-overview.html)

<!-- > -->

## [**5m**] Attendance &amp; Announcements

Lab day. Goroutines are cheap. Unclosed channels and shared maps are not.

<!-- > -->

## [**20m**] ⏺ Live Code

Demonstrate the smallest pipeline that works. Narrate the deadlock I expect: send on a channel nobody receives, or close from the wrong side.

Read: [channels](https://go101.org/article/channel.html), [concurrency synchronization overview](https://go101.org/article/concurrent-synchronization-overview.html).

<!-- > -->

## [**10m**] 🌴 Break

<!-- > -->

## [**50m**] 🔭 Lab

Work the repo. Done means:

1. One producer, one consumer, tests still pass
2. You can explain who closes the channel
3. You tried `go test -race` or wrote why the lab has no shared memory

If you finish early, score a teammate's pipeline against the [SAMPLE rubric](../projects/sample_rubric.md).

<!-- > -->

## [**5m**] Wrap Up

Bring one unchecked row and the next action to Module 5.

<!-- > -->

## 📚 Additional Resources

1. [SAMPLE Project](../projects/sample_project.md)
2. [Common concurrent mistakes](https://go101.org/article/concurrent-common-mistakes.html)
