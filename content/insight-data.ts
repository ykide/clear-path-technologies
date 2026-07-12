import type { ServiceSlug } from "./capabilities";

export type TableOfContentsItem = {
  id: string;
  title: string;
};

export type ArticleCTA = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  label: string;
};

export type InsightMetadata = {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  readingTime: string;
  category: string;
  dek: string;
  toc: readonly TableOfContentsItem[];
  relatedCapabilities: readonly ServiceSlug[];
  cta: ArticleCTA;
};

export const insightMetadata = [
  {
    slug: "the-hidden-cost-of-operational-friction",
    title: "The Hidden Cost of Operational Friction",
    author: "ClearPath Technologies",
    publishDate: "2026-07-11",
    readingTime: "7 min read",
    category: "Operations",
    dek: "Operational friction rarely appears as one obvious failure. It shows up as small delays, repeated handoffs, manual reconciliation, and decisions made without a trusted operating picture.",
    toc: [
      { id: "friction-is-a-system-problem", title: "Friction Is a System Problem" },
      { id: "where-the-cost-hides", title: "Where the Cost Hides" },
      { id: "what-leaders-should-measure", title: "What Leaders Should Measure" },
      { id: "the-clearpath-view", title: "The ClearPath View" },
    ],
    relatedCapabilities: ["operational-excellence", "process-modernization", "executive-dashboards"],
    cta: {
      eyebrow: "Start with the operating reality",
      title: "Find the friction that is quietly constraining capacity.",
      description:
        "ClearPath maps how work, information, and decisions actually move so leaders can modernize the system behind performance.",
      href: "/contact",
      label: "Book a discovery call",
    },
  },
  {
    slug: "why-most-workflow-automation-projects-fail",
    title: "Why Most Workflow Automation Projects Fail",
    author: "ClearPath Technologies",
    publishDate: "2026-07-11",
    readingTime: "8 min read",
    category: "Automation",
    dek: "Automation fails when it digitizes confusion. The strongest workflow projects begin with operating clarity, not tool selection.",
    toc: [
      { id: "automation-exposes-the-operating-model", title: "Automation Exposes the Operating Model" },
      { id: "failure-patterns", title: "Failure Patterns" },
      { id: "what-success-requires", title: "What Success Requires" },
      { id: "the-clearpath-view", title: "The ClearPath View" },
    ],
    relatedCapabilities: ["workflow-automation", "process-modernization", "custom-business-applications"],
    cta: {
      eyebrow: "Automate the right system",
      title: "Design workflows that teams can trust and leaders can measure.",
      description:
        "ClearPath helps organizations move from manual coordination to governed, connected workflows that reflect how work should actually move.",
      href: "/contact",
      label: "Discuss an automation opportunity",
    },
  },
  {
    slug: "where-ai-actually-creates-business-value",
    title: "Where AI Actually Creates Business Value",
    author: "ClearPath Technologies",
    publishDate: "2026-07-11",
    readingTime: "9 min read",
    category: "Applied AI",
    dek: "AI creates value when it is embedded into a real operating workflow with clear data, governance, adoption, and measurable outcomes.",
    toc: [
      { id: "ai-value-is-operational", title: "AI Value Is Operational" },
      { id: "where-ai-earns-its-place", title: "Where AI Earns Its Place" },
      { id: "what-leaders-should-avoid", title: "What Leaders Should Avoid" },
      { id: "the-clearpath-view", title: "The ClearPath View" },
    ],
    relatedCapabilities: ["applied-ai", "business-intelligence", "workflow-automation"],
    cta: {
      eyebrow: "Apply AI where it earns its place",
      title: "Turn AI interest into governed business value.",
      description:
        "ClearPath identifies practical AI use cases inside document, reporting, knowledge, and decision workflows where outcomes can be measured.",
      href: "/contact",
      label: "Plan an AI opportunity assessment",
    },
  },
] as const satisfies readonly InsightMetadata[];

export const insightPreviews = [...insightMetadata].sort(
  (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
);

export function getInsightMetadataBySlug(slug: string) {
  return insightPreviews.find((article) => article.slug === slug);
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    new Date(date),
  );
}
