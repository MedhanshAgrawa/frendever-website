# Frendever Textiles India — Next.js Website

A premium, export-buyer-focused website built with Next.js App Router.

## What is included

- High-end homepage with motion, product storytelling, and export credibility sections
- CMS-ready product catalogue driven by a structured data file in `lib/products.ts`
- Dynamic product detail pages at `/products/[slug]`
- Capabilities page covering materials, finishes, OEM/private label, and QC
- Production-ready contact form with API validation and optional SMTP delivery
- Responsive design, SEO metadata, and reusable content sections

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

## Contact form setup

Copy `.env.example` to `.env.local` and fill in your SMTP credentials.

If SMTP is not configured, the API route still validates the form and returns success in development mode so the site can be previewed without email delivery.

## Where to edit content

- Company and site copy: `lib/site-data.ts`
- Product catalogue: `lib/products.ts`
- Navigation/footer/contact info: `lib/site-data.ts`
- Images: `public/images`

## CMS-ready path

The catalogue is already normalized into categories, tags, materials, finishes, highlights, and use cases. This makes it straightforward to connect later to:
- Sanity
- Contentful
- Shopify headless
- Strapi
- A custom admin panel

## Deployment

This project is ready for Vercel or any Node-compatible host.
