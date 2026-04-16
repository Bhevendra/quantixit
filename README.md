# Quantix IT Ltd. — Official Website

Modern, premium marketing website for **Quantix IT Ltd.** — a data engineering, business intelligence and AI consultancy with offices in London and Bengaluru.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and deployed on **Vercel**.

Live contact: [hr-uk@quantixit.in](mailto:hr-uk@quantixit.in) · +44 7776 802047 · [LinkedIn](https://www.linkedin.com/company/quantix-it/)

---

## ✨ Features

- **Next.js 14 App Router** — SSR/SSG for best-in-class SEO
- **Tailwind CSS** with custom design system (brand + accent colors)
- **Dark / Light mode** toggle via `next-themes` (dark default)
- **Sticky, blurred navbar** with smooth scroll to sections
- **Fully responsive** — mobile-first, works perfectly on every device
- **SEO-ready**: rich `metadata` API, JSON-LD `Organization` schema, `sitemap.xml`, `robots.txt`
- **AI-crawler friendly**: explicit allow rules for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`
- **Accessible**: semantic HTML, ARIA labels, focus states, keyboard navigation
- **Lightweight animations** — Tailwind keyframes, no heavy JS libraries on first paint
- **Lead form** via [Web3Forms](https://web3forms.com) — no backend required, emails straight to your inbox
- **Security headers**: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- **Open Graph / Twitter cards** with pre-rendered OG image

---

## 🗂 Project structure

```
quantix-it-website/
├── app/
│   ├── layout.tsx         # Root layout, SEO metadata, JSON-LD
│   ├── page.tsx           # Home page (composes all sections)
│   ├── globals.css        # Tailwind + design tokens
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # robots.txt with AI bot allows
│   └── not-found.tsx      # 404 page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx           # Includes dashboard preview
│   ├── TrustBar.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Process.tsx
│   ├── CaseStudies.tsx
│   ├── Contact.tsx        # Web3Forms-powered lead form
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── public/
│   ├── logo.svg / logo.png
│   ├── favicon.svg / favicon.ico / apple-touch-icon.png
│   ├── og-image.png       # 1200×630 social sharing image
│   └── site.webmanifest
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Deploy to Vercel (5-minute guide)

### Step 1 — Push to GitHub

```bash
cd quantix-it-website
git init
git add .
git commit -m "Initial commit: Quantix IT marketing site"
# create an empty repo on GitHub called `quantix-it-website`, then:
git branch -M main
git remote add origin https://github.com/<your-username>/quantix-it-website.git
git push -u origin main
```

### Step 2 — Get a free Web3Forms access key

1. Go to <https://web3forms.com>
2. Enter `hr-uk@quantixit.in` — they'll email you a free **access key**
3. Copy the key (it looks like `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 3 — Import into Vercel

1. Go to <https://vercel.com/new>
2. Click **Import Git Repository** and pick `quantix-it-website`
3. Framework preset: **Next.js** (auto-detected)
4. **Environment Variables** — add these two:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_WEB3FORMS_KEY` | your Web3Forms access key |
   | `NEXT_PUBLIC_SITE_URL` | `https://quantixit.in` |

5. Click **Deploy**. Done.

### Step 4 — Point your domain (quantixit.in) at Vercel

1. In Vercel: **Project → Settings → Domains → Add** → enter `quantixit.in` and `www.quantixit.in`
2. Vercel will show DNS records. In your domain registrar (e.g. GoDaddy, Namecheap, Cloudflare):
   - Add an **A record** for `@` → `76.76.21.21`
   - Add a **CNAME record** for `www` → `cname.vercel-dns.com`
3. SSL certificates are issued automatically by Vercel within minutes.

---

## 🧪 Local development

```bash
# Node 18+ required
npm install
cp .env.example .env.local
# paste your Web3Forms key into .env.local
npm run dev
```

Open <http://localhost:3000>. Edits to any file hot-reload automatically.

**Other scripts:**
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint

---

## ✏️ How to edit content

All marketing copy lives inside the components in `/components/`:

| What to change | File |
|---|---|
| Headline / subheadline | `components/Hero.tsx` |
| Company intro | `components/About.tsx` |
| Services (titles, bullets) | `components/Services.tsx` |
| "Why choose us" points | `components/WhyChooseUs.tsx` |
| 4-step process | `components/Process.tsx` |
| Case study metrics | `components/CaseStudies.tsx` |
| Contact info, locations | `components/Contact.tsx` & `components/Footer.tsx` |
| Nav links | `components/Navbar.tsx` (`NAV_LINKS` array) |
| SEO title / description / keywords | `app/layout.tsx` (`metadata` object) |
| Colors / fonts | `tailwind.config.ts` |

---

## 🔎 SEO notes — how this site ranks

**On-page SEO (already configured):**
- Semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- Single `<h1>` per page, clear heading hierarchy
- Descriptive `alt` text on all imagery
- Rich `<meta>` title, description, keywords
- Open Graph + Twitter cards for link previews

**Structured data:**
- `Organization` JSON-LD with legal name, logo, contact, social profiles, addresses (London + Bengaluru), areas served, knowsAbout list — boosts knowledge-panel eligibility on Google & AI answer engines

**Technical SEO:**
- Auto-generated `sitemap.xml` and `robots.txt`
- Server-rendered HTML (Next.js) — crawlers see full content immediately
- Fast Core Web Vitals: Tailwind-only styling, system fonts w/ Google Fonts via `next/font` (optimized), no bloated client JS
- Security headers set in `next.config.js`

**AI answer-engine optimization:**
- `robots.txt` explicitly allows `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot` — means ChatGPT, Claude, Perplexity and Google's AI Overviews can cite you
- Clear, factual copy with verifiable specifics (office cities, services, tech stack) — models prefer factual, structured content

**Things YOU should do after deploy:**
1. Add the site to [Google Search Console](https://search.google.com/search-console) and submit the sitemap (`https://quantixit.in/sitemap.xml`)
2. Add to [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. Create a **Google Business Profile** for London and Bengaluru offices (huge local-SEO lift)
4. Publish 2–4 case studies or blog posts (`/blog/*`) for long-tail keywords like *"Power BI consulting London"*, *"Databricks implementation Bengaluru"*
5. Get 5–10 inbound links — LinkedIn posts, Clutch profile, partner sites, a Medium article
6. Verify your LinkedIn Company Page and link it back to `quantixit.in`

---

## 📬 Updating the contact form

The form is handled entirely client-side by Web3Forms — no backend or API route needed.

- Free tier: **unlimited** submissions, no branding
- Submissions arrive in the email you signed up with (`hr-uk@quantixit.in`)
- Add more recipients, webhooks, auto-responder etc. in the Web3Forms dashboard

To **change the recipient email**, simply re-register at Web3Forms with a new address and update `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel env vars — no code changes needed.

---

## 🎨 Tweaking the theme

- **Brand color**: `tailwind.config.ts` → `colors.brand`
- **Accent color** (currently cyan): `tailwind.config.ts` → `colors.accent`
- **Default theme**: `app/layout.tsx` → `defaultTheme="dark"` (change to `"light"` or `"system"`)

Tailwind uses CSS variables (`--bg`, `--fg`, etc.) in `globals.css` so switching themes is instant and flicker-free.

---

## 📄 License

Proprietary — © Quantix IT Ltd. All rights reserved.

---

## ❓ Support

Questions on the code? Open an issue in the GitHub repo, or email `hr-uk@quantixit.in`.
