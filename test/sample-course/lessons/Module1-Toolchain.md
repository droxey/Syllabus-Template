<!-- Run as a slideshow: reveal-md lessons/Module1-Toolchain.md -w -->
# Module 1 — The Go Toolchain

⭐️ **GOAL**: Walk out able to run, test, and explain a one-file Go program with the official toolchain.

> [!NOTE] Instructor
>
> <details>
> <summary>Prep and direction (not student-facing)</summary>
>
> - Confirm `go version` on your machine before class. Have a failing test ready.
> - Assign [The Go Toolchain](https://go101.org/article/go-toolchain.html) as pre-read. Do not paste the chapter.
> - Breakouts of 3–4. Visit rooms. Live-code the first five minutes only.
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

1. Identify and describe `go run`, `go test`, and `go mod`
1. Explain why this SAMPLE course reads [Go 101](https://go101.org/article/101.html) on the web
1. Run a failing test, then make it pass

<!-- > -->

## [**5m**] Attendance &amp; Announcements

This is **ACS 9999: Sample Course**. SAMPLE Go track. Not a live ACS section.

Reading lives at go101.org. There is no book PDF in this repo.

<!-- > -->

## [**15m**] ☀️ Warm Up

In the [toolchain article](https://go101.org/article/go-toolchain.html), find the smallest program they show. Paste `go version` into chat. If it fails, that is the warm-up — we fix the install together.

<!-- > -->

## [**25m**] 📚 TT: Overview

The toolchain is the course's first tool, not an afterthought.

```bash
go version
go env GOPATH GOROOT
```

We will use modules. We will not vendor Go 101 into git.

| You type | You want |
| -------- | -------- |
| `go run .` | See it work |
| `go test ./...` | See it stay working |
| `go build -o /tmp/tool .` | A binary you can hand someone |

<aside class="notes">
If someone still has GOPATH mode stories, park them. Modules only.
</aside>

<!-- > -->

## [**10m**] 🌴 Break

<!-- > -->

## [**40m**] 💻 Activity

I do → we do → you do.

1. I write `hello_test.go` that fails
2. We make it pass
3. You add one more test case

Done means `go test` is green on your machine.

```go
package hello

func Greeting(name string) string {
	return "hi, " + name
}
```

If you finish early, help someone in your breakout who is stuck on `GOROOT` or PATH.

<!-- > -->

## [**5m**] Wrap Up

- Read [Go 101 — About](https://go101.org/article/101.html) before Wednesday
- Bring one toolchain command you still cannot explain
- Next: familiar Go code

<!-- > -->

## 📚 Additional Resources

1. [The Go Toolchain](https://go101.org/article/go-toolchain.html)
2. [SAMPLE reading map](../resources/Go101.md)
