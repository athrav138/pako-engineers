# Enterprise Figma Design System Architecture

This document serves as the architectural blueprint for the Pako Engineers Figma Design System. It dictates the structure, governance, and components required to maintain a single source of truth across the public website, admin dashboard, and all future digital products.

## 1. Design File Structure
The official Figma project must be strictly organized into the following pages:
- **00 Cover**: Project title, status, last updated, and key contributors.
- **01 Foundations**: Brand vision, mission, and philosophy.
- **02 Design Tokens**: Global variables for spacing, radiuses, and shadows.
- **03 Colors**: Comprehensive palette (Primary, Secondary, Neutral, Status) with states.
- **04 Typography**: Scale, line heights, and responsive behaviors.
- **05 Grid System**: 4, 8, and 12-column layouts.
- **06 Icons**: Centralized Lucide icon library.
- **07 Components**: Master components using Atomic Design principles.
- **08 Templates**: Reusable page structures.
- **09 Marketing Pages**: Public website designs.
- **10 Dashboard**: Admin and internal tool designs.
- **11 CMS**: Content management interfaces.
- **12 Mobile / 13 Tablet / 14 Desktop**: Responsive breakpoints.
- **15 Dark Mode**: Inverted themes.
- **16 Prototype**: Interactive flows and animations.
- **17 Documentation**: Developer handoff notes.
- **18 Assets**: Approved photography and illustrations.

## 2. Figma Component Governance
*   **Auto Layout**: EVERY frame must use Auto Layout. Absolute positioning is strictly prohibited unless used for intentional overlay effects (e.g., tooltips, floating badges).
*   **Variants**: All interactive components (Buttons, Inputs, Cards) must include states: `Default`, `Hover`, `Active/Pressed`, `Focused`, `Disabled`, `Loading`, `Error`.
*   **No Detaching**: Designers must never detach instances. If a component is insufficient, the master component must be updated and versioned.

## 3. Responsive Frames
Designs must be stress-tested across these exact frames:
- **Desktop**: 1920, 1600, 1440
- **Laptop**: 1366, 1280
- **Tablet**: 1024, 768
- **Mobile**: 430, 414, 390, 375, 320

## 4. Image Style Guide
Photography must communicate premium industrial manufacturing:
- **Tone**: Cool, engineering precision (Blue/Steel tones).
- **Lighting**: Dramatic industrial lighting, highlighting metallic textures.
- **Subjects**: CNC Machines, finished shafts/impellers, quality inspection tools (micrometers, CMMs), and engineers in clean safety gear.
- **Quality**: High resolution, real photography only. No generic, low-effort stock photos.

## 5. Developer Handoff Requirements
Every component handed off to engineering must document:
1. Component Name & Purpose
2. Available Properties/Variants
3. Accessibility Notes (ARIA, Focus states)
4. Animation Triggers (Durations, Easings)
5. Responsive Behavior (Fill, Hug, fixed widths)
