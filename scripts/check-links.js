#!/usr/bin/env node
/**
 * Local link check for this Docsify course repo.
 * Resolves relative markdown/html/asset links that exist on disk.
 * Reports leftover ALL_CAPS placeholders and http(s) URLs (not fetched).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SKIP_DIRS = new Set([
  ".git",
  "node_modules",
  "Slides",
  "Reveal",
]);
const TEXT_EXT = new Set([".md", ".html", ".css", ".js", ".json"]);
const PLACEHOLDER = /\b(COURSE_[A-Z0-9_]+|REPO_NAME|GITHUB_ORG|INSTRUCTOR_EMAIL|GRADESCOPE_URL|RECORDINGS_URL|PREREQUISITE_[0-9]+(?:_URL)?|TUTORIAL_URL|LESSON_TITLE|DATE_[A-Z0-9_]+|HOLIDAY_NAME|TUTORIAL_NAME|CHALLENGE_NAME|CONCEPT_[0-9]+)\b/g;
const MD_LINK = /\[(?:[^\]]*)\]\(([^)]+)\)/g;
const HREF = /(?:href|src)=["']([^"']+)["']/g;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name) || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (TEXT_EXT.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function stripHashAndQuery(target) {
  return target.split("#")[0].split("?")[0];
}

function isExternal(target) {
  return /^(https?:|mailto:|\/\/)/i.test(target);
}

function isIgnored(target) {
  return !target || target.startsWith("#") || target.includes("$") || target.includes("GRADESCOPE");
}

const missing = [];
const placeholders = new Map();
const external = [];

for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file);
  const text = fs.readFileSync(file, "utf8");
  const dir = path.dirname(file);

  for (const match of text.matchAll(PLACEHOLDER)) {
    const key = `${rel}:${match[1]}`;
    if (!placeholders.has(key)) placeholders.set(key, { file: rel, token: match[1] });
  }

  const urls = [];
  if (file.endsWith(".md")) {
    for (const match of text.matchAll(MD_LINK)) urls.push(match[1]);
  }
  for (const match of text.matchAll(HREF)) urls.push(match[1]);

  for (const raw of urls) {
    const target = raw.trim().replace(/^<|>$/g, "").replace(/^['"]|['"]$/g, "");
    if (
      isIgnored(target) ||
      target.includes("COURSE_") ||
      target.includes("REPO_NAME") ||
      target.includes("GITHUB_ORG") ||
      /^(PREREQUISITE_\d+_URL|TUTORIAL_URL|RECORDINGS_URL)$/.test(target)
    ) {
      continue;
    }
    if (isExternal(target)) {
      external.push({ file: rel, target });
      continue;
    }
    const local = stripHashAndQuery(target);
    if (!local) continue;
    const resolved = path.resolve(dir, decodeURIComponent(local));
    if (!fs.existsSync(resolved)) {
      missing.push({ file: rel, target });
    }
  }
}

console.log("Local markdown/asset link check");
console.log("");

if (missing.length) {
  console.log(`Missing local targets (${missing.length}):`);
  for (const item of missing) console.log(`  - ${item.file} → ${item.target}`);
} else {
  console.log("All resolved local links exist on disk.");
}

console.log("");
console.log(`External URLs noted (not fetched): ${external.length}`);
console.log(`Placeholder tokens still present: ${placeholders.size}`);
if (placeholders.size) {
  const tokens = [...new Set([...placeholders.values()].map((item) => item.token))].sort();
  console.log(`  ${tokens.join(", ")}`);
}

if (missing.length) process.exit(1);
