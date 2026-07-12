import type { ContactFormInput } from "@/lib/validation/contact";

type ResendEmail = {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string[];
};

type SendContactEmailsResult =
  | { ok: true }
  | { ok: false; reason: "missing_api_key" | "delivery_failed"; status?: number };

const resendEndpoint = "https://api.resend.com/emails";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

function getEmailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.CONTACT_FROM_EMAIL ?? "ClearPath Technologies <hello@clearpathtechnologies.com>",
    to: process.env.CONTACT_TO_EMAIL ?? "hello@clearpathtechnologies.com",
  };
}

export async function sendContactEmails(inquiry: ContactFormInput): Promise<SendContactEmailsResult> {
  const config = getEmailConfig();

  if (!config.apiKey) return { ok: false, reason: "missing_api_key" };

  const notification = buildNotificationEmail(inquiry, config.from, config.to);
  const confirmation = buildConfirmationEmail(inquiry, config.from);

  const [notificationResult, confirmationResult] = await Promise.all([
    sendResendEmail(notification, config.apiKey),
    sendResendEmail(confirmation, config.apiKey),
  ]);

  if (!notificationResult.ok || !confirmationResult.ok) {
    return {
      ok: false,
      reason: "delivery_failed",
      status: notificationResult.status ?? confirmationResult.status,
    };
  }

  return { ok: true };
}

async function sendResendEmail(email: ResendEmail, apiKey: string) {
  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  if (!response.ok) return { ok: false, status: response.status };

  return { ok: true };
}

function buildNotificationEmail(inquiry: ContactFormInput, from: string, to: string): ResendEmail {
  const subject = `Discovery request: ${inquiry.companyName}`;
  const rows = [
    ["Name", inquiry.fullName],
    ["Work email", inquiry.workEmail],
    ["Company", inquiry.companyName],
    ["Role or title", inquiry.roleTitle],
    ["Phone", inquiry.phoneNumber || "Not provided"],
    ["Company size", inquiry.companySize],
    ["Primary challenge", inquiry.primaryChallenge],
    ["Additional context", inquiry.additionalContext],
  ] as const;

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#475569;font-weight:600;vertical-align:top;width:180px;">${escapeHtml(label)}</td><td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#0f172a;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n\n");

  return {
    from,
    to,
    reply_to: [inquiry.workEmail],
    subject,
    html: `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a;"><h1 style="font-size:24px;">New discovery request</h1><table style="border-collapse:collapse;width:100%;max-width:760px;">${htmlRows}</table></div>`,
    text: `New discovery request\n\n${text}`,
  };
}

function buildConfirmationEmail(inquiry: ContactFormInput, from: string): ResendEmail {
  const subject = "We received your ClearPath discovery request";
  const preview =
    "Thank you for contacting ClearPath Technologies. We will review your inquiry and respond within one business day.";

  return {
    from,
    to: inquiry.workEmail,
    subject,
    html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;max-width:640px;"><p>${escapeHtml(inquiry.fullName)},</p><p>${escapeHtml(preview)}</p><p>We will use the context you shared to make the first conversation focused and practical.</p><p style="margin-top:28px;">ClearPath Technologies</p></div>`,
    text: `${inquiry.fullName},\n\n${preview}\n\nWe will use the context you shared to make the first conversation focused and practical.\n\nClearPath Technologies`,
  };
}
