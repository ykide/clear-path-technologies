import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, MotionCard } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getServicesBySlug, servicePillars } from "@/content/services";

export function ServicePillars() {
  return (
    <Section id="pillars">
      <Container>
        <Reveal className="mb-14 max-w-3xl">
          <Eyebrow>Strategic service pillars</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Three ways ClearPath creates operational leverage.</h2>
          <p className="mt-5 leading-7 text-secondary">
            Services are grouped around the business outcomes leaders actually need: better operating flow, modern systems, and trusted visibility.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 lg:grid-cols-3">
          {servicePillars.map(({ title, description, services, icon: Icon }) => (
            <MotionCard key={title} className="group rounded-2xl border border-line bg-surface p-7 transition-colors hover:bg-card sm:p-8">
              <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-background text-signal">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              <ul className="mt-7 space-y-3">
                {getServicesBySlug(services).map((service) => (
                  <li key={service.slug}>
                    <a
                      href={`#${service.slug}`}
                      className="inline-flex items-center gap-2 rounded text-sm text-secondary transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    >
                      {service.title}
                      <ArrowUpRight aria-hidden="true" className="size-3.5 text-muted transition group-hover:text-signal" />
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
