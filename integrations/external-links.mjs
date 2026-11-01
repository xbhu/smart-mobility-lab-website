// After the build, make every link to another website open in a new tab, so visitors keep the lab
// site open behind it (the Research Atlas, Google Scholar, DOIs, news coverage, sponsors...).
// Runs on the generated HTML, so it also covers links written in Markdown content.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OWN_HOSTS = new Set(["lab.mobilitypsu.com"]);

function isExternal(href) {
  if (!/^https?:\/\//i.test(href)) return false;
  try {
    return !OWN_HOSTS.has(new URL(href).hostname);
  } catch {
    return false;
  }
}

export function rewriteHtml(html) {
  return html.replace(/<a\b([^>]*)>/gi, (tag, attrs) => {
    const m = attrs.match(/\shref=(["'])(.*?)\1/i);
    if (!m || !isExternal(m[2]) || /\starget=/i.test(attrs)) return tag;
    const rel = /\srel=/i.test(attrs) ? "" : ' rel="noopener"';
    return `<a${attrs} target="_blank"${rel}>`;
  });
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

export default function externalLinks() {
  return {
    name: "external-links-new-tab",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let files = 0;
        for (const f of walk(root)) {
          const html = fs.readFileSync(f, "utf8");
          const next = rewriteHtml(html);
          if (next !== html) { fs.writeFileSync(f, next); files++; }
        }
        logger.info(`external links set to open in a new tab in ${files} pages`);
      },
    },
  };
}
