"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Paperclip } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone is required"),
  country: z.string().min(2, "Country is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is required"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" })
  })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert(error instanceof Error ? error.message : "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-line bg-white p-8 shadow-raised">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex min-h-[400px] flex-col items-center justify-center text-center"
          >
            <CheckCircle2 size={64} className="mb-6 text-success" />
            <h3 className="mb-4 font-display text-2xl font-bold text-navy">Message Sent!</h3>
            <p className="mb-8 text-ink-muted">
              Thank you for contacting Pako Engineers. Our team will get back to you shortly.
            </p>
            <Button onClick={() => setIsSuccess(false)}>Send Another Message</Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-navy mb-6">Send a Message</h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Name *</label>
                <Input {...register("name")} placeholder="e.g. Rahul Sharma" />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Company</label>
                <Input {...register("company")} placeholder="e.g. Flowtech Industries" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Email *</label>
                <Input type="email" {...register("email")} placeholder="procurement@company.com" />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Phone *</label>
                <Input type="tel" {...register("phone")} placeholder="+91 98765 43210" />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Country *</label>
                <Input {...register("country")} placeholder="United States" />
                {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Subject *</label>
                <Input {...register("subject")} placeholder="General Inquiry" />
                {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-navy">Message *</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full rounded-md border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-oxide"
                placeholder="How can we help you?"
              />
              {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
            </div>

            <div className="flex items-center gap-4 border border-dashed border-line bg-surface/50 p-4 rounded-md cursor-pointer hover:border-oxide/50">
               <Paperclip size={20} className="text-ink-muted" />
               <span className="text-sm text-ink-muted">Attach files (Optional)</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-ink-muted">
              <input type="checkbox" {...register("consent")} className="h-4 w-4 rounded border-line text-oxide focus:ring-oxide" />
              <span>I consent to having Pako Engineers collect my details for communication purposes. *</span>
            </div>
            {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent.message}</p>}

            <Button type="submit" size="lg" className="w-full justify-center" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
