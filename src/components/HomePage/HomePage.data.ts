import { ArrowUpRight, Code2, Cpu, Gamepad2, Music4, Play, Star, IndianRupee } from "lucide-react";

export const META = {
  title: "MAGNOVITE 2026 — A Cinematic Cosmic Unveiling",
  description:
    "MAGNOVITE 2026, the 16th edition flagship fest of CHRIST (Deemed to be University), Kengeri Campus. 50 national battlegrounds, ₹11L prizes and a live concert by Shaan Rahman.",
  ogDescription:
    "A star explodes, the butterflies rise, the dust becomes a universe. Explore 50 events, ₹11L prizes and the Shaan Rahman main stage.",
};

export const HERO = {
  butterflyUrl: "/logos/magnovite-butterfly.png",
  revealHeading: "MAGNOVITE",
  revealSub: "2026",
};

export const CATEGORIES = [
  {
    icon: Code2,
    title: "Coding & AI",
    items: "Code Relay · Reverse Coding · CTF Enigma · AI Sprints",
    targetCategory: "Coding & Tech",
  },
  {
    icon: Cpu,
    title: "Robotics & Tech",
    items: "Robo Soccer · Drone Obstacle · RC Racing · Byte & Board",
    targetCategory: "Engineering",
  },
  {
    icon: IndianRupee,
    title: "Management & Pitch",
    items: "Best Manager · Spark Tank · Finance Pitch · Case Craft",
    targetCategory: "Management",
  },
  {
    icon: Music4,
    title: "Music & Vocal",
    items: "Battle of the Bands · Acapella Showdown · Live Rhythms",
    targetCategory: "Cultural",
  },
  {
    icon: Star,
    title: "Dance & Theater",
    items: "Street Dance Battle · Theme Dance · Nukkad Natak Play",
    targetCategory: "Cultural",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Design",
    items: "Argo Royale · Escape Room · CAD Design · Short Film",
    targetCategory: "Design",
  },
];

export const STATS: [string, string][] = [
  ["50", "Events"],
  ["₹11L", "Prizes"],
];

export const GALLERY = [
  {
    image: "/images/Gallery/DJnight.jpg",
    caption: "Night concert",
  },
  {
    image: "/images/Gallery/deadman.jpg",
    caption: "Main stage, 2025",
  },
  {
    image: "/images/Gallery/StreetDance.jpg",
    caption: "Street dance battle",
  },
  {
    image: "/images/Gallery/masalacoffeepremass.jpg",
    caption: "Live performance",
  },
  {
    image: "/images/Gallery/brightcoffee.jpg",
    caption: "MasalaCoffee",
  },
  {
    image: "/images/Gallery/FashionShow.jpg",
    caption: "Fashion showcase",
  },
];

export const FOOTER_COPY = "Magnovite 2026 · 16th Edition";

export const SHAAN = {
  url: "/images/shaan-new-poster.webp",
  alt: "Music composer and singer Shaan Rahman performing live",
};
