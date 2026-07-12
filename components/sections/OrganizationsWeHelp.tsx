import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionCard, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function OrganizationsWeHelp() {
  return (
    <Section id="industries">
      <Container>
        <Reveal className="mb-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow>Organizations We Help</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Built for organizations where operational clarity affects margin, mission, and capacity.</h2>
          </div>
          <p className="max-w-xl leading-7 text-secondary lg:justify-self-end">
            ClearPath is strongest where delivery is complex, work crosses functions, and leadership needs systems—not heroics—to scale operations.
          </p>
        </Reveal>
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {site.organizations.map((organization) => (
            <MotionCard key={organization.title} className="rounded-2xl border border-line bg-surface p-7 transition-colors hover:bg-card">
              <h3 className="text-xl font-semibold tracking-tight">{organization.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{organization.description}</p>
              <ul className="mt-7 space-y-3">
                {organization.signals.map((signal) => (
                  <li key={signal} className="flex gap-3 text-sm leading-5 text-secondary">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
                    {signal}
                  </li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </Stagger>
        <Reveal className="mt-9" delay={0.08}>
          <Button href="/contact" variant="secondary">See if ClearPath is a fit</Button>
        </Reveal>
      </Container>
    </Section>
  );
}


