"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MapPin, Phone, Mail } from "lucide-react";
import { company } from "@/lib/content/company";

export function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-24">
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
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-navy">Phone</p>
                <p className="mt-1 text-ink-muted">{company.leadership[0].phone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-navy">Email</p>
                <p className="mt-1 text-ink-muted">{company.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-8 shadow-raised lg:p-10">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy" htmlFor="name">Name</label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy" htmlFor="company">Company</label>
                <Input id="company" placeholder="OEM Inc." />
              </div>
            </div>
            
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy" htmlFor="phone">Phone</label>
                <Input id="phone" type="tel" placeholder="+1 234 567 890" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-navy" htmlFor="message">Requirements</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                placeholder="Please describe your product requirements, material, and quantity..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full justify-center">
              Submit Request
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
