"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type Field = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  options?: string[];
  required?: boolean;
};

const careerFields: Field[] = [
  { label: "Full name", name: "name", placeholder: "Your full name", required: true },
  { label: "Phone", name: "phone", type: "tel", placeholder: "Your phone number", required: true },
  { label: "Email", name: "email", type: "email", placeholder: "you@example.co.uk", required: true },
  {
    label: "Care experience",
    name: "experience",
    type: "select",
    placeholder: "Select experience",
    required: true,
    options: ["New to care", "Less than 1 year", "1 to 3 years", "3+ years", "Nursing background"]
  },
  {
    label: "Preferred working hours",
    name: "hours",
    type: "select",
    placeholder: "Select hours",
    options: ["Mornings", "Evenings", "Overnights", "Weekends", "Flexible"]
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Tell us about the kind of care work you are looking for"
  }
];

const enquiryFields: Field[] = [
  { label: "Full name", name: "name", placeholder: "Your full name", required: true },
  { label: "Phone number", name: "phone", type: "tel", placeholder: "Best number to call", required: true },
  { label: "Email", name: "email", type: "email", placeholder: "you@example.co.uk", required: true },
  {
    label: "Loved one's care needs",
    name: "needs",
    type: "select",
    placeholder: "Select care need",
    required: true,
    options: [
      "Daily home care",
      "Live-in care",
      "Dementia support",
      "Companionship",
      "Personal care",
      "Respite care",
      "Unsure, need guidance"
    ]
  },
  { label: "Postcode", name: "postcode", placeholder: "e.g. SW1A 1AA", required: true },
  {
    label: "Preferred contact time",
    name: "time",
    type: "select",
    placeholder: "Select time",
    options: ["Morning", "Afternoon", "Evening", "Any time"]
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Share anything that would help us understand the situation"
  }
];

export function CareerApplicationForm() {
  return (
    <FrontendForm
      fields={careerFields}
      buttonLabel="Apply to Join"
      successText="Application preview received. In a live site this would route to the recruitment team."
    />
  );
}

export function CareEnquiryForm() {
  return (
    <FrontendForm
      fields={enquiryFields}
      buttonLabel="Request Care Support"
      successText="Care enquiry preview received. In a live site this would notify the care coordination team."
    />
  );
}

function FrontendForm({
  fields,
  buttonLabel,
  successText
}: {
  fields: Field[];
  buttonLabel: string;
  successText: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const invalid = fields
      .filter((field) => field.required)
      .some((field) => {
        const value = new FormData(form).get(field.name);
        return typeof value !== "string" || value.trim().length < 2;
      });

    if (invalid) {
      setError("Please complete the required fields so the form preview can continue.");
      setStatus("idle");
      return;
    }

    setError("");
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 760);
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label
            key={field.name}
            className={`grid gap-2 text-sm font-semibold text-charcoal ${
              field.type === "textarea" ? "md:col-span-2" : ""
            }`}
          >
            <span>
              {field.label}
              {field.required ? <span className="text-rosewood"> *</span> : null}
            </span>
            <FieldControl field={field} />
            <span className="text-xs font-normal text-muted">
              {field.required ? "Required for this preview." : "Optional."}
            </span>
          </label>
        ))}
      </div>

      {error ? (
        <p className="rounded-xl border border-rosewood/25 bg-rosewood/8 px-4 py-3 text-sm font-medium text-rosewood">
          {error}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="inline-flex items-start gap-2 rounded-xl border border-forest/20 bg-forest/7 px-4 py-3 text-sm font-medium text-forest">
          <CheckCircle2 className="mt-0.5 shrink-0" size={17} strokeWidth={1.8} />
          {successText}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest bg-forest px-6 py-3 text-sm font-semibold text-ivory transition duration-300 hover:bg-[#164534] active:translate-y-px disabled:cursor-wait disabled:opacity-70"
      >
        {status === "loading" ? <Loader2 className="animate-spin" size={17} strokeWidth={1.8} /> : <Send size={17} strokeWidth={1.8} />}
        {status === "loading" ? "Preparing preview" : buttonLabel}
      </button>
    </form>
  );
}

function FieldControl({ field }: { field: Field }) {
  const shared =
    "field-control min-h-12 rounded-2xl px-4 py-3 text-sm placeholder:text-muted/65";

  if (field.type === "textarea") {
    return (
      <textarea
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        className={`${shared} min-h-32 resize-y`}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select name={field.name} required={field.required} className={shared} defaultValue="">
        <option value="" disabled>
          {field.placeholder}
        </option>
        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      name={field.name}
      type={field.type ?? "text"}
      placeholder={field.placeholder}
      required={field.required}
      className={shared}
    />
  );
}
