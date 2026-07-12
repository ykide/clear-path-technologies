import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, MotionCard } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { engagementModels } from "@/content/capabilities";

export function EngagementModels() {
  return (
    <Section id="engagement-models">
      <Container>
        <Reveal className="mb-14 max-w-3xl">
          <Eyebrow>Engagement models</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start with the level of clarity the problem requires.</h2>
          <p className="mt-5 leading-7 text-secondary">
            ClearPath engagements are scoped around operating needs, from focused assessment through multi-phase modernization.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <MotionCard key={model.title} className="rounded-2xl border border-line bg-surface p-7 transition-colors hover:bg-card sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight">{model.title}</h3>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Best for</p>
              <p className="mt-2 text-sm leading-6 text-secondary">{model.bestFor}</p>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Typical outputs</p>
              <ul className="mt-4 space-y-3">
                {model.outputs.map((output) => (
                  <li key={output} className="flex gap-3 text-sm leading-5 text-muted">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
                    {output}
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


