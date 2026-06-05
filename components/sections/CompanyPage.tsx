// components/sections/CompanyPage.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const H1 = "clamp(2.8rem, 2rem + 3.5vw, 5.5rem)";
const H2 = "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)";

interface CompanyPageProps {
  company: {
    name: string;
    tagline: string;
    description: string;
    longDescription: string;
    services: { title: string; items: string[] }[];
    founder: {
      name: string;
      role: string;
      bio: string;
      strengths: string[];
    };
    testimonials?: { quote: string; author: string }[];
  };
}

export default function CompanyPage({ company }: CompanyPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 0.3], ["0%", "-10%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  return (
    <div ref={containerRef}>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4a853]/5 via-transparent to-[#0a0a0a]" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#d4a853]/4 rounded-full blur-[120px]" />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36 pb-20"
          style={{ y: yContent, opacity: opacityContent }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Back to Ecosystem
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-[#d4a853] mb-4 block"
          >
            {company.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-tight text-white mb-6 leading-[1.05]"
            style={{ fontSize: H1 }}
          >
            {company.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg lg:text-xl text-[#a1a1a1] max-w-2xl leading-relaxed mb-8"
          >
            {company.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d4a853] text-black font-semibold hover:bg-[#c8946e] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a853]/25"
            >
              Work With {company.name.split(" ")[0]}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* ── About ──────────────────────────────────── */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2
              className="font-bold text-white mb-6 tracking-tight"
              style={{ fontSize: H2 }}
            >
              About{" "}
              <span className="text-gold-gradient">{company.name}</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] leading-relaxed">
              {company.longDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services ───────────────────────────────── */}
      <section className="section-pad bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2
              className="font-bold text-white mb-12 text-center tracking-tight"
              style={{ fontSize: H2 }}
            >
              Our <span className="text-gold-gradient">Services</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 lg:p-8 border border-white/[0.04] hover:border-[#d4a853]/15 transition-all duration-500 h-full hover:-translate-y-1 group">
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#d4a853] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#a1a1a1]"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ────────────────────────────────── */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2
              className="font-bold text-white mb-10 text-center tracking-tight"
              style={{ fontSize: H2 }}
            >
              Meet the <span className="text-gold-gradient">Founder</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass rounded-2xl p-8 lg:p-10 border border-white/[0.04]">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-2xl bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-[#d4a853]" aria-hidden>
                    {company.founder.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {company.founder.name}
                  </h3>
                  <p className="text-sm text-[#d4a853] mt-1">
                    {company.founder.role}
                  </p>
                  <p className="text-sm text-[#a1a1a1] mt-4 leading-relaxed">
                    {company.founder.bio}
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-5" role="list" aria-label="Strengths">
                    {company.founder.strengths.map((strength) => (
                      <li
                        key={strength}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] text-[#a1a1a1] border border-white/[0.06] hover:border-[#d4a853]/30 hover:text-[#d4a853] transition-colors cursor-default"
                      >
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="section-pad text-center bg-[#111111]">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <h2
              className="font-bold text-white mb-4 tracking-tight"
              style={{ fontSize: H2 }}
            >
              Ready to Work with{" "}
              <span className="text-gold-gradient">{company.name}?</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] mb-8">
              Let's discuss how we can help your business grow.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d4a853] text-black font-semibold hover:bg-[#c8946e] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a853]/25"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
