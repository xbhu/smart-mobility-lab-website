---
name: Automated & Cooperative Driving
order: 1
tagline: AI for automated vehicles, from deep learning to large language and vision-language models, tested on a full-size vehicle.
keywords: [perception, cooperative localization, lane topology, motion prediction, trajectory control, LLM, VLM, agentic AI]
hero:
  image: /media/thrusts/automated-driving.jpg
  image_alt: The lab’s wrapped automated vehicle on the LTI test track beside a no-passing-zone sign
  video: av-carma-campus
gallery:
  - src: /media/photos/av-roof-camera.jpg
    alt: The forward camera and sensor mounts behind the windshield of the automated vehicle
    caption: Sensors behind the windshield.
  - src: /media/photos/av-interior-displays.jpg
    alt: Rear-seat displays showing the automation software
    caption: Rear-seat displays run the automation stack.
  - src: /media/photos/av-cockpit-test-run.jpg
    alt: A test run on the LTI test track with a safety driver and an operator
    caption: A test run on the LTI test track.
  - src: /media/photos/av-students-in-vehicle.jpg
    alt: Lab members in the driver and passenger seats of the vehicle
    caption: Ph.D. students on a test day.
subtopics:
  - id: perception-localization
    name: Perception and localization
    summary: >-
      Algorithms that let a vehicle know where it is and what the road looks like when GPS is weak and
      lanes are occluded: LiDAR-based cooperative localization between a leader and a follower vehicle,
      LiDAR SLAM for truck automation, monocular visual odometry, infrastructure-assisted cooperative
      perception, all-weather LiDAR segmentation, and lane graph prediction that stays reliable under occlusion.
    papers: [ding-lidar-cooperative-localization-tits-2026, wu-lane-topology-icra-2026, chen-infrastructure-cooperative-perception-jits-2024, ding-allweather-lidar-segmentation-survey-ait-2026, ding-fgd-vo-visual-odometry-ijtst-2026]
  - id: prediction-behavior
    name: Prediction, behavior, and scenario generation
    summary: >-
      Models of how human-driven and automated vehicles actually move, so that planners, digital twins,
      and test scenarios behave like real traffic: online lane-change inference, stochastic lateral
      wandering in mixed traffic, behavior-consistent digital twin trajectories, and collision-constrained
      generation of safety-critical scenarios.
    papers: [li-ccfm-scenario-generation-eccv-2026, qi-lane-change-inference-trc-2022, qi-lateral-wandering-trc-2023, qi-digital-twin-trajectories-iotj-2024]
  - id: planning-control
    name: Planning, control, and AI decision-making
    summary: >-
      Control methods that range from analytical to learning-based: freeway merging control with
      state-dependent discharge rates, deep reinforcement learning for longitudinal trajectories, Monte
      Carlo tree search at arterial intersections, platooning, and simulation-based verification of lane
      keeping assistance. Current projects use vision-language models (VLMs) to turn camera input into
      driving actions and agentic AI built on large language models (LLMs) for goal-directed,
      cooperative decision-making.
    papers: [tang-freeway-merging-tits-2025, cheng-drl-trajectory-planning-jits-2023, cheng-mcts-mixed-traffic-trr-2020, xie-adaptive-platoon-tits-2024, yang-simlkas-lane-keeping-vv-jits-2025]
  - id: infrastructure-policy
    name: Infrastructure and policy for automation
    summary: >-
      What roads and rules need to change before automated vehicles operate at scale: how automated
      driving changes pavement roughness and long-term condition, AI-based pavement condition prediction,
      the PennDOT Act 130 assessment of CAV impacts on Pennsylvania, and an analysis of U.S. automated
      vehicle policy.
    papers: [hav-policy-trt-2026, chen-av-pavement-roughness-rsta-2023, qi-pavement-mixed-traffic-tb-2024, song-pavement-condition-tits-2022, penndot-cav-impact-act130-2025]
featured_papers: [wu-lane-topology-icra-2026, li-ccfm-scenario-generation-eccv-2026, ding-lidar-cooperative-localization-tits-2026, tang-freeway-merging-tits-2025, hav-policy-trt-2026]
videos: [neeli-av-demo, av-lidar-camera-demo, av-carma-demo, av-waypoint-following, av-drive-by-wire, av-carma-campus]
facilities: [autonomous-vehicle, test-track, driving-simulator]
projects_first: [usdot-smart-atma, penndot-act130-cav, penndot-friction-forecasting, dced-atma-gps-denied]
projects_also_from: [work-zone-automation]
collaborate: >-
  We work with agencies and companies that want to test automated driving algorithms on a real vehicle
  and a closed test track, or need an independent evaluation of how automation affects their roads.
---

## Why it matters

Automated vehicles can only deliver on safety and efficiency if they perceive the road reliably,
predict what surrounding drivers will do, and make decisions that hold up in mixed traffic. Each of
those steps breaks in conditions that matter to agencies: weak GPS, occluded lane markings, dense
merges, and roads that were never designed for automated driving.

## What we do

We develop the perception, prediction, and control algorithms behind automated and cooperative
driving, with AI at the core: deep learning for localization and lane topology, reinforcement
learning for control, and foundation models, including large language models (LLMs) and
vision-language models (VLMs), for scene understanding and driving decisions. We are also building
agentic AI that plans and cooperates toward goals. We keep analytical models where they give
guarantees that learning alone cannot.

What sets the work apart is the test loop. Algorithms move from our CARLA–SUMO co-simulation
platform to a full-size autonomous vehicle and then to the Larson Transportation Institute test
track, one of 10 USDOT-designated Automated Vehicle Proving Grounds.

We also study the other side of deployment: how roads, pavement, and policy have to change for
automated vehicles to operate at scale.
