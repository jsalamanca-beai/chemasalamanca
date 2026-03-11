# chemasalamanca.me — Personal Website

Personal website of **Chema Salamanca**, CEO & Founder of BEAI Energy. Built with Next.js 16, Tailwind CSS 4, and Framer Motion.

**Live:** [chemasalamanca.me](https://chemasalamanca.me)

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | Next.js 16 (App Router)             |
| Language     | TypeScript 5                        |
| Styling      | Tailwind CSS 4                      |
| Animations   | Framer Motion 12                    |
| Email API    | Resend                              |
| Deployment   | Vercel                              |
| Repository   | GitHub (`jsalamanca-beai/chemasalamanca`) |

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages (EN/ES)
│   │   ├── layout.tsx     # Metadata, SEO, JSON-LD schemas
│   │   └── page.tsx       # Main page (assembles all sections)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts   # Contact form API (Resend + rate limiting)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Root redirect
│   ├── robots.ts          # robots.txt generation
│   ├── sitemap.ts         # sitemap.xml generation
│   └── globals.css        # Global styles & CSS variables
├── components/
│   ├── Header.tsx         # Navigation bar with language switcher
│   ├── Footer.tsx         # Footer with social links
│   ├── ui/
│   │   └── AnimateOnScroll.tsx  # Scroll-triggered animations
│   └── sections/
│       ├── Hero.tsx       # Hero section with stats
│       ├── About.tsx      # Biography and values
│       ├── Expertise.tsx  # Skills and mission
│       ├── Achievements.tsx # Metrics and recognitions
│       ├── Brands.tsx     # Professional track record
│       ├── Services.tsx   # Service offerings
│       └── Contact.tsx    # Contact form + info
├── i18n/
│   ├── config.ts          # Locale configuration (es, en)
│   ├── dictionaries.ts    # Dictionary loader
│   ├── context.tsx        # React context for translations
│   ├── en.ts              # English translations
│   └── es.ts              # Spanish translations
└── middleware.ts           # Locale detection & redirect
```

---

## Internationalization (i18n)

The site supports **Spanish** (default) and **English**. All user-facing text is in:

- `src/i18n/es.ts` — Spanish dictionary
- `src/i18n/en.ts` — English dictionary

Routes: `/es` (Spanish), `/en` (English). The middleware auto-detects the browser language and redirects.

---

## Contact Form

The contact form sends emails via **Resend** API.

### Required Environment Variables

| Variable          | Description                              |
|-------------------|------------------------------------------|
| `RESEND_API_KEY`  | API key from [resend.com](https://resend.com) |
| `CONTACT_EMAIL`   | Destination email (fallback: `jose.salamanca@beaienergy.com`) |

These must be configured in **Vercel > Project Settings > Environment Variables**.

### Features
- Server-side validation
- Rate limiting (5 requests/hour per IP)
- HTML email template
- Anti-XSS (HTML escaping)

---

## Getting Started (Local Development)

```bash
# Install dependencies
npm install

# Create .env.local with required variables
echo "RESEND_API_KEY=re_xxxxx" > .env.local
echo "CONTACT_EMAIL=jose.salamanca@beaienergy.com" >> .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

The site auto-deploys to Vercel on every push to `master`.

```
Push to master → GitHub → Vercel auto-build → chemasalamanca.me
```

### Vercel Configuration

- Framework: Next.js
- Security headers configured in `vercel.json`
- Image caching: 1 year for `/images/*`
- Domain: `chemasalamanca.me`

---

## SEO

- Dynamic metadata per locale (`layout.tsx`)
- JSON-LD schemas: `Person` + `WebSite`
- Open Graph & Twitter cards
- `robots.ts` and `sitemap.ts` auto-generated
- Canonical URLs per language

---

## Changelog (2026-03-11)

- Removed personal phone number from contact section
- Updated email to `jose.salamanca@beaienergy.com`
- Updated branding: "AI Augmented Business & Human Transformation"
- Updated tagline: "AI & Technology at the service of people"
- Updated about title: "From technology dreamer to AI leader"
- Replaced Prosegur with Hiscox Europe (2015–2016)
- Removed Procter & Gamble from track record
- Added BEAI Energy (2025–Present) to track record
- Added NTT Data (1999–2005) to track record
- Removed Colegio de Físicos from brands (kept in credentials)
- Ordered track record chronologically
