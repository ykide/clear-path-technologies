import { z } from "zod";

export const companySizeOptions = [
  "1–19 employees",
  "20–49 employees",
  "50–99 employees",
  "100–250 employees",
  "251–500 employees",
  "More than 500 employees",
] as const;

export const operationalChallengeOptions = [
  "Manual or repetitive workflows",
  "Disconnected systems and information",
  "Limited executive visibility",
  "Reporting and business intelligence",
  "Legacy process modernization",
  "Custom internal business system",
  "Cloud or platform modernization",
  "Applied AI opportunity",
  "Technology strategy or fractional CTO support",
  "Other",
] as const;

const textInput = (schema: z.ZodString) =>
  z.preprocess((value) => (typeof value === "string" ? value : ""), schema);

const requiredText = (label: string, min = 2) =>
  textInput(
    z
      .string()
      .trim()
      .min(min, `${label} is required.`)
      .max(160, `${label} must be 160 characters or fewer.`),
  );

export const contactFormSchema = z.object({
  fullName: requiredText("Full name"),
  workEmail: textInput(
    z
      .string()
      .trim()
      .min(1, "Work email is required.")
      .email("Enter a valid work email.")
      .max(160, "Work email must be 160 characters or fewer."),
  ),
  companyName: requiredText("Company name"),
  roleTitle: requiredText("Role or title"),
  phoneNumber: textInput(z.string().trim().max(40, "Phone number must be 40 characters or fewer.")).optional().or(z.literal("")),
  companySize: z.enum(companySizeOptions, { message: "Select a company size." }),
  primaryChallenge: z.enum(operationalChallengeOptions, { message: "Select a primary operational challenge." }),
  additionalContext: textInput(
    z
      .string()
      .trim()
      .min(10, "Add a little context so we can prepare for the conversation.")
      .max(2000, "Additional context must be 2,000 characters or fewer."),
  ),
  consent: z.preprocess((value) => value === true, z.boolean().refine((value) => value, { message: "Consent is required to submit this inquiry." })),
  website: textInput(z.string().max(0, "Spam protection triggered.")).optional().or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type ContactFormValues = z.input<typeof contactFormSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactFormInput, string>>;
