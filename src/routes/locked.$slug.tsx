import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { LOCKED } from "@/lib/content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/locked/$slug")({
  component: LockedCourse,
});

function LockedCourse() {
  const { slug } = Route.useParams();
  const mod = LOCKED.find((m) => m.slug === slug);
  if (!mod) throw notFound();

  return (
    <article className="flex min-h-[60dvh] flex-col justify-center gap-5">
      <p className="kicker">Locked</p>
      <h1 className="font-display text-3xl font-medium tracking-tight">{mod.title}</h1>
      <p className="max-w-[36ch] font-sans text-[15px] leading-relaxed text-muted">
        {mod.blurb} This is a stub on purpose. Educator does not ship empty lessons
        dressed as modules. When the demonstrator writes it, the door opens.
      </p>
      <p className="max-w-[36ch] font-sans text-sm text-faint">
        Live today: RPD Design Studio, closed sinus 4–5 mm, and the ten-stem OSCE.
      </p>
      <div>
        <Button asChild>
          <Link to="/">Back to studio</Link>
        </Button>
      </div>
    </article>
  );
}
