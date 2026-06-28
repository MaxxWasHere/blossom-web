import fs from "node:fs";
import path from "node:path";

export type InlineToken = { type: "text" | "bold" | "code"; value: string };

export type Block = { type: "bullet" | "para"; tokens: InlineToken[] };

export type Group = { name: string; blocks: Block[] };

export type Section =
  | { kind: "version"; title: string; version: string; groups: Group[] }
  | { kind: "special"; title: string; slug: string; groups: Group[] };

/** Tokenize a single line for **bold** and `code` spans. */
export function tokenizeInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let buf = "";
  let i = 0;
  const flush = () => {
    if (buf) {
      tokens.push({ type: "text", value: buf });
      buf = "";
    }
  };
  while (i < text.length) {
    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end === -1) {
        buf += "**";
        i += 2;
        continue;
      }
      flush();
      tokens.push({ type: "bold", value: text.slice(i + 2, end) });
      i = end + 2;
    } else if (text[i] === "`") {
      const end = text.indexOf("`", i + 1);
      if (end === -1) {
        buf += "`";
        i += 1;
        continue;
      }
      flush();
      tokens.push({ type: "code", value: text.slice(i + 1, end) });
      i = end + 1;
    } else {
      buf += text[i];
      i += 1;
    }
  }
  flush();
  return tokens;
}

/**
 * Parse content/changelog.txt into structured sections.
 * - `# Blossom X.Y.Z` -> version section (newest first in the file)
 * - `# About Blossom` / `# Licensing (Apache 2.0)` -> special sections
 * - `## Subsection` -> group within a section
 * - `- ...` -> bullet; other non-empty lines -> paragraph
 *
 * Called at build time from a server component (static export), so `fs` is fine.
 */
export function parseChangelog(): Section[] {
  const file = path.join(process.cwd(), "content", "changelog.txt");
  const raw = fs.readFileSync(file, "utf8");
  const lines = raw.split(/\r?\n/);

  const sections: Section[] = [];
  let current: Section | null = null;
  let currentGroup: Group | null = null;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("# ")) {
      const title = trimmed.slice(2).trim();
      const versionMatch = title.match(/^Blossom\s+(\d+\.\d+(?:\.\d+)?(?:[-+.\w]+)?)/);
      if (versionMatch) {
        current = { kind: "version", title, version: versionMatch[1], groups: [] };
      } else {
        const slug =
          title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "") || "section";
        current = { kind: "special", title, slug, groups: [] };
      }
      sections.push(current);
      currentGroup = null;
    } else if (trimmed.startsWith("## ")) {
      if (!current) continue;
      currentGroup = { name: trimmed.slice(3).trim(), blocks: [] };
      current.groups.push(currentGroup);
    } else if (trimmed.startsWith("- ")) {
      if (!current) continue;
      if (!currentGroup) {
        currentGroup = { name: "", blocks: [] };
        current.groups.push(currentGroup);
      }
      currentGroup.blocks.push({ type: "bullet", tokens: tokenizeInline(trimmed.slice(2).trim()) });
    } else if (trimmed.length > 0) {
      if (!current) continue;
      if (!currentGroup) {
        currentGroup = { name: "", blocks: [] };
        current.groups.push(currentGroup);
      }
      currentGroup.blocks.push({ type: "para", tokens: tokenizeInline(trimmed) });
    }
  }

  return sections;
}
