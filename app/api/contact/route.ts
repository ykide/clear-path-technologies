import { NextResponse } from "next/server";
import { contactFormSchema, type ContactFieldErrors } from "@/lib/validation/contact";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const result = contactFormSchema.safeParse(payload);

  if (!result.success) {
    const fieldErrors: ContactFieldErrors = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof ContactFieldErrors | undefined;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }

    return NextResponse.json(
      { message: "Please review the highlighted fields and try again.", fieldErrors },
      { status: 400 },
    );
  }

  if (result.data.website) {
    return NextResponse.json({ message: "Unable to process this request." }, { status: 400 });
  }

  // TODO: Connect this validated inquiry to email delivery or a CRM integration.
  // No form data is persisted in this initial implementation.
  return NextResponse.json({ ok: true });
}
