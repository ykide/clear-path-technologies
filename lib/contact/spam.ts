import type { ContactFormInput } from "@/lib/validation/contact";

type SpamResult =
  | { ok: true }
  | {
      ok: false;
      reason: "honeypot" | "too_fast" | "stale" | "content";
    };

const minimumSubmissionAgeMs = 3000;
const maximumSubmissionAgeMs = 1000 * 60 * 60 * 2;
const suspiciousPatterns = [
  /\bhttps?:\/\//i,
  /\bwww\./i,
  /\[[^\]]+\]\([^)]+\)/,
  /\b(?:seo|crypto|casino|loan|viagra|backlink)\b/i,
];

export function checkSpamSignals(inquiry: ContactFormInput): SpamResult {
  if (inquiry.website) return { ok: false, reason: "honeypot" };

  if (inquiry.submittedAt) {
    const age = Date.now() - inquiry.submittedAt;
    if (age < minimumSubmissionAgeMs) return { ok: false, reason: "too_fast" };
    if (age > maximumSubmissionAgeMs) return { ok: false, reason: "stale" };
  }

  const text = `${inquiry.fullName}\n${inquiry.companyName}\n${inquiry.roleTitle}\n${inquiry.additionalContext}`;
  const matchedSignals = suspiciousPatterns.filter((pattern) => pattern.test(text)).length;

  if (matchedSignals >= 2) return { ok: false, reason: "content" };

  return { ok: true };
}
