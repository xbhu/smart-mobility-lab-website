# Penn State Smart Mobility Lab website (lab.mobilitypsu.com)

Content for the new lab site, built with [Astro](https://astro.build) and deployed to GitHub Pages.
This folder currently holds **phase 3 (content)**: every page's copy and all data files, ready to be
dropped into the Astro project in phase 4. The site spec lives in the Claude Docs document
"Smart Mobility Lab 网站 Site Spec v1".

## Layout

```
src/
├── content.config.ts      # schemas for every collection (validated at build time)
├── content/
│   ├── thrusts/           # the 4 research thrust pages (copy + subtopics + featured papers)
│   ├── people/            # one file per person, current and alumni
│   ├── papers/            # one file per selected paper (Atlas fields)
│   ├── news/              # one file per news item, named YYYY-MM-slug.md
│   └── pages/             # home, PI page, Join Us, and short page intros
└── data/
    ├── site.yaml          # name, hero text, headline numbers, contact, navigation
    ├── projects.yaml      # sponsored projects (no dollar amounts)
    ├── videos.yaml        # YouTube IDs and local originals
    ├── facilities.yaml    # AV, test track, simulator
    └── sponsors.yaml      # sponsor name wall
public/media/              # curated, web-sized photos, hero image, and loops used by the site
photos/                    # original photos from XB (not committed to git)
videos/                    # original video files (not committed to git)
working/                   # scratch files such as video contact sheets (not committed)
```

## Adding your information (for lab members)

**Your profile.** Edit `src/content/people/<your-id>.md`. Keep the header fields as they are,
update `short` (one line) and the paragraph below the header (2–3 sentences). Put your photo at
`public/media/people/<your-id>.jpg`: square, at least 800 × 800 px, shoulders up, plain light
background.

**A paper.** Copy an existing file in `src/content/papers/`, rename it
`<firstauthor>-<topic>-<venue>-<year>.md`, and fill in the fields. For lab members, add
`person: <id>` under the author so the paper appears on your profile. Set `thrusts` (first one is the
primary thrust) and a `subtopic` from that thrust's file.

Two independent flags decide where a paper appears. `show_on_lab: true` lists it on this site
(Publications, thrust and people pages); keep that to top journals (TR Part series, IEEE
Transactions) and top conferences, since a short list gets read. `featured: true` puts it on the
Research Atlas (atlas.mobilitypsu.com) as a "Coming soon" card until its page exists. Papers led by an
outside collaborator (first author not in `people`) are listed below the group's own papers.

**A news item.** Add `src/content/news/YYYY-MM-short-title.md` with `date`, `title`, `tags`
(grant, award, media, visit, people, event), and optional links.

Open a pull request; XB reviews and merges. The build checks every field and every reference, so a
typo in a person or paper id fails the build with a clear message instead of shipping a broken link.

## Review markers

Items still waiting for confirmation carry one of these markers. Search for them before launch.

- `VERIFY` in a comment or `note:` field: a fact or number to confirm.
- `todo:` field: information still to be collected (mostly from students).
- `bio_draft: true`: bio drafted from public information; the person should review it.
- `verified: crossref-YYYY-MM-DD` on a paper: title, venue, volume, pages, and year were checked
  against Crossref. Papers without it still need a DOI check.
