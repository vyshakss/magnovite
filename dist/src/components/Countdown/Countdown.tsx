import { useCountdown } from "./Countdown.hooks";

export function Countdown() {
  const { now, groups } = useCountdown();

  return (
    <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-6 sm:gap-x-8">
      {groups.map(([label, value], i) => (
        <div key={label} className="flex items-start gap-3 sm:gap-5">
          <div className="text-center">
            <div className="flex gap-1.5 sm:gap-2">
              {String(value)
                .padStart(2, "0")
                .split("")
                .map((d, j) => (
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
