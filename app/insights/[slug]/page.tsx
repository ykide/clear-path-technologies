import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getServiceBySlug } from "@/content/capabilities";
import { formatArticleDate, getInsightMetadataBySlug, insightPreviews } from "@/content/insight-data";
import { getInsightBySlug } from "@/content/insights";
import { site } from "@/content/site";
import { absoluteUrl, breadcrumbJsonLd, defaultOgImage, jsonLdScriptProps } from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightPreviews.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightMetadataBySlug(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.dek,
    authors: [{ name: article.author }],
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.dek,
      url: `/insights/${article.slug}`,
      siteName: site.name,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
      section: article.category,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) notFound();

  const relatedCapabilities = article.relatedCapabilities
    .map((capabilitySlug) => getServiceBySlug(capabilitySlug))
    .filter((capability): capability is NonNullable<typeof capability> => Boolean(capability));
  const Content = article.Content;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/insights/${article.slug}#article`),
    headline: article.title,
    description: article.dek,
    author: { "@type": "Organization", name: article.author, url: absoluteUrl("/") },
    publisher: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    image: absoluteUrl(defaultOgImage.url),
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
    articleSection: article.category,
  };
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: article.title, path: `/insights/${article.slug}` },
  ]);

  return (
    <>
      <script {...jsonLdScriptProps([breadcrumbs, structuredData])} />
      <section className="border-b border-line py-20 sm:py-24 lg:py-32">
        <Container>
          <Reveal className="max-w-5xl">
            <Link
              href="/insights"
              className="inline-flex rounded text-sm font-semibold text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              Insights
            </Link>
            <Eyebrow className="mt-8">{article.category}</Eyebrow>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-secondary">{article.dek}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
              <span>{article.author}</span>
              <time dateTime={article.publishDate}>{formatArticleDate(article.publishDate)}</time>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 aria-hidden="true" className="size-4" />
                {article.readingTime}
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section className="py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[260px_minmax(0,760px)_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal">Contents</p>
            <nav aria-label="Table of contents" className="mt-5 grid gap-3">
              {article.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded text-sm leading-5 text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0">
            <Content />
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal">Related capabilities</p>
            <div className="mt-5 grid gap-3">
              {relatedCapabilities.map((capability) => (
                <Link
                  key={capability.slug}
                  href={`/capabilities#${capability.slug}`}
                  className="group rounded-xl border border-line bg-surface/65 p-4 transition hover:border-muted hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <span className="block text-sm font-semibold text-ink">{capability.shortTitle}</span>
                  <span className="mt-2 block text-xs leading-5 text-muted">{capability.response}</span>
                </Link>
              ))}
            </div>
          </aside>
        </Container>
      </Section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <Container>
          <Reveal className="rounded-xl border border-line bg-surface p-8 sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <div>
              <Eyebrow>{article.cta.eyebrow}</Eyebrow>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{article.cta.title}</h2>
              <p className="mt-5 max-w-2xl leading-7 text-secondary">{article.cta.description}</p>
            </div>
            <Button href={article.cta.href} arrow className="mt-8 lg:mt-0">
              {article.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
