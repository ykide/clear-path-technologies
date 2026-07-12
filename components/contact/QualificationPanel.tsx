import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";

const fitItems = [
  "Operate through complex, cross-functional workflows",
  "Depend heavily on spreadsheets, email, or manual coordination",
  "Need better executive visibility across delivery, operations, finance, or risk",
  "Are growing faster than their internal systems can support",
  "Need enterprise-quality systems without building a large internal product team",
] as const;

const reassuranceItems = [
  "No sales pressure",
  "No obligation",
  "A practical conversation focused on operating challenges",
  "Responses typically provided within one business day",
] as const;

export function QualificationPanel() {
  return (
    <Card className="p-7 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight">A strong fit for organizations that:</h2>
      <ul className="mt-6 space-y-4">
        {fitItems.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-secondary">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-signal" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-7 rounded-lg border border-line bg-card/70 p-4 text-xs leading-5 text-muted">
        ClearPath’s initial focus is government contractors and professional services firms with approximately 20–250 employees.
      </p>
      <div className="mt-7 border-t border-line pt-7">
        <h3 className="text-sm font-semibold text-secondary">A low-friction first conversation</h3>
        <ul className="mt-4 space-y-3">
          {reassuranceItems.map((item) => (
            <li key={item} className="flex gap-3 text-xs leading-5 text-muted">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}


