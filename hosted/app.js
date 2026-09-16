/* Educator — static teaching studio. Hash routes. Progress in localStorage. */
(function () {
  const KEY = "educator.progress";

  const STEPS = [
    {
      id: "survey",
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
      title: "Connectors",
      latin: "Major & minor",
      minutes: "14–18",
      gist: "A lingual bar if the floor of mouth gives you 7–8 mm. A linguoplate if it does not, or if the remaining anterior teeth are a short-term story.",
      teach: [
        "Measure from gingival margin at the incisors to the movable floor. This case: 9 mm. Lingual bar. The bar itself wants 3–4 mm of height plus 3–4 mm of clearance off the gingiva.",
        "Linguoplate when the floor is short, when the remaining anteriors are periodontally doubtful, or when you expect to add a tooth. Do not use a plate as decoration on a healthy 9 mm floor.",
        "Minor connectors join rests and plates to the bar. They cross the gingiva at right angles, not on a diagonal, and they stay 1.5–2 mm from the next vertical element.",
        "Finish lines for the acrylic saddles are decided here, not at try-in. Internal finish line at the junction of lattice and bar, external finish line where acrylic meets polished metal.",
        "Maxillary connectors are not this case. Palatal strap or A-P strap; U-shaped only when a torus or a gag forces it.",
      ],
      trap: "A lingual bar that sits on the gingiva because someone measured 5 mm and hoped. Tissue-borne bars ulcerate. Measure, then choose the plate.",
      check: "Floor-of-mouth number spoken. Connector named. Minor connectors from all four rests drawn to the bar without crowding.",
    },
    {
      id: "retainers",
      title: "Retainers",
      latin: "RPI on the abutments",
      minutes: "18–25",
      gist: "RPI on 34 and 44. Mesial rest, distal proximal plate, I-bar into 0.25 mm mid-buccal. The I-bar is supposed to let go when the saddle sinks.",
      teach: [
        "R = mesial rest (already placed). P = proximal plate on the distal guide plane of 34 and 44. I = I-bar, approaching from the gingival, engaging 0.25 mm at or just mesial to mid-buccal.",
        "Under occlusal load the saddle depresses, the framework rotates around the mesial rest, and the I-bar disengages. A cast Akers with a distal rest does the opposite — it tightens and torques.",
        "If the vestibule is shallow, if a bony undercut blocks the I-bar approach, or if the survey line is too high, combination clasp: wrought-wire retentive arm into 0.50 mm, cast reciprocal. Say why you left RPI.",
        "Reciprocation is not optional. The plate (or a cast arm at the height of contour) must be in contact as the retentive tip passes the survey line.",
        "Bracing and reciprocal surfaces on the lingual of 34 and 44 come from the proximal plate plus the minor connector, not from a second buccal arm.",
      ],
      trap: "Cast circumferential clasp, distal rest, on a Kennedy I abutment. It looks like every denture the student has seen in the corridor. It is the wrong lever for this ridge.",
      check: "RPI named on both abutments, or a spoken reason for combination clasps. Reciprocation pointed at on the cast.",
    },
    {
      id: "finish",
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

  const CASE = {
    title: "Kennedy I — mandibular teaching case",
    patient:
      "58 years. Mandibular bilateral distal extension. Remaining 34, 33–43, 44. Missing 35–37 and 45–47. Maxillary complete denture in function.",
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

  const SCRIPT = {
    room: "One surveyor, one cast, one board. Students stand. The timer is visible.",
    beats: [
      { clock: "00–02", title: "Set", start: 0, end: 2, line: "Cast on the surveyor. Point at the empty ridges. 'Kennedy I. Bilateral distal extension. We are not going to torque 34 and 44.'" },
      { clock: "02–08", title: "Survey", start: 2, end: 8, line: "Zero tilt. Mark. Gauge 0.25 mm mid-buccal both premolars. Show the wrong tilt once, then put it back." },
      { clock: "08–14", title: "Rests", start: 8, end: 14, line: "Draw four seats. Mesial on the abutments. Cingulum on the canines. Cross out a distal rest if a student offers one." },
      { clock: "14–18", title: "Connectors", start: 14, end: 18, line: "Ruler on the floor of mouth. 9 mm. Lingual bar. Hold the linguoplate next to it so they see the alternative, not as this case." },
      { clock: "18–25", title: "Retainers", start: 18, end: 25, line: "RPI on the board. Pencil as the I-bar. Press the saddle, show the release. Draw the Akers-with-distal-rest and put a line through it." },
      { clock: "25–28", title: "Finish", start: 25, end: 28, line: "Pear-shaped pad, mesh, metal try-in as its own visit, clasps last." },
      { clock: "28–30", title: "Three questions", start: 28, end: 30, line: "Kennedy class. Why mesial rest. What bounce is not. Photograph the board. Out." },
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

  const RPD_BOARD = [
    { n: "01", title: "Survey", line: "Zero tilt. 0.25 mm mid-buccal 34 and 44. Shared path." },
    { n: "02", title: "Rests", line: "Mesial 34, 44. Cingulum 33, 43. No distal rest on a distal-extension abutment." },
    { n: "03", title: "Connectors", line: "Floor 9 mm. Lingual bar. Minors at right angles, not crowded." },
    { n: "04", title: "Retainers", line: "RPI both sides. Reciprocation on. The I-bar lets go." },
    { n: "05", title: "Finish", line: "Mesh to the pear-shaped pad. Metal try-in. Clasps last." },
  ];

  const SINUS_BOARD = [
    { n: "01", title: "Window", line: "RBH 4–5 mm. Width takes the fixture. Membrane intact. Outside that, not this module." },
    { n: "02", title: "Bounce", line: "Yield plus rebound plus negative Valsalva. A drop with no rebound is a hole." },
    { n: "03", title: "Abort", line: "Tear, wrong height, spin, acute sinus, unsafe patient. The fixture stays in the kit." },
  ];

  const SINUS = [
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
        "Do not chase bounce. If the floor is cortical and will not yield, stop. Re-read the CBCT. Piezo the floor or abort to a lateral window.",
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
  ];

  const DENSAH = [
    { n: "01", title: "Pilot", line: "Work to 1 mm short of the floor." },
    { n: "02", title: "Clockwise", line: "Densah in clockwise to densify the walls." },
    { n: "03", title: "Counterclockwise", line: "Last bur. The floor should give." },
    { n: "04", title: "Bounce", line: "Yield plus rebound. The depth gauge still meets something." },
    { n: "05", title: "Valsalva", line: "Negative. No irrigation in the nose. No bubbles." },
  ];

  const ABORT = [
    { id: "nose", find: "Irrigation at the nostril", call: "Abort. Tear until proven otherwise. The fixture stays in the kit.", abort: true },
    { id: "drop", find: "Drop with no rebound", call: "Not bounce. A hole. Abort the lift.", abort: true },
    { id: "bounce", find: "Yield, rebound, negative Valsalva", call: "That is bounce. Continue only if the membrane is up and intact.", abort: false },
    { id: "height", find: "3 mm on the day, 5 mm on the plan", call: "Abort closed. Do not convert to heroics.", abort: true },
    { id: "spin", find: "Implant spinning after the lift", call: "Remove it. No 'torque later' in this teaching. Stage.", abort: true },
    { id: "acute", find: "Purulent discharge or fever on the day", call: "The elective lift is over.", abort: true },
  ];

  const STEMS = [
    { id: "s01", n: 1, paper: "RPD", stem: "Mandible. Remaining 34, 33, 32, 31, 41, 42, 43, 44. Missing all molars. Classify.", choices: ["Kennedy II, modification 1", "Kennedy I", "Kennedy III, modification 2", "Kennedy IV"], answer: 1, model: "Kennedy I. Bilateral distal extension. Applegate: missing molars both sides, abutments are the second premolars. Do not call it II because 'it looks like two Class IIs'. It is one arch, one class." },
    { id: "s02", n: 2, paper: "RPD", stem: "On a mandibular Kennedy I abutment, where do you put the occlusal rest if you intend RPI?", choices: ["Distal fossa, to 'support the saddle'", "Mesial fossa", "Cingulum of the same premolar", "No rest — the plate is enough"], answer: 1, model: "Mesial. Distal rest on a distal-extension abutment is a Class I lever. Mesial rest moves the fulcrum forward so the I-bar can release when the saddle depresses. Say 'mesial' before you say 'I-bar'." },
    { id: "s03", n: 3, paper: "RPD", stem: "Name the three parts of an RPI clasp assembly.", choices: ["Ring, plate, incisal rest", "Roach, palatal strap, I-bar", "Mesial rest, proximal plate, I-bar", "Reciprocal arm, proximal plate, infrabulge T-bar"], answer: 2, model: "R = mesial rest. P = proximal plate on the distal guide plane. I = I-bar into a 0.25 mm mid-buccal undercut. If they say 'Roach' they have the I-bar lineage and have missed the rest and the plate. Mark it wrong and teach the three letters." },
    { id: "s04", n: 4, paper: "RPD", stem: "You measure 5 mm from gingival margin to movable floor of mouth at the incisors. Major connector?", choices: ["Lingual bar — force it, the patient will adapt", "Lingual bar with a 2 mm relief", "Linguoplate", "Labial bar"], answer: 2, model: "Linguoplate. A bar wants 7–8 mm (bar height plus gingival clearance). 5 mm will put metal on gingiva. Labial bar is a last resort for a lingual torus or lingually inclined teeth, not a short floor." },
    { id: "s05", n: 5, paper: "RPD", stem: "Why is a cast Akers clasp with a distal rest the wrong default on a Kennedy I abutment?", choices: ["It is too retentive", "It is unaesthetic", "It is a Class I lever: as the saddle sinks the clasp tightens and torques the abutment", "Co-Cr cannot engage 0.25 mm"], answer: 2, model: "Lever. Distal rest is the fulcrum. Saddle down, retentive tip up into the undercut — the tooth is wound. RPI (or a wrought-wire combination) is how we stop doing that. Aesthetics is a side issue. Co-Cr is happy at 0.25 mm." },
    { id: "s06", n: 6, paper: "Sinus", stem: "CBCT: residual bone height 4.5 mm at the planned axis, ridge width 7 mm, membrane intact, no acute sinusitis. In this module, approach?", choices: ["Lateral window — 4.5 mm is always open", "Closed (transcrestal) lift in the 4–5 mm band", "Place an 8 mm implant with no lift", "Short implant, no sinus work, no discussion"], answer: 1, model: "Closed, in this module. 4–5 mm is the band we are teaching. Not because 4.5 mm can never be a lateral window — because this course has a window and we stay inside it. An 8 mm fixture at 4.5 mm without a lift is a perforation with extra steps." },
    { id: "s07", n: 7, paper: "Sinus", stem: "During a Densah closed lift the last bur is running counterclockwise. What is 'bounce'?", choices: ["The handpiece jumping on a dense crest", "Elastic yield and rebound of the floor/membrane, with a negative Valsalva", "The patient feeling referred pain to the eye", "A drop in torque that means you should bury the implant"], answer: 1, model: "Yield plus rebound. The floor gives and the membrane pushes back. Negative Valsalva. A drop with no rebound is a hole — that is abort, not bounce. Pain is not a sign you use for this call." },
    { id: "s08", n: 8, paper: "Sinus", stem: "Irrigation appears at the nostril while you are lifting. Next move?", choices: ["Place the implant quickly to 'seal' the site", "Increase graft volume to tamponade", "Abort the lift. Do not place the implant. Manage the tear.", "Switch to a longer implant"], answer: 2, model: "Abort. Fluid in the nose is a tear until proven otherwise. An implant does not seal a Schneiderian hole. Graft packed into a tear becomes antral foreign body. Close, explain, stage. The fixture stays in the kit." },
    { id: "s09", n: 9, paper: "RPD", stem: "Mandibular Kennedy I. Abutments 34 and 44 with mesial rests. Where do the indirect retainers sit?", choices: ["On the pear-shaped pads", "Distal of 34 and 44, next to the saddles", "As far from the 34–44 fulcrum line as remaining teeth allow — typically cingulum rests 33 and 43", "On the maxillary denture"], answer: 2, model: "Canines, cingulum, this case. Indirect retainers resist rotation when the patient bites on the saddles. They want distance from the fulcrum line. The pad is a support area for the saddle, not an indirect retainer. Distal of the abutment is the wrong side of the fulcrum." },
    { id: "s10", n: 10, paper: "RPD", stem: "Undercut gauge for a cast Co-Cr clasp tip on 34.", choices: ["0.10 mm", "0.25 mm", "0.50 mm", "0.75 mm"], answer: 1, model: "0.25 mm. 0.50 mm is wrought wire. 0.75 mm is how you fatigue a cast arm or fail to seat it. If the gauge does not drop at 0.25 mm mid-buccal at the chosen path, you change the path or the clasp — you do not change the number." },
  ];

  const LOCKED = {
    ceramics: { title: "All-ceramics", blurb: "Preparation maps, cement rules, fracture talk. Not written." },
    immediate: { title: "Immediate implant", blurb: "Socket, gap, torque, when to wait. Not written." },
    prf: { title: "PRF", blurb: "Spin, membrane, plug. Not written." },
  };

  const EMPTY = {
    v: 1,
    rpdStep: 0,
    rpdDone: [],
    sinusDone: [],
    osce: {},
    propsChecked: [],
    lastVisit: "",
    lastRoute: "",
    rpdTab: "Map",
    osceOpen: "s01",
    osceMode: "paper",
    abortOpen: "",
  };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { ...EMPTY, rpdDone: [], sinusDone: [], osce: {}, propsChecked: [] };
      const d = JSON.parse(raw);
      if (d.v !== 1) return { ...EMPTY, rpdDone: [], sinusDone: [], osce: {}, propsChecked: [] };
      return {
        v: 1,
        rpdStep: d.rpdStep || 0,
        rpdDone: Array.isArray(d.rpdDone) ? d.rpdDone : [],
        sinusDone: Array.isArray(d.sinusDone) ? d.sinusDone : [],
        osce: d.osce && typeof d.osce === "object" ? d.osce : {},
        propsChecked: Array.isArray(d.propsChecked) ? d.propsChecked : [],
        lastVisit: d.lastVisit || "",
        lastRoute: d.lastRoute || "",
        rpdTab: d.rpdTab || "Map",
        osceOpen: d.osceOpen || "s01",
        osceMode: d.osceMode || "paper",
        abortOpen: d.abortOpen || "",
      };
    } catch {
      return { ...EMPTY, rpdDone: [], sinusDone: [], osce: {}, propsChecked: [] };
    }
  }

  function save(p) {
    p.lastVisit = new Date().toISOString();
    try {
      localStorage.setItem(KEY, JSON.stringify(p));
    } catch (_) {
      /* file:// on some iOS versions */
    }
  }

  let state = load();
  const clock = { running: false, elapsed: 0 };

  function path() {
    return (location.hash || "#/").replace(/^#\/?/, "").replace(/\/$/, "");
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/"/g, """);
  }

  function markSvg() {
    return '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M3 17h18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/><path d="M5 17 V11M9 17 V11M13 17 V7M17 17 V11M21 17 V11" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function fmt(total) {
    const c = Math.max(0, Math.min(30 * 60, total));
    return pad(Math.floor(c / 60)) + ":" + pad(c % 60);
  }

  function bar(pct) {
    return '<div class="bar" aria-hidden="true"><i style="width:' + pct + '%"></i></div>';
  }

  function shell(inner, active) {
    const nav = (id, href, label) =>
      '<a href="#/' + href + '" class="' + (active === id ? "on" : "") + '">' + label + "</a>";
    return (
      '<div class="shell"><header class="top"><a class="brand" href="#/"><span class="mark">' +
      markSvg() +
      "</span><span><strong>Educator</strong><span>Teaching studio</span></span></a><nav class=\"desk-nav\" aria-label=\"Studio\">" +
      nav("rpd", "rpd", "RPD") +
      nav("sinus", "sinus", "Sinus") +
      nav("osce", "osce", "OSCE") +
      '</nav></header><main class="page">' +
      inner +
      '</main><nav class="bot" aria-label="Studio"><ul><li>' +
      nav("home", "", "Studio") +
      "</li><li>" +
      nav("rpd", "rpd", "RPD") +
      "</li><li>" +
      nav("sinus", "sinus", "Sinus") +
      "</li><li>" +
      nav("osce", "osce", "OSCE") +
      "</li></ul></nav></div>"
    );
  }

  function kennedySvg(step) {
    const rests =
      step >= 1
        ? '<g fill="#c4a574"><ellipse cx="38" cy="70" rx="4" ry="2.6"/><ellipse cx="182" cy="70" rx="4" ry="2.6"/><ellipse cx="58" cy="100" rx="3.2" ry="2.2"/><ellipse cx="162" cy="100" rx="3.2" ry="2.2"/></g>'
        : "";
    const barPath =
      step >= 2
        ? '<path d="M48 96 C70 128 90 138 110 140 C130 138 150 128 172 96" fill="none" stroke="#c4a574" stroke-width="2.4" stroke-linecap="round"/>'
        : "";
    const clasp =
      step >= 3
        ? '<g fill="none" stroke="#f3eee4" stroke-width="1.3" stroke-linecap="round"><path d="M38 94 C24 92 22 78 32 74"/><path d="M182 94 C196 92 198 78 188 74"/><rect x="46" y="70" width="3" height="16" rx="0.6" fill="#f3eee4" stroke="none"/><rect x="171" y="70" width="3" height="16" rx="0.6" fill="#f3eee4" stroke="none"/></g>'
        : "";
    const mesh =
      step >= 4
        ? '<g stroke="#c4a574" stroke-width="0.7" opacity="0.85"><path d="M18 4 C16 28 16 48 22 64 L34 58 C28 40 28 22 30 8 Z" fill="#c4a574" fill-opacity="0.12"/><path d="M202 4 C204 28 204 48 198 64 L186 58 C192 40 192 22 190 8 Z" fill="#c4a574" fill-opacity="0.12"/><circle cx="22" cy="10" r="3.2" fill="none"/><circle cx="198" cy="10" r="3.2" fill="none"/></g>'
        : "";
    const teeth = [
      [34, 38, 78, 0], [33, 58, 108, 0], [32, 78, 122, 0], [31, 98, 128, 0],
      [41, 118, 128, 0], [42, 138, 122, 0], [43, 158, 108, 0], [44, 178, 78, 0],
      [35, 28, 52, 1], [36, 22, 28, 1], [37, 22, 6, 1],
      [45, 188, 52, 1], [46, 194, 28, 1], [47, 194, 6, 1],
    ]
      .map(function (t) {
        const id = t[0], x = t[1], y = t[2], miss = t[3];
        return miss
          ? '<rect x="' + (x - 8) + '" y="' + (y - 6) + '" width="16" height="12" rx="3" fill="none" stroke="#6e675c" stroke-dasharray="2 2" stroke-width="0.8"/>'
          : '<g><rect x="' + (x - 9) + '" y="' + (y - 8) + '" width="18" height="16" rx="4" fill="#141210" stroke="#f3eee4" stroke-opacity="0.55" stroke-width="0.9"/><text x="' + x + '" y="' + (y + 1.5) + '" text-anchor="middle" fill="#f3eee4" font-size="7" font-family="IBM Plex Sans, sans-serif">' + id + "</text></g>";
      })
      .join("");
    return (
      '<figure class="figure"><svg viewBox="0 0 220 168" role="img" aria-label="Occlusal schematic of a mandibular Kennedy I arch."><rect width="220" height="168" fill="#1c1915"/><path d="M18 4 C18 4 12 70 36 118 C58 158 88 164 110 164 C132 164 162 158 184 118 C208 70 202 4 202 4" fill="none" stroke="#2c2820" stroke-width="14" stroke-linecap="round"/>' +
      mesh + barPath + teeth +
      '<g stroke="#c4a574" stroke-width="0.9" fill="none" opacity="0.9"><path d="M28 86 H48"/><path d="M172 86 H192"/><path d="M110 18 V32"/><path d="M106 22 L110 18 L114 22"/></g>' +
      rests + clasp +
      '<text x="110" y="158" text-anchor="middle" fill="#a89f90" font-size="6.5" font-family="IBM Plex Sans, sans-serif" letter-spacing="0.12em">MANDIBLE · KENNEDY I</text></svg><figcaption><span>Occlusal plate · teaching schematic</span><span style="color:var(--brass)">Step ' +
      (step + 1) +
      " / 5</span></figcaption></figure>"
    );
  }

  function stepFigure(step) {
    const figs = [
      '<figure class="figure"><svg viewBox="0 0 320 150" role="img" aria-label="Surveyor path of insertion. Zero tilt. Mid-buccal 0.25 millimetre on 34 and 44."><rect width="320" height="150" fill="#1c1915"/><text x="12" y="22" fill="#a89f90" font-size="8" font-family="IBM Plex Sans, sans-serif" letter-spacing="0.14em">PATH OF INSERTION · ZERO TILT</text><path d="M160 28 V128" stroke="#c4a574" stroke-width="1.4"/><path d="M156 34 L160 28 L164 34" fill="none" stroke="#c4a574" stroke-width="1.4"/><rect x="92" y="70" width="28" height="36" rx="6" fill="#141210" stroke="#f3eee4" stroke-opacity="0.55"/><rect x="200" y="70" width="28" height="36" rx="6" fill="#141210" stroke="#f3eee4" stroke-opacity="0.55"/><text x="106" y="92" fill="#f3eee4" font-size="9" text-anchor="middle">34</text><text x="214" y="92" fill="#f3eee4" font-size="9" text-anchor="middle">44</text><path d="M92 88 H78" stroke="#c4a574" stroke-width="1.2"/><path d="M228 88 H242" stroke="#c4a574" stroke-width="1.2"/><circle cx="74" cy="88" r="3" fill="none" stroke="#c4a574" stroke-width="1.2"/><circle cx="246" cy="88" r="3" fill="none" stroke="#c4a574" stroke-width="1.2"/><text x="12" y="140" fill="#c4a574" font-size="9" font-family="IBM Plex Mono, monospace">0.25 mm mid-buccal · shared path</text></svg></figure>',
      '<figure class="figure"><svg viewBox="0 0 320 150" role="img" aria-label="Mesial rest versus distal rest on a Kennedy I abutment."><rect width="320" height="150" fill="#1c1915"/><text x="24" y="22" fill="#c45c48" font-size="8" letter-spacing="0.12em">DISTAL REST — CLASS I</text><text x="176" y="22" fill="#7a9a72" font-size="8" letter-spacing="0.12em">MESIAL REST — RPI</text><rect x="36" y="48" width="36" height="52" rx="6" fill="#141210" stroke="#f3eee4" stroke-opacity="0.45"/><rect x="188" y="48" width="36" height="52" rx="6" fill="#141210" stroke="#f3eee4" stroke-opacity="0.45"/><rect x="68" y="44" width="14" height="8" rx="2" fill="#c45c48"/><rect x="180" y="44" width="14" height="8" rx="2" fill="#7a9a72"/><path d="M82 70 H118" stroke="#a89f90" stroke-width="8" stroke-linecap="round"/><path d="M164 70 H128" stroke="#a89f90" stroke-width="8" stroke-linecap="round"/><path d="M110 86 L128 108 L118 96" fill="none" stroke="#c45c48" stroke-width="1.4"/><path d="M210 56 C222 48 232 58 226 78" fill="none" stroke="#f3eee4" stroke-width="1.3"/><text x="24" y="140" fill="#a89f90" font-size="8">Saddle down, clasp tightens</text><text x="176" y="140" fill="#a89f90" font-size="8">Saddle down, I-bar releases</text></svg></figure>',
      '<figure class="figure"><svg viewBox="0 0 320 150" role="img" aria-label="Floor of mouth measurement."><rect width="320" height="150" fill="#1c1915"/><text x="12" y="22" fill="#a89f90" font-size="8" letter-spacing="0.14em">FLOOR OF MOUTH</text><path d="M24 48 H148" stroke="#f3eee4" stroke-opacity="0.35" stroke-width="1"/><path d="M24 108 H148" stroke="#c4a574" stroke-width="3.2" stroke-linecap="round"/><path d="M86 48 V108" stroke="#c4a574" stroke-width="1" stroke-dasharray="2 3"/><text x="90" y="82" fill="#c4a574" font-size="10" font-family="IBM Plex Mono, monospace">9 mm</text><text x="24" y="140" fill="#f3eee4" font-size="9">This case · lingual bar</text><path d="M176 48 H296" stroke="#f3eee4" stroke-opacity="0.35" stroke-width="1"/><path d="M176 84 H296" stroke="#a89f90" stroke-width="10" stroke-linecap="round"/><text x="214" y="68" fill="#a89f90" font-size="10" font-family="IBM Plex Mono, monospace">5 mm</text><text x="176" y="140" fill="#a89f90" font-size="9">Short floor · plate</text></svg></figure>',
      '<figure class="figure"><svg viewBox="0 0 320 150" role="img" aria-label="RPI clasp assembly."><rect width="320" height="150" fill="#1c1915"/><text x="12" y="22" fill="#a89f90" font-size="8" letter-spacing="0.14em">RPI ON 34 / 44</text><rect x="132" y="46" width="56" height="72" rx="10" fill="#141210" stroke="#f3eee4" stroke-opacity="0.55"/><rect x="118" y="50" width="18" height="10" rx="2" fill="#c4a574"/><rect x="184" y="58" width="8" height="40" rx="1.5" fill="#f3eee4"/><path d="M160 128 C118 124 108 96 124 78" fill="none" stroke="#f3eee4" stroke-width="2" stroke-linecap="round"/><circle cx="124" cy="78" r="3.2" fill="#c4a574"/><text x="86" y="58" fill="#c4a574" font-size="11" font-family="Fraunces, serif">R</text><text x="204" y="80" fill="#c4a574" font-size="11" font-family="Fraunces, serif">P</text><text x="96" y="88" fill="#c4a574" font-size="11" font-family="Fraunces, serif">I</text><text x="12" y="140" fill="#a89f90" font-size="8">Mesial rest · distal plate · I-bar 0.25 mm</text></svg></figure>',
      '<figure class="figure"><svg viewBox="0 0 320 150" role="img" aria-label="Finish sequence."><rect width="320" height="150" fill="#1c1915"/><text x="12" y="22" fill="#a89f90" font-size="8" letter-spacing="0.14em">SEQUENCE</text><circle cx="44" cy="70" r="14" fill="#141210" stroke="#c4a574"/><text x="44" y="74" text-anchor="middle" fill="#c4a574" font-size="10">1</text><text x="44" y="108" text-anchor="middle" fill="#f3eee4" font-size="8">Mesh to pad</text><path d="M58 70 H88" stroke="#2c2820"/><circle cx="120" cy="70" r="14" fill="#141210" stroke="#c4a574"/><text x="120" y="74" text-anchor="middle" fill="#c4a574" font-size="10">2</text><text x="120" y="108" text-anchor="middle" fill="#f3eee4" font-size="8">Metal try-in</text><path d="M134 70 H164" stroke="#2c2820"/><circle cx="196" cy="70" r="14" fill="#141210" stroke="#c4a574"/><text x="196" y="74" text-anchor="middle" fill="#c4a574" font-size="10">3</text><text x="196" y="108" text-anchor="middle" fill="#f3eee4" font-size="8">Teeth</text><path d="M210 70 H240" stroke="#2c2820"/><circle cx="272" cy="70" r="14" fill="#141210" stroke="#c4a574"/><text x="272" y="74" text-anchor="middle" fill="#c4a574" font-size="10">4</text><text x="272" y="108" text-anchor="middle" fill="#f3eee4" font-size="8">Clasps last</text><text x="12" y="140" fill="#a89f90" font-size="8">Pear-shaped pad is a support area. Do not stop short.</text></svg></figure>',
    ];
    return figs[step] || figs[0];
  }

  function bandFigure() {
    return '<figure class="figure"><svg viewBox="0 0 320 156" role="img" aria-label="Cross-section of the 4 to 5 millimetre band."><rect width="320" height="156" fill="#1c1915"/><path d="M0 86 C80 78 120 66 160 66 C200 66 240 78 320 86 L320 156 L0 156 Z" fill="#141210"/><path d="M0 52 C70 40 110 32 160 32 C210 32 250 40 320 52" fill="none" stroke="#c4a574" stroke-width="1.4"/><path d="M0 62 C70 50 110 42 160 42 C210 42 250 50 320 62" fill="none" stroke="#f3eee4" stroke-opacity="0.35" stroke-width="1"/><path d="M158 62 V86" stroke="#c4a574" stroke-width="1.2"/><path d="M154 66 L158 62 L162 66" fill="none" stroke="#c4a574" stroke-width="1.2"/><text x="168" y="80" fill="#c4a574" font-size="10" font-family="IBM Plex Mono, monospace">4–5 mm</text><text x="12" y="24" fill="#a89f90" font-size="8" letter-spacing="0.14em">MEMBRANE</text><text x="12" y="112" fill="#a89f90" font-size="8" letter-spacing="0.14em">RESIDUAL BONE</text><rect x="148" y="86" width="20" height="8" rx="1" fill="#f3eee4" fill-opacity="0.8"/><text x="12" y="148" fill="#6e675c" font-size="8">Teaching section · not a case from the CRF</text></svg></figure>';
  }

  function bounceFigure() {
    return '<figure class="figure"><svg viewBox="0 0 320 150" role="img" aria-label="Bounce is yield plus rebound. A drop with no rebound is a hole."><rect width="320" height="150" fill="#1c1915"/><text x="28" y="24" fill="#7a9a72" font-size="8" letter-spacing="0.12em">BOUNCE</text><text x="188" y="24" fill="#c45c48" font-size="8" letter-spacing="0.12em">NOT BOUNCE</text><path d="M48 48 C48 48 40 78 48 92 C56 106 40 128 48 128" fill="none" stroke="#7a9a72" stroke-width="1.6"/><path d="M44 120 L48 128 L56 116" fill="none" stroke="#7a9a72" stroke-width="1.4"/><path d="M208 48 C208 48 200 70 208 78 L208 128" fill="none" stroke="#c45c48" stroke-width="1.6"/><path d="M204 120 L208 128 L212 120" fill="none" stroke="#c45c48" stroke-width="1.4"/><text x="28" y="148" fill="#a89f90" font-size="8">Yield + rebound</text><text x="188" y="148" fill="#a89f90" font-size="8">Drop. A hole. Abort.</text></svg></figure>';
  }

  function boardPlate(kind) {
    const rows = kind === "rpd" ? RPD_BOARD : SINUS_BOARD;
    const kicker = kind === "rpd" ? "Photograph this" : "Three rules";
    const title = kind === "rpd" ? "The board" : "On the wall";
    const lede =
      kind === "rpd"
        ? "Five lines. Students copy this, then you wipe the rest. The timer is visible."
        : "No six-month numbers. If a student asks whether it works: window, bounce, abort.";
    return (
      '<article class="plate"><div><p class="kicker">' +
      kicker +
      "</p><h2>" +
      title +
      '</h2><p class="lede" style="margin-top:8px">' +
      esc(lede) +
      '</p></div><ol class="board-rows">' +
      rows
        .map(function (r) {
          return "<li><i>" + r.n + "</i><div><h3>" + esc(r.title) + "</h3><p>" + esc(r.line) + "</p></div></li>";
        })
        .join("") +
      "</ol></article>"
    );
  }

  function continueCta() {
    const answered = Object.keys(state.osce).length;
    if (state.lastRoute === "/osce" && answered < 10) {
      return { href: "#/osce", label: "Continue the paper", note: answered + " of 10 marked" };
    }
    if (state.lastRoute === "/sinus" && state.sinusDone.length < 4) {
      return { href: "#/sinus", label: "Continue sinus", note: state.sinusDone.length + " of 4 walked" };
    }
    if (state.rpdDone.length > 0 && state.rpdDone.length < 5) {
      const step = STEPS[state.rpdStep] || STEPS[0];
      return { href: "#/rpd", label: "Continue RPD · " + step.title, note: state.rpdDone.length + " of 5 marked" };
    }
    if (state.lastRoute === "/rpd") {
      return { href: "#/rpd", label: "Open RPD map", note: "Kennedy I on the board" };
    }
    return null;
  }

  function home() {
    const rpdPct = Math.round((state.rpdDone.length / 5) * 100);
    const sinusPct = Math.round((state.sinusDone.length / 4) * 100);
    const answered = Object.keys(state.osce).length;
    const cont = continueCta();
    const map = RPD_BOARD.map(function (s, i) {
      const done = state.rpdDone.indexOf(i) >= 0 ? " ·" : "";
      return "<li><a href=\"#/rpd\"><small>" + s.n + done + "</small><b>" + s.title + "</b></a></li>";
    }).join("");
    return (
      '<p class="kicker">Course plate · on this device</p><h1 class="h1">The clinic, taught in order.</h1><p class="lede">Five-step RPD maps and a closed sinus module for the 4–5 mm band. No backend. No invented results. Progress stays in the phone.</p><div class="row"><a class="btn btn-primary" href="' +
      (cont ? cont.href : "#/rpd") +
      '">' +
      (cont ? esc(cont.label) : "Open RPD map") +
      '</a><a class="btn btn-outline" href="#/osce">Mark the OSCE</a></div>' +
      (cont ? '<p class="kicker">' + esc(cont.note) + "</p>" : "") +
      '<div class="head-row"><h2>Tonight’s map</h2><span>Kennedy I · 30 minutes</span></div><ul class="map-strip">' +
      map +
      '</ul><ul class="family"><li><p>Risala</p><small>writes</small></li><li><p>Auctor</p><small>checks</small></li><li><p>Educator</p><small>teaches</small></li></ul><div class="head-row"><h2>Live</h2><span>Two courses and a paper</span></div><ul class="stack"><li><a class="card" href="#/rpd"><div class="meta"><b>01 · Five-step map</b><span>' +
      rpdPct +
      '% walked</span></div><h2>RPD Design Studio</h2><p>Survey → rests → connectors → retainers → finish. Kennedy I case. 30-minute demo with a prop list.</p>' +
      bar(rpdPct) +
      '<span class="enter">Enter</span></a></li><li><a class="card" href="#/sinus"><div class="meta"><b>02 · 4–5 mm band</b><span>' +
      sinusPct +
      '% walked</span></div><h2>Closed sinus lift</h2><p>Window, bounce, abort. No six-month numbers. Those cells stay in the CRF.</p>' +
      bar(sinusPct) +
      '<span class="enter">Enter</span></a></li><li><a class="card" href="#/osce"><div class="meta"><b>OSCE · Live mark</b><span>' +
      answered +
      " / 10 marked</span></div><h2>Ten stems</h2><p>RPD and sinus paper. Demonstrator-voice model answers. Marks stay on this device.</p>" +
      bar(Math.round((answered / 10) * 100)) +
      '<span class="enter">Enter</span></a></li></ul><div class="head-row"><h2>Locked</h2><span>Stubs, not fake lessons</span></div><div class="locked-grid"><a class="lock-card" href="#/locked/ceramics"><h3>All-ceramics</h3><p>' +
      esc(LOCKED.ceramics.blurb) +
      '</p></a><a class="lock-card" href="#/locked/immediate"><h3>Immediate implant</h3><p>' +
      esc(LOCKED.immediate.blurb) +
      '</p></a><a class="lock-card" href="#/locked/prf"><h3>PRF</h3><p>' +
      esc(LOCKED.prf.blurb) +
      '</p></a></div><p class="fine">Mohamed Ayman Abdallah (Pharos M.Sc., closed sinus / 4–5 mm band, n = 26) stays a thesis. Educator is the teaching product next to it. Progress is stored under <code>educator.progress</code> on this device only. <button type="button" data-act="reset-all">Clear progress</button></p>'
    );
  }

  function rpdView() {
    const tab = state.rpdTab || "Map";
    const step = Math.min(Math.max(state.rpdStep, 0), 4);
    const cur = STEPS[step];
    const tabs = ["Map", "Case", "Script", "Props"]
      .map(function (t) {
        return '<button type="button" data-act="rpd-tab" data-tab="' + t + '" class="' + (t === tab ? "on" : "") + '">' + t + "</button>";
      })
      .join("");
    const rail = STEPS.map(function (s, i) {
      const done = state.rpdDone.indexOf(i) >= 0 ? " ·" : "";
      return '<button type="button" data-act="rpd-step" data-step="' + i + '" class="' + (i === step ? "on" : "") + '"><small>0' + (i + 1) + done + "</small><b>" + s.title + "</b></button>";
    }).join("");

    let body = "";
    if (tab === "Map") {
      body =
        '<div class="rail">' +
        rail +
        "</div>" +
        kennedySvg(step) +
        stepFigure(step) +
        '<article class="plate"><div class="head-row"><div><p class="kicker">' +
        cur.minutes +
        " · " +
        esc(cur.latin) +
        "</p><h2>" +
        esc(cur.title) +
        "</h2></div><span>" +
        (step + 1) +
        "/5</span></div><p>" +
        esc(cur.gist) +
        '</p><ol class="teach">' +
        cur.teach
          .map(function (line, i) {
            return "<li><i>" + pad(i + 1) + "</i><span>" + esc(line) + "</span></li>";
          })
          .join("") +
        '</ol><div class="callout"><div class="tag tag-danger">Trap</div><p>' +
        esc(cur.trap) +
        '</p></div><div class="callout"><div class="tag tag-ok">Check</div><p>' +
        esc(cur.check) +
        '</p></div></article><div class="nav-steps"><div class="pair"><button class="btn btn-outline flex" data-act="rpd-prev"' +
        (step === 0 ? " disabled" : "") +
        '>Back</button><button class="btn btn-outline flex" data-act="rpd-next"' +
        (step === 4 ? " disabled" : "") +
        '>Next</button></div><button class="btn ' +
        (state.rpdDone.indexOf(step) >= 0 ? "btn-outline" : "btn-brass") +
        ' wide" data-act="rpd-mark">' +
        (state.rpdDone.indexOf(step) >= 0 ? "Marked" : "Mark this step") +
        "</button></div>";
    } else if (tab === "Case") {
      body =
        '<article class="plate"><h2>' +
        esc(CASE.title) +
        "</h2><p>" +
        esc(CASE.patient) +
        '</p><div><p class="kicker">Abutments</p><p style="color:var(--muted);font-size:14px;margin-top:4px">' +
        esc(CASE.abutments) +
        '</p></div><div><p class="kicker">Floor of mouth</p><p style="color:var(--muted);font-size:14px;margin-top:4px">' +
        esc(CASE.floor) +
        '</p></div><ol class="teach">' +
        CASE.design
          .map(function (l, i) {
            return "<li><i>" + pad(i + 1) + "</i><span>" + esc(l) + "</span></li>";
          })
          .join("") +
        '</ol><p class="fine">' +
        esc(CASE.note) +
        "</p></article>";
    } else if (tab === "Script") {
      const mins = Math.floor(clock.elapsed / 60);
      const beats = SCRIPT.beats
        .map(function (b, i) {
          const on = (mins >= b.start && mins < b.end) || (clock.elapsed >= 30 * 60 && i === SCRIPT.beats.length - 1);
          return '<li class="' + (on ? "on" : "") + '"><time>' + esc(b.clock) + "</time><div><h3>" + esc(b.title) + "</h3><p>" + esc(b.line) + "</p></div></li>";
        })
        .join("");
      body =
        "<div><h2>30-minute demo</h2><p class=\"lede\" style=\"margin-top:8px\">" +
        esc(SCRIPT.room) +
        '</p></div><div class="clock"><div><p class="kicker">Demo clock</p><p class="time">' +
        fmt(clock.elapsed) +
        "<small>/ 30:00</small></p></div><div class=\"actions\"><button class=\"btn btn-brass icon\" data-act=\"clock-toggle\" aria-label=\"" +
        (clock.running ? "Pause" : "Start") +
        '">' +
        (clock.running
          ? '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="7" y="6" width="3" height="12" fill="currentColor"/><rect x="14" y="6" width="3" height="12" fill="currentColor"/></svg>'
          : '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 7l10 5-10 5z" fill="currentColor"/></svg>') +
        '</button><button class="btn btn-outline icon" data-act="clock-reset" aria-label="Reset"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12a7 7 0 1 0 2-4.9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/><path d="M5 5v5h5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/></svg></button></div></div><ol class="beats">' +
        beats +
        "</ol>" +
        boardPlate("rpd");
    } else {
      body =
        '<article class="plate"><h2>Prop list</h2><p style="color:var(--muted);font-size:14px">Lay this out before the students sit. Missing a surveyor means you are lecturing, not demonstrating.</p><ul class="props">' +
        SCRIPT.props
          .map(function (p, i) {
            const on = state.propsChecked.indexOf(i) >= 0;
            return (
              "<li><button type=\"button\" data-act=\"prop\" data-i=\"" +
              i +
              '"><span class="check' +
              (on ? " on" : "") +
              '" aria-hidden="true">' +
              (on ? '<svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 6l3 3 5-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>' : "") +
              '</span><span class="' +
              (on ? "struck" : "off") +
              '">' +
              esc(p) +
              "</span></button></li>"
            );
          })
          .join("") +
        '</ul><p class="fine">' +
        state.propsChecked.length +
        " / " +
        SCRIPT.props.length +
        " laid out</p></article>";
    }

    return (
      '<header><p class="kicker">Course 01</p><h1>RPD Design Studio</h1><p class="lede" style="margin-top:8px">Five steps, one Kennedy I. Walk the map in clinic order. Mark a step when you can teach it without notes.</p></header><div class="tabs">' +
      tabs +
      "</div>" +
      body
    );
  }

  function sinusView() {
    const abortBoard =
      '<div class="abort"><p class="kicker">Call from the finding</p>' +
      ABORT.map(function (row) {
        const on = state.abortOpen === row.id;
        return (
          '<button type="button" data-act="abort" data-id="' +
          row.id +
          '" class="' +
          (on ? "on" : "") +
          '"><p class="find">' +
          esc(row.find) +
          "</p>" +
          (on
            ? '<p class="call"><span class="' +
              (row.abort ? "stop" : "go") +
              '">' +
              (row.abort ? "Abort. " : "Continue. ") +
              "</span>" +
              esc(row.call) +
              "</p>"
            : "") +
          "</button>"
        );
      }).join("") +
      "</div>";

    const secs = SINUS.map(function (sec) {
      const done = state.sinusDone.indexOf(sec.id) >= 0;
      let extra = "";
      if (sec.id === "bounce") {
        extra =
          bounceFigure() +
          '<ol class="densah">' +
          DENSAH.map(function (b) {
            return "<li><i>" + b.n + "</i><div><b>" + esc(b.title) + ".</b> <span>" + esc(b.line) + "</span></div></li>";
          }).join("") +
          "</ol>";
      }
      if (sec.id === "abort") extra = abortBoard;
      return (
        '<article class="plate"><div><p class="kicker">' +
        esc(sec.kicker) +
        "</p><h2>" +
        esc(sec.title) +
        "</h2></div>" +
        extra +
        sec.body
          .map(function (l) {
            return '<p style="color:var(--muted);font-size:14px">' + esc(l) + "</p>";
          })
          .join("") +
        '<p class="callout">' +
        esc(sec.rule) +
        '</p><button class="btn ' +
        (done ? "btn-outline" : "btn-brass") +
        '" data-act="sinus-mark" data-id="' +
        sec.id +
        '">' +
        (done ? "Walked" : "Mark as walked") +
        "</button></article>"
      );
    }).join("");

    return (
      '<header><p class="kicker">Course 02</p><h1>Closed sinus lift</h1><p class="lede" style="margin-top:8px">4–5 mm residual bone. Window, bounce, abort. Six-month numbers are not here. They live in Abdallah_Results_CRF.xlsx and stay dashed until the 26 cases are entered.</p></header>' +
      bandFigure() +
      boardPlate("sinus") +
      secs
    );
  }

  function stemCard(stem, expanded) {
    const mark = state.osce[stem.id];
    const choices = expanded
      ? '<div class="choices">' +
        stem.choices
          .map(function (c, i) {
            const picked = mark && mark.choice === i;
            let cls = "choice";
            if (picked && mark.correct) cls += " hit";
            if (picked && mark && !mark.correct) cls += " miss";
            if (!picked && mark && i === stem.answer) cls += " key";
            return (
              '<button class="' +
              cls +
              '" data-act="osce-pick" data-id="' +
              stem.id +
              '" data-i="' +
              i +
              '"' +
              (mark ? " disabled" : "") +
              "><b>" +
              String.fromCharCode(65 + i) +
              "</b> " +
              esc(c) +
              "</button>"
            );
          })
          .join("") +
        (mark
          ? '<div class="demo"><p class="kicker">Demonstrator</p><p style="margin-top:8px;font-size:14px">' + esc(stem.model) + "</p></div>"
          : '<p class="hint">Mark is live. You get one pick.</p>') +
        "</div>"
      : "";
    return (
      '<article class="stem"><button class="stem-head" data-act="osce-open" data-id="' +
      stem.id +
      '"><div><p class="kicker">' +
      pad(stem.n) +
      " · " +
      stem.paper +
      (mark ? (mark.correct ? " · mark" : " · miss") : "") +
      "</p><h2>" +
      esc(stem.stem) +
      "</h2></div>" +
      (mark ? '<span class="mark ' + (mark.correct ? "ok" : "bad") + '">' + (mark.correct ? "1" : "0") + "</span>" : "") +
      "</button>" +
      choices +
      "</article>"
    );
  }

  function osceView() {
    const marks = Object.keys(state.osce);
    const correct = marks.filter(function (id) {
      return state.osce[id].correct;
    }).length;
    const mode = state.osceMode || "paper";
    const tabs =
      '<div class="tabs"><button type="button" data-act="osce-mode" data-mode="paper" class="' +
      (mode === "paper" ? "on" : "") +
      '">Paper</button><button type="button" data-act="osce-mode" data-mode="exam" class="' +
      (mode === "exam" ? "on" : "") +
      '">Exam</button></div>';
    const score =
      '<div class="score"><p><b>' +
      correct +
      "</b> correct of <b>" +
      marks.length +
      "</b> marked · 10 stems</p>" +
      (marks.length ? '<button type="button" data-act="reset-osce">Clear marks</button>' : "") +
      "</div>";

    let body = "";
    if (mode === "exam") {
      if (marks.length === 10) {
        body = '<p style="font-family:var(--display);font-size:1.5rem">Paper in. ' + correct + " of 10.</p>";
      } else {
        const next = STEMS.find(function (s) {
          return !state.osce[s.id];
        }) || STEMS[STEMS.length - 1];
        body = stemCard(next, true);
      }
    } else {
      body =
        '<ol class="stack">' +
        STEMS.map(function (stem) {
          return "<li>" + stemCard(stem, state.osceOpen === stem.id) + "</li>";
        }).join("") +
        "</ol>" +
        (marks.length === 10 ? '<p style="font-family:var(--display);font-size:1.25rem">Paper in. ' + correct + " of 10.</p>" : "");
    }

    return (
      '<header><p class="kicker">OSCE</p><h1>Ten stems</h1><p class="lede" style="margin-top:8px">Live mark. Pick an answer, see the result, then open the demonstrator voice. The paper is RPD and sinus. Nothing else.</p></header>' +
      tabs +
      score +
      body
    );
  }

  function lockedView(slug) {
    const mod = LOCKED[slug];
    if (!mod) {
      return '<p class="kicker">Missing</p><h1>That plate is not in the studio.</h1><p class="lede">Live: RPD map, closed sinus 4–5 mm, OSCE.</p><a class="btn btn-primary" href="#/">Back to studio</a>';
    }
    return (
      '<p class="kicker">Locked</p><h1>' +
      esc(mod.title) +
      '</h1><p class="lede">' +
      esc(mod.blurb) +
      " This is a stub on purpose. Educator does not ship empty lessons dressed as modules. When the demonstrator writes it, the door opens.</p><p class=\"fine\">Live today: RPD Design Studio, closed sinus 4–5 mm, and the ten-stem OSCE.</p><a class=\"btn btn-primary\" href=\"#/\">Back to studio</a>"
    );
  }

  function render() {
    const p = path();
    let inner = "";
    let active = "home";
    if (p === "" || p === "/") inner = home();
    else if (p === "rpd") {
      inner = rpdView();
      active = "rpd";
      state.lastRoute = "/rpd";
    } else if (p === "sinus") {
      inner = sinusView();
      active = "sinus";
      state.lastRoute = "/sinus";
    } else if (p === "osce") {
      inner = osceView();
      active = "osce";
      state.lastRoute = "/osce";
    } else if (p.indexOf("locked/") === 0) {
      inner = lockedView(p.slice(7));
      active = "home";
    } else inner = lockedView("__missing");
    document.getElementById("app").innerHTML = shell(inner, active);
    document.title = active === "home" ? "Educator" : "Educator · " + active.toUpperCase();
  }

  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.getAttribute("data-act");
    if (act === "rpd-tab") {
      state.rpdTab = btn.getAttribute("data-tab");
      save(state);
      render();
    }
    if (act === "rpd-step") {
      state.rpdStep = Number(btn.getAttribute("data-step"));
      save(state);
      render();
    }
    if (act === "rpd-prev" && state.rpdStep > 0) {
      state.rpdStep -= 1;
      save(state);
      render();
    }
    if (act === "rpd-next" && state.rpdStep < 4) {
      state.rpdStep += 1;
      save(state);
      render();
    }
    if (act === "rpd-mark") {
      const s = state.rpdStep;
      if (state.rpdDone.indexOf(s) < 0) state.rpdDone.push(s);
      if (s < 4) state.rpdStep = s + 1;
      save(state);
      render();
    }
    if (act === "prop") {
      const i = Number(btn.getAttribute("data-i"));
      const idx = state.propsChecked.indexOf(i);
      if (idx >= 0) state.propsChecked.splice(idx, 1);
      else state.propsChecked.push(i);
      save(state);
      render();
    }
    if (act === "clock-toggle") {
      clock.running = !clock.running;
      render();
    }
    if (act === "clock-reset") {
      clock.running = false;
      clock.elapsed = 0;
      render();
    }
    if (act === "sinus-mark") {
      const id = btn.getAttribute("data-id");
      if (state.sinusDone.indexOf(id) < 0) state.sinusDone.push(id);
      save(state);
      render();
    }
    if (act === "abort") {
      const id = btn.getAttribute("data-id");
      state.abortOpen = state.abortOpen === id ? "" : id;
      save(state);
      render();
    }
    if (act === "osce-mode") {
      state.osceMode = btn.getAttribute("data-mode");
      save(state);
      render();
    }
    if (act === "osce-open") {
      const id = btn.getAttribute("data-id");
      state.osceOpen = state.osceOpen === id ? "" : id;
      save(state);
      render();
    }
    if (act === "osce-pick") {
      const id = btn.getAttribute("data-id");
      const i = Number(btn.getAttribute("data-i"));
      const stem = STEMS.find(function (s) {
        return s.id === id;
      });
      if (!stem || state.osce[id]) return;
      state.osce[id] = { choice: i, correct: i === stem.answer };
      save(state);
      render();
    }
    if (act === "reset-osce") {
      if (confirm("Clear OSCE marks on this device?")) {
        state.osce = {};
        save(state);
        render();
      }
    }
    if (act === "reset-all") {
      if (confirm("Clear all studio progress on this device?")) {
        state = { ...EMPTY, rpdDone: [], sinusDone: [], osce: {}, propsChecked: [] };
        save(state);
        render();
      }
    }
  });

  setInterval(function () {
    if (!clock.running) return;
    if (clock.elapsed >= 30 * 60) {
      clock.running = false;
      clock.elapsed = 30 * 60;
      if (path() === "rpd" && state.rpdTab === "Script") render();
      return;
    }
    clock.elapsed += 1;
    if (path() === "rpd" && state.rpdTab === "Script") render();
  }, 1000);

  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "#/";
  render();
})();
