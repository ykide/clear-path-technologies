import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/contact/email";
import { enforceContactRateLimit, getClientIp } from "@/lib/contact/rate-limit";
import { checkSpamSignals } from "@/lib/contact/spam";
import { contactFormSchema, type ContactFieldErrors } from "@/lib/validation/contact";

export const runtime = "nodejs";

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

  const spamResult = checkSpamSignals(result.data);

  if (!spamResult.ok) {
    console.warn("Blocked contact submission", { reason: spamResult.reason });
    return NextResponse.json({ message: "Unable to process this request." }, { status: 400 });
  }

  const rateLimit = await enforceContactRateLimit({
    ip: getClientIp(request),
    email: result.data.workEmail,
  });

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { message: "Too many requests. Please wait a few minutes before trying again." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfter),
          "X-RateLimit-Limit": String(rateLimit.limit),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      },
    );
  }

  const emailResult = await sendContactEmails(result.data);

  if (!emailResult.ok) {
    console.error("Contact email delivery failed", {
      reason: emailResult.reason,
      status: emailResult.status,
    });

    return NextResponse.json(
      { message: "We could not send your request right now. Please email hello@clearpathtechnologies.com directly." },
      { status: 502 },
    );
  }

  return NextResponse.json(
    { ok: true },
    {
      headers: {
        "X-RateLimit-Limit": String(rateLimit.limit),
        "X-RateLimit-Remaining": String(rateLimit.remaining),
      },
    },
  );
}


