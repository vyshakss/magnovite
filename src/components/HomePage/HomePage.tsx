import { lazy, Suspense } from "react";
import { ArrowUpRight, Play, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Countdown } from "@/components/Countdown";
import { useHomePage } from "./HomePage.hooks";

// three.js is ~145 KB gzipped and only the home route renders the scene, so it
// is split out rather than shipped in the shared chunk every route downloads.
// The page is black behind it either way, so the fallback is nothing.
const CosmicScene = lazy(() =>
  import("@/components/cosmic/CosmicScene").then((m) => ({ default: m.CosmicScene })),
);

export function HomePage() {
  const { categories, gallery, hero, stats, shaan } = useHomePage();

  return (
    <div id="top" className="relative bg-black">
      <Suspense fallback={null}>
        <CosmicScene />
      </Suspense>

      <SiteHeader />

      {/* Hero Section */}
      <section className="relative z-10 flex h-screen flex-col items-center justify-center px-6 pointer-events-none">
        {/* Legibility scrim. The galactic core glow sits directly behind this
            text and both are white, so the title, countdown and logo lose
            contrast against it. Tied to --ui-fade so it only appears as the
            copy does — the star stays unobscured for the whole intro. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 62% 46% at 50% 47%, rgba(0,0,0,0.66) 0%, rgba(0,0,0,0.44) 42%, rgba(0,0,0,0.15) 66%, transparent 80%)",
            opacity: "var(--ui-fade, 0)",
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center gap-8 text-center pointer-events-auto"
          style={{ 
            opacity: "var(--ui-fade, 0)",
            transform: "translateY(calc((1 - var(--ui-fade, 0)) * 20px))",
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div className="flex flex-col items-center gap-3 sm:gap-4 px-2 w-full max-w-full">
            <p 
              className="text-[0.5rem] sm:text-[0.6rem] tracking-[0.3em] sm:tracking-[0.5em] text-white/50 uppercase font-medium text-center"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
            >
              CHRIST (Deemed to be University) · Kengeri Campus
            </p>

            <img
              src="/logos/magnovite-butterfly.png"
              alt="Magnovite Logo"
              className="h-8 w-auto opacity-80 sm:h-14 mt-1 mb-1 sm:mt-0 sm:mb-0"
              style={{ filter: 'drop-shadow(0 0 16px rgba(255,255,255,0.1))' }}
            />

            <h1 
              className="font-display text-[11vw] sm:text-8xl font-bold tracking-[0.1em] sm:tracking-[0.15em] text-white whitespace-nowrap"
              style={{ textShadow: '0 0 60px rgba(0,0,0,0.9), 0 0 120px rgba(0,0,0,0.5)' }}
            >
              MAGN<span className="relative inline-block tracking-normal mr-[0.08em] sm:mr-[0.12em]">O<svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3.5vw] h-[3.5vw] sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))' }}><path d="M12 0C12 11 13 12 24 12C13 12 12 13 12 24C12 13 11 12 0 12C11 12 12 11 12 0Z" /></svg></span>VITE
            </h1>

            <p 
              className="text-[0.6rem] sm:text-[0.75rem] tracking-[0.2em] sm:tracking-[0.35em] text-white/70 uppercase font-medium text-center max-w-full px-2 whitespace-nowrap"
              style={{ textShadow: '0 0 20px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,0.9)' }}
            >
              The 16th Edition · Annual Flagship Fest
            </p>
          </div>

          <Countdown />

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-pill mt-4 inline-flex items-center gap-2 px-7 py-3.5 text-xs font-medium tracking-wider uppercase transition-all hover:scale-105 hover:border-white/20"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            Explore <ChevronDown className="size-3.5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* introduction */}
      <section id="about" className="relative z-10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="glass-panel p-6 sm:p-9">
            <p className="eyebrow">The 16th Edition</p>
            <p className="mt-5 text-lg leading-relaxed text-white/85 sm:text-[1.35rem] sm:leading-[1.55]">
              MAGNOVITE is the annual flagship fest of CHRIST (Deemed To Be University), Kengeri
              Campus — an enigmatic nexus of creativity and collaboration, bringing healthy
              competition and positive connections. Sixteen editions in, its unfading charm returns.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2.5">
                {["16th Edition", "Kengeri Campus", "50 Events"].map((t) => (
                  <span key={t} className="glass-pill px-4 py-2 text-xs tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
              >
                Learn More &amp; Meet The Team <ArrowUpRight className="size-3.5" />
              </Link>
            </div>

            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/60">
              <div className="absolute inset-0 grid place-items-center">
                <button
                  aria-label="Play the Magnovite 2026 teaser"
                  className="grid size-14 place-items-center rounded-full bg-white/90 text-black transition-transform hover:scale-105"
                >
                  <Play className="size-5 translate-x-[1px]" />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-xs tracking-[0.28em] text-white/50 uppercase">
                Magnovite 2026 · Teaser
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mainstage */}
      <section id="mainstage" className="relative z-10 px-5 py-20 sm:px-8">
        <div className="glass-panel mx-auto grid max-w-5xl gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={shaan.url}
              alt={shaan.alt}
              loading="lazy"
                      decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Live Concert</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Welcoming Shaan Rahman to Magnovite 2026
            </h2>
            <div className="mt-5 space-y-4 text-[0.92rem] leading-relaxed text-white/75">
              <p>
                Experience the magic of a true musical powerhouse! Shaan Rahman, alongside his phenomenal live band and vocal crew, is set to deliver an electrifying performance that transcends language and borders.
              </p>
              <p>
                While celebrated for iconic Malayalam soundtracks like <em>Thattathin Marayathu</em> and <em>Minnal Murali</em>, Shaan’s discography reaches deep into Tamil, Telugu, and Kannada cinema. From the global dance anthem <strong className="text-white">"Jimikki Kammal"</strong> and the viral <strong className="text-white">"Manikya Malaraya Poovi"</strong>, to cross-industry hits like the Telugu track <strong className="text-white">"Naa Oopire"</strong>, the Tamil release <strong className="text-white">"En Uyire"</strong>, and his recent multi-lingual project <em>Bha Bha Ba</em>, the setlist offers something for everyone.
              </p>
              <p>
                With his brilliant co-singers by his side, this live showcase is an absolute must-see. Get ready to groove to a spectacular symphony of pan-regional chart-toppers!
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="glass-pill px-4 py-2 text-xs">Live Performance</span>
              <span className="glass-pill px-4 py-2 text-xs">Main Stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* events */}
      <section id="events" className="relative z-10 px-5 py-20 sm:px-8">
        <div className="glass-panel mx-auto max-w-5xl p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-indigo-300">Flagship Competitions &amp; Challenges</p>
              <Link to="/events" className="group mt-2 flex items-center gap-3 text-3xl font-semibold transition-colors hover:text-indigo-300 sm:text-4xl">
                50 National Battlegrounds
                <ArrowUpRight className="size-6 opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 sm:size-8" />
              </Link>
            </div>
            <div className="flex gap-2.5">
              {stats.map(([v, l]) => (
                <div key={l} className="glass-pill px-5 py-2.5 text-center">
                  <div className="font-display text-lg font-semibold">{v}</div>
                  <div className="text-[0.52rem] tracking-[0.3em] text-muted-foreground uppercase">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ icon: Icon, title, items, targetCategory }) => (
              <Link
                key={title}
                to="/events"
                search={{ category: targetCategory }}
                className="group rounded-2xl border border-white/8 bg-white/[0.025] p-4.5 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
              >
                <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30">
                  <Icon className="size-4 group-hover:text-indigo-400" />
                </span>
                <h3 className="mt-4 text-base font-semibold group-hover:text-indigo-300 transition-colors">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{items}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 border-t border-white/8 pt-6">
            <p className="max-w-md text-xs text-muted-foreground">
              Technical, Cultural &amp; Management flagship events hosted across <span className="whitespace-nowrap">CHRIST (Deemed to be University) Kengeri Campus</span>.
            </p>
          </div>
        </div>
      </section>

      {/* gallery */}
      <section id="gallery" className="relative z-10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Fragments from the fifteenth edition
              </h2>
            </div>
            <Link
              to="/gallery"
              className="glass-pill hidden items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider sm:inline-flex"
            >
              View Full Gallery <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
            {gallery.map(({ image, caption }, i) => (
              <div
                key={caption}
                className="glass-panel relative aspect-[4/3] overflow-hidden"
              >
                <img
                  src={image}
                  alt={caption}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                      decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <span className="absolute bottom-4 left-4 text-[0.65rem] tracking-[0.22em] text-white/70 uppercase">
                  {caption}
                </span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* closing + footer */}
      <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <img
          src={hero.butterflyUrl}
          alt=""
          className="h-10 w-auto opacity-70"
          loading="lazy"
          decoding="async"
        />
        <h2 className="mt-8 max-w-3xl text-4xl leading-tight font-semibold sm:text-6xl">
          We're excited to see you there.
        </h2>
        <p 
          className="mt-5 text-sm tracking-[0.28em] text-white/90 uppercase font-medium"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
        >
          CHRIST (Deemed to be University) · Kengeri Campus
        </p>
      </section>

      <footer className="page-footer relative z-10 mt-10">
        <div className="mx-auto max-w-7xl px-5 pt-32 pb-4 sm:px-8 sm:pt-40 sm:pb-5 flex flex-col gap-5">

          {/* Each mark sits with the copy it belongs to: Magnovite anchored
              left, CHRIST anchored right, the grid gap holding them apart.
              The social links ride alongside CHRIST as the outermost item. */}
          <div className="footer-columns">

            <div className="footer-col">
              <div className="footer-logo-slot">
                <img
                  src="/logos/magnovite.png"
                  alt="Magnovite '26"
                  className="footer-logo"
                  loading="lazy"
                  decoding="async"
                  style={{ height: "38px", opacity: 0.9 }}
                />
              </div>
              <p>
                MAGNOVITE, the 16th edition of CHRIST (Deemed to be University)'s
                flagship fest, fosters creativity, collaboration,
                healthy competition, and positive connections among
                participants.
              </p>
            </div>

            <div className="footer-right">

              <div className="footer-col footer-col--end">
                <div className="footer-logo-slot">
                  <img
                    src="/logos/christwhite.png"
                    alt="CHRIST (Deemed to be University)"
                    className="footer-logo footer-logo--christ"
                    loading="lazy"
                    decoding="async"
                    style={{ height: "50px", opacity: 0.9 }}
                  />
                </div>
                <p>
                  CHRIST (Deemed to be University), Kengeri Campus offers a blend of
                  traditional and world-class facilities, including
                  department-specific buildings, libraries, research
                  facilities, and residences, amidst the city's greenery.
                </p>
              </div>

              <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/christ-university-faculty-of-engineering/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg
                  className="social-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.227 0 22.222 0h.003z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/magnovite.kengeri/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg
                  className="social-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618-6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.204-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
              </a>
  
              </div>

            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}
