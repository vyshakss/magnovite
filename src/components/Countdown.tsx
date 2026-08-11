import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-16T09:00:00+05:30").getTime();

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = parts(now === null ? 0 : TARGET - now);
  const groups: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-6 sm:gap-x-8">
      {groups.map(([label, value], i) => (
        <div key={label} className="flex items-start gap-3 sm:gap-5">
          <div className="text-center">
            <div className="flex gap-1.5 sm:gap-2">
              {String(value).padStart(2, "0").split("").map((d, j) => (
                <span key={j} className="flip-cell">
                  {now === null ? "–" : d}
                </span>
              ))}
            </div>
            <div className="mt-3 text-[0.6rem] tracking-[0.34em] text-muted-foreground uppercase">
              {label}
            </div>
          </div>
          {i < groups.length - 1 && (
            <span className="mt-4 hidden text-2xl text-white/25 sm:block">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
