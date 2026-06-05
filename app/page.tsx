// app/page.tsx
import Hero from "@/components/sections/Hero";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ClientsPreview from "@/components/sections/ClientsPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EcosystemSection />
      <ClientsPreview />
      <ProcessSection />
      <WhyChooseSection />
      <IndustriesSection />
      <ContactSection />
    </>
  );
}