import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DiscoveryExpectations } from "@/components/contact/DiscoveryExpectations";
import { DiscoveryForm } from "@/components/contact/DiscoveryForm";
import { QualificationPanel } from "@/components/contact/QualificationPanel";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { breadcrumbJsonLd, defaultOgImage, jsonLdScriptProps } from "@/lib/seo";

const title = "Book a Discovery Call | ClearPath Technologies";
const description =
  "Discuss operational bottlenecks, workflow automation, executive visibility, and business system modernization with ClearPath Technologies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
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

const contactBreadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <script {...jsonLdScriptProps(contactBreadcrumbs)} />
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[110px]" />
        <Container className="relative">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 rounded text-sm text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            <ArrowLeft aria-hidden="true" className="size-4" /> Back to homepage
          </Link>

          <Reveal className="max-w-4xl">
            <Eyebrow>Start a conversation</Eyebrow>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Let&apos;s identify where operational friction is costing your organization time, visibility, and capacity.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              A ClearPath discovery call is a focused working conversation. We&apos;ll discuss how work moves through your
              organization today, where bottlenecks exist, and where better systems could create measurable operational leverage.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,.9fr)] lg:items-start">
            <Reveal delay={0.08}>
              <DiscoveryForm />
            </Reveal>
            <aside className="space-y-5 lg:sticky lg:top-28" aria-label="Discovery call details">
              <Reveal delay={0.14}>
                <DiscoveryExpectations />
              </Reveal>
              <Reveal delay={0.2}>
                <QualificationPanel />
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
