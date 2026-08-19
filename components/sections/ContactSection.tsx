"use client";

import { useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { company } from "@/lib/content/company";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formState === "loading") return;

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    // Basic client-side validation
    if (!data.name || data.name.trim().length < 2) {
      setErrorMsg("Please enter your name (at least 2 characters).");
      setFormState("error");
      return;
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setErrorMsg("Please enter a valid email address.");
      setFormState("error");
      return;
    }
    if (!data.message || data.message.trim().length < 10) {
      setErrorMsg("Please describe your requirements (at least 10 characters).");
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setFormState("error");
        return;
      }

      setFormState("success");
      formRef.current?.reset();
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        {/* ─── Left: Contact Info ─────────────────────────────── */}
        <div>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Ready to request a quote?
          </h2>
          <p className="mb-10 text-lg text-ink-muted">
            Send us your drawing and specifications. Our engineering team will review your requirements and provide a detailed manufacturing proposal.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-navy">Factory Address</p>
                <p className="mt-1 text-ink-muted">{company.address.full}</p>
                <a
                  href={company.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center text-xs font-semibold text-oxide hover:underline"
                >
                  View on Google Maps &rarr;
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-navy">Phone</p>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="mt-1 block text-ink-muted hover:text-navy transition-colors"
                >
                  {company.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-navy">Email</p>
                <a
                  href="mailto:sales@pakoshaft.com"
                  className="mt-1 block text-ink-muted hover:text-navy transition-colors"
                >
                  sales@pakoshaft.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-navy">Business Hours</p>
                <p className="mt-1 text-ink-muted">{company.businessHours.open}</p>
                <p className="text-ink-muted">{company.businessHours.closed} — Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Right: Contact Form ─────────────────────────────── */}
        <div className="rounded-2xl border border-line bg-white p-8 shadow-raised lg:p-10">

          {/* Success State */}
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                <CheckCircle2 size={36} className="text-green-600" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-navy">
                Message Sent Successfully!
              </h3>
              <p className="mb-6 max-w-xs text-ink-muted text-sm leading-relaxed">
                Thank you for reaching out. Our sales team will review your requirements and respond within 24–48 business hours.
              </p>
              <p className="text-xs text-ink-muted">
                A confirmation has been sent to your email.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-6 text-sm font-semibold text-navy underline underline-offset-4 hover:text-oxide transition-colors"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy" htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input id="name" name="name" placeholder="e.g. Rahul Sharma" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy" htmlFor="company">
                    Company
                  </label>
                  <Input id="company" name="company" placeholder="e.g. Flowtech Industries" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input id="email" name="email" type="email" placeholder="procurement@company.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy" htmlFor="phone">
                    Phone
                  </label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-navy" htmlFor="message">
                  Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy resize-none"
                  placeholder="Please describe your product requirements, material, and quantity..."
                />
              </div>

              {/* Error Banner */}
              {formState === "error" && errorMsg && (
                <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                  <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                  <p className="text-sm text-red-700">{errorMsg}</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full justify-center"
                disabled={formState === "loading"}
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>

              <p className="text-center text-xs text-ink-muted">
                Your enquiry is sent directly to{" "}
                <a href="mailto:sales@pakoshaft.com" className="font-medium text-navy hover:underline">
                  sales@pakoshaft.com
                </a>
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
