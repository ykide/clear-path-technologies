import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionListItem, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function MethodologySection() {
  return (
    <Section id="methodology">
      <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <Reveal>
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A practical path from operating reality to working system.</h2>
          <p className="mt-5 leading-7 text-secondary">
            We keep the methodology intentionally direct: understand the work, design the system, build what is needed, and improve it with evidence.
          </p>
          <Button href="/contact" variant="secondary" className="mt-8">Discuss the right starting point</Button>
        </Reveal>
        <Stagger>
          <ol className="grid gap-4">
            {site.methodology.map((step, index) => (
              <MotionListItem key={step.title} className="group grid gap-4 rounded-2xl border border-line bg-surface p-5 sm:grid-cols-[60px_1fr] sm:p-6">
                <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold transition-colors group-hover:text-signal">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{step.description}</p>
                </div>
              </MotionListItem>
            ))}
          </ol>
        </Stagger>
      </Container>
    </Section>
  );
}


