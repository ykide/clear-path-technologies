import { ClearPathOSPreview } from "@/components/sections/ClearPathOSPreview";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionTag, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const tags = ["Workflow patterns", "Executive dashboards", "Document intelligence", "Reporting systems", "Automation modules"];

export function ClearPathOSSection() {
  return (
    <Section id="clearpath-os">
      <Container>
        <Reveal className="overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-card/50 to-surface/60">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <Eyebrow>Platform vision</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">ClearPath OS</h2>
              <p className="mt-5 max-w-xl leading-7 text-secondary">
                ClearPath OS is the long-term platform vision behind our consulting work: a modular operating layer that turns proven workflow, dashboard, document intelligence, reporting, and automation patterns into reusable systems.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                It is evolving from real engagement patterns—not positioned as finished, off-the-shelf SaaS. Each engagement helps sharpen the foundation while the solution remains tailored to the organization.
              </p>
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
