import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  Sparkles,
  Play,
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  ArrowUpRight,
  GraduationCap,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Leadership — MAGNOVITE 2026" },
      {
        name: "description",
        content:
          "Discover the legacy of Magnovite, CHRIST University Kengeri Campus, and meet the organizing faculty and student coordinators.",
      },
    ],
  }),
  component: AboutPage,
});

export function AboutPage() {
  const [isPlayingPromo, setIsPlayingPromo] = useState(false);
  const legacyCardRef = useRef<HTMLDivElement>(null);
  const [watermarkOffset, setWatermarkOffset] = useState({ x: 0, y: 0 });

  const handleLegacyMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!legacyCardRef.current) return;
    const rect = legacyCardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setWatermarkOffset({ x: px * 16, y: py * 16 });
  };

  const handleLegacyMouseLeave = () => {
    setWatermarkOffset({ x: 0, y: 0 });
  };

  const faculty = [
    {
      name: "Dr. Sarath Chandra K.",
      role: "Faculty Incharge",
      initials: "SK",
      dept: "Engineering Leadership",
    },
    {
      name: "Dr. Jincy Cherian",
      role: "Faculty Incharge",
      initials: "JC",
      dept: "Academic Coordinator",
    },
    {
      name: "Dr. Anil Melwyn Rego",
      role: "Faculty Incharge",
      initials: "AR",
      dept: "Faculty Convener",
    },
  ];

  const studentCoordinators = [
    {
      name: "Adisankar KB",
      role: "Student Coordinator",
      initials: "AS",
      dept: "Overall Management & Operations",
    },
    {
      name: "Bettina Sony",
      role: "Student Coordinator",
      initials: "BS",
      dept: "Events & Public Relations",
    },
  ];

  return (
    <div className="min-h-screen bg-[#06080e] text-white selection:bg-indigo-500/30">
      <SiteHeader isFixed />

      {/* Atmospheric Background Ambient Glows — radial gradients instead of blur filters for performance */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ willChange: 'transform' }}>
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[800px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(79,70,229,0.15) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)', transform: 'translateX(-50%) translate3d(0,0,0)' }}
        />
        <div
          className="absolute top-1/3 -right-40 h-[400px] w-[500px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.10) 0%, transparent 65%)', transform: 'translate3d(0,0,0)' }}
        />
        <div
          className="absolute bottom-10 -left-40 h-[400px] w-[500px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.10) 0%, transparent 65%)', transform: 'translate3d(0,0,0)' }}
        />
      </div>

      <div className="relative z-10 pt-28 pb-24">
        {/* About Hero Section */}
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-300 uppercase">
            <Sparkles className="size-3.5" /> CHRIST (Deemed to be University)
          </div>
          <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Magnovite
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Sixteen editions. Thousands of national competitors. One unforgettable technical &amp;
            cultural festival at the serene Kengeri Campus.
          </p>

          {/* Stats Strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              ["15,000+", "Footfall"],
              ["50+", "Events"],
              ["120+", "Colleges"],
              ["₹5L+", "Prize Pool"],
            ].map(([val, label]) => (
              <div key={label} className="glass-pill px-6 py-3 text-center">
                <div className="font-display text-xl font-bold text-white">{val}</div>
                <div className="text-[0.6rem] font-semibold tracking-widest text-indigo-300 uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & Legacy Card */}
        <div className="mx-auto mt-16 max-w-5xl px-5 sm:px-8">
          <div
            ref={legacyCardRef}
            onMouseMove={handleLegacyMouseMove}
            onMouseLeave={handleLegacyMouseLeave}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f]/90 p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-14"
          >
            {/* Interactive Cursor Tracking Watermark */}
            <div
              style={{
                transform: `translate(${watermarkOffset.x}px, ${watermarkOffset.y}px)`,
                transition: "transform 0.15s ease-out",
              }}
              className="pointer-events-none absolute -top-10 -right-10 h-96 w-96 opacity-15"
            >
              <img
                src="/logos/magnovite.png"
                alt=""
                className="h-full w-full object-contain filter brightness-200"
              />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase">
                16th Flagship Edition
              </span>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Legacy &amp; Confluence
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                Now in its 16th celebrated edition,{" "}
                <strong className="text-white">MAGNOVITE</strong> has evolved into a hallmark event
                for student innovation across India. It serves as an enigmatic nexus of creativity
                and collaboration, fostering healthy competition and lifelong connections.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                Spanning state-of-the-art engineering arenas, high-stakes startup boardrooms,
                contemporary design studios, and live amphitheaters, every moment is curated to
                challenge limits and inspire greatness.
              </p>
            </div>
          </div>
        </div>

        {/* Teaser Video Showcase */}
        <div className="mx-auto mt-16 max-w-5xl px-5 sm:px-8">
          <div className="glass-panel p-6 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow text-indigo-400">Official Festival Teaser</span>
                <h3 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Experience the Energy of 2026
                </h3>
              </div>
              <span className="glass-pill px-4 py-1.5 text-xs text-white/80">
                Kengeri Campus Promo
              </span>
            </div>

            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
              {isPlayingPromo ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/EGSUtEnfX9g?autoplay=1&rel=0"
                  title="Magnovite 2026 Official Promo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-none"
                />
              ) : (
                <div
                  className="group relative h-full w-full cursor-pointer"
                  onClick={() => setIsPlayingPromo(true)}
                >
                  <img
                    src="/images/thumbnail.jpg"
                    alt="Magnovite 2026 Promo Thumbnail"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
                  <div className="absolute inset-0 grid place-items-center">
                    <button
                      type="button"
                      aria-label="Play promo video"
                      className="grid size-20 place-items-center rounded-full bg-white text-black shadow-2xl transition-transform group-hover:scale-110"
                    >
                      <Play className="size-8 translate-x-0.5 fill-black" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Leadership & Organizing Team */}
        <div className="mx-auto mt-20 max-w-5xl px-5 sm:px-8">
          <div className="text-center">
            <span className="eyebrow text-indigo-400">Organizing Committee</span>
            <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-3 text-sm text-white/70">
              The dedicated faculty conveners and student coordinators steering MAGNOVITE '26.
            </p>
          </div>

          {/* Faculty Heads */}
          <div className="mt-12">
            <h3 className="font-display text-sm font-semibold tracking-wider text-indigo-300 uppercase">
              Faculty Incharges
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {faculty.map((f) => (
                <div
                  key={f.name}
                  className="glass-panel flex flex-col items-center p-6 text-center transition-all hover:border-indigo-500/30"
                >
                  <div className="grid size-14 place-items-center rounded-full border border-indigo-500/30 bg-indigo-600/20 font-display text-lg font-bold text-indigo-300">
                    {f.initials}
                  </div>
                  <h4 className="font-display mt-4 text-base font-bold text-white">{f.name}</h4>
                  <span className="mt-1 text-xs font-semibold text-indigo-400">{f.role}</span>
                  <p className="mt-2 text-xs text-white/60">{f.dept}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="mt-10">
            <h3 className="font-display text-sm font-semibold tracking-wider text-indigo-300 uppercase">
              Student Coordinators
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {studentCoordinators.map((s) => (
                <div
                  key={s.name}
                  className="glass-panel flex items-center gap-5 p-6 transition-all hover:border-indigo-500/30"
                >
                  <div className="grid size-14 shrink-0 place-items-center rounded-full border border-violet-500/30 bg-violet-600/20 font-display text-lg font-bold text-violet-300">
                    {s.initials}
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">{s.name}</h4>
                    <span className="text-xs font-semibold text-violet-400">{s.role}</span>
                    <p className="mt-1 text-xs text-white/60">{s.dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Instagram Feed */}
        <div className="mx-auto mt-20 max-w-4xl px-5 sm:px-8">
          <div className="glass-panel overflow-hidden p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-4">
              <div className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                <span className="font-display text-sm font-bold tracking-wider text-white uppercase">
                  Live From Campus
                </span>
              </div>
              <a
                href="https://www.instagram.com/magnovite.kengeri/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
              >
                <Instagram className="size-3.5" /> @magnovite.kengeri{" "}
                <ArrowUpRight className="size-3" />
              </a>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src="https://www.instagram.com/magnovite.kengeri/embed/"
                title="Live Instagram Feed"
                className="h-full w-full border-none"
              />
            </div>
          </div>
        </div>

        {/* Campus Location & Connect Card */}
        <div className="mx-auto mt-20 max-w-5xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="glass-panel flex flex-col justify-between p-8">
              <div>
                <span className="eyebrow text-indigo-400">Reach Out</span>
                <h3 className="font-display mt-2 text-2xl font-bold text-white">Get In Touch</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Have inquiries about event registrations, transport assistance, or university
                  partnerships?
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href="mailto:magnovite@christuniversity.in"
                    className="flex items-center gap-3 text-sm text-indigo-300 transition-colors hover:text-white"
                  >
                    <Mail className="size-4" /> magnovite@christuniversity.in
                  </a>
                  <div className="flex items-start gap-3 text-sm text-white/75">
                    <MapPin className="mt-1 size-4 shrink-0 text-indigo-400" />
                    <span>
                      CHRIST (Deemed to be University), Kengeri Campus, Kanmanike, Bengaluru,
                      Karnataka 560074.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3 border-t border-white/8 pt-6">
                <a
                  href="https://www.instagram.com/magnovite.kengeri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill grid size-10 place-items-center transition-colors hover:bg-white/10"
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/christ-university-faculty-of-engineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill grid size-10 place-items-center transition-colors hover:bg-white/10"
                >
                  <Linkedin className="size-4" />
                </a>
              </div>
            </div>

            {/* Embedded Dark Map */}
            <div className="glass-panel overflow-hidden p-0 min-h-[300px]">
              <iframe
                src="https://maps.google.com/maps?q=CHRIST+Deemed+to+be+University+Kengeri+Campus+Bengaluru&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)",
                }}
                allowFullScreen
                loading="lazy"
                title="CHRIST University Location Map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <footer className="relative z-10 border-t border-white/8 px-6 py-12 text-center text-xs tracking-[0.2em] text-white/40 uppercase">
        MAGNOVITE 2026 · CHRIST UNIVERSITY KENGERI CAMPUS
      </footer>
    </div>
  );
}
