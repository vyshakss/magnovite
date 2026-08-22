import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  Trophy,
  Calendar,
  Users,
  IndianRupee,
  Layers,
  Mail,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { EVENTS_DATA, EventDetail } from "@/data/eventsData";

export const Route = createFileRoute("/events")({
  validateSearch: (search: Record<string, unknown>): { event?: string; category?: string; department?: string } => {
    const event = typeof search["event"] === "string" ? search["event"] : undefined;
    const category = typeof search["category"] === "string" ? search["category"] : undefined;
    const department = typeof search["department"] === "string" ? search["department"] : undefined;
    return { event, category, department };
  },
  component: EventsPage,
});

function CustomSelect({
  value,
  options,
  onChange,
  placeholder,
}: {
  value: string;
  options: string[];
  onChange: (val: string) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative min-w-[180px]" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-sm transition-all focus:outline-none ${
          open
            ? "border-indigo-500 bg-black/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.15)]"
            : "border-white/10 bg-black/60 text-white/90 hover:border-white/20 hover:bg-white/[0.04]"
        }`}
      >
        <span className="truncate">{value === "All" ? placeholder : value}</span>
        <ChevronDown
          className={`ml-3 size-4 text-white/50 transition-transform duration-300 ${
            open ? "rotate-180 text-indigo-400" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 max-h-[300px] w-full min-w-[200px] overflow-y-auto rounded-xl border border-white/10 bg-[#13151f] p-1.5 shadow-2xl shadow-black/80 backdrop-blur-xl">
          {options.map((opt) => {
            const isSelected = value === opt;
            return (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full text-left rounded-lg px-3.5 py-2.5 text-sm transition-all ${
                  isSelected
                    ? "bg-indigo-500/20 text-indigo-300 font-semibold"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {opt === "All" ? placeholder : opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function EventsPage() {
  const searchParams = useSearch({ from: "/events" });
  const [selectedSlug, setSelectedSlug] = useState<string | null>(searchParams.event || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.category || "All");
  const [selectedDepartment, setSelectedDepartment] = useState(searchParams.department || "All");
  const navigate = Route.useNavigate();

  useEffect(() => {
    if (searchParams.category) {
      setSelectedCategory(searchParams.category);
    } else {
      setSelectedCategory("All");
    }
  }, [searchParams.category]);

  useEffect(() => {
    if (searchParams.department) {
      setSelectedDepartment(searchParams.department);
    } else {
      setSelectedDepartment("All");
    }
  }, [searchParams.department]);

  useEffect(() => {
    if (searchParams.event) {
      setSelectedSlug(searchParams.event);
    } else {
      setSelectedSlug(null);
    }
  }, [searchParams.event]);

  const handleDepartmentChange = (val: string) => {
    setSelectedDepartment(val);
    setSelectedCategory("All"); // Reset category when department changes
    navigate({ search: (prev) => ({ ...prev, department: val === "All" ? undefined : val, category: undefined }) });
  };

  const departments = useMemo(() => {
    return ["All", ...Array.from(new Set(EVENTS_DATA.map((e) => e.department)))];
  }, []);

  const filteredEvents = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return EVENTS_DATA.filter((event) => {
      const matchCat = selectedCategory === "All" || event.category === selectedCategory;
      const matchDept = selectedDepartment === "All" || event.department === selectedDepartment;
      const matchQ =
        !q ||
        event.title.toLowerCase().includes(q) ||
        event.tagline.toLowerCase().includes(q) ||
        event.overview.toLowerCase().includes(q) ||
        event.department.toLowerCase().includes(q);
      return matchCat && matchDept && matchQ;
    });
  }, [searchQuery, selectedCategory, selectedDepartment]);

  const currentEvent = useMemo(() => {
    if (!selectedSlug) return null;
    return EVENTS_DATA.find((e) => e.slug === selectedSlug) || EVENTS_DATA[0];
  }, [selectedSlug]);

  return (
    <div className="min-h-screen bg-[#06080e] text-white selection:bg-indigo-500/30">
      <SiteHeader isFixed />

      {/* Atmospheric Background Ambient Glows — radial gradients for performance */}
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

      <div className="relative z-10 pt-28 pb-20">
        {currentEvent ? (
          /* ========================================================================= */
          /* EVENT DETAIL VIEW (UTOPIAN-LAND LUXURY 2-COLUMN TEMPLATE)                  */
          /* ========================================================================= */
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            {/* Breadcrumb Navigation Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => navigate({ search: (prev) => ({ ...prev, event: undefined }) })}
                className="glass-pill inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="size-4" /> Back to All Events
              </button>
              <span className="glass-pill border-indigo-500/30 bg-indigo-950/40 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-300 uppercase">
                {currentEvent.category} • {currentEvent.department}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="mb-8">
              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {currentEvent.title}
              </h1>
              <p className="mt-2 text-lg font-medium text-indigo-300/90 sm:text-xl">
                {currentEvent.tagline}
              </p>
            </div>

            {/* Showcase Hero Image Container */}
            <div className="relative mb-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f121d] shadow-2xl shadow-black/80">
              <img
                src={currentEvent.image}
                alt={currentEvent.title}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/shaan-new-poster.webp";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-transparent opacity-80" />
            </div>

            {/* 2-Column Main Layout */}
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              {/* LEFT COLUMN: Overview, Stages, Rules, FAQs */}
              <div className="min-w-0 space-y-8">
                {/* Overview Card */}
                <div className="glass-panel p-7 sm:p-9">
                  <h2 className="font-display text-xl font-semibold text-white">Event Overview</h2>
                  <p className="mt-4 text-base leading-relaxed text-white/80 whitespace-pre-wrap break-words">
                    {currentEvent.overview}
                  </p>
                </div>

                {/* Structure & Stages */}
                {currentEvent.stages?.length > 0 && !currentEvent.stages.every(st => st.desc.includes("Details will be announced soon")) && (
                  <div className="glass-panel p-7 sm:p-9">
                    <h3 className="font-display text-xl font-semibold text-white">
                      Event Structure &amp; Stages
                    </h3>
                    <div className="mt-6 space-y-4">
                      {currentEvent.stages.map((st, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-white/8 bg-black/40 p-5 transition-colors hover:border-white/15"
                        >
                          <strong className="block text-base font-semibold text-indigo-300">
                            {st.title}
                          </strong>
                          <p className="mt-1.5 text-sm leading-relaxed text-white/70 whitespace-pre-wrap break-words">{st.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rules & Guidelines */}
                {currentEvent.rules?.length > 0 && !currentEvent.rules.every(r => r.includes("Details will be announced soon")) && (
                  <div className="glass-panel p-7 sm:p-9">
                    <h3 className="font-display text-xl font-semibold text-white">
                      Rules &amp; Guidelines
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {currentEvent.rules.map((rule, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-400" />
                          <span className="min-w-0 break-words">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQ */}
                {currentEvent.faqs.length > 0 && (
                  <div className="glass-panel p-7 sm:p-9">
                    <h3 className="font-display text-xl font-semibold text-white">
                      Frequently Asked Questions
                    </h3>
                    <div className="mt-5 space-y-4">
                      {currentEvent.faqs.map((faq, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-white/8 bg-white/[0.02] p-5"
                        >
                          <strong className="block text-sm font-semibold text-white">
                            Q: {faq.q}
                          </strong>
                          <p className="mt-2 text-sm leading-relaxed text-indigo-200/75 break-words">
                            A: {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: Sticky Sidebar Metrics & Action */}
              <div className="min-w-0 space-y-6 lg:sticky lg:top-24">
                {/* Total Prize Pool Card */}
                <div className="rounded-2xl border border-indigo-500/35 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-transparent p-6 shadow-xl shadow-indigo-500/10 backdrop-blur-xl">
                  <span className="text-xs font-bold tracking-[0.18em] text-indigo-300 uppercase">
                    TOTAL PRIZE POOL
                  </span>
                  <div className="font-display mt-2 text-4xl font-extrabold text-white sm:text-5xl">
                    {currentEvent.prizePool}
                  </div>
                </div>

                {/* Key Info Metrics */}
                <div className="glass-panel space-y-5 p-6">
                  <div>
                    <span className="eyebrow block">Date</span>
                    <span className="mt-1 flex items-center gap-2 font-medium text-white">
                      <Calendar className="size-4 text-indigo-400" /> {currentEvent.date}
                    </span>
                  </div>
                  <div className="border-t border-white/8 pt-4">
                    <span className="eyebrow block">Registration Fee</span>
                    <span className="mt-1 flex items-center gap-2 font-medium text-white">
                      <IndianRupee className="size-4 text-indigo-400" /> {currentEvent.fee}
                    </span>
                  </div>
                  <div className="border-t border-white/8 pt-4">
                    <span className="eyebrow block">Team Size</span>
                    <span className="mt-1 flex items-center gap-2 font-medium text-white">
                      <Users className="size-4 text-indigo-400" /> {currentEvent.teamSize}
                    </span>
                  </div>
                  <div className="border-t border-white/8 pt-4">
                    <span className="eyebrow block">Format / Arena</span>
                    <span className="mt-1 flex items-center gap-2 font-medium text-white">
                      <Layers className="size-4 text-indigo-400" /> {currentEvent.format}
                    </span>
                  </div>
                </div>

                {/* Event Coordinators */}
                <div className="glass-panel p-6">
                  <h4 className="font-display text-sm font-semibold tracking-wide text-white uppercase">
                    Event Coordinators
                  </h4>
                  <div className="mt-4 flex flex-col gap-3">
                    {currentEvent.coordinators && currentEvent.coordinators.map((coord, idx) => (
                      <div key={idx} className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
                        <div className="font-semibold text-white">{coord.name}</div>
                        {coord.role && (
                          <div className="text-[0.65rem] font-bold text-indigo-400/80 uppercase tracking-widest mt-0.5">
                            {coord.role}
                          </div>
                        )}
                        <div className="mt-2 flex flex-col gap-1">
                          {coord.phone && (
                            <a
                              href={`tel:${coord.phone.replace(/\\s+/g, '')}`}
                              className="flex items-center gap-2 text-xs text-indigo-300 transition-colors hover:text-indigo-200"
                            >
                              <Phone className="size-3.5 shrink-0" /> {coord.phone}
                            </a>
                          )}
                          {coord.email && (
                            <a
                              href={`mailto:${coord.email}`}
                              className="flex items-start gap-2 text-xs text-white/70 transition-colors hover:text-white"
                            >
                              <Mail className="mt-0.5 size-3.5 shrink-0" />
                              <span className="min-w-0 break-all">{coord.email}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Single Primary Register Button */}
                <a
                  href={currentEvent.registrationLink || "https://christuniversity.in"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] hover:shadow-indigo-600/50"
                >
                  <span>Register Now</span> <ArrowUpRight className="size-5" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* EVENTS DIRECTORY LISTING & GRID VIEW                                      */
          /* ========================================================================= */
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {/* Header Hero Banner */}
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-300 uppercase">
                <Sparkles className="size-3.5" /> 50 National Arenas
              </div>
              <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Flagship Competitions
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                Discover national battlegrounds spanning Coding, AI, Robotics, Strategic Management,
                Digital Design, and Stage Arts at CHRIST (Deemed to be University) Kengeri Campus.
              </p>

              {/* Stats Bar */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
                {[
                  ["50", "Arenas"],
                  ["₹11L", "Prize Pool"],
                  ["SEP 15-16", "Fest Dates"],
                  ["16th", "Edition"],
                ].map(([val, label]) => (
                  <div key={label} className="glass-pill px-6 py-3 text-center">
                    <div className="font-display text-lg font-bold text-white">{val}</div>
                    <div className="text-[0.6rem] font-semibold tracking-widest text-indigo-300 uppercase">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter Controls Bar */}
            <div className="glass-panel relative z-20 mx-auto mt-12 max-w-5xl p-4 sm:p-5">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                {/* Search Box */}
                <div className="relative flex items-center">
                  <Search className="absolute left-3.5 size-4 text-white/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title, domain, or keyword..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 py-2.5 pr-4 pl-10 text-sm text-white placeholder-white/40 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Department Dropdown */}
                <CustomSelect
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                  options={departments}
                  placeholder="All Departments"
                />
              </div>
            </div>

            {/* Event Cards Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.slug}
                  onClick={() => navigate({ search: (prev) => ({ ...prev, event: evt.slug }) })}
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/shaan-new-poster.webp";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-transparent" />
                    <span className="glass-pill absolute top-3 right-3 px-3 py-1 text-[0.65rem] font-bold tracking-wider text-indigo-300 uppercase">
                      {evt.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[0.65rem] font-medium tracking-wider text-indigo-400/80 uppercase">
                      {evt.department}
                    </span>
                    <h3 className="font-display mt-2 text-xl font-bold text-white transition-colors group-hover:text-indigo-300">
                      {evt.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
                      {evt.tagline}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
                        <Trophy className="size-3.5 text-indigo-400" />
                        <span>{evt.prizePool}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                        Explore Event <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="glass-panel mx-auto mt-12 max-w-md p-10 text-center">
                <p className="text-lg font-semibold text-white">No matching events found</p>
                <p className="mt-2 text-sm text-white/60">
                  Try adjusting your keyword search or category filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedDepartment("All");
                  }}
                  className="glass-pill mt-6 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Global Footer */}
      <footer className="relative z-10 border-t border-white/8 px-6 py-12 text-center text-xs tracking-[0.2em] text-white/40 uppercase">
        MAGNOVITE 2026 · CHRIST (Deemed to be University) Kengeri Campus
      </footer>
    </div>
  );
}
