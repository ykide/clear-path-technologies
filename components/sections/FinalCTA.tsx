import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTAGlow } from "./CTAGlow";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 text-center sm:py-32">
      <CTAGlow />
      <Container className="relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal">Start with clarity</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Ready to see what your operations could look like with one clear system?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-secondary">
            A discovery call is a working conversation. We’ll identify where friction lives today and where a better operating system can create the most leverage.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/contact" arrow>Book a discovery call</Button>
            <Button href="/contact" variant="secondary">Talk through the opportunity</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}


