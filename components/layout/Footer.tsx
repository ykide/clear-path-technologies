import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Brand } from "./Brand";

const serviceLinks = services.slice(0, 4).map((item) => ({ label: item.shortTitle, href: `/services/${item.slug}` }));

export function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="ClearPath Technologies home"><Brand /></Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">An operational excellence consulting company. Technology is our tool. Business outcomes are our product.</p>
          </div>
          <FooterColumn title="Services" links={[{ label: "Services hub", href: "/services" }, ...serviceLinks]} />
          <FooterColumn title="Company" links={[...site.nav.slice(1, 4), { label: "About", href: "/#credibility" }]} />
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Start a conversation</p>
            <div className="flex flex-col items-start gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded text-sm font-semibold text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                Book a discovery call<ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label={`Email ClearPath Technologies at ${site.contact.email}`}
                className="inline-flex items-center gap-2 rounded text-sm text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                {site.contact.email}<ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="ClearPath Technologies on LinkedIn (opens in a new tab)"
                className="inline-flex items-center gap-2 rounded text-sm text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                LinkedIn<ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} ClearPath Technologies. All rights reserved.</span>
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
        {links.map((link) => <li key={link.label}><a href={link.href} className="rounded text-sm text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">{link.label}</a></li>)}
      </ul>
    </div>
  );
}
