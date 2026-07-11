import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getServiceBySlug, services } from "@/content/services";
import { site } from "@/content/site";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  const title = `${service.title} | ${site.name}`;
  const description = `${service.problem} ${service.response}`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
      siteName: site.name,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <Section className="border-b-0">
      <Container>
        <Reveal className="mb-10">
          <Link href="/services" className="inline-flex items-center gap-2 rounded text-sm text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to services
          </Link>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <Reveal>
            <div className="flex size-12 items-center justify-center rounded-xl border border-line bg-surface text-signal">
              <Icon aria-hidden="true" className="size-6" />
            </div>
            <Eyebrow className="mt-8">Service foundation</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">{service.problem}</p>
            <p className="mt-5 max-w-2xl leading-7 text-muted">{service.response}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" arrow>Book a discovery call</Button>
              <Button href="/services#services" variant="secondary">Explore all services</Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-line bg-surface p-7 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Primary business outcomes</h2>
            <ul className="mt-6 space-y-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-6 text-secondary">
                  <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-signal" />
                  {outcome}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-line pt-6 text-xs leading-5 text-muted">
              This route is a service detail foundation. The full page can expand later with deeper use cases, engagement patterns, and proof assets without changing the services content model.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
