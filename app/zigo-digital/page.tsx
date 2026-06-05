// app/zigo-digital/page.tsx
import CompanyPage from "@/components/sections/CompanyPage";

const zigoDigitalData = {
  name: "Zigo Digital",
  tagline: "Performance Marketing • Lead Generation • Growth Acceleration",
  description:
    "Performance-driven marketing agency focused on helping businesses generate leads, increase visibility, and scale through Meta Ads, Google Ads, SEO, funnel optimization, and data-driven strategies.",
  longDescription:
    "Zigo Digital specializes in helping businesses generate leads, increase visibility, and scale through performance-driven marketing systems. We focus on measurable results and predictable growth, ensuring every marketing rupee delivers maximum ROI. From Meta Ads to Google Ads, SEO to conversion optimization, we handle the complete digital marketing funnel.",
  services: [
    {
      title: "Meta Ads (Facebook & Instagram)",
      items: [
        "Lead generation campaigns",
        "WhatsApp message campaigns",
        "Brand awareness campaigns",
        "Retargeting campaigns",
        "Ad creative & copywriting",
      ],
    },
    {
      title: "Google Ads",
      items: [
        "Search intent-based campaigns",
        "Display advertising",
        "YouTube advertising",
        "Shopping campaigns",
        "Performance max campaigns",
      ],
    },
    {
      title: "Lead Generation",
      items: [
        "Lead funnel strategy",
        "WhatsApp lead flow setup",
        "Landing page optimization",
        "Lead tracking & management",
        "Conversion rate optimization",
      ],
    },
    {
      title: "SEO & Search Positioning",
      items: [
        "Google Business Profile optimization",
        "Local SEO strategy",
        "Keyword research & targeting",
        "On-page SEO",
        "Search engine positioning",
      ],
    },
    {
      title: "Funnel Building",
      items: [
        "Marketing funnel design",
        "WhatsApp automation setup",
        "Email marketing funnels",
        "Conversion tracking",
        "A/B testing",
      ],
    },
    {
      title: "Analytics & Reporting",
      items: [
        "Campaign performance tracking",
        "ROI analysis",
        "Audience insights",
        "Monthly growth reports",
        "Data-driven optimization",
      ],
    },
  ],
  founder: {
    name: "Prasanth",
    role: "Founder & CEO — Zigo Digital",
    bio: "I am Prasanth, Founder and CEO of Zigo Digital, a digital marketing agency focused on helping businesses grow through Meta Ads, Google Ads, content strategy, lead generation, and brand building. With 2.5 years of experience, I work with businesses to improve their online presence, attract quality leads, and convert audiences into customers through smart digital strategies.",
    strengths: [
      "Meta Ads Campaign Planning",
      "Google Ads Strategy",
      "Lead Generation",
      "Social Media Content Planning",
      "Brand Positioning",
      "Creative Ad Copywriting",
      "Campaign Analysis & Improvement",
      "Client Handling & Growth Consultation",
    ],
  },
};

export default function ZigoDigitalPage() {
  return <CompanyPage company={zigoDigitalData} />;
}