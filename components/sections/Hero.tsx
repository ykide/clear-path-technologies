import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroMotion } from "./HeroMotion";
import { HeroVisualization } from "./HeroVisualization";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line py-20 sm:py-28 lg:py-32">
      <HeroMotion />
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-card/40 px-3 py-1.5 text-xs text-secondary">
            <span className="size-1.5 rounded-full bg-signal shadow-[0_0_10px_#14B8A6]" /> Operational Excellence Consulting
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.4rem]">
            We engineer <span className="text-muted">operational</span> excellence.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
            ClearPath Technologies helps government contractors and professional services firms modernize operations, automate workflows, centralize business data, and give leadership the visibility to make faster, smarter decisions through intelligent business systems.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" arrow>Book a discovery call</Button>
            <Button href="/services" variant="secondary">Explore services</Button>
          </div>
          <p className="mt-7 text-sm font-medium text-muted">Technology is our tool. <span className="text-secondary">Business outcomes are our product.</span></p>
        </Reveal>
        <Reveal><HeroVisualization /></Reveal>
      </Container>
    </section>
  );
}
