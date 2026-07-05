# Pako Engineers Website

A Next.js 15 App Router website for Pako Engineers, built from the verified July 2026 website specification and February 2026 company profile.

## Included

- Corporate pages for Home, About, Company Profile, Story, Infrastructure, Manufacturing Facility, Products, Services, Industries, Quality, Certifications, Gallery, Videos, Machines, Capabilities, Downloads, Career, CSR, Export Markets, Contact/RFQ, FAQ, Privacy Policy, Terms and 404.
- Structured content in `lib/content`, including company facts, products, capacities, materials, testing, clients, export markets, services and downloads.
- RFQ form with React Hook Form, Zod validation and server-side multipart upload validation for PDF, DWG, JPG and PNG drawings up to 10MB.
- SEO metadata, sitemap, robots file, Organization/Product JSON-LD and canonical URLs.
- Real supplied media wired through `next/image` from `public/images`.
- Floating WhatsApp, call, email and back-to-top actions.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Notes Before Deployment

- Client names are rendered as text references from supplied profile material. Logo or testimonial use should be enabled only after written permission from each company.
- RFQ submissions are validated and logged by the API route. Add SMTP, Resend or another approved mail service when production credentials are available.
- The supplied documents do not include standalone videos, specific vacancies or a CSR programme statement, so those pages state that clearly instead of inventing content.
