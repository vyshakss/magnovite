import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  ArrowUpRight,
  Code,
  Bot,
  Briefcase,
  Music,
  Theater,
  Gamepad2,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";
import { NAV, MEGA_LINKS, ASSETS } from "./SiteHeader.data";
import { Countdown } from "@/components/Countdown";

interface SiteHeaderProps {
  isFixed?: boolean;
}

export function SiteHeader({ isFixed = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 pointer-events-auto ${
          isFixed
            ? "bg-[#06080e]/85 backdrop-blur-xl border-b border-white/10 opacity-100 transform-none"
            : "bg-[#06080e]/60 backdrop-blur-lg border-b border-white/5 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          {/* Brand Logo (Butterfly) */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Magnovite 2026 home">
            <img
              src={ASSETS.butterfly}
              alt="Magnovite butterfly"
              className="h-8 w-auto opacity-95 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </Link>

          {/* Desktop Direct Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => {
              const isActive = currentPath === n.href;
              return (
                <Link
                  key={n.href}
                  to={n.href}
                  className={`text-[0.72rem] font-semibold tracking-[0.24em] uppercase transition-colors ${
                    isActive
                      ? "text-indigo-300 font-bold border-b border-indigo-400 pb-0.5"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Group: Menu Toggle + CHRIST University Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="glass-pill flex size-10 items-center justify-center transition-all hover:scale-105 hover:bg-white/15 cursor-pointer"
            >
              {open ? <X className="size-5 text-white" /> : <Menu className="size-5 text-white" />}
            </button>

            <a
              href="https://www.christuniversity.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center group"
              aria-label="CHRIST (Deemed to be University)"
            >
              <img
                src={ASSETS.christ}
                alt="CHRIST (Deemed to be University)"
                className="h-8 w-auto opacity-90 transition-opacity group-hover:opacity-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              />
            </a>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN EDITORIAL MEGA MENU OVERLAY */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#06080e]/95 p-4 sm:p-8 backdrop-blur-3xl overflow-y-auto"
        >
          <div className="relative mx-auto w-full max-w-6xl py-8">
            {/* Top Close Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <img src={ASSETS.butterfly} alt="Magnovite" className="h-8 w-auto" />
                <span className="font-display font-bold text-base tracking-widest text-white uppercase">
                  MAGNOVITE '26 NAVIGATION
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="glass-pill flex size-11 items-center justify-center text-white transition-transform hover:scale-110"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* 3-Column Mega Menu Content */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1.4fr_1.1fr]">
              {/* LEFT COLUMN: Numbered Nav Links */}
              <div className="space-y-3">
                <span className="text-[0.65rem] font-bold tracking-[0.25em] text-indigo-400 uppercase">
                  DIRECTORY
                </span>
                <nav className="mt-3 flex flex-col gap-2">
                  {MEGA_LINKS.map((link) => {
                    const isActive = currentPath === link.href;
                    return (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between rounded-xl border p-4 transition-all ${
                          isActive
                            ? "border-indigo-500/50 bg-indigo-600/15 text-white"
                            : "border-white/8 bg-white/[0.02] text-white/80 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-semibold text-indigo-400">
                            {link.num}
                          </span>
                          <span className="font-display text-xl font-bold tracking-tight">
                            {link.label}
                          </span>
                        </div>
                        <ArrowUpRight className="size-5 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* MIDDLE COLUMN: 6 Arenas Showcase */}
              <div className="glass-panel p-6">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <span className="eyebrow text-indigo-400">34+ COMPETITIONS</span>
                    <h3 className="font-display text-lg font-bold text-white">Event Domains</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="glass-pill px-3 py-1 text-[0.65rem] font-bold text-indigo-300">
                      ₹5L+ PRIZES
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { icon: Code, title: "Coding & AI", sub: "Hackathons & Sprints" },
                    { icon: Bot, title: "Robotics & Tech", sub: "Robo Wars & Drones" },
                    { icon: Briefcase, title: "Management", sub: "Startups & Finance" },
                    { icon: Music, title: "Music & Vocal", sub: "Bands & Acapella" },
                    { icon: Theater, title: "Dance & Stage", sub: "Street Battles & Improv" },
                    { icon: Gamepad2, title: "Gaming & Design", sub: "Esports & Concept Art" },
                  ].map((cat, i) => (
                    <Link
                      key={i}
                      to="/events"
                      onClick={() => setOpen(false)}
                      className="group flex flex-col justify-between rounded-xl border border-white/6 bg-black/30 p-3.5 transition-all hover:border-indigo-500/40 hover:bg-white/[0.04]"
                    >
                      <div className="flex items-center justify-between">
                        <cat.icon className="size-4 text-indigo-400" />
                        <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="mt-3">
                        <span className="block text-xs font-bold text-white group-hover:text-indigo-300">
                          {cat.title}
                        </span>
                        <span className="block text-[0.65rem] text-white/50">{cat.sub}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: Fest Countdown & Campus Info */}
              <div className="space-y-4">
                {/* Countdown Card */}
                <div className="glass-panel p-5 text-center">
                  <span className="eyebrow block text-indigo-400">COUNTDOWN TO OPENING</span>
                  <div className="mt-4 flex justify-center scale-90 sm:scale-100 origin-center">
                    <Countdown />
                  </div>
                </div>

                {/* Location Map Card */}
                <a
                  href="https://maps.google.com/?q=CHRIST+University+Kengeri+Campus+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel group block p-4 transition-all hover:border-white/20"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                    <span className="flex items-center gap-1.5 text-indigo-300">
                      <MapPin className="size-3.5" /> Kengeri Campus Map
                    </span>
                    <span className="inline-flex items-center gap-1 text-[0.65rem] text-white/60 group-hover:text-white">
                      Open Maps <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    CHRIST (Deemed to be University), Mysuru Road, Bengaluru.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
