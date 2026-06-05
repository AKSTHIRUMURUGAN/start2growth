import Link from "next/link";
import { Zap, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { BRAND, COMPANIES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/5 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4a853] to-[#c8946e] flex items-center justify-center">
                <Zap size={16} className="text-black" aria-hidden />
              </div>
              <span className="font-semibold text-lg text-[#fafafa] group-hover:text-[#d4a853] transition-colors">
                Start2Growth
              </span>
            </Link>
            <p className="text-[#a1a1a1] text-sm leading-relaxed mb-6">
              {BRAND.tagline}. One ecosystem bringing branding, marketing, and
              technology together for unstoppable growth.
            </p>
            <address className="not-italic flex flex-col gap-2">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#d4a853] transition-colors"
              >
                <Phone size={14} aria-hidden />
                {BRAND.phone}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#d4a853] transition-colors"
              >
                <Mail size={14} aria-hidden />
                {BRAND.email}
              </a>
              <span className="flex items-start gap-2 text-sm text-[#a1a1a1]">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden />
                {BRAND.city}
              </span>
            </address>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-sm font-semibold text-[#fafafa] mb-4 uppercase tracking-widest">
              Our Companies
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {COMPANIES.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/${c.slug}`}
                    className="flex items-center gap-1 text-sm text-[#a1a1a1] hover:text-[#d4a853] transition-colors group"
                  >
                    {c.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[#fafafa] mb-4 uppercase tracking-widest">
              Services
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[
                "Branding & Identity",
                "Social Media Marketing",
                "Performance Ads",
                "Lead Generation",
                "Web Development",
                "Mobile Apps",
                "AI & Automation",
                "Cloud & DevOps",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-[#a1a1a1]">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#fafafa] mb-4 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { href: "/", label: "Home" },
                { href: "/clients", label: "Our Clients" },
                { href: "#contact", label: "Contact Us" },
                { href: "#about", label: "About Us" },
                { href: "#process", label: "Our Process" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#a1a1a1] hover:text-[#d4a853] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a1a1a1]">
            © 2026 Start2Growth. All Rights Reserved.
          </p>
          <p className="text-xs text-[#a1a1a1]">
            Powered by JM Creations · Zigo Digital · Tech Buddy Space Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
