import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("kicker", className)}>{children}</p>;
}

export function Plate({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "figure" | "li";
}) {
  return <Tag className={cn("plate p-5", className)}>{children}</Tag>;
}
