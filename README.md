# Surhires — Modern Recruitment & Talent Platform

A production-quality marketing website for **Surhires**, built as part of the frontend internship selection assignment for **Meru Technosoft Private Limited**.

Surhires connects ambitious companies with exceptional people. This project demonstrates high-caliber frontend engineering, accessible UI/UX architecture, responsive design across mobile and desktop devices, and modern Next.js 16 conventions.

---

## 📌 Project Overview & Brand Identity

- **Brand Name**: Surhires
- **Industry**: Recruitment SaaS & Talent Marketplace
- **Brand Positioning**: Surhires helps companies hire exceptional talent faster while helping professionals discover meaningful career opportunities.
- **Brand Personality**: Professional, Trustworthy, Energetic, Modern, and Human-centered.
- **Visual Direction**: Clean whitespace, confident typography, sophisticated layouts, and a distinctive teal accent paired with deep navy neutrals.

> **Clarification Notice**:
> This is a **frontend-only project**. No backend, database, or external authentication services are required or connected. All form submissions (Job Applications and Employer Postings) utilize client-side validation and interactive simulated success states. Pricing tiers, customer metrics, and testimonials are illustrative assignment content.

---

## 📸 Screenshots

| Homepage & Custom Pipeline Dashboard Mockup | Jobs Directory with Live Filtering |
|:---:|:---:|
| ![Homepage Top](/screenshots/homepage.png) | ![Jobs Listing](/screenshots/jobs.png) |

| Interactive Candidate Application Modal | Employer Pricing & Comparison Table |
|:---:|:---:|
| ![Application Modal](/screenshots/application_modal.png) | ![Employers Page](/screenshots/employers.png) |

| Post a Job Employer Form Submission Success |
|:---:|
| ![Job Posting Success](/screenshots/job_success.png) |

---

## 🚀 Key Features

### 1. Global Navigation & Layout
- **Sticky Glassmorphic Navbar**: Backdrop blur (`backdrop-filter: blur(12px)`), active route indicators, and clear CTA hierarchy.
- **Accessible Mobile Drawer**: Built with keyboard navigation, focus management, `Escape` key listeners, and background scroll locking.
- **Comprehensive Footer**: Dynamic copyright year, semantic categorization, and social links.
- **Skip to Main Content Link**: First focusable item for screen-reader and keyboard users (WCAG 2.1 AA).

### 2. Homepage (`/`)
- **Hero Value Proposition**: Bold headline with styled teal gradient accent and key hiring metrics (2,400+ Curated Roles, 94% Match Alignment, 12 Days Avg. Time to Hire).
- **Interactive Recruitment Dashboard Mockup**: Pure HTML/CSS/React dashboard representation showing live candidate pipeline stages, match percentage indicators (98% match), interview schedules, and application status badges.
- **Trusted Organizations**: Illustrative monochrome wordmark strip representing modern engineering teams.
- **Methodology (How It Works)**: 3-step structured progression (01 Discover Talent, 02 Connect Faster, 03 Make Great Hires) with hover elevation.
- **Featured Jobs Grid**: 6 handpicked role cards with live compensation brackets and company badges.
- **Testimonials Section**: 3 realistic user stories clearly attributed as illustrative representations.
- **Accessible FAQ Accordion**: Fully keyboard-navigable (`Enter` / `Space` toggle, ARIA expanded states, unique IDs).
- **Final Call to Action**: High-contrast navy closing section driving job exploration and employer onboarding.

### 3. Job Directory & Filter Engine (`/jobs`)
- **Instant Keyword Search**: Multi-field search querying job title, company name, department, description, and required skill sets.
- **Combined Filtering**: Simultaneous filtering by Location (Bengaluru, Remote, Pune, Hyderabad, etc.), Job Type (Full-time, Part-time, Contract, Internship, Remote), and Experience Level (Entry, Mid, Senior, Lead).
- **Active Filter Badges**: Visual chips reflecting applied criteria with one-click individual dismissal and a master "Clear all filters" trigger.
- **Job Bookmarking**: One-click "Save Job" interaction persisted to `localStorage` with React 19 `useSyncExternalStore` for zero hydration mismatches.
- **Interactive Application Modal**:
  - Full Name, Work Email, Resume URL, and Cover Note fields.
  - Comprehensive client-side validation with inline error messaging.
  - Asynchronous simulated submission state with progress spinner.
  - Success confirmation view with reset capabilities.
- **Empty State**: Friendly zero-results prompt with a one-click filter reset button.

### 4. Employers Hub (`/employers`)
- **Employer Hero & Benefits**: Explains candidate reach, pipeline tracking, workflow coordination, and applicant communication.
- **Transparent Pricing Matrix**:
  - **Starter**: ₹1,999/month (3 active jobs, basic filters).
  - **Growth (Recommended)**: ₹4,999/month (10 active jobs, advanced filters, pipeline stages, interview sync).
  - **Enterprise**: Custom pricing (Unlimited postings, dedicated support, custom integrations).
- **Feature Comparison Table**: Responsive side-by-side feature matrix.
- **Post a Job Requisition Form**:
  - 10 structured fields: Company Name, Recruiter Name, Work Email, Website, Job Title, Location, Employment Type, Salary Range, Required Skills, and Description.
  - Real-time client-side validation, inline error reporting, loading states, and reset options.
- **Employer Operations FAQ**: Targeted answers for hiring managers.

### 5. Custom 404 & SEO Infrastructure
- **Custom 404 Not Found Page**: Seamlessly styled recovery screen with direct links back to open roles and homepage.
- **Metadata API & Open Graph**: Descriptive titles, meta descriptions, OpenGraph headers, and Twitter cards across all routes.
- **Dynamic Sitemap & Robots**: Generated at `/sitemap.xml` and `/robots.txt`.
- **Dynamic Favicon**: Brand-colored SVG/PNG icon generated using `@vercel/og` (`icon.tsx`).

---

## 🎨 Design System & Visual Tokens

### Color Palette
- **Primary Navy**: `#10243A` — Core text, headers, dark backgrounds, high authority.
- **Dark Navy**: `#0A1726` — Deep footer, modal backdrops, high-contrast surfaces.
- **Teal**: `#0F9D91` — Signature brand accent, active tabs, primary actions.
- **Teal Hover**: `#087F75` — Interactive hover states.
- **Teal Subtle**: `#E6F6F5` — Soft badge backgrounds, pill highlights.
- **Warm White**: `#FAFAF7` — Soft natural background, reducing visual fatigue.
- **Light Neutral**: `#F1F5F4` — Surface cards, secondary buttons, input backgrounds.
- **Body Text**: `#526171` — High-readability secondary typography (meets WCAG 4.5:1 ratio).
- **Border Subtle**: `#DCE4E8` — Controlled card borders and section dividers.
- **White**: `#FFFFFF` — Crisp card surfaces and elevated layers.

### Typography
- **Headings**: `Manrope` (weights 500, 600, 700, 800) loaded via `next/font/google`.
- **Body & Controls**: `Inter` (weights 300, 400, 500, 600, 700) loaded via `next/font/google`.
- Both fonts use `display: 'swap'` to guarantee optimal First Contentful Paint.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack, Partial Prerendering) |
| **Language** | TypeScript (Strict mode enabled) |
| **Styling** | Tailwind CSS v4 & Custom CSS variables |
| **UI Icons** | Lucide React |
| **Fonts** | `next/font/google` (Manrope & Inter) |
| **Quality** | ESLint 9 + TypeScript Compiler (`tsc --noEmit`) |
| **Audit** | Google Lighthouse (Chromium Headless) |

---

## 📂 Folder Structure

```
surhires-marketing/
├── public/
│   └── screenshots/              # High-resolution screenshots of key views
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global RootLayout with fonts, skip link, nav, footer
│   │   ├── page.tsx              # Homepage assembling all sections
│   │   ├── globals.css           # Design tokens, variables, focus rings, reduced motion
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── icon.tsx              # Dynamic brand favicon generator
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   ├── sitemap.ts            # Dynamic XML sitemap
│   │   ├── jobs/
│   │   │   └── page.tsx          # Jobs listing directory with Suspense boundary
│   │   └── employers/
│   │       └── page.tsx          # Employers marketing, pricing, and job form
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky responsive navigation
│   │   │   ├── Footer.tsx        # Comprehensive footer
│   │   │   └── MobileMenu.tsx    # Mobile drawer with focus trap & Escape handling
│   │   ├── ui/
│   │   │   ├── ApplicationModal.tsx  # Job application modal with validation & success state
│   │   │   ├── Badge.tsx         # Metadata badge component
│   │   │   ├── Button.tsx        # Accessible polymorphic button / Link component
│   │   │   ├── Container.tsx     # Responsive layout container (narrow, default, wide)
│   │   │   ├── FAQAccordion.tsx  # Keyboard-accessible accordion with ARIA attributes
│   │   │   ├── Input.tsx         # Accessible input with labels and error descriptors
│   │   │   ├── JobCard.tsx       # Reusable job card with saved jobs useSyncExternalStore
│   │   │   ├── Logo.tsx          # Custom Surhires brand wordmark and compass glyph
│   │   │   ├── PricingCard.tsx   # Tier card with recommended highlights
│   │   │   ├── SectionHeading.tsx# Section title, eyebrow badge, and description
│   │   │   └── Select.tsx        # Styled accessible select with chevron
│   │   └── sections/
│   │       ├── Hero.tsx          # Hero value prop + live pipeline dashboard mockup
│   │       ├── TrustedCompanies.tsx # Monochrome brand strip
│   │       ├── HowItWorks.tsx    # 3-step recruitment methodology
│   │       ├── FeaturedJobs.tsx  # 6 featured jobs from shared data
│   │       ├── Testimonials.tsx  # Illustrative customer testimonials
│   │       ├── FAQ.tsx           # Home FAQ section
│   │       ├── FinalCTA.tsx      # Navy high-contrast closing CTA
│   │       ├── JobsFilterClient.tsx # Client-side search and multi-facet filtering engine
│   │       ├── EmployerHero.tsx  # Employer value propositions
│   │       ├── EmployerBenefits.tsx # 4 core platform advantages
│   │       ├── PricingSection.tsx# 3 pricing plans & feature comparison table
│   │       ├── PostJobForm.tsx   # 10-field employer job posting form
│   │       └── EmployerFAQ.tsx   # Operational FAQ for recruiters
│   ├── data/
│   │   ├── jobs.ts               # Shared dataset of 12 realistic Indian & remote roles
│   │   ├── testimonials.ts       # Illustrative testimonials dataset
│   │   └── faqs.ts               # Structured FAQs for seekers & employers
│   └── lib/
│       └── utils.ts              # Class merging and formatting helpers
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18.18.0 or newer (tested on Node v24)
- npm 9+ or pnpm / bun

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd surhires-marketing
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Local Preview
```bash
npm run build
npm run start
```
The optimized production build will be served at [http://localhost:3000](http://localhost:3000).

### 4. Linting & Type Checking
```bash
npm run lint
npx tsc --noEmit
```

---

## 🏆 Lighthouse Performance & Accessibility Scores

Tested locally against the production server using headless Chrome Lighthouse:

| Metric | Score | Target | Result |
|---|:---:|:---:|:---:|
| **Performance** | **89** | 85+ | ✅ Pass |
| **Accessibility** | **94** | 90+ | ✅ Pass |
| **Best Practices** | **100** | 90+ | ✅ Pass |
| **SEO** | **100** | 90+ | ✅ Pass |
| **Agentic Browsing** | **100** | — | ✅ Pass |

### Accessibility Highlights
- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>` landmarks.
- **Heading Order**: Strictly one `<h1>` per page, followed by logical `<h2>` and `<h3>` descending order.
- **Color Contrast**: All body text and badges exceed the WCAG AA minimum 4.5:1 contrast requirement.
- **Focus Rings**: Custom `#0F9D91` high-visibility focus outlines with `outline-offset: 2px` on keyboard tabs.
- **Keyboard Usability**: Modals and mobile drawer close on `Escape` key, with scroll locking and focus return.
- **ARIA Standards**: Accordion uses `aria-expanded` and `aria-controls`; inputs use `aria-invalid` and `aria-describedby`.
- **Motion Sensitivity**: Respects `prefers-reduced-motion: reduce` by disabling smooth scrolling and animations.

---

## 🌐 Deployment to Vercel

The application is architected for zero-configuration deployment on **Vercel**:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `surhires-marketing` repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **"Deploy"**.
6. Vercel will run `npm run build` and provision global CDN edge caching.

---

## 📄 Assumptions & Design Decisions

1. **Frontend-Only Architecture**: All data operations (saving jobs, submitting applications, posting requisitions) run purely on the frontend. Saved jobs are synchronized to the browser's `localStorage` using React 19's `useSyncExternalStore`.
2. **Indian & Remote Market Alignment**: Curated compensation brackets (in INR) and locations (Bengaluru, Hyderabad, Gurugram, Pune, Delhi NCR, and Remote India) to align with realistic recruitment practices.
3. **Illustrative Brand Content**: Partner company logos, customer testimonials, and pricing tiers are created as illustrative mockups for this assignment evaluation.
4. **Custom Product Illustration**: Avoided generic stock photography by building an interactive, high-fidelity candidate pipeline dashboard mockup directly in code.

---

## 🔮 Future Enhancements

- Integrate actual Supabase or Next.js Server Actions for persistent database storage.
- Add user authentication via NextAuth / Auth0 for persistent recruiter and candidate dashboards.
- Support candidate resume file uploads with direct cloud storage (AWS S3 or Cloudflare R2).
- Add email notifications via Resend for verified application dispatch.

---

## 👨‍💻 Author & Assignment Information

- **Project**: Surhires Recruitment SaaS Marketing Platform
- **Assignment**: Frontend Internship Selection Assignment — Meru Technosoft Private Limited
- **Status**: Production Ready & Fully Implemented
