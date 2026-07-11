import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function FormSuccessState() {
  return (
    <Card className="p-7 text-center sm:p-10">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-signal/30 bg-signal/10 text-signal">
        <CheckCircle2 aria-hidden="true" className="size-6" />
      </div>
      <h2 className="mt-6 text-2xl font-semibold tracking-tight">Thank you. We’ll be in touch shortly.</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-secondary">
        We’ve received your request and will review the information before reaching out. You can expect a response within one business day.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="secondary">Return to homepage</Button>
        <Button href="/#services" arrow>Explore services</Button>
      </div>
    </Card>
  );
}
