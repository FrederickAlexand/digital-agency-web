# Meridian Digital — B2B Software House Agency Website

A professional, high-converting B2B software house agency website built with Next.js (App Router), Tailwind CSS, Framer Motion, and Lucide React. Designed for trust, executive-level professionalism, and advisory-led positioning.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (subtle fade-ins & slide-ups)
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — Hero, trust banner, advisory process, services |
| `/portfolio` | Case studies grid + detailed write-ups |
| `/about` | Co-founders & company philosophy |
| `/contact` | Contact form + info (API route placeholder) |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API (Resend/Nodemailer placeholder)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── portfolio/page.tsx
│   ├── layout.tsx             # Root layout with Header & Footer
│   ├── page.tsx               # Home page
│   └── globals.css            # Design tokens & Tailwind
├── components/
│   ├── contact/ContactForm.tsx
│   ├── home/                  # Hero, Services, TrustBanner, etc.
│   ├── layout/Header.tsx, Footer.tsx
│   ├── portfolio/CaseStudyCard.tsx
│   └── ui/                    # Button, FadeIn, SectionHeading
└── lib/
    ├── constants.ts
    └── case-studies.ts
public/
└── images/                    # Case study mockup SVGs
```

## Contact Form Email Integration

The API route at `src/app/api/contact/route.ts` currently logs submissions to the console. To enable email delivery:

### Option 1: Resend (recommended for Vercel)

```bash
npm install resend
```

Add to `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=hello@meridiandigital.com
```

### Option 2: Nodemailer (SMTP)

```bash
npm install nodemailer
```

Configure SMTP credentials in `.env.local`.

## Deploy to Vercel

1. Push the project to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables if using email integration
4. Deploy

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0f172a` | Primary backgrounds, headings |
| White | `#ffffff` | Content backgrounds |
| CTA Blue | `#1e3a5f` | Primary buttons |
| CTA Gold | `#c9a227` | Accents, secondary CTAs |
| Slate Muted | `#64748b` | Secondary text |
| Font | Inter | Body & headings |

## License

Private — All rights reserved.
