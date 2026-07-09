import { ArrowUpRight, Clock3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function InsightsSection() {
  return (
    <Section id="insights">
      <Container>
        <Reveal className="mb-14 max-w-2xl"><Eyebrow>Insights</Eyebrow><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Perspective on operating at scale.</h2></Reveal>
        <Reveal className="grid gap-5 md:grid-cols-3">
          {site.insights.map((insight) => (
            <article key={insight.title} className="group flex min-h-72 flex-col rounded-xl border border-line p-7 transition hover:-translate-y-1 hover:border-muted">
              <p className="text-xs font-semibold uppercase tracking-wider text-signal">{insight.category}</p>
              <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight">{insight.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{insight.excerpt}</p>
              <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted"><span className="flex items-center gap-1.5"><Clock3 className="size-3.5" />{insight.readTime}</span><ArrowUpRight className="size-4 transition group-hover:text-signal" /></div>
            </article>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
