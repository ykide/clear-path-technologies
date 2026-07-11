import type { Metadata } from "next";
import { EngagementModels } from "@/components/services/EngagementModels";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServicePillars } from "@/components/services/ServicePillars";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesMethodology } from "@/components/services/ServicesMethodology";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { services } from "@/content/services";
import { site } from "@/content/site";

const title = "Operational Excellence Consulting Services | ClearPath Technologies";
const description =
  "Explore ClearPath Technologies services for operational excellence, workflow automation, process modernization, executive dashboards, business intelligence, cloud modernization, applied AI, and technology leadership.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title,
    description,
    url: "/services",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ClearPath Technologies operational excellence consulting services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: `${service.problem} ${service.response}`,
      provider: {
        "@type": "Organization",
        name: site.name,
        url: "https://clearpathtechnologies.com",
      },
      url: `https://clearpathtechnologies.com/services/${service.slug}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <ServicesHero />
      <ServicePillars />
      <Section id="services">
        <Container>
          <Reveal className="mb-14 grid gap-5 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Complete services</Eyebrow>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Business problems first. Technical capabilities in service of outcomes.
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-secondary lg:justify-self-end">
              Each service is designed to solve a specific operating constraint, then connect into the broader system your organization needs to scale.
            </p>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </Stagger>
        </Container>
      </Section>
      <EngagementModels />
      <ServicesMethodology />
      <ServicesCTA />
    </>
  );
}
