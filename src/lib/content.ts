export type RpdStep = {
  id: string;
  n: number;
  title: string;
  latin: string;
  minutes: string;
  gist: string;
  teach: string[];
  trap: string;
  check: string;
};

export type OsceStem = {
  id: string;
  n: number;
  paper: "RPD" | "Sinus";
  stem: string;
  choices: string[];
  answer: number;
  model: string;
};

export const FAMILY = [
  { name: "Risala", does: "writes" },
  { name: "Auctor", does: "checks" },
  { name: "Educator", does: "teaches" },
] as const;

export const RPD_STEPS: RpdStep[] = [
  {
    id: "survey",
    n: 1,
    title: "Survey",
    latin: "Path of insertion",
    minutes: "02–08",
    gist: "Tilt the cast until the undercuts you need are usable and the guiding planes are parallel. Then mark the height of contour. Do not invent a path to rescue a bad abutment.",
    teach: [
      "Say the classification out loud before the carbon marker touches the cast. This is Kennedy I. Bilateral distal extension. The abutments are 34 and 44. Everything after this sentence is about not torqueing those two teeth.",
      "Path of insertion is a compromise, not a hunt for undercut. Zero-tilt first. If mid-buccal 0.25 mm appears on both premolars without a heroic mesial tilt, take it.",
      "Mark the survey line with the carbon marker at that tilt. Recheck 34 and 44. The retentive tip will sit below this line; the reciprocal arm or plate sits on it.",
      "Gauge: 0.25 mm for a cast Co-Cr clasp tip. 0.50 mm only if you are committing to wrought wire. Do not mix those numbers.",
      "Look at the floor of mouth and the lingual slope now, while the cast is still on the surveyor. You will need that number in step 3.",
    ],
    trap: "Over-tilting the cast to 'create' undercut on a distal-extension abutment. You buy a clasp and sell the path. The denture will not seat, or it will seat and then rock.",
    check: "Both abutments show a usable mid-buccal 0.25 mm at one shared tilt, and the distal guiding planes can be prepared parallel to that path.",
  },
  {
    id: "rests",
    n: 2,
    title: "Rests",
    latin: "Occlusal & cingulum seats",
    minutes: "08–14",
    gist: "Rests first on the design sheet. They set the fulcrum. On Kennedy I the rest on the abutment is mesial, never distal.",
    teach: [
      "Occlusal rest seat: spoon, rounded, 1.0–1.5 mm deep at the fossa, one-third to one-half the mesiodistal width, floor inclined slightly toward the centre of the tooth so the rest does not slide off.",
      "Mesial rest on 34 and 44. Distal rest on a distal-extension abutment is a Class I lever. You will hear this again in retainers. Draw it on the board once so it sticks.",
      "Indirect retainers: cingulum rests on 33 and 43. They sit as far from the fulcrum line (34–44) as the remaining teeth allow. They exist to resist rotation when the patient bites on the saddles.",
      "Cingulum seat is an inverted-V or a prepared ledge, not a blob of rest on an unprepared slope. If the canine has no cingulum, say so and move the rest to the mesial fossa of the first premolar — but then that tooth is doing two jobs. Prefer the canine.",
      "Call the rest seats before you draw a single clasp. Students who start with the I-bar draw a pretty arm on a framework that has nowhere to sit.",
    ],
    trap: "Distal occlusal rest on 34 or 44 'because that is where the saddle starts'. That rest becomes the fulcrum. The clasp then torques the abutment every time the ridge compresses.",
    check: "Four rest seats named: mesial 34, mesial 44, cingulum 33, cingulum 43. No distal rest on a distal-extension abutment.",
  },
  {
    id: "connectors",
    n: 3,
    title: "Connectors",
    latin: "Major & minor",
    minutes: "14–18",
    gist: "A lingual bar if the floor of mouth gives you 7–8 mm. A linguoplate if it does not, or if the remaining anterior teeth are a short-term story.",
    teach: [
      "Measure from gingival margin at the incisors to the movable floor. This case: 9 mm. Lingual bar. The bar itself wants 3–4 mm of height plus 3–4 mm of clearance off the gingiva.",
      "Linguoplate when the floor is short, when the remaining anteriors are periodontally doubtful, or when you expect to add a tooth. Do not use a plate as decoration on a healthy 9 mm floor — it covers gingiva for no structural reason.",
      "Minor connectors join rests and plates to the bar. They cross the gingiva at right angles, not on a diagonal, and they stay 1.5–2 mm from the next vertical element. Crowded minors are food traps and finishing nightmares.",
      "Finish lines for the acrylic saddles are decided here, not at try-in. Internal finish line at the junction of lattice and bar, external finish line where acrylic meets polished metal.",
      "Maxillary connectors are not this case. If a student asks: palatal strap or A-P strap; U-shaped only when a torus or a gag forces it. Do not open that drawer unless they bring a maxillary cast.",
    ],
    trap: "A lingual bar that sits on the gingiva because someone measured 5 mm and hoped. Tissue-borne bars ulcerate. Measure, then choose the plate.",
    check: "Floor-of-mouth number spoken. Connector named. Minor connectors from all four rests drawn to the bar without crowding.",
  },
  {
    id: "retainers",
    n: 4,
    title: "Retainers",
    latin: "RPI on the abutments",
    minutes: "18–25",
    gist: "RPI on 34 and 44. Mesial rest, distal proximal plate, I-bar into 0.25 mm mid-buccal. The I-bar is supposed to let go when the saddle sinks.",
    teach: [
      "R = mesial rest (already placed). P = proximal plate on the distal guide plane of 34 and 44, contacting from the survey line to the seat, thick enough to be a plate not a wire. I = I-bar, approaching from the gingival, engaging 0.25 mm at or just mesial to mid-buccal.",
      "Under occlusal load the saddle depresses, the framework rotates around the mesial rest, and the I-bar disengages. That is the point. A cast Akers with a distal rest does the opposite — it tightens and torques.",
      "If the vestibule is shallow, if a bony undercut blocks the I-bar approach, or if the survey line is too high, you do not force an I-bar. Combination clasp: wrought-wire retentive arm into 0.50 mm, cast reciprocal. Say why you left RPI. Do not leave it as 'the lab will decide'.",
      "Reciprocation is not optional. The plate (or a cast arm at the height of contour) must be in contact as the retentive tip passes the survey line. A clasp without a reciprocal is an orthodontic appliance.",
      "Bracing and reciprocal surfaces on the lingual of 34 and 44 come from the proximal plate plus the minor connector, not from a second buccal arm.",
    ],
    trap: "Cast circumferential clasp, distal rest, on a Kennedy I abutment. It looks like every denture the student has seen in the corridor. It is the wrong lever for this ridge.",
    check: "RPI named on both abutments, or a spoken reason for combination clasps. Reciprocation pointed at on the cast.",
  },
  {
    id: "finish",
    n: 5,
    title: "Finish",
    latin: "Saddle, teeth, try-in",
    minutes: "25–30",
    gist: "Mesh over both ridges to the pear-shaped pad. Framework try-in before wax. Clasp adjustment last, not first.",
    teach: [
      "Lattice or mesh from the finish line to the pear-shaped pad (retromolar). Cover the buccal shelf. The pad is a support area — if the metal or the acrylic stops short of it, you have given away the only stable posterior stop on that side.",
      "Replacement teeth: this opposing is a complete maxillary denture. Keep the mandibular occlusal plane honest. Non-anatomic or lingualised schemes are easier to live with than a locked anatomic setup on two movable bases.",
      "Framework try-in is its own appointment. Rests fully seated. No rock. Disclosing medium on the tissue side of the plates. Do not add teeth until the metal sits.",
      "Delivery: pressure-indicating paste on the saddles, occlusion in the relation you recorded, then clasps. Students who tighten clasps first are hiding a seating error.",
      "Recall at 24 hours and one week. Distal-extension ridges resorb. Relines are part of the design, not a failure of it. Say that out loud so the patient hears it before they leave.",
    ],
    trap: "Skipping the metal try-in because the lab 'already set the teeth'. You cannot read rest seating through wax.",
    check: "Pear-shaped pad named on both sides. Metal try-in listed as a separate visit. Clasp adjustment sequenced last.",
  },
];

export const KENNEDY_CASE = {
  title: "Kennedy I — mandibular teaching case",
  patient: "58 years. Mandibular bilateral distal extension. Remaining 34, 33–43, 44. Missing 35–37 and 45–47. Maxillary complete denture in function.",
  abutments:
    "34 and 44: restorable, no mobility, ~2 mm attached gingiva, surveyable mid-buccal 0.25 mm at a shared path.",
  floor: "9 mm from gingival margin at 31–41 to the movable floor — lingual bar is available.",
  design: [
    "Mesial occlusal rests 34 and 44",
    "Cingulum rests 33 and 43 (indirect retainers)",
    "Distal proximal plates 34 and 44",
    "I-bars, mid-buccal 0.25 mm, 34 and 44",
    "Lingual bar",
    "Mesh saddles to both pear-shaped pads",
  ],
  note: "This is a demonstrator case, not a patient record. Names and numbers are teaching furniture.",
};

export const DEMO_SCRIPT = {
  title: "30-minute demo",
  room: "One surveyor, one cast, one board. Students stand. The timer is visible.",
  beats: [
    {
      clock: "00–02",
      title: "Set",
      line: "Cast on the surveyor. Point at the empty ridges. 'Kennedy I. Bilateral distal extension. We are not going to torque 34 and 44.'",
    },
    {
      clock: "02–08",
      title: "Survey",
      line: "Zero tilt. Mark. Gauge 0.25 mm mid-buccal both premolars. Show the wrong tilt once, then put it back.",
    },
    {
      clock: "08–14",
      title: "Rests",
      line: "Draw four seats. Mesial on the abutments. Cingulum on the canines. Cross out a distal rest if a student offers one.",
    },
    {
      clock: "14–18",
      title: "Connectors",
      line: "Ruler on the floor of mouth. 9 mm. Lingual bar. Hold the linguoplate next to it so they see the alternative, not as this case.",
    },
    {
      clock: "18–25",
      title: "Retainers",
      line: "RPI on the board. Pencil as the I-bar. Press the saddle, show the release. Draw the Akers-with-distal-rest and put a line through it.",
    },
    {
      clock: "25–28",
      title: "Finish",
      line: "Pear-shaped pad, mesh, metal try-in as its own visit, clasps last.",
    },
    {
      clock: "28–30",
      title: "Three questions",
      line: "Kennedy class. Why mesial rest. What bounce is not. Photograph the board. Out.",
    },
  ],
  props: [
    "Ney (or equivalent) surveyor and analyzing rod",
    "Duplicated mandibular Kennedy I diagnostic cast",
    "Carbon marker and 0.25 mm undercut gauge",
    "Metal ruler or periodontal probe",
    "Red / blue pencil and a printed design sheet",
    "Sample Co-Cr RPI framework, if the lab will lend one",
    "Linguoplate example for the contrast, not for this case",
    "Typodont premolar or extracted tooth for a rest-seat cut",
    "Visible timer",
    "Whiteboard with the five-step map already ruled",
  ],
};

export const SINUS_SECTIONS = [
  {
    id: "window",
    title: "Window",
    kicker: "4–5 mm residual bone",
    body: [
      "This module teaches the closed (transcrestal) lift inside a narrow band: residual bone height 4–5 mm at the planned implant axis, read on CBCT from crest to sinus floor.",
      "Width must still take the planned diameter. A 4.0–4.5 mm implant wants roughly 6 mm of ridge after densification. A tall, knife-edge 4 mm is not this window.",
      "Membrane intact on the scan. No acute sinusitis. No untreated oro-antral communication. A polyp sitting on the exact site is a pause, not a dare.",
      "Below about 4 mm, this teaching module aborts the closed approach. Lateral window, or stage. Do not improvise a 2–3 mm closed lift in front of students because a paper somewhere said it is possible.",
      "Above about 6 mm you may not need a lift at all, depending on the planned length. That is a different conversation. Keep this room on the 4–5 mm band.",
    ],
    rule: "Closed lift in this studio means RBH 4–5 mm, width adequate, membrane intact. Outside that, the answer is 'not this module'.",
  },
  {
    id: "bounce",
    title: "Bounce",
    kicker: "Tactile elastic rebound",
    body: [
      "Work to 1 mm short of the floor (pilot, then Densah in clockwise to densify). The last bur runs counterclockwise. The floor gives. The membrane should bounce.",
      "Bounce is elastic. You feel a yield and a rebound, not a drop into a hole. The depth gauge still meets something that pushes back.",
      "Confirm: Valsalva negative. No irrigation in the nose. No bubbles at the osteotomy. If you can see, you see membrane, not a window into the antrum.",
      "Do not chase bounce. If the floor is cortical and will not yield, stop. Re-read the CBCT. Piezo the floor or abort to a lateral window. Forcing a Densah through a thick floor is how a tear starts.",
      "Graft only if the membrane is up and intact and the protocol you are teaching that day uses graft. This studio does not invent a cubic-centimetre number.",
    ],
    rule: "Bounce = yield + rebound + negative Valsalva. A drop with no rebound is not bounce. It is a hole.",
  },
  {
    id: "abort",
    title: "Abort",
    kicker: "Leave the implant in the kit",
    body: [
      "Membrane tear: bubbles on Valsalva, irrigation in the nostril, or a visible hole. Stop the lift. Do not place the implant. Small tears can be managed; that management is not 'carry on and torque it in'.",
      "Uncontrolled bleeding from the osteotomy that does not settle with pressure and time. Pack, wait, reassess. A spinning red hole is not a fixture site.",
      "Acute sinus signs on the day: purulent discharge, fever, acute pain that is not your local anaesthetic. The elective lift is over.",
      "The height on the day is not the height on the plan. Wrong site, wrong measurement, 3 mm when you thought 5. Do not convert to heroics. Abort closed.",
      "No primary stability after the lift. A spinning implant does not 'gain torque later' in this teaching. Remove it. If the membrane is intact you may graft and stage. If it is not, you manage the tear and stage.",
      "Patient not safe to continue: vasovagal, pain you cannot control, clock expired on the local. Close, explain, another day.",
    ],
    rule: "Abort means the implant stays in the kit. Closing a flap over a problem is not a save.",
  },
  {
    id: "limits",
    title: "Limits",
    kicker: "Thesis stays a thesis",
    body: [
      "Mohamed Ayman Abdallah, Pharos M.Sc.: closed sinus, 4–5 mm band, n = 26. That work is a thesis. It is not this course.",
      "Six-month numbers — ISQ, survival, mean gain — are not in Educator. Those cells live in Abdallah_Results_CRF.xlsx and stay dashed until the 26 cases are entered.",
      "Do not quote a percentage in this room. If a student asks 'does it work', the answer is: the indication, the bounce, and the abort rules. Outcomes wait for the workbook.",
      "Locked modules on this studio (all-ceramics, immediate implant, PRF) are stubs for the same reason. Empty lessons are worse than locked doors.",
    ],
    rule: "No invented results. If it is not in the CRF, it is not on the board.",
  },
] as const;

export const OSCE_STEMS: OsceStem[] = [
  {
    id: "s01",
    n: 1,
    paper: "RPD",
    stem: "Mandible. Remaining 34, 33, 32, 31, 41, 42, 43, 44. Missing all molars. Classify.",
    choices: [
      "Kennedy II, modification 1",
      "Kennedy I",
      "Kennedy III, modification 2",
      "Kennedy IV",
    ],
    answer: 1,
    model:
      "Kennedy I. Bilateral distal extension. Applegate: missing molars both sides, abutments are the second premolars. Do not call it II because 'it looks like two Class IIs'. It is one arch, one class.",
  },
  {
    id: "s02",
    n: 2,
    paper: "RPD",
    stem: "On a mandibular Kennedy I abutment, where do you put the occlusal rest if you intend RPI?",
    choices: [
      "Distal fossa, to 'support the saddle'",
      "Mesial fossa",
      "Cingulum of the same premolar",
      "No rest — the plate is enough",
    ],
    answer: 1,
    model:
      "Mesial. Distal rest on a distal-extension abutment is a Class I lever. Mesial rest moves the fulcrum forward so the I-bar can release when the saddle depresses. Say 'mesial' before you say 'I-bar'.",
  },
  {
    id: "s03",
    n: 3,
    paper: "RPD",
    stem: "Name the three parts of an RPI clasp assembly.",
    choices: [
      "Ring, plate, incisal rest",
      "Roach, palatal strap, I-bar",
      "Mesial rest, proximal plate, I-bar",
      "Reciprocal arm, proximal plate, infrabulge T-bar",
    ],
    answer: 2,
    model:
      "R = mesial rest. P = proximal plate on the distal guide plane. I = I-bar into a 0.25 mm mid-buccal undercut. If they say 'Roach' they have the I-bar lineage and have missed the rest and the plate. Mark it wrong and teach the three letters.",
  },
  {
    id: "s04",
    n: 4,
    paper: "RPD",
    stem: "You measure 5 mm from gingival margin to movable floor of mouth at the incisors. Major connector?",
    choices: [
      "Lingual bar — force it, the patient will adapt",
      "Lingual bar with a 2 mm relief",
      "Linguoplate",
      "Labial bar",
    ],
    answer: 2,
    model:
      "Linguoplate. A bar wants 7–8 mm (bar height plus gingival clearance). 5 mm will put metal on gingiva. Labial bar is a last resort for a lingual torus or lingually inclined teeth, not a short floor.",
  },
  {
    id: "s05",
    n: 5,
    paper: "RPD",
    stem: "Why is a cast Akers clasp with a distal rest the wrong default on a Kennedy I abutment?",
    choices: [
      "It is too retentive",
      "It is unaesthetic",
      "It is a Class I lever: as the saddle sinks the clasp tightens and torques the abutment",
      "Co-Cr cannot engage 0.25 mm",
    ],
    answer: 2,
    model:
      "Lever. Distal rest is the fulcrum. Saddle down, retentive tip up into the undercut — the tooth is wound. RPI (or a wrought-wire combination) is how we stop doing that. Aesthetics is a side issue. Co-Cr is happy at 0.25 mm.",
  },
  {
    id: "s06",
    n: 6,
    paper: "Sinus",
    stem: "CBCT: residual bone height 4.5 mm at the planned axis, ridge width 7 mm, membrane intact, no acute sinusitis. In this module, approach?",
    choices: [
      "Lateral window — 4.5 mm is always open",
      "Closed (transcrestal) lift in the 4–5 mm band",
      "Place an 8 mm implant with no lift",
      "Short implant, no sinus work, no discussion",
    ],
    answer: 1,
    model:
      "Closed, in this module. 4–5 mm is the band we are teaching. Not because 4.5 mm can never be a lateral window — because this course has a window and we stay inside it. An 8 mm fixture at 4.5 mm without a lift is a perforation with extra steps.",
  },
  {
    id: "s07",
    n: 7,
    paper: "Sinus",
    stem: "During a Densah closed lift the last bur is running counterclockwise. What is 'bounce'?",
    choices: [
      "The handpiece jumping on a dense crest",
      "Elastic yield and rebound of the floor/membrane, with a negative Valsalva",
      "The patient feeling referred pain to the eye",
      "A drop in torque that means you should bury the implant",
    ],
    answer: 1,
    model:
      "Yield plus rebound. The floor gives and the membrane pushes back. Negative Valsalva. A drop with no rebound is a hole — that is abort, not bounce. Pain is not a sign you use for this call.",
  },
  {
    id: "s08",
    n: 8,
    paper: "Sinus",
    stem: "Irrigation appears at the nostril while you are lifting. Next move?",
    choices: [
      "Place the implant quickly to 'seal' the site",
      "Increase graft volume to tamponade",
      "Abort the lift. Do not place the implant. Manage the tear.",
      "Switch to a longer implant",
    ],
    answer: 2,
    model:
      "Abort. Fluid in the nose is a tear until proven otherwise. An implant does not seal a Schneiderian hole. Graft packed into a tear becomes antral foreign body. Close, explain, stage. The fixture stays in the kit.",
  },
  {
    id: "s09",
    n: 9,
    paper: "RPD",
    stem: "Mandibular Kennedy I. Abutments 34 and 44 with mesial rests. Where do the indirect retainers sit?",
    choices: [
      "On the pear-shaped pads",
      "Distal of 34 and 44, next to the saddles",
      "As far from the 34–44 fulcrum line as remaining teeth allow — typically cingulum rests 33 and 43",
      "On the maxillary denture",
    ],
    answer: 2,
    model:
      "Canines, cingulum, this case. Indirect retainers resist rotation when the patient bites on the saddles. They want distance from the fulcrum line. The pad is a support area for the saddle, not an indirect retainer. Distal of the abutment is the wrong side of the fulcrum.",
  },
  {
    id: "s10",
    n: 10,
    paper: "RPD",
    stem: "Undercut gauge for a cast Co-Cr clasp tip on 34.",
    choices: ["0.10 mm", "0.25 mm", "0.50 mm", "0.75 mm"],
    answer: 1,
    model:
      "0.25 mm. 0.50 mm is wrought wire. 0.75 mm is how you fatigue a cast arm or fail to seat it. If the gauge does not drop at 0.25 mm mid-buccal at the chosen path, you change the path or the clasp — you do not change the number.",
  },
];

export const LOCKED = [
  {
    slug: "ceramics",
    title: "All-ceramics",
    blurb: "Preparation maps, cement rules, fracture talk. Not written.",
  },
  {
    slug: "immediate",
    title: "Immediate implant",
    blurb: "Socket, gap, torque, when to wait. Not written.",
  },
  {
    slug: "prf",
    title: "PRF",
    blurb: "Spin, membrane, plug. Not written.",
  },
] as const;

export const DENSAH_BEATS = [
  { n: "01", title: "Pilot", line: "Work to 1 mm short of the floor." },
  { n: "02", title: "Clockwise", line: "Densah in clockwise to densify the walls." },
  { n: "03", title: "Counterclockwise", line: "Last bur. The floor should give." },
  { n: "04", title: "Bounce", line: "Yield plus rebound. The depth gauge still meets something." },
  { n: "05", title: "Valsalva", line: "Negative. No irrigation in the nose. No bubbles." },
] as const;

export const ABORT_CALLS = [
  {
    id: "nose",
    find: "Irrigation at the nostril",
    call: "Abort. Tear until proven otherwise. The fixture stays in the kit.",
    abort: true,
  },
  {
    id: "drop",
    find: "Drop with no rebound",
    call: "Not bounce. A hole. Abort the lift.",
    abort: true,
  },
  {
    id: "bounce",
    find: "Yield, rebound, negative Valsalva",
    call: "That is bounce. Continue only if the membrane is up and intact.",
    abort: false,
  },
  {
    id: "height",
    find: "3 mm on the day, 5 mm on the plan",
    call: "Abort closed. Do not convert to heroics.",
    abort: true,
  },
  {
    id: "spin",
    find: "Implant spinning after the lift",
    call: "Remove it. No 'torque later' in this teaching. Stage.",
    abort: true,
  },
  {
    id: "acute",
    find: "Purulent discharge or fever on the day",
    call: "The elective lift is over.",
    abort: true,
  },
] as const;

export const COURSES = [
  {
    id: "rpd",
    href: "/rpd",
    n: "01",
    title: "RPD Design Studio",
    kicker: "Five-step map",
    blurb: "Survey → rests → connectors → retainers → finish. Kennedy I case. 30-minute demo with a prop list.",
    live: true,
  },
  {
    id: "bench",
    href: "/bench",
    n: "03",
    title: "Design bench",
    kicker: "Kennedy machine",
    blurb: "Tap missing teeth. Applegate classifies. Clasps with size and shape, major connector, ring and reverse Akers. Deal a new case every time.",
    live: true,
  },
  {
    id: "sinus",
    href: "/sinus",
    n: "02",
    title: "Closed sinus lift",
    kicker: "4–5 mm band",
    blurb: "Window, bounce, abort. No six-month numbers. Those cells stay in the CRF.",
    live: true,
  },
  {
    id: "osce",
    href: "/osce",
    n: "OSCE",
    title: "Ten stems",
    kicker: "Live mark",
    blurb: "RPD and sinus paper. Demonstrator-voice model answers. Marks stay on this device.",
    live: true,
  },
] as const;
