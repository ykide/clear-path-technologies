import { ArrowUpRight, Clock3 } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionCard, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { formatArticleDate, insightPreviews } from "@/content/insight-data";

export function InsightsSection() {
  return (
    <Section id="insights">
      <Container>
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Insights</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Perspective on operating at scale.</h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded text-sm font-semibold text-signal transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            View all insights
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
        <Stagger className="divide-y divide-line border-y border-line">
          {insightPreviews.map((insight, index) => (
            <MotionCard key={insight.title} className="group">
              <Link
                href={`/insights/${insight.slug}`}
                className="grid gap-5 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal md:grid-cols-[0.18fr_0.52fr_1fr_auto] md:items-start"
              >
                <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.12em] text-muted md:block md:space-y-2">
                  <p className="text-signal">{insight.category}</p>
                  <p>{formatArticleDate(insight.publishDate)}</p>
                  <p className="inline-flex items-center gap-1.5">
                    <Clock3 aria-hidden="true" className="size-3.5" />
                    {insight.readingTime}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] transition group-hover:text-signal">
                    {insight.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{insight.dek}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="hidden size-5 text-muted transition group-hover:text-signal md:block" />
              </Link>
            </MotionCard>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}


