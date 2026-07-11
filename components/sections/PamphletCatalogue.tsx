// components/sections/PamphletCatalogue.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Smartphone,
  Brain,
  Code2,
  Cloud,
  Plug,
  Palette,
  Shield,
  Wrench,
  Megaphone,
  Search,
  Link2,
  Tv2,
  Users,
  Radio,
  BookOpen,
  Zap,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  FileCheck,
  BarChart3,
  Brush,
  Video,
  Camera,
  Monitor,
  CalendarDays,
  Printer,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { techServices, marketingServices, performancePlans, campaignInclusions, jmServices, jmMonthlyPackages } from "@/lib/data";

// ─── Icon Map ────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  // Tech Buddy Galaxy
  "web-development": Globe,
  "mobile-apps": Smartphone,
  "ai-automation": Brain,
  "software-solutions": Code2,
  "cloud-devops": Cloud,
  "api-integrations": Plug,
  "uiux-design": Palette,
  "cyber-security": Shield,
  "support-maintenance": Wrench,
  // Zigo Digital
  "meta-ads": Megaphone,
  "google-ads": Search,
  "linkedin-ads": Link2,
  "ott-audio": Tv2,
  influencer: Users,
  "offline-ads": Radio,
  // JM Creations
  "jm-business-registration": FileCheck,
  "jm-digital-marketing": BarChart3,
  "jm-branding-design": Brush,
  "jm-video-production": Video,
  "jm-photography": Camera,
  "jm-website-tech": Monitor,
  "jm-event-management": CalendarDays,
  "jm-printing": Printer,
  "jm-consulting": TrendingUp,
  "jm-innovation": Lightbulb,
};

// ─── Category Colors ─────────────────────────────────────────
const categoryColors: Record<string, string> = {
  // Tech Buddy Galaxy
  "web-development":    "from-blue-500/20 to-blue-600/5",
  "mobile-apps":        "from-purple-500/20 to-purple-600/5",
  "ai-automation":      "from-emerald-500/20 to-emerald-600/5",
  "software-solutions": "from-orange-500/20 to-orange-600/5",
  "cloud-devops":       "from-sky-500/20 to-sky-600/5",
  "api-integrations":   "from-pink-500/20 to-pink-600/5",
  "uiux-design":        "from-rose-500/20 to-rose-600/5",
  "cyber-security":     "from-red-500/20 to-red-600/5",
  "support-maintenance":"from-amber-500/20 to-amber-600/5",
  // Zigo Digital
  "meta-ads":           "from-blue-600/20 to-blue-700/5",
  "google-ads":         "from-yellow-500/20 to-yellow-600/5",
  "linkedin-ads":       "from-blue-400/20 to-blue-500/5",
  "ott-audio":          "from-violet-500/20 to-violet-600/5",
  influencer:           "from-fuchsia-500/20 to-fuchsia-600/5",
  "offline-ads":        "from-teal-500/20 to-teal-600/5",
  // JM Creations
  "jm-business-registration": "from-amber-600/20 to-amber-700/5",
  "jm-digital-marketing":     "from-cyan-500/20 to-cyan-600/5",
  "jm-branding-design":       "from-pink-500/20 to-pink-600/5",
  "jm-video-production":      "from-red-500/20 to-red-600/5",
  "jm-photography":           "from-orange-400/20 to-orange-500/5",
  "jm-website-tech":          "from-indigo-500/20 to-indigo-600/5",
  "jm-event-management":      "from-emerald-600/20 to-emerald-700/5",
  "jm-printing":              "from-slate-400/20 to-slate-500/5",
  "jm-consulting":            "from-yellow-600/20 to-yellow-700/5",
  "jm-innovation":            "from-purple-500/20 to-purple-600/5",
};

const iconColors: Record<string, string> = {
  // Tech Buddy Galaxy
  "web-development":    "#60a5fa",
  "mobile-apps":        "#c084fc",
  "ai-automation":      "#34d399",
  "software-solutions": "#fb923c",
  "cloud-devops":       "#38bdf8",
  "api-integrations":   "#f472b6",
  "uiux-design":        "#fb7185",
  "cyber-security":     "#f87171",
  "support-maintenance":"#fbbf24",
  // Zigo Digital
  "meta-ads":           "#3b82f6",
  "google-ads":         "#facc15",
  "linkedin-ads":       "#60a5fa",
  "ott-audio":          "#a78bfa",
  influencer:           "#e879f9",
  "offline-ads":        "#2dd4bf",
  // JM Creations
  "jm-business-registration": "#f59e0b",
  "jm-digital-marketing":     "#22d3ee",
  "jm-branding-design":       "#f472b6",
  "jm-video-production":      "#f87171",
  "jm-photography":           "#fb923c",
  "jm-website-tech":          "#818cf8",
  "jm-event-management":      "#10b981",
  "jm-printing":              "#94a3b8",
  "jm-consulting":            "#eab308",
  "jm-innovation":            "#a855f7",
};

// ─── All Pages (slides) ───────────────────────────────────────
type Page =
  | { type: "cover" }
  | { type: "tech-intro" }
  | { type: "service-category"; categoryId: string; tab: "tech" | "marketing" | "jm" }
  | { type: "marketing-intro" }
  | { type: "jm-intro" }
  | { type: "plans" }
  | { type: "inclusions" }
  | { type: "jm-packages" }
  | { type: "contact" };

const buildPages = (): Page[] => {
  const pages: Page[] = [{ type: "cover" }, { type: "tech-intro" }];
  techServices.forEach((cat) =>
    pages.push({ type: "service-category", categoryId: cat.id, tab: "tech" })
  );
  pages.push({ type: "marketing-intro" });
  marketingServices.forEach((cat) =>
    pages.push({ type: "service-category", categoryId: cat.id, tab: "marketing" })
  );
  pages.push({ type: "plans" }, { type: "inclusions" });
  pages.push({ type: "jm-intro" });
  jmServices.forEach((cat) =>
    pages.push({ type: "service-category", categoryId: cat.id, tab: "jm" })
  );
  pages.push({ type: "jm-packages" }, { type: "contact" });
  return pages;
};

const allPages = buildPages();

// ─── Scroll Reveal Wrapper ────────────────────────────────────
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Cover Page ───────────────────────────────────────────────
function CoverPage() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden p-8 md:p-16">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0e0a] to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4a853]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,83,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/8 mb-6"
        >
          <Star className="w-3.5 h-3.5 text-[#d4a853]" />
          <span className="text-xs tracking-widest uppercase text-[#d4a853] font-semibold">
            Official Services Catalogue
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4 leading-none"
        >
          Start
          <span className="text-gold-gradient bg-gradient-to-r from-[#d4a853] via-[#e8c97a] to-[#c8946e] bg-clip-text text-transparent">
            2
          </span>
          Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-[#a1a1a1] mb-2 font-light tracking-wide"
        >
          Build. Automate. Market. Grow.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-[#6b6b6b] mb-10 tracking-widest uppercase"
        >
          One Ecosystem · Three Specialized Companies
        </motion.p>

        {/* Company badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {[
            { name: "JM Creations", sub: "Creative & Branding", color: "#d4a853" },
            { name: "Zigo Digital", sub: "Performance Marketing", color: "#60a5fa" },
            { name: "Tech Buddy Galaxy", sub: "Technology Solutions", color: "#34d399" },
          ].map((co) => (
            <div
              key={co.name}
              className="px-4 py-2 rounded-xl border border-white/8 bg-white/3 text-left"
            >
              <div className="text-sm font-semibold" style={{ color: co.color }}>
                {co.name}
              </div>
              <div className="text-xs text-[#6b6b6b]">{co.sub}</div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[#6b6b6b] text-sm flex items-center justify-center gap-2"
        >
          <ChevronRight className="w-4 h-4 text-[#d4a853]" />
          Flip through to explore our services & pricing
        </motion.p>
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-[#d4a853]/20 rounded-tl-md" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-[#d4a853]/20 rounded-tr-md" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-[#d4a853]/20 rounded-bl-md" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-[#d4a853]/20 rounded-br-md" />
    </div>
  );
}

// ─── Section Intro Page ───────────────────────────────────────
function IntroPage({
  type,
}: {
  type: "tech" | "marketing";
}) {
  const isTech = type === "tech";
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden p-8 md:p-16">
      <div className="absolute inset-0" style={{ background: isTech ? "linear-gradient(135deg, #0a0a14 0%, #0a0a0a 100%)" : "linear-gradient(135deg, #0a100a 0%, #0a0a0a 100%)" }} />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(${isTech ? "#60a5fa" : "#34d399"} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: isTech ? "rgba(96,165,250,0.06)" : "rgba(52,211,153,0.06)" }}
      />

      <div className="relative z-10 text-center max-w-lg">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center border border-white/8"
          style={{ background: isTech ? "rgba(96,165,250,0.08)" : "rgba(52,211,153,0.08)" }}
        >
          {isTech ? (
            <Code2 className="w-9 h-9 text-blue-400" />
          ) : (
            <Megaphone className="w-9 h-9 text-emerald-400" />
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs uppercase tracking-[0.3em] mb-3 font-semibold"
          style={{ color: isTech ? "#60a5fa" : "#34d399" }}
        >
          {isTech ? "Section One" : "Section Two"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
        >
          {isTech ? "Technology" : "Marketing"}
          <br />
          <span className="text-[#a1a1a1] font-light text-3xl md:text-4xl">
            {isTech ? "Services" : "Services"}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#6b6b6b] text-sm leading-relaxed"
        >
          {isTech
            ? "End-to-end technology solutions built to scale — from simple websites to enterprise platforms and AI-powered automation."
            : "Full-funnel performance marketing across every channel — from Meta & Google to OTT streaming and offline media."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-6 text-[#6b6b6b] text-xs"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: isTech ? "#60a5fa" : "#34d399" }} />
            {isTech ? "9 Tech Categories" : "6 Marketing Categories"}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4a853]" />
            Transparent Pricing
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Service Category Page ────────────────────────────────────
function ServiceCategoryPage({
  categoryId,
  tab,
}: {
  categoryId: string;
  tab: "tech" | "marketing" | "jm";
}) {
  const allCats = tab === "tech" ? techServices : tab === "marketing" ? marketingServices : jmServices;
  const cat = allCats.find((c) => c.id === categoryId)!;
  const Icon = iconMap[categoryId] || Globe;
  const iconColor = iconColors[categoryId] || "#d4a853";
  const gradClass = categoryColors[categoryId] || "from-white/5 to-transparent";

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradClass} pointer-events-none`} />
      <div className="absolute inset-0 bg-[#0a0a0a]/85 pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 p-6 md:p-10 min-h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/8"
            style={{ background: `${iconColor}14` }}
          >
            <Icon className="w-6 h-6" style={{ color: iconColor }} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {cat.title}
            </h2>
            <p className="text-xs text-[#6b6b6b] mt-0.5">{cat.subtitle}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Services list */}
        <div className="flex-1 grid grid-cols-1 gap-2">
          {cat.services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-white/[0.04] hover:border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ background: iconColor }}
                />
                <span className="text-sm text-[#c8c8c8] group-hover:text-white transition-colors truncate">
                  {service.name}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                {service.note && (
                  <span className="text-[10px] text-[#6b6b6b] italic hidden sm:block">
                    {service.note}
                  </span>
                )}
                <span
                  className="text-sm font-semibold tabular-nums whitespace-nowrap"
                  style={{ color: iconColor }}
                >
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer tag */}
        <div className="mt-4 flex items-center gap-2 text-[10px] text-[#4b4b4b] uppercase tracking-widest">
          <div className="flex-1 h-px bg-white/5" />
          <span>Start2Growth</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>
      </div>
    </div>
  );
}

// ─── Performance Plans Page ───────────────────────────────────
function PlansPage() {
  const planColors = ["#60a5fa", "#d4a853", "#c084fc", "#34d399"];
  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a853]/8 via-[#0a0a0a] to-purple-500/5" />
      <div className="absolute inset-0 bg-[#0a0a0a]/80" />

      <div className="relative z-10 p-6 md:p-10 min-h-full flex flex-col">
        <div className="mb-6">
          <p className="text-[10px] text-[#d4a853] uppercase tracking-[0.3em] mb-2">
            Marketing Management
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Performance Plans
          </h2>
          <p className="text-xs text-[#6b6b6b] mt-1">
            Monthly retainer pricing for managed campaigns
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {performancePlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/[0.06] p-5 flex flex-col gap-3 overflow-hidden"
              style={{ background: `${planColors[i]}08` }}
            >
              {i === 2 && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold text-black" style={{ background: "#d4a853" }}>
                  Popular
                </div>
              )}
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: planColors[i] }}>
                  {plan.name}
                </div>
                <div className="text-2xl font-black text-white">
                  {plan.price}
                  <span className="text-sm font-normal text-[#6b6b6b]">/mo</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-[#a1a1a1]">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: planColors[i] }} />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-[10px] text-[#4b4b4b] uppercase tracking-widest">
          <div className="flex-1 h-px bg-white/5" />
          <span>Start2Growth</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>
      </div>
    </div>
  );
}

// ─── Campaign Inclusions Page ─────────────────────────────────
function InclusionsPage() {
  const half = Math.ceil(campaignInclusions.length / 2);
  const col1 = campaignInclusions.slice(0, half);
  const col2 = campaignInclusions.slice(half);

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/6 via-[#0a0a0a] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[#0a0a0a]/82" />

      <div className="relative z-10 p-6 md:p-10 min-h-full flex flex-col">
        <div className="mb-6">
          <p className="text-[10px] text-emerald-400 uppercase tracking-[0.3em] mb-2">
            Every Campaign Includes
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            What's in Every
            <br />
            <span className="text-[#a1a1a1] font-light">Campaign</span>
          </h2>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2">
          {[...col1, ...col2].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="flex items-center gap-2.5 py-1.5"
            >
              <div className="w-5 h-5 rounded-full border border-emerald-400/30 bg-emerald-400/8 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-[#c8c8c8]">{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl border border-emerald-400/15 bg-emerald-400/4">
          <p className="text-xs text-emerald-300 text-center">
            ✦ All plans include dedicated account management & transparent reporting
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[10px] text-[#4b4b4b] uppercase tracking-widest">
          <div className="flex-1 h-px bg-white/5" />
          <span>Start2Growth</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>
      </div>
    </div>
  );
}

// ─── Contact Page ─────────────────────────────────────────────
function ContactPage() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden p-8 md:p-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0b08] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4a853]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="w-16 h-16 mx-auto mb-6 rounded-2xl border border-[#d4a853]/20 bg-[#d4a853]/8 flex items-center justify-center"
        >
          <Zap className="w-7 h-7 text-[#d4a853]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2"
        >
          Ready to Grow?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#6b6b6b] text-sm mb-8"
        >
          Let's build something extraordinary together. Our team is ready to transform your vision into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3 mb-8"
        >
          {[
            { icon: Phone, label: "+91 98765 43210", sub: "Call or WhatsApp" },
            { icon: Mail, label: "hello@start2growth.in", sub: "Email us anytime" },
            { icon: MapPin, label: "Chennai, Tamil Nadu", sub: "India" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-[#d4a853]/10 border border-[#d4a853]/15 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#d4a853]" />
              </div>
              <div>
                <div className="text-sm text-white font-medium">{label}</div>
                <div className="text-[10px] text-[#6b6b6b]">{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="/#contact"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-[#d4a853]/20"
          style={{ background: "linear-gradient(135deg, #d4a853, #e8c97a)" }}
        >
          Start Your Project <ArrowRight className="w-4 h-4" />
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-[10px] text-[#4b4b4b] uppercase tracking-[0.3em]"
        >
          www.start2growth.in
        </motion.p>
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-6 left-6 w-10 h-10 border-l border-t border-[#d4a853]/15 rounded-tl-md" />
      <div className="absolute top-6 right-6 w-10 h-10 border-r border-t border-[#d4a853]/15 rounded-tr-md" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-l border-b border-[#d4a853]/15 rounded-bl-md" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r border-b border-[#d4a853]/15 rounded-br-md" />
    </div>
  );
}

// ─── JM Creations Intro Page ─────────────────────────────────
function JmIntroPage() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden p-8 md:p-16">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #0c0a06 50%, #0a0a0a 100%)" }} />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: "rgba(245,158,11,0.06)" }} />

      <div className="relative z-10 text-center max-w-lg">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center border border-white/8"
          style={{ background: "rgba(245,158,11,0.08)" }}
        >
          <Star className="w-9 h-9 text-[#f59e0b]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs uppercase tracking-[0.3em] mb-3 font-semibold text-[#f59e0b]"
        >
          Section Three
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
        >
          JM Creations
          <br />
          <span className="text-[#a1a1a1] font-light text-3xl md:text-4xl">Portfolio</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#6b6b6b] text-sm leading-relaxed"
        >
          One Company. Complete Business Solutions. From government registrations and legal compliance to branding, events, consulting, and digital transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[11px]"
        >
          {["Business Registration", "Digital Marketing", "Branding & Design", "Video & Photography", "Event Management", "Consulting", "Innovation"].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5 text-[#f59e0b]">{tag}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── JM Monthly Packages Page ─────────────────────────────────
function JmPackagesPage() {
  const pkgColors = ["#60a5fa", "#f59e0b", "#a855f7"];
  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/6 via-[#0a0a0a] to-purple-500/5" />
      <div className="absolute inset-0 bg-[#0a0a0a]/82" />

      <div className="relative z-10 p-6 md:p-10 min-h-full flex flex-col">
        <div className="mb-6">
          <p className="text-[10px] text-[#f59e0b] uppercase tracking-[0.3em] mb-2">JM Creations</p>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Monthly Packages</h2>
          <p className="text-xs text-[#6b6b6b] mt-1">All-inclusive monthly growth packages</p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        <div className="flex-1 grid grid-cols-1 gap-4">
          {jmMonthlyPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              className="relative rounded-2xl border p-4 flex flex-col gap-2 overflow-hidden"
              style={{
                borderColor: pkg.highlight ? `${pkgColors[i]}40` : "rgba(255,255,255,0.06)",
                background: `${pkgColors[i]}08`,
              }}
            >
              {pkg.highlight && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold text-black" style={{ background: pkgColors[i] }}>
                  Most Popular
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold mb-0.5" style={{ color: pkgColors[i] }}>{pkg.name}</div>
                  <div className="text-2xl font-black text-white">
                    {pkg.price}<span className="text-xs font-normal text-[#6b6b6b]">/{pkg.period}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-[11px] text-[#a1a1a1]">
                    <div className="w-1 h-1 rounded-full shrink-0" style={{ background: pkgColors[i] }} />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-[10px] text-[#4b4b4b] uppercase tracking-widest">
          <div className="flex-1 h-px bg-white/5" />
          <span>JM Creations</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>
      </div>
    </div>
  );
}

// ─── Page Renderer ──────────────────────────────────────────
function PageContent({ page }: { page: Page }) {
  if (page.type === "cover") return <CoverPage />;
  if (page.type === "tech-intro") return <IntroPage type="tech" />;
  if (page.type === "marketing-intro") return <IntroPage type="marketing" />;
  if (page.type === "jm-intro") return <JmIntroPage />;
  if (page.type === "service-category")
    return <ServiceCategoryPage categoryId={page.categoryId} tab={page.tab} />;
  if (page.type === "plans") return <PlansPage />;
  if (page.type === "inclusions") return <InclusionsPage />;
  if (page.type === "jm-packages") return <JmPackagesPage />;
  if (page.type === "contact") return <ContactPage />;
  return null;
}

// ─── Table of Contents (Chapter Nav) ───────────────────────────────
// page layout: cover(0) + tech-intro(1) + 9 tech(2-10) + mkt-intro(11) + 6 mkt(12-17) + plans(18) + inclusions(19) + jm-intro(20) + 10 jm(21-30) + jm-packages(31) + contact(32)
const chapters = [
  { label: "Cover", pageIndex: 0 },
  { label: "Tech Services", pageIndex: 1 },
  { label: "Marketing Services", pageIndex: 11 },
  { label: "Perf. Plans", pageIndex: 18 },
  { label: "JM Creations", pageIndex: 20 },
  { label: "JM Packages", pageIndex: 31 },
  { label: "Contact", pageIndex: 32 },
];

// ─── Main Catalogue ───────────────────────────────────────────
export default function PamphletCatalogue() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [tocOpen, setTocOpen] = useState(false);
  const total = allPages.length;

  const goNext = () => {
    if (currentPage < total - 1) {
      setDirection("next");
      setCurrentPage((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setDirection("prev");
      setCurrentPage((p) => p - 1);
    }
  };

  const goTo = (index: number) => {
    setDirection(index > currentPage ? "next" : "prev");
    setCurrentPage(index);
    setTocOpen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setTocOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentPage]);

  // Touch swipe
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) goNext();
    if (dx > 40) goPrev();
    touchStartX.current = null;
  };

  // Flipbook page variants
  const pageVariants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? "100%" : "-100%",
      opacity: 0,
      rotateY: dir === "next" ? 12 : -12,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, rotateY: 0, scale: 1 },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? "-100%" : "100%",
      opacity: 0,
      rotateY: dir === "next" ? -12 : 12,
      scale: 0.95,
    }),
  };

  const progress = ((currentPage) / (total - 1)) * 100;

  return (
    <section
      className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-start pt-24 pb-16 px-4 md:px-8"
      aria-label="Services and Pricing Catalogue"
    >
      {/* Hero header */}
      <div className="w-full max-w-5xl mx-auto mb-8">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4a853]/25 bg-[#d4a853]/6 mb-4">
              <BookOpen className="w-3 h-3 text-[#d4a853]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4a853] font-semibold">
                Interactive Flipbook Catalogue
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
              Services &{" "}
              <span className="bg-gradient-to-r from-[#d4a853] via-[#e8c97a] to-[#c8946e] bg-clip-text text-transparent">
                Pricing
              </span>{" "}
              Catalogue
            </h1>
            <p className="text-[#6b6b6b] text-sm">
              Flip through {total} pages of curated services — or use the chapter nav to jump ahead
            </p>
          </div>
        </Reveal>
      </div>

      {/* Chapter navigation */}
      <div className="w-full max-w-5xl mx-auto mb-6">
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {chapters.map((ch) => (
              <button
                key={ch.label}
                onClick={() => goTo(ch.pageIndex)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  currentPage >= ch.pageIndex &&
                  currentPage <
                    (chapters[chapters.indexOf(ch) + 1]?.pageIndex ?? total)
                    ? "bg-[#d4a853] text-black"
                    : "border border-white/10 text-[#a1a1a1] hover:text-white hover:border-white/25"
                }`}
                aria-label={`Go to ${ch.label}`}
              >
                {ch.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Flipbook Container ── */}
      <div className="w-full max-w-2xl mx-auto">
        {/* Book */}
        <div
          className="relative rounded-3xl overflow-hidden border border-white/[0.07] shadow-2xl shadow-black/60"
          style={{
            height: "clamp(520px, 70vh, 760px)",
            perspective: "1200px",
            background: "#0d0d0d",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Page spine shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/30 to-transparent z-10 pointer-events-none rounded-l-3xl" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/30 to-transparent z-10 pointer-events-none rounded-r-3xl" />

          {/* Page number badge */}
          <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/60 border border-white/8 text-[10px] text-[#6b6b6b] tabular-nums">
            {currentPage + 1} / {total}
          </div>

          {/* Animated page */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 220, damping: 28 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.4 },
                scale: { duration: 0.35 },
              }}
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <PageContent page={allPages[currentPage]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#d4a853] to-[#e8c97a]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-5">
          {/* Prev */}
          <button
            onClick={goPrev}
            disabled={currentPage === 0}
            aria-label="Previous page"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] text-[#a1a1a1] hover:text-white hover:border-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-xs hidden sm:block">Previous</span>
          </button>

          {/* Page dots (compact) */}
          <div className="flex items-center gap-1 overflow-hidden max-w-[200px]">
            {Array.from({ length: Math.min(total, 9) }).map((_, i) => {
              const mapped = Math.round((i / 8) * (total - 1));
              const isActive =
                i === 0
                  ? currentPage < 3
                  : i === 8
                  ? currentPage >= total - 3
                  : Math.abs(currentPage - mapped) < 2;
              return (
                <button
                  key={i}
                  onClick={() => goTo(mapped)}
                  aria-label={`Jump to section ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-4 h-1.5 bg-[#d4a853]"
                      : "w-1.5 h-1.5 bg-white/15 hover:bg-white/30"
                  }`}
                />
              );
            })}
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            disabled={currentPage === total - 1}
            aria-label="Next page"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] text-[#a1a1a1] hover:text-white hover:border-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group"
          >
            <span className="text-xs hidden sm:block">Next</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-[10px] text-[#3b3b3b] mt-3 uppercase tracking-widest">
          ← → arrow keys · swipe on mobile
        </p>
      </div>

      {/* ── Scroll-through Section Below ── */}
      <div className="w-full max-w-5xl mx-auto mt-24">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[10px] text-[#d4a853] uppercase tracking-[0.3em] mb-3">
              Browse All Services
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Full Services Overview
            </h2>
            <p className="text-[#6b6b6b] text-sm mt-2">
              Prefer to scroll? Every service and price is listed below.
            </p>
          </div>
        </Reveal>

        {/* Tech Services Grid */}
        <Reveal delay={0.1}>
          <div className="mb-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Technology Services</h3>
              <p className="text-xs text-[#6b6b6b]">Powered by Tech Buddy Galaxy</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {techServices.map((cat, idx) => {
            const Icon = iconMap[cat.id] || Globe;
            const color = iconColors[cat.id] || "#d4a853";
            return (
              <Reveal key={cat.id} delay={idx * 0.05}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 overflow-hidden">
                  <div className="p-5 border-b border-white/[0.04]">
                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/8"
                        style={{ background: `${color}12` }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                        <p className="text-[10px] text-[#6b6b6b]">{cat.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 space-y-1">
                    {cat.services.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="text-xs text-[#a1a1a1]">{s.name}</span>
                        <span className="text-xs font-semibold tabular-nums" style={{ color }}>
                          {s.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Marketing Services Grid */}
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
              <Megaphone className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Marketing Services</h3>
              <p className="text-xs text-[#6b6b6b]">Powered by Zigo Digital</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {marketingServices.map((cat, idx) => {
            const Icon = iconMap[cat.id] || Globe;
            const color = iconColors[cat.id] || "#d4a853";
            return (
              <Reveal key={cat.id} delay={idx * 0.05}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 overflow-hidden">
                  <div className="p-5 border-b border-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/8"
                        style={{ background: `${color}12` }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                        <p className="text-[10px] text-[#6b6b6b]">{cat.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 space-y-1">
                    {cat.services.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="text-xs text-[#a1a1a1]">{s.name}</span>
                        <span className="text-xs font-semibold tabular-nums" style={{ color }}>
                          {s.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Performance Plans */}
        <Reveal>
          <div className="mb-8">
            <h3 className="text-2xl font-black text-white tracking-tight mb-1">
              Performance Marketing Plans
            </h3>
            <p className="text-[#6b6b6b] text-sm">Monthly managed campaign retainers</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {performancePlans.map((plan, i) => {
            const colors = ["#60a5fa", "#d4a853", "#c084fc", "#34d399"];
            const c = colors[i];
            return (
              <Reveal key={plan.name} delay={i * 0.07}>
                <div
                  className="rounded-2xl border border-white/[0.06] p-5 relative overflow-hidden"
                  style={{ background: `${c}08` }}
                >
                  {i === 2 && (
                    <div
                      className="absolute top-2.5 right-2.5 text-[9px] font-bold text-black px-2 py-0.5 rounded-full"
                      style={{ background: "#d4a853" }}
                    >
                      Popular
                    </div>
                  )}
                  <div className="text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: c }}>
                    {plan.name}
                  </div>
                  <div className="text-xl font-black text-white mb-3">
                    {plan.price}
                    <span className="text-xs font-normal text-[#6b6b6b]">/mo</span>
                  </div>
                  <div className="space-y-1.5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-[11px] text-[#a1a1a1]">
                        <div className="w-1.5 h-1.5 rounded-full mt-0.5 shrink-0" style={{ background: c }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* JM Creations Services Grid */}
        <Reveal>
          <div className="mt-4 mb-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center">
              <Star className="w-4 h-4 text-[#f59e0b]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">JM Creations</h3>
              <p className="text-xs text-[#6b6b6b]">One Company. Complete Business Solutions.</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {jmServices.map((cat, idx) => {
            const Icon = iconMap[cat.id] || Star;
            const color = iconColors[cat.id] || "#f59e0b";
            return (
              <Reveal key={cat.id} delay={idx * 0.04}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 overflow-hidden">
                  <div className="p-5 border-b border-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/8"
                        style={{ background: `${color}12` }}
                      >
                        <Icon className="w-4 h-4" style={{ color }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                        <p className="text-[10px] text-[#6b6b6b]">{cat.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 space-y-1">
                    {cat.services.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="text-xs text-[#a1a1a1]">{s.name}</span>
                        <span className="text-xs font-semibold tabular-nums shrink-0" style={{ color }}>
                          {s.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* JM Monthly Packages */}
        <Reveal>
          <div className="mb-6">
            <h3 className="text-2xl font-black text-white tracking-tight mb-1">JM Monthly Packages</h3>
            <p className="text-[#6b6b6b] text-sm">All-inclusive monthly growth packages</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {jmMonthlyPackages.map((pkg, i) => {
            const colors = ["#60a5fa", "#f59e0b", "#a855f7"];
            const c = colors[i];
            return (
              <Reveal key={pkg.name} delay={i * 0.07}>
                <div
                  className="rounded-2xl border p-5 relative overflow-hidden h-full"
                  style={{
                    borderColor: pkg.highlight ? `${c}40` : "rgba(255,255,255,0.06)",
                    background: `${c}08`,
                  }}
                >
                  {pkg.highlight && (
                    <div className="absolute top-2.5 right-2.5 text-[9px] font-bold text-black px-2 py-0.5 rounded-full" style={{ background: c }}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: c }}>
                    {pkg.name}
                  </div>
                  <div className="text-2xl font-black text-white mb-4">
                    {pkg.price}
                    <span className="text-xs font-normal text-[#6b6b6b]">/{pkg.period}</span>
                  </div>
                  <div className="space-y-2">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-[11px] text-[#a1a1a1]">
                        <div className="w-1.5 h-1.5 rounded-full mt-0.5 shrink-0" style={{ background: c }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA Banner */}
        <Reveal>
          <div className="relative rounded-3xl border border-[#d4a853]/20 overflow-hidden p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a853]/8 via-transparent to-purple-500/5" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                Let's Build Something
                <br />
                <span className="bg-gradient-to-r from-[#d4a853] to-[#e8c97a] bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h2>
              <p className="text-[#6b6b6b] text-sm mb-6 max-w-md mx-auto">
                From startups to enterprises — we have the expertise, tools, and team to accelerate your growth.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-black transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:shadow-[#d4a853]/20"
                style={{ background: "linear-gradient(135deg, #d4a853, #e8c97a)" }}
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
