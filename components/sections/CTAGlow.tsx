"use client";

import { motion, useReducedMotion } from "framer-motion";

export function CTAGlow() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]"
      animate={reduced ? undefined : { scale: [1, 1.08, 0.96, 1], opacity: [0.75, 1, 0.7, 0.75] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}


