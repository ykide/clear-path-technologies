import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with ClearPath Technologies about modernizing your operations.",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />
      <Container className="relative">
        <Link href="/" className="mb-12 inline-flex items-center gap-2 rounded text-sm text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
          <ArrowLeft aria-hidden="true" className="size-4" /> Back to homepage
        </Link>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Let’s find the clearest path through your operations.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary">
              Tell us where work is slowing down, where visibility is missing, or which systems no longer fit. We’ll start with the operating problem—not a predetermined technology.
            </p>
          </div>
          <aside aria-labelledby="contact-options" className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
            <h2 id="contact-options" className="text-xl font-semibold">Book a discovery conversation</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Email us with a little context. We’ll respond with practical next steps and a time to connect.</p>
            <Button
              href={`mailto:${site.contact.email}?subject=ClearPath%20Discovery%20Conversation`}
              className="mt-7 w-full"
              arrow
            >
              Email ClearPath
            </Button>
            <div className="mt-7 border-t border-line pt-6">
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 rounded text-sm text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                <Mail aria-hidden="true" className="size-4 text-signal" /> {site.contact.email}
              </a>
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-3 rounded text-sm text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <ArrowUpRight aria-hidden="true" className="size-4 text-signal" /> Connect on LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
