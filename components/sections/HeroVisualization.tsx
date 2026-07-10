"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  [54, 84], [124, 144], [152, 72], [72, 212], [196, 178], [154, 248], [42, 310], [236, 260],
] as const;

const links = [[0, 1], [1, 3], [3, 5], [0, 2], [2, 1], [5, 4], [4, 2], [3, 6], [6, 5], [4, 7], [5, 7]] as const;
const pathNodes = [330, 390, 450, 510] as const;

export function HeroVisualization() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-[1.05] w-full max-w-xl"
      aria-label="Scattered systems converging into one clear operating path"
      role="img"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[10%] rounded-full bg-accent/10 blur-3xl"
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg className="relative h-full w-full" viewBox="0 0 560 520" fill="none">
        <defs>
          <linearGradient id="clear-line" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#14B8A6" stopOpacity="0" />
            <stop offset="1" stopColor="#14B8A6" />
          </linearGradient>
          <linearGradient id="scan-line" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#2563EB" stopOpacity="0" />
            <stop offset=".5" stopColor="#5EEAD4" />
            <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
          <filter id="soft-glow"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>

        <motion.rect
          x="1"
          y="1"
          width="558"
          height="518"
          rx="20"
          stroke="#2E3A4D"
          strokeDasharray="4 8"
          opacity=".65"
          animate={reduced ? undefined : { strokeDashoffset: [0, -48] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <g stroke="#2E3A4D" strokeWidth="1.2">
          {links.map(([a, b], index) => (
            <motion.line
              key={index}
              x1={nodes[a][0]}
              y1={nodes[a][1]}
              x2={nodes[b][0]}
              y2={nodes[b][1]}
              initial={reduced ? false : { pathLength: 0, opacity: 0.25 }}
              whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.035, ease: "easeOut" }}
            />
          ))}
        </g>

        <g fill="#1F2937" stroke="#64748B" strokeWidth="1.2">
          {nodes.map(([x, y], index) => (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r={index % 3 === 0 ? 6 : 4.5}
              animate={reduced ? undefined : { x: [0, index % 2 ? 4 : -3, 0], y: [0, index % 2 ? -3 : 4, 0] }}
              transition={{ duration: 5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </g>

        <motion.text
          x="40"
          y="372"
          fill="#64748B"
          fontSize="11"
          letterSpacing="1.4"
          initial={reduced ? false : { opacity: 0, y: 6 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          DISCONNECTED WORK
        </motion.text>

        <path d="M236 260c35 0 43 0 64 0" stroke="#94A3B8" strokeWidth="1.4" />
        <motion.line
          x1="300"
          y1="260"
          x2="530"
          y2="260"
          stroke="url(#clear-line)"
          strokeWidth="2"
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        />

        <motion.line
          x1="300"
          y1="260"
          x2="530"
          y2="260"
          stroke="url(#scan-line)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity=".5"
          animate={reduced ? undefined : { pathLength: [0, 0.25, 0], pathOffset: [0, 0.8, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <g stroke="#14B8A6" strokeWidth="1.5" fill="#0B1220">
          {pathNodes.map((x, index) => (
            <motion.circle
              key={x}
              cx={x}
              cy="260"
              r="6"
              animate={reduced ? undefined : { scale: [1, 1.18, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.28 }}
            />
          ))}
        </g>
        <g fill="#14B8A6" opacity=".18" filter="url(#soft-glow)">
          {pathNodes.map((x, index) => (
            <motion.circle
              key={x}
              cx={x}
              cy="260"
              r="15"
              animate={reduced ? undefined : { opacity: [0.1, 0.28, 0.1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.28 }}
            />
          ))}
        </g>
        {[0, 1, 2].map((index) => (
          <motion.circle
            key={index}
            cy="260"
            r="3.5"
            fill="#5EEAD4"
            initial={{ cx: 300, opacity: 0 }}
            animate={reduced ? { cx: 510, opacity: 0.8 } : { cx: [300, 520], opacity: [0, 1, 0] }}
            transition={reduced ? undefined : { duration: 3.6, repeat: Infinity, ease: "linear", delay: index * 1.2 }}
          />
        ))}
        <text x="328" y="220" fill="#94A3B8" fontSize="11" letterSpacing="1.4">ONE OPERATING PATH</text>
        <path d="M330 282v42h60v-42M450 238v-44h60v44" stroke="#2E3A4D" strokeWidth="1" strokeDasharray="3 5" />
        <motion.rect
          x="319"
          y="324"
          width="82"
          height="38"
          rx="6"
          fill="#111827"
          stroke="#2E3A4D"
          animate={reduced ? undefined : { y: [324, 319, 324] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="439"
          y="156"
          width="82"
          height="38"
          rx="6"
          fill="#111827"
          stroke="#2E3A4D"
          animate={reduced ? undefined : { y: [156, 161, 156] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.text x="337" y="347" fill="#CBD5E1" fontSize="10" animate={reduced ? undefined : { y: [347, 342, 347] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>WORKFLOW</motion.text>
        <motion.text x="462" y="179" fill="#CBD5E1" fontSize="10" animate={reduced ? undefined : { y: [179, 184, 179] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>INSIGHT</motion.text>
      </svg>
    </div>
  );
}
