import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 text-center sm:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]" />
      <Container className="relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal">Start with clarity</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Ready to see what your operations could look like with one clear system?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-secondary">A discovery call is a working conversation. We’ll identify where friction lives today and where a better operating system can create the most leverage.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="mailto:hello@clearpathtechnologies.com?subject=ClearPath%20Discovery%20Call" arrow>Book a discovery call</Button>
            <Button href="#services" variant="secondary">Explore services</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
