// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/motion/CustomCursor";
import JsonLd from "@/components/seo/JsonLd";
import PageTransition from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.start2growth.in"),
  title: {
    default: "Start2Growth | Build. Automate. Market. Grow.",
    template: "%s | Start2Growth",
  },
  description:
    "One Ecosystem. Three Specialized Companies. Unlimited Growth. JM Creations, Zigo Digital & Tech Buddy Galaxy — end-to-end business growth from ideation to scale. Based in Chennai, India.",
  keywords: [
    "Start2Growth",
    "business growth Chennai",
    "digital marketing Chennai",
    "web development Chennai",
    "JM Creations",
    "Zigo Digital",
    "Tech Buddy Galaxy",
    "Tech Buddy Space",
    "lead generation",
    "branding agency Chennai",
    "startup ecosystem India",
    "automation",
    "Meta Ads",
    "Google Ads",
    "social media marketing",
  ],
  authors: [{ name: "Start2Growth", url: "https://www.start2growth.in" }],
  creator: "Start2Growth",
  alternates: {
    canonical: "https://www.start2growth.in",
  },
  openGraph: {
    title: "Start2Growth | Build. Automate. Market. Grow.",
    description:
      "Three specialized companies. One growth engine. Creative branding, performance marketing, and technology development under one roof.",
    url: "https://www.start2growth.in",
    siteName: "Start2Growth",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Start2Growth — One Ecosystem. Three Companies." }],
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="font-sans bg-[#0a0a0a] text-[#fafafa] antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to Content
        </a>
        <CustomCursor />
        <Navbar />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
