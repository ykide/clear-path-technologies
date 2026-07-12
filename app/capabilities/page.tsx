import type { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";
import { CapabilityDetailSection } from "@/components/capabilities/CapabilityDetailSection";
import { CapabilitiesCTA } from "@/components/capabilities/CapabilitiesCTA";
import { CapabilitiesHero } from "@/components/capabilities/CapabilitiesHero";
import { CapabilitiesMethodology } from "@/components/capabilities/CapabilitiesMethodology";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, MotionCard } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getServicesBySlug, servicePillars, services } from "@/content/capabilities";
import { site } from "@/content/site";
import { absoluteUrl, breadcrumbJsonLd, defaultOgImage, jsonLdScriptProps } from "@/lib/seo";

const title = "Operational Excellence Capabilities | ClearPath Technologies";
const description =
  "Explore ClearPath Technologies capabilities across operational excellence, workflow automation, business process modernization, custom applications, cloud modernization, applied AI, executive dashboards, business intelligence, and fractional CTO services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title,
    description,
    url: "/capabilities",
    siteName: site.name,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const capabilityStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ClearPath Technologies operational excellence capabilities",
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
        url: absoluteUrl("/"),
      },
      url: absoluteUrl(`/capabilities#${service.slug}`),
    },
  })),
};

const capabilityBreadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Capabilities", path: "/capabilities" },
]);

export default function CapabilitiesPage() {
  return (
    <>
      <script {...jsonLdScriptProps([capabilityBreadcrumbs, capabilityStructuredData])} />
      <CapabilitiesHero />
      <CapabilityAnchorNavigation />
      <>
        {servicePillars.map((pillar, pillarIndex) => {
          const pillarCapabilities = getServicesBySlug(pillar.services);

          return (
            <Section key={pillar.title} id={pillar.title.toLowerCase().replaceAll(" ", "-")} className={pillarIndex === 0 ? "pt-12" : undefined}>
              <Container>
                <Reveal className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                  <div>
                    <Eyebrow>Strategic pillar {String(pillarIndex + 1).padStart(2, "0")}</Eyebrow>
                    <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{pillar.title}</h2>
                  </div>
                  <p className="max-w-2xl text-base leading-7 text-secondary lg:justify-self-end">{pillar.description}</p>
                </Reveal>

                <div className="grid gap-8">
                  {pillarCapabilities.map((service, index) => (
                    <CapabilityDetailSection key={service.slug} service={service} index={index + pillarIndex} />
                  ))}
                </div>
              </Container>
            </Section>
          );
        })}
      </>
      <CapabilitiesMethodology />
      <CapabilitiesCTA />
    </>
  );
}

function CapabilityAnchorNavigation() {
  return (
    <Section id="capability-navigation" className="pb-10">
      <Container>
        <Reveal className="mb-8 max-w-3xl">
          <Eyebrow>Anchor navigation</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Nine capabilities. Three operating priorities.
          </h2>
          <p className="mt-4 leading-7 text-secondary">
            Use the anchors below to jump directly to the operating problem you want to solve.
          </p>
        </Reveal>

        <Stagger className="grid gap-4 lg:grid-cols-3">
          {servicePillars.map(({ title: pillarTitle, description: pillarDescription, services: pillarServices, icon: Icon }) => (
            <MotionCard key={pillarTitle} className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:bg-card sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-background text-signal">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <ArrowDownRight aria-hidden="true" className="size-5 text-muted" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{pillarTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{pillarDescription}</p>
              <ul className="mt-6 space-y-3" aria-label={`${pillarTitle} capabilities`}>
                {getServicesBySlug(pillarServices).map((service) => (
                  <li key={service.slug}>
                    <a
                      href={`#${service.slug}`}
                      className="inline-flex rounded text-sm font-semibold text-secondary transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    >
                      {service.shortTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
