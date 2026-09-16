/** RPD design bench. Applegate, McCracken, Stewart. Teaching defaults, not a lab Rx. */

export type ArchId = "max" | "mand";
export type Kennedy = "I" | "II" | "III" | "IV";
export type ClaspKind =
  | "rpi"
  | "akers"
  | "reverse-akers"
  | "ring"
  | "embrasure"
  | "combination";

export const MAX_ORDER = [17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27] as const;
export const MAND_ORDER = [47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37] as const;

export const ARCH_ORDER: Record<ArchId, readonly number[]> = {
  max: MAX_ORDER,
  mand: MAND_ORDER,
};

export type Span = {
  teeth: number[];
  start: number;
  end: number;
  distalExtension: boolean;
  crossesMidline: boolean;
  posteriorScore: number;
};

export type ClaspPlan = {
  teeth: number[];
  kind: ClaspKind;
  title: string;
  rest: string;
  undercut: string;
  gauge: string;
  why: string;
  trap: string;
};

export type ArchDesign = {
  arch: ArchId;
  status: "dentate" | "complete" | "rpd";
  kennedy: Kennedy | null;
  modification: number;
  label: string;
  spans: Span[];
  clasps: ClaspPlan[];
  majorConnector: { name: string; why: string };
  indirectRetainers: string[];
  rests: string[];
  notes: string[];
  traps: string[];
};

export type BenchDesign = {
  max: ArchDesign;
  mand: ArchDesign;
};

export const APPLEGATE = [
  { n: 1, rule: "Classify after planned extractions, not before." },
  { n: 2, rule: "A missing third molar not to be replaced is not counted. This chart omits 8s." },
  { n: 3, rule: "A third molar used as an abutment is counted." },
  { n: 4, rule: "A second molar not to be replaced, with no opposing 7, may be ignored. This bench still marks it if you tap it." },
  { n: 5, rule: "The most posterior edentulous area determines the class." },
  { n: 6, rule: "Other edentulous areas are modifications, counted not measured." },
  { n: 7, rule: "The extent of a modification is ignored — only how many extra spaces." },
  { n: 8, rule: "Class IV has no modifications. A posterior hole would have stolen the class." },
] as const;

export const CLASP_ATLAS: Record<
  ClaspKind,
  { title: string; latin: string; gauge: string; rest: string; shape: string; use: string; trap: string }
> = {
  rpi: {
    title: "RPI",
    latin: "Mesial rest, proximal plate, I-bar",
    gauge: "0.25 mm",
    rest: "Mesial fossa of the abutment",
    shape: "Infrabulge I-bar into mid-buccal. Distal proximal plate.",
    use: "Default on a distal-extension abutment (Kennedy I or II).",
    trap: "Cast Akers with a distal rest. That is a Class I lever. The clasp tightens as the saddle sinks.",
  },
  akers: {
    title: "Akers",
    latin: "Circumferential / circlet",
    gauge: "0.25 mm",
    rest: "Fossa adjacent to the edentulous space",
    shape: "Suprabulge arm from the rest, tip in the far-side undercut. Reciprocal on the opposite surface.",
    use: "Tooth-borne abutments (Kennedy III, IV) when the undercut is away from the space.",
    trap: "Using it as the default on a free-end abutment.",
  },
  "reverse-akers": {
    title: "Reverse Akers",
    latin: "Reverse circlet",
    gauge: "0.25 mm",
    rest: "Away from the edentulous space",
    shape: "Arm approaches from the far side. Tip engages the undercut next to the space.",
    use: "Bounded span whose usable undercut sits adjacent to the saddle — typically the mesial abutment of a posterior modification space.",
    trap: "Putting a distal rest on a free-end abutment and calling it reverse circlet. That still torques.",
  },
  ring: {
    title: "Ring clasp",
    latin: "Ring",
    gauge: "0.25 mm",
    rest: "Mesial occlusal, plus a supporting strut",
    shape: "Encircles nearly 360°. Tip in the distolingual (or distobuccal) undercut of a tilted molar.",
    use: "Mandibular molar as the distal abutment of a bounded span — the lone, mesially tilted 6 or 7.",
    trap: "A ring with no supporting strut. It flexes, it doesn't clasp.",
  },
  embrasure: {
    title: "Embrasure clasp",
    latin: "Double Akers",
    gauge: "0.25 mm each tip",
    rest: "Occlusal rests both teeth, joined through the embrasure",
    shape: "Two circlets sharing a minor connector. Needs a prepared rest seat both sides or it wedges.",
    use: "Dentate side of a Kennedy II — no saddle on that side, still need bracing and indirect retention help.",
    trap: "Forcing it through an unprepared embrasure. The framework will not seat.",
  },
  combination: {
    title: "Combination",
    latin: "Wrought-wire retentive + cast reciprocal",
    gauge: "0.50 mm",
    rest: "Mesial, as for RPI",
    shape: "Round wrought-wire arm into a deeper undercut. Cast plate or arm for reciprocation.",
    use: "Distal-extension abutment when the vestibule or a bony undercut blocks the I-bar.",
    trap: "Casting the retentive arm in Co-Cr at 0.50 mm. That is how you fatigue a clasp or fail to seat it.",
  },
};

export function isPresent(missing: Set<number>, id: number) {
  return !missing.has(id);
}

export function archMissing(missing: Set<number>, arch: ArchId) {
  return ARCH_ORDER[arch].filter((id) => missing.has(id));
}

function spansFor(order: readonly number[], missing: Set<number>): Span[] {
  const spans: Span[] = [];
  let i = 0;
  while (i < order.length) {
    if (!missing.has(order[i]!)) {
      i += 1;
      continue;
    }
    const start = i;
    const teeth: number[] = [];
    while (i < order.length && missing.has(order[i]!)) {
      teeth.push(order[i]!);
      i += 1;
    }
    const end = i - 1;
    const distalExtension = start === 0 || end === order.length - 1;
    const crossesMidline = start <= 6 && end >= 7;
    const posteriorScore = Math.min(start, order.length - 1 - end);
    spans.push({ teeth, start, end, distalExtension, crossesMidline, posteriorScore });
  }
  return spans;
}

function kennedyLabel(k: Kennedy, mod: number) {
  if (mod <= 0) return `Kennedy ${k}`;
  return `Kennedy ${k} modification ${mod}`;
}

function abutmentsOf(order: readonly number[], span: Span, missing: Set<number>) {
  const out: { tooth: number; pole: "posterior" | "anterior" }[] = [];
  const left = span.start >= 7;
  const right = span.end <= 6;
  const cross = span.start <= 6 && span.end >= 7;

  const take = (idx: number, pole: "posterior" | "anterior") => {
    if (idx < 0 || idx >= order.length) return;
    const tooth = order[idx]!;
    if (!missing.has(tooth)) out.push({ tooth, pole });
  };

  if (right && !cross) {
    take(span.start - 1, "posterior");
    take(span.end + 1, "anterior");
  } else if (left && !cross) {
    take(span.end + 1, "posterior");
    take(span.start - 1, "anterior");
  } else {
    take(span.start - 1, "posterior");
    take(span.end + 1, "posterior");
  }
  return out;
}

function toothRole(id: number) {
  const n = id % 10;
  if (n === 1 || n === 2) return "incisor";
  if (n === 3) return "canine";
  if (n === 4 || n === 5) return "premolar";
  return "molar";
}

function isMolar(id: number) {
  return toothRole(id) === "molar";
}

function cingulumRest(id: number) {
  return toothRole(id) === "canine" ? `cingulum ${id}` : `mesial ${id}`;
}

function designArch(arch: ArchId, missing: Set<number>, floorMm: 5 | 8): ArchDesign {
  const order = ARCH_ORDER[arch];
  const present = order.filter((id) => !missing.has(id));
  const spans = spansFor(order, missing);
  const notes: string[] = [];
  const traps: string[] = [];

  if (present.length === order.length) {
    return {
      arch,
      status: "dentate",
      kennedy: null,
      modification: 0,
      label: arch === "mand" ? "Mandible intact" : "Maxilla intact",
      spans: [],
      clasps: [],
      majorConnector: { name: "None", why: "No saddle. This is not an RPD arch." },
      indirectRetainers: [],
      rests: [],
      notes: ["Mark a tooth missing to open a saddle."],
      traps: [],
    };
  }

  if (present.length === 0) {
    return {
      arch,
      status: "complete",
      kennedy: null,
      modification: 0,
      label: "Complete edentulism",
      spans,
      clasps: [],
      majorConnector: { name: "Complete denture", why: "No abutments. Not this bench." },
      indirectRetainers: [],
      rests: [],
      notes: ["That is a complete denture. Kennedy does not apply."],
      traps: ["Do not invent a 'Kennedy I with no teeth'."],
    };
  }

  const de = spans.filter((s) => s.distalExtension);
  const deSides = new Set<string>();
  for (const s of de) {
    if (s.start === 0) deSides.add("right");
    if (s.end === order.length - 1) deSides.add("left");
  }

  let kennedy: Kennedy;
  let determining: Span[];
  if (deSides.size === 2) {
    kennedy = "I";
    determining = de;
  } else if (deSides.size === 1) {
    kennedy = "II";
    determining = de;
  } else {
    const ranked = [...spans].sort((a, b) => a.posteriorScore - b.posteriorScore);
    const best = ranked[0]!;
    const top = ranked.filter((s) => s.posteriorScore === best.posteriorScore);
    if (top.length === 1 && best.crossesMidline) {
      kennedy = "IV";
      determining = [best];
    } else {
      kennedy = "III";
      determining = [best];
    }
  }

  const determiningTeeth = new Set(determining.flatMap((s) => s.teeth));
  const extra = spans.filter((s) => s.teeth.some((t) => !determiningTeeth.has(t)));
  const modification = kennedy === "IV" ? 0 : extra.length;
  if (kennedy === "IV" && extra.length) {
    notes.push("Applegate 8: Class IV has no modifications. Extra posterior spaces would have taken the class.");
  }

  const clasps: ClaspPlan[] = [];
  const rests: string[] = [];
  const used = new Set<number>();

  const pushClasp = (plan: ClaspPlan) => {
    for (const t of plan.teeth) used.add(t);
    clasps.push(plan);
    rests.push(plan.rest);
  };

  for (const span of spans) {
    const abut = abutmentsOf(order, span, missing);
    for (const { tooth, pole } of abut) {
      if (used.has(tooth)) continue;
      if (span.distalExtension) {
        pushClasp({
          teeth: [tooth],
          kind: "rpi",
          title: `RPI on ${tooth}`,
          rest: `mesial ${tooth}`,
          undercut: "mid-buccal",
          gauge: "0.25 mm",
          why: "Distal-extension abutment. Mesial rest so the I-bar lets go when the saddle sinks.",
          trap: "Distal rest plus cast Akers. Class I lever. The tooth is wound every chew.",
        });
        traps.push(`No distal rest on ${tooth}.`);
        continue;
      }

      if (arch === "mand" && isMolar(tooth) && pole === "posterior") {
        pushClasp({
          teeth: [tooth],
          kind: "ring",
          title: `Ring clasp on ${tooth}`,
          rest: `mesial ${tooth} + supporting strut`,
          undercut: "distolingual",
          gauge: "0.25 mm",
          why: "Mandibular molar distal abutment, usually mesially tilted. The undercut lives on the distal. A ring with a strut is how you use it.",
          trap: "A ring with no strut is a wire, not a clasp.",
        });
        continue;
      }

      if (pole === "anterior" && !isMolar(tooth) && !span.crossesMidline) {
        pushClasp({
          teeth: [tooth],
          kind: "reverse-akers",
          title: `Reverse Akers on ${tooth}`,
          rest: `mesial ${tooth}`,
          undercut: "adjacent to the space (distal)",
          gauge: "0.25 mm",
          why: "Bounded posterior span. Usable undercut sits next to the saddle, so the rest stays away and the arm approaches from the far side.",
          trap: "Calling any circlet 'reverse' because it looks backwards on the sheet. Reverse means rest away, tip next to the space.",
        });
        continue;
      }

      const restSide = pole === "posterior" ? "mesial" : "distal";
      pushClasp({
        teeth: [tooth],
        kind: "akers",
        title: `Akers on ${tooth}`,
        rest: toothRole(tooth) === "canine" ? `cingulum ${tooth}` : `${restSide} ${tooth}`,
        undercut: "far line angle, 0.25 mm",
        gauge: "0.25 mm",
        why: "Tooth-borne abutment. Rest adjacent to the space. Reciprocal on the other surface.",
        trap: "No rest. A clasp without a rest is an orthodontic appliance.",
      });
    }
  }

  if (kennedy === "II") {
    const deSpan = de[0]!;
    const dentateIsRight = deSpan.end === order.length - 1;
    const a = dentateIsRight ? order[0]! : order[order.length - 1]!;
    const b = dentateIsRight ? order[1]! : order[order.length - 2]!;
    if (!missing.has(a) && !missing.has(b) && !used.has(a) && !used.has(b)) {
      pushClasp({
        teeth: [a, b],
        kind: "embrasure",
        title: `Embrasure clasp ${a}–${b}`,
        rest: `occlusal ${a} and ${b}`,
        undercut: "buccal 0.25 mm each",
        gauge: "0.25 mm",
        why: "Kennedy II dentate side. No saddle there, still need two rests and bracing through a prepared embrasure.",
        trap: "Threading Co-Cr through an unprepared contact. It will not seat.",
      });
    }
  }

  const indirectRetainers: string[] = [];
  if (kennedy === "I" || kennedy === "II") {
    const canines = arch === "mand" ? [33, 43] : [13, 23];
    const fulcrum = clasps.filter((c) => c.kind === "rpi").flatMap((c) => c.teeth);
    for (const c of canines) {
      if (!missing.has(c) && !fulcrum.includes(c)) {
        indirectRetainers.push(cingulumRest(c));
      }
    }
    if (indirectRetainers.length === 0) {
      const premolars = arch === "mand" ? [34, 44] : [14, 24];
      for (const p of premolars) {
        if (!missing.has(p) && !used.has(p)) indirectRetainers.push(`mesial ${p}`);
      }
    }
    notes.push("Indirect retainers sit as far from the fulcrum line as remaining teeth allow.");
  }

  let majorConnector: { name: string; why: string };
  if (arch === "mand") {
    if (floorMm <= 5) {
      majorConnector = {
        name: "Linguoplate",
        why: "Floor of mouth 5 mm. A bar wants 7–8 mm (height plus gingival clearance). Short floor = plate.",
      };
    } else if (present.filter((id) => toothRole(id) === "incisor" || toothRole(id) === "canine").length <= 3) {
      majorConnector = {
        name: "Linguoplate",
        why: "Few remaining anteriors. The plate braces them and lets you add a tooth later.",
      };
    } else {
      majorConnector = {
        name: "Lingual bar",
        why: "Floor 8 mm. Bar height 3–4 mm plus 3–4 mm off the gingiva. Do not rest metal on tissue.",
      };
    }
  } else if (kennedy === "I") {
    majorConnector = {
      name: present.length <= 6 ? "Full palatal plate" : "A-P palatal strap",
      why:
        present.length <= 6
          ? "Long saddles, few abutments. The plate shares support with the palate."
          : "Bilateral distal extension. Anterior and posterior straps; open in the middle so the tongue has a vault.",
    };
  } else if (kennedy === "II") {
    majorConnector = {
      name: "A-P palatal strap",
      why: "Unilateral free-end. Two straps brace the palatal plate against rotation around the fulcrum.",
    };
  } else if (kennedy === "IV") {
    majorConnector = {
      name: "Palatal strap (wide) or A-P strap",
      why: "Anterior saddle crossing the midline. Width for rigidity. U-shaped only if a torus or a gag forces it.",
    };
    traps.push("U-shaped ('horseshoe') as decoration. It flexes. Use it only when anatomy forbids a strap.");
  } else {
    majorConnector = {
      name: "Single palatal strap",
      why: "Tooth-borne. One strap, at least 8 mm wide, across the palate at the saddle.",
    };
  }

  if (kennedy === "I" || kennedy === "II") {
    notes.push("Combination clasp (wrought 0.50 mm) is the escape hatch if the vestibule blocks the I-bar. Say why you left RPI.");
  }

  if (present.length <= 3) {
    notes.push("Few abutments. Surveyed crowns or an overdenture may be the honest answer. This sheet still classifies.");
  }

  return {
    arch,
    status: "rpd",
    kennedy,
    modification,
    label: kennedyLabel(kennedy, modification) + (arch === "mand" ? " — mandible" : " — maxilla"),
    spans,
    clasps,
    majorConnector,
    indirectRetainers,
    rests: [...new Set([...rests, ...indirectRetainers])],
    notes,
    traps,
  };
}

export function designBoth(missing: Iterable<number>, floorMm: 5 | 8 = 8): BenchDesign {
  const set = missing instanceof Set ? missing : new Set(missing);
  return {
    max: designArch("max", set, floorMm),
    mand: designArch("mand", set, floorMm),
  };
}

export function headline(d: ArchDesign): string {
  if (d.status !== "rpd") return d.label;
  return [d.label, d.majorConnector.name, ...d.clasps.map((c) => c.title)].join(" · ");
}

export function namedClasps(d: ArchDesign): ClaspPlan[] {
  return d.clasps.filter((c) => c.kind === "ring" || c.kind === "reverse-akers");
}

export type Deal = {
  id: string;
  title: string;
  kicker: string;
  missing: number[];
  teach: string;
};

export const DECK: Deal[] = [
  {
    id: "ki-mand",
    title: "Bilateral free-end",
    kicker: "The teaching mandible",
    missing: [37, 36, 47, 46],
    teach: "Kennedy I. RPI on 35 and 45. Lingual bar. Cingulum rests 33 and 43. No distal rest on a free-end abutment.",
  },
  {
    id: "lone-47",
    title: "The lone 47",
    kicker: "Ring clasp territory",
    missing: [46, 45, 44],
    teach: "Kennedy III. Leave 47 standing. It is a mandibular molar distal abutment, usually tilted. Ring clasp, mesial rest, supporting strut, 0.25 mm distolingual. Reverse Akers on 43.",
  },
  {
    id: "ring-rev",
    title: "Ring and reverse",
    kicker: "Both named clasps on one sheet",
    missing: [26, 25, 16],
    teach: "Kennedy III modification 1 maxilla. Reverse Akers on the mesial abutments of the bounded saddles. Conventional Akers on 17 and 27 unless a tilt argues for a ring.",
  },
  {
    id: "kii",
    title: "Unilateral free-end",
    kicker: "One saddle that doesn't stop",
    missing: [47, 46],
    teach: "Kennedy II. RPI on 45. Embrasure clasp on 36–37. Indirect retainer as far from the 45 fulcrum as the canines allow.",
  },
  {
    id: "kii-mod",
    title: "II modification 1",
    kicker: "Free-end plus a bounded hole",
    missing: [47, 46, 35, 36],
    teach: "The most posterior space is the free-end — that is Class II. The other space is a modification. Reverse Akers often sits on the mesial abutment of that bounded saddle. RPI still on the free-end abutment.",
  },
  {
    id: "kiii",
    title: "Bounded saddle",
    kicker: "Tooth-borne, both ends",
    missing: [36, 35],
    teach: "Kennedy III. Reverse Akers on 34. Ring clasp on 37. No indirect retainer — there is no free-end to rotate.",
  },
  {
    id: "kiv",
    title: "Anterior crossing",
    kicker: "Class IV has no modifications",
    missing: [12, 11, 21, 22],
    teach: "Kennedy IV maxilla. The determining space crosses the midline and nothing behind it is edentulous. Palatal strap. Akers on 13 and 23.",
  },
  {
    id: "ki-max",
    title: "Maxillary free-end",
    kicker: "A-P strap",
    missing: [17, 16, 27, 26],
    teach: "Kennedy I maxilla. RPI on 15 and 25. A-P palatal strap. Do not reach for a U-shaped connector because it 'looks lighter'.",
  },
  {
    id: "kiii-mod",
    title: "Two bounded saddles",
    kicker: "Most posterior space wins",
    missing: [46, 36, 35],
    teach: "Applegate 5: the most posterior edentulous area sets the class — III. The other saddle is modification 1. Reverse Akers on 34. Ring on 37 if it is the distal molar abutment.",
  },
  {
    id: "short-floor",
    title: "Short floor",
    kicker: "The bar that should have been a plate",
    missing: [37, 36, 47, 46],
    teach: "Same holes as the teaching Kennedy I. If the floor is 5 mm, the connector is a linguoplate. A bar on gingiva ulcerates. Measure, then choose.",
  },
];

function hash(n: number) {
  let x = (n + 1) * 1103515245 + 12345;
  return (x >>> 0) % 2147483647;
}

const PATTERNS: number[][] = [
  [37, 36, 47, 46],
  [47, 46],
  [37, 36],
  [46, 45, 44],
  [36, 35, 34],
  [36, 35],
  [46, 45],
  [47, 46, 35, 36],
  [46, 36, 35],
  [37, 36, 35, 47],
  [45, 44],
  [34, 35],
  [12, 11, 21, 22],
  [11, 21],
  [12, 11, 21, 22, 23],
  [17, 16, 27, 26],
  [17, 16],
  [27, 26],
  [16, 15],
  [26, 25],
  [26, 25, 16],
  [15, 14, 24],
  [16, 15, 25, 26],
  [47, 36],
  [17, 27],
  [46, 45, 44, 36],
  [35, 36, 37, 45],
  [25, 26, 15],
  [14, 15, 24, 25],
  [44, 45, 46],
  [13, 12, 11, 21, 22],
  [47, 46, 45],
];

const EXTRAS = [14, 24, 34, 44, 15, 25, 12, 22, 35, 16];

function inventMissing(seed: number): number[] {
  const x = hash(seed);
  let holes = [...(PATTERNS[x % PATTERNS.length] ?? PATTERNS[0]!)];
  if (x % 3 === 0) {
    const extra = EXTRAS[(x >> 3) % EXTRAS.length]!;
    if (!holes.includes(extra)) holes.push(extra);
  }
  return holes.sort((a, b) => a - b);
}

function nameInvented(n: number, missing: number[]): Deal {
  const both = designBoth(missing);
  const live =
    both.mand.status === "rpd" ? both.mand : both.max.status === "rpd" ? both.max : both.mand;
  const ring = live.clasps.find((c) => c.kind === "ring");
  const rev = live.clasps.find((c) => c.kind === "reverse-akers");
  const rpi = live.clasps.find((c) => c.kind === "rpi");
  const emb = live.clasps.find((c) => c.kind === "embrasure");

  let title = live.label;
  let kicker = "Dealt for tonight";
  if (ring && rev) {
    title = "Ring and reverse";
    kicker = `${ring.title} · ${rev.title}`;
  } else if (ring) {
    title = ring.title;
    kicker = "Mandibular molar distal abutment";
  } else if (rev && rpi) {
    title = "RPI plus reverse circlet";
    kicker = live.label;
  } else if (rev) {
    title = rev.title;
    kicker = "Bounded saddle — rest away from the space";
  } else if (emb) {
    title = "Free-end and embrasure";
    kicker = live.label;
  } else if (rpi && live.kennedy === "I") {
    title = "Bilateral free-end";
    kicker = live.label;
  } else if (rpi) {
    title = "Unilateral free-end";
    kicker = live.label;
  } else if (live.kennedy === "IV") {
    title = "Anterior crossing";
    kicker = "Class IV has no modifications";
  }

  const claspLine = live.clasps.map((c) => `${c.title} (${c.gauge})`).join(". ");
  const teach =
    live.status === "rpd"
      ? `${live.label}. Connector: ${live.majorConnector.name}. ${claspLine}. Classify the most posterior space first.`
      : "Mark the holes. Classify. Then name the connector and one clasp per abutment.";

  return { id: `deal-${n}`, title, kicker, missing, teach };
}

export function dealCase(n: number): Deal {
  if (n < DECK.length) return DECK[n]!;
  return nameInvented(n, inventMissing(n));
}

export function formatClasp(kind: ClaspKind) {
  return CLASP_ATLAS[kind];
}
