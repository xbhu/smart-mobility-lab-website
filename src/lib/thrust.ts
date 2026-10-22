import { getCollection } from "astro:content";

type Thrust = { id: string; data: any };

const newestFirst = (a: any, b: any) =>
  (b.data.start ?? 0) - (a.data.start ?? 0) || (b.data.end ?? 0) - (a.data.end ?? 0) || a.data.title.localeCompare(b.data.title);

/** External sponsored projects shown on a thrust page, in display order. */
export async function thrustProjects(thrust: Thrust) {
  const external = (await getCollection("projects")).filter((p) => p.data.kind === "external");
  const byId = new Map(external.map((p) => [p.id, p]));
  const seen = new Set<string>();
  const out: typeof external = [];
  const add = (p: (typeof external)[number] | undefined) => {
    if (p && !seen.has(p.id)) { seen.add(p.id); out.push(p); }
  };
  for (const ref of thrust.data.projects_first ?? []) add(byId.get(ref.id));
  for (const other of thrust.data.projects_also_from ?? []) {
    external.filter((p) => p.data.thrusts.includes(other)).sort(newestFirst).forEach(add);
  }
  external.filter((p) => p.data.thrusts.includes(thrust.id)).sort(newestFirst).forEach(add);
  return out;
}
