<!-- Run as a slideshow: reveal-md Lessons/Module3-TypeSystem.md -w -->
# Module 3 — Type System

⭐️ **GOAL**: Treat slices, maps, and interfaces as products you can draw, not slogans.

> [!NOTE] Instructor
>
> <details>
> <summary>Prep and direction (not student-facing)</summary>
>
> - Open [Go Type System Overview](https://go101.org/article/type-system-overview.html) and the containers article side by side.
> - Warm-up: students vote whether `nil` map vs empty map is the bug they hit last week.
> - Breakouts of 3–4. One person shares a screen with a backing-array sketch.
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

1. Identify the parts of a slice header
1. Explain why a nil interface and a nil pointer in an interface are different
1. Implement one small interface your CLI actually needs

<!-- > -->

## [**5m**] Attendance &amp; Announcements

Bring the SAMPLE project. We will not invent generics today.

<!-- > -->

## [**15m**] ☀️ Warm Up

Think and jot, then pair:

- What happens if two slices share a backing array and you append to one?
- Where did you last see that bite a teammate?

<!-- > -->

## [**25m**] 📚 TT: Overview

Go's type system is the part of Go 101 you cannot skim.

Read: [type system overview](https://go101.org/article/type-system-overview.html), [arrays / slices / maps](https://go101.org/article/container.html), [interfaces](https://go101.org/article/interface.html).

In class we only own three pictures:

1. Slice header (`ptr`, `len`, `cap`)
2. Map as a reference to a runtime hash table
3. Interface as a type word + a data word

<aside class="notes">
If someone asks for unsafe pointers, point at the book and stay on safe Go.
</aside>

<!-- > -->

## [**10m**] 🌴 Break

<!-- > -->

## [**40m**] 💻 Activity

I do → we do → you do.

1. I draw a slice after `append` that reallocates
2. We do one that does not
3. You add an interface to yesterday's CLI — one method is enough

Done means a classmate can say what the backing array is after your append.

<!-- > -->

## [**5m**] Wrap Up

- Finish Challenge 2 before Module 4
- If a local link 404s, fix the path before you polish prose

<!-- > -->

## 📚 Additional Resources

1. [SAMPLE Project — Challenge 2](Projects/SampleProject.md#challenge-2-slice-header)
2. [Go Type System Overview](https://go101.org/article/type-system-overview.html)
