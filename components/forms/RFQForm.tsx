"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { rfqSchema, PRODUCT_OPTIONS, type RfqFormValues } from "@/lib/validations/rfq";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

export function RFQForm({ defaultProduct }: { defaultProduct?: string }) {
  const [state, setState] = useState<SubmitState>("idle");
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      productType: (PRODUCT_OPTIONS.find((p) => p === defaultProduct) ??
        undefined) as RfqFormValues["productType"],
    },
  });

  async function onSubmit(values: RfqFormValues) {
    setState("submitting");
    setFileError(null);

    const fileInput = document.getElementById("drawing") as HTMLInputElement | null;
    const file = fileInput?.files?.[0];
    const body = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) body.append(key, value);
    });
    if (file) body.append("drawing", file);

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data?.error) setFileError(data.error);
        throw new Error("Request failed");
      }
      setState("success");
      reset();
      if (fileInput) fileInput.value = "";
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-line bg-white p-10 text-center">
        <CheckCircle2 className="text-green-600" size={40} />
        <h3 className="font-display text-xl font-semibold text-navy">
          Enquiry received
        </h3>
        <p className="max-w-sm text-sm text-muted">
          Thank you for your enquiry. Our team will review your requirement and
          respond within one business day.
        </p>
        <Button variant="outline" size="sm" onClick={() => setState("idle")}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-5 rounded-lg border border-line bg-white p-8 shadow-card sm:grid-cols-2"
      noValidate
    >
      <Field label="Full Name" htmlFor="name" error={errors.name?.message}>
        <input id="name" className={inputClasses} {...register("name")} />
      </Field>

      <Field label="Company" htmlFor="company" error={errors.company?.message}>
        <input id="company" className={inputClasses} {...register("company")} />
      </Field>

      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClasses} {...register("email")} />
      </Field>

      <Field label="Country" htmlFor="country" error={errors.country?.message}>
        <input id="country" className={inputClasses} {...register("country")} />
      </Field>

      <Field label="Phone" htmlFor="phone">
        <input id="phone" className={inputClasses} {...register("phone")} />
      </Field>

      <Field
        label="Product Type"
        htmlFor="productType"
        error={errors.productType?.message}
      >
        <select id="productType" className={inputClasses} {...register("productType")}>
          <option value="">Select a product</option>
          {PRODUCT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Material" htmlFor="material">
        <input id="material" className={inputClasses} {...register("material")} />
      </Field>

      <Field label="Quantity" htmlFor="quantity">
        <input id="quantity" className={inputClasses} {...register("quantity")} />
      </Field>

      <div className="sm:col-span-2">
        <Field
          label="Requirement Details"
          htmlFor="message"
          error={errors.message?.message}
        >
          <textarea
            id="message"
            rows={5}
            className={cn(inputClasses, "resize-none")}
            {...register("message")}
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Field label="Drawing / Specification File" htmlFor="drawing" error={fileError ?? undefined}>
          <input
            id="drawing"
            name="drawing"
            type="file"
            accept=".pdf,.dwg,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            className={cn(inputClasses, "file:mr-4 file:border-0 file:bg-navy file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-white")}
          />
        </Field>
        <p className="mt-1.5 text-xs text-muted">Accepted formats: PDF, DWG, JPG, PNG up to 10MB.</p>
      </div>

      {state === "error" && (
        <p className="flex items-center gap-1 text-sm text-red-600 sm:col-span-2" role="alert">
          <AlertCircle size={14} /> Something went wrong sending your enquiry. Please
          try again or email us directly.
        </p>
      )}

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={state === "submitting"} className="w-full sm:w-auto">
          {state === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Sending
            </>
          ) : (
            "Submit Enquiry"
          )}
        </Button>
      </div>
    </form>
  );
}
