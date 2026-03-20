# Hossein Darabi — Website Documentation

## Project Overview

Professional personal website and portfolio for Hossein Darabi, a data scientist and AI builder. The site targets businesses, startup founders, recruiters, and technical collaborators. It is designed to feel credible, premium, and business-facing — not like a student portfolio.

The site is fully functional, runs locally, and is ready for deployment.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | Framework (App Router, SSG, API routes) |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.36.x | Animations and transitions |
| Lucide React | 0.577.x | Icon library (tree-shakeable SVG icons) |
| Node.js | 25.8.1 | Runtime (installed via Homebrew) |

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

# Lint
npm run lint
```

Note: Node.js is installed at `/opt/homebrew/opt/node/bin/node`. If `npm` is not in your PATH, use `/opt/homebrew/opt/node/bin/npm` instead.

---

## Complete File Tree

```
hossein-darabi-website/
├── public/
│   ├── images/
│   │   └── hossein.png              # Professional portrait photo
│   ├── favicon.ico
│   ├── file.svg                     # Default Next.js assets (unused)
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── globals.css              # Global styles, design tokens, CSS variables
│   │   ├── layout.tsx               # Root layout — wraps all pages with Navbar + Footer
│   │   ├── page.tsx                 # Homepage — assembles 5 section components
│   │   ├── not-found.tsx            # Custom 404 page
│   │   ├── about/
│   │   │   └── page.tsx             # About page — photo, bio, experience, skills, education
│   │   ├── projects/
│   │   │   ├── page.tsx             # Projects listing page — grid of all projects
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Individual project detail page (statically generated)
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact page — form + sidebar info
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts         # API endpoint — handles contact form submissions
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Fixed top navigation bar
│   │   │   └── Footer.tsx           # Site footer
│   │   ├── home/
│   │   │   ├── Hero.tsx             # Hero section — name, photo, CTAs
│   │   │   ├── Capabilities.tsx     # "What I Do" section — 4 capability rows
│   │   │   ├── FeaturedProjects.tsx  # "Selected Work" section — project cards with 3D tilt
│   │   │   ├── CredibilityBar.tsx   # Trust credentials strip
│   │   │   └── ContactCTA.tsx       # Bottom call-to-action section
│   │   ├── contact/
│   │   │   └── ContactForm.tsx      # Contact form with validation and state management
│   │   ├── projects/               # (empty — reserved for future project components)
│   │   └── ui/
│   │       ├── AnimatedSection.tsx  # Scroll-triggered fade-in animation wrapper
│   │       └── SectionHeading.tsx   # Reusable section title component
│   └── data/
│       └── projects.ts             # All project data — single source of truth
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── DOCUMENTATION.md                # This file
```

---

## Design System

### Fonts

Three fonts are loaded from Google Fonts:

| Font | Role | Usage |
|------|------|-------|
| Instrument Serif | Display / headings | Hero name, section titles ("What I Do", "Selected Work", etc.), CTA heading, 404 page. Applied via `font-display` CSS class. |
| Poppins (300–700) | Body text | All body copy, navigation labels, buttons, descriptions, form fields. Set as the default `font-family` on `<body>`. |
| JetBrains Mono (400–500) | Monospace accents | Navigation numbers (01, 02, 03), timeline dates, project numbering, status labels. Used at small sizes (10–11px). |

### Color Palette

All colors are defined as CSS custom properties in `globals.css` `:root` and registered with Tailwind via `@theme inline`.

| Name | CSS Variable | HSL Value | Tailwind Class | Usage |
|------|-------------|-----------|---------------|-------|
| Smoky Black | `--smoky-black` | hsl(0, 0%, 7%) | `bg-smoky-black` | Page background, navbar |
| Eerie Black 1 | `--eerie-black-1` | hsl(240, 2%, 13%) | `bg-eerie-black-1` | Card fills, input backgrounds |
| Eerie Black 2 | `--eerie-black-2` | hsl(240, 2%, 12%) | `bg-eerie-black-2` | Footer background |
| Onyx | `--onyx` | hsl(240, 1%, 17%) | `bg-onyx` | Subtle elevated surfaces, tag backgrounds |
| Jet | `--jet` | hsl(0, 0%, 22%) | `border-jet` | Borders, dividers |
| Light Gray | `--light-gray` | hsl(0, 0%, 84%) | `text-light-gray` | Primary body text |
| White 1 | `--white-1` | hsl(0, 0%, 100%) | `text-white-1` | Headings, emphasis text |
| Gold | `--orange-yellow-crayola` | hsl(45, 100%, 72%) | `text-gold`, `bg-gold` | Primary accent — CTAs, active states, icons, highlights |
| Vegas Gold | `--vegas-gold` | hsl(45, 54%, 58%) | `text-vegas-gold` | Secondary accent — hover states |

### Gradients

| Name | Usage |
|------|-------|
| `--bg-gradient-onyx` | Card backgrounds (diagonal from light gray to dark) |
| `--text-gradient-yellow` | Gold-to-amber text gradient (`.text-gradient` class) |

### Shadows

| Name | Value | Usage |
|------|-------|-------|
| `--shadow-1` | -4px 8px 24px rgba(0,0,0,0.125) | Default card shadow |
| `--shadow-3` | 0 16px 40px rgba(0,0,0,0.125) | Card hover shadow |

### Card Component

Defined as `.card` in globals.css. Used throughout the site for contained content blocks.

```css
.card {
  background: var(--bg-gradient-onyx);
  border: 1px solid hsl(0, 0%, 25%);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--shadow-1);
  transition: 0.25s ease;
}
.card:hover {
  box-shadow: var(--shadow-3);
}
```

### Section Spacing

Spacing is intentionally varied across homepage sections to create visual rhythm:

| Section | Padding | Reason |
|---------|---------|--------|
| Hero | `min-h-screen` | Full viewport for impact |
| Capabilities | `py-28` | Dense content needs breathing room |
| Projects | `py-20` | Visual cards carry their own weight |
| Credibility Bar | `py-10` | Compact trust signal |
| Contact CTA | `py-32` | Dramatic pause before the ask |

---

## Pages — Detailed Breakdown

### Homepage (`/`)

**File:** `src/app/page.tsx`

Composes 5 imported section components in order:

```tsx
<Hero />
<Capabilities />
<FeaturedProjects />
<CredibilityBar />
<ContactCTA />
```

No logic in this file — it's purely compositional.

---

### Hero Section

**File:** `src/components/home/Hero.tsx`
**Type:** Client component ("use client") — uses Framer Motion animations

**Layout:** Two-column grid on desktop (`md:grid-cols-5`), single column on mobile.

**Left column (3/5 width):**
1. **Availability badge** — Green pulsing dot + "Available for projects" text. Rounded pill shape with border. Animates in from the left.
2. **Name** — "Hossein Darabi" in Instrument Serif, `text-5xl` mobile / `text-7xl` desktop. Line height 1.1 for tight leading.
3. **Title** — "DATA SCIENTIST & AI BUILDER" in gold, uppercase, small, tracked wide.
4. **Description** — One paragraph about what he does. `text-base`, `text-light-gray/70`.
5. **CTA buttons** — "View My Work" (gold border, gold bg/10, arrow icon that moves right on hover) + "Get in Touch" (neutral border).

**Right column (2/5 width, hidden on mobile):**
- Professional photo (`hossein.png`) inside a rounded container
- Gold glow effect behind the photo (absolute positioned blurred gradient)
- Bottom gradient fade (transparent to smoky-black) at the photo's base
- Photo scales in from 0.95 to 1.0 on page load

**Bottom:**
- Scroll indicator with "SCROLL" text and a bouncing gradient line (loops infinitely)

**Animations:** All elements stagger in with 0.1–0.8s delays. Name and description fade up (y: 20→0). Photo scales in. Badge slides from left.

---

### Capabilities Section ("What I Do")

**File:** `src/components/home/Capabilities.tsx`
**Type:** Client component

**Layout:** Vertical list (not a card grid). Each capability is a bordered row.

**4 capabilities:**

| # | Icon | Title | Description | Tech Tags |
|---|------|-------|-------------|-----------|
| 1 | Brain | Machine Learning & Predictive Modeling | Models that forecast, classify, surface patterns | Python, Scikit-learn, TensorFlow, XGBoost |
| 2 | Zap | Real-Time AI & Anomaly Detection | Streaming analytics, concept drift handling | Data Streams, Concept Drift, MOA, Apache Kafka |
| 3 | BarChart3 | Data Analytics & Insights | Dashboards, reports, visualizations | SQL, Pandas, Power BI, Statistical Analysis |
| 4 | Monitor | Custom Digital Solutions | Personalized tools, automations, AI products | Next.js, Python, APIs, Full-Stack |

**Hover behavior:** A gold vertical line (0.5px wide) appears on the left edge of the row, scaling from `scale-y-0` to `scale-y-100`. Icon color intensifies. Title turns gold. Tech tags lighten.

---

### Featured Projects Section ("Selected Work")

**File:** `src/components/home/FeaturedProjects.tsx`
**Type:** Client component

**Layout:** First project is full-width (`md:col-span-2`). Remaining projects are in a 2-column grid below.

**Project card features:**
- Large faded number ("01", "02", "03") positioned in the top-right corner at 7xl size, 3% opacity
- Cover gradient (different color per project) bleeds to card edges
- Role label with mono-font number prefix
- Title turns gold on hover
- Arrow-up-right icon fades in on hover in the top-right corner
- Tags limited to first 4

**3D Tilt Hover Effect:**
Each card tracks mouse position and applies spring-animated `rotateX` / `rotateY` transformations:
- Perspective: 800px
- Rotation range: -4° to +4°
- Spring: stiffness 300, damping 30
- Resets smoothly when mouse leaves

**Data source:** `getFeaturedProjects()` from `src/data/projects.ts`.

---

### Credibility Bar

**File:** `src/components/home/CredibilityBar.tsx`
**Type:** Client component

**Layout:** Contained in a rounded card (`rounded-2xl`) with subtle border and background.

**5 credentials displayed horizontally (flex-wrap on mobile):**

| Icon | Label | Detail |
|------|-------|--------|
| Briefcase | Lead Data Scientist | Real-Time AI Systems |
| GraduationCap | M.Sc. Data Science | Ongoing |
| GraduationCap | B.Sc. Data Analytics | Completed |
| Award | Apple Developer Academy | Graduate |
| BookOpen | 7+ Years | Math & Data Education |

Each item has a small gold-tinted icon container (8x8 rounded square) next to the text.

---

### Contact CTA

**File:** `src/components/home/ContactCTA.tsx`
**Type:** Client component

**Layout:** Centered text block.

**Content:**
- Label: "LET'S WORK TOGETHER" (gold, uppercase, tracked)
- Heading: "Have a project in mind?" (Instrument Serif, `text-4xl md:text-5xl`)
- Description paragraph
- CTA button ("Get in Touch" with animated arrow)
- "or" separator
- Direct email link as fallback (`contact@hosseindarabi.com` — placeholder)

---

### About Page (`/about`)

**File:** `src/app/about/page.tsx`
**Type:** Server component (static)

**Sections:**

1. **Intro with Photo** — 3-column grid. Left: photo with gold glow backdrop. Right (2 cols): "About Me" heading + 3 bio paragraphs.

2. **Experience Timeline** — Vertical timeline with left border. Each entry has:
   - Gold dot on the timeline (fills on hover)
   - Date in JetBrains Mono (`text-[11px]`)
   - Role title, context, description
   - 4 entries: Lead Data Scientist (2024–Present), Apple Developer Academy (2023–2024), Data Analytics Intern (2023), Private Tutor (2017–Present)

3. **Technical Toolkit** — 2-column grid of skill categories:
   - Machine Learning & AI: Scikit-learn, TensorFlow, PyTorch, XGBoost, Deep Learning, NLP
   - Data Science & Analytics: Pandas, NumPy, Statistical Analysis, Data Visualization, Power BI, Jupyter
   - Specialized: Anomaly Detection, Concept Drift, Data Stream Classification, Predictive Modeling, Big Data
   - Engineering & Tools: Python, SQL, R, Git, REST APIs, Next.js, Swift

4. **Education** — Two cards side by side: M.Sc. Data Science (Ongoing), B.Sc. Data Analytics (Completed).

---

### Projects Page (`/projects`)

**File:** `src/app/projects/page.tsx`
**Type:** Server component (static)

Displays all projects from `getAllProjects()` in a responsive grid (`md:grid-cols-2 lg:grid-cols-3`). Each card links to its detail page. Cards have cover gradients, category labels, role, title, summary, and up to 4 tech tags.

---

### Project Detail Page (`/projects/[slug]`)

**File:** `src/app/projects/[slug]/page.tsx`
**Type:** Server component (statically generated via `generateStaticParams`)

**Sections:**
1. Back link to projects list
2. Cover gradient banner (rounded, `h-40`) with category and role
3. Project title (`text-3xl md:text-4xl`, bold)
4. All tech tags
5. Overview paragraph
6. "The Problem" — heading with gold underline + description
7. "The Approach" — heading with gold underline + description
8. "Technical Details" — bulleted list with gold dots
9. "Outcomes" — bulleted list with gold dots
10. CTA card — "Interested in working together?" with link to contact page

**Metadata:** Dynamic title and description generated from project data.

---

### Contact Page (`/contact`)

**File:** `src/app/contact/page.tsx`
**Type:** Server component (static)

**Layout:** 5-column grid. Left 3 columns: contact form. Right 2 columns: info sidebar.

**Sidebar contains:**
- Email link (gold)
- GitHub + LinkedIn buttons (bordered pills with icons)
- "What I can help with" list: Machine learning & AI integration, Data analytics & dashboards, Anomaly detection systems, Custom digital tools & automations, Predictive modeling, Data science consulting

---

### Contact Form

**File:** `src/components/contact/ContactForm.tsx`
**Type:** Client component

**State machine with 4 states:**

| State | UI |
|-------|-----|
| `idle` | Form with name, email, message fields + submit button |
| `sending` | Submit button shows spinning loader + "Sending..." |
| `sent` | Success card with checkmark icon, confirmation message, "Send another" button |
| `error` | Form + red error message below submit button |

**Fields:**
- Name (text, required)
- Email (email, required)
- Message (textarea, 5 rows, required)
- Honeypot (invisible field, positioned off-screen, captured via `useRef`)

**Submission:** POSTs JSON to `/api/contact` including honeypot value. On success, resets form and shows success state.

**Styling:** Dark inputs with `border-jet`, `bg-eerie-black-1`, gold border on focus. Rounded-xl corners.

---

### 404 Page

**File:** `src/app/not-found.tsx`

Large faded "404" in Instrument Serif at 8xl (3% opacity), "Page not found" heading, description, "Back to Home" button.

---

## Navbar

**File:** `src/components/layout/Navbar.tsx`
**Type:** Client component

**Features:**
- **Scroll detection:** Transparent background at top of page. Transitions to `bg-smoky-black/90 backdrop-blur-md` with bottom border after scrolling 20px.
- **Logo:** "H" character in a bordered square (`rounded-lg`, gold text) + "Hossein Darabi" text. Both turn gold on hover.
- **Navigation items:** Three links with mono-font number prefixes:
  - `01` About
  - `02` Projects
  - `03` Contact
- **Active state:** Gold text + full-width gold underline below the link.
- **Hover animation:** Underline grows from `w-0` to `w-full` with 300ms transition.
- **Mobile menu:** Animated hamburger-to-X icon. Dropdown with AnimatePresence (height + opacity). Items stagger in with 50ms delays. Each item has a hover background. Closes on link click.

---

## Footer

**File:** `src/components/layout/Footer.tsx`
**Type:** Server component

Three-column layout:
- Left: "H" logo mark + name + "Data Scientist & AI Builder" tagline
- Center: GitHub, LinkedIn, Mail icons (17px, light gray, turn gold on hover)
- Right: Copyright with dynamic year

---

## Reusable UI Components

### AnimatedSection

**File:** `src/components/ui/AnimatedSection.tsx`

Wrapper that animates its children into view on scroll. Uses Framer Motion's `whileInView`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to animate |
| `className` | string | `""` | Additional CSS classes |
| `delay` | number | `0` | Animation delay in seconds |

**Animation:** opacity 0→1, y 30→0, 0.6s duration, easeOut. Fires once when element is within 50px of viewport.

### SectionHeading

**File:** `src/components/ui/SectionHeading.tsx`

Renders a section title with subtitle and gold underline.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | Main heading text |
| `subtitle` | string | optional | Description text below heading |
| `align` | "left" \| "center" | `"left"` | Text alignment |

**Styling:** Title in Instrument Serif (`font-display`), `text-3xl md:text-4xl`, white. Subtitle in `text-sm md:text-base`, muted gray. Gold underline bar (0.5px height, 8px width, rounded).

---

## Data Layer

### Project Data

**File:** `src/data/projects.ts`

Single source of truth for all project content. Every page that displays project information imports from this file.

**TypeScript interface:**

```typescript
interface Project {
  slug: string;           // URL slug (e.g., "ai-anomaly-detection")
  title: string;          // Project title
  role: string;           // Role held (e.g., "Lead Data Scientist")
  category: string;       // Category label (e.g., "AI & Machine Learning")
  summary: string;        // Short description for cards
  overview: string;       // Full description for detail page
  problem: string;        // Problem statement
  approach: string;       // How the problem was solved
  technical: string[];    // List of technical details
  tags: string[];         // Technology tags
  outcomes: string[];     // Results and outcomes
  featured: boolean;      // Whether to show on homepage
  coverGradient: string;  // Tailwind gradient classes for visual cover
}
```

**Currently defined projects:**

| # | Slug | Title | Role | Cover Color |
|---|------|-------|------|-------------|
| 1 | `ai-anomaly-detection` | Real-Time AI Anomaly Detection System | Lead Data Scientist | Amber/Orange |
| 2 | `predictive-analytics` | Predictive Analytics Pipeline | Data Scientist | Blue/Cyan |
| 3 | `apple-developer-academy` | Apple Developer Academy Project | Developer | Violet/Purple |

All three are marked as `featured: true`.

**Exported functions:**

| Function | Returns | Usage |
|----------|---------|-------|
| `getAllProjects()` | `Project[]` | Projects page grid |
| `getFeaturedProjects()` | `Project[]` (featured only) | Homepage featured section |
| `getProjectBySlug(slug)` | `Project \| undefined` | Project detail page |
| `getAllSlugs()` | `string[]` | Static generation params |

---

## API

### POST `/api/contact`

**File:** `src/app/api/contact/route.ts`

Handles contact form submissions.

**Request body:**

```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "website": "string"   // honeypot field — should be empty
}
```

**Protection layers:**

1. **Rate limiting** — In-memory Map tracking IP addresses. Max 3 requests per IP per 60-second window. Returns 429 if exceeded.
2. **Honeypot** — If `website` field has any value, silently returns 200 success (bot submitted the form).
3. **Validation** — Name must be string under 200 chars. Email must match regex. Message must be string under 5000 chars. Returns 400 if invalid.

**Success response:**
```json
{ "success": true, "message": "Message received. Thank you!" }
```

**Current behavior:** Logs submission to server console. Does NOT send emails or store in a database yet.

---

## Animation System Summary

| Element | Animation | Trigger | Details |
|---------|-----------|---------|---------|
| All sections | Fade up | Scroll into view | opacity 0→1, y 30→0, 0.6s, fires once |
| Hero elements | Staggered entrance | Page load | 0.1–0.8s delays, fade up from y:20 |
| Hero photo | Scale in | Page load | scale 0.95→1, 0.8s |
| Availability badge | Slide from left | Page load | x: -20→0, 0.5s |
| Green dot | Pulse | Always | `animate-ping` on outer ring |
| Scroll indicator line | Bounce | Always | y: [0, 6, 0], 1.5s loop |
| Navbar background | Transparency shift | Scroll > 20px | Transparent → blurred dark bg |
| Nav link underline | Width grow | Hover | w-0 → w-full, 300ms |
| Capability rows | Gold left border | Hover | scale-y 0→1, 300ms |
| Project cards | 3D tilt | Mouse move | rotateX/Y ±4°, spring physics |
| Project card arrow | Fade in | Hover | opacity 0→1 |
| CTA button arrow | Shift right | Hover | translate-x 0→4px |
| Mobile menu | Height expand | Toggle | height 0→auto, opacity, 250ms |
| Mobile menu items | Stagger slide | Menu open | 50ms delay per item |

---

## SEO & Metadata

Each page has its own metadata defined via Next.js `Metadata` export:

| Page | Title | Description |
|------|-------|-------------|
| Homepage | Hossein Darabi — Data Scientist & AI Builder | I build AI-powered solutions and data systems... |
| About | About — Hossein Darabi | Data scientist and AI builder with expertise... |
| Projects | Projects — Hossein Darabi | Selected projects in machine learning... |
| Project Detail | {Project Title} — Hossein Darabi | Project overview text |
| Contact | Contact — Hossein Darabi | Get in touch for collaborations... |

Root layout includes OpenGraph tags and keywords for social sharing.

---

## Build Output

All pages are statically generated at build time except the contact API:

```
○  /                               Static
○  /_not-found                     Static
○  /about                          Static
ƒ  /api/contact                    Dynamic (server-rendered on demand)
○  /contact                        Static
○  /projects                       Static
●  /projects/ai-anomaly-detection  SSG (Static Site Generation)
●  /projects/predictive-analytics  SSG
●  /projects/apple-developer-academy SSG
```

---

## Known TODOs

These are marked with `// TODO` comments in the code:

| File | Issue | Action Needed |
|------|-------|--------------|
| `Footer.tsx` | Placeholder email | Replace `contact@hosseindarabi.com` with real email |
| `contact/page.tsx` | Placeholder email | Replace `contact@hosseindarabi.com` with real email |
| `ContactCTA.tsx` | Placeholder email | Replace `contact@hosseindarabi.com` with real email |
| `Hero.tsx` | Photo reference | Verify photo path is correct |
| `about/page.tsx` | Photo reference | Verify photo path is correct |
| `api/contact/route.ts` | Rate limiter | In-memory rate limiting resets on serverless cold starts. Swap to Upstash Redis or Vercel KV for production. |
| `api/contact/route.ts` | Email delivery | Currently logs to console. Integrate Resend, Nodemailer, or similar for actual email delivery. |

---

## Design References

The visual direction was refined using these sites as benchmarks (for inspiration, not imitation):

| Reference | What Was Borrowed |
|-----------|------------------|
| Brittany Chiang | Numbered navigation, scannable structure, tight hierarchy, professional dark theme |
| Bruno Simon | Custom feel, microinteractions (3D card tilt), memorable first impression |
| Robby Leonardi | Narrative flow between sections, progressive revelation, varied spacing rhythm |
| Keita Yamada | Serif/sans typography contrast, premium whitespace, visual restraint |

---

## Deployment

The site is ready for Vercel deployment:

1. Push the repo to GitHub
2. Connect to Vercel
3. Vercel auto-detects Next.js — no configuration needed
4. Set up email service (Resend recommended) and update the contact API route
5. Replace placeholder email addresses with real ones
6. Optionally add Vercel Analytics or Plausible for traffic tracking
