# My Personal Website — Documentation

This is the codebase for my personal portfolio website. I built it to present myself as a data scientist and developer, attract job opportunities, and make it easy for people to contact me.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | Framework (App Router, SSG, API routes) |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.36.x | Animations and transitions |
| @paper-design/shaders-react | 0.0.72 | MeshGradient WebGL animated background |
| Resend | — | Contact form email delivery |
| Lucide React | 0.577.x | Icon library |

---

## How to Run

```bash
# Development
npm run dev
# opens at http://localhost:3000

# Production build
npm run build

# Serve production build
npm start
```

---

## File Structure

```
hossein-darabi-website/
├── public/
│   └── images/
│       ├── 3.jpeg                         # My profile photo
│       ├── 1.jpeg                        # B.Sc. graduation photo
│       └── 2.jpeg                        # Apple Developer Academy graduation
├── src/
│   ├── app/
│   │   ├── globals.css                   # Design system, CSS variables, card styles
│   │   ├── layout.tsx                    # Root layout — fonts, navbar, footer, error boundary
│   │   ├── page.tsx                      # Homepage — assembles 5 section components
│   │   ├── not-found.tsx                 # Custom 404 page
│   │   ├── robots.ts                     # Auto-generated robots.txt
│   │   ├── sitemap.ts                    # Auto-generated sitemap.xml
│   │   ├── fonts/                        # Self-hosted Instrument Serif font files
│   │   ├── about/page.tsx                # About page — photo, bio, experience, skills, education
│   │   ├── projects/
│   │   │   ├── page.tsx                  # All 5 projects in a grid
│   │   │   └── [slug]/page.tsx           # Individual project detail (statically generated)
│   │   ├── contact/page.tsx              # Contact page — form + sidebar info
│   │   └── api/contact/route.ts          # API — handles form submissions via Resend
│   ├── components/
│   │   ├── layout/
│   │   │   ├── NavbarWrapper.tsx         # Client wrapper for the tubelight navbar
│   │   │   └── Footer.tsx               # Site footer with social links
│   │   ├── home/
│   │   │   ├── Hero.tsx                  # Hero — name, photo, CTAs
│   │   │   ├── Capabilities.tsx          # "What I Do" — 4 capability rows
│   │   │   ├── FeaturedProjects.tsx      # "Selected Work" — 3D tilt project cards
│   │   │   ├── CredibilityBar.tsx        # "At a Glance" credentials strip
│   │   │   └── ContactCTA.tsx            # Bottom CTA section
│   │   ├── contact/
│   │   │   └── ContactForm.tsx           # Form with validation, honeypot, floating labels
│   │   └── ui/
│   │       ├── TubelightNavbar.tsx        # Floating pill navbar with lamp glow effect
│   │       ├── AmbientBackground.tsx      # MeshGradient WebGL shader background
│   │       ├── AnimatedSection.tsx        # Scroll-triggered fade-in wrapper
│   │       ├── SectionHeading.tsx         # Reusable section title
│   │       └── ErrorBoundary.tsx          # React error boundary with recovery UI
│   ├── hooks/
│   │   └── useIsMobile.ts                # Shared mobile detection hook with debounce
│   ├── data/
│   │   └── projects.ts                   # All project data — single source of truth
│   ├── lib/
│   │   ├── config.ts                     # Site config — email, social URLs, metadata
│   │   └── utils.ts                      # cn() utility (clsx + tailwind-merge)
│   └── middleware.ts                     # Security headers (CSP, HSTS, X-Frame-Options)
├── .env.example                          # Required env vars for deployment
├── package.json
├── tsconfig.json
├── next.config.ts
└── DOCUMENTATION.md
```

---

## Design System

### Fonts

All fonts are self-hosted via `next/font` — no render-blocking external requests.

| Font | Role | Usage |
|------|------|-------|
| Instrument Serif | Display / headings | Hero name, section titles, CTA heading |
| Poppins (300–700) | Body text | All body copy, nav labels, buttons, forms |
| JetBrains Mono (400–500) | Monospace accents | Numbers, dates, status labels |

### Color Palette (Blue Theme)

| Name | HSL Value | Usage |
|------|-----------|-------|
| Smoky Black | hsl(220, 15%, 5%) | Page background |
| Eerie Black 1 | hsl(220, 12%, 11%) | Card fills |
| Eerie Black 2 | hsl(220, 12%, 9%) | Footer background |
| Onyx | hsl(220, 10%, 15%) | Elevated surfaces |
| Jet | hsl(220, 8%, 20%) | Borders |
| Light Gray | hsl(220, 10%, 82%) | Body text |
| White 1 | hsl(0, 0%, 100%) | Headings |
| Accent | hsl(215, 90%, 60%) | Primary accent — CTAs, active states |
| Accent Light | hsl(215, 85%, 70%) | Hover states, highlights |

### Background

I use a MeshGradient WebGL shader from `@paper-design/shaders-react` as the ambient background. It uses deep navy colors and animates slowly. A dark veil overlay (`bg-black/40`) sits on top for text readability.

The shader pauses when the browser tab is hidden (saves GPU/battery) and also pauses when the user has `prefers-reduced-motion` enabled.

---

## Pages

### Homepage (`/`)

Assembles 5 sections: `Hero → Capabilities → FeaturedProjects → CredibilityBar → ContactCTA`.

**Hero:** My name, "Data Scientist & Developer" title, availability badge, description, CTA buttons. My photo shows on desktop (hidden on mobile) with a blue glow halo behind it.

**Capabilities ("What I Do"):** 4 rows — ML & Predictive Modeling, Custom Solution Design, Data Analytics, Digital Products & Development. Each row shifts right on hover with a blue left-edge accent.

**Featured Projects:** 3 project cards with 3D tilt effect on hover. First project spans full width, next two in a 2-column grid. Each card links to its detail page; GitHub icon opens the repo in a new tab.

**Credibility Bar ("At a Glance"):** Compact strip showing Lead Data Scientist, M.Sc. Data Science (Ongoing), Apple Developer Academy (Graduate), 7+ Years Math & Data Education.

**Contact CTA:** "Have a project in mind?" heading with Get in Touch button and email link.

### About (`/about`)

My profile photo, bio paragraphs, experience timeline, graduation photos (B.Sc. and Apple Academy in card frames), technical toolkit grid, and education section.

### Projects (`/projects`)

Grid of all 5 projects with cover gradients, categories, and tech tags.

### Project Detail (`/projects/[slug]`)

Statically generated pages for each project with overview, problem statement, approach, technical details, outcomes, and a GitHub "View Code" button.

### Contact (`/contact`)

Contact form (left) with floating labels and validation + info sidebar (right) with my email, GitHub, LinkedIn, and a "What I can help with" list.

---

## My Projects

| # | Title | Category | Featured |
|---|-------|----------|----------|
| 1 | Novelties — Mindfulness iOS App | iOS Development | Yes |
| 2 | CNN Skin Cancer Classifier | Deep Learning | Yes |
| 3 | Twitter Sentiment Analysis at Scale | Big Data & NLP | Yes |
| 4 | Ficto — Creative Writing iOS App | iOS Development | No |
| 5 | E-Commerce Database Architecture | Database Design | No |

All projects link to my real GitHub repos.

---

## Contact Form API

**Endpoint:** `POST /api/contact`

**Protection:**
- Rate limiting (3 requests per IP per minute)
- Honeypot field for spam bots
- Server-side validation (name ≤200 chars, email regex, message ≤5000 chars)
- Content-Type check

**Email delivery:** Uses Resend when `RESEND_API_KEY` is set. Falls back to console.log without it.

---

## Navigation

I use a floating pill-style "tubelight" navbar. On desktop it sits at the top with text labels. On mobile it moves to the bottom with icons only. The active tab has an animated blue lamp glow effect.

---

## Accessibility & Performance

- **prefers-reduced-motion:** All CSS animations are disabled. WebGL shader pauses.
- **Error boundary:** Wraps the entire app with a recovery UI.
- **Security headers:** CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy via middleware.
- **Self-hosted fonts:** No render-blocking external requests.
- **WebGL tab visibility:** Shader pauses when the tab is hidden.
- **iOS Safari support:** viewport-fit=cover, theme-color, safe-area-inset padding, 100dvh.

---

## Deployment

The site is deployed on Vercel. To set up:

1. Connect the GitHub repo to Vercel
2. Add `RESEND_API_KEY` as an environment variable (get one at resend.com)
3. Vercel auto-detects Next.js — no other config needed
4. robots.txt and sitemap.xml are auto-generated

---

## Config

All hardcoded values (email, social URLs, site URL) live in `src/lib/config.ts`. Update that one file to change them everywhere.
