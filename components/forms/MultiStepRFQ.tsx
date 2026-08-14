"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Upload, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const STEPS = ["Company", "Contact", "Specifications", "Review"];

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function MultiStepRFQForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") || searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    industry: "",
    contactName: "",
    designation: "",
    email: "",
    phone: "",
    product: initialProduct,
    material: "",
    quantity: "",
    requiredDate: "",
    message: "",
    drawing: null as File | null
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.companyName || !formData.country || !formData.contactName || 
        !formData.email || !formData.phone || !formData.product || !formData.material || !formData.quantity) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("companyName", formData.companyName);
      payload.append("contactName", formData.contactName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("country", formData.country);
      payload.append("industry", formData.industry);
      payload.append("product", formData.product);
      payload.append("material", formData.material);
      payload.append("quantity", formData.quantity);
      payload.append("requiredDate", formData.requiredDate);
      payload.append("message", formData.message || `RFQ submitted for ${formData.product || "custom precision component"}.`);
      if (formData.drawing) payload.append("drawing", formData.drawing);

      const response = await fetch("/api/rfq", { method: "POST", body: payload });
      const result = await response.json();
      
      if (!response.ok) throw new Error(result.error || "RFQ submission failed");
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Failed to submit RFQ. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center rounded-2xl border border-line bg-white p-12 shadow-raised">
        <CheckCircle2 size={64} className="mb-6 text-success" />
        <h3 className="mb-4 font-display text-3xl font-bold text-navy">Quotation Request Received</h3>
        <p className="mb-8 max-w-md text-ink-muted">
          Your RFQ has been logged into our Lead Management System. An engineering representative will review your drawing and respond within 24 hours.
        </p>
        <Button onClick={() => setIsSuccess(false)}>Submit Another RFQ</Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-8 shadow-raised lg:p-12">
      {/* Progress Bar */}
      <div className="mb-10 relative">
        <div className="flex justify-between">
          {STEPS.map((step, i) => (
            <div key={step} className="flex flex-col items-center z-10 w-1/4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${i <= currentStep ? 'bg-navy text-white' : 'bg-surface text-ink-muted border border-line'}`}>
                {i < currentStep ? <CheckCircle2 size={18} /> : i + 1}
              </div>
              <span className={`mt-3 text-xs font-semibold uppercase tracking-wider ${i <= currentStep ? 'text-navy' : 'text-ink-muted'}`}>{step}</span>
            </div>
          ))}
        </div>
        {/* Progress Line */}
        <div className="absolute top-5 left-0 h-[2px] w-full bg-line -z-0">
          <motion.div 
            className="h-full bg-navy"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && (
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Company Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">Company Name *</label>
                    <Input placeholder="OEM Engineering Ltd" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} required />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Country *</label>
                      <Input placeholder="United States" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Industry</label>
                      <Input placeholder="e.g. Oil & Gas" value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Contact Person</h3>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Full Name *</label>
                      <Input placeholder="e.g. Michael Vance" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Designation</label>
                      <Input placeholder="e.g. Head of Procurement" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Business Email *</label>
                      <Input type="email" placeholder="procurement@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Phone Number *</label>
                      <Input type="tel" placeholder="+1 (555) 019-2834" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Product & Specifications</h3>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Product Component *</label>
                      <Input 
                        placeholder="e.g. Pump Shaft or Thordon Bearing" 
                        value={formData.product} 
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Material Grade *</label>
                      <Input placeholder="e.g. Super Duplex S32750" value={formData.material} onChange={(e) => setFormData({ ...formData, material: e.target.value })} required />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Order Quantity *</label>
                      <Input type="number" placeholder="100" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-navy">Required Delivery Date</label>
                      <Input type="date" value={formData.requiredDate} onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">Additional Notes</label>
                    <textarea 
                      className="w-full rounded-md border border-line bg-surface p-3 text-sm text-navy focus:border-oxide focus:outline-none" 
                      rows={3} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any specific tolerances, finishes, or requirements?"
                    ></textarea>
                  </div>
                  
                  <label className="block rounded-lg border-2 border-dashed border-line bg-surface/50 p-8 text-center transition-colors hover:border-oxide/50 hover:bg-surface cursor-pointer mt-4">
                    <Upload className="mx-auto mb-4 text-ink-muted" size={32} />
                    <p className="font-medium text-navy">Upload Technical Drawings (Required)</p>
                    <p className="mt-1 text-xs text-ink-muted">{formData.drawing ? formData.drawing.name : "PDF, DWG, JPG, or PNG files up to 10MB"}</p>
                    <input type="file" className="sr-only" accept=".pdf,.dwg,.jpg,.jpeg,.png" onChange={(e) => setFormData({ ...formData, drawing: e.target.files?.[0] ?? null })} />
                  </label>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Review & Submit</h3>
                <div className="rounded-lg border border-line bg-surface/30 p-6 space-y-4 text-sm text-ink-muted">
                  <p>Please ensure all information provided is accurate. This RFQ will be securely logged into our Lead Management system.</p>
                  <p>An automated confirmation email will be sent to your provided email address immediately upon submission.</p>
                  <div className="flex items-center gap-3 text-navy mt-4">
                    <input type="checkbox" required className="h-4 w-4 rounded border-line text-oxide focus:ring-oxide" />
                    <span>I agree to Pako Engineers processing my data for quotation purposes. *</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Actions */}
        <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentStep === 0 || isSubmitting}
            className={currentStep === 0 ? "opacity-0" : ""}
          >
            <ChevronLeft size={18} className="mr-2" />
            Back
          </Button>
          
          {currentStep < STEPS.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Continue
              <ChevronRight size={18} className="ml-2" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit RFQ"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export function MultiStepRFQ() {
  return (
    <Suspense fallback={<div className="h-[500px] w-full animate-pulse rounded-2xl bg-surface"></div>}>
      <MultiStepRFQForm />
    </Suspense>
  );
}
