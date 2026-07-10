"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroMotion() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-accent/15 blur-[90px]"
        animate={reduced ? undefined : { x: [0, 28, -12, 0], y: [0, -18, 20, 0], opacity: [0.5, 0.8, 0.55, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] right-[6%] h-80 w-80 rounded-full bg-signal/10 blur-[100px]"
        animate={reduced ? undefined : { x: [0, -34, 10, 0], y: [0, 24, -16, 0], opacity: [0.45, 0.7, 0.5, 0.45] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-0 h-px w-[44rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-signal/40 to-transparent"
        animate={reduced ? undefined : { opacity: [0.25, 0.8, 0.25], scaleX: [0.72, 1, 0.72] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
