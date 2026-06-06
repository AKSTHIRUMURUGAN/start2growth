// components/sections/Hero.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MouseGlow from "@/components/motion/MouseGlow";
import MagneticButton from "@/components/motion/MagneticButton";

const EASE = [0.22, 1, 0.36, 1] as const;

// Word-by-word stagger for the h1
const heroWords = [
  { text: "From ",      gold: false },
  { text: "Idea",       gold: true  },
  { text: " to ",       gold: false },
  { text: "Scale,",     gold: true  },
  { text: "Everything", gold: false },
  { text: " Under ",    gold: false },
  { text: "One Roof",   gold: true  },
];

const taglineWords = ["Build.", "Automate.", "Market.", "Grow."];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg      = useTransform(scrollYProgress, [0, 1],   ["0%", "28%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yContent  = useTransform(scrollYProgress, [0, 0.5], ["0%", "-12%"]);
  const scaleContent = useTransform(scrollYProgress, [0, 0.5], [1, 1.04]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Layer 1: Background parallax ─────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg, opacity: opacityBg }}
        aria-hidden
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,83,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.03,
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: "rgba(212,168,83,0.05)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "rgba(200,148,110,0.04)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]" style={{ background: "rgba(255,255,255,0.01)" }} />
      </motion.div>

      {/* ── Layer 2: Mouse-follow spotlight ──────── */}
      <MouseGlow size={500} opacity={0.06} />

      {/* ── Layer 3: Content ─────────────────────── */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 text-center pt-20 lg:pt-24"
        style={{ y: yContent, scale: scaleContent }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 lg:mb-10"
        >
          <Sparkles className="w-4 h-4 text-[#d4a853]" aria-hidden />
          <span className="text-sm text-[#a1a1a1]">
            Three Companies. One Growth Engine.
          </span>
        </motion.div>

        {/* ── H1: word-by-word stagger ─────────────── */}
        <h1
          className="font-bold leading-[1.0] tracking-tight mb-6 max-w-4xl mx-auto"
          style={{ fontSize: "clamp(2.8rem, 2rem + 4vw, 6.5rem)" }}
        >
          {heroWords.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block ${word.gold ? "text-gold-gradient" : "text-white"}`}
              style={{ marginRight: word.text.startsWith(" ") || word.text.endsWith(" ") ? "0" : "0.15em" }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.3 + i * 0.07,
                ease: EASE,
              }}
              aria-hidden
            >
              {word.text}
            </motion.span>
          ))}
          {/* Screen-reader-only full text */}
          <span className="sr-only">From Idea to Scale, Everything Under One Roof</span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
          className="text-lg lg:text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10 lg:mb-12 leading-relaxed"
        >
          Creative branding by JM Creations, performance marketing by Zigo
          Digital, and technology development by Tech Buddy Galaxy — unified to
          grow your business from zero to market leader.
        </motion.p>

        {/* ── CTAs with magnetic pull ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-black transition-all duration-300 hover:shadow-2xl hover:opacity-90"
              style={{ background: "#d4a853" }}
              data-cursor-hover
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="#ecosystem"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 text-white font-medium text-base hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              Explore Ecosystem
            </Link>
          </MagneticButton>
        </motion.div>

        {/* ── Tagline word pills ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-3 lg:gap-4"
          aria-hidden
        >
          {taglineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.55 + i * 0.12, ease: EASE }}
              className={`text-sm lg:text-base font-medium px-5 py-2 rounded-full ${
                i === taglineWords.length - 1
                  ? "border text-[#d4a853] border-[#d4a853]/25"
                  : "glass text-[#a1a1a1]"
              }`}
              style={i === taglineWords.length - 1 ? { background: "rgba(212,168,83,0.08)" } : undefined}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }}
        aria-hidden
      />
    </section>
  );
}
