// components/sections/EcosystemSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MouseGlow from "@/components/motion/MouseGlow";

const companies = [
  {
    id: "jm-creations",
    name: "JM Creations",
    tagline: "Creative • Branding • Media",
    description:
      "Full-service digital solutions agency specializing in creative content, social media management, branding, and business development strategies that connect brands with their audience.",
    logo: "/jm/jm.jpeg",
    href: "/jm-creations",
    services: [
      "Content Creation & Design",
      "Social Media Management",
      "Digital Marketing",
      "Business Strategy",
      "Video Production",
    ],
  },
  {
    id: "zigo-digital",
    name: "Zigo Digital",
    tagline: "Performance Marketing • Lead Gen",
    description:
      "Performance-driven marketing agency focused on lead generation, Meta Ads, Google Ads, SEO, funnel optimization, and predictable growth for businesses of all sizes.",
    logo: "/zigo/zigo.jpeg",
    href: "/zigo-digital",
    services: [
      "Meta & Google Ads",
      "Lead Generation",
      "SEO & Positioning",
      "Funnel Building",
      "Analytics & Reporting",
    ],
  },
  {
    id: "techbuddyspace",
    name: "Tech Buddy Galaxy",
    tagline: "Technology • Innovation • Automation",
    description:
      "Gen-Z innovation studio building scalable websites, mobile apps, AI solutions, cloud infrastructure, CRM systems, and business automation tools. A unit of Tech Buddy Space Pvt Ltd.",
    logo: "/tbs/tbs.jpg",
    href: "/techbuddyspace",
    services: [
      "Web & Mobile Development",
      "AI & Machine Learning",
      "Cloud & DevOps",
      "CRM & ERP Systems",
      "Cybersecurity",
    ],
  },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4a853] mb-4 block">
              Our Ecosystem
            </span>
            <h2
              className="font-bold tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)" }}
            >
              Three Companies.
              <br />
              <span className="text-gold-gradient">One Growth Engine.</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto">
              Each company is a specialized powerhouse. Together, they form a
              complete ecosystem that takes your business from ideation to
              market leadership.
            </p>
          </div>
        </ScrollReveal>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {companies.map((company, index) => (
            <ScrollReveal key={company.id} delay={index * 0.1} className="h-full flex flex-col">
              <Link
                href={company.href}
                className="group relative flex flex-col justify-between flex-1 glass rounded-2xl p-6 lg:p-8 border border-white/[0.04] hover:border-[#d4a853]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4a853]/5 hover:-translate-y-1 overflow-hidden"
              >
                <MouseGlow size={280} opacity={0.08} />
                <div>
                  {/* Logo */}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 mb-6 bg-white/5 group-hover:border-[#d4a853]/30 transition-colors duration-300 shrink-0">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Tagline */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-[#d4a853] transition-colors duration-300">
                    {company.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#d4a853]/70 mb-4">
                    {company.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#a1a1a1] leading-relaxed mb-6">
                    {company.description}
                  </p>

                  {/* Services */}
                  <div className="space-y-2 mb-6">
                    {company.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-xs text-[#a1a1a1]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#d4a853]/50 shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#d4a853] group-hover:gap-3 transition-all duration-300 mt-auto">
                  Explore {company.name.split(" ")[0]}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Note */}
        <ScrollReveal delay={0.4}>
          <p className="text-center text-sm text-[#a1a1a1]/60 mt-12 max-w-xl mx-auto">
            Each company can be engaged individually or as part of the complete
            Start2Growth ecosystem for maximum impact.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
