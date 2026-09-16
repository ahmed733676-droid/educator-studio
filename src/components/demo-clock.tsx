import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { DEMO_SCRIPT } from "@/lib/content";
import { cn } from "@/lib/cn";

function parseBeat(clock: string) {
  const [a, b] = clock.split("–").map((part) => Number(part));
  return { start: (a || 0) * 60, end: (b || 0) * 60 };
}

function formatClock(total: number) {
  const clamped = Math.max(0, Math.min(30 * 60, total));
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function DemoClock() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setElapsed((n) => {
        if (n >= 30 * 60) return 30 * 60;
        return n + 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (elapsed >= 30 * 60) setRunning(false);
  }, [elapsed]);

  const current = useMemo(() => {
    return DEMO_SCRIPT.beats.findIndex((b) => {
      const r = parseBeat(b.clock);
      return elapsed >= r.start && elapsed < r.end;
    });
  }, [elapsed]);

  return (
    <div className="flex flex-col gap-4">
      <div className="raised flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="kicker">Demo clock</p>
          <p className="mt-1 font-mono text-3xl tabular-nums tracking-tight text-paper">
            {formatClock(elapsed)}
            <span className="ml-2 text-sm text-faint">/ 30:00</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="brass"
            size="icon"
            aria-label={running ? "Pause demo" : "Start demo"}
            onClick={() => setRunning((v) => !v)}
          >
            {running ? (
              <Pause className="size-4" strokeWidth={1.6} />
            ) : (
              <Play className="size-4" strokeWidth={1.6} />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Reset demo clock"
            onClick={() => {
              setRunning(false);
              setElapsed(0);
            }}
          >
            <RotateCcw className="size-4" strokeWidth={1.6} />
          </Button>
        </div>
      </div>

      <ol className="flex flex-col gap-2">
        {DEMO_SCRIPT.beats.map((b, i) => {
          const active = i === current || (elapsed >= 30 * 60 && i === DEMO_SCRIPT.beats.length - 1);
          return (
            <li
              key={b.clock}
              className={cn(
                "grid grid-cols-[4.5rem_1fr] gap-3 rounded-lg p-4 transition-colors duration-150",
                active ? "bg-paper text-ink" : "raised text-paper",
              )}
            >
              <p
                className={cn(
                  "font-mono text-xs tabular-nums tracking-wide",
                  active ? "text-brass-dim" : "text-brass",
                )}
              >
                {b.clock}
              </p>
              <div>
                <p className="font-display text-base font-medium">{b.title}</p>
                <p className={cn("mt-1 font-sans text-sm leading-relaxed", active ? "text-ink/70" : "text-muted")}>
                  {b.line}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
