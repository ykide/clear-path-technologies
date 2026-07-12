import { CheckCircle2 } from "lucide-react";
import { ClearPathOSPreview } from "@/components/sections/ClearPathOSPreview";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionTag, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const tags = ["Workflow patterns", "Dashboard models", "Document intelligence", "Reporting systems", "Automation modules"];
const guardrails = [
  "A long-term platform direction shaped by consulting work",
  "Built from generalized patterns, not confidential client material",
  "Designed to make proven operating capabilities more reusable over time",
];

export function ClearPathOSSection() {
  return (
    <Section id="clearpath-os">
      <Container>
        <Reveal className="overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-card/45 to-surface/65">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <Eyebrow>Platform vision</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">ClearPath OS</h2>
              <p className="mt-5 max-w-xl leading-7 text-secondary">
                ClearPath OS is the long-term platform vision behind our consulting work: a modular operating layer that turns proven workflow, dashboard, document intelligence, reporting, and automation patterns into reusable systems.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                It is not being represented as a finished SaaS product today. It is an emerging foundation shaped by real engagements, where repeatable patterns can strengthen future delivery while every client solution remains fit to the organization.
              </p>
              <ul className="mt-7 space-y-3">
                {guardrails.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-secondary">
                    <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-signal" />
                    {item}
                  </li>
                ))}
              </ul>
              <Stagger className="mt-8 flex flex-wrap gap-2" delay={0.12}>
                {tags.map((tag) => <MotionTag key={tag} className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">{tag}</MotionTag>)}
              </Stagger>
            </div>
            <ClearPathOSPreview />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}


