# Atharv Tripathi — Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js (App Router)** and **React components**, designed around a calm **Soft Sage & Warm Alabaster** minimalist aesthetic.

---

## 🎨 Design System & Color Palette

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Background** | `#F8F9F7` | Warm Alabaster / Soft Off-White (eye-relaxing) |
| **Card / Surface** | `#EFF2EE` | Muted Stone / Pale Mist (clean card contrast) |
| **Primary Text** | `#242926` | Deep Charcoal Green (softer than harsh pure black) |
| **Secondary Text** | `#5C6660` | Slate Moss (high legibility) |
| **Primary Accent** | `#52796F` | Calm Eucalyptus / Sage Green (serene focus color) |
| **Hover / Interactive** | `#354F52` | Deep Pine (crisp interactive contrast) |
| **Subtle Borders** | `#DCE2DD` | Soft Sage Border line |

**Typography:**
- **Primary Font:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via `next/font/google`
- **Monospace Accent:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for badges, dates, and technical tags

---

## 📁 Project Architecture

```
portfolio/
├── app/
│   ├── layout.js          # Root layout, Google Fonts & SEO metadata
│   ├── page.js            # Main home page composing all sections
│   └── globals.css        # Design tokens, resets, utility classes & responsive styles
├── components/
│   ├── Navbar.js          # Sticky navigation, scrollspy & accessible mobile drawer
│   ├── Hero.js            # Greeting badge, headline, value prop & CTAs
│   ├── About.js           # Bio & Bento cards (Skills, Education, Highlights)
│   ├── Projects.js        # Featured AquaSense 2.0 showcase with core principle & links
│   ├── Contact.js         # Clickable copy-email, LinkedIn/GitHub links & accessible form
│   ├── Footer.js          # Copyright & smooth back-to-top button
│   └── ScrollReveal.js    # IntersectionObserver client hook for subtle scroll reveals
├── jsconfig.json          # Path alias configuration (`@/*`)
├── next.config.mjs        # Next.js configuration
├── package.json           # Next.js & React dependencies
└── README.md              # Project documentation
```

---

## 🚀 Key Features

1. **Sticky Frosted-Glass Header:** Responsive navigation with backdrop blur (`blur(14px)`), scroll offset detection, and an accessible mobile drawer menu.
2. **Hero Section:** Live status badge with subtle animated green pulsing dot, bold headline, and quick action buttons.
3. **About & Bento Grid:** Two-column section highlighting Atharv's journey at Bangalore Institute of Technology, core skills (`C`, `Java`, `HTML`, `AI Prompting`, `Vibe Coding`), and achievements.
4. **Flagship Project (AquaSense 2.0):** Data-driven smart irrigation & soil health optimization showcase card with core principle callout and direct links to the [Live App](https://aquasense-2-0.vercel.app/) and [GitHub](https://github.com/atharvtripathi06).
5. **Interactive Contact Section:**
   - One-click copy email button for `atharvtripathi2118@gmail.com` with real-time confirmation.
   - Clean social links for GitHub and LinkedIn.
   - Client-side validated form with focus rings (`#52796F`), animated submit button spinner, and an inline success confirmation card.
6. **Smooth Scroll Reveals:** Polished fade-up transitions without jarring motions, respecting `prefers-reduced-motion`.

---

## 💻 Getting Started Locally

### 1. Install dependencies
```bash
npm install
# or
pnpm install
```

### 2. Run the development server
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

The portfolio is fully optimized for Vercel deployment:
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and click **Deploy**.

