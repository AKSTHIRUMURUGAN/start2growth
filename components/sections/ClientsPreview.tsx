// components/sections/ClientsPreview.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const featuredClients = [
  {
    slug: "waymax-global",
    name: "Waymax Global",
    category: "Immigration & Visa Consultancy",
    result: "Increased quality enquiries & structured lead handling",
    image: "/images/clients/waymax-global.jpg",
  },
  {
    slug: "taras-food-park",
    name: "Taras Food Park",
    category: "Multi-Cuisine Restaurant Group",
    result: "Boosted tourist footfall & brand clarity",
    image: "/images/clients/taras-food-park.jpg",
  },
  {
    slug: "shevaroys",
    name: "SHEVAROYS",
    category: "Hotel Management College",
    result: "Growth in admission enquiries & parent trust",
    image: "/images/clients/shevaroys.jpg",
  },
  {
    slug: "o2y-hair-fixing",
    name: "O 2 Y Hair Fixing",
    category: "Hair Fixing & Replacement",
    result: "Higher conversion rate & trust building",
    image: "/images/clients/o2y-hair-fixing.jpg",
  },
];

export default function ClientsPreview() {
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] mb-3 block">
              Client Success
            </span>
            <h2
              className="font-bold tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)" }}
            >
              Real Results.
              <br />
              <span className="text-gold-gradient">Real Growth.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/clients"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-gold)] hover:text-white transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {featuredClients.map((client, i) => (
            <ScrollReveal key={client.slug} delay={i * 0.1} className="h-full flex flex-col">
              <Link
                href={`/clients/${client.slug}`}
                className="group block flex-1 glass rounded-2xl overflow-hidden border border-white/[0.04] hover:border-[var(--accent-gold)]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--accent-gold)]/5"
                data-cursor-hover
              >
                <div className="flex flex-col sm:flex-row h-full">
                  {/* Image placeholder */}
                  <div className="sm:w-48 h-40 sm:h-auto bg-gradient-to-br from-[var(--accent-gold)]/10 to-[var(--accent-warm)]/5 flex items-center justify-center shrink-0">
                    <span className="text-4xl font-bold text-[var(--accent-gold)]/20">
                      {client.name.charAt(0)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 lg:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                          {client.name}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors shrink-0 mt-1" />
                      </div>
                      <p className="text-xs text-[var(--accent-gold)]/60 uppercase tracking-wider mt-1">
                        {client.category}
                      </p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                      {client.result}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}