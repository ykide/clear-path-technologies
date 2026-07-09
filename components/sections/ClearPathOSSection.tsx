import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
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
              <p className="mt-5 max-w-xl leading-7 text-secondary">ClearPath OS is the long-term platform vision behind our consulting work: a modular operating layer that turns proven workflow, dashboard, document intelligence, reporting, and automation patterns into reusable systems.</p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">It is evolving from real engagement patterns—not positioned as finished, off-the-shelf SaaS. Each engagement helps sharpen the foundation while the solution remains tailored to the organization.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => <span key={tag} className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">{tag}</span>)}
              </div>
            </div>
            <OSDashboard />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function OSDashboard() {
  return (
    <div className="flex items-center border-t border-line bg-background/40 p-6 sm:p-10 lg:border-l lg:border-t-0" aria-label="Conceptual ClearPath OS dashboard">
      <div className="w-full rounded-xl border border-line bg-background p-4 shadow-2xl">
        <div className="mb-5 flex items-center justify-between"><div className="h-2.5 w-28 rounded bg-card" /><div className="size-2 rounded-full bg-signal" /></div>
        <div className="grid grid-cols-3 gap-3">
          {[["Operational health","92%"],["Open workflows","18"],["Time recovered","↑"]].map(([label,value]) => (
            <div key={label} className="rounded-md border border-line bg-surface p-3"><p className="text-[9px] text-muted">{label}</p><p className="mt-2 text-lg font-semibold text-ink">{value}</p></div>
          ))}
        </div>
        <div className="mt-3 rounded-md border border-line bg-surface p-4">
          <p className="text-[9px] uppercase tracking-wider text-muted">Operating trend</p>
          <svg className="mt-4 w-full" viewBox="0 0 360 120" fill="none">
            <path d="M0 104 52 86l50 8 52-42 50 15 52-38 52 10 52-27" stroke="#2563EB" strokeWidth="2" />
            <path d="M0 112 52 107l50-13 52 4 50-25 52 4 52-24 52 5" stroke="#14B8A6" strokeWidth="2" opacity=".8" />
          </svg>
        </div>
      </div>
    </div>
  );
}
