import type { MetadataRoute } from "next";
import { insightPreviews } from "@/content/insight-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clearpathtechnologies.com";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/capabilities`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/company`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...insightPreviews.map((article) => ({
      url: `${baseUrl}/insights/${article.slug}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}


