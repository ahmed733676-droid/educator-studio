import { cn } from "@/lib/cn";

const RPD_BOARD = [
  { n: "01", title: "Survey", line: "Zero tilt. 0.25 mm mid-buccal 34 and 44. Shared path." },
  { n: "02", title: "Rests", line: "Mesial 34, 44. Cingulum 33, 43. No distal rest on a distal-extension abutment." },
  { n: "03", title: "Connectors", line: "Floor 9 mm. Lingual bar. Minors at right angles, not crowded." },
  { n: "04", title: "Retainers", line: "RPI both sides. Reciprocation on. The I-bar lets go." },
  { n: "05", title: "Finish", line: "Mesh to the pear-shaped pad. Metal try-in. Clasps last." },
] as const;

const SINUS_BOARD = [
  { n: "01", title: "Window", line: "RBH 4–5 mm. Width takes the fixture. Membrane intact. Outside that, not this module." },
  { n: "02", title: "Bounce", line: "Yield plus rebound plus negative Valsalva. A drop with no rebound is a hole." },
  { n: "03", title: "Abort", line: "Tear, wrong height, spin, acute sinus, unsafe patient. The fixture stays in the kit." },
] as const;

export function BoardPlate({ kind }: { kind: "rpd" | "sinus" }) {
  const rows = kind === "rpd" ? RPD_BOARD : SINUS_BOARD;
  return (
    <article className="plate flex flex-col gap-4 p-5">
      <div>
        <p className="kicker">{kind === "rpd" ? "Photograph this" : "Three rules"}</p>
        <h2 className="mt-1 font-display text-2xl font-medium">
          {kind === "rpd" ? "The board" : "On the wall"}
        </h2>
        <p className="mt-1 font-sans text-sm text-muted">
          {kind === "rpd"
            ? "Five lines. Students copy this, then you wipe the rest. The timer is visible."
            : "No six-month numbers. If a student asks whether it works: window, bounce, abort."}
        </p>
      </div>
      <ol className="flex flex-col">
        {rows.map((row, i) => (
          <li
            key={row.n}
            className={cn(
              "grid grid-cols-[2.5rem_1fr] gap-3 py-3",
              i > 0 && "border-t border-rule",
            )}
          >
            <span className="font-mono text-kicker text-brass tabular-nums">{row.n}</span>
            <div>
              <p className="font-display text-base font-medium text-paper">{row.title}</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-muted">{row.line}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

export function MapStrip({
  done,
  onOpen,
}: {
  done: number[];
  onOpen?: (n: number) => void;
}) {
  const steps = RPD_BOARD;
  return (
    <ol className="grid grid-cols-5 gap-1">
      {steps.map((s, i) => {
        const complete = done.includes(i);
        const inner = (
          <>
            <span className="font-mono text-micro tracking-widest text-brass uppercase">
              {s.n}
              {complete ? " ·" : ""}
            </span>
            <span className="mt-1 block truncate font-display text-xs font-medium text-paper sm:text-sm">
              {s.title}
            </span>
          </>
        );
        return (
          <li key={s.n}>
            {onOpen ? (
              <button
                type="button"
                onClick={() => onOpen(i)}
                className="flex h-full min-h-14 w-full flex-col items-start rounded-md bg-raised px-2 py-2 text-left shadow-border"
              >
                {inner}
              </button>
            ) : (
              <div className="flex h-full min-h-14 flex-col items-start rounded-md bg-raised px-2 py-2 shadow-border">
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
