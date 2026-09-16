import { useSyncExternalStore } from "react";

export const PROGRESS_KEY = "educator.progress";

export type OsceMark = {
  choice: number;
  correct: boolean;
};

export type Progress = {
  v: 1;
  rpdStep: number;
  rpdDone: number[];
  sinusDone: string[];
  osce: Record<string, OsceMark>;
  propsChecked: number[];
  lastVisit: string;
  lastRoute: string;
};

const EMPTY: Progress = {
  v: 1,
  rpdStep: 0,
  rpdDone: [],
  sinusDone: [],
  osce: {},
  propsChecked: [],
  lastVisit: "",
  lastRoute: "",
};

let memory: Progress = EMPTY;
let hydrated = false;

const listeners = new Set<() => void>();

function parse(raw: string | null): Progress {
  if (!raw) return emptyCopy();
  try {
    const data = JSON.parse(raw) as Partial<Progress>;
    if (data.v !== 1) return emptyCopy();
    return {
      v: 1,
      rpdStep: typeof data.rpdStep === "number" ? data.rpdStep : 0,
      rpdDone: Array.isArray(data.rpdDone) ? data.rpdDone.filter((n) => typeof n === "number") : [],
      sinusDone: Array.isArray(data.sinusDone)
        ? data.sinusDone.filter((s) => typeof s === "string")
        : [],
      osce:
        data.osce && typeof data.osce === "object"
          ? (data.osce as Record<string, OsceMark>)
          : {},
      propsChecked: Array.isArray(data.propsChecked)
        ? data.propsChecked.filter((n) => typeof n === "number")
        : [],
      lastVisit: typeof data.lastVisit === "string" ? data.lastVisit : "",
      lastRoute: typeof data.lastRoute === "string" ? data.lastRoute : "",
    };
  } catch {
    return emptyCopy();
  }
}

function emptyCopy(): Progress {
  return { ...EMPTY, rpdDone: [], sinusDone: [], osce: {}, propsChecked: [] };
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  memory = parse(window.localStorage.getItem(PROGRESS_KEY));
  hydrated = true;
}

function emit() {
  for (const l of listeners) l();
}

function write(next: Progress) {
  memory = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  }
  emit();
}

function snapshot(): Progress {
  hydrate();
  return memory;
}

function subscribe(listener: () => void) {
  hydrate();
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === PROGRESS_KEY) {
      memory = parse(e.newValue);
      emit();
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

export function useProgress() {
  return useSyncExternalStore(subscribe, snapshot, () => EMPTY);
}

function touch(partial: Partial<Progress>) {
  const cur = snapshot();
  write({
    ...cur,
    ...partial,
    lastVisit: new Date().toISOString(),
  });
}

export function markRpdStep(step: number) {
  const cur = snapshot();
  const done = cur.rpdDone.includes(step) ? cur.rpdDone : [...cur.rpdDone, step];
  touch({ rpdStep: step, rpdDone: done, lastRoute: "/rpd" });
}

export function setRpdStep(step: number) {
  touch({ rpdStep: step, lastRoute: "/rpd" });
}

export function markSinus(id: string) {
  const cur = snapshot();
  if (cur.sinusDone.includes(id)) return;
  touch({ sinusDone: [...cur.sinusDone, id], lastRoute: "/sinus" });
}

export function markOsce(id: string, choice: number, correct: boolean) {
  const cur = snapshot();
  touch({
    osce: { ...cur.osce, [id]: { choice, correct } },
    lastRoute: "/osce",
  });
}

export function resetOsce() {
  touch({ osce: {} });
}

export function toggleProp(index: number) {
  const cur = snapshot();
  const next = cur.propsChecked.includes(index)
    ? cur.propsChecked.filter((n) => n !== index)
    : [...cur.propsChecked, index];
  touch({ propsChecked: next, lastRoute: "/rpd" });
}

export function setLastRoute(route: string) {
  touch({ lastRoute: route });
}

export function resetProgress() {
  write({
    ...emptyCopy(),
    lastVisit: new Date().toISOString(),
  });
}

export function rpdPercent(p: Progress) {
  return Math.round((p.rpdDone.length / 5) * 100);
}

export function sinusPercent(p: Progress) {
  return Math.round((p.sinusDone.length / 4) * 100);
}

export function osceScore(p: Progress) {
  const marks = Object.values(p.osce);
  const correct = marks.filter((m) => m.correct).length;
  return { answered: marks.length, correct, total: 10 };
}
