import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/capabilities";
import { insightPreviews } from "@/content/insight-data";
import { site } from "@/content/site";
import { Brand } from "./Brand";

const serviceLinks = services.slice(0, 4).map((item) => ({ label: item.shortTitle, href: `/capabilities#${item.slug}` }));
const insightLinks = insightPreviews.slice(0, 3).map((item) => ({ label: item.title, href: `/insights/${item.slug}` }));

export function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_.9fr_.9fr_1.1fr_1fr]">
          <div>
            <Link href="/" aria-label="ClearPath Technologies home">
              <Brand />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
              An operational excellence consulting company. Technology is our tool. Business outcomes are our product.
            </p>
          </div>
          <FooterColumn title="Capabilities" links={[{ label: "Capabilities hub", href: "/capabilities" }, ...serviceLinks]} />
          <FooterColumn
            title="Company"
            links={[
              { label: "Company", href: "/company" },
              { label: "Industries", href: "/#industries" },
              { label: "Methodology", href: "/#methodology" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <FooterColumn title="Insights" links={[{ label: "Insights hub", href: "/insights" }, ...insightLinks]} />
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Start a conversation</p>
            <div className="flex flex-col items-start gap-3">
              <Button href="/contact" className="min-h-0 px-4 py-2.5" arrow>
                Book a discovery call
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded text-sm font-semibold text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                Book a discovery call
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </Link>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label={`Email ClearPath Technologies at ${site.contact.email}`}
                className="inline-flex items-center gap-2 rounded text-sm text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                {site.contact.email}
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="ClearPath Technologies on LinkedIn (opens in a new tab)"
                className="inline-flex items-center gap-2 rounded text-sm text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                LinkedIn
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} ClearPath Technologies. All rights reserved.</span>
          <span>We engineer operational excellence.</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{title}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="rounded text-sm text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
