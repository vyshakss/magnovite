export interface EventDetail {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  department: string;
  overview: string;
  stages: { title: string; desc: string }[];
  rules: string[];
  faqs: { q: string; a: string }[];
  prizePool: string;
  date: string;
  fee: string;
  teamSize: string;
  format: string;
  coordinators: { name: string; phone: string; email: string; role: string }[];
  image: string;
  registrationLink?: string;
}

const RAW_EVENTS_DATA: EventDetail[] = [
  {
    "slug": "antrix",
    "title": "Antrix",
    "tagline": "Shape the Wave. Define the Future",
    "category": "Engineering",
    "department": "Electronics and Communication Engineering (ECE)",
    "overview": "ANTRIX is a one-day technical design challenge that combines learning and competition, giving participants hands-on experience in antenna design, simulation, and testing using the ANSYS Electronics Suite (HFSS). Participants begin by learning the fundamentals of antenna theory and simulation through expert-led sessions and guided practice. They then apply their knowledge in a competitive antenna design challenge, where accuracy, innovation, and efficiency under time constraints determine the winners. The event aims to develop practical, industry-relevant simulation skills while encouraging problem-solving and technical creativity. Expected outcomes include hands-on ANSYS HFSS training, real-world exposure to antenna design and analysis, participation and winner certificates, mentorship from faculty experts, and an opportunity to showcase skills in a competitive environment.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "•  Reporting & Registration (9:00 – 9:25 AM): participants report to the venue, complete on-site verification with their college ID, and receive their system and seat allotment.\n•  Inauguration & Briefing (9:25 – 9:30 AM): a short welcome, an overview of the event flow, a walkthrough of the rules, and the lab-safety guidelines.\n•  Learning Session on Antenna Design (9:30 AM – 12:30 PM): an expert-led, hands-on training session on the ANSYS Electronics Suite (HFSS) with guided practice, covering the following topics:\n–  Basics of Antenna Theory\n–  Introduction to ANSYS HFSS\n–  Simulation of Microstrip Patch Antenna and Horn Antenna\n–  Circularly Polarised Antennas\n–  Parameter Optimization and Simulation\n–  Understanding Gain, Return Loss and Radiation Patterns\n•  Break (12:30 – 1:30 PM): systems are reset and the competition problem statement is prepared and loaded.\n•  Problem Statement Release (1:30 PM): the antenna design problem statement, along with the target performance metrics, is revealed to all teams simultaneously.\n•  Antenna Design Competition (1:30 – 4:30 PM): teams apply the concepts learned to design and simulate the given antenna using ANSYS HFSS within the allotted time; the most accurate results (closest to the target performance metrics) win.\n•  Evaluation & Results (from 4:30 PM): submissions are evaluated on simulation accuracy, design approach and time of completion; winners are announced and certificates are awarded to all participants."
      }
    ],
    "rules": [
      "1. A team may have a maximum of 2 members",
      "2. Participation is limited to 60 participants; seats are allotted strictly on a first-come, first-served basis.",
      "3. Attendance for the full learning session is mandatory; only participants who complete it qualify for the competition.",
      "4. Each team will be provided with a system and licensed ANSYS (HFSS) software access; teams must use only the system allotted to them.",
      "5. The competition problem statement, along with the target performance metrics, will be revealed only at the start of the competition; no prior hints will be shared.",
      "6. All design and simulation work must be carried out during the competition using ANSYS HFSS; external design files, pre-made models or pre-built projects are strictly not allowed.",
      "7. Use of the internet, mobile phones, external storage devices or any inter-team communication is not permitted during the competition unless expressly allowed by the coordinators.",
      "8. Teams must save and submit their design files and simulation results in the specified format before the announced deadline; late submissions will not be evaluated.",
      "9. Designs are judged on simulation accuracy (gain, return loss, bandwidth), design approach and documentation, and time of completion, as per the Judging Criteria.",
      "10. Any form of malpractice, plagiarism or tampering with another team's work will lead to immediate disqualification.",
      "11. Participants must handle all lab equipment and systems with care; any intentional damage will be the participant's responsibility.",
      "12. The judges' decisions on evaluation and results are final and binding.",
      "13. Certificates will be awarded to all participants; winners will receive prizes as listed under Winners & Prizes.",
      "14. Volunteers and faculty will be present throughout to assist with technical or procedural queries.",
      "15. The organizers reserve the right to modify the schedule or rules if necessary; any changes will be communicated to participants in advance."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2",
    "format": "Team",
    "image": "/images/events/antrix.webp",
    "registrationLink": "https://forms.gle/NBQny7LPm8GbfK7RA",
    "coordinators": [
      {
        "name": "John Victor Jose",
        "phone": "9986383984",
        "email": "john.victor@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Tanusharvesh",
        "phone": "94437 45725",
        "email": "tanusharvesh.d@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Shashi Kumar D",
        "phone": "9916947645",
        "email": "shashi.kumar@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "apex-strategy",
    "title": "Apex Strategy",
    "tagline": "Develop and execute winning F1 race strategies using data, pit stops, telemetry, and quick decision-making.",
    "category": "Engineering",
    "department": "Automotive Engineering",
    "overview": "Apex Strategy is a technical motorsport engineering competition that challenges participants to step into the role of Formula 1 Race Engineers. The event bridges theoretical strategy with real-time execution using an official Formula 1 Video Game. In Phase 1, teams are provided with a race setup dataset including track length, tire degradation profiles, pit lane loss time, fuel consumption rates, and weather forecasts to formulate an optimal stint and pit stop strategy. In Phase 2, these strategies are put to the test in a controlled in-game race scenario. Real-time telemetry (telemetry screen / UDP dashboard output displaying speed, tire wear, fuel levels, and lap deltas) is monitored by the teams as they make pit calls. The competition tests data analysis, decision-making under pressure, and dynamic adaptability.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": " Round 1 The Strategy Room: Every team receives identical track specifications, tire compound characteristics, fuel usage metrics, and weather probability reports for a 25% or 50% distance race in the F1 game. Teams calculate stint lengths, tire compound choices, and planned pit stop windows to submit their official Strategy Sheet.\n Round 2 In-Game Race Execution: Qualified teams run their planned strategy in an F1 game environment (set up with standardized car performance, AI difficulty, weather settings, and assists). To ensure fair judging and eliminate driver skill bias, the driving is handled by a standardized designated driver or fixed AI baseline, executing the precise pit calls commanded by each team’s \"Pit Wall.\" Teams monitor the in-game telemetry/dashboard to manage tire wear and lap deltas.\n Round 3 The Pit Wall Twist (Dynamic Adaptability) : Midway through the simulated race, dynamic variables occur (e.g., a Safety Car deployment, sudden rain, or virtual safety car). Teams get a short window to calculate and execute a modified pit stop strategy on the fly."
      }
    ],
    "rules": [
      "Teams must consist of 2 to 5 registered members.",
      "Teams must register online before the deadline.",
      "Every participant must carry a valid student ID card.",
      "Strategy sheets for Round 1 must be submitted before the countdown timer expires.",
      "All game sessions will run identical settings (same track, equal car performance, standardized assists, and identical weather presets) to guarantee an unbiased competition field.",
      "Driving controls are strictly standardized or operated by an organizer driver following the team's live pit commands, ensuring the event measures strategy quality rather than gaming skills.",
      "Use of unauthorized external automation tools outside provided spreadsheet/calculation sheets is strictly prohibited.",
      "Unsportsmanlike behaviour (verbal abuse, intentional disruption, unfair tactics) will result in disqualification.",
      "Judges' and referees' decisions will be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹700 per team",
    "teamSize": "2–5",
    "format": "Team",
    "image": "/images/events/apex-strategy.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSd3cpUjAriT0-zPawOE3rGk6A_GMbLCeS8sSGJ2pCB-WBH8-w/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Aarush Verma",
        "phone": "7892796764",
        "email": "aarush.verma@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Reuben Sebastian",
        "phone": "8139036883",
        "email": "reuben.sebastian@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Ravikumar R",
        "phone": "9964167735",
        "email": "r.ravikumar@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "arkicraft",
    "title": "Archicraft 2.0",
    "tagline": "A time-bound AutoCAD design challenge where participants transform a real-world planning brief into creative, functional, and technically precise designs.",
    "category": "Engineering",
    "department": "Civil Engineering",
    "overview": "Archicraft 2.0 is the third edition of the department's flagship AutoCAD design competition, returning after two successful earlier runs. Participants are handed a real-world civil/architectural planning brief on the spot and must translate it into a complete, functional design within a fixed time window using AutoCAD. The event tests conceptual planning, drafting speed, spatial creativity, and technical precision under pressure. It gives budding designers a platform to demonstrate how efficiently and creatively they can turn a brief into a buildable plan, while exposing them to the kind of time-bound problem solving expected in real design practice. Winners are chosen on the basis of the design that best balances creativity with technical efficiency.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "All participating teams receive the same grid scenario and technical data. The scenario may include multiple generation sources, transmission/distribution lines, transformers and different classes of loads such as hospitals, water supply, residential demand, industry and EV charging. Teams must construct the grid model using an approved power-system simulation platform and achieve a valid base operating condition. They must check generation-demand balance, bus voltages, line loading and critical-load supply. Teams submit their model and required simulation results within the allotted time."
      }
    ],
    "rules": [
      "The competition is strictly individual; collaboration during the round is not permitted.",
      "Only AutoCAD (as provided in the lab) may be used; use of any other design software is not allowed.",
      "Reference material, internet access, and pre-made templates/blocks are not permitted during the round.",
      "The design brief will be disclosed only at the start of the event.",
      "Entries must be submitted within the allotted time; late submissions will not be evaluated.",
      "Any form of plagiarism or use of a pre-prepared design will lead to immediate disqualification.",
      "Decisions of the judging panel are final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "16 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2",
    "format": "Team",
    "image": "/images/events/arkicraft.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSd3rK9gnk1U_X6kTgJej5CsiO5DY0Zx_3ChJj-3xISA2gUDwg/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Deeba Dharshan S",
        "phone": "9360624127",
        "email": "deebadharshan.s@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Tharanaa SJ",
        "phone": "8072139271",
        "email": "tharanaa.s@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr Thejas HK",
        "phone": "9686798951",
        "email": "thejas.hk@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "bards-gambit",
    "title": "The Bard's Gambit: Rhetoric and Literary Debate",
    "tagline": "A debate fueled by facts, won with wits",
    "category": "Arts & Humanities",
    "department": "Science & Humanities",
    "overview": "The Bard's Gambit: Rhetoric & Literary Debate is a dynamic speaking competition that celebrates the power of language, critical thinking, and persuasive communication. Inspired by classical rhetoric and literature, the event challenges participants through debates, literary character face-offs, impromptu speeches, and counterfactual historical arguments. Teams must think on their feet, defend unconventional viewpoints, and use logic, humour, evidence, and eloquence to persuade both judges and the audience. The competition blends literature, history, philosophy, and public speaking into an entertaining intellectual battle that rewards creativity as much as factual accuracy. Designed for students from all disciplines, The Bard's Gambit enhances confidence, communication, teamwork, and analytical reasoning while demonstrating that the greatest battles are often won with ideas rather than force.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Round 1 – Rhetoric Blitz (15 Minutes)\nTeams receive an impromptu topic and have 2 minutes to prepare, followed by 3 minutes to present. Topics may include science, literature, ethics, technology, or contemporary issues.\nRound 2 – Literary Face-Off (20 Minutes)\nTeams are assigned famous literary or historical characters (e.g., Shakespeare, Sherlock Holmes, Cleopatra, Chanakya, Marie Curie). Participants defend or humorously \"roast\" opposing characters using evidence, wit, and rhetorical techniques.\nRound 3 – Counter-History Debate (20 Minutes)\nTeams debate alternate-history scenarios such as:\nWhat if electricity had never been discovered?\nWhat if AI existed during the Renaissance?\nWhat if Newton and Einstein debated today?\nJudges evaluate creativity, logic, and persuasive ability\nGrand Finale – The Bard's Gambit (10 Minutes)\nFinalists receive a surprise topic and engage in a rapid-fire debate where rebuttals, audience interaction, and persuasive speaking determine the champion."
      }
    ],
    "rules": [
      "Teams must consist of 2 participants.",
      "Participants must report 20 minutes before the event.",
      "Preparation time is limited and must be strictly followed.",
      "Use of mobile phones, AI tools, or internet access is prohibited during the competition.",
      "Respectful language and professional conduct are mandatory.",
      "Personal attacks, offensive remarks, or discriminatory comments will lead to penalties.",
      "Participants must stay within the allotted speaking time.",
      "Judges may interrupt if time limits are exceeded.",
      "Judges' decisions are final and binding.",
      "Teams must adhere to all event instructions and maintain decorum."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2",
    "format": "Team",
    "image": "/images/events/bards-gambit.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSc65v6inFjiO8l4TDoU8rXNRjPNZLLi07flASttEsurC5m6cw/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Blessing Roshan",
        "phone": "7810008415",
        "email": "blessing.roshan@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "G Nagul",
        "phone": "9788820820",
        "email": "g.nagul@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Rithwik Sankar",
        "phone": "8547343870",
        "email": "rithwik.sankae@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "battle-clay",
    "title": "Battle Clay",
    "tagline": "A creative clay modelling challenge where participants transform ideas into unique three-dimensional forms through imagination, skill, and craftsmanship.",
    "category": "Design",
    "department": "School of Architecture",
    "overview": "About the Event:\n\nBattle Clay is a creative and engaging clay modelling competition that brings together imagination, creativity, and hands-on skills. Participants are challenged to transform their ideas into meaningful three-dimensional forms using clay as the primary medium. The event encourages experimentation, innovative thinking, and artistic expression while developing patience, precision, and craftsmanship. With a limited time to create, participants must think creatively and work efficiently to bring their concepts to life. Battle Clay provides an exciting platform for students to explore form, texture, and structure while competing with others. It celebrates creativity, encourages collaboration, and turns simple ideas into tangible creations.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "• The event is open to undergraduate architecture and design students.",
      "• Each team must consist of 2–3 participants.",
      "•The sculpture must be created during the event within the allotted time.",
      "•  The given theme/prompt must be followed by all teams.",
      "• Participants must bring only the permitted tools and materials.",
      "• Clay will be provided by the organizers. Additional materials, if allowed, must follow the approved material list.",
      "• Teams must not use pre-made, pre-assembled, or ready made sculpture components.",
      "•  Participants are encouraged to experiment with form, volume, texture, balance, and composition.",
      "•Each team must maintain a clean and safe working area.",
      "•  The sculpture must be completed and submitted before the submission deadline.",
      "• Each team must present their concept briefly to the jury.",
      "• Any form of copying or direct replication of an existing artwork will lead to disqualification.",
      "• The organizers' and jury's decisions will be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2–3",
    "format": "Team",
    "image": "/images/events/battle-clay.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdSSZfUhj2o_hCcC_cPubUpa4sdlFEwOeORZ0LOX_FI0LnuAw/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "MothilalRam U",
        "phone": "9342869367",
        "email": "Mothilalram.u@arch.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Mariya John",
        "phone": "8848025263",
        "email": "mariya.john@christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof.  Rashmi S",
        "phone": "9986406742",
        "email": "rashmi.s@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "best-management-team",
    "title": "Best Management team",
    "tagline": "A people-powered adventure featuring escape rooms, trust challenges, impact missions, and crisis simulations, where every decision shapes your team, your community, and your success",
    "category": "Management",
    "department": "MBA",
    "overview": "BMT - The Altitude Project is a two-day, cross-functional business management simulation in which each three-member team assumes the role of an Integration Committee overseeing a high-stakes, real-world-inspired merger: an international airline acquiring a luxury hotel chain. Across eight escalating rounds spanning Marketing, Finance, HR, Consulting, Corporate Strategy and Crisis Communication, teams move from structured Day-1 case rounds through an overnight strategic-planning sprint into two live elimination gates and a press-conference finale. The format deliberately tests judgement, communication and composure under pressure rather than narrow technical skill, making it equally accessible to students of Management, Commerce, Engineering, Psychology and Architecture. Participants are expected to leave with a sharpened ability to make decisions under ambiguity, defend a position before a hostile panel, and manage competing stakeholder interests - the core instincts of real organisational leadership.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "The event runs across two days, structured as a continuous merger-integration narrative. Day 1 comprises four non-eliminating functional rounds that build each team’s cumulative standing. An overnight strategic-planning round (Round 5) follows, also non-eliminating. Day 2 opens with two sequential elimination gates before the finale."
      }
    ],
    "rules": [
      "Each team must consist of exactly three participants, acting jointly as the Integration Committee for the full duration of the event.",
      "All three members of a team must be from the same participating institution, subject to Magnovite regulations.",
      "The event is open to both undergraduate and postgraduate students across all academic disciplines.",
      "The competition is non-technical: all case data, financial figures and reference frameworks required for each round are supplied by the organisers; no external material may be brought in.",
      "The three members who qualify from Day 1 to the overnight round, and from the overnight round into Day 2, must remain the same; substitutions are not permitted except where fest rules explicitly allow it.",
      "Round 1 (Quiz) results determine each team’s Sabotage Currency, which may be spent ahead of Round 5 to purchase a disadvantage against a rival team through the sealed, anonymous bidding process described in Round 5.",
      "A maximum of one Sabotage disadvantage may be purchased against any single rival team.",
      "In live rounds (Rounds 4, 5, 6, 7 and 8), all three teammates must be present for the full duration, even where only one member is actively speaking at a given moment.",
      "In Round 6, no teammate may assist or coach another teammate during that teammate’s live call.",
      "In Round 7, panellists may redirect a question to any teammate at any time; the addressed teammate must respond without inter-team consultation.",
      "Twist cards, correction packets and curveballs introduced mid-round are final once revealed and must be incorporated into the team’s response.",
      "Negative marking, where applicable, will be announced by the organisers before the start of the relevant round.",
      "All written submissions (plans, memos) must be handed in within the announced time limit; no submissions will be accepted thereafter.",
      "Use of mobile phones, smart devices or unauthorised material during any round is prohibited unless explicitly permitted by the organisers for that round.",
      "Any form of plagiarism, unauthorised assistance, disruptive conduct or misconduct may lead to disqualification of the team.",
      "In the event of a tie at either elimination gate (Round 6 or Round 7), the organisers will conduct a sudden-death tie-break at their discretion.",
      "Participants must be available for the full duration of both days, including the overnight Round 5.",
      "The decision of the judging panel and organising committee on all matters, including scoring and eliminations, will be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹900 per team",
    "teamSize": "3 members",
    "format": "Team",
    "image": "/images/events/best-management-team.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdfz88LDlhAE4q3kVLOvc-AVIDYMzIm3PGhS2VAL7jeWI5lDQ/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Samuel Philip",
        "phone": "8299811658",
        "email": "samuel.philip@mba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Lisa Shibu George",
        "phone": "8434673061",
        "email": "lisa.shibu@mba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Prathima V G",
        "phone": "9845458055",
        "email": "prathima.vg@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "best-manager",
    "title": "Best Manager",
    "tagline": "Know the Game, Master the Challenge, Lead the Way",
    "category": "Management",
    "department": "BBA",
    "overview": "Best Manager is a flagship management event designed to test participants on their ability to think, strategise, communicate, lead, and make effective decisions under pressure. The event simulates real-world managerial situations, challenging participants to step into the shoes of a manager and navigate diverse business scenarios.\n\nThe competition encompasses multiple facets of management, including Human Resources, Marketing, Finance, Operations, Strategy, Leadership, Communication, and Decision-Making. Through a series of engaging rounds, participants will be tested on their analytical thinking, creativity, problem-solving abilities, managerial aptitude, and ability to adapt to dynamic situations.\n\nRather than evaluating participants on a single skill set, Best Manager takes a 360° approach to management, assessing how effectively an individual can balance people, resources, strategy, and business objectives. The event ultimately seeks to identify the participant who demonstrates the versatility, confidence, leadership, and managerial acumen required to become the complete manager.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "Eligibility: The event is open to registered participants who meet the eligibility criteria specified by the organizing committee.",
      "Individual Participation: Each participant must compete individually and demonstrate their own managerial capabilities throughout the event.",
      "Registration: Participants must complete the registration process within the stipulated deadline. No changes to registration details will be permitted after the deadline unless approved by the organizers.",
      "Punctuality: Participants must report to the venue at the designated time. Late arrivals may be disqualified from a particular round at the discretion of the organizers.",
      "Fair Play: Participants must maintain professional conduct and demonstrate integrity, discipline, and respect towards fellow participants, judges, volunteers, and organizers.",
      "Use of AI: AI tools may be used for research and information gathering. However, participants are responsible for verifying the accuracy of the information and ensuring that their final submissions demonstrate their own analysis, interpretation, and managerial judgement.",
      "Electronic Devices: The use of electronic devices will be permitted only when specifically allowed by the organizers for a particular round.",
      "Decision of Judges: The decisions of the judging panel and organizing committee will be final and binding. No appeals or arguments against the evaluation process will be entertained.",
      "Disqualification: Any form of cheating, plagiarism, misconduct, impersonation, unauthorized assistance, or violation of event rules may lead to immediate disqualification."
    ],
    "faqs": [],
    "prizePool": "10K",
    "date": "15-16 Sept 2026",
    "fee": "₹750 per person",
    "teamSize": "Individual",
    "format": "Solo",
    "image": "/images/events/bestmanager.avif",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdrfAVuAfJqZhYe_QCt5fLvfjORFlrm9Q1Ah_PbSj5m4Fyosw/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Reuben John Paul",
        "phone": "8848041322",
        "email": "reuben.john@bba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Ananya Suresh",
        "phone": "8086530146",
        "email": "ananya.suresh@bba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr Charunayan Kamath",
        "phone": "9585587443",
        "email": "charunayan.kamath@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "bitforge",
    "title": "BitForge",
    "tagline": "The code is flawed. The clock is ticking.Bring the logic to life.",
    "category": "Engineering",
    "department": "Electronics and Communication Engineering (ECE)",
    "overview": "BitForge is a high-energy, multi-round digital logic and hardware engineering challenge designed to bridge the gap between theoretical concept and practical execution. The event tests number system conversions, logic gate optimization, cryptographic problem-solving, and live hardware prototyping.\n\nStarting with a fast-paced cryptographic and riddle-based paper sprint, teams must decode a chain of interlinked puzzles — hexadecimal riddles, direction-finding clues, and a logic gate maze — before moving on to a three-stage classical cryptography round covering Caesar, Vigenère, and Playfair ciphers. Finalist teams then bring abstract paper logic to life by manually wiring physical Digital IC Trainer Kits under a ticking clock, before the grand finale tests their ability to design and optimize a circuit against a live fluctuating cost market. The event has a low barrier to entry but a high skill ceiling, making it challenging for engineering students while remaining intuitive and playable.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "The event consists of a 4-round eliminator structure. Teams progress by successfully completing the technical objectives within the allocated timeframes. All necessary baseline principles are provided in a specialized “Hacker’s Cheat Sheet” at the start, ensuring that logic and execution triumph over mere memorization.\nEvent Date: 15th September 2026.  Venue: Department of ECE, CHRIST (Deemed to be University), Kengeri Campus.\nReporting & Registration: Participants report to the venue, complete on-site verification with their college/school ID, and receive their team allotment and seating.\nInauguration & Briefing: A short welcome, an overview of the competition flow, distribution of the Hacker’s Cheat Sheet, a walkthrough of the rules, and lab-safety guidelines for the hardware round."
      }
    ],
    "rules": [
      "Each team must consist of  3 participants.",
      "Participants must arrive at the designated venue before the official commencement time and complete on-site verification with a valid college/school ID.",
      "Late arrivals must strictly follow organizer directives; seats are allotted on a first-come, first-served basis.",
      "All teams receive identical problem criteria and schematics per round.",
      "Teams must complete challenges in the sequence mandated by the organizers, including all sub-rounds of Round 1 and Round 2.",
      "The Round 1 Crypto Key and Direction, and the Round 2 chained cipher outputs, must each be derived by the team itself; keys or intermediate values obtained from another team will lead to disqualification.",
      "Solutions for the paper-based rounds will be revealed entirely at the conclusion of the event.",
      "Final circuit configurations in Round 3 must be fully justified by the provided logical tokens; arbitrary guessing or trial-and-error switch flipping will result in round penalization.",
      "Final gate purchases and circuit designs in Round 4 must be justified through the team’s submitted Boolean algebra / K-Map working; unjustified or excessive token purchases will result in cost penalties.",
      "Laptops are not required. Using internet-connected devices, smartwatches, or AI tools is strictly prohibited unless explicitly authorized by the organizers.",
      "Teams may carry baseline stationery for recording variables, riddle answers, and tracking logic/cipher states.",
      "Cheating, copying another team’s work, or discussing solutions/keys across team boundaries will result in immediate disqualification.",
      "Participants must handle the Digital IC Trainer Kits and IC chips responsibly. Deliberate damage or alteration of experimental components will result in disqualification.",
      "The organizers reserve the right to modify the schedule, riddles, or rules if necessary; any changes will be communicated to participants in advance.",
      "The judges’ decisions on evaluation and results are final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "16 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "3",
    "format": "Team",
    "image": "/images/events/bitforge.webp",
    "registrationLink": "https://forms.gle/MrJieP6j78v6e9BE9",
    "coordinators": [
      {
        "name": "Lourdes Xavier",
        "phone": "80957 65526",
        "email": "lourdes.xavier@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Sravan N",
        "phone": "6385781722",
        "email": "sravan.n@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Praghash K",
        "phone": "95856 35381",
        "email": "praghash.k@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "bot-wars",
    "title": "Bot Wars",
    "tagline": "Put your combat robot to the test in an intense battle of strategy, power, and control",
    "category": "Engineering",
    "department": "Mechanical Engineering",
    "overview": "BOT WARS 2026 (Robo War) is a high-intensity robot combat competition where teams put their custom-built combat robots to the ultimate test. Participants will battle their opponents inside a controlled arena using strategically designed robots equipped with permitted offensive and defensive mechanisms. The event tests engineering, strategy, control, reaction time, and robot durability in an exciting head-to-head competition. Teams must outmanoeuvre their opponents, withstand attacks, and strategically use their robot's capabilities to gain the upper hand. With elimination-based battles leading to the final showdown, only the strongest and most strategic robot will emerge victorious.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Knockout-based tournament\n1 vs 1 robot battles\nOne robot per team will participate in a match.\nThe winner advances to the next round.\nThe final surviving team will be declared the ROBO WAR 2026 Champion.\nIn case of a draw, a tie-breaker round will be conducted."
      }
    ],
    "rules": [
      "Ram/pushing mechanisms",
      "Other mechanisms approved by the organizers",
      "Both robots must be positioned in their designated starting zones.",
      "The match begins only after the referee gives the start signal.",
      "Teams must control their robots only from the designated control area.",
      "A robot is considered defeated if it:",
      "Becomes immobilized.",
      "Is unable to continue the match.",
      "Is knocked out of the designated arena.",
      "Is declared defeated by the referee.",
      "Deliberate attacks on the arena structure are prohibited.",
      "Teams must stop their robot immediately when instructed by the referee.",
      "The referee's decision will be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹800 per team",
    "teamSize": "4–6",
    "format": "Team",
    "image": "/images/events/bot-wars.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSeXRym4GgRvWfTcTFdtDWiXcPwLpv_bJPegNSnEzcWvmU3GsQ/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Mayank Ramesh",
        "phone": "7899874479",
        "email": "mayank.ramesh@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Nathaniel Ronald Hoskeri",
        "phone": "8197318205",
        "email": "nathaniel.ronald@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Umesh V",
        "phone": "9164368155",
        "email": "umesh.v@christuniversity.in",
        "role": "Faculty POC"
      },
      {
        "name": "Dr Jangam Sasidhar",
        "phone": "8884639888",
        "email": "sasidhar.jangam@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "canvas-of-minds",
    "title": "Canvas of Minds: STME Face Art Challenge",
    "tagline": "When faces become canvases, each has a story to tell",
    "category": "Arts & Humanities",
    "department": "Science & Humanities",
    "overview": "Canvas of Minds: STEM Face Art Challenge is a vibrant live art competition where creativity meets academics. Teams of two transform a teammate's face into a living masterpiece inspired by an on-the-spot theme drawn from Mathematics, Physics, Chemistry, or English Literature and Language. Participants must creatively interpret abstract concepts, famous discoveries, literary works, equations, symbols, or scientific phenomena using only face painting techniques. With imagination, artistic skill, and storytelling at its core, the event challenges students to communicate complex ideas visually. The competition encourages interdisciplinary thinking by blending art with education while promoting originality, teamwork, and self-expression. Whether depicting the elegance of mathematical patterns, the beauty of chemical reactions, the mysteries of physics, or the richness of literature, every face becomes a unique work of art.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Phase 1 – Theme Reveal (10 Minutes)\nEach team receives one randomly assigned theme from:\nMathematics\nExamples:\nInfinity, Fractals, Geometry, Fibonacci, Mathematical Genius\nPhysics\nExamples:\nSpace-Time, Quantum World, Black Hole, Light, Newton's Universe\nChemistry\nExamples:\nPeriodic Table, Fire & Ice, Chemical Bonds, Radioactivity, Molecular Art\nEnglish\nExamples:\nShakespeare, Alice in Wonderland, Poetry, Fantasy, Gothic Literature\nPhase 2 – Face Painting (60 Minutes)\nTeams create a complete face artwork based on the assigned theme.\nParticipants may extend the artwork slightly onto the neck or hands if desired.\nPhase 3 – Presentation (2 Minutes per Team)\nTeams explain:\nTheme interpretation\nArtistic concept\nSymbolism\nCreative process"
      }
    ],
    "rules": [
      "Teams must consist of 2 participants.",
      "One participant must serve as the artist and the other as the model.",
      "Participants must bring their own face paints, brushes, sponges, palettes, mirrors, and accessories.",
      "Only cosmetic-grade, skin-safe, non-toxic face paints are permitted.",
      "Acrylic paints, poster colours, fabric paints, oil paints, permanent markers, spray paints, or any harmful substances are strictly prohibited.",
      "The assigned theme must be followed.",
      "Artwork must be created entirely during the competition.",
      "No pre-painted designs or stencils are allowed.",
      "Teams must complete their artwork within the allotted time.",
      "AI and internet reference use will be restricted for the duration",
      "Judges' decisions are final."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2",
    "format": "Team",
    "image": "/images/events/canvas-of-minds.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScSxLCHw9YroO7c_9zxrEnmoLx8h8GCL3brhen7T5h65t6ukw/viewform?usp=header",
    "coordinators": [
      {
        "name": "Aishwarya R",
        "phone": "7795685267",
        "email": "aiswarya.r@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Mahak Bachani",
        "phone": "8964805033",
        "email": "mahak.bachani@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr Aparna Sreedharan",
        "phone": "7598430592",
        "email": "aparna.sreedharan@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "casecraft-pitch-and-pivot",
    "title": "CaseCraft: Pitch & Pivot",
    "tagline": "An immersive industry case challenge where teams analyse, strategise, adapt to the unexpected, and convince stakeholders that their solution can survive.",
    "category": "Management",
    "department": "IIIC",
    "overview": "This event is designed to enable student teams to apply strategic and technical reasoning to a live, real-world industry case, thereby bridging academic theory with the pace and complexity of actual critical problem-solving.\n\nParticipating teams are presented with an unseen industry case on the day of the event and are required to analyse it and formulate a viable solution, submitted as a strategic pitch deck of up to three slides. Every team then draws a random twist, an unforeseen disruption to their case, and must revise their solution's future prospects accordingly, presenting and defending it as a hand-made poster, created using art supplies provided by the organising committee, before a panel acting as skeptical investors. Results are announced at a valedictory ceremony the following day.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Briefing Session: A mandatory briefing is conducted prior to the competition to outline the case structure, round format, twist mechanic, and submission specifications, and to address participant queries.\nCase Release: Teams receive the live industry case on the day of the event.\nRound 1: Live Case Analysis & Pitch Deck Submission: Teams collaboratively analyse the case and formulate a strategic, technically feasible solution within the stipulated time, and submit a pitch deck of up to 3 slides (excluding the title slide and annexures) detailing their proposed solution.\nThe Twist: Every team draws a chit at random, introducing an unforeseen disruption to their case (such as a funding cut, new competitor, or regulatory change) that they must factor into their solution's future outlook.\nRound 2: The Skeptical Investor: Poster Presentation: All teams revise their solution's future prospects in light of the drawn twist and hand-make a poster to defend its continued viability.\nFinal Presentation: All teams present and defend their poster before a panel of industry experts and academic representatives, acting as skeptical investors, followed by a live Q&A.\nJudging and Evaluation: The panel evaluates each team's performance across both the pitch deck and poster presentation, and finalises rankings.\nValedictory Ceremony (Day 2): Results are announced and winners are felicitated at the valedictory ceremony on the following day."
      }
    ],
    "rules": [
      "Each team shall comprise 2 to 4 participants currently enrolled in any recognised undergraduate or postgraduate programme.",
      "Interdisciplinary teams are encouraged, as diverse academic perspectives often lead to more comprehensive and practically viable outcomes.",
      "A mandatory briefing session will be conducted prior to the competition to outline the case structure, round format, twist mechanic, and submission specifications, and to address participant queries.",
      "All teams will proceed through both rounds of the competition; there is no elimination between Round 1 and Round 2.",
      "Round 1 pitch decks must not exceed 3 slides, excluding the title slide and annexures (if any), and must represent the team's original solution to the case.",
      "Each team must draw their twist chit at the designated time and incorporate the disruption drawn into their Round 2 poster and defense; twists, once drawn, cannot be exchanged, re-drawn, or declined.",
      "Posters must be hand-made by the team using their own art supplies on chart papers provided by the organising committee. Posters must be completed by the team within the stipulated time during Round 2.",
      "All submissions (pitch deck and poster) must represent original work developed during the event. Any form of plagiarism will result in immediate disqualification.",
      "Participants are expected to maintain professional conduct and adhere to event timelines throughout the competition.",
      "Judges' decisions are final and binding in all matters related to rankings and awards.",
      "Results will be announced, and winners felicitated at the valedictory ceremony on Day 2.",
      "The organising committee reserves the right to modify the event structure, schedule, or rules if deemed necessary for the effective conduct of the competition."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2-4 members",
    "format": "Team",
    "image": "/images/events/casecraft.jpg",
    "registrationLink": "https://forms.gle/vBXPTD6fsJ2jTUiR7",
    "coordinators": [
      {
        "name": "Rebecca Lenin Koshy",
        "phone": "6356117125",
        "email": "rebecca.lenin@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Annmarie Vinish",
        "phone": "8921323033",
        "email": "annmarie.vinish@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Joseph Rodrigues",
        "phone": "9420594564",
        "email": "joseph.rodrigues@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "chess-grandmaster",
    "title": "Chess Grandmaster",
    "tagline": "“A competitive chess showdown where participants put their strategic thinking, tactical skills, and decision-making to the test in a battle of intellect and precision.”",
    "category": "Arts & Humanities",
    "department": "Science & Humanities",
    "overview": "A competitive chess showdown where participants put their strategic thinking, tactical skills, and decision-making to the test in a battle of intellect and precision. Players will compete across timed rounds demonstrating acute concentration, board vision, and mastery under pressure.",
    "stages": [],
    "rules": [
      "Standard FIDE rules apply to all tournament matches.",
      "Time controls and round formats will be briefed prior to the commencement of play.",
      "Silence and sportsmanship must be maintained in the playing arena at all times."
    ],
    "faqs": [],
    "prizePool": "15K",
    "date": "15 Sept 2026",
    "fee": "₹200 per person",
    "teamSize": "Individual",
    "format": "Solo",
    "image": "/images/events/chess-grandmaster.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScl5_s9O-V-DrnAg70WvLdN1F4oYGvJ4rWSPReLK9ZUIRvb4A/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Shelomi",
        "phone": "8657486564",
        "email": "shelomi.dsouza@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Thomas Mathew Sajeev",
        "phone": "9747482072",
        "email": "thomas.mathewsajeev@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr.Raghu MS",
        "phone": "9844626569",
        "email": "raghu.ms@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "cipher-quest",
    "title": "Cipher Quest",
    "tagline": "A three-round cryptography challenge where participants program their way through Caesar, Vigenère, and Affine ciphers.",
    "category": "Coding & Tech",
    "department": "Computer Science & Engineering (CSE)",
    "overview": "Cipher Quest is a cryptography-based programming challenge that takes participants through three progressive rounds involving classical cipher techniques. Participants will be required to apply their programming and problem-solving skills to solve cipher-based challenges and uncover information that leads them through the quest. The event will involve the Caesar Cipher, Vigenère Cipher, and Affine Cipher, with participants expected to understand and implement these techniques during the competition. Each round introduces a new challenge that tests their ability to analyse cipher patterns, develop appropriate programs, and arrive at the correct solution. The event combines cryptography, programming, logical reasoning, and problem-solving in an engaging, progressive challenge designed to test both technical knowledge and the ability to adapt to different cipher techniques.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Round 1 – Caesar Cipher:\nParticipants will receive a cipher-based challenge involving the Caesar Cipher and must develop a program to solve it. Successful completion of the challenge will provide the information required to proceed to the next round.\nRound 2 – Vigenère Cipher:\nParticipants will receive a Vigenère Cipher challenge along with the necessary information to solve it. They must develop a program to decrypt the given message and successfully complete the challenge to proceed further.\nRound 3 – Affine Cipher:\nParticipants will face a final Affine Cipher challenge requiring them to develop and implement a suitable program to solve the given task. Successful completion of the challenge will reveal the final outcome of the quest.\nThe first team to successfully complete all three rounds will be declared the winner."
      }
    ],
    "rules": [
      "Each team must consist of 2–4 members.",
      "Participants must complete the rounds in the given sequence.",
      "Teams must write their own programs for encryption and decryption during the event.",
      "The required cipher and relevant information will be provided at the beginning of each round.",
      "Teams may use publicly available resources and documentation for reference.",
      "Copying another team's code or solutions is strictly prohibited.",
      "Teams must submit their decoded/encrypted outputs within the specified time limit.",
      "Any form of unauthorized collaboration, plagiarism, or unfair assistance will result in disqualification.",
      "Participants must not interfere with or attempt to access another team's files, systems, or work.",
      "The organizers may provide hints or clarifications at their discretion.",
      "The judges' decision will be final and binding.",
      "The organizers reserve the right to modify the rules, challenges, or schedule if necessary.",
      "The use of AI tools is not encouraged, as the event is intended to test participants' own programming, logical reasoning, and problem-solving skills."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/cipher-quest.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdWG_widE2nn2jJpioIKVj5bhCcgSdvK6N1jNh72KsO_KoccA/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Dinesh Babu",
        "phone": "8300196030",
        "email": "dinesh.babu@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Ridhi M Chabbria",
        "phone": "9444693407",
        "email": "ridhi.m@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Sherin Paul",
        "phone": "9385446508",
        "email": "",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "corporate-crossfire",
    "title": "Corporate Crossfire",
    "tagline": "Where Diplomacy Meets the Knife, and Every Decision Has a Price",
    "category": "Management",
    "department": "BBA",
    "overview": "Corporate Crossfire simulates real-world corporate situations where participants must\n\nnavigate conflicting perspectives, stakeholder interests, ethical dilemmas, and unexpected challenges. The event moves beyond conventional debates by placing participants in\n\ndynamic situations that demand strategic thinking, informed decision-making, adaptability, and the ability to respond effectively under pressure.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "Team Composition: Each team must consist of two participants, and the team composition cannot be changed once the event begins.",
      "Timeliness: Participants must report on time for every round. Late entry or delayed submission may result in a deduction of marks or disqualification from the respective round.",
      "Submission: All submissions must be made through the designated platform within the specified time. Late submissions will not be accepted unless permitted by the organizers.",
      "AI Usage: AI tools may be used only in rounds where they are explicitly permitted. The usage will be time-bound and limited as specified for that particular round.",
      "Unauthorized or excessive use of AI may result in disqualification from the round.",
      "Originality: All submissions and responses must be the participants' own work.",
      "Plagiarism, copying, or using another team's ideas or submissions without permission will result in disqualification.",
      "GD Conduct: Participants must maintain a professional and respectful tone during group discussions. Active listening, relevant participation, and constructive engagement are expected. Excessive interruption or dominating the discussion may affect the",
      "evaluation.",
      "Debate Conduct: Participants must challenge the argument, not the individual. Personal remarks, offensive language, shouting, or deliberately preventing another participant from speaking will not be permitted.",
      "Use of Devices: Mobile phones and other electronic devices may be used only when",
      "permitted for a particular round. Unauthorized communication or use of devices during restricted rounds may result in disqualification.",
      "Time Management: Participants must strictly adhere to the time limits communicated for each round. Judges may stop a participant or team once the allotted time expires.",
      "Judging & Organizer’s Decision: Participants will be evaluated according to the",
      "criteria specified for each round. The decision of the judges and organizing committee regarding scoring, elimination, and disqualification will be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2",
    "format": "Team",
    "image": "/images/events/businessplan.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfVnyfr_0qqV59Lc_3wcYvEERUVjx8MlOBmznqyzNnRSB3A8g/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Manasi Padmnabh Bhake",
        "phone": "9730619566",
        "email": "manasi.padmnabh@bba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Rishabh Agrawal",
        "phone": "8809953158",
        "email": "agrawal.rishabh@bba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Shilpa Rajagopal",
        "phone": "8301057146",
        "email": "shilpa.rajagopal@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "drag-race-xtreme",
    "title": "Drag Race Xtreme",
    "tagline": "A high-speed RC drag racing challenge where teams race their custom-built vehicles over a straight track, competing for the fastest finish.",
    "category": "Engineering",
    "department": "Automotive Engineering",
    "overview": "RC Drag Race is a high-speed remote-controlled vehicle competition where participants compete to cover a 50-metre straight-line track in the shortest possible time.\n\nThe event gives participants freedom to design, build, modify and optimize their own RC vehicles while applying concepts of acceleration, traction, power transmission, gearing, vehicle dynamics and control.\n\nThe competition follows an Open Build approach, with only essential dimensional, weight, drivetrain, battery and safety restrictions. Participants can experiment with different motors, gearing, tyres, chassis configurations and other engineering solutions.\n\nThe event aims to promote hands-on engineering, innovation, practical problem-solving and competitive spirit among students from different institutions.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Qualification — Time Trial\nAll registered teams will participate individually.\nEach team will get 2 timed runs on the 50-metre straight track.\nThe best valid time from the two runs will be considered as the team's qualifying time.\nAll teams will be ranked according to their best qualifying time.\nThe top 8 teams with the fastest qualifying times will advance to the head-to-head stage.\nHead-to-Head Stage — Quarter-Finals\nThe 8 qualified teams will be seeded according to their qualification ranking:\nTeam 1 vs Team 8\nTeam 2 vs Team 7\nTeam 3 vs Team 6\nTeam 4 vs Team 5\nTwo teams will race simultaneously on the two parallel 50-metre tracks.\nThe first vehicle to cross the finish line wins and advances.\nThe qualifying times will not be considered for determining the winner of a head-to-head race.\nSemi-Finals\nThe four quarter-final winners will compete in two head-to-head races.\nWinner QF1 vs Winner QF2\nWinner QF3 vs Winner QF4\nThe first vehicle to cross the finish line advances to the Grand Final.\nThird-Place Race\nThe two semi-final losers will compete against each other.\nThe winner will be awarded 3rd place.\nGrand Final\nThe two semi-final winners will compete head-to-head.\nThe first vehicle to cross the 50-metre finish line will be declared the RC Drag Race Champion.\nCrash / Restart Rule:\nFrom the Head-to-Head Stage onwards, there will be no restart due to: Crash, Collision, Loss of control, Vehicle malfunction, Hitting an obstacle, Any other participant-related incident,\nThe race will continue, and the team that successfully crosses the finish line first will win.\nException: A restart may be authorized by the event officials only if the race is affected by an external factor, track obstruction, timing-system failure, or other technical issue beyond the participants' control. The decision of the event officials will be final."
      }
    ],
    "rules": [
      "Each team shall consist of 2–4 participants.",
      "Each team shall register one RC vehicle for the competition.",
      "The competition will be conducted on a 50-metre straight drag track.",
      "There shall be no restriction on the drive configuration. 2WD, 4WD, AWD and other drive configurations are permitted.",
      "The maximum vehicle dimensions shall be:",
      "Length: 300 mm (5% tolerance allowed)",
      "Width: 300 mm (5% tolerance allowed)",
      "Height: 200 mm",
      "The maximum permissible vehicle weight is 3 kg.",
      "The vehicle must be self-made/home-built by the participating team. Ready-to-run (RTR) or complete commercially manufactured RC vehicles are not permitted. Individual commercially available components may be used.",
      "Motor type, motor KV/RPM, ESC, gearing, drivetrain, chassis, suspension and tyre selection are unrestricted, subject to the specified safety requirements.",
      "The battery shall be limited to a maximum of 3S LiPo (11.1 V nominal / 12.6 V maximum fully charged).",
      "Battery voltage will be verified during technical inspection using a multimeter.",
      "The vehicle must pass the technical and safety inspection before participating.",
      "Batteries must be securely mounted, and all electrical connections must be properly insulated and secured.",
      "Vehicles must be operated only using a suitable remote-control system.",
      "The vehicle must remain within its designated racing lane during the run.",
      "A vehicle leaving the designated track/lane may be considered to have made an invalid run.",
      "During the qualification stage, if a vehicle crashes, loses control, malfunctions, or otherwise fails to complete a valid run, the attempt will be considered invalid. The team may proceed with its second scheduled attempt, but no additional attempt will be provided.",
      "From the Head-to-Head Stage onwards, no restart shall be provided for crashes, collisions, loss of control, vehicle malfunction, hitting an obstacle, or any other participant-related incident.",
      "A restart may only be authorized by event officials in case of an external factor, track obstruction, timing-system failure, or other technical issue beyond the participants' control.",
      "Deliberate interference, collision or obstruction of another participant's vehicle is strictly prohibited.",
      "Participants are prohibited from entering the racing track while a run is in progress.",
      "Repairs and adjustments may be carried out only in the designated area.",
      "Only the registered vehicle may be used throughout the competition.",
      "Any vehicle deemed unsafe by the technical officials may be disqualified until the safety issue is rectified.",
      "Any intentional violation of the technical regulations or safety guidelines may result in disqualification.",
      "The organizers reserve the right to modify the event schedule or format if required due to safety, technical or logistical reasons.",
      "The decision of the event officials/judges regarding technical compliance, run validity and final ranking shall be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹800 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/drag-race-xtreme.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScdhvBav78141DyPQpEmsSDP6kFpGdKKuHaqFFVYZLB7j6FfA/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Albin Laiju",
        "phone": "9108156940",
        "email": "albin.laiju@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Swapnabit Das",
        "phone": "7029449122",
        "email": "swapnabit.das@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Hadiya Pritesh",
        "phone": "9591668787",
        "email": "hadia.pritesh@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "drone-maze-challenge",
    "title": "Drone Maze Challenge",
    "tagline": "Navigate a challenging obstacle course with precision, speed, and expert drone control.",
    "category": "Engineering",
    "department": "Mechanical Engineering",
    "overview": "Drone Maze Challenge 2026 is a high-intensity drone navigation competition designed to test precision, control, reflexes, and piloting skills. Participants must navigate their drones through a specially designed obstacle maze consisting of gates, hoops, narrow passages, turns, and restricted flight sections. The objective is to complete the designated course in the shortest possible time while avoiding obstacles and penalties. The event provides participants with an exciting platform to demonstrate their drone-handling abilities, spatial awareness, reaction time, and control precision. It also promotes interest in unmanned aerial systems and hands-on technology while providing an entertaining and competitive experience for students from different colleges.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Qualification Round\nEach team gets two timed attempt to complete the maze. The best time out of 2 will be chosen\nTeams must pass through all designated checkpoints in the correct order.\nTouching an obstacle results in a time penalty.\nFailure to pass through a checkpoint may result in a penalty or disqualification of the run.\nFinal Round\nThe fastest qualifying teams proceed to the final.\nFinalists receive two timed attempts.\nThe best valid time will be considered for the final ranking.\nThe participant with the fastest clean/penalty-adjusted time wins."
      }
    ],
    "rules": [
      "Team Rules",
      "Each team can consist of max 4 members.",
      "Each team must nominate one designated pilot.",
      "Only the registered pilot is allowed to control the drone during a run.",
      "All team members must carry a valid college ID card.",
      "Participants must report to the venue at their allotted time.",
      "Drone Rules",
      "Participants must bring their own drone.",
      "The drone must be suitable for indoor flight and must meet the specifications announced by the organizers.",
      "The drone must be in safe working condition before the run.",
      "Drones with exposed sharp parts or damaged components will not be allowed.",
      "Propeller guards are recommended/required for safety.",
      "Participants must bring their own controller, batteries, charger and necessary accessories.",
      "All drones must pass the technical and safety inspection before participating.",
      "Only approved drones will be permitted inside the competition arena.",
      "Competition Rules",
      "Each participant will get the specified number of attempts.",
      "The drone must start from the designated START point.",
      "Participants must navigate through the maze in the specified sequence.",
      "All gates and checkpoints must be crossed.",
      "The drone must remain within the designated flight area.",
      "Touching an obstacle will result in a time penalty.",
      "Skipping or bypassing an obstacle will result in a penalty or disqualification.",
      "The drone must cross the designated FINISH point to complete the run.",
      "The final score will be based on the completion time plus applicable penalties.",
      "The participant/team with the lowest final time will be ranked highest.",
      "Safety Rules",
      "Participants must operate the drone only from the designated pilot area.",
      "Flying over spectators or other participants is strictly prohibited.",
      "Participants must not enter the flight arena while a drone is operating.",
      "Damaged, swollen or unsafe batteries must not be used.",
      "Batteries may only be charged in the designated charging area.",
      "Participants must immediately stop the drone when instructed by the event officials.",
      "Any unsafe flying or intentional collision may result in disqualification.",
      "Conduct",
      "Participants must follow the instructions of the event officials at all times.",
      "Participants must not interfere with another team's drone or equipment.",
      "Any attempt to manipulate the course, bypass obstacles or gain an unfair advantage is prohibited.",
      "Unsportsmanlike behaviour may result in disqualification.",
      "The decision of the referee/judging panel will be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "16 Sept 2026",
    "fee": "₹800 per team",
    "teamSize": "4",
    "format": "Team",
    "image": "/images/events/drone.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSccwV19H_4NnJqvx8U_rFoH-gfpJPqgW9I35SbYBy0DWokwPA/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Nithish Krishna",
        "phone": "8056521119",
        "email": "nithish.krishna@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prateekesha Mariappan",
        "phone": "8762766267",
        "email": "prateksha.mariappan@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Amruta Rout",
        "phone": "7008561379",
        "email": "amruta.rout@christuniversity.in",
        "role": "Faculty POC"
      },
      {
        "name": "Dr Sajna Parimita Panigrahi",
        "phone": "8123567185",
        "email": "sajna.panigrahi@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "ecoforge-2-0",
    "title": "EcoForge 2.0",
    "tagline": "Waste to Wonder – A creative challenge where participants transform waste materials into useful and innovative products.",
    "category": "Engineering",
    "department": "Civil Engineering",
    "overview": "Ecoforge 2.0 is the second edition of the department's popular sustainability-driven craft competition. Teams are provided with a set of waste materials and must creatively construct a specific item or structure assigned to them on the spot, promoting resourcefulness and environmental consciousness. Each material carries a fixed point value, and points are deducted from a team's base score according to the materials used, rewarding efficient and minimal use of resources. As a returning event, past participants are given a slight weightage advantage in the time allotted, recognising their prior experience while keeping the competition welcoming to newcomers.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "ROUND 2 – GRID CRISIS"
      }
    ],
    "rules": [
      "Only materials provided by the organisers may be used; outside materials are not permitted.",
      "Each material used will incur a point deduction as per the pre-declared points list.",
      "Teams with past Ecoforge participants will receive a small additional time allowance, as declared before the round.",
      "The finished item must match the assigned brief/theme to qualify for full marks.",
      "Work must be completed within the allotted time; incomplete entries will be judged as submitted.",
      "Any damage to venue property or unsafe handling of materials will lead to disqualification.",
      "Judges' scoring decision is final."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/ecoforge.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdTjaIazTfBtx1iNdFPVcZePZnsxLvGpBiI1rzSEA6WVB-9cQ/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Deeba Dharshan S",
        "phone": "9360624127",
        "email": "deebadharshan.s@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Jiss James",
        "phone": "8848924982",
        "email": "jiss.james@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr Arpan Pradhan",
        "phone": "9439291900",
        "email": "arpan.pradhan@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "etherea",
    "title": "Etherea- Drawing the Unseen",
    "tagline": "A timed sketching challenge where participants bring a given theme to life through original, expressive artwork.",
    "category": "Design",
    "department": "School of Architecture",
    "overview": "A creative sketching event that encourages participants to transform their imagination  , observations and ideas into expressive sketches. The event provides a platform to explore creativity  , develop artistic skills and showcase individual sketching styles within the given time and theme.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "The sketch must be original and created during the event.",
      " Participants must bring their own sketching materials and stationary.",
      " Tracing , printed references and pre drawn artwork are not allowed.",
      " The theme will be announced at the beginning of the event.",
      " Participants must complete their artwork within the given time limit.",
      " Only the materials permitted by the organisers may be used.",
      " Any form of plagiarism or copping will lead to disqualification.",
      " The jury’s decision will be final.",
      " Participants are responsible for their own materials and belongings."
    ],
    "faqs": [],
    "prizePool": "15K",
    "date": "15 Sept 2026",
    "fee": "₹200 per person",
    "teamSize": "Individual",
    "format": "Solo",
    "image": "/images/events/etherea.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfqc9fnzO9Jtc_vdqONaA-gGS5yvyyPS05yBYVUWnU7C_-dow/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Dakshan S",
        "phone": "7639032960",
        "email": "Dakshan.s@arch.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dharshini",
        "phone": "8904220419",
        "email": "darshini.r@arch.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof. Apeksha S J",
        "phone": "9972971559",
        "email": "apeksha.sj@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "evmotion-26",
    "title": "EVMOTION 26",
    "tagline": "A three-stage EV challenge combining ADAS simulation, complete vehicle design, and hands-on prototype development.",
    "category": "Engineering",
    "department": "Electrical & Electronics Engineering (EEE)",
    "overview": "EVMOTION 26 is an interdisciplinary technical competition that challenges participants to take an electric vehicle concept from problem identification to simulation, complete system design and physical implementation. All teams receive a common set of fixed technical constraints based on the hardware platform available to the organizers, while each team is assigned a different real-world EV application such as indoor mobility, industrial utility, campus transportation or assistive mobility. The event consists of three progressive rounds: ADAS SIMULATION, where teams develop an application-specific ADAS feature using offline simulation; EV DESIGN & PITCH, where teams design and defend the complete EV concept; and EV BUILD, where selected finalist teams implement their design using the organizer-provided hardware. The event aims to develop EV engineering, electrical and electronic systems thinking, control and software skills, mechanical design, problem-solving, innovation and practical implementation.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "1.        Round 1 – ADAS SIMULATION: Think. Simulate. Solve.\nEach team is assigned an EV application and must develop one suitable Advanced Driver Assistance System (ADAS) feature using an offline simulation environment. Depending on the assigned application, teams may implement features such as adaptive cruise control, collision avoidance, automatic emergency braking, obstacle detection, path following or speed control. Teams must demonstrate the working logic through simulation and explain how the feature satisfies the given vehicle requirements. The top 12 teams qualify for the next round.\n2.        Round 2 – EV DESIGN & PITCH: Design. Integrate. Defend.\nThe qualified teams must design the complete EV around their assigned application and the fixed technical constraints provided at the beginning of the event. The design must cover the vehicle architecture, chassis concept, drivetrain, motor and controller integration, battery placement, sensors, control system, ADAS integration, safety considerations and expected performance. Teams then pitch their complete EV concept to the judging panel and defend their engineering decisions through technical questions. The top 5-6 teams qualify for the final round.\n3.        Round 3 – EV BUILD: Build. Integrate. Demonstrate.\nThe top 5-6 teams receive access to the organizer-provided hardware platform specified by the original constraints. Teams must convert their proposed EV design into a working physical prototype by integrating the provided motor, controller, battery, sensors and other permitted components. The final vehicle is tested for basic mobility, control, ADAS response, stability, application-specific performance and overall compliance with the original problem statement."
      }
    ],
    "rules": [
      "1.        Each team shall consist of 2-4 participants.",
      "2.        All participants must complete registration and report before the specified event start time.",
      "3.        Teams must participate in all rounds for which they qualify. Progression to subsequent rounds will be based on the scores and selection criteria announced by the organizers.",
      "4.        Every team will receive an application-specific EV problem statement. Problem statements may differ between teams, but the technical constraints applicable to the hardware platform shall be fixed by the organizers.",
      "5.        Teams must design their solution within all dimensional, electrical, mechanical, software and safety constraints specified in the problem statement. (Laptop mandatory with internet connectivity)",
      "6.        During Round 1, teams must implement their ADAS feature using the simulation environment and resources permitted by the organizers.",
      "7.        Teams must submit or demonstrate the required simulation files, control logic and technical explanation within the allotted time.",
      "8.        During Round 2, teams must present and defend a complete EV concept covering the mechanical, electrical, control, software, ADAS and application aspects of the vehicle.",
      "9.        Teams must be able to justify their design decisions and respond to technical questions from the judging panel.",
      "10.        Only qualified finalist teams will receive access to the physical hardware platform for Round 3.",
      "11.        During Round 3, teams must use only the hardware, components and resources provided or explicitly permitted by the organizers.",
      "12.        Unauthorized external motors, controllers, batteries, major drivetrain components or pre-built vehicle systems are not permitted unless explicitly approved by the organizers.",
      "13.        All construction, programming, testing and debugging must be completed within the allotted time for the respective round.",
      "14.        Teams must not tamper with, damage, modify or interfere with equipment assigned to another team.",
      "15.        Teams must not receive assistance from participants, faculty or external persons who are not officially authorized by the organizers.",
      "16.        Participants must not disclose problem statements, simulation scenarios, design information or final-round challenge details to teams that have not yet attempted the relevant round.",
      "17.        All electrical connections, batteries, tools and fabrication equipment must be operated safely and only as instructed by the organizers.",
      "18.        Any unsafe operation, intentional damage, unauthorized material, malpractice or violation of event instructions may result in penalty or disqualification.",
      "19.        Judges may inspect the team's calculations, simulation files, design files, code, electrical connections, prototype and working procedure whenever required.",
      "20.        The final prototype/system must demonstrate the required core functionality during the designated evaluation period."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/evmotion26.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSeMUSwXL94tew8TEaAO_acMerNgfLDirKqWeJeUAWJHJRUBVw/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Suryan E",
        "phone": "9364011311",
        "email": "suryan.e@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "C.S Anuj",
        "phone": "9629107588",
        "email": "anuj.cs@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Venkataswamy. R",
        "phone": "7829222446",
        "email": "venkataswamy.r@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "final-override",
    "title": "Final Override",
    "tagline": "A five-stage technical escape mission where teams recover hidden key fragments through media analysis, decoding, AI prompting, and CTF challenges before combining them to unlock the final system.",
    "category": "Coding & Tech",
    "department": "AI and Data Science Engineering (ADSE)",
    "overview": "Final Override is a five-stage technical escape mission where teams must recover hidden key fragments through media analysis, decoding, AI prompting, and logical reasoning, before combining them to unlock a final system. It is designed for participants from technical backgrounds who enjoy structured problem-solving under time pressure./Teams progress sequentially through five connected stages, each testing a different technical skill area. As they move forward, they must extract clues from audio and video files, decode encrypted text, craft precise prompts for a locked AI system, solve logic-based patterns, and finally merge all recovered fragments to complete a last verification task that unlocks the system./The event tests observation, decoding logic, prompt engineering, pattern recognition, and integrative reasoning, while also introducing a layer of deliberately misleading clues that challenge participants to think critically rather than rely blindly on tools. It offers strong learning value in digital analysis and AI interaction, along with high entertainment value through its escape-mission format, and is expected to leave participants with a practical understanding of structured technical problem-solving.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Final Override is conducted as a single continuous mission divided into sequential phases. Teams begin by extracting hidden clues from technical stages, progress through decoding and reasoning tasks, and conclude with a final integration challenge that determines their completion time and overall ranking. The event is timed from start to finish, and the winner is determined primarily by the fastest successful completion, supported by a structured evaluation criterion for tie-breaking and quality assessment."
      }
    ],
    "rules": [
      "A. Participation",
      "Participants from technical academic backgrounds are eligible to participate. Prior expert-level knowledge is not mandatory; however, participants should be comfortable with basic computer use, analytical reasoning, and beginner to intermediate technical tasks.",
      "Every team must consist of exactly 4 participants. Teams with fewer or more members will not be permitted to compete.",
      "All team members must be present for the entire duration of their assigned event slot, from reporting to final result announcement.",
      "B. Gameplay",
      "Teams must complete each stage strictly in the given sequence and cannot skip ahead or attempt stages out of order.",
      "C. Resources",
      "Each participant is expected to bring a personal laptop in working condition, following the BYOD (Bring Your Own Device) format.",
      "Campus Wi-Fi will be the primary mode of connectivity; personal hotspot may be used only as a backup, with any associated costs borne by the participant.",
      "AI tools may be used only in stages where explicitly permitted, particularly the Prompt the AI stage; unauthorised AI usage in other stages is a rule violation.",
      "Participants must not use unrelated external websites, pre-written scripts, or outside collaborators to solve any stage unless specifically permitted.",
      "No physical materials, printed notes, or external documentation may be used unless explicitly issued by the organisers as part of a stage.",
      "D. Fair Play",
      "Any attempt to bypass a stage, manipulate the scoring system, or access unauthorised answers will be treated as a serious violation.",
      "Sharing answers, hints, or strategies with another competing team is strictly prohibited and will result in disqualification of both teams involved.",
      "Receiving help from individuals outside the registered team, including online assistance not permitted by event rules, is not allowed.",
      "E. Conduct",
      "Participants must maintain discipline throughout the event and follow all instructions given by organisers, volunteers, and judges.",
      "Disruptive, disrespectful, or unsportsmanlike behaviour toward organisers, judges, or other participants will not be tolerated.",
      "Participants must keep noise levels minimal, avoid disturbing other teams.",
      "F. Technical/Operational Issues",
      "In case of a participant's laptop malfunctioning, the team must immediately alert the technical support desk; reasonable assistance will be provided, but no guaranteed time extension applies unless the fault is game-system-related.",
      "If campus Wi-Fi experiences temporary disruption, teams may switch to a personal hotspot as a backup at their own cost, or wait for organiser-led network restoration.",
      "Organisers reserve the right to intervene, pause, or adjust any stage if required due to technical, safety, or fairness concerns affecting the overall event.",
      "G. Judging & Disputes",
      "Judges may request a team to explain their reasoning or approach for any submitted answer, particularly in stages involving logic, decoding, or AI prompting.",
      "Tie-Breakers If two or more teams record identical or near-identical completion times, the judging criteria table (accuracy, logical approach, and technical adaptability) will be used to determine final ranking.",
      "Final Decision",
      "All decisions made by the organising committee and judging panel regarding scoring, penalties, disqualification, or ranking are final and binding, and no further appeals will be entertained."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "16 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "3–4",
    "format": "Team",
    "image": "/images/events/finaloverride.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScmen14FqKNeoE4R1bkg0ndTnTaNQCSdLJfS3MkVFfnjNTqrQ/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Viswakowsik K",
        "phone": "9944762559",
        "email": "viswakowsik.k@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Mervin A",
        "phone": "9345464915",
        "email": "mervin.a@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr Amos Bortiew",
        "phone": "7086606498",
        "email": "amos.bortiew@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "frames-unboxed",
    "title": "Frames Unboxed",
    "tagline": "Unscripted, Unfiltered, Unleashed!",
    "category": "Arts & Humanities",
    "department": "Psychology",
    "overview": "‘Frames Unboxed’ is a filmmaking competition where participants have a chance to express their creativity and originality through the lens of their camera. Through this event, participants will be given a theme on the spot to encourage fast thinking, instinctive ingenuity, and innovation. It’s a form of storytelling interpreted through different minds and perspectives, where participants are free to voice their ideas and imaginations. So grab your camera, rally your crew, and let your imagination run wild. Fame and fun await!",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Frames Unboxed is a two-day event, with no separate rounds.\nDay 1:\nThe teams will receive an introductory briefing on the competition's rules and regulations, after which the event theme will be revealed. Thereafter, the teams can spread around campus to shoot their respective films. The teams can stay back on campus until 9:00 PM.\nDay 2:\nThe teams must submit their films on the Google Drive Link provided to them. All submissions must be done by 9:30 AM. The judge will then score the films based on the given judging criteria.\nNote: Since the submission is online, the participants are not required to be physically present on the second day."
      }
    ],
    "rules": [
      "Duration of the short film: 7 - 8 minutes.",
      "Number of participants per team: 6 participants.",
      "Only English dialogue or voice-overs are allowed.",
      "Participants must bring their own technical equipment, such as cameras, tripods, speakers, microphones, laptops, pendrives, etc.",
      "All filming must take place on campus.",
      "All storylines, scripts, and concepts must be original. Plagiarism or copying from existing films will lead to immediate disqualification.",
      "The specific theme(s) for the short film will be revealed on the day of the event.",
      "Participants are allowed to use soundtracks.",
      "Soundtracks must be free of vulgar or derogatory language; violations will result in disqualification.",
      "No obscene, vulgar, or inappropriate scenes are permitted; violations will result in disqualification.",
      "To submit the film, a Google Drive link will be shared with the participants, through which they will upload their films by the given deadline.",
      "The link provided to you will be open from 9:00 PM 15th of September till 9:00 AM 16th of September.",
      "No submissions will be accepted after the deadline.",
      "The short film must comply with all the rules and regulations of CHRIST (Deemed to be University)."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹600 per team",
    "teamSize": "6",
    "format": "Team",
    "image": "/images/events/framesunboxed.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSeWJIyY35YtRBq94i4MW2pHHwSEHjdCa7-AvgAJ0Nh9osbzKw/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Andrea Joseph",
        "phone": "8867728278",
        "email": "andrea.joseph@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Divisha R",
        "phone": "9315520712",
        "email": "divisha.r@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Varsha Singh",
        "phone": "9473976071",
        "email": "varsha.singh@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "gridlock",
    "title": "GRIDLOCK",
    "tagline": "A power-grid simulation challenge where teams design, operate and stabilize a grid. through changing generation, load and system contingencies.",
    "category": "Engineering",
    "department": "Electrical & Electronics Engineering (EEE)",
    "overview": "GRIDLOCK is a software-based power-system competition in which teams design and operate a simulated electrical grid under changing generation, demand and system conditions. Teams receive a common grid scenario containing generation sources, lines, transformers, loads and operating limits, along with the required technical data. In the first stage, teams develop and validate a working grid model using an approved power-system simulation platform. They must ensure that generation meets demand while maintaining acceptable voltage levels, line loading and supply to critical loads. In the second stage, the operating conditions change through controlled grid contingencies such as renewable-generation reduction, line outages, generator failures and load changes. Teams must respond within limited time and restore or maintain secure operation. The event develops power-system analysis, grid operation, contingency management, decision-making and practical engineering skills.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "ROUND 1 – GRID DESIGN & SIMULATION\nAll participating teams receive the same grid scenario and technical data. The scenario may include multiple generation sources, transmission/distribution lines, transformers and different classes of loads such as hospitals, water supply, residential demand, industry and EV charging. Teams must construct the grid model using an approved power-system simulation platform and achieve a valid base operating condition. They must check generation-demand balance, bus voltages, line loading and critical-load supply. Teams submit their model and required simulation results within the allotted time.\nROUND 2 – GRID CRISIS\nTeams begin with their validated base grid and are then subjected to a sequence of controlled contingencies. Possible events include a reduction in solar generation, loss of a transmission line, generator outage, increase in demand or restrictions on critical-load shedding. Teams receive a limited time for each contingency and must modify their grid operation or control strategy to maintain secure supply. Their response may involve generation redispatch, rerouting of power, controlled load shedding or other technically justified actions. Each scenario is evaluated using measurable system performance parameters."
      }
    ],
    "rules": [
      "1. Each team shall consist of 2-4 participants.",
      "2. All teams must work on the common grid scenario and technical data provided by the organizers.",
      "3. Teams must complete each round within the time limit specified by the organizers.",
      "4. Teams may use any simulation platform approved by the organizers; no particular software platform is mandatory. (Laptop mandatory with internet connectivity)",
      "5. Teams must use the system ratings, generation limits, load values, line ratings, transformer ratings and other parameters provided in the problem statement.",
      "6. Teams must submit their grid model and required results in the format specified by the organizers.",
      "7. Round 1 qualification and scoring will be based on the performance of the base grid according to the announced judging criteria.",
      "8. In Round 2, teams must respond to each contingency within the allotted response time.",
      "9. Contingencies will be selected and administered by the organizers. Teams will not be informed of the next contingency in advance.",
      "10. Teams must not alter the problem statement, system ratings or predefined constraints unless explicitly instructed by the organizers.",
      "11. Any generation redispatch, load shedding, network reconfiguration or control action must remain within the permitted operating limits.",
      "12. Critical loads identified by the organizers must be maintained unless the particular contingency explicitly permits otherwise.",
      "13. Teams must not use unauthorized external assistance, pre-built models or information not permitted by the organizers.",
      "14. Teams must be prepared to explain their operating decisions and justify how their response maintains or restores grid security.",
      "15. Any malpractice, unauthorized modification of the model or violation of event rules may result in penalty or disqualification.",
      "16. Judges' decisions regarding scoring, qualification and final rankings shall be final."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "16 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/grid.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScXahlJK2mwWoH32KT3Mz7qFPGpay8YTCIdTKAIsCjg8MoIkA/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Aishwarya Vijayakumar",
        "phone": "9994039368",
        "email": "aishwarya.vijayakumar@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Akshaya",
        "phone": "8610466674",
        "email": "akshaya.gk@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Srihari Gude",
        "phone": "7013324555",
        "email": "srihari.gude@christunivesity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "how-i-met-your-killer",
    "title": "How I Met Your Killer",
    "tagline": "Everyone knows something. Nobody knows everything",
    "category": "Arts & Humanities",
    "department": "Psychology",
    "overview": "A murder has taken place, and only the sharpest minds can uncover the truth. In this three-round event, teams race against time through puzzles, clues, and live interrogations to build a criminal profile and present the most convincing theory.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Day 1\nRound 1: Preliminary Round\nThe preliminary round will consist of quizzes, including visual and auditory assessments related to crime, murder, and thriller. The questions will be given, and the teams must answer simultaneously on the provided paper. Each round will be timed, and the teams with the highest score will be promoted to the next round.\nRound 2: Clue Collection Round\nCertain clues and evidence related to the murder will be scattered around a designated area. The top teams with the most number of clues collected will move to the next round. Points will be awarded based on the number of clues collected and a creative description if provided with the clue mentioned. A description of the clue will provide extra points. Each round will be timed and the teams with the highest score will be promoted to the next round.\nDay 2\nRound 3: Murder Mystery Round\nRound 3 is divided into 2 rounds, i.e., Interrogation Round and Theory Presentation. The final round is based on the premise of a killer on the loose. To find the killer, the teams will be provided with a set number of suspects along with the case details and timeline of the murder.\nThey will have to interrogate these suspects (general information about suspects and victims will be provided beforehand) and make criminal profiles.\nAt the end, each team will have to devise a theory describing who they think the actual killer is. The teams will be provided with the suspects' previous case histories and records.\nOnce they are well-versed in how the victim/s died and the suspect/s involved, the task for the teams will be to interrogate each of the suspects and profile them based on their case histories.\nThe time given for interrogating each of the suspects will be two to three minutes, and each team is required to interrogate a total of five suspects (subject to change).\nVolunteers will be assigned to each room to keep track of time and observe if appropriate behavior towards suspects is followed, and to ensure that there are no malpractices.\nOnce the interrogation is complete, the teams are required to discuss among themselves, profile the suspects, and come up with a theory that should indict the suspect who is most likely to be the serial killer.\nThe theory should include the points and reasons the team believes are valid for framing a suspect as the killer.\nThe theory needs to be presented to a panel of judges, who can cross-question the teams based on their theories, and the most convincing theories win the event.\nCreating a criminal profile:\nYour criminal profile should contain the following details -\nName of the offender\nCrime type (What was the crime? How was this crime committed? Did the killer try to cover his or her tracks and, if so, how?)\nVictimology (Common backgrounds and characteristics of victims)\nComposure of the offender\nThe Wants (What is it about this victim that attracted the killer?)\nMotivation (What motive or fantasy drove the killer to harm the victim in a particular manner?)\nImportant: There is no predetermined killer chosen by the event hosts, and it solely depends on the team’s creativity to come up with the most convincing theory based on a particular suspect (s), their profiling style, and how they deal with judges and their rebuttals."
      }
    ],
    "rules": [
      "The event will consist of 3 Rounds: the Preliminary Round, Clue Collection Round and the Murder Mystery Round.",
      "The Preliminary Round will consist of a series of auditory and visual quizzes. The top teams will move to the Clue Collection Round.",
      "The Clue Collection Round will consist of a mini treasure hunt in a designated area, and the top teams will qualify for the Murder Mystery Round.",
      "The final round is based on the idea of a killer on the loose, and to find the killer, the teams will be given a set number of suspects to interrogate and profile. In the end, each team will have to develop a theory identifying who they believe is the actual killer.",
      "All teams will be given a total time of 15 minutes (subject to change) to interrogate all the suspects. The teams are free to use this time at their own discretion.",
      "All participants are free to discuss their ideas about the ‘case’ once they have finished their interrogations.",
      "No electronic devices are allowed during interrogations. Participants are allowed to take notes with pen and paper.",
      "No discussion is permitted, apart from the discussions with your own teammates.",
      "Total time for interrogation: 15 min (subject to change)",
      "Time for profiling and making the theory: 20 min (subject to change)",
      "Time for presenting to judges: 5 min + 2 min"
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "4",
    "format": "Team",
    "image": "/images/events/howimeturkiller.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScBPv8Ick77YirDfr1rE4xQR5ki3PXkwtgGlksBhTLTILG_yA/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Maanya Bhatia",
        "phone": "73048 53140",
        "email": "maanya.bhatia@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Rifat Khan",
        "phone": "77550 99853",
        "email": "rifat.khan@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr.Ganesh Kumar J",
        "phone": "95004 90815",
        "email": "ganesh.kumar.j@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "infinity-code-red",
    "title": "Infinity: Code Red",
    "tagline": "Find the Fragments. Unlock the Impossible.",
    "category": "Engineering",
    "department": "Electronics and Communication Engineering (ECE)",
    "overview": "Code Red is an immersive, Marvel-themed flagship event blending a fast-paced treasure hunt with a high-pressure escape room. Teams of 4 must solve thematic puzzles, decode hidden clues, and race through a campus-wide hunt. Only the top four teams will advance to the final escape room to extract the Infinity Core before time runs out. Step up, assemble your squad, and test your logic under pressure!",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Stage1- The infinity hunt(50 mins with 5 checkpoints , top 6 teams advance )\nStage2: The infinity escape (50 mins, 5 level parallel rooms in 3 batches )\nFinal bonus round to declare winners"
      }
    ],
    "rules": [
      "Teams of 4 members. Must carry college IDs.",
      "Timing: Arrive 15 minutes prior to start time.",
      "Fair Play: No electronics (phones/smartwatches), no sharing clues, no physical locking, and no force-opening props.",
      "Disqualification: Cheating, prop damage, or misconduct results in an immediate ban."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹450 per team",
    "teamSize": "4",
    "format": "Team",
    "image": "/images/events/infinity-code-red.webp",
    "registrationLink": "https://forms.gle/7vnnNPxMUSWBqnZL6",
    "coordinators": [
      {
        "name": "Melvin S Jacob",
        "phone": "9380257221",
        "email": "melvin.s@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Merrick Dias",
        "phone": "9022469808",
        "email": "merric.dias@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Ambily Babu",
        "phone": "9632581800",
        "email": "ambily.babu@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "marketing-x-pr",
    "title": "Marketing X PR",
    "tagline": "A high-stakes challenge where strategy and creativity collide to turn bold ideas into powerful brand stories",
    "category": "Management",
    "department": "BBA",
    "overview": "Marketing X PR is a dynamic Marketing and PR event that challenges participants to think creatively, build compelling campaigns, respond to evolving situations, and communicate effectively with diverse audiences. The event focuses on strategic reasoning, innovation, adaptability, and the ability to shape public perception through impactful marketing and public relations solutions.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "Eligibility: The event is open to registered participants who meet the eligibility criteria specified by the organizing committee.",
      "Team Participation: Each team must consist of two participants, and the team composition cannot be changed once the event begins.",
      "Punctuality: Participants must report to the venue at the designated time. Late arrivals may lead to deduction of marks or disqualification at the discretion of the organizers.",
      "Submission: All submissions and tasks must be completed within the stipulated time. Late submissions will not be accepted unless approved by the organizers.",
      "Use of AI: AI tools may be used only in rounds where they are explicitly permitted. Any permitted usage will be time-bound and subject to the limits specified for that particular round.",
      "Originality: All submissions, campaigns, and responses must be the participants' own work. Plagiarism, copying, or unauthorized assistance may result in immediate disqualification.",
      "Use of Electronic Devices: Mobile phones, laptops, and other electronic devices may be used only when permitted for a particular round.",
      "Time Management: Participants must strictly adhere to the time limits specified for each round. Judges may stop a presentation or activity once the allotted time expires.",
      "Decision of Judges: The decisions of the judging panel and organizing committee will be final and binding. No appeals regarding the evaluation process will be entertained.",
      "Disqualification: Any form of cheating, plagiarism, misconduct, impersonation, violation of event rules, or unethical behavior may lead to immediate disqualification."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2",
    "format": "Team",
    "image": "/images/events/marketing.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfwh6ZfnFcvlcHh-X0BeN8Ecx_9Q1RPpDpOEaGRCfljrfjLuA/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Aadithya Hegde",
        "phone": "9962997772",
        "email": "aadithya.hegde@bba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Jahnavi Khedia",
        "phone": "7501798111",
        "email": "jahnavi.khedia@bba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr.Ramya JB",
        "phone": "9894799610",
        "email": "ramya.jb@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "mud-run",
    "title": "Mud Run: RC Off-Road Challenge",
    "tagline": "Race your RC vehicle through challenging off road obstacles, where speed, skill, and precision decide the winner.",
    "category": "Engineering",
    "department": "Automotive Engineering",
    "overview": "MUD RUN – RC Off-Road Challenge is an adrenaline-fuelled off-road racing experience that puts precision, control, and driving skill to the ultimate test.\n\nParticipants will take on a specially engineered off-road arena featuring mud pits, rock gardens, ramps, uneven terrain, bridges, tight turns, and challenging technical sections, with every obstacle demanding a different approach.\n\nThe objective is simple: conquer the terrain and complete the course in the shortest possible time. But speed alone won't be enough—every turn, climb, jump, and obstacle will test the driver's concentration, control, and ability to master their machine. Penalties for collisions and missed sections will ensure that precision is just as important as pace.\n\nDesigned to bring the excitement of off-road motorsport to the college arena, MUD RUN promises an immersive and highly competitive experience for both\n\nparticipants and spectators. The event aims to ignite an interest in automobiles and motorsport while encouraging teamwork, confidence, strategic thinking, and skilled vehicle handling—turning every lap into a battle between speed, skill, and terrain.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Trial Lap\nEach team will be given 1 trial lap on the track.\nThis lap will not be officially timed but will help participants familiarize themselves with the terrain and obstacles.\n2. Qualifying Rounds.\nEach team will attempt 3 timed laps (1 lap = 1 round).\nThe best lap time out of the 3 rounds will be considered for qualification into the finals.\n3. Finals\nThe top teams (based on participation) will qualify for the finals.\nEach finalist will attempt 2 timed laps in the finals.\nThe best lap time in the finals will decide the winner.\nIn case of a tie, an additional tie-breaker lap will be conducted."
      }
    ],
    "rules": [
      "General Rules (Code of Conduct, Participation, Fair Play)",
      "Each team can have 2–5 members (students from different institutes can team up).",
      "Every participant must carry a valid student ID card.",
      "Teams must register online before the deadline",
      "The RC car will be checked by organizers before the competition for compliance.",
      "Unsportsmanlike behaviour (verbal abuse, intentional disruption, unfair tactics) will result in disqualification.",
      "Judges' and referees' decisions will be final and binding.",
      "Event organizers reserve the right to modify rules or clarify in special cases.",
      "RC Car Specifications",
      "Participants must bring their own RC / E-RC cars (self-built vehicles only).",
      "Maximum dimensions: 30 cm × 30 cm (5% tolerance allowed).",
      "Maximum operating voltage: 16.8 V.",
      "IC engine cars and LEGO kits are not allowed.",
      "Game Rules",
      "Each team's best lap time across qualifying rounds will be considered for the finals.",
      "Penalties:",
      "∙        +5 seconds for each wheel touching outside the boundary line.",
      "∙        +5 seconds for each hand touch.",
      "∙        +10 seconds if the car goes out of the arena (must be placed back at the same spot).",
      "∙        +25 seconds for skipping an obstacle.",
      "Intentional damage to the track or cars will result in",
      "disqualification."
    ],
    "faqs": [],
    "prizePool": "22k",
    "date": "15-16 Sept 2026",
    "fee": "₹800 per team",
    "teamSize": "2–5",
    "format": "Team",
    "image": "/images/events/mud-run.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfoG8gltSqqeoexwShVpMlRtwnM_zEXvjrY8dKekdff8bShew/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Shane Christopher",
        "phone": "9620047083",
        "email": "shane.christopher@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Jaswanth B",
        "phone": "9901310444",
        "email": "jaswanth.b@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Aneesh Jose",
        "phone": "9986429290",
        "email": "aneesh.jose@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "pixel-whisper",
    "title": "Pixel Whisper",
    "tagline": "A team-based AI challenge where participants study a complex target image, recreate it through a communication-free generation relay, and compete to achieve the highest visual similarity to the original.",
    "category": "Design",
    "department": "AI and Data Science Engineering (ADSE)",
    "overview": "Pixel Whisper is a creative, team-based AI image recreation challenge in which participants compete to reproduce a bizarre and visually complex target image using an organizer-provided image-generation platform. The event combines observation, memory, creativity, and teamwork in a structured relay format that prevents direct collaboration during the generation process.\n\nAt the beginning of each match, both competing teams are shown the same target image and are given a short discussion period to analyze its composition, objects, colours, and unusual visual details. Once the relay begins, team members take turns generating their interpretations without communicating with one another. Each participant may either refine the previous image or create a completely new interpretation before passing only the final generated image to the next teammate.\n\nThe event is designed to test visual observation, strategic thinking, adaptability, time management, and creative interpretation under communication constraints. It provides an engaging and entertaining competitive experience while encouraging participants to think critically about visual details and collaborative decision-making in an AI-assisted creative environment.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "The event follows a knockout-based relay format conducted between two teams at a time. Each match consists of a target observation phase, a silent AI image-generation relay, and a final judging phase in which the generated outputs are compared with the original target image. Selected knockout matches may also include optional bonus rounds that provide strategic advantages for the upcoming relay round."
      }
    ],
    "rules": [
      "A. Participation",
      "The event is open to all students.",
      "Each team must consist of exactly 3 members.",
      "No substitutions are allowed after the event begins unless approved by the organizers under exceptional circumstances.",
      "All registered members must be present at the venue before their scheduled match.",
      "Failure to report on time may result in forfeiture.",
      "B. Gameplay",
      "Two teams compete against each other in each match.",
      "Both teams receive the same target image.",
      "The event follows a discussion → silent relay → judging structure.",
      "Target observation and discussion: 5 minutes Each participant relay turn: 5 minutes (unless modified by a bonus-round penalty) Bonus rounds: 2 minutes Winning teams advance through the knockout bracket until the final round.",
      "Multiple generations are permitted within the allotted time.",
      "Only the last successfully generated image will be accepted.",
      "Unsubmitted or unfinished prompts will be discarded when time expires.",
      "C. Resources",
      "Only organizer-provided systems may be used.",
      "Network access will be controlled by the organizers solely for operation of the official platform.",
      "Only the designated image-generation tool is permitted.",
      "Search engines, reference images, online galleries, cloud storage, messaging platforms, and external AI services are prohibited.",
      "Notes, sketches, printed references, written instructions, or any communication aids are not permitted during gameplay.",
      "D. Fair Play",
      "Any attempt to manipulate the competition process unfairly will result in immediate disciplinary action.",
      "Competing teams may not exchange information, strategies, prompts, or observations after the official match begins.",
      "Assistance from spectators, friends, faculty members, or other participants is prohibited.",
      "The following are considered malpractice:",
      "Verbal communication during relay turns",
      "Gestures, signals, or screen sharing Leaving written or visual clues for teammates Circumventing bonus-round restrictions Using hidden notes or external prompt sources",
      "E. Conduct",
      "Participants must follow all instructions issued by coordinators, volunteers, and judges.",
      "Maintain respectful and professional behaviour toward other participants and event staff.",
      "Offensive, abusive, disruptive, or discriminatory conduct will not be tolerated.",
      "Food and drinks should be kept away from the competition systems unless explicitly permitted.",
      "Participants must not tamper with organizer-provided hardware or software settings.",
      "F. Technical / Operational Issues",
      "If an organizer-provided computer malfunctions, coordinators will verify the issue and arrange a replacement or appropriate compensation time.",
      "Verified platform or network interruptions may result in additional time being granted equal to the affected duration.",
      "Organizers reserve the right to pause, restart, reschedule, or modify a match if technical or operational circumstances make normal continuation impossible.",
      "G. Judging & Disputes",
      "Judges are responsible for evaluating all final submissions according to the published criteria.",
      "Tie-Breakers Ties will be resolved using the following order:",
      "Higher Similarity to the Target Image score Higher Accuracy of Key Elements score Sudden-death mini recreation challenge, if required",
      "Final Decision",
      "All judging decisions are final and binding.",
      "No appeals regarding artistic evaluation or scoring interpretation will be entertained after the results are announced."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "16 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "3",
    "format": "Team",
    "image": "/images/events/pixel-whisper.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSd0dcLSGxCCtNoWj4v9O5owFI6Ak9ovNnbBQE5vEBRUZ7lcXg/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Rachel Febin",
        "phone": "8310202676",
        "email": "rachel.febin@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Samuel Biju",
        "phone": "9535635046",
        "email": "samuel.biju@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof Cynthia C",
        "phone": "9952246458",
        "email": "cynthia.c@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "powerwiz",
    "title": "POWERWIZ",
    "tagline": "A two stage power electronics challenge combining converter design, simulation, hardware implementation, and performance testing.",
    "category": "Engineering",
    "department": "Electrical & Electronics Engineering (EEE)",
    "overview": "POWER ELECTRONICS DESIGN CHALLENGE is a hands-on technical competition that challenges participants to design, simulate and physically implement a power-electronic converter against a common engineering specification. The event begins with a Design & Simulate round, where teams receive a defined electrical requirement and develop an appropriate converter design within a limited time. Their design is validated through simulation and evaluated primarily on technical correctness, specification compliance and simulated performance, with completion time used as a tie-breaker where required. The best-performing teams then advance to the Build & Test round, where organizers provide the required hardware components and laboratory equipment. Teams construct their converter and subject it to standardized electrical tests. The event aims to develop practical power-electronics design skills, simulation ability, troubleshooting, hardware implementation and performance optimization.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Round 1 – Design & Simulate\n1.        All participating teams will receive a common power-electronics problem statement with defined electrical requirements and hardware constraints.\n2.        Teams will analyse the requirements and design a suitable power-electronic converter within the allotted time.\n3.        Teams must perform the necessary design calculations and component selection based on the hardware constraints provided by the organizers.\n4.        Teams will develop and validate their design using an approved simulation platform.\n5.        The simulated design must demonstrate compliance with the specified requirements, including parameters such as input voltage, output voltage, power rating and other performance requirements given in the problem statement.\n6.        Teams must submit their circuit design, calculations and simulation results before the Round 1 deadline.\n7.        Teams will be evaluated primarily on technical correctness, specification compliance and simulated performance, with completion time used as a tie-breaker where necessary.\n8.        The top five teams will qualify for the hardware round.\nRound 2 – Build & Test\n1.        The shortlisted teams will receive the hardware components and laboratory equipment specified by the organizers.\n2.        The components will be subject to the quantity, rating and availability constraints provided during Round 1.\n3.        Teams must construct the converter based on the design developed during the Design & Simulate round.\n4.        Teams may troubleshoot and optimize their implementation within the allotted time while remaining within the permitted hardware constraints.\n5.        Each completed prototype will undergo a standardized testing procedure under the same conditions for all teams.\n6.        Performance will be evaluated using measurable parameters such as output voltage regulation, efficiency, load performance, stability and overall hardware implementation.\n7.        The teams with the highest-performing prototypes will be awarded 1st, 2nd and 3rd places."
      }
    ],
    "rules": [
      "1.        Each team shall consist of 2-4 participants.",
      "2.        All teams must work on the common power-electronics problem statement provided by the organizers.",
      "3.        Round 1 must be completed within the time limit specified by the organizers.",
      "4.        Teams may use any approved simulation platform; no particular software platform is mandatory.  (Laptop mandatory with internet connectivity)",
      "5.        Teams must submit their circuit design, calculations and simulation results in the format specified by the organizers.",
      "6.        Round 1 qualification will be based primarily on technical correctness, specification compliance and simulated performance. Completion time may be used as a tie-breaker.",
      "7.        Only the top five teams from Round 1 will qualify for Round 2, unless otherwise announced by the organizers.",
      "8.        The hardware components provided for Round 2 will be subject to predefined quantity, rating and component-availability constraints. Teams must consider these constraints while developing their design and simulation in Round 1.",
      "9.        Component selection, major design decisions and required calculations must be completed during Round 1 based on the hardware constraints provided by the organizers. Teams must ensure that their simulated design can be implemented using the available hardware.",
      "10.        In Round 2, teams shall use only the hardware components and laboratory equipment provided or approved by the organizers.",
      "11.        Components may not be borrowed, exchanged or taken from another team.",
      "12.        Teams must follow all electrical and laboratory safety instructions while constructing and testing their prototypes.",
      "13.        Teams must not intentionally damage, misuse or modify laboratory equipment beyond the permitted construction requirements.",
      "14.        All hardware construction, testing, troubleshooting and optimization must be completed within the allotted time.",
      "15.        The final prototype will be tested under standardized conditions specified by the organizers.",
      "16.        External assistance, unauthorized components, pre-built converter modules or pre-built solutions are not permitted unless explicitly approved by the organizers.",
      "17.        Teams must be prepared to explain their design choices, calculations, simulation results and hardware implementation to the judges.",
      "18.        Any unsafe operation, malpractice or violation of the event rules may result in penalty or disqualification.",
      "19.        Judges' decisions regarding qualification, performance scores and final rankings shall be final."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/technicalworkshop.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSd_CMF7qp4WEytpWY2lr3u68B6m9Oeva0D0ycr6HpAVzp6opQ/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Jeni Riya Lobo",
        "phone": "9886147389",
        "email": "jeni.riya@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Likith Kumar B.M",
        "phone": "7760520879",
        "email": "likith.kumar@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Arun Chithrabhanu",
        "phone": "8939673940",
        "email": "arun.chithrabhanu@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "prompt-arcade",
    "title": "Prompt Arcade",
    "tagline": "An AI-powered game development challenge where participants create a game and its website using prompt engineering and AI-assisted coding.",
    "category": "Coding & Tech",
    "department": "Computer Science & Engineering (CSE)",
    "overview": "Prompt-Arcade is an AI-powered game development and web design competition that challenges participants to transform creative ideas into a playable game and a complete game website using AI-assisted coding and prompt engineering. Participants will use AI tools to generate, refine, and customize their ideas while solving development challenges and bringing their creative vision to life. The event combines creativity, technology, gaming, and web development, giving participants an opportunity to explore practical applications of AI in the development process. Along with creating a functional game, participants will also develop a dedicated website to present their creation as a complete digital product. The event encourages experimentation, problem-solving, adaptability, and creative use of AI while providing an engaging and hands-on experience for participants.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Stage 1 – AI Game Development:\nParticipants will begin by receiving a game development challenge along with a randomly assigned theme such as Retro, Horror, Sci-Fi, or Arcade, which they must incorporate into their game, which will determine the creative direction of their game. Using AI-assisted coding and prompt engineering, teams will develop a functional and playable game while refining their ideas, debugging their code, and incorporating their assigned theme. During the stage, participants will also be given an additional challenge that tests their ability to adapt and modify their game within a limited time.\nStage 2 – Website Development:\nTeams will transform their completed game into a fully designed game website using AI-assisted development. The website should present the game as a complete digital product and may include game information, instructions, visuals, and a playable version of the game."
      }
    ],
    "rules": [
      "Each team must consist of 2–4 members.",
      "All teams will receive the same base game challenge.",
      "The game theme will be assigned through a random draw and must be incorporated into the game.",
      "Participants may use AI-assisted coding and development tools throughout the event.",
      "The game must be functional and playable at the end of Stage 1.",
      "The surprise modification must be completed within the allotted 15-minute time limit.",
      "Teams must create a website for their game during Stage 2.",
      "The final game and website must be submitted before the specified deadline.",
      "Participants may use publicly available resources, but copying another team's work is prohibited.",
      "Teams must be able to demonstrate their use of AI tools if requested by the judges.",
      "Plagiarism, unauthorized collaboration, or interference with other teams will result in disqualification.",
      "Any attempt to tamper with or disrupt another team's work is strictly prohibited.",
      "The judges' decision will be final and binding.",
      "The organizers reserve the right to modify the rules or schedule if necessary."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/coderelay.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSc9toMXil4kWeIWtWRI5MOKAeCceO1Nsr7N4F0CU4mlrfuevw/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Joshua Thomas",
        "phone": "9880310075",
        "email": "joshua.thomas@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Anna Theresa",
        "phone": "8867084473",
        "email": "anna.theresa@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Bejoy BJ",
        "phone": "8281300742",
        "email": "bejoy.bj@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "quiz-whizz",
    "title": "Quiz–Whizz: Business Unplugged",
    "tagline": "“A two-day battle of business knowledge, strategic thinking, quick decisions, and calculated risk-taking.”",
    "category": "Management",
    "department": "MBA",
    "overview": "Qizz–Whizz: Business Unplugged is a two-day, team-based business quiz designed to move beyond traditional question-and-answer formats. Instead of testing only memory, the event challenges participants to observe business clues, connect ideas, interpret commercial situations, identify brands and business models, make strategic decisions and take calculated risks. The quiz begins with broad preliminary rounds for all participating teams and progressively moves towards high-pressure championship rounds. Day 1 tests business awareness, observation, connections, commercial reasoning and strategic thinking. The top eight teams qualify for Day 2, where the format becomes more competitive through progressive clues, an interactive business board, an auction-style strategy round, a live boardroom battle and a final wagering challenge. The format is deliberately non-technical and suitable for both UG and PG participants. Questions may draw from brands, companies, entrepreneurship, marketing, strategy, consumer behaviour, business history, Indian business, markets and contemporary business developments without requiring specialist calculations or advanced technical knowledge.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Broad preliminary challenges testing general business awareness, commercial reasoning, and idea connections to filter top teams.High-pressure progressive clues, interactive board, auction-style strategy, live boardroom battles, and final wagering challenges."
      }
    ],
    "rules": [
      "Teams must consist of eligible undergraduate or postgraduate participants as specified.",
      "Electronic devices or external assistance during quiz rounds are strictly prohibited.",
      "Decisions of the quizmasters and event judges are final and binding across all rounds."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2 members",
    "format": "Team",
    "image": "/images/events/qizz-whizz.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfJIH5GkgFVNkV5vPX5LdX6OdVfOzjBsSmYZ-0osJgbPkZWRQ/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Aakash K",
        "phone": "9940475493",
        "email": "aakash.k@mba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Rahul Neelakantan S",
        "phone": "7306628193",
        "email": "rahul.neelankantan@mba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof. Keerthana A R",
        "phone": "7406949055",
        "email": "keerthana.ar@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "rc-robo-soccer",
    "title": "RC Robo Soccer",
    "tagline": "Control, compete, and score your way to victory with your own football-playing robot.",
    "category": "Engineering",
    "department": "Mechanical Engineering",
    "overview": "The Department of Mechanical and Automobile Engineering is thrilled to present RC Robosoccer. RoboSoccer is a robot-based soccer competition where teams build and program robots to play soccer on a defined field. The objective is to score goals against the opposing team within a set time. Robots must follow specific size and weight guidelines. Matches are divided into halves, and robots can operate autonomously or semi-autonomously. Teams earn points by scoring goals, and penalties are given for fouls or rule violations. The event emphasises technical skills in robotics, programming, and strategic gameplay, making it a challenging and exciting test of engineering prowess.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Teams begin with their validated base grid and are then subjected to a sequence of controlled contingencies. Possible events include a reduction in solar generation, loss of a transmission line, generator outage, increase in demand or restrictions on critical-load shedding. Teams receive a limited time for each contingency and must modify their grid operation or control strategy to maintain secure supply. Their response may involve generation redispatch, rerouting of power, controlled load shedding or other technically justified actions. Each scenario is evaluated using measurable system performance parameters."
      }
    ],
    "rules": [
      "Team Rules",
      "Each team must consist of 4-6 members.",
      "All participants must carry a valid college ID card.",
      "Only registered team members are allowed to participate.",
      "Robot Rules",
      "One robot per Team.",
      "Robots must be wirelessly controlled.",
      "Robots must fit within 30 cm(W) × 40 cm(H) including wheels.",
      "Maximum robot weight: 6kg with external battery, 8kg with Internal battery.",
      "Maximum operating voltage: 12 V.",
      "Robots must not have sharp or dangerous elements.",
      "Wheels that can damage the arena are not permitted.",
      "No mechanisms designed to grab, lift, carry, or trap the ball.",
      "No mechanisms intended to damage or deliberately immobilize an opponent's robot.",
      "Only wheels/driving mechanisms are permitted; no additional moving mechanisms.",
      "Robots must pass the technical inspection before participating.",
      "Match Rules",
      "Each match consists of two 5-minute halves with a 2-minute half-time break.",
      "A maximum of 2 robots per team may be on the field.",
      "The team scoring the most goals wins.",
      "In case of a draw in knockout rounds, a tie-breaker/penalty shootout will be conducted.",
      "The referee's decision will be final and binding.",
      "Ball & Arena",
      "Ball: Golf ball",
      "Ball Diameter: 45 mm",
      "Ball Weight: ~ 45 g",
      "Disqualification",
      "A team may be disqualified for:",
      "Violating robot specifications.",
      "Using prohibited mechanisms.",
      "Deliberately damaging another robot or the arena.",
      "Interfering with the opponent's robot or match.",
      "Misconduct or failure to follow the organizers' instructions."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹800 per team",
    "teamSize": "4–6",
    "format": "Team",
    "image": "/images/events/robosoccer.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSf4ahN9WNUT-1g0NqpYso5NaXkE6wM2U3bfm7Nk02ys6ocDXA/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Anuj Anand E. K.",
        "phone": "8111970594",
        "email": "anuj.anand@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Siona Melissa D'Souza",
        "phone": "8105844847",
        "email": "siona.melissa@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Yogeesha C",
        "phone": "9964143702",
        "email": "yogeesha.c@christuniversity.in",
        "role": "Faculty POC"
      },
      {
        "name": "Dr Divya G S",
        "phone": "9611392675",
        "email": "divya.gs@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "revival-outlook",
    "title": "Revival Outlook",
    "tagline": "A sustainable fashion design challenge where participants transform unconventional materials, spaces, and cultural influences into innovative wearable designs.",
    "category": "Design",
    "department": "School of Architecture",
    "overview": "Revival Outlook is the flagship fashion design competition of Magnovite, challenging participants to reinterpret spaces, materials, and cultural narratives into bold, wearable expressions of design. It encourages sustainable thinking and experimentation with unconventional resources, blurring the boundaries between architecture and fashion.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "Theme Adherence: Collections must directly translate an architectural/urban identity of a chosen city into contemporary fashion design. Traditional attire replicas are discouraged unless reinterpreted modernly.",
      "Time Limit: Each team is strictly allotted 6 minutes total (including setup, performance, and clearance). Exceeding the time limit will result in a 5-mark penalty per extra minute.",
      "Originality: Costumes and garments must be original creations. Pre-designed or commercially rented readymade outfits are strictly prohibited.",
      "Props Policy: Props are allowed but must be lightweight and easy to carry on and off stage. Use of open flames, water, powders, glass, or any messy/hazardous substances that alter the stage surface is strictly forbidden.",
      "Audio-Visual Tracks: High-quality music tracks must be submitted in advance on a USB drive. Tracks containing vulgarity or offensive language will lead to immediate disqualification.",
      "Code of Conduct: Vulgarity, obscenity, or inappropriate attire on stage will lead to immediate disqualification. Christ appropriate clothing is strictly to be followed.",
      "Decision: The decision of the judging panel is final and binding on all participating teams.",
      "Dress Code: Sleeveless garments or outfits above knee length are not permitted unless skin tights are worn underneath (applicable to all genders). Costumes should not be revealing in any form."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "16 Sept 2026",
    "fee": "₹600 per team",
    "teamSize": "8–15",
    "format": "Team",
    "image": "/images/events/reviwaloutlook.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScAPAmq7yUYafaPLPLIch7bu7Z-lTSNChL2Zx-caF6jf_cCQg/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Vibha Shetty",
        "phone": "6362976342",
        "email": "vibha.m@arch.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Aadhira T",
        "phone": "9980600266",
        "email": "Aadhira.t@christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof.  Albert Joseph Hefferan",
        "phone": "8248348086",
        "email": "albertjoseph.hefferan@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "seismogami",
    "title": "Seismogami",
    "tagline": "Shake It, Don’t Break It – A hands-on challenge where participants build structures that withstand simulated earthquakes.",
    "category": "Engineering",
    "department": "Civil Engineering",
    "overview": "Seismogami is an earthquake-resistant structure design competition inspired by the acclaimed Cognizance event held at IIT Roorkee. Teams are challenged to design and construct a scaled building model using only ice-cream sticks and adhesive, applying core principles of structural and seismic engineering. Completed models are tested on a simulated shake table subjected to increasing seismic frequencies, and the team whose structure withstands the vibrations the longest without collapsing is declared the winner. The event gives students hands-on exposure to computational structural mechanics, load distribution, and earthquake-resistant design, blending engineering theory with a competitive, build-and-test format.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "Only ice-cream sticks and the adhesive provided by the organisers may be used for construction.",
      "Models must conform to the specified base area and maximum height limits.",
      "No additional reinforcing material (wire, tape, thread, etc.) is permitted unless explicitly allowed.",
      "Construction must be completed within the allotted build time; incomplete models will be tested as-is.",
      "The winner is determined by the longest survival time on the shake table before visible structural failure.",
      "In case of a tie, the model that survives the highest seismic frequency will be ranked higher.",
      "The organisers' decision on structural failure and test results is final."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/archicraft.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScr2md-jUJrLVgE6hYrA0Gq31gaMLrhLmQYD8cxK01tORUYJA/viewform?usp=dialog",
    "coordinators": [
      {
        "name": "Saud Khan",
        "phone": "7019039788",
        "email": "saud.khan@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Sandeep R",
        "phone": "9791628559",
        "email": "sandeep.r@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr Aniket",
        "phone": "9985004656",
        "email": "aniket.nitin@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "shipwreck",
    "title": "Shipwreck",
    "tagline": "The Final Float",
    "category": "Arts & Humanities",
    "department": "Psychology",
    "overview": "A storm has struck, and only one lifeboat remains. On board are some of the most influential figures of all time, including freedom fighters and mythological heroes, iconic movie characters and cartoon characters, controversial voices, and internet influencers. Each believes they are the one the world needs. But only one can float.\n\nIn this event, participants step into the shoes of legendary figures and, in character, defend why they deserve to survive. Through monologues, heated crossfire, and satire-filled exchanges, characters face off in a battle of wit, logic, and charisma, with only the sharpest, most convincing personas making it to the lifeboat.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Round 1: Why I Must Live (DAY 1)\nParticipants deliver a solo opening monologue in character (2 mins), building a case for why they are essential to the world and must survive over anyone else, focusing on their skills, abilities, knowledge, and the character's legacy. All monologues begin with a common starting line to set the shared stakes.\nExample: \"The sea doesn't care who you are. But I intend to make it care about me.\"\nRound 2: One Word (DAY 1)\nEach character distills their entire survival case into a single word to be drawn at random, then defends it in 1 minute flat. The round tests how sharply a participant understands their own character under time pressure.\nExample: Bob the Builder → \"Rebuild\": \"Everything after this storm needs rebuilding, and that's the one thing I'm built for.\"\nRound 3: Sink THEM (DAY 1)\nParticipants directly confront one another, calling out specific characters (one or more) by name and dismantling their survival arguments in real time (3 mins). The goal is to publicly weaken others' credibility while reinforcing your own relevance.\nExample: \"SpongeBob, your positivity doesn't fix a broken engine.\"\nRound 4: BACKSTAB (Crisis) (DAY 1)\nA dire crisis strikes the ship; evidence suggests the crash was planned. The captain hands participants a crisis to manage, implicating specific characters (e.g., engine schematics or weapons found in someone's possession), forcing accusations and defenses. (2 mins)\nExample: \"A weapons cache was discovered below deck; someone's been preparing for a fight no one else knew was coming.\nRound 5: Put it on Paper (DAY 2 )\nEach character will have to submit a written case and present it to the judge for survival, based on everything that unfolded during the debate (3 mins). All drafts are then reviewed, flaws are exposed, and the draft with the fewest mistakes, at the captain's discretion, wins the lifeboat."
      }
    ],
    "rules": [
      "Individual participation only; no teams allowed.",
      "Characters will be assigned two days before the event.",
      "Delivery must be in English (other languages/styles may be used sparingly for authenticity).",
      "Round 1 consists of an introduction to the characters, each of whom will state why they should be the one to survive.",
      "Round 2: Each character sums up their survival case in a single word, drawn at random, then defends it in 60 seconds flat, testing how sharply they understand their character under pressure",
      "Round 3 is when participants can cross-question one another and explain why others do not deserve to be on the lifeboat.",
      "In round 4, a crisis will be announced, and the crewmates will navigate the situation presented to them.",
      "Round 5 requires each member to write a draft and present it to the audience, who then argue why they deserve to stay on the lifeboat based on the situations they faced earlier in the event.",
      "The timings are as follows: Round 1 is 2 minutes per person; Round 2 is 1 minute per person; Round 3 is capped at 3 minutes per person; Round 4 is 2 minutes per person; and Round 5 is 3 minutes per person.",
      "Exceeding the time limit by more than 30 seconds will result in negative marking.",
      "Use of offensive or derogatory language or any inappropriate content will result in immediate disqualification.",
      "Participants must maintain their character throughout the event, especially during the interactions and rebuttals."
    ],
    "faqs": [],
    "prizePool": "15K",
    "date": "15-16 Sept 2026",
    "fee": "₹200 per person",
    "teamSize": "Individual",
    "format": "Solo",
    "image": "/images/events/shipwreck.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSe5vw6_Fm6RaVzkPzulKS3pOLT_xEj82bxxpdq1B-cjjbX0MQ/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Pearl John",
        "phone": "7303069827",
        "email": "pearl.john@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Milan Deepak",
        "phone": "8075456898",
        "email": "milan.deepak@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Archika  Johari",
        "phone": "8667380187",
        "email": "archika.johari@christunversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "squid-game",
    "title": "Squid Game: Squad Survival",
    "tagline": "Adapting the netflix original into a high-stakes campus competition",
    "category": "Arts & Humanities",
    "department": "Science & Humanities",
    "overview": "Squid Game: Squad Survival is an adrenaline-filled team challenge inspired by popular survival games, reimagined as a safe, exciting, and strategy-driven competition. Teams face a series of physical and mental challenges, including Red Light, Green Light, Dalgona Extraction, Memory Bridge, Strategic Tug-of-War, and surprise elimination rounds, that test coordination, communication, decision-making, and resilience under pressure. Every completed challenge earns survival points, while mistakes can lead to penalties or elimination. The event emphasizes teamwork, leadership, and tactical thinking rather than individual strength alone. Combining fast-paced action with suspense and entertainment, Squad Survival delivers a thrilling experience where only the most coordinated and resourceful team earns the title of Ultimate Survivors.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Round 1 – Red Light, Green Light (15 Minutes)\nTeams compete one member at a time.\nParticipants must reach the finish line without moving during \"Red Light.\"\nMotion sensors or event marshals detect movement.\nTime penalties apply for violations.\nRound 2 – Dalgona Challenge (15 Minutes)\nTeams carefully extract a predefined shape from a candy or substitute material.\nBreaking the shape results in elimination or penalty points.\nThe fastest successful teams advance.\nRound 3 – Memory Bridge (20 Minutes)\nTeams cross a path of numbered or colored tiles after observing a sequence.\nCorrect memory, communication, and coordination are essential.\nWrong choices incur penalties or require restarting.\nRound 4 – Strategic Tug-of-War (15 Minutes)\nTeams compete in knockout matches.\nVictory depends on teamwork, balance, timing, and coordinated effort rather than brute strength alone.\nGrand Finale if required – Squad Survival (15 Minutes)\nFinalists face a mixed challenge combining puzzles, speed, and teamwork.\nThe highest-scoring or last remaining team wins the championship."
      }
    ],
    "rules": [
      "Teams must consist of 6 participants.",
      "All participants must wear appropriate sports shoes.",
      "Unsportsmanlike conduct or rough play is strictly prohibited.",
      "Follow instructions from referees and event coordinators at all times.",
      "Physical contact outside designated game rules is not allowed.",
      "Judges may stop any activity for safety reasons.",
      "Any attempt to cheat will result in immediate disqualification.",
      "Teams must report 30 minutes before the event.",
      "The organizers reserve the right to modify challenges if required for safety.",
      "Judges' decisions are final."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹600 per team",
    "teamSize": "6",
    "format": "Team",
    "image": "/images/events/squid-game.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSf0qLbIm5R-xURhCXfHlrNMP0e3qqh2lxrYnUQy2xAhkayrlg/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Rithvik Sunil",
        "phone": "7306599726",
        "email": "rithvik.sunil@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Catherine",
        "phone": "99677 83363",
        "email": "Catherine.susan@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr Jopaul Mathew",
        "phone": "81380 11592",
        "email": "jopaul.mathew@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "startup-showdown",
    "title": "Startup Showdown",
    "tagline": "“A dynamic entrepreneurial experience where participants transform opportunities into ventures, build their leadership teams, navigate business challenges, and compete to win investor confidence.”",
    "category": "Management",
    "department": "MBA",
    "overview": "Startup Showdown is an immersive, team-based entrepreneurship simulation where participants experience the journey of building and scaling a startup. Rather than a conventional business-plan competition, teams progress through interconnected rounds involving opportunity identification, branding, leadership selection, business analytics, and crisis management. Participants begin by building a venture from randomly assigned opportunity and constraint cards, then develop its brand and market strategy. They subsequently assemble an executive team through a strategic talent auction, analyse business data using Excel, and prepare an investor pitch. In the final round, teams must adapt their venture to an unexpected business challenge and defend their decisions before a panel of judges acting as investors. The event tests creativity, entrepreneurial thinking, strategic decision-making, leadership, teamwork, analytical ability, and adaptability.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Teams randomly draw an Opportunity Card and a Constraint Card, with an optional Technology/Trend Card. They develop a viable startup concept that addresses the opportunity while working within the assigned constraint. Example: an opportunity related to reducing food waste may be paired with a sustainability-focused constraint. Teams briefly present their concept to the judges.\nTeams build the identity and market positioning of the startup developed in Round 1 through elements such as brand name, tagline, value proposition, target customer and go-to-market strategy. Example: a food-waste venture may be positioned as a B2B sustainability solution."
      }
    ],
    "rules": [
      "1. Each team must consist of 2–3 members.",
      "2. Participants must belong to the same participating institution, subject to fest regulations.",
      "3. The startup developed in Round 1 will continue throughout the subsequent rounds.",
      "4. Participants must adhere to the time limits specified for each round.",
      "5. The virtual currency used in the Executive Auction has no real monetary value.",
      "6. Teams cannot transfer virtual funds between teams during the auction.",
      "7. The Excel round will be conducted using the tools and resources specified by the organisers.",
      "8. Overnight-round submissions must follow the prescribed format and deadline.",
      "9. Teams must be prepared to present and defend their decisions before the judges.",
      "10. Plagiarism, unauthorised assistance or misconduct may result in disqualification.",
      "11. The organisers reserve the right to modify the round structure where operationally necessary.",
      "12. The decision of the judges and organising committee will be final."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2 members",
    "format": "Team",
    "image": "/images/events/startup-showdown.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSezVxg3D4xEwsmTCmxjXaKa3UDZmCV1w71KaDUM4oqbklhzHA/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "K I Nihala Enoon",
        "phone": "7907386107",
        "email": "nihala.enoon@mba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Aradhana M",
        "phone": "9902662782",
        "email": "aradhana.m@mba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Ravindra Babu S",
        "phone": "9880525788",
        "email": "ravindrababu.s@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "strategic-finance",
    "title": "Strategic Finance",
    "tagline": "A battle of financial minds where strategy is the weapon, risk is the game, and every decision shapes the outcome",
    "category": "Management",
    "department": "BBA",
    "overview": "The event is structured around two connected halves that mirror the Strategic Finance vertical. One-half centers on competition, decision-making, and problem-solving, representing Corporate Strategy. The other centers on growth, value creation, and money management, representing Wealth Management.\n\nThis structure gives the event a clear identity and ensures both domains receive equal focus throughout the competition. It also makes it easy to organize individual rounds under one of the two halves, so every task ties back into a single, consistent story for the event.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "The event follows a business case-based format, structured around a series of real-world inspired tasks designed to test participants across the complete spectrum of finance. The format integrates on-the-spot tasks, case-solving challenges, and financial quizzes, ensuring comprehensive coverage of both corporate strategy and wealth management domains. Each round is designed to simulate authentic decision-making pressures faced in the industry, pushing participants to think critically, act swiftly, and adapt under uncertainty.\nThe competition is structured over two days. The event follows a constant elimination format, with rounds narrowing the participant pool and raising the stakes as teams advance. The final stage of the competition features a live stage round, where the remaining teams present and defend their solutions to a crisis scenario in front of a live audience, showcasing not only their strategic acumen but also their composure, communication, and problem-solving skills under real-time pressure."
      }
    ],
    "rules": [
      "Team Composition: Each team must consist of two participants, and the team composition cannot be changed once the event begins.",
      "Timeliness: Participants must report on time for every round. Late entry or delayed submission may result in a deduction of marks or disqualification from the respective round.",
      "Submission: All submissions must be made through the designated platform (Google Classroom) within the specified time. Late submissions will not be accepted unless permitted by the organizers.",
      "AI Usage: AI tools may be used only in rounds where they are explicitly permitted. Use will be time-bound and limited as specified for that round. Unauthorized or excessive use of AI may result in disqualification from the round.",
      "Originality: All submissions and responses must be the participants' own work. Plagiarism, copying, or using another team's ideas or submissions without permission will result in disqualification.",
      "Use of Devices: Mobile phones and other electronic devices may be used only when permitted for a particular round. Unauthorized communication or use of devices during restricted rounds may result in disqualification.",
      "Judging & Organizer’s Decision: Participants will be evaluated according to the criteria specified for each round. The decision of the judges and organizing committee regarding scoring, elimination, and disqualification will be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15-16 Sept 2026",
    "fee": "₹500 per team",
    "teamSize": "2",
    "format": "Team",
    "image": "/images/events/strategic-finance.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfYNE1V1OxtogkQ6HU1Hj4v9kCi2v_OyWlp9lRNKF3Cu9fWuw/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Jash Parekh",
        "phone": "9321007501",
        "email": "Jash.kunal@bba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Mohak Bansal",
        "phone": "6399911920",
        "email": "Mohak.krishnam@bba.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Muthulakshmi P",
        "phone": "9003687190",
        "email": "muthulakshmi.p@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "strikex",
    "title": "StrikeX",
    "tagline": "A competitive eFootball™ Mobile tournament where players battle through knockout rounds to become the ultimate champion.",
    "category": "Coding & Tech",
    "department": "Computer Science & Engineering (CSE)",
    "overview": "StrikeX is a competitive eFootball™ Mobile (PES Mobile) tournament where participants compete in one-on-one football matches. The tournament will test players' football gaming skills, tactical decision-making, precision, strategy, and adaptability through a structured knockout format. Participants will progress through successive rounds, with the best players advancing towards the Grand Final. The event aims to provide an engaging and competitive platform for students to showcase their skills while promoting sportsmanship, healthy competition, and strategic gameplay. It offers football and gaming enthusiasts an opportunity to compete against one another and experience the excitement of an organized digital football tournament.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "The tournament will be conducted through a structured competitive format for each selected game.\nStage 1 – Qualifiers:\nAll registered participants will compete in one-on-one matches, with winners advancing to the next round.\nStage 2 – Knockouts:\nQualified participants will compete in successive knockout matches, with winners progressing towards the finals.\nStage 3 – Grand Finals:\nThe final two participants will compete in the Grand Final, with the winner crowned the StrikeX Champion."
      }
    ],
    "rules": [
      "Each participant must register before the specified registration deadline.",
      "Each match will be played using the official eFootball™ Mobile (formerly PES Mobile) version specified by the organizers.",
      "Participants must use their registered gaming accounts throughout the tournament.",
      "All matches must be played using the settings and match format specified by the organizers.",
      "Any form of cheating, hacking, exploiting glitches, or use of unauthorized software is strictly prohibited.",
      "Participants must report to the designated gaming area before their scheduled match time.",
      "Late arrival or failure to appear for a scheduled match may result in forfeiture or disqualification.",
      "Participants must maintain proper sportsmanship and respectful conduct throughout the tournament.",
      "Participants must not interfere with another participant's device, account, match, or network.",
      "Any technical issues must be immediately reported to the organizers.",
      "Game-specific tie-breaker rules will be applied wherever required.",
      "The organizers' and referees' decisions will be final and binding.",
      "The organizers reserve the right to modify the schedule, rules, or match format if necessary."
    ],
    "faqs": [],
    "prizePool": "15K",
    "date": "16 Sept 2026",
    "fee": "₹200 per person",
    "teamSize": "1",
    "format": "Solo",
    "image": "/images/events/strikex.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSfqcmfUY0RycwgKDs6ieUBJ9V4ZcwJb7tbKZJCGHkMNH8gxfw/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Vora Chanchal",
        "phone": "8160556005",
        "email": "vora.chanchal@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Suraj Adhikari",
        "phone": "6361038223",
        "email": "suraj.adhikari@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Bejoy BJ",
        "phone": "8281300742",
        "email": "bejoy.bj@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "sustain-x",
    "title": "Sustain X",
    "tagline": "A rapid innovation challenge where teams build and pitch technology-based solutions to real-world problems aligned with the Sustainable Development Goals.",
    "category": "Coding & Tech",
    "department": "Computer Science & Engineering (CSE)",
    "overview": "SUSTAIN-X is a technology-driven innovation competition that challenges participants to develop practical solutions to real-world problems aligned with the United Nations Sustainable Development Goals (SDGs). Teams will randomly select an SDG and receive a specific problem statement related to it, which they must address using technology of their choice. Participants will design and develop a functional prototype within the allotted time, encouraging them to apply creativity, technical knowledge, and innovative thinking to sustainability challenges. In the second round, teams will pitch and demonstrate their solutions before a panel of judges, explaining the problem, technology used, feasibility, and potential impact. SUSTAIN-X provides participants with an opportunity to explore how technology can be used to create meaningful social and environmental change while developing their problem-solving, prototyping, and communication skills.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Round 1 – Build:\nTeams will randomly select an SDG and receive a specific problem statement related to it. They will then design and develop a functional technological prototype using technologies of their choice within the allotted time.\nRound 2 – Pitch & Demo:\nTeams will present and demonstrate their prototype before the judges, explaining the problem, proposed solution, technology used, feasibility, and potential impact of their project.\nThe team demonstrating the most innovative, feasible, and impactful technological solution will be declared the winner."
      }
    ],
    "rules": [
      "Each team must consist of 2–4 members.",
      "Teams must randomly select one SDG and work only on the assigned problem statement.",
      "The solution must be technology-based and developed during the event.",
      "Teams may use AI tools, online resources, and development platforms during the event.",
      "The prototype must be functional or demonstrable during the final pitch.",
      "Teams must submit their prototype within the specified time limit.",
      "Projects must be original, and plagiarism or copying another team's work is strictly prohibited.",
      "Teams must clearly state the technology and resources used in their solution.",
      "Teams must adhere to the specified pitch and demonstration time limit.",
      "Any form of unauthorized collaboration or unfair assistance will result in disqualification.",
      "The judges' decision will be final and binding.",
      "The organizers reserve the right to modify the rules or schedule if necessary."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "16 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2–4",
    "format": "Team",
    "image": "/images/events/smartcity.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSejeMwRkTbci9NphLCRNS9ChSH_NzCLlDg_kvJ2j5_0FVuPaw/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Joe Francis Sebastian",
        "phone": "8951982062",
        "email": "joe.francis@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Debayan Ghose",
        "phone": "8867727460",
        "email": "debayan.ghose@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Sherin Paul",
        "phone": "9385446508",
        "email": "shein98@gmail.com",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "switch-and-scene",
    "title": "Switch and Scene",
    "tagline": "Think fast.Act faster!",
    "category": "Arts & Humanities",
    "department": "Psychology",
    "overview": "‘Switch and Scene’ is a theatrical showdown where quick thinking meets unpredictable twists! In Switch and Scene, A pair of performers will dive into exciting improv scenes with only a few minutes to prepare. With sudden role reversals, rapid genre changes, and an extra twist of change in the emotions, each duo must adapt instantly to their given prompts.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Switch and Scene is a one-day event, with no separate rounds. The event begins with a briefing on the rules and regulations for participants, followed by slot picking. The participants will have 6+1 minutes to act out their scene. There will be two buzzers during their act: the first will signal role reversal, and the second will signal the genre change. The second buzzer will indicate a change in the emotions."
      }
    ],
    "rules": [
      "Duration of the performance: 6 + 1 minutes.",
      "Number of participants per team: 2 participants.",
      "Each team member will be assigned a character with a contrasting power dynamic to their partner",
      "Characters will be revealed on the spot.",
      "Teams will have 1-2 minutes to discuss and prepare their initial approach.",
      "No costumes are allowed, and only minimal props will be provided; performers must rely solely on their acting skills.",
      "When the first buzzer sounds, performers must immediately switch characters.",
      "Along with role reversal, the team must change the genre of their scene, which will be shown to them through placards.",
      "When the second buzzer sounds, performers must change their characters' emotions, which are also to be shown through placards.",
      "Teams must maintain a coherent narrative throughout their performance despite changes.",
      "Use of offensive or derogatory language or any inappropriate content will result in immediate disqualification.",
      "The short film must comply with all the rules and regulations of CHRIST (Deemed to be University)."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "2",
    "format": "Team",
    "image": "/images/events/switchandscene.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLSdn4iA4RVexnpafMPaDPHRdbHl3DQwjPg4SNibj-HJFqlTDAA/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Shourya Bhatia",
        "phone": "9560688098",
        "email": "shourya.bhatia@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Vishnu Vardhan",
        "phone": "9585515202",
        "email": "vishnu.vardhan@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Shilpa B M",
        "phone": "9972939466",
        "email": "shilpa.borehalli@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "the-last-turn",
    "title": "The Last Turn",
    "tagline": "Navigate a horror-themed maze, face a randomly assigned obstruction, solve puzzles along the way, and find your way to the exit before time runs out.",
    "category": "Non-Technical",
    "department": "AI and Data Science Engineering (ADSE)",
    "overview": "Maze Runner is an immersive, time-based physical maze competition designed to test how participants navigate uncertainty, solve challenges and adapt under pressure. Rather than being a conventional haunted house or escape room, the event combines maze navigation, short puzzles and competitive time-based progression in a controlled, themed environment.\n\nBefore entering the maze, each participant spins the Obstruction Wheel, which assigns a restriction, neutral outcome or limited advantage for their run. Participants then navigate multiple maze sections, make route decisions, reach checkpoints, solve short challenges and manage their assigned condition before completing the final route to the exit.\n\nThe event tests observation, problem-solving, decision-making, adaptability, time management and composure under pressure while providing a high-energy and immersive competitive experience. Its unpredictable mechanics and themed environment ensure that each run is different, encouraging participants to think quickly, adapt their strategy and reach the finish as efficiently as possible.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "A. Participation",
      "The event is open to students from all academic disciplines.",
      "Maze Runner is an individual competitive event; participants compete individually.",
      "Participants must complete the mandatory safety briefing before entering the maze.",
      "Participants must report to their assigned slot on time and follow the instructions provided by the organisers.",
      "B. Gameplay",
      "Each participant receives one timed attempt through the maze.",
      "Before entering the maze, each participant must spin the Obstruction Wheel and follow the assigned restriction, neutral outcome or advantage for that run.",
      "Participants must remain within the designated maze boundaries and follow the permitted routes and instructions.",
      "Participants must navigate the maze, reach designated checkpoints and complete the puzzles placed at selected sections.",
      "Participants must comply with the assigned obstruction throughout the relevant section of the run.",
      "Participants may use the designated Hint Token system at applicable checkpoints, subject to the associated time cost.",
      "The official completion time is recorded when the participant crosses the final marker.",
      "The event may be conducted as a leaderboard-based competition or as a multi-stage competition, depending on venue capacity and registration volume.",
      "C. Resources",
      "Participants are not required to use personal digital devices as part of the maze gameplay.",
      "Internet access and AI tools are not part of the event mechanics and therefore are not required for participation.",
      "Participants may use only the materials and information provided within the maze and by the organisers for solving the integrated challenges.",
      "Participants must not bring or use unauthorised external materials to obtain an unfair advantage.",
      "D. Fair Play",
      "Participants must complete their runs independently and may not receive assistance from spectators, other participants or unauthorised personnel.",
      "Participants must not share puzzle solutions, route information or other event-specific assistance with participants whose attempts are yet to take place.",
      "Participants must not bypass the designated route, obstruction conditions, checkpoints or timing procedures.",
      "Moving, damaging or tampering with maze structures, props or equipment is prohibited.",
      "Any deliberate attempt to gain an unfair advantage or manipulate the event mechanics may result in disqualification.",
      "E. Conduct",
      "Participants must follow all instructions given by the organisers, coordinators, volunteers and safety personnel.",
      "Participants must maintain appropriate discipline and respectful behaviour throughout the event.",
      "Participants must not intentionally disturb, obstruct or interfere with another participant's run.",
      "Participants must comply with all venue-specific safety and conduct requirements.",
      "Participants must not touch, move or tamper with event props, structures or equipment unless explicitly instructed.",
      "F. Technical / Operational Issues",
      "As Maze Runner is primarily a physical event, personal device failure or network failure does not normally affect gameplay.",
      "Any issue involving maze structures, timing equipment, lighting, sound, props or other organiser-provided systems must be reported to the event coordinator immediately.",
      "Organisers may pause, terminate, restart or modify a run if a technical, safety or operational issue materially affects the fairness or safety of the event.",
      "Any decision regarding time adjustments or alternative arrangements following an organiser-side issue will be made by the event coordinators.",
      "G. Judging & Disputes",
      "Participants are ranked primarily on their adjusted completion time, with the announced scoring system also considering puzzle completion, hint usage and obstruction management.",
      "If conducted as a multi-stage competition, participants who meet the announced qualification criteria will progress to subsequent rounds.",
      "Judges and event coordinators have the authority to verify timings, evaluate performance and make decisions regarding rule violations.",
      "The uploaded Maze Runner proposal does not currently specify a formal tie-breaker mechanism. The organisers should finalize and announce the tie-breaker procedure before the event.",
      "All decisions of the judging panel and event organisers regarding scoring, penalties, qualification, disqualification and final ranking shall be final and binding."
    ],
    "faqs": [],
    "prizePool": "15K",
    "date": "15 Sept 2026",
    "fee": "₹200 per person",
    "teamSize": "Individual",
    "format": "Solo",
    "image": "/images/events/the-last-turn.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScGH0od4oPhe2WVsNyYLJOjGd2XcMIBtoPJdHIGnRDb9XrhZg/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Anushka Pravakar",
        "phone": "8971754070",
        "email": "anushka.pravakar@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Kevin Samuel R",
        "phone": "8148364568",
        "email": "kevin.samuel@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof. Wims Magdalene Mary",
        "phone": "8760480810",
        "email": "vimsy.87@gmail.com",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "trace",
    "title": "Trace",
    "tagline": "Dig Through Digital Evidence, Trace Every Technical Indicator, Connect the Attack Chain, and Reveal What Really Happened.",
    "category": "Coding & Tech",
    "department": "AI and Data Science Engineering (ADSE)",
    "overview": "TRACE (Track → Retrieve → Analyze → Correlate → Examine) challenges you to answer one question: Can you uncover a cyber incident from the digital traces it leaves behind? Built around the tagline “Every Move Leaves a Trace,” TRACE places participants in the role of cyber investigators, turning raw technical data into an evidence-backed story.\n\nTeams investigate three independent cybersecurity cases using system logs, packet captures, file hashes, metadata and network records. With forensic and analysis tools at their disposal, participants extract indicators, identify anomalies, connect evidence and reconstruct how each incident unfolded.  Teams can choose to investigate one, two or all three cases, creating their own strategy.\n\nTRACE offers a hands-on introduction to digital forensics, network analysis, log analysis and incident reconstruction while testing technical reasoning, problem-solving and evidence correlation. The challenge is to move beyond simply finding information - to prove what happened, how it happened and why the evidence supports it.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "TRACE is conducted as a three-case cyber investigation challenge in which teams analyse raw technical artifacts, extract relevant indicators using appropriate tools (Participants may use tools such as Wireshark, CyberChef, VS Code/Notepad++, Excel/Google Sheets, and PowerShell for analysing and extracting information from the provided technical artifacts) and correlate their findings to reconstruct fictional cybersecurity incidents. The three cases are released progressively at one-hour intervals, while teams may choose to investigate one, two, or all three cases. After the investigation period, teams prepare a Technical Incident Report and participate in a technical walkthrough and Q&A with the judges."
      }
    ],
    "rules": [
      "A. Participation",
      "The event is open to students from technical and interdisciplinary backgrounds.",
      "Each team must consist of 2–4 participants.",
      "All team members must complete the required registration and be present at the venue during the event.",
      "Participants must carry a laptop with a charger for technical analysis and investigation.",
      "Teams must report to the venue before the commencement of the event briefing.",
      "B. Gameplay",
      "Case 1, Case 2 and Case 3 will be released at 10:00 AM, 11:00 AM and 12:00 PM, respectively.",
      "Teams may choose to investigate one, two or all three cases and may divide their time among the cases according to their strategy.",
      "Each case will contain a brief, technical objective and a package of raw technical artifacts such as logs, packet captures, metadata, hashes, network records or other relevant files.",
      "Participants may use tools such as Wireshark, CyberChef, VS Code/Notepad++, Excel/Google Sheets, and PowerShell for analysing and extracting information from the provided technical artifacts. Teams are not restricted to these tools alone.",
      "The investigation phase will conclude at 1:00 PM. No further active investigation will be permitted after this time.",
      "Teams may prepare and update their Technical Incident Report throughout the investigation.",
      "Teams may use the 1:00 PM–2:00 PM period for lunch and/or to finalise their report according to their strategy.",
      "The Technical Incident Report must be submitted before 2:00 PM in the format specified by the organisers.",
      "The final session will consist of a technical walkthrough and judge Q&A.",
      "Each team will initially be allotted 5 minutes for the final walkthrough and interaction, subject to adjustment based on the number of participating teams.",
      "Teams attempting multiple cases must manage their allotted presentation time accordingly.",
      "C. Resources",
      "Each team must use their own laptop/device for the investigation.",
      "Participants may use tools such as Wireshark, CyberChef, VS Code/Notepad++, Excel/Google Sheets, and PowerShell for analysing and extracting information from the provided technical artifacts.",
      "The organisers will specify before the event whether internet access is permitted and which online resources may be accessed.",
      "AI tools can be used but finally the scoring comes down to how well you are able to present your findings during the technical walkthrough.",
      "External resources such as online databases, documentation, search engines or reference material may be used only where explicitly permitted.",
      "Participants may use standard technical tools required for analysing the provided artifacts.",
      "Teams must not obtain, share or use case-specific solutions or materials from sources outside the event.",
      "D. Fair Play",
      "Teams must independently perform their own investigation and analysis.",
      "Collaboration or exchange of findings between competing teams is prohibited during the investigation.",
      "Sharing case files, extracted indicators, answers, reports or other investigation materials with another competing team is prohibited.",
      "Receiving unauthorized assistance from individuals outside the registered team is prohibited.",
      "Any attempt to manipulate, alter, damage or tamper with the provided artifacts, event systems or judging process will be considered malpractice.",
      "E. Conduct",
      "Participants must maintain professional and respectful behaviour throughout the event.",
      "Teams must follow all instructions given by the organisers, volunteers and event coordinators.",
      "Participants must not disturb other teams during the investigation or final evaluation.",
      "Participants must comply with the venue's rules regarding equipment, seating, internet access, food and general conduct.",
      "Any disruptive, abusive or inappropriate behaviour may result in removal from the event.",
      "Plagiarism, impersonation, unauthorized access to another team's device or files, and any other form of cheating may result in immediate disqualification.",
      "F. Technical / Operational Issues",
      "Participants are responsible for ensuring that their laptops, chargers and required software are functioning before the investigation begins.",
      "In the event of a device failure, teams must immediately inform the organisers. Any additional time or alternative arrangement will be provided solely at the organisers' discretion.",
      "Temporary network or internet failures will not automatically result in an extension of the investigation period.",
      "If a technical issue originates from the organisers' systems or provided materials and materially affects the investigation, the organisers may provide an appropriate remedy or time adjustment.",
      "The organisers reserve the right to modify, pause or temporarily suspend the event in case of technical, operational or unforeseen circumstances.",
      "Any decision regarding technical disruptions, extensions or operational adjustments will be made by the event organisers.",
      "G. Judging & Disputes",
      "Teams will be evaluated based on:",
      "Accuracy of Indicators Extracted - 25 Marks Correct Use of Technical Tools / Methodology - 25 Marks Reasoning Behind the Identified Indicators - 20 Marks Correlation of Indicators & Reconstruction of Final Report - 20 Marks Quality of Live Technical Walkthrough & Q&A - 10 Marks The number of cases attempted alone will not determine the winner; the technical accuracy, depth of reasoning and quality of correlation will be considered.",
      "Judges have the authority to ask teams to justify their methodology, tools, extracted indicators and conclusions.",
      "In case of a tie, the team with the higher score in Correlation of Findings & Reconstruction of the Incident Flow will rank higher.",
      "If the tie persists, the team with the higher score in Reasoning Behind the Findings will rank higher.",
      "Any dispute regarding judging, interpretation of evidence or application of the rules must be raised with the organisers during the event.",
      "The decision of the judging panel and event organisers shall be final and binding."
    ],
    "faqs": [],
    "prizePool": "22K",
    "date": "15 Sept 2026",
    "fee": "₹400 per team",
    "teamSize": "3–4",
    "format": "Team",
    "image": "/images/events/enigma.jpg",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScKNw3cW_uLO0BEw4Cd8gLsaDWHwVkZbrGeppICT0srA6N4qA/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Joel Jacob Roji",
        "phone": "7012032686",
        "email": "joel.jacob@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Darren Samuel Dcruz",
        "phone": "6364419705",
        "email": "darren.samuel@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr Binson V A",
        "phone": "9526738829",
        "email": "binson.va@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "utopian-land",
    "title": "Utopian Land",
    "tagline": "A digital world-building challenge where participants create imaginative visions of a fictional city through concept art, spatial storytelling, and visual design.",
    "category": "Design",
    "department": "School of Architecture",
    "overview": "Utopian land is an open digital art and concept design competition challenging artists to visually construct a non-existent city. Participants are invited to explore alternate realities, speculative futures, extreme environmental conditions, technological shifts, or fictional societies, translating complex urban imagination into compelling digital artwork. The core focus is on spatial storytelling, atmospheric visual design, and world-building through digital media.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Details will be announced soon."
      }
    ],
    "rules": [
      "Eligibility: The event is open to registered participants who meet the eligibility criteria specified by the organizing committee.",
      "Registration: Participants must complete the registration process within the stipulated deadline. No changes to registration details will be permitted after the deadline unless approved by the organizers.",
      "Punctuality: Participants must report to the venue at the designated time. Late arrivals may be disqualified.",
      "Use of AI: AI tools may be used for research and information gathering. All entries must be created entirely by participants using traditional digital tools or non-generative digital media.",
      "Fair Play: Participants must maintain professional conduct and demonstrate integrity, discipline, and respect towards fellow participants, judges, volunteers, and organizers.",
      "Electronic Devices: The use of electronic devices is permitted throughout the event.",
      "Decision of Judges: The decisions of the judging panel and organizing committee will be final and binding. No appeals or arguments against the evaluation process will be entertained.",
      "Disqualification: Any form of cheating, plagiarism, misconduct, impersonation, unauthorized assistance, or violation of event rules may lead to immediate disqualification. Any entry found to contain prompt-generated assets, AI-manipulated art, or fraudulent proof of work will be immediately disqualified."
    ],
    "faqs": [],
    "prizePool": "15K",
    "date": "15 Sept 2026",
    "fee": "₹200 per person",
    "teamSize": "30(Individual)",
    "format": "Solo",
    "image": "/images/events/utopian-land.webp",
    "registrationLink": "https://docs.google.com/forms/d/e/1FAIpQLScAbvcMO2zxxLCQZ-G1X6nMSGpPRvvu9cIhHswFSurOSxKq3w/viewform?usp=publish-editor",
    "coordinators": [
      {
        "name": "Jaden Ross Rebello",
        "phone": "8080248809",
        "email": "jaden.ross@arch.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Aleena Elizabeth Mary",
        "phone": "(+971)50820199",
        "email": "aleena.elizabeth@arch.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof. Aleena Mariya Silvester",
        "phone": "8714491574",
        "email": "aleena.mariya@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "ai-film-fest",
    "title": "AI Film Fest",
    "tagline": "Where AI Meets Global Creativity",
    "category": "Design",
    "department": "Office of International Affairs (OIA)",
    "overview": "AI Film Fest is a creative and engaging filmmaking competition organized by the Office of International Affairs (OIA), CHRIST (Deemed to be University), Kengeri Campus, as part of MAGNOVITE 2026. The event brings together students from universities and colleges across the world to explore the possibilities of Artificial Intelligence in filmmaking, storytelling, visual communication, and creative expression. The competition is open to Grade 11, Grade 12, and undergraduate (UG) students from institutions outside India. Participants will have an opportunity to showcase their creativity, storytelling abilities, technological skills, and cultural perspectives through AI-powered filmmaking. Participants may compete individually or in teams of up to three members, with all members of a team belonging to the same university or college. Participants will create a short film based on a theme or creative challenge announced by the organizers. Artificial Intelligence may be creatively incorporated into various stages of production, including scriptwriting, image and video generation, voiceovers, music, animation, editing, visual effects, and other permitted aspects of filmmaking. The event aims to encourage global creativity, cultural expression, innovation, responsible use of emerging technologies, and cross-cultural exchange, while providing students from diverse international backgrounds with a platform to connect and share their unique perspectives through visual storytelling.",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "Registration & Team Formation: Participants register individually or form teams of up to three members. Registered participants will receive the official event guidelines and other necessary information.\nTheme / Challenge Reveal: The official film theme or creative challenge will be announced by the organizers. Participants will then develop their story and film concept based on the announced theme.\nStory & Script Development: Participants develop their storyline, characters, dialogue, screenplay, and overall creative concept. AI tools may be used to support scriptwriting, brainstorming, research, and other creative development activities.\nAI Film Production: Participants create their films using AI and other permitted creative tools. AI may be used for generating visuals, videos, voiceovers, music, animation, visual effects, and other aspects of film production.\nEditing & Post-Production: Participants edit and integrate their generated and original content, adding transitions, subtitles, sound effects, music, visual effects, and other elements required to complete the film.\nFilm & Documentation Submission: Participants must submit the final film along with the required Film & AI Usage Report, team details, credits, AI Usage Statement, and any other documents specified by the organizers before the submission deadline.\nJudging: Submitted films will be evaluated according to the published judging criteria, including storytelling, creativity and originality, effective use of AI, visual and technical quality, direction and editing, sound design, and overall impact.\nAwards & Recognition: The top three entries will be awarded 1st, 2nd, and 3rd prizes. All registered participants will receive Certificates of Participation, while the winners will additionally receive Certificates of Recognition.\nClosing: The event will conclude with an official closing note and acknowledgement of all participating students and teams."
      }
    ],
    "rules": [
      "Team Size: Participants may compete individually or in teams of 1-3 members.",
      "Film Duration: The final film must have a maximum duration of 5 minutes, including credits.",
      "Originality: All films must be original and created specifically for the event. Plagiarism, copying, or substantial reuse of another team's work will result in disqualification.",
      "AI Usage: Artificial Intelligence must play a meaningful and significant role in the creation of the film. Participants may use AI for scripts, visuals, video, voiceovers, music, animation, editing, visual effects, and other permitted creative processes.",
      "Theme: The submitted film must be based on and appropriately respond to the theme / challenge announced by the organizers.",
      "Copyright & Intellectual Property: Participants must use only original, licensed, royalty-free, AI-generated, or otherwise legally permitted content. Unauthorized use of copyrighted material is strictly prohibited.",
      "Content Standards: Films must be suitable for a college audience. Offensive, discriminatory, hateful, sexually explicit, defamatory, or otherwise inappropriate content is prohibited.",
      "Submission: Films must be submitted in the format specified by the organizers and before the announced deadline. Late submissions may attract penalties or may be rejected at the discretion of the organizers.",
      "AI Disclosure: Each team must submit a brief AI Usage Statement / AI Usage Report clearly identifying the AI tools used and explaining their purpose in the filmmaking process.",
      "Fair Play: Participants must not interfere with, copy, manipulate, sabotage, or otherwise unfairly influence another team's work or submission.",
      "Equipment & Resources: Participants are responsible for their own devices, software, internet connectivity, accounts/subscriptions, and backup of their work unless otherwise specified by the organizers.",
      "Judging: Films will be evaluated based on storytelling, creativity, originality, effective AI usage, visual and technical quality, direction, editing, sound design, and overall impact, as per the published judging criteria.",
      "Disqualification: Violation of major event rules, plagiarism, copyright infringement, inappropriate content, fraudulent submissions, or unfair practices may result in immediate disqualification.",
      "Final Decision: The decision of the judging panel shall be final and binding. The organizers reserve the right to interpret and enforce the rules to ensure fairness and maintain the integrity of the competition."
    ],
    "faqs": [],
    "prizePool": "USD 225",
    "date": "15-16 Sept 2026",
    "fee": "USD 5 per participant",
    "teamSize": "1-3 members",
    "format": "Individual / Team",
    "image": "/images/events/ai-film-fest.jpg",
    "registrationLink": "https://forms.gle/yydVnKFD1v2UCzY67",
    "coordinators": [
      {
        "name": "Noel K Roy",
        "phone": "9110400683",
        "email": "noel.kolanchery@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Adhithya Krishna C S",
        "phone": "8139826765",
        "email": "adhithya.krishna@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Vinay Jha Pillai",
        "phone": "9164076123",
        "email": "vinay.pillai@christuniversity.in",
        "role": "Faculty POC"
      },
      {
        "name": "Mr. Geou Akshil",
        "phone": "8861315195",
        "email": "geou.akshil@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "battle-of-bands",
    "title": "Battle of Bands",
    "tagline": "Shape the Wave.",
    "category": "Cultural",
    "department": "Culturals",
    "overview": "Rock the stage at our 'Battle of the Bands' event! Calling all music enthusiasts to showcase their talent and compete for the title. Bring your best beats, electrifying solos, and a whole lot of energy. It's a showdown of sound you won't want to miss.",
    "stages": [],
    "rules": [
      "Students are not permitted to perform with more than 1 band per institution. Performing with a second band will lead to immediate disqualification of both bands.",
      "Bands may perform in any language (inclusive but not limited to English and all Indian Regional Languages).",
      "Original Compositions are encouraged.",
      "Explicit Language/Vulgar Gestures/Offensive Misconduct and Revealing Clothing are not allowed.",
      "808's and other synthesized beats/pads and backing tracks are not permitted.",
      "A standard 5 piece Drum Kit will be provided; one Keyboard stand will be provided; all other instruments, amps, processors and pedals must be arranged by the participants.",
      "4 vocalist mics + 2 SM58 mics will be provided for vocals or instruments based on the team's requirement.",
      "Member limit: 4 - 10 participants.",
      "Time limit: 7 + 3 minutes; exceeding the time limit will NOT lead to point reduction but all lines will be muted at the 10 minute mark."
    ],
    "faqs": [],
    "prizePool": "22k",
    "date": "15 Sept 2026",
    "fee": "₹750 per team",
    "teamSize": "4-10 members",
    "format": "Team",
    "image": "/images/events/battle-of-bands.jpg",
    "registrationLink": "https://forms.gle/WejYBf3Cni3QaNqm7",
    "coordinators": [
      {
        "name": "Adithyan C R",
        "phone": "6282548054",
        "email": "adithyan.cr@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Reuben Josey",
        "phone": "7619544446",
        "email": "reuben.josey@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof. Shruti Jalapur",
        "phone": "9036417989",
        "email": "shruti.jalapur@btech.christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "acapella-and-group-singing",
    "title": "Acapella and Group Singing",
    "tagline": "Shape the Wave.",
    "category": "Cultural",
    "department": "Culturals",
    "overview": "Experience the magic of pure vocal harmony! Acapella brings together voices that blend melody, rhythm, and emotion. Let the power of music take center stage!",
    "stages": [],
    "rules": [
      "Students are not permitted to perform with more than 1 team per institution. Performing with a second team will lead to immediate disqualification of both teams.",
      "Teams may perform in any language or genre; fusion is encouraged. (inclusive but not limited to English and all Indian Regional Languages)",
      "Original Compositions are encouraged.",
      "Explicit Language/Vulgar Gestures/Offensive Misconduct and Revealing Clothing are not allowed.",
      "808's and other synthesized beats/pads and backing tracks are not permitted.",
      "Instruments are NOT mandatory; those teams that choose to perform purely acapella and those choosing a Group Singing Setlist will be judged based purely on musicality, skill, tightness and execution, and overall impact.",
      "All Instruments must be organised by the participants; no instruments shall be provided from the university's side.",
      "11 mics and 2 DI Boxes will be provided.",
      "Member limit: 4 - 11 participants.",
      "Time limit: 7 + 3 minutes; exceeding the time limit will NOT lead to point reduction but all lines will be muted at the 10 minute mark."
    ],
    "faqs": [],
    "prizePool": "22k",
    "date": "15 Sept 2026",
    "fee": "₹750 per team",
    "teamSize": "3-11 members",
    "format": "Team",
    "image": "/images/events/acapella.webp",
    "registrationLink": "https://forms.gle/PkraEryzWEApYSvT6",
    "coordinators": [
      {
        "name": "Joy Samson A",
        "phone": "9380720592",
        "email": "joy.samson@btech.Christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Harsh K",
        "phone": "8595879627",
        "email": "harsh.k@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Arul Prabakaran",
        "phone": "9442394623",
        "email": "arulprabakaran.s@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "theme-dance",
    "title": "Theme Dance",
    "tagline": "Shape the Wave.",
    "category": "Cultural",
    "department": "Culturals",
    "overview": "Use beautiful dancing to show a main story or idea. Present this concept artistically by mixing different kinds of dance. It is a graceful performance that uses various dance styles to express a theme.",
    "stages": [],
    "rules": [
      "Students are not permitted to perform with more than 1 team per institution. Performing with a second team will lead to immediate disqualification of both teams.",
      "Dialogues, Voiceovers and Narrations ARE encouraged.",
      "Props are encouraged; No fire, No powder, No water/water based solutions, No flowers, No sharp objects/props that may cause other participants harm.",
      "Explicit language/Vulgar gestures/Offensive misconduct/Inappropriate dress code are strictly prohibited.",
      "All dance styles and forms (western and Indian) are encouraged.",
      "All genres of music are encouraged. (western contemporary, Indian folk, Indian classical, Bollywood, hip-hop, etc.)",
      "Classical Bols and Jathis are encouraged.",
      "Team Number Limit: 7-15.",
      "Time Limit: 7 + 2 minutes. (Entry to Exit Stage, Including setup)",
      "Exceeding the time limit will result in point reduction."
    ],
    "faqs": [],
    "prizePool": "22k",
    "date": "15 Sept 2026",
    "fee": "₹750 per team",
    "teamSize": "7-12 members",
    "format": "Team",
    "image": "/images/events/theme-dance.webp",
    "registrationLink": "https://forms.gle/WXcmyEkzchRZLxms5",
    "coordinators": [
      {
        "name": "Shashwat Buragohain",
        "phone": "7099062182",
        "email": "shashwat.buragohain@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Kavya Lakshmy",
        "phone": "8281289659",
        "email": "kavya.lakshmy@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Jopaul",
        "phone": "8138011592",
        "email": "jopaul.mathew@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "non-theme-dance",
    "title": "Non Theme Dance",
    "tagline": "Shape the Wave.",
    "category": "Cultural",
    "department": "Culturals",
    "overview": "A burst of rhythm, color, and creativity! Non-Theme Group Dance lets performers showcase diverse styles and moves without the limits of a set theme. It's all about energy, expression, and setting the stage on fire with pure dance passion!",
    "stages": [],
    "rules": [
      "Students are not permitted to perform in more than 1 team per institution. Performing with a second team will lead to immediate disqualification of both teams.",
      "Dialogues, Voiceovers and Narrations ARE NOT permitted.",
      "Props are encouraged; No fire, No powder, No water/water based solutions, No flowers, No sharp objects/props that may cause other participants harm.",
      "Explicit language/Vulgar gestures/Offensive misconduct/Inappropriate dress code are strictly prohibited.",
      "All dance styles and forms (western and Indian) are encouraged.",
      "All genres of music are encouraged. (western contemporary, Indian folk, Indian classical, Bollywood, hip-hop, etc.)",
      "Team Number Limit: 7-15.",
      "Time Limit: 6 + 1 minutes on stage."
    ],
    "faqs": [],
    "prizePool": "22k",
    "date": "15 Sept 2026",
    "fee": "₹750",
    "teamSize": "6-15 members",
    "format": "Team",
    "image": "/images/events/non-theme-dance.webp",
    "registrationLink": "https://forms.gle/fqt9MKF6mRjpHrbc8",
    "coordinators": [
      {
        "name": "Gokul Saikrishnan",
        "phone": "9884321622",
        "email": "gokul.saikrishnan@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Jessica John Osta",
        "phone": "9674172230",
        "email": "jessica.john@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Jyothi Mandala",
        "phone": "9985108923",
        "email": "jyothi.mandala@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "street-dance-battle",
    "title": "Street Dance Battle",
    "tagline": "Shape the Wave.",
    "category": "Cultural",
    "department": "Culturals",
    "overview": "The sound of the beat brought to life! Street Dance Battle blends raw talent with spontaneous skill, challenging individual dancers in high-stakes duels. It's dance in its most raw and competitive form, unfiltered, improvised, and full of fire!",
    "stages": [
      {
        "title": "Event Structure",
        "desc": "3 rounds."
      }
    ],
    "rules": [
      "Multiple entries are allowed.",
      "Time limit: 45 seconds per round.",
      "Track and song will be provided on spot.",
      "The judge's decision will be final.",
      "Vulgarity in costumes is strictly prohibited.",
      "Any form of vulgarity will lead to immediate disqualification.",
      "Uniqueness & originality should be there."
    ],
    "faqs": [],
    "prizePool": "15k",
    "date": "16 Sept 2026",
    "fee": "₹300",
    "teamSize": "Solo",
    "format": "Solo",
    "image": "/images/events/street-dance.webp",
    "registrationLink": "https://forms.gle/bRUzwjUyfZD8AhYMA",
    "coordinators": [
      {
        "name": "Sreeshma",
        "phone": "6363403151",
        "email": "sreeshma.b@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Disha Jaiswal",
        "phone": "9717791775",
        "email": "disha.jaiswal@psyh.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Dr. Santhrupth B C",
        "phone": "9591866572",
        "email": "santhrupth.bc@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  },
  {
    "slug": "street-play",
    "title": "Street Play",
    "tagline": "Shape the Wave.",
    "category": "Cultural",
    "department": "Culturals",
    "overview": "The voice of the streets brought to life! Street Play blends powerful performances with social messages, engaging the audience through drama, dialogue, and emotion. It's theatre in its most raw and impactful form — thought-provoking and full of life!",
    "stages": [],
    "rules": [
      "Students are not permitted to perform in more than 1 team per institution. Performing with a second team will lead to immediate disqualification of both teams.",
      "Time Limit: 10 - 20 Minutes.",
      "Team Number Limit: 25 members maximum.",
      "Exceeding time limit will lead to reduction of marks (-1 mark per every additional minute).",
      "No Government related slogans or political agendas/religious agendas, political parties or individual attacks will be tolerated.",
      "Usage of loud-speakers or electronic instruments is discouraged.",
      "Explicit language/Gestures/Costumes or writings will lead to immediate disqualification."
    ],
    "faqs": [],
    "prizePool": "22k",
    "date": "16 Sept 2026",
    "fee": "₹750",
    "teamSize": "Maximum 20 members",
    "format": "Team",
    "image": "/images/events/street-play.webp",
    "registrationLink": "https://forms.gle/UUsv3MNZUJekGiN27",
    "coordinators": [
      {
        "name": "Amruth Bhaskar",
        "phone": "8590922885",
        "email": "Amruth.bhaskar@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Blessing Roshan",
        "phone": "7810008415",
        "email": "blessing.roshan@btech.christuniversity.in",
        "role": "Student POC"
      },
      {
        "name": "Prof. Vipin Wilson",
        "phone": "9048071659",
        "email": "vipin.wilson@christuniversity.in",
        "role": "Faculty POC"
      }
    ]
  }
];

export const EVENTS_DATA = RAW_EVENTS_DATA.sort((a, b) => a.title.localeCompare(b.title));
