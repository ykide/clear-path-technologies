import type { Metadata } from "next";
import { ClearPathOSSection } from "@/components/sections/ClearPathOSSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { OperatingGap } from "@/components/sections/OperatingGap";
import { OrganizationsWeHelp } from "@/components/sections/OrganizationsWeHelp";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyClearPathExists } from "@/components/sections/WhyClearPathExists";
import { site } from "@/content/site";
import { breadcrumbJsonLd, defaultOgImage, jsonLdScriptProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Operational Excellence Consulting",
  description:
    "ClearPath Technologies helps government contractors and professional services firms modernize operations, automate workflows, centralize business data, and improve executive visibility.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Operational Excellence Consulting | ClearPath Technologies",
    description:
      "Modernize operations, automate workflows, centralize business data, and improve executive visibility with ClearPath Technologies.",
    url: "/",
    siteName: site.name,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Operational Excellence Consulting | ClearPath Technologies",
    description:
      "Operational excellence consulting for firms that need better workflows, data, systems, and executive visibility.",
  },
};

const homepageBreadcrumbs = breadcrumbJsonLd([{ name: "Home", path: "/" }]);

export default function Home() {
  return (
    <>
      <script {...jsonLdScriptProps(homepageBreadcrumbs)} />
      <Hero />
      <TrustStrip />
      <WhyClearPathExists />
      <OperatingGap />
      <CapabilitiesSection />
      <OrganizationsWeHelp />
      <MethodologySection />
      <CredibilitySection />
      <ClearPathOSSection />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}


