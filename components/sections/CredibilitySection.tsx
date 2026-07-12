import { CloudCog, Landmark, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CredibilitySection() {
  const signals = [
    { icon: Landmark, text: "Enterprise and federal mission environments" },
    { icon: CloudCog, text: "Cloud-native engineering and architecture" },
    { icon: Workflow, text: "Workflow automation and operational systems" },
  ];
  return (
    <section id="credibility" className="border-b border-line bg-surface/45 py-12">
      <Container>
        <Reveal className="grid gap-7 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal">Built from experience</p><p className="mt-2 text-sm leading-6 text-secondary">Practitioner-led perspective across mission, enterprise, and modern engineering contexts.</p></div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {signals.map(({ icon: Icon, text }) => <li key={text} className="flex items-center gap-3 border-l border-line pl-4 text-sm leading-5 text-muted"><Icon className="size-5 shrink-0 text-signal" strokeWidth={1.5} />{text}</li>)}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}


