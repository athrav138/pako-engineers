# PAKO ENGINEERS - Enterprise Manufacturing Platform

Welcome to the enterprise digital platform for Pako Engineers. This repository contains the complete Next.js 15 application designed to function as a high-performance corporate website, B2B lead generation tool, and internal administrative CRM.

## 🏗 System Architecture

The platform is built using a modern, scalable tech stack:

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS & shadcn/ui
- **Animations**: Framer Motion & GSAP
- **Database**: PostgreSQL (via Prisma ORM)
- **Content Management**: Sanity CMS
- **Authentication**: Auth.js (NextAuth)
- **Forms**: React Hook Form + Zod
- **Email Automation**: Resend
- **Media**: Cloudinary (Image/Video optimization)

## 📁 Project Structure

```
├── app/                  # Next.js App Router (Public & Admin Routes)
│   ├── admin/            # Secure Enterprise Dashboard
│   ├── api/              # RESTful API Endpoints (v1)
│   ├── products/         # Dynamic Product Experience Platform
│   ├── manufacturing/    # Manufacturing & Capabilities Module
│   ├── quality/          # Quality Assurance & Testing Facilities
│   └── request-quote/    # Multi-step RFQ Lead Generation
├── components/           # Reusable UI Architecture
│   ├── forms/            # Complex Zod-validated forms
│   ├── sections/         # Page layout sections
│   └── ui/               # Atomic shadcn components
├── prisma/               # Database Schema & Migrations
├── sanity/               # Headless CMS Schema definitions
└── lib/                  # Utilities, Types, and Configs
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- pnpm (Recommended) or npm
- PostgreSQL database
- Sanity account

### Installation

1. **Clone & Install Dependencies**
   ```bash
   git clone <repo-url>
   cd pako-engineers
   pnpm install
   ```

2. **Environment Variables**
   Create a `.env` file based on `.env.example` and add your keys:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/pako_db"
   NEXTAUTH_SECRET="your-secret-key"
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-id"
   RESEND_API_KEY="your-resend-key"
   ```

3. **Database Migration**
   ```bash
   pnpm prisma generate
   pnpm prisma migrate deploy
   ```

4. **Run Development Server**
   ```bash
   pnpm dev
   ```
   Access the public site at `http://localhost:3000` and the Admin panel at `http://localhost:3000/admin`.

## 🛡 Enterprise Features

- **Lead Management**: Advanced Multi-step RFQ forms directly injected into the PostgreSQL CRM.
- **Role-Based Access Control**: Secure `/admin` routes restricted to verified staff.
- **Cinematic Experience**: Heavy integration of GSAP ScrollTriggers and Framer Motion for a "Luxury Industrial" aesthetic.
- **SEO Optimized**: Fully compliant JSON-LD Schema (ManufacturingBusiness, Breadcrumbs, Products).

## 🧪 Testing & QA

Run the test suites before deployment:
```bash
# E2E Tests with Playwright
pnpm test:e2e

# Unit Tests with Vitest
pnpm test:unit
```

## 🚢 Deployment

The platform is optimized for Vercel deployment.
CI/CD is handled via GitHub Actions to ensure strict type checking and linting before production rollout.

```bash
pnpm build
pnpm start
```
