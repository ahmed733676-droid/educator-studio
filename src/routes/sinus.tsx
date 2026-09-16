import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { BoardPlate } from "@/components/board-plate";
import { BandFigure, BounceFigure } from "@/components/figures";
import { Button } from "@/components/ui/button";
import { ABORT_CALLS, DENSAH_BEATS, SINUS_SECTIONS } from "@/lib/content";
import { cn } from "@/lib/cn";
import { markSinus, setLastRoute, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/sinus")({ component: SinusModule });

function SinusModule() {
  const progress = useProgress();

  useEffect(() => {
    setLastRoute("/sinus");
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="kicker">Course 02</p>
        <h1 className="font-display text-3xl font-medium tracking-tight">
          Closed sinus lift
        </h1>
        <p className="max-w-[44ch] font-sans text-sm leading-relaxed text-muted">
          4–5 mm residual bone. Window, bounce, abort. Six-month numbers are not
          here. They live in Abdallah_Results_CRF.xlsx and stay dashed until the
          26 cases are entered.
        </p>
      </header>

      <BandFigure />
      <BoardPlate kind="sinus" />

      <ul className="flex flex-col gap-4">
        {SINUS_SECTIONS.map((sec) => {
          const done = progress.sinusDone.includes(sec.id);
          return (
            <li key={sec.id} className="plate p-5">
              <p className="kicker">{sec.kicker}</p>
              <h2 className="mt-1 font-display text-2xl font-medium">{sec.title}</h2>
              {sec.id === "bounce" && (
                <div className="mt-4 flex flex-col gap-4">
                  <BounceFigure />
                  <ol className="flex flex-col gap-2">
                    {DENSAH_BEATS.map((b) => (
                      <li key={b.n} className="grid grid-cols-[2.5rem_1fr] gap-2">
                        <span className="font-mono text-kicker text-brass">{b.n}</span>
                        <span>
                          <span className="font-display text-sm font-medium text-paper">{b.title}. </span>
                          <span className="font-sans text-sm text-muted">{b.line}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {sec.id === "abort" && <AbortBoard />}
              <ul className="mt-4 flex flex-col gap-3">
                {sec.body.map((line) => (
                  <li key={line} className="font-sans text-sm leading-relaxed text-muted">
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-md bg-raised px-4 py-3 font-sans text-sm leading-relaxed text-paper">
                {sec.rule}
              </p>
              <Button
                variant={done ? "outline" : "brass"}
                className="mt-4"
                onClick={() => markSinus(sec.id)}
              >
                {done ? (
                  <>
                    <Check className="size-4" strokeWidth={1.6} />
                    Walked
                  </>
                ) : (
                  "Mark as walked"
                )}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AbortBoard() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mt-4 flex flex-col gap-2">
      <p className="kicker">Call from the finding</p>
      {ABORT_CALLS.map((row) => {
        const on = open === row.id;
        return (
          <button
            key={row.id}
            type="button"
            onClick={() => setOpen(on ? null : row.id)}
            className={cn(
              "rounded-md px-3 py-3 text-left transition-colors duration-150",
              on ? "bg-paper text-ink" : "bg-raised text-paper",
            )}
          >
            <p className="font-display text-sm font-medium">{row.find}</p>
            {on && (
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink/75">
                <span className={row.abort ? "text-danger" : "text-ok"}>
                  {row.abort ? "Abort. " : "Continue. "}
                </span>
                {row.call}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
