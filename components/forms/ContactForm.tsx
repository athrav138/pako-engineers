"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/app/actions/contact";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const result = await submitContact(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setError(result.error || "An error occurred while submitting the form.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-card border border-line">
      <h3 className="text-2xl font-display font-bold text-navy mb-6">Send us a Message</h3>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-success/10 text-success rounded-md border border-success/20 flex items-center">
          <div className="font-medium">Thank you! Your message has been sent successfully.</div>
        </div>
      )}
      
      {error && (
        <div className="mb-6 p-4 bg-error/10 text-error rounded-md border border-error/20 flex items-center">
          <div className="font-medium">{error}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-ink">Full Name <span className="text-error">*</span></label>
            <input
              {...register("name")}
              id="name"
              className="w-full px-4 py-3 rounded-md border border-line focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all bg-surface"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-error text-xs">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-ink">Email Address <span className="text-error">*</span></label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-md border border-line focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all bg-surface"
              placeholder="john@company.com"
            />
            {errors.email && <p className="text-error text-xs">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-ink">Company</label>
            <input
              {...register("company")}
              id="company"
              className="w-full px-4 py-3 rounded-md border border-line focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all bg-surface"
              placeholder="Company Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-ink">Phone Number</label>
            <input
              {...register("phone")}
              id="phone"
              type="tel"
              className="w-full px-4 py-3 rounded-md border border-line focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all bg-surface"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-ink">Subject <span className="text-error">*</span></label>
          <input
            {...register("subject")}
            id="subject"
            className="w-full px-4 py-3 rounded-md border border-line focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all bg-surface"
            placeholder="How can we help you?"
          />
          {errors.subject && <p className="text-error text-xs">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">Message <span className="text-error">*</span></label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-line focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all bg-surface resize-none"
            placeholder="Tell us about your requirements..."
          />
          {errors.message && <p className="text-error text-xs">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {isSubmitting ? (
            <span className="flex items-center space-x-2">
              <Loader2 className="animate-spin h-4 w-4" />
              <span>Sending...</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <span>Send Message</span>
              <Send className="h-4 w-4" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
