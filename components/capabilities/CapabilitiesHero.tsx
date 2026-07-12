import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function CapabilitiesHero() {
  return (
    <section className="relative overflow-hidden border-b border-line py-20 sm:py-28 lg:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[110px]" />
      <Container className="relative">
        <Reveal className="max-w-4xl">
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Build the operating systems your organization needs to scale with clarity.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            ClearPath combines operational consulting, enterprise architecture, software engineering, automation, data, cloud, and applied AI to improve how work moves, how information is managed, and how leaders make decisions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" arrow>Book a discovery call</Button>
            <Button href="#capability-navigation" variant="secondary">Explore capabilities</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}


