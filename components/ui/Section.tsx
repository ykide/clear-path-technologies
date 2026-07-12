import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("content-auto relative border-b border-line py-20 sm:py-24 lg:py-32", className)} {...props} />;
}


