import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BoardPlate } from "@/components/board-plate";
import { DemoClock } from "@/components/demo-clock";
import { StepFigure } from "@/components/figures";
import { KennedyCast } from "@/components/kennedy-cast";
import { StepRail } from "@/components/step-rail";
import { Button } from "@/components/ui/button";
import { DEMO_SCRIPT, KENNEDY_CASE, RPD_STEPS } from "@/lib/content";
import { cn } from "@/lib/cn";
import { markRpdStep, setLastRoute, setRpdStep, toggleProp, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/rpd")({ component: RpdStudio });

const TABS = ["Map", "Case", "Script", "Props"] as const;

function RpdStudio() {
  const progress = useProgress();
  const [tab, setTab] = useState<(typeof TABS)[number]>("Map");
  const step = Math.min(Math.max(progress.rpdStep, 0), 4);
  const current = RPD_STEPS[step];

  useEffect(() => {
    setLastRoute("/rpd");
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="kicker">Course 01</p>
        <h1 className="font-display text-3xl font-medium tracking-tight">RPD Design Studio</h1>
        <p className="max-w-[42ch] font-sans text-sm text-muted">
          Five steps, one Kennedy I. Walk the map in clinic order. Mark a step when
          you can teach it without notes.
        </p>
      </header>

      <div className="flex gap-1 rounded-lg bg-raised p-1 shadow-border">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "h-10 flex-1 rounded-md font-sans text-sm font-medium transition-colors duration-150",
              tab === t ? "bg-paper text-ink" : "text-muted",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Map" && current && (
        <div className="flex flex-col gap-5">
          <StepRail
            step={step}
            done={progress.rpdDone}
            onPick={(n) => setRpdStep(n)}
          />
          <KennedyCast step={step} />
          <StepFigure step={step} />

          <article className="plate flex flex-col gap-4 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="kicker">
                  {current.minutes} · {current.latin}
                </p>
                <h2 className="mt-1 font-display text-2xl font-medium">{current.title}</h2>
              </div>
              <span className="font-mono text-sm text-muted tabular-nums">{step + 1}/5</span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-paper">{current.gist}</p>
            <ol className="flex flex-col gap-3">
              {current.teach.map((line, i) => (
                <li key={i} className="flex gap-3 font-sans text-sm leading-relaxed text-muted">
                  <span className="mt-0.5 font-mono text-kicker text-brass tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            <div className="rounded-md bg-raised p-4">
              <p className="font-mono text-micro tracking-label text-danger uppercase">Trap</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-paper">{current.trap}</p>
            </div>
            <div className="rounded-md bg-raised p-4">
              <p className="font-mono text-micro tracking-label text-ok uppercase">Check</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-paper">{current.check}</p>
            </div>
          </article>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                disabled={step === 0}
                onClick={() => setRpdStep(step - 1)}
              >
                <ChevronLeft className="size-4" strokeWidth={1.6} />
                Back
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                disabled={step === 4}
                onClick={() => setRpdStep(step + 1)}
              >
                Next
                <ChevronRight className="size-4" strokeWidth={1.6} />
              </Button>
            </div>
            <Button
              variant={progress.rpdDone.includes(step) ? "outline" : "brass"}
              className="w-full sm:flex-1"
              onClick={() => {
                markRpdStep(step);
                if (step < 4) setRpdStep(step + 1);
              }}
            >
              {progress.rpdDone.includes(step) ? (
                <>
                  <Check className="size-4" strokeWidth={1.6} />
                  Marked
                </>
              ) : (
                "Mark this step"
              )}
            </Button>
          </div>
        </div>
      )}

      {tab === "Case" && <CasePlate />}
      {tab === "Script" && (
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-display text-2xl font-medium">{DEMO_SCRIPT.title}</h2>
            <p className="mt-1 font-sans text-sm text-muted">{DEMO_SCRIPT.room}</p>
          </div>
          <DemoClock />
          <BoardPlate kind="rpd" />
        </div>
      )}
      {tab === "Props" && <PropsPlate />}
    </div>
  );
}

function CasePlate() {
  return (
    <article className="plate flex flex-col gap-5 p-5">
      <h2 className="font-display text-2xl font-medium">{KENNEDY_CASE.title}</h2>
      <p className="font-sans text-sm leading-relaxed text-paper">{KENNEDY_CASE.patient}</p>
      <div>
        <p className="kicker">Abutments</p>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">{KENNEDY_CASE.abutments}</p>
      </div>
      <div>
        <p className="kicker">Floor of mouth</p>
        <p className="mt-1 font-sans text-sm leading-relaxed text-muted">{KENNEDY_CASE.floor}</p>
      </div>
      <ol className="flex flex-col gap-2">
        {KENNEDY_CASE.design.map((line, i) => (
          <li key={line} className="flex gap-3 font-sans text-sm text-paper">
            <span className="font-mono text-kicker text-brass">{String(i + 1).padStart(2, "0")}</span>
            {line}
          </li>
        ))}
      </ol>
      <p className="font-sans text-xs text-faint">{KENNEDY_CASE.note}</p>
    </article>
  );
}

function PropsPlate() {
  const progress = useProgress();
  return (
    <article className="plate p-5">
      <h2 className="font-display text-2xl font-medium">Prop list</h2>
      <p className="mt-1 font-sans text-sm text-muted">
        Lay this out before the students sit. Missing a surveyor means you are lecturing, not demonstrating.
      </p>
      <ul className="mt-4 flex flex-col">
        {DEMO_SCRIPT.props.map((p, i) => {
          const on = progress.propsChecked.includes(i);
          return (
            <li key={p} className="border-t border-rule first:border-t-0">
              <button
                type="button"
                onClick={() => toggleProp(i)}
                className="flex min-h-11 w-full items-start gap-3 py-3 text-left"
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm",
                    on ? "bg-brass text-ink" : "shadow-border",
                  )}
                  aria-hidden="true"
                >
                  {on && <Check className="size-3" strokeWidth={2} />}
                </span>
                <span className={cn("font-sans text-sm", on ? "text-muted line-through" : "text-paper")}>
                  {p}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 font-mono text-kicker text-faint tabular-nums">
        {progress.propsChecked.length} / {DEMO_SCRIPT.props.length} laid out
      </p>
    </article>
  );
}
