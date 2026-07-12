"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ClearPathOSPreview() {
  const reduced = useReducedMotion();

  return (
    <div className="flex items-center border-t border-line bg-background/40 p-6 sm:p-10 lg:border-l lg:border-t-0" aria-label="Conceptual ClearPath OS dashboard">
      <motion.div
        className="w-full rounded-xl border border-line bg-background p-4 shadow-2xl"
        initial={reduced ? false : { opacity: 0, rotateX: 8, y: 22 }}
        whileInView={reduced ? undefined : { opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">Conceptual operating layer</span>
          <motion.div
            className="size-2 rounded-full bg-signal"
            animate={reduced ? undefined : { boxShadow: ["0 0 0 0 rgba(20,184,166,.45)", "0 0 0 8px rgba(20,184,166,0)", "0 0 0 0 rgba(20,184,166,0)"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[["Workflow", "Mapped"], ["Signals", "Visible"], ["Roadmap", "Prioritized"]].map(([label, value], index) => (
            <motion.div
              key={label}
              className="rounded-md border border-line bg-surface p-3"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 + index * 0.08 }}
            >
              <p className="text-[9px] text-muted">{label}</p>
              <p className="mt-2 text-sm font-semibold text-ink">{value}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 rounded-md border border-line bg-surface p-4">
          <p className="text-[9px] uppercase tracking-wider text-muted">Operating trend</p>
          <svg className="mt-4 w-full" viewBox="0 0 360 120" fill="none" aria-hidden="true">
            <motion.path
              d="M0 104 52 86l50 8 52-42 50 15 52-38 52 10 52-27"
              stroke="#2563EB"
              strokeWidth="2"
              initial={reduced ? false : { pathLength: 0 }}
              whileInView={reduced ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
            />
            <motion.path
              d="M0 112 52 107l50-13 52 4 50-25 52 4 52-24 52 5"
              stroke="#14B8A6"
              strokeWidth="2"
              opacity=".8"
              initial={reduced ? false : { pathLength: 0 }}
              whileInView={reduced ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.38, ease: "easeOut" }}
            />
            <motion.circle
              cx="0"
              cy="104"
              r="4"
              fill="#5EEAD4"
              animate={reduced ? undefined : { cx: [0, 360], cy: [104, 12], opacity: [0, 1, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}


