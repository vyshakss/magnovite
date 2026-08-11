import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Gamepad2,
  Music4,
  Play,
  Star,
  IndianRupee,
} from "lucide-react";
import { CosmicScene } from "@/components/cosmic/CosmicScene";
import { SiteHeader } from "@/components/SiteHeader";
import { Countdown } from "@/components/Countdown";
import butterfly from "@/assets/butterfly.png.asset.json";
import shaan from "@/assets/shaan.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAGNOVITE 2026 — A Cinematic Cosmic Unveiling" },
      {
        name: "description",
        content:
          "MAGNOVITE 2026, the 16th edition flagship fest of CHRIST (Deemed to be University), Kengeri Campus. 34+ national battlegrounds, ₹3L+ prizes and a live concert by Shaan Rahman.",
      },
      { property: "og:title", content: "MAGNOVITE 2026 — A Cinematic Cosmic Unveiling" },
      {
        property: "og:description",
        content:
          "A star explodes, the butterflies rise, the dust becomes a universe. Explore 34+ events, ₹3L+ prizes and the Shaan Rahman main stage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  {
    icon: Code2,
    title: "Coding & AI",
    items: "Code Relay · Reverse Coding · CTF Enigma · AI Sprints",
  },
  {
    icon: Cpu,
    title: "Robotics & Tech",
    items: "Robo Soccer · Drone Obstacle · RC Racing · Byte & Board",
  },
  {
    icon: IndianRupee,
    title: "Management & Pitch",
    items: "Best Manager · Spark Tank · Finance Pitch · Case Craft",
  },
  {
    icon: Music4,
    title: "Music & Vocal",
    items: "Battle of the Bands · Acapella Showdown · Live Rhythms",
  },
  {
    icon: Star,
    title: "Dance & Theater",
    items: "Street Dance Battle · Theme Dance · Nukkad Natak Play",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Design",
    items: "Argo Royale · Escape Room · CAD Design · Short Film",
  },
];

function Index() {
  return (
    <div id="top" className="relative bg-black">
      <CosmicScene />

      {/* explosion flash + settling brightness */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-20 bg-white"
        style={{ opacity: "calc(var(--flash) * 0.85)" }}
      />

      <SiteHeader />

      {/* ---------- SECTION 1 + 2: cinematic opening ---------- */}
      <section
        data-cinematic-scroll
        className="relative z-10 h-[380vh]"
        aria-label="Magnovite 2026 cinematic opening"
      >
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
          {/* wordmark revealed at the peak of the first explosion */}
          <div
            aria-hidden={false}
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center"
            style={{
              opacity: "var(--reveal)",
              transform: "scale(calc(0.96 + var(--reveal) * 0.04))",
            }}
          >
            <img src={butterfly.url} alt="" className="mb-6 h-16 w-auto sm:h-24" />
            <h1 className="font-display text-[13vw] leading-[0.85] font-semibold tracking-[0.06em] sm:text-[9vw]">
              MAGNOVITE
            </h1>
            <p className="mt-4 text-[0.9rem] tracking-[1.1em] text-white/70 sm:text-lg">
              2026
            </p>
          </div>

          {/* countdown appears as the dust settles */}
          <div className="cine-content flex flex-col items-center gap-8">
            <p className="eyebrow">Countdown to Magnovite</p>
            <Countdown />
            <a
              href="#events"
              className="glass-pill pointer-events-auto inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium"
            >
              Explore Events <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- SECTION 3: introduction ---------- */}
      <section id="about" className="relative z-10 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="glass-panel p-7 sm:p-12">
            <p className="eyebrow">The 16th Edition</p>
            <p className="mt-6 text-xl leading-relaxed text-white/85 sm:text-[1.6rem] sm:leading-[1.55]">
              MAGNOVITE is the annual flagship fest of CHRIST (Deemed To Be University),
              Kengeri Campus — an enigmatic nexus of creativity and collaboration,
              bringing healthy competition and positive connections. Sixteen editions in,
              its unfading charm returns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["16th Edition", "Kengeri Campus", "34+ Events"].map((t) => (
                <span key={t} className="glass-pill px-5 py-2.5 text-xs tracking-wide">
                  {t}
                </span>
              ))}
            </div>

            <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/60">
              <div className="absolute inset-0 grid place-items-center">
                <button
                  aria-label="Play the Magnovite 2026 teaser"
                  className="grid size-16 place-items-center rounded-full bg-white/90 text-black transition-transform hover:scale-105"
                >
                  <Play className="size-6 translate-x-[1px]" />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-xs tracking-[0.28em] text-white/50 uppercase">
                Magnovite 2026 · Teaser
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SECTION 4: main stage ---------- */}
      <section id="mainstage" className="relative z-10 px-5 py-24 sm:px-8">
        <div className="glass-panel mx-auto grid max-w-6xl gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={shaan.url}
              alt="Music composer and singer Shaan Rahman performing live"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="glass-pill absolute top-4 left-4 px-4 py-2 text-[0.65rem] tracking-[0.22em] uppercase">
              Live Concert · Sep 16
            </span>
          </div>

          <div>
            <p className="eyebrow">Main Stage Showcase</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Welcoming Shaan Rahman to Magnovite 2026
            </h2>
            <div className="mt-6 space-y-5 text-[0.98rem] leading-relaxed text-white/75">
              <p>
                Get ready to experience the magic of one of the most celebrated music
                composers and singers in the industry today! Shaan Rahman is the creative
                force behind some of South India's biggest hits, known for effortlessly
                blending massive dance tracks with deep, soulful melodies.
              </p>
              <p>
                He has quite literally shaped the soundtrack of a generation — from the
                timeless romance of <em>Thattathin Marayathu</em> and{" "}
                <em>Jacobinte Swargarajyam</em> to the high-energy beats of <em>Godha</em>.
                Whether you are getting hyped to global dance anthem{" "}
                <strong className="text-white">"Jimikki Kammal"</strong> or singing your
                heart out to <strong className="text-white">"Aaro Nenjil"</strong> and{" "}
                <strong className="text-white">"Manikya Malaraya Poovi"</strong>, his
                versatile discography has something for every single mood.
              </p>
              <p>
                His infectious energy and incredible vocal talent make his live shows an
                absolute must-see. Bring your friends, warm up those vocal cords, and get
                ready to groove to his chart-topping hits live on the main stage!
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="glass-pill px-5 py-2.5 text-xs">Live Performance</span>
              <span className="glass-pill px-5 py-2.5 text-xs">Main Stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SECTION 5: events ---------- */}
      <section id="events" className="relative z-10 px-5 py-24 sm:px-8">
        <div className="glass-panel mx-auto max-w-6xl p-6 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-accent">Flagship Competitions &amp; Challenges</p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                34+ National Battlegrounds
              </h2>
            </div>
            <div className="flex gap-3">
              {[
                ["34+", "Events"],
                ["₹3L+", "Prizes"],
              ].map(([v, l]) => (
                <div key={l} className="glass-pill px-6 py-3 text-center">
                  <div className="font-display text-xl font-semibold">{v}</div>
                  <div className="text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/8 bg-white/[0.025] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
              >
                <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {items}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/8 pt-8">
            <p className="max-w-md text-sm text-muted-foreground">
              Technical, Cultural &amp; Management flagship events hosted across CHRIST
              University Kengeri Campus.
            </p>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Explore All 34+ Events <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- SECTION 6: gallery ---------- */}
      <section id="gallery" className="relative z-10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Fragments from sixteen editions
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Main stage, 2025",
              "Robowars arena",
              "Street dance battle",
              "Night concert",
              "Campus lights",
              "Closing ceremony",
            ].map((caption, i) => (
              <div
                key={caption}
                className="glass-panel flex aspect-[4/3] flex-col justify-end p-5"
                style={{ opacity: 0.92 - (i % 3) * 0.06 }}
              >
                <span className="text-xs tracking-[0.22em] text-white/60 uppercase">
                  {caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- closing ---------- */}
      <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <img src={butterfly.url} alt="" className="h-10 w-auto opacity-70" />
        <h2 className="mt-8 max-w-3xl text-4xl leading-tight font-semibold sm:text-6xl">
          We're excited to see you there.
        </h2>
        <p className="mt-5 text-sm tracking-[0.28em] text-muted-foreground uppercase">
          CHRIST University · Kengeri Campus
        </p>
      </section>

      <footer className="relative z-10 border-t border-white/8 px-6 py-10 text-center text-xs tracking-[0.2em] text-white/35 uppercase">
        Magnovite 2026 · 16th Edition
      </footer>
    </div>
  );
}
