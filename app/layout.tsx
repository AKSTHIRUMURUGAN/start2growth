// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/motion/CustomCursor";


export const metadata: Metadata = {
  title: "Start2Growth | Build. Automate. Market. Grow.",
  description:
    "One Ecosystem. Three Specialized Companies. Unlimited Growth. JM Creations, Zigo Digital & Tech Buddy Space — end-to-end business growth from ideation to scale.",
  keywords: [
    "business growth",
    "digital marketing",
    "web development",
    "lead generation",
    "branding",
    "automation",
    "Chennai",
    "startup ecosystem",
  ],
  openGraph: {
    title: "Start2Growth | Build. Automate. Market. Grow.",
    description:
      "Three companies, one growth engine. Creative branding, performance marketing, and technology development under one roof.",
    url: "https://start2growth.in",
    siteName: "Start2Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start2Growth | Build. Automate. Market. Grow.",
    description:
      "Three companies, one growth engine. Creative branding, performance marketing, and technology development under one roof.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className="font-sans bg-[#0a0a0a] text-[#fafafa] antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to Content
        </a>
        <CustomCursor />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}