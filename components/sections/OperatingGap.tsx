import { AlertCircle, Check, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionListItem, Reveal, StaggerList } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function OperatingGap() {
  return (
    <Section>
      <Container>
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow>{site.operatingGap.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{site.operatingGap.title}</h2>
          </div>
          <p className="max-w-2xl leading-7 text-secondary lg:justify-self-end">{site.operatingGap.description}</p>
        </Reveal>

        <Reveal className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-line bg-background/40 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-card text-signal">
                <TrendingUp aria-hidden="true" className="size-5" />
              </div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight">The gap is not effort. It is operating architecture.</h3>
              <p className="mt-4 text-sm leading-6 text-muted">
                When the system behind the work is informal, every team compensates differently. The result is hidden cost: slower decisions, inconsistent reporting, unclear ownership, and operational risk that only becomes visible under pressure.
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <GapColumn title="Without a system" items={site.operatingGap.before} />
              <GapColumn title="With ClearPath" items={site.operatingGap.after} positive />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function GapColumn({ title, items, positive = false }: { title: string; items: readonly string[]; positive?: boolean }) {
  const Icon = positive ? Check : AlertCircle;
  return (
    <article className={`p-7 sm:p-8 ${positive ? "border-t border-line md:border-l md:border-t-0" : ""}`}>
      <h3 className={`mb-7 text-xs font-semibold uppercase tracking-[0.14em] ${positive ? "text-signal" : "text-muted"}`}>{title}</h3>
      <StaggerList className="space-y-5">
        {items.map((item) => (
          <MotionListItem key={item} className="flex gap-3 text-sm leading-6 text-secondary">
            <Icon className={`mt-0.5 size-4 shrink-0 ${positive ? "text-signal" : "text-muted"}`} aria-hidden="true" />
            {item}
          </MotionListItem>
        ))}
      </StaggerList>
    </article>
  );
}


