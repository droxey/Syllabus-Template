const test = require("node:test");
const assert = require("node:assert/strict");
const { isExternal, markdownTargets } = require("./check-links");

test("treats sand-workflow and other schemes as external", () => {
  assert.equal(isExternal("sand-workflow:dani-roxberrys-teaching-voice"), true);
  assert.equal(isExternal("https://example.com"), true);
  assert.equal(isExternal("mailto:dani@example.com"), true);
  assert.equal(isExternal("lessons/topic_name.md"), false);
});

test("parses inline and reference-style markdown links", () => {
  const text = [
    "See [Lesson 1] and [docs](https://example.com/a).",
    "",
    "[Lesson 1]: lessons/topic_name.md",
  ].join("\n");
  const urls = markdownTargets(text);
  assert.deepEqual(urls, ["https://example.com/a", "lessons/topic_name.md"]);
});
