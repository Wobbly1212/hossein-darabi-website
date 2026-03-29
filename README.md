# Hossein Darabi — Personal Website

Personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, Framer Motion
- **Language:** TypeScript
- **Email:** Resend (contact form delivery)
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build && npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.example` to `.env.local` and add your API keys:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | No | Enables email delivery for the contact form. Without it, submissions are logged to console. |

## Project Structure

```
src/
├── app/              # Pages and API routes
├── components/       # Reusable UI components
├── data/             # Project data
├── hooks/            # Custom React hooks
├── lib/              # Config and utilities
└── middleware.ts     # Security headers
```

## Deployment

1. Connect the GitHub repo to Vercel
2. Add `RESEND_API_KEY` as an environment variable
3. Deploy — Vercel auto-detects Next.js

## License

All rights reserved.
