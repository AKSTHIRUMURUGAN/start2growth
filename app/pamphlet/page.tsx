// app/pamphlet/page.tsx
import type { Metadata } from "next";
import PamphletCatalogue from "@/components/sections/PamphletCatalogue";

export const metadata: Metadata = {
  title: "Services & Pricing Catalogue | Start2Growth",
  description:
    "Explore Start2Growth's complete services catalogue — Web Development, Mobile Apps, AI Automation, Digital Marketing, and more. Transparent pricing for every business need.",
  openGraph: {
    title: "Services & Pricing Catalogue | Start2Growth",
    description:
      "Browse our full range of tech and marketing services with clear, transparent pricing. From ₹999 logo design to enterprise SaaS platforms.",
    url: "https://www.start2growth.in/pamphlet",
    siteName: "Start2Growth",
    type: "website",
  },
};

export default function PamphletPage() {
  return <PamphletCatalogue />;
}
