// app/clients/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { clientsData } from "@/lib/clients-data";

const H1 = "clamp(2.8rem, 2rem + 3.5vw, 5.5rem)";
const H2 = "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)";

export default function ClientDetailPage() {
  const { slug } = useParams();
  const client = clientsData[slug as string];

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Client Not Found
          </h1>
          <Link
            href="/clients"
            className="text-[#d4a853] hover:text-white transition-colors"
          >
            View All Clients
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4a853]/5 via-transparent to-[#0a0a0a]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#d4a853]/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36 pb-20">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            All Case Studies
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4a853] mb-3 block">
            {client.category}
          </span>
          <h1
            className="font-bold tracking-tight text-white mb-4 leading-[1.05]"
            style={{ fontSize: H1 }}
          >
            {client.name}
          </h1>
          <p className="text-lg text-[#a1a1a1] max-w-2xl leading-relaxed">
            {client.overview}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* ── Challenge ──────────────────────────────── */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-[#d4a853]" aria-hidden />
              </div>
              <h2
                className="font-bold text-white tracking-tight"
                style={{ fontSize: H2 }}
              >
                The{" "}
                <span className="text-gold-gradient">Challenge</span>
              </h2>
            </div>
            <p className="text-lg text-[#a1a1a1] leading-relaxed mb-8">
              {client.problemDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {client.problems.map((problem: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-3 glass rounded-xl p-4 border border-white/[0.04] hover:border-[#d4a853]/15 transition-colors"
                >
                  <span className="text-[#d4a853] font-bold text-sm shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-[#a1a1a1]">{problem}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Solution ───────────────────────────────── */}
      <section className="section-pad bg-[#111111]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-[#d4a853]" aria-hidden />
              </div>
              <h2
                className="font-bold text-white tracking-tight"
                style={{ fontSize: H2 }}
              >
                Our{" "}
                <span className="text-gold-gradient">Solution</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {client.services.map((service: { title: string; details: string[] }, i: number) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 border border-white/[0.04] hover:border-[#d4a853]/15 transition-all duration-500 h-full hover:-translate-y-1 group">
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#d4a853] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.details.map((detail: string) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-sm text-[#a1a1a1]"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5"
                          aria-hidden
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ────────────────────────────────── */}
      {client.results && (
        <section className="section-pad">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#d4a853]" aria-hidden />
                </div>
                <h2
                  className="font-bold text-white tracking-tight"
                  style={{ fontSize: H2 }}
                >
                  The{" "}
                  <span className="text-gold-gradient">Results</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {client.results.map((result: string, i: number) => (
                  <div
                    key={i}
                    className="glass rounded-xl p-5 border border-[#d4a853]/10 hover:border-[#d4a853]/25 transition-colors text-center"
                  >
                    <CheckCircle2
                      className="w-6 h-6 text-[#d4a853] mx-auto mb-2"
                      aria-hidden
                    />
                    <p className="text-sm text-[#a1a1a1]">{result}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── CTA ────────────────────────────────────── */}
      <section className="section-pad text-center bg-[#111111]">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <h2
              className="font-bold text-white mb-4 tracking-tight"
              style={{ fontSize: H2 }}
            >
              Want Similar{" "}
              <span className="text-gold-gradient">Results?</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] mb-8">
              Let&apos;s build your growth story together.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d4a853] text-black font-semibold hover:bg-[#c8946e] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a853]/25"
            >
              Start Your Project
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
