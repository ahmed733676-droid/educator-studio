import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-paper text-ink shadow-[0_0_0_1px_rgba(243,238,228,0.08)] hover:bg-paper/90",
        brass:
          "bg-brass text-ink hover:bg-brass/90",
        ghost:
          "bg-transparent text-paper hover:bg-raised",
        outline:
          "bg-transparent text-paper shadow-[0_0_0_1px_rgba(243,238,228,0.14)] hover:bg-raised",
        danger:
          "bg-danger/15 text-danger shadow-[0_0_0_1px_rgba(196,92,72,0.35)] hover:bg-danger/25",
      },
      size: {
        sm: "h-9 rounded-[8px] px-3",
        md: "h-11 rounded-[10px] px-4",
        lg: "h-12 rounded-[12px] px-5",
        icon: "size-11 rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
