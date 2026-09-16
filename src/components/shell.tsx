import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, ClipboardList, Home, PenTool, Waves } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const NAV = [
  { to: "/", label: "Studio", icon: Home, exact: true },
  { to: "/rpd", label: "Map", icon: BookOpen, exact: false },
  { to: "/bench", label: "Bench", icon: PenTool, exact: false },
  { to: "/sinus", label: "Sinus", icon: Waves, exact: false },
  { to: "/osce", label: "OSCE", icon: ClipboardList, exact: false },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-ink text-paper">
      <header className="sticky top-0 z-30 border-b border-rule/80 bg-ink/90 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-md bg-raised shadow-brass">
              <StepMark />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[15px] font-medium tracking-tight text-paper">
                Educator
              </span>
              <span className="block truncate font-sans text-kicker tracking-wide text-muted uppercase">
                Teaching studio
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 sm:flex" aria-label="Studio">
            {NAV.slice(1).map((item) => {
              const active = pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 font-sans text-xs tracking-wide uppercase transition-colors duration-150",
                    active ? "bg-raised text-brass" : "text-muted hover:text-paper",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 pb-28 pt-6 sm:pb-16 sm:pt-8">
        {children}
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-rule/80 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm sm:hidden"
        aria-label="Studio"
      >
        <ul className="grid grid-cols-5">
          {NAV.map((item) => {
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 px-2 text-kicker tracking-wide uppercase",
                    active ? "text-brass" : "text-muted",
                  )}
                >
                  <Icon className="size-4" strokeWidth={1.6} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function StepMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 text-brass" aria-hidden="true">
      <path
        d="M3 17h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
      {[5, 9, 13, 17, 21].map((x, i) => (
        <path
          key={x}
          d={`M${x} 17 V${i === 2 ? 7 : 11}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        />
      ))}
    </svg>
  );
}
