import { createFileRoute } from "@tanstack/react-router";
import { Eraser, Layers, Shuffle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ArchChart, Legend, MissingList } from "@/components/arch-chart";
import { ClaspGlyph, ConnectorGlyph, KennedyGlyph } from "@/components/design-glyphs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  APPLEGATE,
  CLASP_ATLAS,
  DECK,
  dealCase,
  designBoth,
  headline,
  namedClasps,
  type ArchDesign,
  type ClaspKind,
  type Deal,
  type Kennedy,
} from "@/lib/rpd-engine";
import { setLastRoute } from "@/lib/progress";

export const Route = createFileRoute("/bench")({ component: DesignBench });

const KENNEDY: Kennedy[] = ["I", "II", "III", "IV"];

const ATLAS_ORDER: ClaspKind[] = [
  "rpi",
  "akers",
  "reverse-akers",
  "ring",
  "embrasure",
  "combination",
];

function DesignBench() {
  const [missing, setMissing] = useState<number[]>(() => [...DECK[0]!.missing]);
  const [floor, setFloor] = useState<5 | 8>(8);
  const [dealN, setDealN] = useState(0);
  const [card, setCard] = useState<Deal>(DECK[0]!);
  const [mode, setMode] = useState<"design" | "drill">("design");
  const [guess, setGuess] = useState<Kennedy | null>(null);
  const [atlas, setAtlas] = useState<ClaspKind | null>("ring");
  const [rulesOpen, setRulesOpen] = useState(false);

  useEffect(() => {
    setLastRoute("/bench");
  }, []);

  const set = useMemo(() => new Set(missing), [missing]);
  const both = useMemo(() => designBoth(set, floor), [set, floor]);

  function toggle(id: number) {
    setMissing((cur) => (cur.includes(id) ? cur.filter((t) => t !== id) : [...cur, id].sort((a, b) => a - b)));
    setGuess(null);
    setCard({
      id: "custom",
      title: "Your marks",
      kicker: "On the chart",
      missing: [],
      teach: "Classify the most posterior space first. Then the connector. Then one clasp per abutment.",
    });
  }

  function deal() {
    const next = dealN + 1;
    const dealt = dealCase(next);
    setDealN(next);
    setMissing([...dealt.missing]);
    setCard(dealt);
    setGuess(null);
    if (dealt.id === "short-floor") setFloor(5);
    else setFloor(8);
  }

  function clear() {
    setMissing([]);
    setGuess(null);
    setCard({
      id: "blank",
      title: "Blank arch",
      kicker: "Tap missing teeth",
      missing: [],
      teach: "Mark the holes. Leave the abutment standing if you want a clasp on it. Deal a case if you want one made for you.",
    });
  }

  const live = [both.mand, both.max].filter((a) => a.status === "rpd");
  const primary = live[0] ?? (both.mand.status !== "dentate" ? both.mand : both.max);
  const named = live.flatMap((a) => namedClasps(a));

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="kicker">Course 03 · Kennedy machine</p>
        <h1 className="font-display text-3xl font-medium tracking-tight">Design bench</h1>
        <p className="max-w-[44ch] font-sans text-sm leading-relaxed text-muted">
          Mark missing teeth. Applegate classifies. The sheet names the major
          connector and the clasp — size, shape, rest. Ring clasp and reverse
          Akers are first-class answers, not afterthoughts. Teaching defaults,
          not a laboratory prescription.
        </p>
      </header>

      <div className="flex gap-1 rounded-lg bg-raised p-1 shadow-border">
        {(["design", "drill"] as const).map((m) => (
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

      <div className="flex flex-wrap gap-2">
        <Button variant="brass" onClick={deal}>
          <Shuffle className="size-4" strokeWidth={1.6} />
          Deal a case
        </Button>
        <Button variant="outline" onClick={clear}>
          <Eraser className="size-4" strokeWidth={1.6} />
          Blank arch
        </Button>
      </div>

      <div className="raised px-4 py-3">
        <p className="kicker">{card.kicker}</p>
        <p className="mt-1 font-display text-lg font-medium">{card.title}</p>
        <div className="mt-2">
          <MissingList missing={set} />
        </div>
      </div>

      <ArchChart missing={set} onToggle={toggle} max={both.max} mand={both.mand} />
      <Legend />

      <div className="flex gap-1 rounded-lg bg-raised p-1 shadow-border">
        <button
          type="button"
          onClick={() => setFloor(8)}
          className={cn(
            "h-10 flex-1 rounded-md font-sans text-sm font-medium transition-colors duration-150",
            floor === 8 ? "bg-paper text-ink" : "text-muted",
          )}
        >
          Floor 8 mm
        </button>
        <button
          type="button"
          onClick={() => setFloor(5)}
          className={cn(
            "h-10 flex-1 rounded-md font-sans text-sm font-medium transition-colors duration-150",
            floor === 5 ? "bg-paper text-ink" : "text-muted",
          )}
        >
          Floor 5 mm
        </button>
      </div>

      {mode === "drill" && primary.status === "rpd" && (
        <article className="plate p-5">
          <p className="kicker">Call the class</p>
          <h2 className="mt-1 font-display text-2xl font-medium">Before the sheet</h2>
          <p className="mt-2 font-sans text-sm text-muted">
            Most posterior edentulous area. Then modifications. Then reveal.
          </p>
          <KennedyGlyph kennedy={guess} className="mt-4" />
          <div className="mt-4 grid grid-cols-4 gap-2">
            {KENNEDY.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setGuess(k)}
                className={cn(
                  "h-12 rounded-md font-display text-lg font-medium",
                  guess === k ? "bg-paper text-ink" : "bg-raised text-paper shadow-border",
                )}
              >
                {k}
              </button>
            ))}
          </div>
          {guess && (
            <p className="mt-4 font-sans text-sm leading-relaxed text-paper">
              You called Kennedy {guess}. The bench has {primary.label}.{" "}
              {guess === primary.kennedy ? "Mark." : "Miss. Applegate 5 — most posterior space wins."}
            </p>
          )}
        </article>
      )}

      {(mode === "design" || guess) && (
        <>
          {named.length > 0 && (
            <article className="plate p-5">
              <p className="kicker">Named clasps on this sheet</p>
              <ul className="mt-3 flex flex-col gap-3">
                {named.map((c) => (
                  <li key={c.title} className="flex items-center gap-3">
                    <ClaspGlyph kind={c.kind} />
                    <div className="min-w-0">
                      <p className="font-display text-lg font-medium">{c.title}</p>
                      <p className="font-mono text-kicker text-brass">
                        {c.gauge} · {CLASP_ATLAS[c.kind].shape}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          )}
          <Sheet design={both.mand} />
          <Sheet design={both.max} />
          {card.teach && (
            <article className="plate p-5">
              <p className="kicker">Demonstrator</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-paper">{card.teach}</p>
            </article>
          )}
        </>
      )}

      <section className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setRulesOpen((v) => !v)}
          className="flex items-center justify-between gap-3 rounded-lg bg-raised px-4 py-3 text-left shadow-border"
        >
          <span>
            <span className="kicker">Applegate</span>
            <span className="mt-1 block font-display text-lg font-medium">Eight rules</span>
          </span>
          <Layers className="size-4 text-brass" strokeWidth={1.6} />
        </button>
        {rulesOpen && (
          <ol className="plate flex flex-col gap-3 p-5">
            {APPLEGATE.map((r) => (
              <li key={r.n} className="flex gap-3">
                <span className="font-mono text-sm text-brass tabular-nums">{r.n}</span>
                <span className="font-sans text-sm leading-relaxed text-paper">{r.rule}</span>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-xl font-medium tracking-tight">Clasp atlas</h2>
          <p className="font-sans text-xs text-faint">Size and shape</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {ATLAS_ORDER.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setAtlas(atlas === k ? null : k)}
              className={cn(
                "h-10 rounded-md px-3 font-sans text-sm",
                atlas === k ? "bg-paper text-ink" : "bg-raised text-paper shadow-border",
              )}
            >
              {CLASP_ATLAS[k].title}
            </button>
          ))}
        </div>
        {atlas && <AtlasCard kind={atlas} />}
      </section>
    </div>
  );
}

function Sheet({ design }: { design: ArchDesign }) {
  if (design.status === "dentate") return null;
  return (
    <article className="plate flex flex-col gap-4 p-5">
      <div>
        <p className="kicker">{design.arch === "mand" ? "Mandible" : "Maxilla"}</p>
        <h2 className="mt-1 font-display text-2xl font-medium">{design.label}</h2>
      </div>

      {design.status === "complete" && (
        <p className="font-sans text-sm text-muted">{design.notes[0]}</p>
      )}

      {design.status === "rpd" && (
        <>
          <KennedyGlyph kennedy={design.kennedy} />

          <p className="font-sans text-sm leading-relaxed text-paper">{headline(design)}</p>

          <div>
            <p className="kicker">Major connector</p>
            <ConnectorGlyph name={design.majorConnector.name} arch={design.arch} />
            <p className="mt-1 font-display text-lg font-medium">{design.majorConnector.name}</p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
              {design.majorConnector.why}
            </p>
          </div>

          <div>
            <p className="kicker">Clasps · size and shape</p>
            <ul className="mt-2 flex flex-col gap-3">
              {design.clasps.map((c) => (
                <li key={c.title} className="flex gap-3 rounded-md bg-raised p-3">
                  <ClaspGlyph kind={c.kind} />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base font-medium">{c.title}</p>
                    <p className="mt-1 font-mono text-kicker text-brass">
                      {c.gauge} · {c.undercut}
                    </p>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-muted">
                      {CLASP_ATLAS[c.kind].shape}
                    </p>
                    <p className="mt-1 font-sans text-sm text-muted">{c.rest}</p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-paper">{c.why}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {design.indirectRetainers.length > 0 && (
            <div>
              <p className="kicker">Indirect retainers</p>
              <p className="mt-1 font-sans text-sm text-paper">
                {design.indirectRetainers.join(" · ")}
              </p>
            </div>
          )}

          <div>
            <p className="kicker">Rests on the sheet</p>
            <p className="mt-1 font-sans text-sm text-muted">{design.rests.join(" · ")}</p>
          </div>

          {design.traps.length > 0 && (
            <div className="rounded-md bg-raised p-4">
              <p className="font-mono text-micro tracking-label text-danger uppercase">Trap</p>
              {design.traps.map((t) => (
                <p key={t} className="mt-1 font-sans text-sm leading-relaxed text-paper">
                  {t}
                </p>
              ))}
            </div>
          )}

          {design.notes.map((n) => (
            <p key={n} className="font-sans text-sm leading-relaxed text-muted">
              {n}
            </p>
          ))}
        </>
      )}
    </article>
  );
}

function AtlasCard({ kind }: { kind: ClaspKind }) {
  const a = CLASP_ATLAS[kind];
  return (
    <article className="plate flex flex-col gap-3 p-5">
      <div className="flex items-start gap-3">
        <ClaspGlyph kind={kind} />
        <div>
          <p className="kicker">{a.latin}</p>
          <h3 className="mt-1 font-display text-2xl font-medium">{a.title}</h3>
        </div>
      </div>
      <p className="font-mono text-sm text-brass">
        {a.gauge} · {a.rest}
      </p>
      <p className="font-sans text-sm leading-relaxed text-paper">{a.shape}</p>
      <p className="font-sans text-sm leading-relaxed text-muted">{a.use}</p>
      <div className="rounded-md bg-raised p-4">
        <p className="font-mono text-micro tracking-label text-danger uppercase">Trap</p>
        <p className="mt-1 font-sans text-sm leading-relaxed text-paper">{a.trap}</p>
      </div>
    </article>
  );
}
