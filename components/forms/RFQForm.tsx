"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const rfqSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  country: z.string().min(2, "Country is required"),
  industry: z.string().optional(),
  product: z.string().optional(),
  material: z.string().optional(),
  quantity: z.string().optional(),
  requiredDate: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your requirement"),
});

type RFQFormValues = z.infer<typeof rfqSchema>;

export function RFQForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RFQFormValues>({
    resolver: zodResolver(rfqSchema)
  });

  const onSubmit = async (data: RFQFormValues) => {
    setIsSubmitting(true);
    try {
      // Keep this form storage-free; the primary RFQ form posts to /api/rfq.
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-2xl border border-line bg-white p-8 shadow-raised lg:p-12">
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
            <h3 className="mb-4 font-display text-3xl font-bold text-navy">Request Received!</h3>
            <p className="mb-8 max-w-md text-ink-muted">
              Thank you for reaching out to Pako Engineers. Our engineering team will review your specifications and contact you within 24 hours.
            </p>
            <Button onClick={() => setIsSuccess(false)}>Submit Another Request</Button>
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
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Company Name *</label>
                <Input {...register("companyName")} placeholder="OEM Engineering Ltd" />
                {errors.companyName && <p className="text-xs text-red-500">{errors.companyName.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Contact Name *</label>
                <Input {...register("contactName")} placeholder="John Smith" />
                {errors.contactName && <p className="text-xs text-red-500">{errors.contactName.message}</p>}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Email Address *</label>
                <Input type="email" {...register("email")} placeholder="john@oem.com" />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Phone Number *</label>
                <Input type="tel" {...register("phone")} placeholder="+1 234 567 8900" />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Country *</label>
                <Input {...register("country")} placeholder="United States" />
                {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Product / Category</label>
                <Input {...register("product")} placeholder="e.g. Pump Shaft" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Material Grade</label>
                <Input {...register("material")} placeholder="e.g. Super Duplex S32750" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-navy">Detailed Requirements *</label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full rounded-md border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-oxide"
                placeholder="Please describe the application, tolerance requirements, heat treatment, and surface finish..."
              />
              {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
            </div>

            <div className="rounded-lg border-2 border-dashed border-line bg-surface/50 p-8 text-center transition-colors hover:border-oxide/50 hover:bg-surface cursor-pointer">
              <Upload className="mx-auto mb-4 text-ink-muted" size={32} />
              <p className="font-medium text-navy">Upload Technical Drawings</p>
              <p className="mt-1 text-xs text-ink-muted">PDF, DWG, STEP, or ZIP files up to 20MB</p>
            </div>

            <Button type="submit" size="lg" className="w-full justify-center" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing Request...
                </>
              ) : (
                "Submit Request for Quotation"
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
