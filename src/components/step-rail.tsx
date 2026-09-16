import { cn } from "@/lib/cn";
import { RPD_STEPS } from "@/lib/content";

type Props = {
  step: number;
  done: number[];
  onPick: (n: number) => void;
};

export function StepRail({ step, done, onPick }: Props) {
  return (
    <ol className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {RPD_STEPS.map((s, i) => {
        const active = i === step;
        const complete = done.includes(i);
        return (
          <li key={s.id} className="min-w-0 flex-1">
            <button
              type="button"
              onClick={() => onPick(i)}
              className={cn(
                "flex h-14 w-full min-w-18 flex-col items-start justify-center rounded-md px-3 text-left transition-[background-color,box-shadow,color] duration-150 ease-[var(--ease-out-studio)]",
                active
                  ? "bg-paper text-ink"
                  : "bg-raised text-paper shadow-border",
              )}
            >
              <span
                className={cn(
                  "font-mono text-micro tracking-widest uppercase",
                  active ? "text-brass-dim" : "text-brass",
                )}
              >
                0{s.n}
                {complete ? " ·" : ""}
              </span>
              <span className="truncate font-display text-sm font-medium">{s.title}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
