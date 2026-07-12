import { site } from "@/content/site";

export const siteUrl = "https://clearpathtechnologies.com";
export const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} brand preview`,
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type JsonLd = Record<string, unknown>;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: site.name,
    url: siteUrl,
    description: site.description,
    sameAs: [site.contact.linkedin],
    email: site.contact.email,
    slogan: site.tagline,
    logo: absoluteUrl("/icon.svg"),
  };
}

export function professionalServiceJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professionalservice`,
    name: site.name,
    url: siteUrl,
    description: site.description,
    email: site.contact.email,
    image: absoluteUrl(defaultOgImage.url),
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Operational excellence consulting",
      "Workflow automation",
      "Business process modernization",
      "Executive dashboards",
      "Business intelligence",
      "Cloud modernization",
      "Applied AI solutions",
      "Fractional technology leadership",
    ],
    sameAs: [site.contact.linkedin],
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: site.name,
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLdScriptProps(data: JsonLd | readonly JsonLd[]) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data).replace(/</g, "\\u003c") },
  };
}
