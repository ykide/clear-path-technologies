import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionCard, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <Reveal className="mb-14 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              One team, engineering every layer of the operating system.
            </h2>
          </div>
          <p className="max-w-lg leading-7 text-secondary lg:justify-self-end">
            From the workflows people run every day to the infrastructure underneath—designed and delivered as one connected system.
          </p>
        </Reveal>
        <Stagger className="grid overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map(({ title, description, icon: Icon }) => (
            <MotionCard
              key={title}
              className="group -mb-px -mr-px min-h-60 border-b border-r border-line bg-surface p-7 transition-colors duration-300 hover:bg-card focus-within:bg-card sm:p-8"
            >
              <Icon aria-hidden="true" className="size-8 text-signal transition duration-300 group-hover:scale-110" strokeWidth={1.4} />
              <h3 className="mt-7 flex items-center justify-between gap-3 font-semibold tracking-tight">
                {title}
                <ArrowUpRight className="size-4 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </MotionCard>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
