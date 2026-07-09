import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function TrustStrip() {
  return (
    <section aria-labelledby="audience-heading" className="border-b border-line py-10">
      <Container>
        <p id="audience-heading" className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Built for operationally complex, project-driven firms</p>
        <ul className="flex flex-wrap gap-2.5">
          {site.audiences.map((audience) => <li key={audience} className="rounded-full border border-line bg-card/30 px-4 py-2 text-xs text-secondary sm:text-sm">{audience}</li>)}
        </ul>
      </Container>
    </section>
  );
}
