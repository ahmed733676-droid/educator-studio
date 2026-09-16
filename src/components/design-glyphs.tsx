import { cn } from "@/lib/cn";
import type { ArchId, ClaspKind, Kennedy } from "@/lib/rpd-engine";

const CLASSES: Kennedy[] = ["I", "II", "III", "IV"];

/** Occlusal schematic of Kennedy classes. Dark segments = saddles. */
export function KennedyGlyph({
  kennedy,
  className,
}: {
  kennedy: Kennedy | null;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-4 gap-2", className)}>
      {CLASSES.map((k) => (
        <figure
          key={k}
          className={cn(
            "flex flex-col items-center gap-1 rounded-md p-2",
            kennedy === k ? "bg-raised shadow-brass" : "bg-raised/60 shadow-border",
          )}
        >
          <svg viewBox="0 0 48 36" className="h-8 w-full" aria-hidden="true">
            <path
              d="M6 6 C4 16 10 30 24 30 C38 30 44 16 42 6"
              fill="none"
              stroke="var(--color-rule)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {k === "I" && (
              <path
                d="M6 6 C5 12 6 16 8 20 M42 6 C43 12 42 16 40 20"
                fill="none"
                stroke="var(--color-brass)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            )}
            {k === "II" && (
              <path
                d="M6 6 C5 12 6 16 8 20"
                fill="none"
                stroke="var(--color-brass)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            )}
            {k === "III" && (
              <path
                d="M8 16 C9 20 11 23 14 25"
                fill="none"
                stroke="var(--color-brass)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            )}
            {k === "IV" && (
              <path
                d="M16 28 C20 31 24 32 28 31 C32 30 34 28 36 26"
                fill="none"
                stroke="var(--color-brass)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            )}
          </svg>
          <figcaption
            className={cn(
              "font-mono text-micro tracking-label uppercase",
              kennedy === k ? "text-brass" : "text-faint",
            )}
          >
            {k}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ClaspGlyph({ kind }: { kind: ClaspKind }) {
  return (
    <svg
      viewBox="0 0 72 48"
      className="h-12 w-20 shrink-0"
      aria-hidden="true"
    >
      {kind === "rpi" && <RpiGlyph />}
      {kind === "akers" && <AkersGlyph />}
      {kind === "reverse-akers" && <ReverseGlyph />}
      {kind === "ring" && <RingGlyph />}
      {kind === "embrasure" && <EmbrasureGlyph />}
      {kind === "combination" && <ComboGlyph />}
    </svg>
  );
}

function Tooth({ x, y, w = 16, h = 22 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="3"
      fill="var(--color-plate)"
      stroke="var(--color-paper)"
      strokeOpacity="0.45"
    />
  );
}

function Rest({ x, y }: { x: number; y: number }) {
  return <rect x={x} y={y} width="7" height="4" rx="1" fill="var(--color-brass)" />;
}

function RpiGlyph() {
  return (
    <>
      <Tooth x={28} y={10} />
      <Rest x={22} y={18} />
      <path d="M44 14 V32" stroke="var(--color-brass)" strokeWidth="2.2" />
      <path
        d="M36 32 C36 40 28 42 24 36"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="24" cy="36" r="1.6" fill="var(--color-brass)" />
    </>
  );
}

function AkersGlyph() {
  return (
    <>
      <Tooth x={28} y={10} />
      <Rest x={43} y={18} />
      <path
        d="M46 22 C56 14 56 34 36 36 C24 37 20 28 24 22"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="24" cy="22" r="1.6" fill="var(--color-brass)" />
    </>
  );
}

function ReverseGlyph() {
  return (
    <>
      <Tooth x={28} y={10} />
      <Rest x={22} y={18} />
      <path
        d="M24 22 C14 14 14 34 36 36 C48 37 52 28 48 22"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="48" cy="22" r="1.6" fill="var(--color-brass)" />
    </>
  );
}

function RingGlyph() {
  return (
    <>
      <rect
        x={24}
        y={10}
        width="24"
        height="24"
        rx="5"
        fill="var(--color-plate)"
        stroke="var(--color-paper)"
        strokeOpacity="0.45"
      />
      <Rest x={20} y={18} />
      <path
        d="M22 22 C18 12 54 8 54 24 C54 38 22 40 22 26"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M22 18 H14 V30" fill="none" stroke="var(--color-brass)" strokeWidth="1.6" />
      <circle cx="22" cy="28" r="1.6" fill="var(--color-brass)" />
    </>
  );
}

function EmbrasureGlyph() {
  return (
    <>
      <Tooth x={14} y={12} w={18} />
      <Tooth x={40} y={12} w={18} />
      <Rest x={24} y={10} />
      <Rest x={42} y={10} />
      <path
        d="M20 22 C10 16 10 36 32 34"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M52 22 C62 16 62 36 40 34"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  );
}

function ComboGlyph() {
  return (
    <>
      <Tooth x={28} y={10} />
      <Rest x={22} y={18} />
      <path
        d="M36 32 C40 38 28 44 22 36 C20 32 26 30 28 34 C30 38 22 40 20 36"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M44 14 V30" stroke="var(--color-paper)" strokeOpacity="0.55" strokeWidth="2" />
    </>
  );
}

export function ConnectorGlyph({
  name,
  arch,
}: {
  name: string;
  arch: ArchId;
}) {
  const kind = connectorKind(name, arch);
  return (
    <svg
      viewBox="0 0 200 72"
      className="h-16 w-full"
      role="img"
      aria-label={name}
    >
      <path
        d="M18 10 C14 28 28 62 100 62 C172 62 186 28 182 10"
        fill="none"
        stroke="var(--color-rule)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {kind === "bar" && (
        <path
          d="M48 42 C72 56 88 60 100 60 C112 60 128 56 152 42"
          fill="none"
          stroke="var(--color-brass)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      )}
      {kind === "plate" && (
        <path
          d="M42 28 C70 54 88 58 100 58 C112 58 130 54 158 28 L150 18 C124 40 110 44 100 44 C90 44 76 40 50 18 Z"
          fill="var(--color-brass)"
          fillOpacity="0.35"
          stroke="var(--color-brass)"
          strokeWidth="1.4"
        />
      )}
      {kind === "ap" && (
        <>
          <path
            d="M46 22 C80 28 120 28 154 22"
            fill="none"
            stroke="var(--color-brass)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M58 48 C86 56 114 56 142 48"
            fill="none"
            stroke="var(--color-brass)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </>
      )}
      {kind === "strap" && (
        <path
          d="M50 34 C86 44 114 44 150 34"
          fill="none"
          stroke="var(--color-brass)"
          strokeWidth="10"
          strokeLinecap="round"
        />
      )}
      {kind === "full" && (
        <path
          d="M28 14 C40 40 70 58 100 58 C130 58 160 40 172 14 Z"
          fill="var(--color-brass)"
          fillOpacity="0.28"
          stroke="var(--color-brass)"
          strokeWidth="1.4"
        />
      )}
    </svg>
  );
}

function connectorKind(name: string, arch: ArchId): "bar" | "plate" | "ap" | "strap" | "full" | "none" {
  const n = name.toLowerCase();
  if (n.includes("linguoplate") || (arch === "mand" && n.includes("plate"))) return "plate";
  if (n.includes("lingual bar")) return "bar";
  if (n.includes("a-p") || n.includes("or a-p")) return "ap";
  if (n.includes("full palatal")) return "full";
  if (n.includes("complete")) return "full";
  if (n.includes("strap")) return "strap";
  if (n === "none") return "none";
  return arch === "mand" ? "bar" : "strap";
}
