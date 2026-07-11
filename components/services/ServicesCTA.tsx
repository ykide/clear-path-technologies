import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-24 text-center sm:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-[520px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[110px]" />
      <Container className="relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal">Next step</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Not sure which service fits the problem?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-secondary">
            Start with the operating challenge. We’ll help determine the right path, scope, and sequence.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/contact" arrow>Book a discovery call</Button>
            <Button href="/#methodology" variant="secondary">Review our methodology</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
