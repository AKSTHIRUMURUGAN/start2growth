// app/jm-creations/page.tsx
import CompanyPage from "@/components/sections/CompanyPage";

const jmCreationsData = {
  name: "JM Creations",
  tagline: "Creative • Branding • Media • Business Growth",
  description:
    "Full-service digital solutions agency dedicated to helping businesses grow, evolve, and establish a strong online presence through creative content, strategic marketing, and business development solutions.",
  longDescription:
    "JM Creations is a full-service digital solutions agency dedicated to helping businesses grow, evolve, and establish a strong online presence. We combine creativity, strategy, and technology to deliver impactful digital experiences that connect brands with their audience. Our mission is to provide high-quality social media, marketing, and business development services that help brands reach the right audience and maximize their digital potential.",
  services: [
    {
      title: "Content Creation & Design",
      items: [
        "Social media content creation",
        "Branding & visual identity building",
        "Poster and creative design",
        "Video production & editing",
        "Drone shoots",
      ],
    },
    {
      title: "Social Media Management",
      items: [
        "Page handling & daily posting",
        "Instagram & Facebook management",
        "Trend-based strategy planning",
        "Audience engagement & growth",
        "Hashtag and content strategy",
      ],
    },
    {
      title: "Digital Marketing",
      items: [
        "Facebook, Instagram & Google ads",
        "Lead generation campaigns",
        "Marketing funnel optimization",
        "Performance tracking & reporting",
        "Targeted audience reach",
      ],
    },
    {
      title: "Business Strategy & Development",
      items: [
        "Brand positioning & growth planning",
        "Competitor & market analysis",
        "Strategic planning for online presence",
        "Sales and customer reach improvement",
        "Business development guidance",
      ],
    },
    {
      title: "Video Production",
      items: [
        "Professional video shooting",
        "Video editing & post-production",
        "Drone photography & videography",
        "Event coverage",
        "Product & service showcase videos",
      ],
    },
    {
      title: "Business Registration Support",
      items: [
        "Business registration assistance",
        "Startup documentation support",
        "Brand identity setup",
        "Legal compliance guidance",
      ],
    },
  ],
  founder: {
    name: "Jinavaradoss",
    role: "Founder & CEO — JM Creation",
    bio: "I am Jinavaradoss, Founder of JM Creation, with strong expertise in sales, lead management, client follow-up, and team coordination. My focus is to help businesses convert enquiries into customers through proper communication, organized lead handling, and result-oriented sales execution.",
    strengths: [
      "Sales Communication",
      "Lead Follow-up",
      "Client Relationship Handling",
      "Team Coordination",
      "Enquiry Management",
      "Conversion-Focused Approach",
      "Customer Need Analysis",
    ],
  },
};

export default function JMCreationsPage() {
  return <CompanyPage company={jmCreationsData} />;
}