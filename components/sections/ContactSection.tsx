// components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticButton from "@/components/motion/MagneticButton";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(212,168,83,0.06)" }}
        aria-hidden
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4a853] mb-4 block">
              Get in Touch
            </span>
            <h2
              className="font-bold tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)" }}
            >
              Ready to{" "}
              <span className="text-gold-gradient">Grow?</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] max-w-xl mx-auto leading-relaxed">
              Tell us about your project. We&apos;ll get back to you within 24 hours
              with a tailored growth plan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">

          {/* ── Form ─────────────────────────────────── */}
          <ScrollReveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-6 lg:p-8 space-y-5 border border-white/[0.06]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="c-name"
                    className="block text-xs font-semibold text-[#a1a1a1] mb-2 uppercase tracking-widest"
                  >
                    Full Name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#555] transition-all focus:outline-none"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="c-phone"
                    className="block text-xs font-semibold text-[#a1a1a1] mb-2 uppercase tracking-widest"
                  >
                    Phone Number
                  </label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#555] transition-all focus:outline-none"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="c-email"
                  className="block text-xs font-semibold text-[#a1a1a1] mb-2 uppercase tracking-widest"
                >
                  Email Address
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#555] transition-all focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="c-service"
                  className="block text-xs font-semibold text-[#a1a1a1] mb-2 uppercase tracking-widest"
                >
                  Service Interested In
                </label>
                <select
                  id="c-service"
                  name="service"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white transition-all focus:outline-none appearance-none"
                  style={{
                    background: "rgba(20,20,20,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                >
                  <option value="">Select a service...</option>
                  <option value="full-ecosystem">Full Ecosystem (All Services)</option>
                  <option value="jm-creations">JM Creations — Branding & Creative</option>
                  <option value="zigo-digital">Zigo Digital — Marketing & Leads</option>
                  <option value="techbuddyspace">Tech Buddy Galaxy — Technology & Development</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="c-message"
                  className="block text-xs font-semibold text-[#a1a1a1] mb-2 uppercase tracking-widest"
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your business, goals, and what you need help with..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#555] transition-all focus:outline-none resize-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,83,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              {/* Submit */}
              <MagneticButton className="w-full">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3.5 rounded-full font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
                  style={{ background: "#d4a853", color: "#000" }}
                  onMouseEnter={(e) => !submitted && (e.currentTarget.style.background = "#c8946e")}
                  onMouseLeave={(e) => !submitted && (e.currentTarget.style.background = "#d4a853")}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" aria-hidden />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" aria-hidden />
                    </>
                  )}
                </button>
              </MagneticButton>
            </form>
          </ScrollReveal>

          {/* ── Contact Info ─────────────────────────── */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col gap-5">

              {/* Info card */}
              <div
                className="rounded-2xl p-6 border border-white/[0.06]"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <h3 className="text-base font-semibold text-white mb-5">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)" }}>
                      <MapPin className="w-4 h-4 text-[#d4a853]" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white uppercase tracking-wide mb-1">Office</p>
                      <p className="text-sm text-[#a1a1a1] leading-relaxed">
                        No. 1/2, 1st Floor, Pillaiyar Koil Street,<br />
                        Old Pallavaram, Chennai — 600 117
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)" }}>
                      <Phone className="w-4 h-4 text-[#d4a853]" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white uppercase tracking-wide mb-1">Phone</p>
                      <a
                        href="tel:+919042986355"
                        className="text-sm text-[#a1a1a1] hover:text-[#d4a853] transition-colors"
                      >
                        +91 90429 86355
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.2)" }}>
                      <Mail className="w-4 h-4 text-[#d4a853]" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white uppercase tracking-wide mb-1">Email</p>
                      <a
                        href="mailto:hello@start2growth.in"
                        className="text-sm text-[#a1a1a1] hover:text-[#d4a853] transition-colors"
                      >
                        hello@start2growth.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div
                className="rounded-2xl p-5 border border-white/[0.06] text-center"
                style={{ background: "rgba(212,168,83,0.04)" }}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden />
                  <p className="text-sm font-medium text-white">Available for new projects</p>
                </div>
                <p className="text-xs text-[#a1a1a1]">Response within 24 hours</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
