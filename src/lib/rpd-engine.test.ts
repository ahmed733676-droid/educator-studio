import assert from "node:assert/strict";
import test from "node:test";
import { dealCase, DECK, designBoth, headline, namedClasps } from "./rpd-engine.ts";

test("Kennedy I mandible — bilateral free-end", () => {
  const d = designBoth([37, 36, 47, 46]).mand;
  assert.equal(d.kennedy, "I");
  assert.equal(d.modification, 0);
  assert.ok(d.clasps.some((c) => c.kind === "rpi" && c.teeth.includes(35)));
  assert.ok(d.clasps.some((c) => c.kind === "rpi" && c.teeth.includes(45)));
  assert.equal(d.majorConnector.name, "Lingual bar");
  assert.ok(d.indirectRetainers.some((r) => r.includes("33")));
  assert.ok(d.indirectRetainers.some((r) => r.includes("43")));
});

test("Kennedy II — unilateral free-end plus embrasure", () => {
  const d = designBoth([47, 46]).mand;
  assert.equal(d.kennedy, "II");
  assert.equal(d.modification, 0);
  assert.ok(d.clasps.some((c) => c.kind === "rpi" && c.teeth.includes(45)));
  assert.ok(d.clasps.some((c) => c.kind === "embrasure"));
});

test("Kennedy II modification 1", () => {
  const d = designBoth([47, 46, 35, 36]).mand;
  assert.equal(d.kennedy, "II");
  assert.equal(d.modification, 1);
  assert.ok(d.clasps.some((c) => c.kind === "rpi"));
  assert.ok(d.clasps.some((c) => c.kind === "reverse-akers"));
});

test("Lone 47 — ring clasp on mandibular molar", () => {
  const d = designBoth([46, 45, 44]).mand;
  assert.equal(d.kennedy, "III");
  assert.ok(d.clasps.some((c) => c.kind === "ring" && c.teeth.includes(47)));
  assert.ok(d.clasps.some((c) => c.kind === "reverse-akers" && c.teeth.includes(43)));
  assert.ok(namedClasps(d).length >= 2);
  assert.ok(headline(d).includes("Ring clasp on 47"));
});

test("Marking 47 missing is Kennedy II, not a ring", () => {
  const d = designBoth([47, 46, 45, 44]).mand;
  assert.equal(d.kennedy, "II");
  assert.ok(!d.clasps.some((c) => c.kind === "ring"));
  assert.ok(d.clasps.some((c) => c.kind === "rpi"));
});

test("Kennedy III bounded saddle", () => {
  const d = designBoth([36, 35]).mand;
  assert.equal(d.kennedy, "III");
  assert.equal(d.modification, 0);
  assert.ok(d.clasps.some((c) => c.teeth.includes(34) && (c.kind === "reverse-akers" || c.kind === "akers")));
  assert.ok(d.clasps.some((c) => c.kind === "ring" && c.teeth.includes(37)));
});

test("Kennedy IV maxilla — anterior crossing, no mods", () => {
  const d = designBoth([12, 11, 21, 22]).max;
  assert.equal(d.kennedy, "IV");
  assert.equal(d.modification, 0);
  assert.ok(d.clasps.some((c) => c.teeth.includes(13)));
  assert.ok(d.clasps.some((c) => c.teeth.includes(23)));
});

test("Applegate 5 — posterior space beats anterior space", () => {
  const d = designBoth([12, 11, 21, 22, 16]).max;
  assert.equal(d.kennedy, "III");
  assert.ok(d.modification >= 1);
});

test("Short floor forces linguoplate", () => {
  const d = designBoth([37, 36, 47, 46], 5).mand;
  assert.equal(d.majorConnector.name, "Linguoplate");
});

test("Dentate and complete", () => {
  assert.equal(designBoth([]).mand.status, "dentate");
  const allMand = [47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37];
  assert.equal(designBoth(allMand).mand.status, "complete");
});

test("Deck cases classify", () => {
  for (const card of DECK) {
    const both = designBoth(card.missing);
    const live = both.mand.status === "rpd" ? both.mand : both.max;
    assert.equal(live.status, "rpd", card.id);
  }
});

test("First dealt card is the lone 47 ring case", () => {
  const card = dealCase(1);
  assert.equal(card.id, "lone-47");
  const d = designBoth(card.missing).mand;
  assert.ok(d.clasps.some((c) => c.kind === "ring"));
});

test("dealCase is stable for a given n", () => {
  assert.deepEqual(dealCase(0).missing, DECK[0]!.missing);
  assert.deepEqual(dealCase(21).missing, dealCase(21).missing);
});

test("generated deals classify as RPD and stay unique-ish", () => {
  const seen = new Set<string>();
  for (let i = 10; i < 40; i++) {
    const a = dealCase(i);
    const b = dealCase(i);
    assert.deepEqual(a.missing, b.missing);
    const both = designBoth(a.missing);
    assert.ok(both.mand.status === "rpd" || both.max.status === "rpd", `${a.id} ${a.title}`);
    seen.add(a.missing.join(","));
  }
  assert.ok(seen.size >= 8, `only ${seen.size} distinct generated arches`);
});
