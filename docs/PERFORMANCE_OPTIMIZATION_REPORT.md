# PAKO Engineers Performance Optimization Report

Date: 2026-08-13

## 1. Baseline

Available baseline was taken from local static/build inspection because browser Lighthouse/DevTools metrics were not available in this shell session.

| Metric | Baseline |
| --- | --- |
| Build status before dependency restore | Failed: `nodemailer` missing from `node_modules` |
| Build status after dependency restore | Failed: strict TypeScript narrowing issue in `app/api/contact/route.ts` |
| Homepage first load JS before changes | Not captured from a successful build |
| Image audit | Largest files include `modern-factory-floor-overview.png` at 2351.7 KB, `precision-quality-inspection.png` at 1923.4 KB, `cnc-turning-hero.png` at 1550.5 KB, `pako-engineers-logo.png` at 1107.3 KB |
| Client component audit | Many homepage content sections were marked `"use client"` only for reveal animation |

## 2. Changes Made

- Converted static homepage sections from Framer Motion client components to server-rendered components with existing CSS animation utilities:
  - `AboutSplit`
  - `WhyChooseUs`
  - `MaterialsSection`
  - `QualityAssurance`
  - `InfrastructureSection`
  - `GalleryMasonry`
  - `CompanyVideo`
  - `TestimonialsSection`
  - `NewsSection`
  - `ProcessTimeline`
- Preserved all section copy, images, links, visual hierarchy, hover states, and CTAs.
- Kept genuinely interactive components as client components.
- Added a responsive `sizes` value to `ProductOverview` card images.
- Removed unused code from `ProductOverview` and unused imports from `InfrastructureSection`.
- Centralized repeated header phone/email display through `lib/content/company`.
- Replaced generated footer slug links with explicit route links to avoid broken paths.
- Expanded `next/image` allowed qualities to `[75, 80, 85, 90]` so non-hero images can use optimized defaults while preserving hero quality.
- Fixed contact API field normalization so the production build passes TypeScript checks after validation.
- Restored missing installed dependencies from `package-lock.json`.

## 3. Images Optimized

No image files were recompressed or deleted in this pass. The image audit identified large candidates for a future asset optimization batch:

| Image | Current Size | Notes |
| --- | ---: | --- |
| `public/images/manufacturing/modern-factory-floor-overview.png` | 2351.7 KB | Used in homepage/company-style facility sections |
| `public/images/quality/precision-quality-inspection.png` | 1923.4 KB | Used in quality/infrastructure sections |
| `public/images/hero/cnc-turning-hero.png` | 1550.5 KB | Critical homepage/CTA image; optimize carefully |
| `public/images/logos/pako-engineers-logo.png` | 1107.3 KB | Candidate for dimensions/format review |
| `public/images/products/pump-shafts-and-sleeves.png` | 1010.6 KB | Product image candidate |

## 4. Code Optimization

- Reduced unnecessary client-side JavaScript by removing Framer Motion from static homepage sections.
- Continued to use server components for non-interactive content.
- Reduced repeated hardcoded contact values in the header.
- Improved footer route correctness without removing navigation items.
- Build output now reports homepage route size at `3 kB`, with `171 kB` first load JS and `102 kB` shared first load JS.

## 5. Routes Verified

Production build generated 52 pages/routes. Local production server smoke tests returned `200 OK` for:

- `/`
- `/products`
- `/request-quote`
- `/contact`

Build route inventory includes:

- `/about`
- `/capabilities`
- `/careers`
- `/certifications`
- `/clients`
- `/company`
- `/company-profile`
- `/csr`
- `/export-markets`
- `/faq`
- `/gallery`
- `/industries`
- `/industries-served`
- `/infrastructure`
- `/machines`
- `/manufacturing`
- `/manufacturing-facility`
- `/materials`
- `/our-story`
- `/products/[slug]`
- `/products/category/[slug]`
- `/projects`
- `/projects/[slug]`
- `/quality`
- `/request-quote`
- `/search`
- `/services`
- `/terms`
- `/videos`

## 6. Content Verification

No website content, data files, route files, public images, documents, product entries, project entries, forms, or SEO route handlers were deleted. Changes were limited to rendering strategy, route correctness, image configuration, dependency restoration, and build safety.

## 7. Build Verification

| Check | Result |
| --- | --- |
| `npm.cmd install` | Passed after approval; restored `nodemailer` and `@types/nodemailer` from lockfile |
| `npm.cmd run lint` | Passed with no ESLint warnings or errors |
| `npm.cmd run build` | Passed; generated 52 static/dynamic routes |
| `npm.cmd run test:unit` | No test files found; runner exited with code 0 |
| `npm.cmd run start` | Started and served smoke-tested routes with `200 OK` |

## 8. Final Performance

Measured build output after optimization:

| Route | Size | First Load JS |
| --- | ---: | ---: |
| `/` | 3 kB | 171 kB |
| `/products` | 193 B | 161 kB |
| `/contact` | 27.1 kB | 184 kB |
| `/request-quote` | 5.47 kB | 162 kB |
| Shared by all | 102 kB | 102 kB |

Remaining recommended work:

- Run Lighthouse in Chrome for mobile/desktop Core Web Vitals once a browser environment is available.
- Recompress oversized PNG/JPG assets into AVIF/WebP variants after visual review.
- Run a full internal link crawler across all built routes.
- Review the 8 high-severity npm audit advisories deliberately instead of applying broad automated fixes.
- Consider migrating from deprecated `next lint` to the ESLint CLI before Next.js 16.
