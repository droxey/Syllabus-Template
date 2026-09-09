# SAMPLE Project: Ship a small Go tool

<!-- omit in toc -->
## Contents

1. [Project Goals](#project-goals)
1. [Project Requirements](#project-requirements)
1. [Challenges](#challenges)
1. [Deliverables](#deliverables)
1. [Rubric](#rubric)

This is a **SAMPLE** spec. You are not dockerizing a codebase. You are shipping a one-package Go tool and talking about it like a gopher who read Go 101.

## Project Goals

| Goal | Description |
| ---- | ----------- |
| `toolchain` | `go test` and `go build` succeed on a clean machine. |
| `types` | The tool uses at least one slice or map on purpose, not by accident. |
| `voice` | README says how to run it in I/you/we, not in academic passive. |
| `opt` | You name one allocation you would keep or cut, with a reason from Optimizations 101 — not a paste from the book. |

## Project Requirements

Copy this table into your notes. Check a row only after you can show it.

| Category | Requirement | ✅ |
| -------- | ----------- | :-: |
| **Go** | Module path set; `go test ./...` passes | |
| **Go** | A `main` that does one useful job (count, filter, or format stdin/args) | |
| **SAMPLE** | README still says this is not a live ACS offering if you forked the syllabus | |
| **Preview** | Course site still serves ACS 9999 from `test/sample-course` | |
| **Cite** | Reading list points at go101.org, not a PDF in git | |

## Challenges

### Challenge 1: `go test`

Put a `_test.go` next to the code. One table-driven test is enough. Done means a classmate can run `go test` without asking you which folder.

### Challenge 2: Slice header

On paper or in the README, draw the header (`ptr`, `len`, `cap`) and the backing array for one slice your tool uses. If you do not have a slice, add one for a reason.

### Challenge 3: One allocation

After [Module 5](Lessons/Module5-Optimizations.md), write three sentences: what allocated, whether you would change it, and why *not* to optimize the rest. Link [Go Optimizations 101](https://go101.org/optimizations/101.html) — do not quote pages of it.

## Deliverables

_All SAMPLE submissions are due **Wednesday, April 15, 2026 at 11:59pm** unless we say otherwise._

1. **Repository** — Go module + tests
2. **Three-minute demo** — run it, show the test, name the allocation
3. **Gradescope submit** — demo link only; there is no live ACS 9999 roster

## Rubric

[SAMPLE Project Rubric](Projects/SampleRubric.md)
