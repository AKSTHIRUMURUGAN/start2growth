// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Companies",
    children: [
      { href: "/jm-creations",  label: "JM Creations",    desc: "Creative & Branding",       logo: "/jm/jm.jpeg"    },
      { href: "/zigo-digital",  label: "Zigo Digital",    desc: "Performance Marketing",      logo: "/zigo/zigo.jpeg" },
      { href: "/techbuddyspace", label: "Tech Buddy Galaxy", desc: "a unit of Tech Buddy Space Pvt Ltd", logo: "/tbs/tbs.jpg"   },
    ],
  },
  { href: "/clients", label: "Client Success" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-2xl shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Start2Growth Home"
        >
          <span className="text-lg lg:text-xl font-bold tracking-tight text-white">
            Start<span className="text-[var(--accent-gold)]">2</span>Growth
          </span>
          <span className="hidden lg:inline text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] border-l border-white/10 pl-3">
            Ecosystem
          </span>
        </Link>

        {/* Desktop Nav Links (Centered) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) =>
            "href" in link ? (
              <Link
                key={link.href}
                href={link.href!}
                className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </Link>
            ) : (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.03]">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 glass rounded-xl p-2 border border-white/[0.06] shadow-2xl"
                    >
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/[0.04] transition-colors duration-200"
                        >
                          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white/5">
                            <Image
                              src={child.logo}
                              alt={child.label}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              {child.label}
                            </div>
                            <div className="text-xs text-[#a1a1a1] mt-0.5">
                              {child.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden lg:inline-block px-5 py-2.5 text-sm font-medium rounded-full bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-warm)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-gold)]/20"
          >
            Start Your Project
          </Link>
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-[var(--bg-primary)]/95 backdrop-blur-xl z-40 overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link) =>
                "href" in link ? (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-lg text-[var(--text-secondary)] hover:text-white transition-colors rounded-xl hover:bg-white/[0.03]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div key={link.label}>
                    <div className="px-4 py-3 text-sm uppercase tracking-wider text-[var(--accent-gold)]">
                      {link.label}
                    </div>
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-6 py-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-white/5">
                          <Image
                            src={child.logo}
                            alt={child.label}
                            width={36}
                            height={36}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="block text-base text-white">{child.label}</span>
                          <span className="block text-xs text-[#a1a1a1] mt-0.5">{child.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )
              )}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 mt-6 px-6 py-3.5 text-center font-medium rounded-full bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-warm)] transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}