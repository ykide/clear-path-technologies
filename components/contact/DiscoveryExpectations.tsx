import { ClipboardCheck, SearchCheck, Waypoints } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

const expectations = [
  {
    title: "Understand the current operating model",
    description: "We’ll discuss how work, approvals, information, and decisions move across the organization.",
    icon: Waypoints,
  },
  {
    title: "Identify high-leverage opportunities",
    description: "We’ll look for repetitive work, disconnected systems, reporting gaps, and operational risks.",
    icon: SearchCheck,
  },
  {
    title: "Determine the right next step",
    description: "We’ll decide whether an assessment, focused modernization engagement, or broader operating-system initiative makes sense.",
    icon: ClipboardCheck,
  },
] as const;

export function DiscoveryExpectations() {
  return (
    <Card className="p-7 sm:p-8">
      <Eyebrow>What to expect</Eyebrow>
      <div className="mt-7 space-y-7">
        {expectations.map(({ title, description, icon: Icon }) => (
          <div key={title} className="grid grid-cols-[32px_1fr] gap-4">
            <div className="mt-1 flex size-8 items-center justify-center rounded-lg border border-line bg-card text-signal">
              <Icon aria-hidden="true" className="size-4" />
            </div>
            <div>
              <h2 className="font-semibold leading-6">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
