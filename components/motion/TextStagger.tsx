"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextStaggerProps {
  text: string;
  className?: string;
  delay?: number;
  /** "words" (default) or "chars" */
  mode?: "words" | "chars";
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function TextStagger({
  text,
  className,
  delay = 0,
  mode = "words",
  as: Tag = "h2",
}: TextStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const units = mode === "chars" ? text.split("") : text.split(" ");

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: mode === "words" ? "0.25em" : undefined }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + i * (mode === "chars" ? 0.03 : 0.06),
            ease: EASE,
          }}
          aria-hidden
        >
          {unit === " " ? "\u00A0" : unit}
        </motion.span>
      ))}
    </Tag>
  );
}
