// Shared helpers for reading site settings and formatting content.
import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

const root = process.cwd();
const readYaml = (rel: string) => parse(fs.readFileSync(path.join(root, rel), "utf8"));

export const site = readYaml("src/data/site.yaml");
export const intros = readYaml("src/content/pages/intros.yaml");

export const THRUST_ORDER = ["automated-driving", "work-zone-automation", "electrification", "system-modeling"] as const;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-10" -> "Oct 2025", "2026" -> "2026" */
export function formatDate(value: string | Date | undefined): string {
  if (!value) return "";
  const s = value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
  const [y, m] = s.split("-");
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}

export function years(start?: string | number | null, end?: string | number | null): string {
  const a = start ? String(start).slice(0, 4) : "";
  const b = end ? String(end).slice(0, 4) : "";
  if (a && b) return a === b ? a : `${a}–${b}`;
  if (a) return `${a}–present`;
  return "";
}

/** A local file under public/ exists (used for optional photos). */
export function publicFileExists(src: string): boolean {
  if (!src || /^https?:/.test(src)) return Boolean(src);
  return fs.existsSync(path.join(root, "public", src));
}

export function initials(name: string): string {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .filter((c) => /[A-Z]/.test(c))
    .slice(0, 2)
    .join("");
}

export const ROLE_LABEL: Record<string, string> = {
  pi: "Director",
  postdoc: "Postdoctoral Scholar",
  phd: "Ph.D. Student",
  deng: "Doctor of Engineering Student",
  ms: "M.S. Student",
  undergrad: "Undergraduate Researcher",
  adjunct: "Adjunct Research Professor",
  visiting: "Visiting Scholar",
  intern: "Research Intern",
};

export const ALUMNI_ROLE_LABEL: Record<string, string> = {
  phd: "Ph.D.",
  postdoc: "Postdoc",
  ms: "M.S.",
  undergrad: "Undergraduate",
  adjunct: "Adjunct Research Professor",
  visiting: "Visiting Scholar",
  intern: "Intern",
};

/** People who get their own profile page. */
export function hasProfile(p: { id: string; data: { role: string; status: string } }): boolean {
  if (p.id === "xianbiao-hu") return true;
  if (p.data.status === "current") return ["postdoc", "phd"].includes(p.data.role);
  return ["postdoc", "phd"].includes(p.data.role);
}

export function youtubeThumb(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
