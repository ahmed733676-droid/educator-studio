import { cn } from "@/lib/cn";
import { ARCH_ORDER, type ArchDesign, type ClaspKind } from "@/lib/rpd-engine";

const MAX_RIGHT = [17, 16, 15, 14, 13, 12, 11];
const MAX_LEFT = [21, 22, 23, 24, 25, 26, 27];
const MAND_RIGHT = [47, 46, 45, 44, 43, 42, 41];
const MAND_LEFT = [31, 32, 33, 34, 35, 36, 37];

type Props = {
  missing: Set<number>;
  onToggle: (id: number) => void;
  max: ArchDesign;
  mand: ArchDesign;
};

const MARK: Record<ClaspKind, string> = {
  rpi: "RPI",
  akers: "Ak",
  "reverse-akers": "rA",
  ring: "Rg",
  embrasure: "Em",
  combination: "WW",
};

function claspOn(design: ArchDesign, id: number) {
  return design.clasps.find((c) => c.teeth.includes(id)) ?? null;
}

function role(id: number) {
  const n = id % 10;
  if (n <= 2) return "incisor";
  if (n === 3) return "canine";
  if (n <= 5) return "premolar";
  return "molar";
}

function ToothShape({ id, missing, braced }: { id: number; missing: boolean; braced: boolean }) {
  const kind = role(id);
  const stroke = missing ? "var(--color-faint)" : braced ? "var(--color-brass)" : "var(--color-paper)";
  const fill = missing ? "var(--color-ink)" : "var(--color-plate)";
  const dash = missing ? "2 2" : undefined;
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-full" aria-hidden="true">
      {kind === "incisor" && (
        <path
          d="M12 8 Q20 5 28 8 L30 32 Q20 36 10 32 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="1.6"
          strokeDasharray={dash}
        />
      )}
      {kind === "canine" && (
        <path
          d="M20 5 L32 16 L28 34 L12 34 L8 16 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="1.6"
          strokeDasharray={dash}
        />
      )}
      {kind === "premolar" && (
        <>
          <rect
            x="8"
            y="7"
            width="24"
            height="26"
            rx="6"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.6"
            strokeDasharray={dash}
          />
          {!missing && (
            <path d="M14 20 H26" fill="none" stroke={stroke} strokeOpacity="0.45" strokeWidth="1.1" />
          )}
        </>
      )}
      {kind === "molar" && (
        <>
          <rect
            x="5"
            y="6"
            width="30"
            height="28"
            rx="7"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.6"
            strokeDasharray={dash}
          />
          {!missing && (
            <path
              d="M12 20 H28 M20 12 V28"
              fill="none"
              stroke={stroke}
              strokeOpacity="0.45"
              strokeWidth="1.1"
            />
          )}
        </>
      )}
    </svg>
  );
}

function Tooth({
  id,
  missing,
  mark,
  onToggle,
}: {
  id: number;
  missing: boolean;
  mark: string | null;
  onToggle: (id: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(id)}
      aria-pressed={missing}
      aria-label={`${id}${missing ? " missing" : " present"}`}
      className={cn(
        "flex min-h-16 w-full min-w-0 flex-col items-center justify-center gap-0.5 rounded-md px-0.5 py-1 transition-colors duration-150",
        missing ? "bg-ink shadow-border" : mark ? "bg-raised shadow-brass" : "bg-raised shadow-border",
      )}
    >
      <ToothShape id={id} missing={missing} braced={Boolean(mark)} />
      <span className="font-mono text-micro tabular-nums text-brass">{id}</span>
      <span
        className={cn(
          "font-display text-xs font-medium leading-none",
          missing ? "text-faint" : mark ? "text-brass" : "text-muted",
        )}
      >
        {missing ? "—" : (mark ?? "·")}
      </span>
    </button>
  );
}

function Quadrant({
  ids,
  missing,
  design,
  onToggle,
}: {
  ids: number[];
  missing: Set<number>;
  design: ArchDesign;
  onToggle: (id: number) => void;
}) {
  return (
    <div className="grid grid-cols-7 gap-1">
      {ids.map((id) => {
        const plan = claspOn(design, id);
        return (
          <Tooth
            key={id}
            id={id}
            missing={missing.has(id)}
            mark={plan ? MARK[plan.kind] : null}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
}

export function ArchChart({ missing, onToggle, max, mand }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <ArchBlock
        label="Maxilla"
        sub={max.label}
        right={MAX_RIGHT}
        left={MAX_LEFT}
        missing={missing}
        design={max}
        onToggle={onToggle}
      />
      <div className="h-px bg-rule" />
      <ArchBlock
        label="Mandible"
        sub={mand.label}
        right={MAND_RIGHT}
        left={MAND_LEFT}
        missing={missing}
        design={mand}
        onToggle={onToggle}
      />
    </div>
  );
}

function ArchBlock({
  label,
  sub,
  right,
  left,
  missing,
  design,
  onToggle,
}: {
  label: string;
  sub: string;
  right: number[];
  left: number[];
  missing: Set<number>;
  design: ArchDesign;
  onToggle: (id: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <p className="kicker">{label}</p>
        <p className="min-w-0 truncate font-sans text-xs text-muted">{sub}</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-mono text-micro tracking-label text-faint uppercase">Right · distal to mesial</p>
        <Quadrant ids={right} missing={missing} design={design} onToggle={onToggle} />
        <p className="mt-1 font-mono text-micro tracking-label text-faint uppercase">Left · mesial to distal</p>
        <Quadrant ids={left} missing={missing} design={design} onToggle={onToggle} />
      </div>
    </div>
  );
}

export function Legend() {
  return (
    <p className="font-sans text-xs leading-relaxed text-faint">
      Tap a standing tooth to open a saddle. Dark dashed = missing. Brass mark = clasp on a
      tooth that is still there — do not tap the abutment you want to clasp.{" "}
      <span className="text-muted">RPI · rA reverse Akers · Rg ring · Ak Akers · Em embrasure</span>
      . Third molars are off the chart (Applegate: not counted if not replaced).
    </p>
  );
}

export function MissingList({ missing }: { missing: Set<number> }) {
  const max = ARCH_ORDER.max.filter((id) => missing.has(id));
  const mand = ARCH_ORDER.mand.filter((id) => missing.has(id));
  if (max.length === 0 && mand.length === 0) {
    return <p className="font-sans text-sm text-muted">No saddles yet. Tap teeth, or deal a case.</p>;
  }
  return (
    <p className="font-mono text-sm text-paper">
      {mand.length > 0 && <span>Mand {mand.join(" ")}</span>}
      {mand.length > 0 && max.length > 0 && <span className="text-faint"> · </span>}
      {max.length > 0 && <span>Max {max.join(" ")}</span>}
    </p>
  );
}
