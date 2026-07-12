"use client";

import { motion, useReducedMotion } from "framer-motion";

const scatteredNodes = [
  { x: 74, y: 104, label: "Email" },
  { x: 170, y: 68, label: "Sheets" },
  { x: 132, y: 210, label: "Approvals" },
  { x: 226, y: 154, label: "Data" },
  { x: 82, y: 304, label: "Reports" },
  { x: 248, y: 292, label: "Tools" },
] as const;

const links = [[0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5]] as const;
const pathNodes = [
  { x: 342, label: "Map" },
  { x: 402, label: "Design" },
  { x: 462, label: "Build" },
  { x: 522, label: "Measure" },
] as const;

export function HeroVisualization() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-[1.05] w-full max-w-xl rounded-3xl border border-line bg-surface/35 p-2 shadow-2xl"
      aria-label="Scattered operational systems converging into one clear operating path"
      role="img"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-signal/10 blur-3xl"
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg className="relative h-full w-full" viewBox="0 0 600 560" fill="none">
        <title>Scattered systems converging into one operating path</title>
        <desc>Disconnected tools and workflows feed into a clear operating path with workflow, data, dashboard, and improvement stages.</desc>
        <defs>
          <linearGradient id="hero-path-line" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#94A3B8" stopOpacity="0.1" />
            <stop offset=".45" stopColor="#2563EB" />
            <stop offset="1" stopColor="#14B8A6" />
          </linearGradient>
          <filter id="hero-soft-glow"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>

        <rect x="12" y="12" width="576" height="536" rx="24" stroke="#2E3A4D" strokeDasharray="4 10" opacity=".7" />
        <text x="52" y="418" fill="#64748B" fontSize="11" letterSpacing="1.7">SCATTERED OPERATIONS</text>
        <text x="338" y="182" fill="#94A3B8" fontSize="11" letterSpacing="1.7">ONE OPERATING PATH</text>

        <g stroke="#2E3A4D" strokeWidth="1.2">
          {links.map(([a, b], index) => (
            <motion.line
              key={index}
              x1={scatteredNodes[a].x}
              y1={scatteredNodes[a].y}
              x2={scatteredNodes[b].x}
              y2={scatteredNodes[b].y}
              initial={reduced ? false : { pathLength: 0, opacity: 0.3 }}
              whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: index * 0.04 }}
            />
          ))}
        </g>

        {scatteredNodes.map((node, index) => (
          <motion.g
            key={node.label}
            animate={reduced ? undefined : { x: [0, index % 2 ? 4 : -3, 0], y: [0, index % 2 ? -3 : 4, 0] }}
            transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx={node.x} cy={node.y} r="7" fill="#1F2937" stroke="#64748B" strokeWidth="1.3" />
            <text x={node.x + 13} y={node.y + 4} fill="#94A3B8" fontSize="10">{node.label}</text>
          </motion.g>
        ))}

        <motion.path
          d="M248 292 C292 292 292 248 322 248 L540 248"
          stroke="url(#hero-path-line)"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
        />

        <motion.path
          d="M322 248 L540 248"
          stroke="#5EEAD4"
          strokeWidth="7"
          strokeLinecap="round"
          opacity=".35"
          animate={reduced ? undefined : { pathLength: [0, 0.32, 0], pathOffset: [0, 0.78, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <g fill="#14B8A6" opacity=".18" filter="url(#hero-soft-glow)">
          {pathNodes.map((node, index) => (
            <motion.circle
              key={node.label}
              cx={node.x}
              cy="248"
              r="16"
              animate={reduced ? undefined : { opacity: [0.1, 0.28, 0.1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
            />
          ))}
        </g>

        {pathNodes.map((node, index) => (
          <g key={node.label}>
            <motion.circle
              cx={node.x}
              cy="248"
              r="7"
              fill="#0B1220"
              stroke="#14B8A6"
              strokeWidth="1.5"
              animate={reduced ? undefined : { scale: [1, 1.16, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
            />
            <text x={node.x - 18} y="282" fill="#CBD5E1" fontSize="10">{node.label}</text>
          </g>
        ))}

        {[0, 1, 2].map((index) => (
          <motion.circle
            key={index}
            cy="248"
            r="3.5"
            fill="#5EEAD4"
            initial={{ cx: 322, opacity: 0 }}
            animate={reduced ? { cx: 522, opacity: 0.8 } : { cx: [322, 540], opacity: [0, 1, 0] }}
            transition={reduced ? undefined : { duration: 3.6, repeat: Infinity, ease: "linear", delay: index * 1.2 }}
          />
        ))}

        <rect x="328" y="326" width="216" height="92" rx="14" fill="#111827" stroke="#2E3A4D" />
        <text x="348" y="354" fill="#CBD5E1" fontSize="11" letterSpacing="1.1">EXECUTIVE VISIBILITY</text>
        <path d="M348 394 L392 378 L432 386 L474 360 L524 370" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <path d="M348 404 L392 398 L432 386 L474 382 L524 360" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" opacity=".8" />
      </svg>
    </div>
  );
}


