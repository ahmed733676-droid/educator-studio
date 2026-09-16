import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import { MapStrip } from "@/components/board-plate";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { COURSES, FAMILY, LOCKED, RPD_STEPS } from "@/lib/content";
import {
  osceScore,
  resetProgress,
  rpdPercent,
  sinusPercent,
  useProgress,
  type Progress,
} from "@/lib/progress";

export const Route = createFileRoute("/")({ component: Home });

function continueTarget(progress: Progress) {
  if (progress.lastRoute === "/bench") {
    return { to: "/bench" as const, label: "Open the bench", note: "Mark missing teeth" };
  }
  if (progress.lastRoute === "/osce" && osceScore(progress).answered < 10) {
    return { to: "/osce" as const, label: "Continue the paper", note: `${osceScore(progress).answered} of 10 marked` };
  }
  if (progress.lastRoute === "/sinus" && progress.sinusDone.length < 4) {
    return { to: "/sinus" as const, label: "Continue sinus", note: `${progress.sinusDone.length} of 4 walked` };
  }
  if (progress.rpdDone.length > 0 && progress.rpdDone.length < 5) {
    const step = RPD_STEPS[progress.rpdStep] ?? RPD_STEPS[0];
    return { to: "/rpd" as const, label: `Continue RPD · ${step.title}`, note: `${progress.rpdDone.length} of 5 marked` };
  }
  if (progress.lastRoute === "/rpd") {
    return { to: "/rpd" as const, label: "Open RPD map", note: "Kennedy I on the board" };
  }
  return null;
}

function Home() {
  const progress = useProgress();
  const osce = osceScore(progress);
  const cont = continueTarget(progress);

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-5">
        <p className="kicker">Course plate · on this device</p>
        <h1 className="max-w-[16ch] font-display text-4xl leading-[1.12] font-medium tracking-tight text-paper sm:text-5xl">
          The clinic, taught in order.
        </h1>
        <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-muted">
          Five-step RPD maps, a Kennedy design bench, and a closed sinus
          module for the 4–5 mm band. No backend. No invented results.
          Progress stays in the phone.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to={cont?.to ?? "/bench"}>
              {cont?.label ?? "Open the bench"}
              <ArrowRight className="size-4" strokeWidth={1.6} />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/rpd">RPD map</Link>
          </Button>
        </div>
        {cont && (
          <p className="font-mono text-kicker tracking-wide text-faint uppercase">{cont.note}</p>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <HeaderRow title="Tonight’s map" note="Kennedy I · 30 minutes" />
        <Link to="/rpd" className="block">
          <MapStrip done={progress.rpdDone} />
        </Link>
      </section>

      <FamilyStrip />

      <section className="flex flex-col gap-3">
        <HeaderRow title="Live" note="Three courses and a paper" />
        <ul className="flex flex-col gap-3">
          {COURSES.map((c) => {
            const pct =
              c.id === "rpd"
                ? rpdPercent(progress)
                : c.id === "sinus"
                  ? sinusPercent(progress)
                  : c.id === "osce"
                    ? Math.round((osce.answered / 10) * 100)
                    : 0;
            const sub =
              c.id === "rpd"
                ? `${pct}% walked`
                : c.id === "sinus"
                  ? `${pct}% walked`
                  : c.id === "osce"
                    ? `${osce.answered} / 10 marked`
                    : "Tap missing teeth";
            return (
              <li key={c.id}>
                <Link
                  to={c.href}
                  className="block rounded-xl bg-raised p-4 shadow-border transition-shadow duration-150 hover:shadow-brass"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="kicker">
                      {c.n} · {c.kicker}
                    </span>
                    <span className="font-mono text-kicker text-muted tabular-nums">{sub}</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">{c.title}</h2>
                  <p className="mt-2 max-w-[46ch] font-sans text-sm leading-relaxed text-muted">
                    {c.blurb}
                  </p>
                  <Bar pct={pct} />
                  <span className="mt-4 inline-flex items-center gap-1 font-sans text-sm text-paper">
                    Enter
                    <ArrowRight className="size-3.5" strokeWidth={1.6} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <HeaderRow title="Locked" note="Stubs, not fake lessons" />
        <ul className="grid gap-3 sm:grid-cols-3">
          {LOCKED.map((mod) => (
            <li key={mod.slug}>
              <Link
                to="/locked/$slug"
                params={{ slug: mod.slug }}
                className="flex h-full flex-col rounded-lg bg-plate p-4 shadow-border"
              >
                <Lock className="size-3.5 text-faint" strokeWidth={1.6} />
                <h3 className="mt-3 font-display text-lg font-medium">{mod.title}</h3>
                <p className="mt-1 font-sans text-sm text-muted">{mod.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="font-sans text-xs leading-relaxed text-faint">
        Mohamed Ayman Abdallah (Pharos M.Sc., closed sinus / 4–5 mm band, n = 26)
        stays a thesis. Educator is the teaching product next to it. Progress is
        stored under <span className="font-mono">educator.progress</span> on this
        device only.
        {" "}
        <button
          type="button"
          className="text-muted underline-offset-2 hover:underline"
          onClick={() => {
            if (window.confirm("Clear all studio progress on this device?")) resetProgress();
          }}
        >
          Clear progress
        </button>
      </p>
    </div>
  );
}

function Bar({ pct }: { pct: number }) {
  return (
    <div className="mt-4 h-1 overflow-hidden rounded-full bg-rule" aria-hidden="true">
      <div
        className="h-full bg-brass transition-[width] duration-200 ease-[var(--ease-out-studio)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function FamilyStrip() {
  return (
    <ul className="grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-rule">
      {FAMILY.map((f, i) => (
        <li
          key={f.name}
          className={cn("bg-plate px-3 py-3", i === 2 && "bg-raised")}
        >
          <p className="font-display text-sm font-medium text-paper">{f.name}</p>
          <p className="font-mono text-micro tracking-widest text-brass uppercase">{f.does}</p>
        </li>
      ))}
    </ul>
  );
}

function HeaderRow({ title, note }: { title: string; note: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <h2 className="font-display text-xl font-medium tracking-tight">{title}</h2>
      <p className="font-sans text-xs text-faint">{note}</p>
    </div>
  );
}
