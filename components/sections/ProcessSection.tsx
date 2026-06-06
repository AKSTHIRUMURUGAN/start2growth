// components/sections/ProcessSection.tsx
"use client";

import { Lightbulb, ClipboardList, Palette, Code2, TestTube, Rocket } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MouseGlow from "@/components/motion/MouseGlow";

const steps = [
  { number: "01", title: "Discovery",     description: "Deep dive into your goals, audience, and market landscape.", icon: Lightbulb    },
  { number: "02", title: "Strategy",      description: "Detailed roadmap with milestones, timelines, and architecture.", icon: ClipboardList },
  { number: "03", title: "Design",        description: "Beautiful, intuitive interfaces and brand identity creation.", icon: Palette      },
  { number: "04", title: "Build",         description: "Robust, scalable solutions using the latest technologies.", icon: Code2        },
  { number: "05", title: "Test",          description: "Thorough QA, security checks, and performance optimization.", icon: TestTube     },
  { number: "06", title: "Launch & Scale",description: "Deploy, market, iterate — turn users into loyal customers.", icon: Rocket       },
];

export default function ProcessSection() {
  return (
    <section className="section-pad relative overflow-hidden" aria-labelledby="process-heading">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.03] hidden lg:block" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4a853] mb-4 block">
              Our Process
            </span>
            <h2
              id="process-heading"
              className="font-bold tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)" }}
            >
              From Idea to{" "}
              <span className="text-gold-gradient">Reality</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] max-w-xl mx-auto leading-relaxed">
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
                <div className="group relative glass rounded-2xl p-6 lg:p-8 border border-white/[0.04] hover:border-[#d4a853]/20 transition-all duration-500 hover:-translate-y-1 flex-1 overflow-hidden">
                  <MouseGlow size={220} opacity={0.07} />

                  {/* Step number watermark */}
                  <span
                    className="absolute top-5 right-5 text-5xl font-bold transition-colors duration-500 select-none"
                    style={{ color: "rgba(255,255,255,0.025)" }}
                    aria-hidden
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#d4a853]/10 flex items-center justify-center mb-5 group-hover:bg-[#d4a853]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#d4a853]" aria-hidden />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#d4a853] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#a1a1a1] leading-relaxed">
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
