import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Brand } from "./Brand";

const serviceLinks = site.services.slice(0, 4).map((item) => ({ label: item.title, href: "#services" }));

export function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label="Back to top"><Brand /></a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">An operational excellence consulting company. Technology is our tool. Business outcomes are our product.</p>
          </div>
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Company" links={[...site.nav.slice(1, 4), { label: "About", href: "#credibility" }]} />
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Start a conversation</p>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm text-secondary hover:text-ink">
              {site.email}<ArrowUpRight className="size-3.5" />
            </a>
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
        {links.map((link) => <li key={link.label}><a href={link.href} className="text-sm text-secondary hover:text-ink">{link.label}</a></li>)}
      </ul>
    </div>
  );
}
