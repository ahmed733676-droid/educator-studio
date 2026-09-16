import { cn } from "@/lib/cn";

type Props = {
  step: number;
  className?: string;
};

const TEETH = [
  { id: "34", x: 42, y: 86, missing: false },
  { id: "33", x: 62, y: 114, missing: false },
  { id: "32", x: 84, y: 128, missing: false },
  { id: "31", x: 106, y: 134, missing: false },
  { id: "41", x: 128, y: 134, missing: false },
  { id: "42", x: 150, y: 128, missing: false },
  { id: "43", x: 172, y: 114, missing: false },
  { id: "44", x: 192, y: 86, missing: false },
  { id: "35", x: 32, y: 58, missing: true },
  { id: "36", x: 26, y: 32, missing: true },
  { id: "37", x: 28, y: 8, missing: true },
  { id: "45", x: 202, y: 58, missing: true },
  { id: "46", x: 208, y: 32, missing: true },
  { id: "47", x: 206, y: 8, missing: true },
] as const;

export function KennedyCast({ step, className }: Props) {
  const showRests = step >= 1;
  const showBar = step >= 2;
  const showClasp = step >= 3;
  const showMesh = step >= 4;

  return (
    <figure className={cn("raised overflow-hidden p-3", className)}>
      <svg
        viewBox="0 0 234 176"
        className="h-auto w-full"
        role="img"
        aria-label="Occlusal schematic of a mandibular Kennedy I arch. Remaining 34 to 44. Missing molars both sides."
      >
        <rect width="234" height="176" fill="var(--color-raised)" />

        <path
          d="M22 6 C18 48 28 96 48 128 C70 162 96 170 117 170 C138 170 164 162 186 128 C206 96 216 48 212 6"
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {showMesh && (
          <g stroke="var(--color-brass)" strokeWidth="0.7" opacity="0.9">
            <path
              d="M22 6 C20 28 22 48 28 70 L44 62 C38 42 36 24 38 8 Z"
              fill="var(--color-brass)"
              fillOpacity="0.14"
            />
            <path
              d="M212 6 C214 28 212 48 206 70 L190 62 C196 42 198 24 196 8 Z"
              fill="var(--color-brass)"
              fillOpacity="0.14"
            />
            <ellipse cx="30" cy="12" rx="7" ry="5" fill="none" />
            <ellipse cx="204" cy="12" rx="7" ry="5" fill="none" />
          </g>
        )}

        {showBar && (
          <path
            d="M54 102 C76 132 96 142 117 144 C138 142 158 132 180 102"
            fill="none"
            stroke="var(--color-brass)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        )}

        {TEETH.map((t) =>
          t.missing ? (
            <rect
              key={t.id}
              x={t.x - 8}
              y={t.y - 6}
              width="16"
              height="12"
              rx="3"
              fill="none"
              stroke="var(--color-faint)"
              strokeDasharray="2 2"
              strokeWidth="0.8"
            />
          ) : (
            <g key={t.id}>
              <rect
                x={t.x - 9}
                y={t.y - 8}
                width="18"
                height="16"
                rx="4"
                fill="var(--color-plate)"
                stroke="var(--color-paper)"
                strokeOpacity="0.55"
                strokeWidth="0.9"
              />
              <text
                x={t.x}
                y={t.y + 1.5}
                textAnchor="middle"
                fill="var(--color-paper)"
                fontSize="7"
                fontFamily="var(--font-sans)"
              >
                {t.id}
              </text>
            </g>
          ),
        )}

        <g stroke="var(--color-brass)" strokeWidth="0.9" fill="none">
          <path d="M32 94 H48" />
          <path d="M186 94 H202" />
          <path d="M117 20 V34" />
          <path d="M113 24 L117 20 L121 24" />
        </g>

        {showRests && (
          <g fill="var(--color-brass)">
            <ellipse cx="42" cy="76" rx="4.2" ry="2.6" />
            <ellipse cx="192" cy="76" rx="4.2" ry="2.6" />
            <ellipse cx="62" cy="104" rx="3.2" ry="2.2" />
            <ellipse cx="172" cy="104" rx="3.2" ry="2.2" />
          </g>
        )}

        {showClasp && (
          <g fill="none" stroke="var(--color-paper)" strokeWidth="1.3" strokeLinecap="round">
            <path d="M42 102 C26 100 24 86 36 80" />
            <path d="M192 102 C208 100 210 86 198 80" />
            <rect x="50" y="76" width="3.2" height="18" rx="0.6" fill="var(--color-paper)" stroke="none" />
            <rect x="181" y="76" width="3.2" height="18" rx="0.6" fill="var(--color-paper)" stroke="none" />
          </g>
        )}

        <text
          x="117"
          y="166"
          textAnchor="middle"
          fill="var(--color-muted)"
          fontSize="7"
          fontFamily="var(--font-sans)"
          letterSpacing="0.14em"
        >
          MANDIBLE · KENNEDY I
        </text>
      </svg>
      <figcaption className="mt-2 flex items-start justify-between gap-3 px-1 font-sans text-micro tracking-label text-muted uppercase">
        <span>Occlusal plate · teaching schematic</span>
        <span className="text-brass">Step {step + 1} / 5</span>
      </figcaption>
    </figure>
  );
}
