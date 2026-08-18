export const EVENTS_DATA = [
  {
    slug: "utopian-land",
    title: "Utopian Land",
    tagline: "Cities Beyond Imagination",
    category: "Design",
    department: "School of Architecture",
    overview:
      "Utopian land is an open digital art and concept design competition challenging artists to visually construct a non-existent city. Participants are invited to explore alternate realities, speculative futures, extreme environmental conditions, technological shifts, or fictional societies, translating complex urban imagination into compelling digital artwork. The core focus is on spatial storytelling, atmospheric visual design, and world-building through digital media.",
    stages: [
      {
        title: "Stage 1: Digital Concept Submission",
        desc: "Participants submit high-resolution digital concept artwork depicting their imagined metropolis alongside a short lore description.",
      },
      {
        title: "Stage 2: Final Showcase & Jury Presentation",
        desc: "Finalists present their world-building process, technical rendering breakdown, and design choices to the judging panel.",
      },
    ],
    rules: [
      "Entries must be original digital illustrations, concept art, or 3D renders created by the participant(s).",
      "Submissions must include concept description, lore, or architectural backstory supporting the city design.",
      "Evaluation parameters include visual aesthetics, conceptual depth, imagination, and technical execution.",
    ],
    faqs: [
      {
        q: "Can AI-generated art be submitted?",
        a: "No, all artwork must be originally created using digital painting, 3D modelling, or mixed digital workflows.",
      },
      {
        q: "What formats are accepted for submission?",
        a: "High-resolution PNG or JPG along with a project breakdown PDF.",
      },
    ],
    prizePool: "₹10,000",
    date: "15 Sept 2026",
    fee: "₹200",
    teamSize: "1-2 Members",
    format: "Digital Art & Concept World-Building",
    coordinator: { name: "Digital Arts Desk", email: "digitalart.events@christuniversity.in" },
    image: "images/events/utopian-land.png",
  },
  {
    slug: "cipher-quest",
    title: "Cipher Quest",
    tagline: "Crack the Uncrackable",
    category: "Cybersecurity",
    department: "Computer Science & Engineering (CSE)",
    overview:
      "Step into the shoes of a cryptographic investigator in a high-stakes puzzle marathon. Teams analyze complex encrypted payloads, decipher legacy and modern cryptosystems (Caesar, Vigenère, RSA, Affine, and Hash Cracking), and race against the clock to recover hidden access keys.",
    stages: [
      {
        title: "Stage 1: Rapid Cryptanalysis",
        desc: "Speed round solving classic ciphers and logical riddle fragments to unlock the elimination gate.",
      },
      {
        title: "Stage 2: Live CTF Key Capture",
        desc: "Live terminal challenge exploiting real-world steganography, hashing collisions, and payload decoders.",
      },
    ],
    rules: [
      "No automated external cracking clouds or unauthorized network exploitation.",
      "All challenges must be solved strictly within the sandboxed environment.",
      "Scoring is weighted by speed, accuracy, and key validation timestamps.",
    ],
    faqs: [
      {
        q: "Do we need prior experience with Kali Linux?",
        a: "Basic knowledge of CLI tools and cryptanalysis principles is recommended but accessible hints are provided in Round 1.",
      },
    ],
    prizePool: "₹12,000",
    date: "15 Sept 2026",
    fee: "₹250",
    teamSize: "2-3 Members",
    format: "CTF & Cryptanalysis Relay",
    coordinator: { name: "CyberSec Club", email: "cse.events@christuniversity.in" },
    image: "images/events/cipher-quest.png",
  },
  {
    slug: "rc-robo-soccer",
    title: "RC Robo Soccer",
    tagline: "Engineering Meets Tactical Agility",
    category: "Robotics",
    department: "Mechanical Engineering",
    overview:
      "Experience high-octane engineering warfare on the mini-pitch! Custom-built remote-controlled and autonomous rovers clash in a tactical soccer tournament requiring precision drivetrain engineering, dynamic wireless control, and aggressive teamwork.",
    stages: [
      {
        title: "Stage 1: Inspection & Group Qualifiers",
        desc: "Rigorous chassis dimension, weight, and radio frequency clearance followed by round-robin matches.",
      },
      {
        title: "Stage 2: Championship Knockouts",
        desc: "Fast-paced elimination tournament with sudden-death golden goal overtimes.",
      },
    ],
    rules: [
      "Robot dimensions must not exceed 30cm x 30cm x 30cm and 3.5kg total weight.",
      "Voltage must be limited to 12V DC onboard battery systems.",
      "Destructive weapons or deliberate chassis impaling will result in immediate disqualification.",
    ],
    faqs: [
      {
        q: "Is wireless Bluetooth/Wi-Fi control permitted?",
        a: "Yes, 2.4GHz RF, Bluetooth, and custom micro-controller remotes are permitted.",
      },
    ],
    prizePool: "₹15,000",
    date: "16 Sept 2026",
    fee: "₹350",
    teamSize: "2-4 Members",
    format: "Arena Knockout Tournament",
    coordinator: { name: "Robotics Core Desk", email: "robotics.mech@christuniversity.in" },
    image: "images/events/robosoccer.jpg",
  },
  {
    slug: "battle-of-the-bands",
    title: "Battle of the Bands",
    tagline: "Live Music Supremacy",
    category: "Music",
    department: "General Fest Events",
    overview:
      "The premier musical battleground of South India! College rock, metal, indie, and fusion bands take over the grand outdoor auditorium for an adrenaline-fueled showcase of original compositions, electrifying solos, and crowd-moving stage presence.",
    stages: [
      {
        title: "Stage 1: Sound Check & Semifinal Set",
        desc: "15-minute live performance including one original track and one cover.",
      },
      {
        title: "Stage 2: Grand Finals on Main Stage",
        desc: "25-minute headline performance evaluated on composition, vocal range, tightness, and audience impact.",
      },
    ],
    rules: [
      "Bands must consist of 3 to 8 members with at least one vocal and two live instruments.",
      "Standard 5-piece drum kit and amplifiers are provided; personal guitars/processors must be brought by teams.",
      "Obscene or offensive lyrics are strictly prohibited.",
    ],
    faqs: [
      {
        q: "Can we use backing tracks?",
        a: "No pre-recorded synth or backing tracks; all sounds must be triggered or played live on stage.",
      },
    ],
    prizePool: "₹25,000",
    date: "16 Sept 2026",
    fee: "₹600",
    teamSize: "3-8 Members",
    format: "Live Concert Stage Battle",
    coordinator: { name: "Cultural Music Committee", email: "music.magnovite@christuniversity.in" },
    image: "images/events/battleofbands.jpg",
  },
  {
    slug: "best-manager",
    title: "Best Manager",
    tagline: "Survive the Executive Gauntlet",
    category: "Management",
    department: "BBA",
    overview:
      "A 360-degree leadership simulation spanning two intensive days. Candidates are pushed to their intellectual and emotional limits through surprise crisis management boardrooms, stress interviews, financial portfolio restructuring, and public press conferences.",
    stages: [
      {
        title: "Stage 1: Psychometric & Strategic Analysis",
        desc: "Case-based crisis simulation under strict time limits followed by peer negotiations.",
      },
      {
        title: "Stage 2: The Hot Seat — Grand Jury Interview",
        desc: "High-intensity stress defense before senior corporate CXOs and industry veterans.",
      },
    ],
    rules: [
      "Individual participation only.",
      "Formal corporate attire is mandatory for all stages.",
      "Evaluation covers business acumen, resilience, ethical judgment, and communication mastery.",
    ],
    faqs: [
      {
        q: "Is this event open to all streams?",
        a: "Yes, students from engineering, commerce, arts, and management are welcome to register.",
      },
    ],
    prizePool: "₹15,000",
    date: "15-16 Sept 2026",
    fee: "₹300",
    teamSize: "1 Member",
    format: "Multi-Round Executive Challenge",
    coordinator: { name: "BBA Leadership Desk", email: "bba.events@christuniversity.in" },
    image: "images/events/bestmanager.avif",
  },
  {
    slug: "drone-maze-challenge",
    title: "Drone Maze Challenge",
    tagline: "FPV Precision in Flight",
    category: "Robotics",
    department: "Mechanical Engineering",
    overview:
      "Pilot micro and mini drones through a multi-dimensional indoor tunnel maze equipped with laser tripwires, rotating hoops, and tight altitude corridors in a race against the stopwatch.",
    stages: [
      {
        title: "Stage 1: Time Trial Course",
        desc: "Single lap run navigating basic gates to set qualifying pole positions.",
      },
      {
        title: "Stage 2: Obstacle Championship",
        desc: "Multi-lap advanced labyrinth with dynamic rotating obstacles and blind corners.",
      },
    ],
    rules: [
      "Drone diagonal wheelbase must not exceed 250mm.",
      "Propeller guards are mandatory for indoor safety compliance.",
      "Pilots must use 5.8GHz analog or approved digital video feeds.",
    ],
    faqs: [
      {
        q: "Can we use GPS assisted flight modes?",
        a: "No, drones must fly in manual/acro or self-leveling altitude mode only.",
      },
    ],
    prizePool: "₹14,000",
    date: "15 Sept 2026",
    fee: "₹300",
    teamSize: "1-2 Members",
    format: "FPV Aerial Time Trial",
    coordinator: { name: "Aero & Drone Lab", email: "drone.events@christuniversity.in" },
    image: "images/events/drone.jpg",
  },
  {
    slug: "street-dance-battle",
    title: "Street Dance Battle",
    tagline: "Own the Cypher",
    category: "Dance",
    department: "General Fest Events",
    overview:
      "Raw energy, breaking, popping, locking, and krumping in an authentic underground cypher format. Dancers face off 1v1 and 2v2 to live DJ drops judged by leading street dancers.",
    stages: [
      {
        title: "Stage 1: Open Cypher Selection",
        desc: "45-second solo showcase per dancer to determine the Top 16 bracket.",
      },
      {
        title: "Stage 2: 1v1 Knockout Battles",
        desc: "Direct call-out battle with 2 rounds per face-off up to the grand finals.",
      },
    ],
    rules: [
      "DJ selects music randomly; no pre-arranged choreography playback.",
      "Physical contact or unsportsmanlike conduct results in disqualification.",
      "Judged on musicality, technique, originality, and battle attitude.",
    ],
    faqs: [
      {
        q: "Can we register on the spot?",
        a: "Online pre-registration is recommended to guarantee cypher slots, but limited spot entries open if slots remain.",
      },
    ],
    prizePool: "₹12,000",
    date: "15 Sept 2026",
    fee: "₹200",
    teamSize: "1-2 Members",
    format: "Live DJ Cypher & 1v1 Battles",
    coordinator: { name: "Dance Society", email: "dance.magnovite@christuniversity.in" },
    image: "images/events/streetdancebattle.JPG",
  },
  {
    slug: "bitforge",
    title: "BitForge",
    tagline: "Code, Circuit, and Logic",
    category: "Electronics",
    department: "Electronics and Communication Engineering (ECE)",
    overview:
      "A hardware-software synthesis sprint testing embedded C, Verilog HDL, and microcontroller circuit troubleshooting under intense countdown conditions.",
    stages: [
      {
        title: "Stage 1: Logic Fault Debugging",
        desc: "Diagnose broken digital circuits and debug timing glitches on live FPGA testbenches.",
      },
      {
        title: "Stage 2: IoT System Prototyping",
        desc: "Build an end-to-end sensor acquisition system communicating with cloud endpoints.",
      },
    ],
    rules: [
      "Components and development boards will be provided at the venue.",
      "Datasheets and offline IDEs are permitted; internet access is restricted during Stage 1.",
      "Code must be modular and documented.",
    ],
    faqs: [{ q: "Which microcontrollers are used?", a: "ESP32 and STM32 Cortex platforms." }],
    prizePool: "₹12,000",
    date: "16 Sept 2026",
    fee: "₹250",
    teamSize: "2-3 Members",
    format: "Hardware Hackathon",
    coordinator: { name: "ECE Association", email: "ece.events@christuniversity.in" },
    image: "images/events/bitforge.png",
  },
  {
    slug: "spark-tank",
    title: "Spark Tank",
    tagline: "Pitch to Venture Mentors",
    category: "Entrepreneurship",
    department: "General Fest Events",
    overview:
      "The premier startup pitch arena where early-stage founders present innovative hardware, software, and social business models before venture capitalists and angel investors.",
    stages: [
      {
        title: "Stage 1: Pitch Deck Screening",
        desc: "5-minute pitch accompanied by business model canvas and traction metrics.",
      },
      {
        title: "Stage 2: Shark Q&A & Term Sheet Negotiation",
        desc: "Deep-dive inquiry into unit economics, CAC/LTV, defensibility, and market sizing.",
      },
    ],
    rules: [
      "Startups must be early-stage (bootstrapped or seed funded < ₹25L).",
      "Prototype or MVP demonstration is strongly encouraged and grants bonus evaluation points.",
      "Teams must present their own proprietary business concepts.",
    ],
    faqs: [
      {
        q: "Can we seek real funding from the judges?",
        a: "Yes, judges have venture syndicate capacity and select winners for direct incubation mentorship.",
      },
    ],
    prizePool: "₹20,000",
    date: "15 Sept 2026",
    fee: "₹400",
    teamSize: "1-4 Members",
    format: "Venture Pitch & Demo",
    coordinator: { name: "Innovation & Incubation Cell", email: "iiic.events@christuniversity.in" },
    image: "images/events/sparktank.jpg",
  },
  {
    slug: "strikex",
    title: "StrikeX",
    tagline: "E-Football Tournament",
    category: "Gaming",
    department: "Computer Science & Engineering (CSE)",
    overview:
      "High-intensity eFootball Mobile competition where tacticians and finger-athletes clash in standard and custom team fixtures to claim tournament glory.",
    stages: [
      {
        title: "Stage 1: Group League Rounds",
        desc: "Best of 1 match fixtures with standard competitive settings.",
      },
      {
        title: "Stage 2: Grand Finals & Knockouts",
        desc: "Best of 3 series streamed live in the esports gaming lounge.",
      },
    ],
    rules: [
      "Participants must use their own updated mobile device and stable game build.",
      "Network tampering or emulators will lead to immediate disqualification.",
      "Official tournament squad rating caps apply.",
    ],
    faqs: [
      {
        q: "Is controller support permitted?",
        a: "Touchscreen only unless both players mutually agree on verified controller usage.",
      },
    ],
    prizePool: "₹8,000",
    date: "15 Sept 2026",
    fee: "₹150",
    teamSize: "1 Member",
    format: "Mobile Esports Tournament",
    coordinator: { name: "Esports Guild", email: "gaming.cse@christuniversity.in" },
    image: "images/events/strikex.png",
  },
  {
    slug: "sustain-x",
    title: "Sustain X",
    tagline: "Tech for Global Sustainability",
    category: "Innovation",
    department: "Computer Science & Engineering (CSE)",
    overview:
      "Design and pitch software/hardware innovations directly addressing the UN Sustainable Development Goals (Clean Energy, Climate Action, Smart Cities, or Zero Hunger).",
    stages: [
      {
        title: "Stage 1: Abstract & System Architecture",
        desc: "Review of proposed technical solution and impact metrics.",
      },
      {
        title: "Stage 2: Live Prototype Demonstration",
        desc: "Functional system walkthrough and defense before environmental tech jury.",
      },
    ],
    rules: [
      "Projects must be original and clearly map to one or more UN SDGs.",
      "Working prototype (code repo / hardware rig) is required for Stage 2.",
      "Scoring emphasizes practical feasibility, scalability, and technical depth.",
    ],
    faqs: [
      {
        q: "Can we present interdisciplinary projects?",
        a: "Yes, hybrid hardware and software solutions are highly encouraged.",
      },
    ],
    prizePool: "₹15,000",
    date: "16 Sept 2026",
    fee: "₹250",
    teamSize: "2-4 Members",
    format: "Hackathon & Sustainability Pitch",
    coordinator: { name: "Green Tech Cell", email: "sustain.events@christuniversity.in" },
    image: "images/events/smartcity.jpg",
  },
  {
    slug: "prompt-arcade",
    title: "Prompt Arcade",
    tagline: "Generative AI Game Creation",
    category: "Coding",
    department: "Computer Science & Engineering (CSE)",
    overview:
      "Harness LLMs, generative diffusion, and web frameworks to build, style, and deploy a complete playable browser arcade game from scratch within 4 hours.",
    stages: [
      {
        title: "Stage 1: Prompt Crafting & Asset Gen",
        desc: "Generate game mechanics, sprite atlases, and soundtrack using AI toolchains.",
      },
      {
        title: "Stage 2: Live Code Deployment & Playtesting",
        desc: "Host on web and let judges playtest for gameplay feel, responsiveness, and prompt innovation.",
      },
    ],
    rules: [
      "Any open AI API or local model may be used.",
      "Game must run smoothly on standard web browsers.",
      "Prompt audit logs must be submitted alongside the final repository.",
    ],
    faqs: [
      { q: "What frameworks are supported?", a: "Phaser, Three.js, Canvas API, or React/HTML5." },
    ],
    prizePool: "₹12,000",
    date: "15 Sept 2026",
    fee: "₹200",
    teamSize: "1-2 Members",
    format: "AI Game Dev Sprint",
    coordinator: { name: "AI Club", email: "ai.events@christuniversity.in" },
    image: "images/events/coderelay.jpg",
  },
  {
    slug: "trace",
    title: "Trace",
    tagline: "Digital Forensics Investigation",
    category: "Cybersecurity",
    department: "Artificial Intelligence & Data Science (AIDS)",
    overview:
      "Unravel an orchestrated enterprise cyber espionage attack. Teams analyze memory dumps, disk images, network packet traces, and browser artifacts to construct the timeline of the breach.",
    stages: [
      {
        title: "Stage 1: Evidence Acquisition",
        desc: "Extract hidden indicators of compromise (IoCs) from PCAP and volatility memory captures.",
      },
      {
        title: "Stage 2: Incident Response Briefing",
        desc: "Submit an executive incident forensic report with attribution analysis.",
      },
    ],
    rules: [
      "Pre-installed forensic analysis VMs (Autopsy, Wireshark, Volatility) provided.",
      "Integrity of forensic image hashes must be maintained.",
      "Judged on detection accuracy, methodology, and report clarity.",
    ],
    faqs: [
      {
        q: "Is internet access available?",
        a: "Internal offline documentation mirrors are provided.",
      },
    ],
    prizePool: "₹12,000",
    date: "15 Sept 2026",
    fee: "₹250",
    teamSize: "2-3 Members",
    format: "Digital Forensics Challenge",
    coordinator: { name: "Data Forensics Guild", email: "aids.events@christuniversity.in" },
    image: "images/events/enigma.jpg",
  },
  {
    slug: "pixel-whisper",
    title: "Pixel Whisper",
    tagline: "AI Prompt Telepathy Relay",
    category: "Innovation",
    department: "Artificial Intelligence & Data Science (AIDS)",
    overview:
      "A non-verbal generative relay. Team Member A receives a visual prompt, crafts a single textual prompt, and Member B must reconstruct the target image through zero-shot generative loops.",
    stages: [
      {
        title: "Stage 1: Speed Prompting",
        desc: "Rapid 3-minute prompts matching geometric and stylistic criteria.",
      },
      {
        title: "Stage 2: Complex Composition Duel",
        desc: "Reconstruct hyper-detailed surreal scenes evaluated by CLIP semantic similarity.",
      },
    ],
    rules: [
      "Zero verbal or gestural communication between relay partners.",
      "Prompts must not contain explicit leaked keyword anagrams.",
      "Scoring uses automated image-embeddings cosine similarity.",
    ],
    faqs: [
      { q: "Which image generator is used?", a: "Stable Diffusion WebUI & Midjourney mirrors." },
    ],
    prizePool: "₹10,000",
    date: "16 Sept 2026",
    fee: "₹200",
    teamSize: "2 Members",
    format: "AI Generative Relay",
    coordinator: { name: "AIDS Association", email: "aids.events@christuniversity.in" },
    image: "images/events/pixel-whisper.png",
  },
  {
    slug: "gridlock",
    title: "Gridlock",
    tagline: "Power Grid Stability Simulation",
    category: "Electronics",
    department: "Electrical & Electronics Engineering (EEE)",
    overview:
      "Take the control desk of a regional transmission grid. Balance fluctuating renewable power inputs, manage sudden transmission line trips, and prevent total blackout.",
    stages: [
      {
        title: "Stage 1: Load Flow Optimization",
        desc: "MATLAB/Simulink or ETAP simulation resolving power balance constraints.",
      },
      {
        title: "Stage 2: Real-time Dynamic Stress Test",
        desc: "Live fault injection test with sub-second frequency regulation demands.",
      },
    ],
    rules: [
      "Simulations must adhere to IEEE 14-bus test system standards.",
      "Voltage variations beyond ±5% incur penalty points.",
      "Fastest restoration time with zero load-shedding wins.",
    ],
    faqs: [
      {
        q: "Is software provided?",
        a: "Yes, lab workstations come equipped with MATLAB, Simulink, and PSIM.",
      },
    ],
    prizePool: "₹12,000",
    date: "15 Sept 2026",
    fee: "₹250",
    teamSize: "2-3 Members",
    format: "Power System Simulation",
    coordinator: { name: "EEE Student Chapter", email: "eee.events@christuniversity.in" },
    image: "images/events/grid.jpg",
  },
  {
    slug: "how-i-met-your-killer",
    title: "How I Met Your Killer",
    tagline: "Psychological Murder Mystery",
    category: "Gaming",
    department: "Psychology",
    overview:
      "A thrilling live criminal psychology investigation. Teams analyze crime scene photography, decipher psychological profiles, cross-examine live character actors, and unmask the culprit.",
    stages: [
      {
        title: "Stage 1: Autopsy & Scene Forensics",
        desc: "Decode physical evidence, toxicology hints, and timeline contradictions.",
      },
      {
        title: "Stage 2: Suspect Interrogation & Motive Reveal",
        desc: "Interrogate live suspects under psychological pressure to pinpoint the real killer.",
      },
    ],
    rules: [
      "Deduction must be supported by tangible evidence from the case file.",
      "Interrogation slots are strictly timed at 6 minutes per suspect.",
      "No physical intimidation of actors.",
    ],
    faqs: [
      {
        q: "Do we need prior psychology training?",
        a: "No, sharp logic, attentiveness to detail, and deductive reasoning are all you need!",
      },
    ],
    prizePool: "₹12,000",
    date: "15-16 Sept 2026",
    fee: "₹300",
    teamSize: "3-4 Members",
    format: "Live Crime Scene Simulation",
    coordinator: { name: "Psychology Association", email: "psychology.events@christuniversity.in" },
    image: "images/events/howimeturkiller.jpg",
  },
  {
    slug: "startup-showdown",
    title: "Startup Showdown",
    tagline: "Build a Unicorn Under Pressure",
    category: "Entrepreneurship",
    department: "MBA",
    overview:
      "A rapid-fire corporate entrepreneurship sprint. Teams draw disruptive technology wildcard constraints and build a venture strategy, marketing GTM, and financial forecast before pitching to Angel Investors.",
    stages: [
      {
        title: "Stage 1: Business Model Sprint",
        desc: "Formulate business canvas, address surprise market regulation changes, and optimize unit economics.",
      },
      {
        title: "Stage 2: Boardroom Pitch & Due Diligence",
        desc: "10-minute pitch to a panel of venture capitalist judges followed by aggressive valuation defense.",
      },
    ],
    rules: [
      "All decks must be prepared on-site within the 3-hour formulation window.",
      "Market financial assumptions must be substantiated with credible industry benchmarks.",
      "Evaluation covers feasibility, profitability, and presentation dynamism.",
    ],
    faqs: [
      {
        q: "Can undergraduate teams participate?",
        a: "Yes, the arena is open to both UG and PG scholars.",
      },
    ],
    prizePool: "₹18,000",
    date: "16 Sept 2026",
    fee: "₹350",
    teamSize: "2-4 Members",
    format: "Entrepreneurship Simulation",
    coordinator: { name: "MBA Corporate Desk", email: "mba.events@christuniversity.in" },
    image: "images/events/startup-showdown.png",
  },
];
