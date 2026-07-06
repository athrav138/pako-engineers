# Enterprise UX & Accessibility Guidelines

This document serves as the absolute source of truth for all user experience, responsive design, and accessibility decisions for the Pako Engineers Enterprise Platform.

## 1. Responsive Philosophy
*   **Mobile-First Approach**: Design scales up gracefully; never simply shrink desktop interfaces.
*   **Grid System**: 
    *   Desktop/Laptop (1024px+): 12 Columns
    *   Tablet (768px+): 8 Columns
    *   Mobile (<768px): 4 Columns
*   **Constraints**: Max-width is strictly capped at `1440px`. No horizontal scrolling permitted.

## 2. WCAG 2.2 AA Accessibility Standards
All components must adhere strictly to these accessibility guidelines:
*   **Keyboard Navigation**: Tab, Shift+Tab, Enter, Escape, Arrow Keys must function correctly. Focus traps must be utilized in Modals/Dialogs.
*   **Focus Indicators**: Interactive elements must have a visible `focus-visible:ring-2` state.
*   **Screen Readers**: Utilize `aria-label`, `aria-describedby`, and `aria-live` for dynamic content.
*   **Color Contrast**: Text requires a minimum contrast of `4.5:1` (or `3:1` for large text).
*   **Skip to Content**: Implemented at the `layout.tsx` level to bypass the header for keyboard users.

## 3. Performance & Theme UX
*   **Reduced Motion**: Respect `prefers-reduced-motion` at the global CSS level. Heavy GSAP/Framer animations must degrade gracefully to simple fades or immediate states.
*   **Loading States**: All interactive buttons, forms, and data tables must utilize skeleton loaders or progress indicators (`Loader2` spinner).
*   **Dark Mode Support**: Pure black is banned. Use deep navy/slate backgrounds (`#051124`, `#0A192F`) to reduce eye strain while maintaining premium industrial aesthetics.

## 4. Testing Matrix Checklist
Before shipping any component or page, it must pass:
- [ ] Desktop, Tablet (Portrait/Landscape), Mobile verification.
- [ ] Keyboard-only navigation audit.
- [ ] VoiceOver/NVDA screen reader audit.
- [ ] Dark Mode / Light Mode contrast checks.
- [ ] Performance check (no layout shifts, instant feedback on UI interaction).
