# Typography & Layout System - Figma Ready Specs

This document defines the strict Layout, Grid, and Typography system designed to ensure PAKO Engineers matches the premium aesthetics of Apple, Stripe, Vercel, and Linear.

## Typography System (Figma Text Styles)

### Type Philosophy
- **Heading Font:** Manrope (Weights: 400, 500, 600, 700, 800)
- **Body Font:** Inter (Weights: 400, 500, 600)
- **Numbers:** Space Grotesk
- **Code:** JetBrains Mono
- **Goal:** Precision, Engineering, Professionalism, Luxury, Innovation. Never cluttered, maximizing readability.

### Type Scale (Figma Styles)
*Responsive behavior is driven via CSS `clamp()` in code, but below are the maximum desktop values for Figma.*

| Style Name   | Font Size | Line Height | Letter Spacing | Weight |
|--------------|-----------|-------------|----------------|--------|
| Display XXL  | 80px      | 110% (1.1)  | -2% (-0.02em)  | Bold (700) |
| Display XL   | 72px      | 110% (1.1)  | -2% (-0.02em)  | Bold (700) |
| Display L    | 64px      | 110% (1.1)  | -2% (-0.02em)  | Bold (700) |
| Heading 1    | 56px      | 120% (1.2)  | -1% (-0.01em)  | Semi (600) |
| Heading 2    | 48px      | 120% (1.2)  | -1% (-0.01em)  | Semi (600) |
| Heading 3    | 40px      | 120% (1.2)  | -1% (-0.01em)  | Semi (600) |
| Heading 4    | 32px      | 120% (1.2)  | -1% (-0.01em)  | Med (500) |
| Heading 5    | 28px      | 120% (1.2)  | 0%             | Med (500) |
| Heading 6    | 24px      | 120% (1.2)  | 0%             | Med (500) |
| Body XL      | 20px      | 160% (1.6)  | 0%             | Reg (400) |
| Body Large   | 18px      | 160% (1.6)  | 0%             | Reg (400) |
| Body         | 16px      | 160% (1.6)  | 0%             | Reg (400) |
| Body Small   | 14px      | 160% (1.6)  | 0%             | Reg (400) |
| Caption      | 12px      | 150% (1.5)  | 0%             | Reg (400) |
| Label        | 14px      | 150% (1.5)  | 4% (0.04em)    | Semi (600), ALL CAPS |
| Button       | 16px      | 150% (1.5)  | 1% (0.01em)    | Med (500) |

**Reading Width constraint:** Max `680px` for any long-form text (paragraphs) to maintain excellent readability.

---

## Layout & Grid System (Figma Auto Layout / Grid Specs)

### Breakpoints
| Device         | Width (px) | Tailwind Prefix |
|----------------|------------|-----------------|
| Small Mobile   | 320px      | `sm-mobile:`    |
| Mobile         | 375px      | `mobile:`       |
| Large Mobile   | 430px      | `lg-mobile:`    |
| Tablet         | 768px      | `tablet:`       |
| Laptop         | 1024px     | `laptop:`       |
| Desktop        | 1280px     | `desktop:`      |
| Wide Desktop   | 1440px     | `wide:`         |
| Ultra Wide     | 1920px     | `ultra:`        |

### Container Layouts
- **Base Container:** Centered, Max Width: 1440px
- **Large Sections:** 1600px
- **Blog:** 1200px
- **Forms:** 720px
- **Dashboard:** Fluid (100% width with margins)

### Grid Structure
- **Desktop (1280px+):** 12 Columns, 24px Gutter
- **Laptop (1024px+):** 12 Columns, 24px Gutter
- **Tablet (768px+):** 8 Columns, 20px Gutter
- **Mobile (<768px):** 4 Columns, 16px Gutter

### Section Spacing (Vertical Paddings)
- **Hero:** 120px
- **Major Sections:** 96px
- **Medium Sections:** 72px
- **Content Blocks:** 48px
- **Cards (Padding):** 32px
- **Buttons (Padding):** 24px
- **Forms (Padding):** 32px
- **Footer:** 80px

---

## Visual Hierarchy & Alignment
- **Architecture:** Hero -> Introduction -> Primary Content -> Secondary Content -> Supporting Info -> Call to Action -> Footer.
- **Alignment:** Strongly prioritize **Left Alignment** matching grid baselines. Never randomly center everything. Center alignment is only permitted in Hero sections, CTA sections, or small isolated widgets.
- **Card Layouts:** Use Equal Heights, Large Padding (32px), Rounded Corners (`lg` or `xl`), Subtle Shadows (`shadow-md`), and a Hover Lift animation (`hover:-translate-y-1 hover:shadow-hover`).

## Accessibility & Mobile Experience
- **Mobile Optimization:** Target areas (Buttons, Links, Checkboxes) must be a minimum of 44x44px. Utilize bottom navigation and sticky CTA patterns where appropriate.
- **Forms:** Labels above inputs. Bold validation states and messages.
- **Motion:** Never animate everything simultaneously. Use sequential Fade Up (`fade-up`), section reveals, and respect OS-level reduced motion settings (configured in `globals.css`).
