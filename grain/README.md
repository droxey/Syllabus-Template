# Grain / video-pipeline config

`course.yaml` in this directory is the [`CourseConfig`](https://github.com/droxey/video-pipeline/blob/master/internal/domain/types.go) template for [droxey/video-pipeline](https://github.com/droxey/video-pipeline) (Nebula). Point the pipeline at this file when you wire a cloned course repo into the render stack.

Replace `COURSE_SLUG` (kebab-case course id) and `COURSE_PVC_VOICE_ID` (ElevenLabs PVC voice id) before you run a job. Do not put secrets in this file — `pvc_voice_id` is an id placeholder only.

## Lesson plans

Session content lives in `Lessons/*.md` at the repo root. Those files are already reveal-md compatible: slide breaks use `<!-- > -->`, and you can preview one lesson with:

```bash
reveal-md Lessons/Lesson1.md
```

The existing `reveal-md Lessons/` → `Slides/` flow in this template stays the source of truth for live class decks.

## Future pipeline inputs

A later parse stage may consume per-lesson `slides.md` and `speaker-notes.md` derived from lesson plans. Grain recordings enter the pipeline at **import** — see the [`Recording`](https://github.com/droxey/video-pipeline/blob/master/internal/domain/types.go) type and the `grain import` command in [video-pipeline](https://github.com/droxey/video-pipeline).
