"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { CLIENTS, COMPANIES } from "@/lib/constants";

type Client = (typeof CLIENTS)[number];
type Company = (typeof COMPANIES)[number];

interface ClientDetailProps {
  client: Client;
  company?: Company;
}

export default function ClientDetail({ client, company }: ClientDetailProps) {
  const problemRef = useRef(null);
  const servicesRef = useRef(null);
  const resultsRef = useRef(null);
  const problemInView = useInView(problemRef, { once: true, margin: "-80px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });
  const resultsInView = useInView(resultsRef, { once: true, margin: "-80px" });

  return (
    <main id="main-content">
      {/* Hero */}
      <section
        aria-labelledby="client-heading"
        className="relative pt-32 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
            style={{ background: client.accentColor }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#d4a853] transition-colors"
            >
              <ArrowLeft size={14} aria-hidden />
              All Clients
            </Link>
          </motion.div>

          <div className="flex items-center gap-5 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-black font-bold text-2xl shrink-0"
              style={{
                background: `linear-gradient(135deg, ${client.accentColor}, ${client.accentColor}80)`,
              }}
              aria-hidden
            >
              {client.name.charAt(0)}
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: client.accentColor }}
              >
                {client.category}
              </motion.p>
              <motion.h1
                id="client-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 3.5rem)" }}
                className="font-bold text-[#fafafa] tracking-tight leading-tight"
              >
                {client.name}
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a1a1a1] leading-relaxed text-lg max-w-3xl"
          >
            {client.overview}
          </motion.p>

          {company && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <span className="text-xs text-[#555]">
                Project handled by{" "}
                <Link
                  href={`/${company.slug}`}
                  className="font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: company.color }}
                >
                  {company.name}
                </Link>
              </span>
            </motion.div>
          )}
        </div>
      </section>

      {/* Problem */}
      <section
        ref={problemRef}
        aria-labelledby="problem-heading"
        className="section-pad bg-[#111111]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 flex items-center justify-center">
              <AlertCircle size={18} className="text-[#ef4444]" aria-hidden />
            </div>
            <h2
              id="problem-heading"
              style={{ fontSize: "clamp(1.4rem, 1rem + 1.5vw, 2rem)" }}
              className="font-bold text-[#fafafa]"
            >
              The Challenge
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#a1a1a1] leading-relaxed text-base"
          >
            {client.problem}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section
        ref={servicesRef}
        aria-labelledby="services-heading"
        className="w-full section-pad bg-[#0a0a0a]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: client.accentColor }}
          >
            What We Did
          </motion.p>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2.5rem)" }}
            className="font-bold text-[#fafafa] mb-10 tracking-tight"
          >
            Services Provided
          </motion.h2>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            role="list"
            aria-label="Services provided to client"
          >
            {client.services.map((service) => (
              <motion.li
                key={service}
                variants={staggerItem}
                className="flex items-center gap-3 glass rounded-2xl px-5 py-4 border border-white/5 hover:border-white/10 transition-all duration-200"
              >
                <CheckCircle
                  size={16}
                  style={{ color: client.accentColor }}
                  className="shrink-0"
                  aria-hidden
                />
                <span className="text-sm text-[#a1a1a1]">{service}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Results */}
      <section
        ref={resultsRef}
        aria-labelledby="results-heading"
        className="section-pad bg-[#111111]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${client.accentColor}15`, border: `1px solid ${client.accentColor}30` }}
            >
              <TrendingUp size={18} style={{ color: client.accentColor }} aria-hidden />
            </div>
            <h2
              id="results-heading"
              style={{ fontSize: "clamp(1.4rem, 1rem + 1.5vw, 2rem)" }}
              className="font-bold text-[#fafafa]"
            >
              Results Achieved
            </h2>
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            role="list"
            aria-label="Results achieved"
          >
            {client.results.map((result) => (
              <motion.li
                key={result}
                variants={staggerItem}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-200 flex items-start gap-4 h-full"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${client.accentColor}15`, border: `1px solid ${client.accentColor}25` }}
                >
                  <TrendingUp size={14} style={{ color: client.accentColor }} aria-hidden />
                </div>
                <p className="text-sm text-[#a1a1a1] leading-relaxed">{result}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </main>
  );
}
