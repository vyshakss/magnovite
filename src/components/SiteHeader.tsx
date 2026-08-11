import { Menu, X } from "lucide-react";
import { useState } from "react";
import butterfly from "@/assets/butterfly.png.asset.json";
import christ from "@/assets/christ.png.asset.json";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Main Stage", href: "#mainstage" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cine-chrome fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Magnovite 2026 home">
          <img src={butterfly.url} alt="Magnovite butterfly logo" className="h-7 w-auto opacity-90" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <img
            src={christ.url}
            alt="CHRIST (Deemed to be University)"
            className="h-8 w-auto opacity-80"
          />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="glass-pill grid size-10 place-items-center md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass-panel mx-5 mb-2 flex flex-col gap-1 p-3 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-xs tracking-[0.24em] text-muted-foreground uppercase hover:bg-white/5 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
