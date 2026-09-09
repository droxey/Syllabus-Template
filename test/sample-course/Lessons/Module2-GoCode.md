<!-- Run as a slideshow: reveal-md Lessons/Module2-GoCode.md -w -->
# Module 2 — Familiar Go

⭐️ **GOAL**: Leave with a tiny CLI that uses functions, control flow, and typed values you can explain.

> [!NOTE] Instructor
>
> <details>
> <summary>Prep and direction (not student-facing)</summary>
>
> - Pre-read: constants/variables, function declarations, basic control flows on go101.org.
> - Live-code untyped constants vs typed variables for five minutes. Then get out of the way.
> - Extension: add a flag. Do not invent a new assignment.
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

1. Apply yesterday's toolchain to a multi-function file
1. Explain one untyped constant vs a typed variable
1. Build a CLI that exits non-zero on bad input

<!-- > -->

## [**5m**] Attendance &amp; Announcements

Lab day. We are not covering the whole “Familiar With Go Code” section. We are covering enough to write a tool.

<!-- > -->

## [**20m**] ⏺ Live Code

Smallest path that works: parse args, call a function, print a result.

Narrate the failure I expect: comparing an untyped constant to the wrong type, or ignoring an error from `strconv`.

Read along: [Constants and Variables](https://go101.org/article/constants-and-variables.html), [Function Declarations and Calls](https://go101.org/article/function-declarations-and-calls.html).

<!-- > -->

## [**10m**] 🌴 Break

<!-- > -->

## [**50m**] 🔭 Lab

Work in a module. Done means:

1. `go test ./...` covers the function
2. You can explain each `if` / `for` you wrote ([control flows](https://go101.org/article/control-flows.html))
3. Bad input returns an error, not a panic

If you finish early, help a room that is still fighting `package main` vs a test package.

<!-- > -->

## [**5m**] Wrap Up

Bring one type-deduction surprise to Module 3.

<!-- > -->

## 📚 Additional Resources

1. [SAMPLE Project — Challenge 1](Projects/SampleProject.md#challenge-1-go-test)
2. [Go 101 reading map](Resources/Go101.md)
