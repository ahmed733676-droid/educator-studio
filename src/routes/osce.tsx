import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { OSCE_STEMS } from "@/lib/content";
import { cn } from "@/lib/cn";
import { markOsce, osceScore, resetOsce, setLastRoute, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/osce")({ component: OscePaper });

function OscePaper() {
  const progress = useProgress();
  const score = osceScore(progress);
  const [mode, setMode] = useState<"paper" | "exam">("paper");
  const [open, setOpen] = useState<string | null>(OSCE_STEMS[0]?.id ?? null);

  useEffect(() => {
    setLastRoute("/osce");
  }, []);

  const examStem = useMemo(() => {
    const unanswered = OSCE_STEMS.find((s) => !progress.osce[s.id]);
    return unanswered ?? OSCE_STEMS[OSCE_STEMS.length - 1];
  }, [progress.osce]);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="kicker">OSCE</p>
        <h1 className="font-display text-3xl font-medium tracking-tight">Ten stems</h1>
        <p className="max-w-[42ch] font-sans text-sm leading-relaxed text-muted">
          Live mark. Pick an answer, see the result, then open the demonstrator
          voice. The paper is RPD and sinus. Nothing else.
        </p>
      </header>

      <div className="flex gap-1 rounded-lg bg-raised p-1 shadow-border">
        {(["paper", "exam"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              "h-10 flex-1 rounded-md font-sans text-sm font-medium capitalize transition-colors duration-150",
              mode === m ? "bg-paper text-ink" : "text-muted",
            )}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="raised flex items-center justify-between px-4 py-3">
        <p className="font-sans text-sm text-muted">
          <span className="font-mono text-paper tabular-nums">{score.correct}</span>
          {" "}correct of{" "}
          <span className="font-mono text-paper tabular-nums">{score.answered}</span>
          {" "}marked · 10 stems
        </p>
        {score.answered > 0 && (
          <button
            type="button"
            className="font-sans text-xs text-faint underline-offset-2 hover:text-muted hover:underline"
            onClick={() => {
              if (window.confirm("Clear OSCE marks on this device?")) resetOsce();
            }}
          >
            Clear marks
          </button>
        )}
      </div>

      {mode === "exam" ? (
        score.answered === 10 ? (
          <p className="font-display text-2xl font-medium">
            Paper in. {score.correct} of 10.
          </p>
        ) : (
          examStem && (
            <StemCard
              stem={examStem}
              expanded
              onToggle={() => undefined}
            />
          )
        )
      ) : (
        <ol className="flex flex-col gap-3">
          {OSCE_STEMS.map((stem) => (
            <StemCard
              key={stem.id}
              stem={stem}
              expanded={open === stem.id}
              onToggle={() => setOpen(open === stem.id ? null : stem.id)}
            />
          ))}
        </ol>
      )}

      {mode === "paper" && score.answered === 10 && (
        <p className="font-display text-xl font-medium">
          Paper in. {score.correct} of 10.
        </p>
      )}
    </div>
  );
}

function StemCard({
  stem,
  expanded,
  onToggle,
}: {
  stem: (typeof OSCE_STEMS)[number];
  expanded: boolean;
  onToggle: () => void;
}) {
  const progress = useProgress();
  const mark = progress.osce[stem.id];

  return (
    <article className="plate p-4">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-3 text-left"
        onClick={onToggle}
      >
        <div>
          <p className="kicker">
            {String(stem.n).padStart(2, "0")} · {stem.paper}
            {mark ? (mark.correct ? " · mark" : " · miss") : ""}
          </p>
          <p className="mt-1 font-display text-lg font-medium leading-snug">{stem.stem}</p>
        </div>
        {mark && (
          <span
            className={cn(
              "mt-1 shrink-0 font-mono text-kicker tracking-widest uppercase",
              mark.correct ? "text-ok" : "text-danger",
            )}
          >
            {mark.correct ? "1" : "0"}
          </span>
        )}
      </button>

      {expanded && (
        <div className="mt-4 flex flex-col gap-2">
          {stem.choices.map((choice, i) => {
            const picked = mark?.choice === i;
            const showKey = Boolean(mark);
            const isKey = i === stem.answer;
            return (
              <button
                key={choice}
                type="button"
                disabled={Boolean(mark)}
                onClick={() => markOsce(stem.id, i, i === stem.answer)}
                className={cn(
                  "min-h-11 rounded-md px-3 py-2 text-left font-sans text-sm leading-snug transition-colors duration-150",
                  picked && mark?.correct && "bg-ok/15 text-paper",
                  picked && mark && !mark.correct && "bg-danger/15 text-paper",
                  !picked && showKey && isKey && "bg-ok/10 text-paper",
                  !picked && !showKey && "bg-raised text-paper",
                )}
              >
                <span className="mr-2 inline-block w-4 font-mono text-kicker text-brass">
                  {String.fromCharCode(65 + i)}
                </span>
                {choice}
              </button>
            );
          })}

          {mark && (
            <div className="mt-2 rounded-md bg-raised p-4">
              <p className="kicker">Demonstrator</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-paper">
                {stem.model}
              </p>
            </div>
          )}

          {!mark && (
            <p className="pt-1 font-sans text-xs text-faint">
              Mark is live. You get one pick.
            </p>
          )}
        </div>
      )}
    </article>
  );
}
