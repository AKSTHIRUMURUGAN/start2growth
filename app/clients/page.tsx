// app/clients/page.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { clientsData } from "@/lib/clients-data";

const H1 = "clamp(2.8rem, 2rem + 3.5vw, 5.5rem)";

export default function ClientsPage() {
  const clients = Object.entries(clientsData);

  return (
    <div>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4a853]/5 via-transparent to-[#0a0a0a]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4a853]/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36 pb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4a853] mb-3 block">
            Case Studies
          </span>
          <h1
            className="font-bold tracking-tight text-white mb-4 leading-[1.05]"
            style={{ fontSize: H1 }}
          >
            Client{" "}
            <span className="text-gold-gradient">Success Stories</span>
          </h1>
          <p className="text-lg text-[#a1a1a1] max-w-xl leading-relaxed">
            Real results, real growth. Explore how we&apos;ve helped businesses
            across industries achieve remarkable transformations.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      {/* ── Grid ───────────────────────────────────── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {clients.map(([slug, client], i) => (
              <ScrollReveal key={slug} delay={i * 0.05}>
                <Link
                  href={`/clients/${slug}`}
                  className="group block glass rounded-2xl p-6 lg:p-8 border border-white/[0.04] hover:border-[#d4a853]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4a853]/5 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#d4a853] transition-colors duration-300">
                        {client.name}
                      </h3>
                      <p className="text-xs text-[#d4a853]/60 uppercase tracking-wider mt-1">
                        {client.category}
                      </p>
                      <p className="text-sm text-[#a1a1a1] mt-3 leading-relaxed line-clamp-2">
                        {client.overview}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-[#a1a1a1] group-hover:text-[#d4a853] transition-colors shrink-0 mt-1"
                      aria-hidden
                    />
                  </div>
                  {client.results && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/[0.04]">
                      {client.results.slice(0, 3).map((result: string, j: number) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1.5 rounded-full bg-[#d4a853]/5 text-[#d4a853]"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
