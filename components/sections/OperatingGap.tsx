import { AlertCircle, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function OperatingGap() {
  return (
    <Section>
      <Container>
        <Reveal className="mb-14 max-w-3xl">
          <Eyebrow>{site.operatingGap.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{site.operatingGap.title}</h2>
          <p className="mt-5 max-w-2xl leading-7 text-secondary">{site.operatingGap.description}</p>
        </Reveal>
        <Reveal className="grid overflow-hidden rounded-2xl border border-line md:grid-cols-2">
          <GapColumn title="Without a system" items={site.operatingGap.before} />
          <GapColumn title="With ClearPath" items={site.operatingGap.after} positive />
        </Reveal>
      </Container>
    </Section>
  );
}

function GapColumn({ title, items, positive = false }: { title: string; items: readonly string[]; positive?: boolean }) {
  const Icon = positive ? Check : AlertCircle;
  return (
    <div className={`bg-surface p-7 sm:p-10 ${positive ? "border-t border-line md:border-l md:border-t-0" : ""}`}>
      <h3 className={`mb-7 text-xs font-semibold uppercase tracking-[0.14em] ${positive ? "text-signal" : "text-muted"}`}>{title}</h3>
      <ul className="space-y-5">
        {items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-secondary sm:text-[15px]"><Icon className={`mt-0.5 size-4 shrink-0 ${positive ? "text-signal" : "text-muted"}`} aria-hidden="true" />{item}</li>)}
      </ul>
    </div>
  );
}
