// components/layout/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Companies",
    children: [
      { href: "/jm-creations",   label: "JM Creations",     desc: "Creative & Branding",                   logo: "/jm/jm.jpeg"     },
      { href: "/zigo-digital",   label: "Zigo Digital",     desc: "Performance Marketing",                  logo: "/zigo/zigo.jpeg" },
      { href: "/techbuddyspace", label: "Tech Buddy Galaxy", desc: "a unit of Tech Buddy Space Pvt Ltd",    logo: "/tbs/tbs.jpg"    },
    ],
  },
  { href: "/clients", label: "Client Success" },
  { href: "/pamphlet", label: "Catalogue" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on route change / hash click
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        ref={navbarRef}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <nav
          className="w-full max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Start2Growth Home">
            <span className="text-lg lg:text-xl font-bold tracking-tight text-white">
              Start<span className="text-[#d4a853]">2</span>Growth
            </span>
            <span className="hidden lg:inline text-[10px] uppercase tracking-[0.2em] text-[#a1a1a1] border-l border-white/10 pl-3">
              Ecosystem
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) =>
              "href" in link ? (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-4 py-2 text-sm text-[#a1a1a1] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
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
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm text-[#a1a1a1] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className="w-3.5 h-3.5 opacity-50 transition-transform duration-200"
                      style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-72 rounded-xl p-2 border border-white/[0.08] shadow-2xl"
                        style={{ background: "rgba(14,14,14,0.97)", backdropFilter: "blur(20px)" }}
                        role="menu"
                      >
                        {link.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/[0.05] transition-colors duration-200"
                          >
                            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white/5">
                              <Image src={child.logo} alt={child.label} width={32} height={32} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{child.label}</div>
                              <div className="text-xs text-[#a1a1a1] mt-0.5">{child.desc}</div>
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

          {/* Desktop CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full text-black transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ background: "#d4a853" }}
            >
              Start Your Project
            </Link>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-white transition-colors hover:bg-white/10"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu — rendered as a sibling, NOT inside the header ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
              onClick={closeMobile}
              aria-hidden
            />

            {/* Drawer — slides down from top, starts below navbar */}
            <motion.nav
              id="mobile-nav"
              key="mobile-menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 z-50 lg:hidden overflow-y-auto"
              style={{
                top: "64px",          /* always 64px = h-16 on mobile */
                maxHeight: "calc(100vh - 64px)",
                background: "rgba(10,10,10,0.97)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
              aria-label="Mobile navigation"
            >
              <div className="px-5 py-6 flex flex-col gap-1">
                {navLinks.map((link) =>
                  "href" in link ? (
                    <Link
                      key={link.href}
                      href={link.href!}
                      onClick={closeMobile}
                      className="flex items-center px-4 py-3.5 text-base font-medium text-[#a1a1a1] hover:text-white rounded-xl hover:bg-white/[0.04] transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div key={link.label}>
                      {/* Companies label */}
                      <p className="px-4 pt-4 pb-2 text-xs font-semibold uppercase tracking-widest text-[#d4a853]">
                        {link.label}
                      </p>
                      {link.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobile}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-all duration-200"
                        >
                          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-white/5">
                            <Image src={child.logo} alt={child.label} width={40} height={40} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <span className="block text-sm font-semibold text-white">{child.label}</span>
                            <span className="block text-xs text-[#a1a1a1] mt-0.5">{child.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )
                )}

                {/* CTA */}
                <div className="pt-4 pb-2">
                  <Link
                    href="#contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center w-full px-6 py-3.5 rounded-full font-semibold text-black transition-all duration-300 hover:opacity-90"
                    style={{ background: "#d4a853" }}
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
