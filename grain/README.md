# Grain / video-pipeline config

`course.yaml` in this directory is the [`CourseConfig`](https://github.com/droxey/video-pipeline/blob/master/internal/domain/types.go) template for [droxey/video-pipeline](https://github.com/droxey/video-pipeline) (Nebula). Point the pipeline at this file when you wire a cloned course repo into the render stack.

Replace `COURSE_SLUG` (kebab-case course id) and `COURSE_PVC_VOICE_ID` (ElevenLabs PVC voice id) before you run a job. Do not put secrets in this file — `pvc_voice_id` is an id placeholder only.

## Lesson plans

Session content lives in `lessons/*.md` at the repo root. Copy from `templates/LESSON_TEMPLATE.md` when you add a session. Those files are already reveal-md compatible: slide breaks use `<!-- > -->`, and you can preview one lesson with:

```bash
reveal-md lessons/<topic_name>.md
```

The existing `reveal-md lessons/` → `slides/` flow in this template stays the source of truth for live class decks.

## Future pipeline inputs

A later parse stage may consume per-lesson `slides.md` and `speaker-notes.md` derived from lesson plans. Grain recordings enter the pipeline at **import** — see the [`Recording`](https://github.com/droxey/video-pipeline/blob/master/internal/domain/types.go) type and the `grain import` command in [video-pipeline](https://github.com/droxey/video-pipeline).
