// app/techbuddyspace/page.tsx
import CompanyPage from "@/components/sections/CompanyPage";

const techBuddySpaceData = {
  name: "Tech Buddy Space",
  tagline: "Technology • Innovation • Automation",
  description:
    "Gen-Z innovation studio building scalable websites, mobile apps, AI/ML solutions, cloud infrastructure, CRM systems, ERP solutions, and business automation tools for startups and enterprises.",
  longDescription:
    "Tech Buddy Space Pvt Ltd is a student-founded technology company building scalable digital solutions for startups, businesses, and enterprises. We're Gen-Z minds building the next generation of technology products with passion and cutting-edge tech. \"Give me 100 youngsters, I will change the world.\" — Swami Vivekananda. We embody this vision with fresh perspectives, out-of-the-box thinking, and the latest tech stack.",
  services: [
    {
      title: "Web Development",
      items: [
        "Corporate & Business Websites",
        "Landing Pages",
        "E-Commerce Stores",
        "Progressive Web Apps (PWAs)",
        "Custom Web Applications",
      ],
    },
    {
      title: "Mobile Development",
      items: [
        "Android App Development",
        "iOS App Development",
        "Cross-Platform Apps",
        "Flutter Applications",
        "App Maintenance & Support",
      ],
    },
    {
      title: "AI & Machine Learning",
      items: [
        "AI Automation",
        "AI Chatbots",
        "Natural Language Processing",
        "Predictive Analytics",
        "Computer Vision Solutions",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "Cloud Migration (AWS, Azure, GCP)",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Serverless Architecture",
        "Infrastructure Management",
      ],
    },
    {
      title: "Business Automation",
      items: [
        "CRM Development",
        "ERP Systems",
        "HRMS Solutions",
        "Workflow Automation",
        "API Integrations",
      ],
    },
    {
      title: "Cybersecurity",
      items: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
        "Data Protection",
        "Vulnerability Assessment",
      ],
    },
  ],
  founder: {
    name: "Thirumurugan A K S",
    role: "Founder & CEO — TechBuddySpace",
    bio: "I am Thirumurugan A K S, Founder and CEO of TechBuddySpace, a technology-focused company specializing in website development, automation solutions, SaaS product development, and business process optimization. My focus is to help businesses move from manual work to smart digital systems through modern websites, automation tools, and scalable software products.",
    strengths: [
      "Website Development",
      "Business Automation",
      "SaaS Product Development",
      "Workflow Optimization",
      "Custom Software Solutions",
      "CRM & Lead Management Systems",
      "Landing Page Development",
      "Tech Strategy for Business Growth",
    ],
  },
};

export default function TechBuddySpacePage() {
  return <CompanyPage company={techBuddySpaceData} />;
}