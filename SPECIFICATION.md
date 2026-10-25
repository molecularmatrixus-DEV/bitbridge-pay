# SPECIFICATION.md — BitBridge Pay Landing Page

## 1. Core Business Model & Value Proposition
- **Service:** Card-to-Crypto payment gateway built specifically for high-risk merchants.
- **How it works:** Customers pay easily using their regular credit and debit cards, while the merchant receives instant crypto settlements.
- **Key Benefits for Merchants:** Zero chargeback risk, no rolling reserves, zero unexpected account freezes, and ultra-fast onboarding.
- **Tagline:** BitBridge Pay – Frictionless Card-to-Crypto onramp designed for high-risk merchants to accept credit cards safely with instant crypto payouts.

## 2. Copywriting Style & Tone Guidelines
- **Tone:** Clear, direct, and simple English.
- **Strict Rule:** Avoid heavy corporate jargon, complex buzzwords, or overly academic terms. Keep it punchy, plain, and easy to understand for any business owner.

## 3. Color Palette Tokens
- **Primary Accent:** `#2563EB` (Tailwind `blue-600`)
- **Background:** `#FFFFFF` (Crisp White / Light theme)
- **Dark Text:** `#0F172A` (Slate 900)
- **Muted Text:** `#475569` (Slate 600) / `#64748B` (Slate 500)
- **Borders / Dividers:** `#E2E8F0` (Slate 200)

## 4. Typography Scales & Font Families
- **Headings Font:** `Instrument Serif` (editorial, tight, fintech feel).
- **Body & UI Font:** `Instrument Sans` (`Instrument Sans Variable`).
- **Rule:** Strict discipline on font sizes — refined, proportional, and clean. All text and font sizes are scaled down by ~10% for a tighter, minimalist fintech aesthetic:
  - **H1 Headline:** Scaled to `text-3xl sm:text-4xl lg:text-[46px]` (leading tightly balanced).
  - **Slogan / Subtitle:** `text-base sm:text-lg`.
  - **Body Copy:** `text-xs sm:text-sm`.
  - **Nav & Buttons:** `text-xs sm:text-sm`.

## 5. Max Width Constraint & Floating Header
- **Desktop Container:** Strictly capped at `1300px` (`max-w-[1300px] mx-auto px-6 lg:px-8`).
- **Header Design:** Modern floating glassmorphism pill (`sticky top-4 z-50 max-w-[1200px] mx-auto px-4 sm:px-6`), featuring `bg-white/75 backdrop-blur-md rounded-full border border-white/60 shadow-sm shadow-slate-900/5`.

## 6. Branding Assets & Messaging
- **Logo & Favicon:** Located in `public/logo.webp` (copied from `icon logo.webp`), used as the site favicon and rendered in the Header component.
- **Brand Slogan:** "Zero declines, zero chargebacks, pure growth."

## 7. Component Structure Rules for Future Sections
- Built section by section interactively.
- Modular component breakdown in `components/`.
- Fully responsive across mobile, tablet, and desktop viewports.
