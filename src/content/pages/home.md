---
# Home page copy. Section order follows spec section 4. Data-driven sections only carry headings
# and intro lines here; their items come from the collections.
sections:
  hero: { from: site.yaml }
  stats: { from: site.yaml }

  thrusts:
    heading: What we work on
    intro: Four research thrusts, with AI built into each.

  highlights:
    heading: Highlights
    items:
      - title: From field tests to multistate deployment
        thrust: work-zone-automation
        text: >-
          Our leader-follower research helped bring driverless work zone trucks from Missouri field
          tests to state DOT fleets. A USDOT SMART grant now supports deployment with five state DOTs.
        video: atma-cdot-unveiling
        href: /research/work-zone-automation
      - title: Streetlights as EV chargers
        thrust: electrification
        text: >-
          Our Kansas City study of curbside charging from existing streetlights was covered by Penn
          State News, Tech Briefs, Yahoo, MSN, and outlets in China and India in October 2025.
        image: /media/photos/ev-streetlight-pole.jpg
        image_alt: An electric vehicle charging from a streetlight-mounted charger in Kansas City
        href: /news#2025-10-streetlight-ev-charging-research-draws-national
      - title: President Bendapudi rides with our students
        thrust: automated-driving
        text: >-
          Penn State's president and executive team took a self-driving ride on the LTI test track,
          with Ph.D. students Yuxin Ding and Chenxi Chen on board.
        video: neeli-av-demo
        href: /research/automated-driving
    alternates:
      - "2025-10: LiDAR SLAM for leader-follower trucks with Royal Truck"
      - "2026: ICRA paper on occlusion-robust lane graph prediction"

  news:
    heading: Latest news
    count: 3
    more: All news

  facilities:
    heading: Where we test
    intro: >-
      Algorithms move from co-simulation to a full-size autonomous vehicle and then to a USDOT-designated
      proving ground.

  alumni:
    heading: Where our people go
    intro: Our Ph.D. graduates and postdocs lead their own research groups and build industry products.
    people: [qing-tang, yang-song, debojyoti-biswas, chenxi-chen]

  sponsors:
    heading: Sponsors and partners

  recruiting: { from: site.yaml }
---
