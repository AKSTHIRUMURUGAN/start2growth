// components/sections/Hero.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleContent = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const yContent = useTransform(scrollYProgress, [0, 0.5], ["0%", "-15%"]);

  const words = ["Build.", "Automate.", "Market.", "Grow."];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Parallax Layers */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg, opacity: opacityBg }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,83,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--accent-warm)]/4 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-[150px]" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center pt-20 lg:pt-24"
        style={{ y: yContent, scale: scaleContent }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 lg:mb-10"
        >
          <Sparkles className="w-4 h-4 text-[var(--accent-gold)]" />
          <span className="text-sm text-[var(--text-secondary)]">
            Three Companies. One Growth Engine.
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="font-bold leading-[0.95] tracking-tight mb-6 max-w-4xl mx-auto"
          style={{ fontSize: "clamp(2.8rem, 2rem + 4vw, 6.5rem)" }}
        >
          <span className="text-white">From </span>
          <span className="text-gold-gradient">Idea</span>
          <span className="text-white"> to </span>
          <span className="text-gold-gradient">Scale</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-white">Everything Under</span>
          <br />
          <span className="text-gold-gradient">One Roof</span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 lg:mb-12 leading-relaxed"
        >
          Creative branding by JM Creations, performance marketing by Zigo Digital,
          and technology development by Tech Buddy Galaxy — unified to grow your
          business from zero to market leader.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--accent-gold)] text-black font-semibold text-base hover:bg-[var(--accent-warm)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--accent-gold)]/30 hover:scale-[1.02] flex items-center justify-center gap-2"
            data-cursor-hover
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#ecosystem"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-white font-medium text-base hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300"
          >
            Explore Ecosystem
          </Link>
        </motion.div>

        {/* Animated Tagline Words */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-3 lg:gap-4"
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 + i * 0.15 }}
              className={`text-sm lg:text-base font-medium px-5 py-2 rounded-full ${i === words.length - 1
                ? "bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/20"
                : "glass text-[var(--text-secondary)]"
                }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}