# slides/

This folder is **reveal-md output**, not a committed course deck.

Generate a static deck after you add a lesson:

```bash
npx reveal-md lessons/<topic_name>.md --static slides
```

Preview without writing files:

```bash
npx reveal-md lessons/<topic_name>.md
```

Do not copy leftover HTML from another course. `reveal-md.json` uses the default Reveal theme — no Make School CSS.
