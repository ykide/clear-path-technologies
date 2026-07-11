import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { serviceSequence } from "@/content/services";

export function ServicesMethodology() {
  return (
    <Section id="approach">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>How services work together</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              We diagnose the operating problem first.
            </h2>
            <p className="mt-5 leading-7 text-secondary">
              We diagnose the operating problem first, then apply the right combination of process, software, data, cloud, automation, and AI to solve it.
            </p>
            <p className="mt-5 text-sm leading-6 text-muted">
              That means consulting, design, engineering, automation, data, cloud, and AI are not disconnected offerings. They are coordinated tools used in the right sequence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/#methodology" className="rounded text-sm font-semibold text-signal hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                Review our homepage methodology
              </Link>
              <Link href="/industries" className="rounded text-sm font-semibold text-secondary hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
                See industries we serve
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
            <ol className="grid gap-3 sm:grid-cols-2">
              {serviceSequence.map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-xl border border-line bg-background/70 p-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-card font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{step}</span>
                  {index < serviceSequence.length - 1 && <ArrowRight aria-hidden="true" className="ml-auto hidden size-4 text-muted sm:block" />}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal className="mt-8 rounded-2xl border border-line bg-gradient-to-b from-card/40 to-surface p-7 sm:p-8" delay={0.1}>
          <Eyebrow>ClearPath OS connection</Eyebrow>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">Engagements should compound into reusable operating capability.</h3>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-secondary">
            Each engagement should create reusable knowledge, patterns, components, and operating capabilities that strengthen the long-term ClearPath OS platform vision. ClearPath OS remains an emerging platform direction shaped by consulting work—not a fully available SaaS platform.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
