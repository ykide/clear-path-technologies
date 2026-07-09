import { ClearPathOSSection } from "@/components/sections/ClearPathOSSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { OperatingGap } from "@/components/sections/OperatingGap";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <OperatingGap />
      <ServicesSection />
      <IndustriesSection />
      <MethodologySection />
      <CredibilitySection />
      <ClearPathOSSection />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}
