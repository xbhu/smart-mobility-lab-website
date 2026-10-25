// Which papers the lab site shows, and in what order.
// The papers collection feeds two sites: the Research Atlas reads every paper through
// /data/papers.json (and picks its own set with `featured`), while this site lists only papers
// flagged `show_on_lab` on its Publications page: top journals (TR Part series, IEEE Transactions) and top conferences.
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type Paper = CollectionEntry<"papers">;

export const onLab = (p: Paper) => Boolean(p.data.show_on_lab);

// Papers whose first author is the PI or a lab member (people entry) come before papers led by
// an outside collaborator.
export const groupLed = (p: Paper) => Boolean(p.data.authors[0]?.person);

// Newest year first; within a year, group-led papers first; then by title.
export const byLabOrder = (a: Paper, b: Paper) =>
  b.data.year - a.data.year ||
  Number(groupLed(b)) - Number(groupLed(a)) ||
  a.data.title.localeCompare(b.data.title);

export async function labPapers(): Promise<Paper[]> {
  return (await getCollection("papers")).filter(onLab).sort(byLabOrder);
}

// Keep a hand-curated order, but move papers led by outside collaborators below the rest.
export const demoteOutsideLed = (list: Paper[]): Paper[] => [
  ...list.filter(groupLed),
  ...list.filter((p) => !groupLed(p)),
];
