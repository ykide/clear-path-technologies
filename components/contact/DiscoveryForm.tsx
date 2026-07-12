"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { cloneElement, useId, useMemo, useState } from "react";
import type { ReactElement } from "react";
import { useForm, type FieldPath } from "react-hook-form";
import { AlertCircle } from "lucide-react";
import { FormSuccessState } from "@/components/contact/FormSuccessState";
import { Card } from "@/components/ui/Card";
import {
  companySizeOptions,
  contactFormSchema,
  operationalChallengeOptions,
  type ContactFieldErrors,
  type ContactFormInput,
  type ContactFormValues,
} from "@/lib/validation/contact";
import { cn } from "@/lib/utils";

const inputClassName =
  "mt-2 w-full rounded-lg border border-line bg-background px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-signal focus:ring-2 focus:ring-signal/35 disabled:cursor-not-allowed disabled:opacity-60";

const labelClassName = "text-sm font-medium text-secondary";
const submitButtonClassName =
  "inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none";

const initialValues: ContactFormValues = {
  fullName: "",
  workEmail: "",
  companyName: "",
  roleTitle: "",
  phoneNumber: "",
  companySize: "20–49 employees",
  primaryChallenge: "Manual or repetitive workflows",
  additionalContext: "",
  consent: false,
  website: "",
};

export function DiscoveryForm() {
  const formId = useId();
  const submittedAt = useMemo(() => Date.now(), []);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues, unknown, ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: initialValues,
    mode: "onBlur",
  });

  async function onSubmit(values: ContactFormInput) {
    setSubmitError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, submittedAt }),
    });

    const result = (await response.json().catch(() => null)) as
      | { ok?: true; message?: string; fieldErrors?: ContactFieldErrors }
      | null;

    if (!response.ok || !result?.ok) {
      if (result?.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          if (message) setError(field as FieldPath<ContactFormValues>, { type: "server", message });
        }
      }

      setSubmitError(result?.message ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) return <FormSuccessState />;

  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Request a discovery call</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Share enough context for a focused first conversation. Required fields are marked with an asterisk.
        </p>
      </div>

      {submitError && (
        <div
          role="alert"
          className="mb-6 flex gap-3 rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-sm leading-6 text-red-100"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="fullName" required formId={formId} error={errors.fullName?.message}>
            <input {...register("fullName")} className={inputClassName} autoComplete="name" disabled={isSubmitting} />
          </Field>
          <Field label="Work email" name="workEmail" required formId={formId} error={errors.workEmail?.message}>
            <input {...register("workEmail")} className={inputClassName} type="email" autoComplete="email" disabled={isSubmitting} />
          </Field>
          <Field label="Company name" name="companyName" required formId={formId} error={errors.companyName?.message}>
            <input {...register("companyName")} className={inputClassName} autoComplete="organization" disabled={isSubmitting} />
          </Field>
          <Field label="Role or title" name="roleTitle" required formId={formId} error={errors.roleTitle?.message}>
            <input {...register("roleTitle")} className={inputClassName} autoComplete="organization-title" disabled={isSubmitting} />
          </Field>
          <Field label="Phone number" name="phoneNumber" formId={formId} error={errors.phoneNumber?.message}>
            <input {...register("phoneNumber")} className={inputClassName} type="tel" autoComplete="tel" disabled={isSubmitting} />
          </Field>
          <Field label="Company size" name="companySize" required formId={formId} error={errors.companySize?.message}>
            <select {...register("companySize")} className={inputClassName} disabled={isSubmitting}>
              {companySizeOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </Field>
        </div>

        <Field
          label="Primary operational challenge"
          name="primaryChallenge"
          required
          formId={formId}
          error={errors.primaryChallenge?.message}
        >
          <select {...register("primaryChallenge")} className={inputClassName} disabled={isSubmitting}>
            {operationalChallengeOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>

        <Field label="Additional context" name="additionalContext" required formId={formId} error={errors.additionalContext?.message}>
          <textarea
            {...register("additionalContext")}
            className={cn(inputClassName, "min-h-36 resize-y")}
            disabled={isSubmitting}
            placeholder="Where is work slowing down? What systems, approvals, reporting gaps, or operational risks should we understand?"
          />
        </Field>

        <div aria-hidden="true" className="hidden">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input id={`${formId}-website`} tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        <div>
          <label className="flex gap-3 rounded-lg border border-line bg-background/60 p-4 text-sm leading-6 text-secondary">
            <input
              {...register("consent")}
              type="checkbox"
              disabled={isSubmitting}
              aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
              className="mt-1 size-4 rounded border-line bg-background text-accent focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background"
            />
            <span>I agree that ClearPath Technologies may contact me regarding this inquiry. <span className="text-signal">*</span></span>
          </label>
          {errors.consent?.message && <ErrorMessage id={`${formId}-consent-error`} message={errors.consent.message} />}
        </div>

        <button type="submit" className={submitButtonClassName} disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : "Request a discovery call"}
        </button>
      </form>
    </Card>
  );
}

function Field({
  label,
  name,
  required = false,
  formId,
  error,
  children,
}: {
  label: string;
  name: keyof ContactFormValues;
  required?: boolean;
  formId: string;
  error?: string;
  children: ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}) {
  const fieldId = `${formId}-${name}`;
  const errorId = `${fieldId}-error`;

  return (
    <div>
      <label htmlFor={fieldId} className={labelClassName}>
        {label} {required && <span className="text-signal">*</span>}
      </label>
      {cloneField(children, fieldId, Boolean(error), error ? errorId : undefined)}
      {error && <ErrorMessage id={errorId} message={error} />}
    </div>
  );
}

function ErrorMessage({ id, message }: { id: string; message: string }) {
  return <p id={id} className="mt-2 text-xs leading-5 text-red-200">{message}</p>;
}

function cloneField(
  child: ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }>,
  id: string,
  invalid: boolean,
  describedBy?: string,
) {
  return cloneElement(child, {
    id,
    "aria-invalid": invalid,
    "aria-describedby": describedBy,
  });
}


