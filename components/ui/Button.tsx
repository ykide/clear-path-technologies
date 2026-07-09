import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  arrow?: boolean;
};

const variants = {
  primary: "bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-glow",
  secondary: "border border-line bg-white/[0.02] text-ink hover:border-muted hover:bg-white/[0.05]",
  ghost: "text-secondary hover:bg-white/[0.05] hover:text-ink",
};

export function Button({ variant = "primary", arrow = false, className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <ArrowUpRight aria-hidden="true" className="size-4" />}
    </a>
  );
}
