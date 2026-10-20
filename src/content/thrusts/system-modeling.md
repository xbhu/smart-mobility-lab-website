---
name: Transportation System Modeling
order: 4
tagline: Analytical and data-driven models of how traffic, travelers, and networks behave.
keywords: [queueing and capacity, volume-delay functions, OD calibration, connected vehicle data, road friction, privacy-preserving data]
hero:
  image: null
  image_replace: No photo exists. Claude to draw a diagram (e.g., queue/discharge illustration) in phase 4.
subtopics:
  - id: queueing-capacity
    name: Queueing, bottlenecks, and capacity
    summary: >-
      Analytical models of throughput at bottlenecks: a fundamental diagram-consistent fluid queue model,
      multi-state discharge rates for bus-only lane conversion, merging-state roundabout capacity, and a
      review of volume-delay functions from classical forms to AI.
    papers: [pan-fluid-queue-trc-2026, pan-bottleneck-state-estimation-trr-2025, tang-bus-lane-discharge-trb-2021, song-roundabout-capacity-trb-2022, system-modeling-pan-vdf-review]
  - id: network-demand
    name: Network modeling and demand calibration
    summary: >-
      Calibrating dynamic origin–destination demand in congested networks, morning commute equilibrium,
      partitioning networks for macroscopic fundamental diagram-based management, and path algorithms.
    papers: [hu-od-calibration-tits-2017, he-morning-commute-y-network-tre-2026, an-network-partitioning-mfd-tits-2018, hu-k-shortest-paths-ijtst-2015]
  - id: cv-data
    name: Connected vehicle data and road conditions
    summary: >-
      Turning partial connected vehicle data into network intelligence, from estimating turning-movement
      spillover in near real time to interpolating and forecasting road friction for PennDOT.
    papers: [qi-spillover-cv-data-trc-2020]
  - id: privacy
    name: Privacy-preserving mobility data
    summary: >-
      Differential privacy methods for publishing transit smart card and trajectory data, including how to
      allocate the privacy budget so the data stay useful for smart mobility applications.
    papers: [chen-ppdp-privacy-budget-tits-2023, li-ppdp-smart-card-trc-2020]
  - id: behavior-demand
    name: Travel behavior and demand management
    summary: >-
      How information and incentives change travel choices, built on Dr. Hu's work at Metropia on
      incentive-based active demand management and on telematics-based driving risk for usage-based
      insurance.
    papers: [hu-departure-time-ijst-2020, tang-atdm-review-atpp-2019, hu-capacity-reduction-gps-jits-2019, ma-ubi-rate-making-tra-2018]
featured_papers: [pan-fluid-queue-trc-2026, tang-bus-lane-discharge-trb-2021, song-roundabout-capacity-trb-2022, system-modeling-pan-vdf-review]
videos: []
resources:
  - label: PennDOT road friction project site
    url: https://penndot.mobilitypsu.com
collaborate: >-
  Our models help agencies evaluate operational strategies, such as lane conversions, before they
  build them, and get more out of the connected vehicle data they already receive.
---

## Why it matters

Automation, electrification, and AI change how vehicles behave, but agencies still decide with
system-level questions: how much throughput a bottleneck can carry, what a lane conversion will do
to delay, and how travelers will respond. Those questions need models that are both faithful to
traffic flow theory and fast enough to use.

## What we do

We build analytical models where structure matters, such as queues, discharge rates, and merging,
and calibrate them with data. Where data are rich, we use machine learning, and we keep it
consistent with traffic flow physics. Recent work ranges from a fluid queue model for heavy
congestion to a review of volume-delay functions that pairs classical forms with AI-based ones
and comes with open code.

We also make mobility data more useful and safer to share: connected vehicle data for spillover
detection and road friction forecasting, and differential privacy methods for publishing transit
data.
