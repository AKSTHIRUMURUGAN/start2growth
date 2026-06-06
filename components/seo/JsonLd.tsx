// components/seo/JsonLd.tsx
// JSON-LD structured data for SEO + GEO + AEO

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.start2growth.in/#organization",
    name: "Start2Growth",
    url: "https://www.start2growth.in",
    logo: "https://www.start2growth.in/tbs/tbs.jpg",
    description:
      "Start2Growth is a collaborative business ecosystem combining JM Creations, Zigo Digital, and Tech Buddy Galaxy — providing branding, marketing, and technology services from ideation to scale.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 1/2, 1st Floor, Pillaiyar Koil Street, Old Pallavaram",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600117",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-90429-86355",
      contactType: "customer service",
      email: "hello@start2growth.in",
      availableLanguage: ["English", "Tamil"],
    },
    sameAs: ["https://www.start2growth.in"],
    subOrganization: [
      {
        "@type": "Organization",
        name: "JM Creations",
        url: "https://www.start2growth.in/jm-creations",
        description: "Full-service digital solutions agency specializing in branding, social media, and business development.",
      },
      {
        "@type": "Organization",
        name: "Zigo Digital",
        url: "https://www.start2growth.in/zigo-digital",
        description: "Performance marketing agency focused on Meta Ads, Google Ads, lead generation, and SEO.",
      },
      {
        "@type": "Organization",
        name: "Tech Buddy Galaxy",
        url: "https://www.start2growth.in/techbuddyspace",
        description: "Gen-Z innovation studio building websites, mobile apps, AI/ML solutions, and cloud infrastructure.",
      },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.start2growth.in/#local",
    name: "Start2Growth",
    image: "https://www.start2growth.in/tbs/tbs.jpg",
    url: "https://www.start2growth.in",
    telephone: "+91-90429-86355",
    email: "hello@start2growth.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 1/2, 1st Floor, Pillaiyar Koil Street, Old Pallavaram",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600117",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 80.1700,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    hasMap: "https://maps.google.com/?q=Old+Pallavaram+Chennai",
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    serviceType: [
      "Digital Marketing",
      "Web Development",
      "Branding",
      "Lead Generation",
      "Social Media Management",
      "AI Development",
      "Cloud Services",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.start2growth.in/#website",
    url: "https://www.start2growth.in",
    name: "Start2Growth",
    description: "One Ecosystem. Three Specialized Companies. Build. Automate. Market. Grow.",
    publisher: { "@id": "https://www.start2growth.in/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.start2growth.in/clients?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Start2Growth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start2Growth is a collaborative business ecosystem in Chennai combining three specialized companies — JM Creations (branding & media), Zigo Digital (performance marketing), and Tech Buddy Galaxy (technology & automation) — under one roof to provide end-to-end business growth solutions.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Start2Growth offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start2Growth offers branding, social media management, content creation, Meta Ads, Google Ads, SEO, lead generation, website development, mobile app development, AI/ML solutions, cloud migration, CRM, ERP, and business automation — all coordinated by one ecosystem.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Start2Growth located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start2Growth is located in Chennai, Tamil Nadu, India — specifically at No. 1/2, 1st Floor, Pillaiyar Koil Street, Old Pallavaram, Chennai - 600 117. Contact: +91 90429 86355.",
        },
      },
      {
        "@type": "Question",
        name: "What is Tech Buddy Galaxy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tech Buddy Galaxy is a Gen-Z innovation studio and a unit of Tech Buddy Space Pvt Ltd. It builds scalable websites, mobile apps, AI/ML solutions, cloud infrastructure, CRM, ERP systems, and business automation tools for startups and enterprises.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with Start2Growth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can get started by contacting Start2Growth at hello@start2growth.in or calling +91 90429 86355. You can also fill out the contact form on the website at start2growth.in and the team will respond within 24 hours with a tailored growth plan.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
