// components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-pad relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] mb-4 block">
              Get in Touch
            </span>
            <h2
              className="font-bold tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)" }}
            >
              Ready to <span className="text-gold-gradient">Grow?</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Tell us about your project. We'll get back to you within 24 hours
              with a tailored growth plan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
          {/* Form */}
          <ScrollReveal>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 lg:p-8 border border-white/[0.04] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#a1a1a1] mb-2 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#fafafa] placeholder-[#555] text-sm focus:outline-none focus:border-[#d4a853]/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-[#a1a1a1] mb-2 uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#fafafa] placeholder-[#555] text-sm focus:outline-none focus:border-[#d4a853]/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-[#a1a1a1] mb-2 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#fafafa] placeholder-[#555] text-sm focus:outline-none focus:border-[#d4a853]/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-medium text-[#a1a1a1] mb-2 uppercase tracking-widest">Service Interested In</label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-[#fafafa] text-sm focus:outline-none focus:border-[#d4a853]/50 transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="full-ecosystem">Full Ecosystem (All Services)</option>
                  <option value="jm-creations">JM Creations — Branding & Creative</option>
                  <option value="zigo-digital">Zigo Digital — Marketing & Leads</option>
                  <option value="techbuddyspace">Tech Buddy Space — Technology & Development</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#a1a1a1] mb-2 uppercase tracking-widest">Tell Us About Your Project</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your business, goals, and what you need help with..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#fafafa] placeholder-[#555] text-sm focus:outline-none focus:border-[#d4a853]/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3.5 rounded-full bg-[var(--accent-gold)] text-black font-semibold text-base hover:bg-[var(--accent-warm)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent-gold)]/20 flex items-center justify-center gap-2 disabled:opacity-50"
                data-cursor-hover
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 lg:p-8 border border-white/[0.04]">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Office</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                        No. 1/2, Ist Floor, Pillaiyar Koil Street,
                        <br />
                        Old Pallavaram, Chennai - 600 117
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Phone</p>
                      <a
                        href="tel:+919042986355"
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
                      >
                        +91 90429 86355
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <a
                        href="mailto:hello@start2growth.in"
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
                      >
                        hello@start2growth.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="glass rounded-2xl p-6 border border-white/[0.04] text-center">
                <p className="text-sm text-[var(--text-secondary)]">
                  ⚡ Available for new projects
                </p>
                <p className="text-xs text-[var(--text-secondary)]/60 mt-1">
                  Response within 24 hours
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}