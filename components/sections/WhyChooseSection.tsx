"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, BarChart3, Shield, Headphones, Star } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>> = {
  Zap, Target, BarChart3, Shield, Headphones, Star,
};

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="why-heading"
      className="section-pad bg-[#111111]"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#d4a853] mb-3"
          >
            Why Start2Growth
          </motion.p>
          <motion.h2
            id="why-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(1.75rem, 1.2rem + 2vw, 3rem)" }}
            className="font-bold text-[#fafafa] mb-4 tracking-tight"
          >
            More Than a Service Provider
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a1a1a1] max-w-xl mx-auto leading-relaxed"
          >
            Your strategic partner in growth — combining technical expertise with
            business acumen under one unified ecosystem.
          </motion.p>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Why choose Start2Growth"
        >
          {WHY_CHOOSE.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Star;
            return (
              <motion.li
                key={item.title}
                variants={staggerItem}
                className="glass rounded-3xl p-8 border border-white/5 hover:border-[#d4a853]/20 transition-all duration-300 group hover:-translate-y-1 flex gap-5 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center shrink-0 group-hover:bg-[#d4a853]/20 transition-colors mt-0.5">
                  <Icon size={18} className="text-[#d4a853]" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#fafafa] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[#a1a1a1] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
