import { cn } from "@/lib/cn";

function Frame({
  children,
  label,
  className,
  viewBox = "0 0 320 150",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
  viewBox?: string;
}) {
  return (
    <figure className={cn("raised overflow-hidden p-3", className)}>
      <svg
        viewBox={viewBox}
        className="h-auto w-full"
        role="img"
        aria-label={label}
      >
        <rect width="100%" height="100%" fill="var(--color-raised)" />
        {children}
      </svg>
    </figure>
  );
}

export function SurveyFigure() {
  return (
    <Frame label="Surveyor path of insertion. Zero tilt. Mid-buccal 0.25 millimetre on 34 and 44.">
      <text x="12" y="22" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.14em">
        PATH OF INSERTION · ZERO TILT
      </text>
      <path d="M160 28 V128" stroke="var(--color-brass)" strokeWidth="1.4" />
      <path d="M156 34 L160 28 L164 34" fill="none" stroke="var(--color-brass)" strokeWidth="1.4" />
      <rect x="92" y="70" width="28" height="36" rx="6" fill="var(--color-plate)" stroke="var(--color-paper)" strokeOpacity="0.55" />
      <rect x="200" y="70" width="28" height="36" rx="6" fill="var(--color-plate)" stroke="var(--color-paper)" strokeOpacity="0.55" />
      <text x="106" y="92" fill="var(--color-paper)" fontSize="9" fontFamily="var(--font-sans)" textAnchor="middle">34</text>
      <text x="214" y="92" fill="var(--color-paper)" fontSize="9" fontFamily="var(--font-sans)" textAnchor="middle">44</text>
      <path d="M92 88 H78" stroke="var(--color-brass)" strokeWidth="1.2" />
      <path d="M228 88 H242" stroke="var(--color-brass)" strokeWidth="1.2" />
      <circle cx="74" cy="88" r="3" fill="none" stroke="var(--color-brass)" strokeWidth="1.2" />
      <circle cx="246" cy="88" r="3" fill="none" stroke="var(--color-brass)" strokeWidth="1.2" />
      <text x="12" y="140" fill="var(--color-brass)" fontSize="9" fontFamily="var(--font-mono)">
        0.25 mm mid-buccal · shared path
      </text>
    </Frame>
  );
}

export function RestsFigure() {
  return (
    <Frame label="Mesial rest versus distal rest on a Kennedy I abutment. Distal rest is a Class I lever.">
      <text x="24" y="22" fill="var(--color-danger)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.12em">
        DISTAL REST — CLASS I
      </text>
      <text x="176" y="22" fill="var(--color-ok)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.12em">
        MESIAL REST — RPI
      </text>
      <rect x="36" y="48" width="36" height="52" rx="6" fill="var(--color-plate)" stroke="var(--color-paper)" strokeOpacity="0.45" />
      <rect x="188" y="48" width="36" height="52" rx="6" fill="var(--color-plate)" stroke="var(--color-paper)" strokeOpacity="0.45" />
      <rect x="68" y="44" width="14" height="8" rx="2" fill="var(--color-danger)" />
      <rect x="180" y="44" width="14" height="8" rx="2" fill="var(--color-ok)" />
      <path d="M82 70 H118" stroke="var(--color-muted)" strokeWidth="8" strokeLinecap="round" />
      <path d="M164 70 H128" stroke="var(--color-muted)" strokeWidth="8" strokeLinecap="round" />
      <path d="M100 78 C108 92 118 100 128 108" fill="none" stroke="var(--color-danger)" strokeWidth="1.4" markerEnd="" />
      <path d="M110 86 L128 108 L118 96" fill="none" stroke="var(--color-danger)" strokeWidth="1.4" />
      <path d="M210 56 C222 48 232 58 226 78" fill="none" stroke="var(--color-paper)" strokeWidth="1.3" />
      <text x="24" y="140" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)">
        Saddle down, clasp tightens
      </text>
      <text x="176" y="140" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)">
        Saddle down, I-bar releases
      </text>
    </Frame>
  );
}

export function ConnectorsFigure() {
  return (
    <Frame label="Floor of mouth measurement. Nine millimetres allows a lingual bar. Five millimetres needs a linguoplate.">
      <text x="12" y="22" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.14em">
        FLOOR OF MOUTH
      </text>
      <path d="M24 48 H148" stroke="var(--color-paper)" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M24 108 H148" stroke="var(--color-brass)" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M86 48 V108" stroke="var(--color-brass)" strokeWidth="1" strokeDasharray="2 3" />
      <text x="90" y="82" fill="var(--color-brass)" fontSize="10" fontFamily="var(--font-mono)">9 mm</text>
      <text x="24" y="140" fill="var(--color-paper)" fontSize="9" fontFamily="var(--font-sans)">This case · lingual bar</text>
      <path d="M176 48 H296" stroke="var(--color-paper)" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M176 84 H296" stroke="var(--color-muted)" strokeWidth="10" strokeLinecap="round" />
      <text x="214" y="68" fill="var(--color-muted)" fontSize="10" fontFamily="var(--font-mono)">5 mm</text>
      <text x="176" y="140" fill="var(--color-muted)" fontSize="9" fontFamily="var(--font-sans)">Short floor · plate</text>
    </Frame>
  );
}

export function RetainersFigure() {
  return (
    <Frame label="RPI clasp assembly on a Kennedy I abutment: mesial rest, distal proximal plate, I-bar into 0.25 millimetre.">
      <text x="12" y="22" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.14em">
        RPI ON 34 / 44
      </text>
      <rect x="132" y="46" width="56" height="72" rx="10" fill="var(--color-plate)" stroke="var(--color-paper)" strokeOpacity="0.55" />
      <rect x="118" y="50" width="18" height="10" rx="2" fill="var(--color-brass)" />
      <rect x="184" y="58" width="8" height="40" rx="1.5" fill="var(--color-paper)" />
      <path d="M160 128 C118 124 108 96 124 78" fill="none" stroke="var(--color-paper)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="124" cy="78" r="3.2" fill="var(--color-brass)" />
      <text x="86" y="58" fill="var(--color-brass)" fontSize="11" fontFamily="var(--font-display)">R</text>
      <text x="204" y="80" fill="var(--color-brass)" fontSize="11" fontFamily="var(--font-display)">P</text>
      <text x="96" y="88" fill="var(--color-brass)" fontSize="11" fontFamily="var(--font-display)">I</text>
      <text x="12" y="140" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)">
        Mesial rest · distal plate · I-bar 0.25 mm
      </text>
    </Frame>
  );
}

export function FinishFigure() {
  return (
    <Frame label="Finish sequence: mesh to the pear-shaped pad, metal try-in, teeth, clasps last.">
      <text x="12" y="22" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.14em">
        SEQUENCE
      </text>
      {[
        { n: "1", t: "Mesh to pad", x: 28 },
        { n: "2", t: "Metal try-in", x: 104 },
        { n: "3", t: "Teeth", x: 180 },
        { n: "4", t: "Clasps last", x: 256 },
      ].map((s, i) => (
        <g key={s.n}>
          {i < 3 && (
            <path
              d={`M${s.x + 30} 70 H${[104, 180, 256][i] - 2}`}
              stroke="var(--color-rule)"
              strokeWidth="1"
            />
          )}
          <circle cx={s.x + 16} cy="70" r="14" fill="var(--color-plate)" stroke="var(--color-brass)" />
          <text
            x={s.x + 16}
            y="74"
            textAnchor="middle"
            fill="var(--color-brass)"
            fontSize="10"
            fontFamily="var(--font-mono)"
          >
            {s.n}
          </text>
          <text
            x={s.x + 16}
            y="108"
            textAnchor="middle"
            fill="var(--color-paper)"
            fontSize="8"
            fontFamily="var(--font-sans)"
          >
            {s.t}
          </text>
        </g>
      ))}
      <ellipse cx="280" cy="70" rx="10" ry="7" fill="none" stroke="var(--color-brass)" strokeWidth="1" />
      <text x="12" y="140" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)">
        Pear-shaped pad is a support area. Do not stop short.
      </text>
    </Frame>
  );
}

const STEP_FIGURES = [SurveyFigure, RestsFigure, ConnectorsFigure, RetainersFigure, FinishFigure];

export function StepFigure({ step }: { step: number }) {
  const Fig = STEP_FIGURES[step] ?? SurveyFigure;
  return <Fig />;
}

export function BandFigure() {
  return (
    <Frame
      label="Cross-section: crest, 4 to 5 millimetre residual bone, sinus floor, membrane. Closed approach in this band only."
      viewBox="0 0 320 156"
    >
      <path d="M0 86 C80 78 120 66 160 66 C200 66 240 78 320 86 L320 156 L0 156 Z" fill="var(--color-plate)" />
      <path
        d="M0 52 C70 40 110 32 160 32 C210 32 250 40 320 52"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="1.4"
      />
      <path
        d="M0 62 C70 50 110 42 160 42 C210 42 250 50 320 62"
        fill="none"
        stroke="var(--color-paper)"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <path d="M158 62 V86" stroke="var(--color-brass)" strokeWidth="1.2" />
      <path d="M154 66 L158 62 L162 66" fill="none" stroke="var(--color-brass)" strokeWidth="1.2" />
      <text x="168" y="80" fill="var(--color-brass)" fontSize="10" fontFamily="var(--font-mono)">
        4–5 mm
      </text>
      <text x="12" y="24" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.14em">
        MEMBRANE
      </text>
      <text x="12" y="112" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.14em">
        RESIDUAL BONE
      </text>
      <rect x="148" y="86" width="20" height="8" rx="1" fill="var(--color-paper)" fillOpacity="0.8" />
      <text x="12" y="148" fill="var(--color-faint)" fontSize="8" fontFamily="var(--font-sans)">
        Teaching section · not a case from the CRF
      </text>
    </Frame>
  );
}

export function BounceFigure() {
  return (
    <Frame label="Bounce is yield plus rebound. A drop with no rebound is a hole.">
      <text x="28" y="24" fill="var(--color-ok)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.12em">
        BOUNCE
      </text>
      <text x="188" y="24" fill="var(--color-danger)" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.12em">
        NOT BOUNCE
      </text>
      <path d="M48 48 C48 48 40 78 48 92 C56 106 40 128 48 128" fill="none" stroke="var(--color-ok)" strokeWidth="1.6" />
      <path d="M44 120 L48 128 L56 116" fill="none" stroke="var(--color-ok)" strokeWidth="1.4" />
      <path d="M208 48 C208 48 200 70 208 78 L208 128" fill="none" stroke="var(--color-danger)" strokeWidth="1.6" />
      <path d="M204 120 L208 128 L212 120" fill="none" stroke="var(--color-danger)" strokeWidth="1.4" />
      <text x="28" y="148" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)">
        Yield + rebound
      </text>
      <text x="188" y="148" fill="var(--color-muted)" fontSize="8" fontFamily="var(--font-sans)">
        Drop. A hole. Abort.
      </text>
    </Frame>
  );
}
