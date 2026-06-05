"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { CLIENTS, COMPANIES } from "@/lib/constants";

type Client = (typeof CLIENTS)[number];
type Company = (typeof COMPANIES)[number];

interface ClientsGridProps {
  clients: Client[];
  companies: Company[];
}

export default function ClientsGrid({ clients, companies }: ClientsGridProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-label="All clients"
      className="w-full section-pad bg-[#0a0a0a]"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          role="list"
        >
          {clients.map((client) => {
            const company = companies.find((c) => c.id === client.company);
            return (
              <motion.li key={client.slug} variants={staggerItem}>
                <Link
                  href={`/clients/${client.slug}`}
                  className="block glass rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 h-full"
                  aria-label={`${client.name} case study`}
                >
                  <div className="flex items-start gap-5 mb-6">
                    {/* Avatar */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-black font-bold text-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${client.accentColor}, ${client.accentColor}80)`,
                      }}
                      aria-hidden
                    >
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[#fafafa] mb-1">
                        {client.name}
                      </h2>
                      <p
                        className="text-xs font-medium uppercase tracking-wide"
                        style={{ color: client.accentColor }}
                      >
                        {client.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#a1a1a1] text-sm leading-relaxed mb-6">
                    {client.overview}
                  </p>

                  {/* Services */}
                  <ul className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Services provided">
                    {client.services.map((s) => (
                      <li
                        key={s}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: `${client.accentColor}12`,
                          color: client.accentColor,
                          border: `1px solid ${client.accentColor}25`,
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  {/* Company badge */}
                  {company && (
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#555]">
                        Served by{" "}
                        <span style={{ color: company.color }}>{company.name}</span>
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-[#555] group-hover:text-[#d4a853] group-hover:translate-x-1 transition-all"
                        aria-hidden
                      />
                    </div>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
