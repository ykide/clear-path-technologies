import type { Metadata } from "next";
import { ArrowUpRight, Clock3 } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, MotionCard } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { formatArticleDate, insightPreviews } from "@/content/insight-data";
import { site } from "@/content/site";
import { breadcrumbJsonLd, defaultOgImage, jsonLdScriptProps } from "@/lib/seo";

const title = "Insights | ClearPath Technologies";
const description =
  "Executive perspective on operational excellence, workflow automation, applied AI, enterprise systems, dashboards, and cloud modernization.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/insights" },
  openGraph: {
    title,
    description,
    url: "/insights",
    siteName: site.name,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const [leadArticle, ...secondaryArticles] = insightPreviews;
const insightsBreadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Insights", path: "/insights" },
]);

export default function InsightsPage() {
  return (
    <>
      <script {...jsonLdScriptProps(insightsBreadcrumbs)} />
      <section className="relative overflow-hidden border-b border-line py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Field notes for leaders modernizing the operating core.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-secondary lg:justify-self-end">
              ClearPath Insights is an editorial platform for executives and operators working through automation,
              systems modernization, applied AI, executive visibility, and operational excellence.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section id="latest" className="pt-14">
        <Container>
          <Reveal>
            <Link
              href={`/insights/${leadArticle.slug}`}
              className="group grid gap-8 border-y border-line py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal lg:grid-cols-[0.76fr_1.24fr] lg:items-center"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal">Featured essay</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.12em] text-muted">
                  <span>{leadArticle.category}</span>
                  <time dateTime={leadArticle.publishDate}>{formatArticleDate(leadArticle.publishDate)}</time>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 aria-hidden="true" className="size-3.5" />
                    {leadArticle.readingTime}
                  </span>
                </div>
              </div>
              <article>
                <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] transition group-hover:text-signal sm:text-5xl">
                  {leadArticle.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-secondary">{leadArticle.dek}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal">
                  Read the essay
                  <ArrowUpRight aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </article>
            </Link>
          </Reveal>

          <Stagger className="mt-14 divide-y divide-line border-b border-line">
            {secondaryArticles.map((article, index) => (
              <MotionCard key={article.slug} className="group">
                <Link
                  href={`/insights/${article.slug}`}
                  className="grid gap-6 py-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal lg:grid-cols-[0.22fr_0.48fr_1fr_auto] lg:items-start"
                >
                  <span className="font-mono text-sm text-muted">{String(index + 2).padStart(2, "0")}</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.12em] text-muted lg:block lg:space-y-3">
                    <p className="text-signal">{article.category}</p>
                    <time dateTime={article.publishDate}>{formatArticleDate(article.publishDate)}</time>
                    <p>{article.readingTime}</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold tracking-[-0.035em] transition group-hover:text-signal">
                      {article.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-secondary">{article.dek}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="hidden size-5 text-muted transition group-hover:text-signal lg:block" />
                </Link>
              </MotionCard>
            ))}
          </Stagger>
        </Container>
      </Section>
    </>
  );
}
