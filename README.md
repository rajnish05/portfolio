# Rajnish Kumar – Developer Portfolio

A modern, high-performance developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Dark mode by default with glassmorphism, gradient accents, and smooth animations.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Environment (optional)**

   Copy `.env.example` to `.env.local` and set:

   - `NEXT_PUBLIC_JSON_VIEWER_URL` – JSON Viewer app URL
   - `NEXT_PUBLIC_QR_GENERATOR_URL` – QR/Barcode generator URL
   - `NEXT_PUBLIC_COMPILER_URL` – JavaScript compiler app URL
   - `NEXT_PUBLIC_GITHUB_USERNAME` – GitHub username for contribution graph
   - `CONTACT_WEBHOOK_URL` – Optional webhook for contact form submissions

3. **Run development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

4. **Build for production**

   ```bash
   pnpm build
   pnpm start
   ```

## Deploy on Vercel

- Push to GitHub and import the repo in [Vercel](https://vercel.com).
- Add environment variables in the project settings.
- Add a placeholder or real `public/resume.pdf` for the Resume button.

## Project Structure

- `app/` – Next.js App Router (layout, page, API routes)
- `components/` – Layout (Navbar, Footer), sections, shared (SectionWrapper, GlassCard), UI (Button, Card, Input)
- `data/` – Profile, highlights, skills, projects, tools, experience, blog posts
- `lib/` – Utils (e.g. `cn`)

## Customization

- **Profile & links:** Edit `data/profile.ts`
- **Highlights, skills, projects, tools, experience, blog:** Edit files in `data/`
- **Developer tool URLs:** Set in `.env.local` or `.env.example` defaults
