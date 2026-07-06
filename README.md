# Pako Engineers Website

Corporate website for Pako Engineers, built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- Framer Motion and GSAP
- React Hook Form and Zod

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

Run these checks before deployment:

```bash
npm run typecheck
npm run build
```

## Vercel Deployment

This repo is ready for Vercel using the included `package-lock.json`.

1. Push the repo to GitHub.
2. In Vercel, choose **Add New Project** and import the GitHub repository.
3. Keep the framework preset as **Next.js**.
4. Use the default install and build commands:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave blank for Next.js
5. Deploy.

The project pins Node with `engines.node: "24.x"`. Vercel supports Node 24.x and will use it for deployments.
