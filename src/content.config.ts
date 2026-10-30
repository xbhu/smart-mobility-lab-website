// Content model for lab.mobilitypsu.com (spec section 7).
// Every collection is validated at build time: a missing field, a bad date, or a reference to a
// paper/person/thrust that does not exist stops the build instead of shipping a broken page.
import { defineCollection, reference } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const THRUST_IDS = ["automated-driving", "work-zone-automation", "electrification", "system-modeling"] as const;
const thrustId = z.enum(THRUST_IDS);
const yearMonth = z.string().regex(/^\d{4}(-\d{2}){0,2}$/, "use YYYY, YYYY-MM or YYYY-MM-DD");
const yearLike = z.union([z.number().int(), yearMonth]);
const link = z.object({ label: z.string(), url: z.string().url() });

// Review markers carried through from the content draft. Remove them as items are confirmed.
const review = {
  note: z.string().optional(),
  todo: z.string().optional(),
};

const thrusts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/thrusts" }),
  schema: z.object({
    name: z.string(),
    order: z.number().int(),
    tagline: z.string(),
    keywords: z.array(z.string()),
    hero: z.object({
      image: z.string().nullable(),
      image_alt: z.string().optional(),
      image_replace: z.string().optional(),
      video: reference("videos").optional(),
    }),
    // Image for the thrust card on /research and the home page; falls back to hero.image.
    card: z.object({ image: z.string(), alt: z.string() }).optional(),
    // Photos shown under the "why it matters / what we do" text.
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional(), credit: z.string().optional() })).optional(),
    subtopics: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        summary: z.string(),
        papers: z.array(reference("papers")),
        // Outside links shown under the subtopic's papers, e.g. an agency news release.
        links: z.array(z.object({ label: z.string(), url: z.string().url(), note: z.string().optional() })).optional(),
      }),
    ),
    featured_papers: z.array(reference("papers")),
    videos: z.array(reference("videos")),
    facilities: z.array(reference("facilities")).optional(),
    // Sponsored projects on the thrust page (external only): projects_first in the given order,
    // then external projects from projects_also_from thrusts, then this thrust's other external
    // projects; each group newest first.
    projects_first: z.array(reference("projects")).optional(),
    projects_also_from: z.array(thrustId).optional(),
    resources: z.array(link).optional(),
    collaborate: z.string(),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    role: z.enum(["pi", "postdoc", "phd", "deng", "ms", "undergrad", "adjunct", "visiting", "intern"]),
    status: z.enum(["current", "alumni"]),
    title: z.string().optional(),
    start: yearLike.optional(),
    end: yearLike.optional(),
    current_position: z.string().optional(),
    current_url: z.string().url().optional(),
    featured: z.boolean().optional(),
    short: z.string().optional(),
    thrusts: z.array(thrustId).optional(),
    links: z.record(z.string(), z.string()).optional(),
    photo: z.string(),
    page: z.string().optional(),
    profile: z.boolean().optional(),
    // Alumni now in faculty positions; highlighted on the People page.
    faculty: z.boolean().optional(),
    // Manual tie-breaker within a role on the People page: lower first, default 0.
    order: z.number().optional(),
    author_aliases: z.array(z.string()).optional(),
    bio_draft: z.boolean().optional(),
    ...review,
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        person: reference("people").optional(),
        corresponding: z.boolean().optional(),
      }),
    ),
    year: z.number().int(),
    type: z.enum(["journal", "conference", "chapter", "report"]),
    venue: z.string(),
    venue_short: z.string().optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    status: z.enum(["published", "accepted", "under-review"]),
    thrusts: z.array(thrustId).min(1),
    subtopic: z.string(),
    // Atlas: true shows this paper on atlas.mobilitypsu.com (as a "Coming soon" card until its page exists).
    featured: z.boolean().optional(),
    // Lab site: true lists this paper on lab.mobilitypsu.com (Publications, thrust and people pages).
    // Independent of `featured`: the lab site keeps only top journals and conferences.
    show_on_lab: z.boolean().optional(),
    summary: z.string().optional(),
    // Plain-language page on the Research Atlas: https://atlas.mobilitypsu.com/<atlas_slug>/
    atlas_slug: z.string().regex(/^[a-z0-9-]+$/).optional(),
    code: z.string().url().optional(),
    data: z.string().url().optional(), // dataset or data repository
    website: z.string().url().optional(), // project page for this paper
    slides: z.string().optional(),
    pdf: z.string().optional(),
    video: z.string().url().optional(),
    citation_apa: z.string().optional(),
    verified: z.string().optional(),
    ...review,
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/news" }),
  schema: z.object({
    date: yearMonth,
    title: z.string(),
    tags: z.array(z.enum(["grant", "award", "media", "visit", "people", "event"])).min(1),
    thrusts: z.array(thrustId).optional(),
    people: z.array(reference("people")).optional(),
    featured: z.boolean().optional(),
    video: reference("videos").optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    images: z.array(z.object({ src: z.string(), alt: z.string(), credit: z.string().optional() })).optional(),
    links: z.array(link).optional(),
    ...review,
  }),
});

const projects = defineCollection({
  loader: file("src/data/projects.yaml"),
  schema: z.object({
    title: z.string(),
    sponsors: z.array(z.string()).min(1),
    role: z.string(),
    start: z.number().int().nullable(),
    end: z.number().int().nullable(),
    institution: z.enum(["psu", "mst", "metropia"]),
    kind: z.enum(["external", "internal"]),
    thrusts: z.array(thrustId),
    featured: z.boolean().optional(),
    link: z.string().url().optional(),
    tool: z.string().url().optional(),
    dataset: z.string().url().optional(),
    ...review,
  }),
});

const videos = defineCollection({
  loader: file("src/data/videos.yaml"),
  schema: z.object({
    title: z.string(),
    youtube: z.string().nullable().optional(),
    start: z.number().int().optional(),
    url: z.string().optional(), // absolute URL or a site path such as /media/loops/x.mp4
    local: z.string().optional(),
    poster: z.string().optional(), // still shown before a site-hosted video plays
    loop: z.boolean().optional(), // true: silent autoplay loop; otherwise a player with controls
    credit: z.string().optional(), // shown under the video
    date: z.union([yearMonth, z.date()]).optional(),
    source: z.enum(["lab", "psu", "partner", "media"]),
    thrusts: z.array(thrustId),
    featured: z.boolean().optional(),
    use: z.array(z.string()).optional(),
    ...review,
  }),
});

const facilities = defineCollection({
  loader: file("src/data/facilities.yaml"),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    specs: z.array(z.string()).optional(),
    photos: z.array(z.object({ src: z.string(), alt: z.string(), replace: z.string().optional() })),
    videos: z.array(reference("videos")).optional(),
    link: z.string().url().optional(),
  }),
});

const sponsors = defineCollection({
  loader: file("src/data/sponsors.yaml"),
  schema: z.object({
    name: z.string(),
    group: z.enum(["federal", "state", "local", "industry", "penn-state"]),
    url: z.string().url().optional(),
    logo: z.string().optional(),
    logo_permission: z.boolean().optional(),
    show_name: z.boolean().optional(), // print the name under a seal-only logo
    note: z.string().optional(),
  }),
});

// Free-form page copy (home, join, PI page). Fields are documented in each file.
const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages" }),
  schema: z.looseObject({}),
});

export const collections = { thrusts, people, papers, news, projects, videos, facilities, sponsors, pages };
