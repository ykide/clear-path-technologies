import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mb-5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-signal", className)} {...props}>
      <span aria-hidden="true" className="h-px w-4 bg-signal" />
      {children}
    </p>
  );
}


