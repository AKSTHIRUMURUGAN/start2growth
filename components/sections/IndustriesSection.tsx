"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { INDUSTRIES } from "@/lib/constants";

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="industries-heading"
      className="section-pad bg-[#111111]"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-[#d4a853] mb-3"
        >
          Industries We Serve
        </motion.p>
        <motion.h2
          id="industries-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: "clamp(1.75rem, 1.2rem + 2vw, 3rem)" }}
          className="font-bold text-[#fafafa] mb-10 tracking-tight"
        >
          We Work Across Industries
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
          role="list"
          aria-label="Industries served"
        >
          {INDUSTRIES.map((industry, i) => (
            <motion.li
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
              className="px-5 py-2.5 rounded-full glass border border-white/8 text-sm text-[#a1a1a1] hover:text-[#d4a853] hover:border-[#d4a853]/30 transition-all duration-200 cursor-default"
            >
              {industry}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
