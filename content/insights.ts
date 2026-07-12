import type { ComponentType } from "react";
import HiddenCostArticle from "./insights/the-hidden-cost-of-operational-friction.mdx";
import WorkflowAutomationArticle from "./insights/why-most-workflow-automation-projects-fail.mdx";
import AiBusinessValueArticle from "./insights/where-ai-actually-creates-business-value.mdx";
import { insightPreviews, type InsightMetadata } from "./insight-data";

export type InsightArticle = InsightMetadata & {
  Content: ComponentType;
};

const articleContent = {
  "the-hidden-cost-of-operational-friction": HiddenCostArticle,
  "why-most-workflow-automation-projects-fail": WorkflowAutomationArticle,
  "where-ai-actually-creates-business-value": AiBusinessValueArticle,
} as const satisfies Record<string, ComponentType>;

export const insights = insightPreviews.map((article) => ({
  ...article,
  Content: articleContent[article.slug],
})) satisfies InsightArticle[];

export function getInsightBySlug(slug: string) {
  return insights.find((article) => article.slug === slug);
}
