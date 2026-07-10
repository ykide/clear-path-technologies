import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionListItem, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function MethodologySection() {
  return (
    <Section id="methodology">
      <Container className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Delivery methodology</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A disciplined path from assessment to system.</h2>
          <p className="mt-5 leading-7 text-secondary">Every engagement follows the rigor we design into your operations: clear sequence, clear ownership, clear outcomes.</p>
        </Reveal>
        <Stagger>
          <ol className="border-b border-line">
            {site.methodology.map((step, index) => (
              <MotionListItem key={step.title} className="group grid grid-cols-[44px_1fr] gap-4 border-t border-line py-6 sm:grid-cols-[60px_1fr] sm:py-7">
                <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold transition-colors group-hover:text-signal">{step.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-muted">{step.description}</p>
                </div>
              </MotionListItem>
            ))}
          </ol>
        </Stagger>
      </Container>
    </Section>
  );
}
