
# React Portfolio Site (COMP229 Assignment 1)

This project implements a **5-page personal portfolio** using **React** and **React Router v6**.

## Pages
- **Home** — Welcome + mission + CTA to About. Shows a success alert after Contact form submission.
- **About** — Legal name, headshot image, short bio, and a link to **resume.pdf** (already included as a placeholder).
- **Projects** — At least 3 projects with image, role, and outcome.
- **Services** — Short list of services.
- **Contact** — Contact panel and an interactive form (First Name, Last Name, Contact Number, Email, Message). The form captures data and redirects to Home.

## Features that meet marking rubric
- ✅ Navigation bar with a **custom logo** (`/public/images/logo.svg`) near the brand name.
- ✅ All 5 required pages and appropriate content.
- ✅ Contact form captures input and redirects to Home (no backend required).
- ✅ Internal documentation comments in components and pages.
- ✅ Code is structured and readable (contextual variable names).

## Getting started
```bash
npm install
npm start
```
Site runs at http://localhost:3000

## Replace with your own details
- Replace `/public/images/mohcine.svg` with your actual headshot (keep the filename or update `About.jsx`).
- Replace `/public/resume.pdf` with your real resume PDF.
- Update **email/phone** in `Contact.jsx`.
- Customize project cards in `Projects.jsx` and services in `Services.jsx`.

## Deploy
You can deploy with Vercel, Netlify, Render, or Railway. For Vercel/Netlify:
1. Push to GitHub.
2. Import the repo in Vercel/Netlify.
3. Build command: `npm run build` (auto-detected).
4. Output directory: `build` (auto-detected).

## Suggested commit history (example)
- `feat: scaffold CRA + router`
- `feat: add navbar and pages`
- `feat: implement contact form and redirect`
- `style: polish styles and cards`
- `docs: update README with instructions`
