import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function IndustriesSection() {
  return (
    <Section id="industries">
      <Container>
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Industries</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Fluent in the environments we work in.</h2>
          <p className="mt-5 leading-7 text-secondary">We focus on firms where delivery is complex, knowledge matters, and operational clarity directly affects margin and mission.</p>
        </Reveal>
        <Reveal className="grid overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-5">
          {site.industries.map((industry, index) => (
            <article key={industry.title} className="-mb-px -mr-px border-b border-r border-line bg-surface p-6 transition hover:bg-card">
              <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 font-semibold">{industry.title}</h3>
              <p className="mt-3 text-xs leading-5 text-muted">{industry.description}</p>
            </article>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
