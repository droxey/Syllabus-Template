# SAMPLE Project Rubric

Use this table when you score the [SAMPLE Project](./sample_project.md). Demo only — not a live ACS rubric.

| Expectation | Does not meet | Meets | Exceeds |
| ----------- | ------------- | ----- | ------- |
| **Toolchain** | Cannot build or test | `go test ./...` is green | Also shows `go test -race` or a module-aware `go run` |
| **Types** | Accidental containers, cannot explain them | Names the slice or map and why it is there | Ties the choice to the [type-system overview](https://go101.org/article/type-system-overview.html) |
| **Concurrency (if used)** | Data race or unexplained goroutine | One clear sync story, or an honest “no concurrency needed” | Explains channel vs `sync` for that job |
| **Optimization note** | Pastes book text or “make it faster” | One allocation, keep-or-cut, with a reason | Shows a `gcflags=-m` line and what it means |
| **SAMPLE / cite** | Uploads a book PDF | Links go101.org | README tells a reviewer what to click after `docsify serve` |
