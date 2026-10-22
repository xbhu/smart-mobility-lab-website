---
name: Work Zone Automation (ATMA)
order: 2
tagline: Driverless follow trucks that take highway maintenance workers out of the crash zone.
keywords: [leader-follower CDA, autonomous truck mounted attenuator, field evaluation, operational design domain, deployment guidelines]
hero:
  image: /media/photos/atma-hero.jpg
  image_alt: A driverless truck mounted attenuator truck at a live demonstration, with state DOT observers beside the roadway
  video: atma-cdot-unveiling
card:
  image: /media/photos/atma-aerial.jpg
  alt: Aerial view of a lead truck and a driverless follow truck on a suburban road
subtopics:
  - id: field-evaluation
    name: Field testing and evaluation
    summary: >-
      Test protocols and statistical methods that turn field logs into defensible performance
      conclusions. With Missouri DOT we designed 31 test scenarios covering communication loss,
      following accuracy, obstacle detection, and emergency situations.
    papers: [av-atma-field-testing-trr-2021]
  - id: odd-guidelines
    name: Operational design domain and guidelines
    summary: >-
      Where and when an ATMA can operate safely. We model merging traffic around the work convoy on
      two-lane and multilane highways to identify the operational design domain, and translate the
      results into operation and deployment guidelines for state DOTs, including an ATMA toolkit for
      USDOT and deployment guidelines for Colorado DOT (2025).
    papers: [atma-toolkit-usdot-2025, atma-deployment-guidelines-cdot-2025, tang-atma-odd-multilane-trr-2022, tang-atma-odd-two-lane-jits-2024, tang-atma-operation-guidelines-trr-2022]
  - id: resilience-localization
    name: Resilience and localization
    summary: >-
      Keeping the follow truck on the lead truck's path when GPS degrades: LiDAR-based cooperative
      localization and, with Royal Truck, a LiDAR SLAM algorithm for the leader-follower system.
    papers: [ding-lidar-cooperative-localization-tits-2026]
  - id: operations
    name: Operations planning
    summary: >-
      Planning maintenance work around the capabilities of leader-follower vehicles, including route
      optimization for highway maintenance.
    papers: [tang-atma-route-optimization-ai-2026]
featured_papers: [av-atma-field-testing-trr-2021, atma-toolkit-usdot-2025, tang-atma-odd-multilane-trr-2022, ding-lidar-cooperative-localization-tits-2026, tang-atma-route-optimization-ai-2026]
videos: [atma-cdot-unveiling, atma-royal-live-demo, atma-abc-news, atma-modot-field-test, atma-cda-simulation, trb-atma-webinar]
resources:
  - label: "USDOT SMART dataset: ATMA field data from Colorado, Minnesota, Wisconsin, and Oklahoma"
    url: https://rosap.ntl.bts.gov/view/dot/87547
  - label: "TRB webinar slides: Saving Lives with Autonomous Truck Mounted Attenuator Systems (2022)"
    url: https://onlinepubs.trb.org/onlinepubs/webinars/220614.pdf
collaborate: >-
  State DOTs considering ATMA can use our test protocols, operational design domain analysis, and
  deployment guidelines. We support agencies from procurement evaluation through field deployment.
---

## Why it matters

Mobile and slow-moving maintenance operations, such as striping, sweeping, bridge flushing, and
pothole patching, put workers in slow trucks on high-speed roads. In 2017, U.S. work zones saw
158,000 crashes and 61,000 injuries, many involving state DOT employees. In Missouri alone, slow-moving
operations had been struck more than 80 times since 2013.

## What we do

An Autonomous Truck Mounted Attenuator (ATMA) is a leader-follower cooperative driving automation
system. A human-driven lead truck performs the work. A driverless follow truck tracks the lead truck
over V2V communication and carries a truck mounted attenuator, so that if a rear-end crash is
unavoidable, no one is in the truck that takes the hit.

Our lab pioneered research on this system and has supported it from field testing to deployment.
We work with USDOT and FHWA, Colorado DOT, Missouri DOT, and the Autonomous Maintenance Technology
pooled fund, whose members include 17 state DOTs. State DOTs including Colorado and
Missouri have deployed the technology.

Under a USDOT SMART grant, we are working with five state DOTs (Colorado, Minnesota, Wisconsin,
Oklahoma, and California) to deploy ATMA across diverse operating environments, and we have
published the resulting field data with a citable DOI.

## Outreach

Dr. Hu organized the TRB webinar "Saving Lives with Autonomous Truck Mounted Attenuator Systems"
(June 2022), with speakers from a state DOT, industry, and academia. It drew nearly 300 attendees.
