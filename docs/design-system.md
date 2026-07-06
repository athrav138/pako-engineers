# PAKO ENGINEERS - Enterprise Design System

This document provides a comprehensive overview of the Enterprise Design System implemented for PAKO Engineers. The system ensures a premium, world-class corporate brand identity that is scalable, reusable, and maintainable. It acts as the single source of truth for the entire application across all platforms (web, admin dashboards, mobile).

---

## 1. Colors
Our system leverages a robust set of design tokens to maintain visual consistency across the entire application reflecting industrial precision and luxury. Every color uses hover, active, pressed, disabled and dark-mode states.

- **Primary:** Deep Navy (`#0A2342`) - Used for primary actions, critical headers.
- **Secondary:** Steel Blue (`#2E5B88`) - Supporting elements, secondary buttons.
- **Accent:** Industrial Orange (`#FF6B00`) - Call to actions, accents, active states.
- **Semantic Colors:**
  - Success (`#16A34A`)
  - Warning (`#F59E0B`)
  - Danger (`#DC2626`)
  - Info (`#0EA5E9`)
- **Surface & Backgrounds:**
  - Light mode: White (`#FFFFFF`), Surface (`#F8FAFC`)
  - Dark mode: Dark Background (`#0F172A`), Dark Surface (`#1E293B`)
- **Gradients:** Use `.text-gradient`, `.text-gradient-accent`, `.hero-gradient` utility classes defined in globals.css.

---

## 2. Typography
Responsive and scalable typography using fluid clamps for perfect rendering across all devices. We use clamp() scaling to never rely on fixed font sizes on responsive interfaces.
- **Headings:** Manrope
- **Body:** Inter
- **Numbers/Tech:** Space Grotesk
- **Code:** JetBrains Mono

**Type Scale:**
- `display-xl`: clamp(3rem, 5vw + 1rem, 4.5rem)
- `display-lg`: clamp(2.5rem, 4vw + 1rem, 3.75rem)
- `h1`: clamp(2rem, 3vw + 1rem, 3rem)
- `h2`: clamp(1.75rem, 2.5vw + 1rem, 2.5rem)
- `h3`: clamp(1.5rem, 2vw + 1rem, 2rem)
- `body-xl` (1.25rem), `body-lg` (1.125rem), `body` (1rem)
- `label`, `overline`, `caption`, `small`

---

## 3. Spacing
Based on an 8px modular scale to ensure rhythmic and proportionate layouts. Never use random spacing.
- Tokens: `2` (8px), `4` (16px), `6` (24px), `8` (32px), `10` (40px), `12` (48px), `16` (64px), `24` (96px), `30` (120px), `40` (160px).

---

## 4. Grids
We utilize a responsive grid system adapted for different devices:
- **Desktop:** 12 Columns
- **Laptop:** 12 Columns
- **Tablet:** 8 Columns
- **Mobile:** 4 Columns
- **Container Max Width:** `1440px`

---

## 5. Shadows
Structured depth across interfaces without overusing drop shadows.
- `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- `shadow-glass`: Floating glassmorphism shadow
- `shadow-floating`: High-depth floating objects
- `shadow-hover`: Animated interactive states for cards/buttons.

---

## 6. Buttons
Buttons come in various predefined sizes and variants reflecting our professional look.
- **Variants:** Primary, Secondary, Outline, Ghost, Text, Icon Button, FAB.
- **Sizes:** Small, Medium, Large, Extra Large.
- **States:** Hover, Pressed, Focus, Loading, Disabled.

---

## 7. Cards
Designed for multiple contexts. Include subtle hover animations (`hover:-translate-y-1 hover:shadow-hover transition-all`).
- Types: Information Card, Product Card, Feature Card, Gallery Card, Machine Card, Material Card, Blog Card, Client Card, Testimonial Card, Pricing Card, Glass Card.

---

## 8. Forms
Form inputs must have a unified premium look.
- Support: Text, Email, Password, Search, Phone, Textarea, Select, Autocomplete, File Upload, Checkbox, Radio, Toggle.
- Validation states: Success, Warning, Error.
- Distinct focus rings using `--ring` color variable.

---

## 9. Icons
- Only use **Lucide React**.
- Ensure professional tone, consistent stroke widths (usually 1.5px or 2px), and appropriate scaling. 
- Never use emojis in corporate layouts.

---

## 10. Animations
Premium micro-interactions and transitions defining brand personality.
- Speed tokens: `fast` (150ms), `medium` (300ms), `slow` (500ms).
- Easing functions: `ease-out`, `ease-in`, `spring`, `bounce`.
- Custom keyframes: `fade-in`, `fade-up`, `fade-down`, `zoom-in`.

---

## 11. Themes
The system fully supports dynamic themes:
- Light Mode
- Dark Mode
- System Mode
- Future company themes (through extending CSS variables).

---

## 12. Accessibility (a11y)
- **Contrast:** Strictly follows WCAG AA.
- **Keyboard & Focus:** Prominent focus rings using `focus-visible`.
- **Reduced Motion:** Integrated in `globals.css` with `@media (prefers-reduced-motion: reduce)`.
- **ARIA & Semantics:** Accessible landmarks and semantic HTML must be utilized inside components.

---

## 13. Best Practices
1. **Never hardcode values:** Always use `theme('...')` in custom CSS or Tailwind utility classes.
2. **Glassmorphism:** Apply `.glass` and `.glass-dark` utilities for a transparent blur effect.
3. **Illustrations:** Use industrial, technical, minimal blueprint styles. Avoid cartoons.
4. **Photography:** High-resolution real factory images with an industrial blue-tone lighting. Never use stock-looking generic images.
5. **Z-Index System:** 
   - Header (50), Dropdown (100), Modal (200), Drawer (300), Tooltip (400), Toast (500), Loading (600), Cursor (9999).
