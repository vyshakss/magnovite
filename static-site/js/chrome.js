/**
 * Shared site chrome: header, mega menu, countdown, footer.
 * Any page just needs <div id="site-header"></div> and <div id="site-footer"></div>.
 */

export const TARGET_TS = new Date("2026-09-16T09:00:00+05:30").getTime();

const NAV = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Events", href: "events.html" },
  { label: "Gallery", href: "gallery.html" },
];

const MEGA_LINKS = [
  { num: "01", label: "Home", href: "index.html" },
  { num: "02", label: "About", href: "about.html" },
  { num: "03", label: "Events", href: "events.html" },
  { num: "04", label: "Gallery", href: "gallery.html" },
];

const DOMAINS = [
  ["Coding & AI", "Hackathons & Sprints"],
  ["Robotics & Tech", "Robo Wars & Drones"],
  ["Management", "Startups & Finance"],
  ["Music & Vocal", "Bands & Acapella"],
  ["Dance & Stage", "Street Battles & Improv"],
  ["Gaming & Design", "Esports & Concept Art"],
];

const ICONS = {
  menu: '<svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  arrow:
    '<svg class="icon" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  pin: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
};

function currentFile() {
  const p = window.location.pathname.split("/").pop();
  return !p || p === "" ? "index.html" : p;
}

/* ---------------- countdown ---------------- */
function countdownMarkup() {
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  return `<div class="countdown" data-countdown>${labels
    .map(
      (label, i) => `
      <div class="cd-group">
        <div>
          <div class="cd-cells">
            <span class="flip-cell" data-cd="${i}" data-d="0">–</span>
            <span class="flip-cell" data-cd="${i}" data-d="1">–</span>
          </div>
          <div class="cd-label">${label}</div>
        </div>
        ${i < 3 ? '<span class="cd-colon">:</span>' : ""}
      </div>`,
    )
    .join("")}</div>`;
}

export function mountCountdowns() {
  const roots = [...document.querySelectorAll("[data-countdown-slot]")];
  roots.forEach((r) => {
    if (!r.dataset.mounted) {
      r.innerHTML = countdownMarkup();
      r.dataset.mounted = "1";
    }
  });

  const update = () => {
    const ms = Math.max(0, TARGET_TS - Date.now());
    const s = Math.floor(ms / 1000);
    const vals = [
      Math.floor(s / 86400),
      Math.floor((s % 86400) / 3600),
      Math.floor((s % 3600) / 60),
      s % 60,
    ];
    document.querySelectorAll("[data-countdown]").forEach((cd) => {
      vals.forEach((v, i) => {
        const digits = String(v).padStart(2, "0");
        cd.querySelectorAll(`[data-cd="${i}"]`).forEach((cell) => {
          const d = digits[Number(cell.dataset.d)];
          if (cell.textContent !== d) cell.textContent = d;
        });
      });
    });
  };
  update();
  clearInterval(window.__cdTimer);
  window.__cdTimer = setInterval(update, 1000);
}

/* ---------------- header ---------------- */
function headerMarkup(solid) {
  const here = currentFile();
  return `
  <header class="site-header${solid ? " is-solid" : ""}">
    <div class="bar">
      <a class="brand" href="index.html" aria-label="Magnovite 2026 home">
        <img src="logos/magnovite-butterfly.png" alt="Magnovite butterfly" />
      </a>
      <nav class="header-nav">
        ${NAV.map(
          (n) =>
            `<a href="${n.href}" class="${n.href === here ? "is-active" : ""}">${n.label}</a>`,
        ).join("")}
      </nav>
      <div class="header-right">
        <button class="glass-pill menu-btn" data-menu-toggle aria-label="Open navigation menu" aria-expanded="false">${ICONS.menu}</button>
        <a class="christ" href="https://www.christuniversity.in/" target="_blank" rel="noopener noreferrer" aria-label="CHRIST (Deemed to be University)">
          <img src="logos/christwhite.png" alt="CHRIST (Deemed to be University)" />
        </a>
      </div>
    </div>
  </header>

  <div class="mega" data-mega role="dialog" aria-modal="true" aria-label="Site navigation">
    <div class="mega-inner">
      <div class="mega-top">
        <div class="row">
          <img src="logos/magnovite-butterfly.png" alt="Magnovite" />
          <span class="mega-title">Magnovite '26 Navigation</span>
        </div>
        <button class="glass-pill menu-btn" data-menu-close aria-label="Close navigation menu">${ICONS.close}</button>
      </div>

      <div class="mega-grid">
        <div>
          <span class="eyebrow accent">Directory</span>
          <nav class="stack mt-2" style="gap:.6rem">
            ${MEGA_LINKS.map(
              (l) => `
              <a class="mega-link${l.href === here ? " is-active" : ""}" href="${l.href}">
                <span class="row" style="gap:1rem">
                  <span class="num">${l.num}</span>
                  <span class="label">${l.label}</span>
                </span>
                ${ICONS.arrow}
              </a>`,
            ).join("")}
          </nav>
        </div>

        <div class="glass-panel">
          <div class="row between" style="border-bottom:1px solid rgba(255,255,255,.08);padding-bottom:1rem">
            <div>
              <span class="eyebrow accent">34+ Competitions</span>
              <h3 class="h3">Event Domains</h3>
            </div>
            <span class="glass-pill accent" style="font-weight:700">₹5L+ Prizes</span>
          </div>
          <div class="domain-grid">
            ${DOMAINS.map(
              ([t, s]) => `
              <a class="domain-card" href="events.html">
                <span class="t">${t}</span>
                <span class="s">${s}</span>
              </a>`,
            ).join("")}
          </div>
        </div>

        <div class="stack" style="gap:1rem">
          <div class="glass-panel center">
            <span class="eyebrow accent">Countdown to Opening</span>
            <div class="mt-2" data-countdown-slot></div>
          </div>
          <a class="glass-panel" href="https://maps.google.com/?q=CHRIST+University+Kengeri+Campus+Bangalore" target="_blank" rel="noopener noreferrer">
            <span class="row">${ICONS.pin}<span class="tiny">Venue</span></span>
            <p class="mt-1 muted small">CHRIST (Deemed to be University), Kengeri Campus, Bangalore — September 16-18, 2026.</p>
          </a>
        </div>
      </div>
    </div>
  </div>`;
}

function footerMarkup() {
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="logos/christwhite.png" alt="CHRIST University" class="footer-logo footer-logo--christ" />
        <div class="footer-divider"></div>
        <img src="logos/magnovite.png" alt="Magnovite '26" class="footer-logo" />
      </div>
      <div class="footer-columns">
        <div class="footer-col">
          <p>Christ University, Kengeri Campus offers a blend of traditional and world-class facilities, including department-specific buildings, libraries, research facilities, and residences, amidst the city's greenery.</p>
        </div>
        <div class="footer-col">
          <p>MAGNOVITE, the 16th edition of CHRIST University's flagship fest, fosters creativity, collaboration, healthy competition, and positive connections among participants.</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/company/christ-university-faculty-of-engineering/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.128 2.062 2.062 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.227 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/magnovite.kengeri/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947C23.728 2.69 21.307.272 16.945.072 15.665.014 15.257 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.325 6.162 6.162 0 0 0 0-12.325zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ---------------- boot ---------------- */
export function mountChrome({ solidHeader = false } = {}) {
  const headerSlot = document.getElementById("site-header");
  if (headerSlot) headerSlot.innerHTML = headerMarkup(solidHeader);
  const footerSlot = document.getElementById("site-footer");
  if (footerSlot) footerSlot.innerHTML = footerMarkup();

  const mega = document.querySelector("[data-mega]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const setOpen = (open) => {
    if (!mega) return;
    mega.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (toggle) {
      toggle.innerHTML = open ? ICONS.close : ICONS.menu;
      toggle.setAttribute("aria-expanded", String(open));
    }
  };
  toggle?.addEventListener("click", () => setOpen(!mega.classList.contains("is-open")));
  document.querySelector("[data-menu-close]")?.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
  mega?.addEventListener("click", (e) => {
    if (e.target === mega) setOpen(false);
  });

  mountCountdowns();
}
