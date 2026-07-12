import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionCard, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function WhyClearPathExists() {
  return (
    <Section id="why-clearpath" className="bg-surface/25">
      <Container>
        <Reveal className="mb-12 max-w-3xl">
          <Eyebrow>{site.whyExists.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{site.whyExists.title}</h2>
          <p className="mt-5 max-w-2xl leading-7 text-secondary">{site.whyExists.description}</p>
        </Reveal>
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {site.whyExists.points.map((point) => (
            <MotionCard key={point.title} className="group rounded-2xl border border-line bg-background/65 p-6 transition-colors hover:bg-card sm:p-7">
              <div className="mb-8 flex size-10 items-center justify-center rounded-xl border border-line bg-surface text-signal">
                <ArrowUpRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{point.description}</p>
            </MotionCard>
          ))}
        </Stagger>
        <Reveal className="mt-9" delay={0.08}>
          <Button href="/contact" variant="secondary">Talk through the operating challenge</Button>
        </Reveal>
      </Container>
    </Section>
  );
}


