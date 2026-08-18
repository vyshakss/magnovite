import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { X, Sparkles, Image as ImageIcon, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  badge: string;
  aspect?: "square" | "wide" | "tall" | "large";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: "/images/Gallery/GroupDance.jpg",
    title: "Mega Group Dance Showcase",
    category: "cultural",
    badge: "Cultural",
    aspect: "large",
  },
  {
    id: "2",
    src: "/images/Gallery/FashionShow.jpg",
    title: "Couture & Architecture Walk",
    category: "cultural",
    badge: "Fashion",
    aspect: "tall",
  },
  {
    id: "3",
    src: "/images/Gallery/PrettyLady.jpg",
    title: "Theatrical Ramp Walk",
    category: "cultural",
    badge: "Fashion",
    aspect: "square",
  },
  {
    id: "4",
    src: "/images/Gallery/StreetDance.jpg",
    title: "Street Cypher Battle",
    category: "cultural",
    badge: "Street Dance",
    aspect: "wide",
  },
  {
    id: "5",
    src: "/images/Gallery/StreetPlay.jpg",
    title: "Nukkad Natak Street Play",
    category: "cultural",
    badge: "Drama",
    aspect: "square",
  },
  {
    id: "6",
    src: "/images/Gallery/DJnight.jpg",
    title: "Main Stage EDM DJ Night",
    category: "dj",
    badge: "Concert",
    aspect: "wide",
  },
  {
    id: "7",
    src: "/images/Gallery/JinBro.jpg",
    title: "Inaugural Lamp Lighting Ceremony",
    category: "campus",
    badge: "Campus Life",
    aspect: "square",
  },
  {
    id: "8",
    src: "/images/Gallery/DJRubz.jpg",
    title: "DJ Rubz Headlining Set",
    category: "dj",
    badge: "Concert",
    aspect: "tall",
  },
  {
    id: "9",
    src: "/images/Gallery/AnotherDance.jpg",
    title: "Futuristic Themed Dance",
    category: "cultural",
    badge: "Cultural",
    aspect: "square",
  },
  {
    id: "10",
    src: "/images/Gallery/imsolonely.jpg",
    title: "Contemporary Solo Act",
    category: "cultural",
    badge: "Solo",
    aspect: "square",
  },
  {
    id: "11",
    src: "/images/Gallery/BattleOfBands.jpg",
    title: "Battle of the Bands Grand Finale",
    category: "music",
    badge: "Live Bands",
    aspect: "large",
  },
  {
    id: "12",
    src: "/images/Gallery/brightcoffee.jpg",
    title: "Masala Coffee Live in Concert",
    category: "music",
    badge: "Pro Show",
    aspect: "wide",
  },
  {
    id: "13",
    src: "/images/Gallery/masalacoffeelead.jpg",
    title: "Acoustic Lead Vocal Solo",
    category: "music",
    badge: "Music",
    aspect: "tall",
  },
  {
    id: "14",
    src: "/images/Gallery/masalacoffeepremass.jpg",
    title: "Band Soundcheck & Backstage",
    category: "music",
    badge: "Backstage",
    aspect: "square",
  },
  {
    id: "15",
    src: "/images/Gallery/masscoffee.jpg",
    title: "Auditorium Crowd Wave",
    category: "music",
    badge: "Crowd",
    aspect: "wide",
  },
  {
    id: "16",
    src: "/images/Gallery/masalacoffeeviolin.jpg",
    title: "Violin Solo Performance",
    category: "music",
    badge: "Instruments",
    aspect: "square",
  },
  {
    id: "17",
    src: "/images/Gallery/deadman.jpg",
    title: "Avant-Garde Runway Act",
    category: "cultural",
    badge: "Fashion",
    aspect: "square",
  },
  {
    id: "18",
    src: "/images/Gallery/kathak.jpg",
    title: "Classical Kathak Recital",
    category: "cultural",
    badge: "Classical",
    aspect: "tall",
  },
];

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "cultural", label: "Cultural & Stage" },
    { id: "music", label: "Music & Bands" },
    { id: "dj", label: "DJ Nights" },
    { id: "campus", label: "Campus Life" },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeModalItem = modalIndex !== null ? filteredItems[modalIndex] : null;

  const handlePrev = () => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex + 1) % filteredItems.length);
  };

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
          className="absolute top-1/2 -right-40 h-[400px] w-[500px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.10) 0%, transparent 65%)', transform: 'translate3d(0,0,0)' }}
        />
      </div>

      <div className="relative z-10 pt-28 pb-24">
        {/* Gallery Hero Section */}
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-300 uppercase">
            <Sparkles className="size-3.5" /> 16th Edition Memories
          </div>
          <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Visual Showcase
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Relive the lights, sound, and electrifying energy captured across national
            battlegrounds, concerts, and campus celebrations.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`glass-pill px-5 py-2.5 text-xs font-semibold tracking-wider transition-all uppercase ${
                  activeFilter === cat.id
                    ? "border-indigo-500 bg-indigo-600/30 text-white shadow-lg shadow-indigo-500/20"
                    : "text-white/70 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[260px]">
            {filteredItems.map((item, idx) => {
              const spanClasses =
                item.aspect === "large"
                  ? "sm:col-span-2 sm:row-span-2"
                  : item.aspect === "wide"
                    ? "sm:col-span-2"
                    : item.aspect === "tall"
                      ? "sm:row-span-2"
                      : "";

              return (
                <div
                  key={item.id}
                  onClick={() => setModalIndex(idx)}
                  className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0f121d] cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 ${spanClasses}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Hover Floating Actions */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <div className="flex justify-between items-start">
                      <span className="glass-pill px-3 py-1 text-[0.65rem] font-bold tracking-wider text-indigo-300 uppercase">
                        {item.badge}
                      </span>
                      <span className="grid size-8 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                        <ZoomIn className="size-4" />
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-indigo-300/80">
                        CHRIST University Kengeri Campus
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          onClick={() => setModalIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] max-w-5xl flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-[#0e121c] p-4 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-transform hover:scale-110"
            >
              <X className="size-5" />
            </button>

            {/* Previous & Next Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 grid size-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-transform hover:scale-110"
            >
              <ChevronLeft className="size-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 grid size-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-transform hover:scale-110"
            >
              <ChevronRight className="size-6" />
            </button>

            <div className="relative aspect-video max-h-[70vh] w-full overflow-hidden rounded-xl bg-black">
              <img
                src={activeModalItem.src}
                alt={activeModalItem.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-4 w-full text-center">
              <span className="glass-pill px-3 py-1 text-xs font-semibold text-indigo-300 uppercase">
                {activeModalItem.badge}
              </span>
              <h2 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">
                {activeModalItem.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <footer className="relative z-10 border-t border-white/8 px-6 py-12 text-center text-xs tracking-[0.2em] text-white/40 uppercase">
        MAGNOVITE 2026 · CHRIST UNIVERSITY KENGERI CAMPUS
      </footer>
    </div>
  );
}
