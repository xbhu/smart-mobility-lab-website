// Machine-readable copies of the lab's content for other sites (the Research Atlas reads these at
// build time, so paper metadata and thrust names live only in this repository).
import { getCollection } from "astro:content";
import { site, hasProfile, publicFileExists, THRUST_ORDER, ROLE_LABEL } from "./site";

const abs = (p: string) => new URL(p, site.url).toString();

export async function exportThrusts() {
  const thrusts = (await getCollection("thrusts")).sort((a, b) => a.data.order - b.data.order);
  return thrusts.map((t) => ({
    id: t.id,
    name: t.data.name,
    order: t.data.order,
    tagline: t.data.tagline,
    url: abs(`/research/${t.id}/`),
    image: t.data.card?.image ? abs(t.data.card.image) : t.data.hero.image ? abs(t.data.hero.image) : null,
    subtopics: t.data.subtopics.map((s) => ({ id: s.id, name: s.name })),
    featured_papers: t.data.featured_papers.map((p) => p.id),
  }));
}

export async function exportPapers() {
  const people = new Map((await getCollection("people")).map((p) => [p.id, p]));
  const papers = (await getCollection("papers")).sort(
    (a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title),
  );
  return papers.map((p) => {
    const d = p.data;
    return {
      id: p.id,
      title: d.title,
      authors: d.authors.map((a) => {
        const person = a.person ? people.get(a.person.id) : undefined;
        return {
          name: a.name,
          person: person?.id ?? null,
          corresponding: Boolean(a.corresponding),
          profile_url: person && hasProfile(person) ? abs(`/people/${person.id}/`) : null,
          photo: person && publicFileExists(person.data.photo) ? abs(person.data.photo) : null,
          role: person ? (person.data.status === "current" ? ROLE_LABEL[person.data.role] : "Alumni") : null,
        };
      }),
      year: d.year,
      type: d.type,
      venue: d.venue,
      venue_short: d.venue_short ?? null,
      volume: d.volume ?? null,
      issue: d.issue ?? null,
      pages: d.pages ?? null,
      doi: d.doi ?? null,
      url: d.url ?? null,
      status: d.status,
      thrusts: d.thrusts, // first one is the primary thrust
      subtopic: d.subtopic,
      featured: Boolean(d.featured),
      summary: d.summary ?? null,
      atlas_slug: d.atlas_slug ?? null,
      code: d.code ?? null,
      data: d.data ?? null,
      website: d.website ?? null,
      slides: d.slides ?? null,
      pdf: d.pdf ?? null,
      video: d.video ?? null,
      citation_apa: d.citation_apa ?? null,
    };
  });
}

export const exportMeta = () => ({
  source: site.url,
  lab: site.name,
  thrust_order: THRUST_ORDER,
  generated: new Date().toISOString(),
});
