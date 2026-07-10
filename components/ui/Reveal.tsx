"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 18,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: distance }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={{ once: true, amount: 0.14 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.07,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerList({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.ul
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={{ once: true, amount: 0.14 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.07,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

export function MotionCard({ className, ...props }: HTMLMotionProps<"article">) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.985 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.58, ease }}
      whileHover={reduced ? undefined : { y: -7, scale: 1.012 }}
      whileTap={reduced ? undefined : { scale: 0.995 }}
      className={className}
      {...props}
    />
  );
}

export function MotionListItem({ className, ...props }: HTMLMotionProps<"li">) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -18 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, ease }}
      className={className}
      {...props}
    />
  );
}

export function MotionTag({ className, ...props }: HTMLMotionProps<"span">) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.42, ease }}
      className={className}
      {...props}
    />
  );
}
