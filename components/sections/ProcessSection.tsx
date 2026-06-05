// components/sections/ProcessSection.tsx
"use client";

import { Lightbulb, ClipboardList, Palette, Code2, TestTube, Rocket } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your goals, audience, and market landscape.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strategy",
    description: "Detailed roadmap with milestones, timelines, and architecture.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    description: "Beautiful, intuitive interfaces and brand identity creation.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Build",
    description: "Robust, scalable solutions using the latest technologies.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Test",
    description: "Thorough QA, security checks, and performance optimization.",
    icon: TestTube,
  },
  {
    number: "06",
    title: "Launch & Scale",
    description: "Deploy, market, iterate — turn users into loyal customers.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.03] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] mb-4 block">
              Our Process
            </span>
            <h2
              className="font-bold tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)" }}
            >
              From Idea to <span className="text-gold-gradient">Reality</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Pay as you go. Add or remove services like add-ons. No heavy
              upfronts — just momentum.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={i * 0.08} className="h-full flex flex-col">
                <div className="group glass rounded-2xl p-6 lg:p-8 border border-white/[0.04] hover:border-[var(--accent-gold)]/15 transition-all duration-500 hover:-translate-y-1 relative flex-1">
                  {/* Number */}
                  <span className="absolute top-6 right-6 text-5xl font-bold text-white/[0.02] group-hover:text-[var(--accent-gold)]/5 transition-colors">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-gold)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--accent-gold)]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[var(--accent-gold)]" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}