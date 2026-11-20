# Shrilaxmi Pattar — Portfolio

A modern, responsive, glassmorphism-styled portfolio built with **React + Vite**, **Tailwind CSS v4**, and **Framer Motion**. Dark-purple theme, smooth scroll-reveal animations, and a fully modular section-based layout.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # production build -> dist/
npm run preview     # preview the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  components/   All UI sections & reusable pieces (Navbar, Hero, Skills, Projects, Contact, ...)
  data/         Plain JS files holding all your content — edit these, not the components
  hooks/        useTheme, useActiveSection, useCountUp
  pages/        NotFound.jsx (404 page)
  App.jsx       Assembles every section in order
  index.css     Design tokens (colors, fonts, animations) + global styles
```

## Customize your content

Everything editable lives in `src/data/`:

| File | Controls |
|---|---|
| `profile.js` | Name, role, tagline, contact info, social links, About Me copy |
| `skills.js` | Skill categories + progress-bar percentages |
| `projects.js` | Project cards + the detail-modal content |
| `timeline.js` | Education timeline + Experience entries |
| `misc.js` | Certificates, achievements, stats, services, testimonials, FAQs, |

Replace the Unsplash placeholder images in `projects.js` with your own screenshots (drop files in `src/assets/` and import them, or point to any hosted URL).

## Resume download

`Hero.jsx` and `Navbar.jsx` link to `profile.resumeUrl` (`/resume.pdf` by default). Add your actual resume PDF to the `public/` folder as `resume.pdf`, or update `resumeUrl` in `profile.js` to point elsewhere.

## Contact form (EmailJS)

The contact form in `src/components/Contact.jsx` is wired for EmailJS (emailjs.com):

1. Create a free EmailJS account and an email service + template.
2. Replace the three placeholders in `Contact.jsx`:
   ```js
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {...}, "YOUR_PUBLIC_KEY")
   ```
3. Your EmailJS template should expect `from_name`, `from_email`, `subject`, and `message` variables.

Until configured, submitting the form will show a friendly error message rather than silently failing.

## Theme

Dark/light mode toggles via the navbar button and persists in `localStorage`. All theming lives in `src/index.css` under the `@theme` block — change `--color-violet-700`, `--color-lilac-400`, etc. to shift the palette without touching components.

## Deployment

**Vercel**
```bash
npm i -g vercel
vercel
```
Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`
- Or drag-and-drop the `dist/` folder after running `npm run build` into Netlify's dashboard.

**Render**
- New Static Site → Build command: `npm run build` → Publish directory: `dist`.

## Notes

- Built with functional components + hooks only, no class components.
- Respects `prefers-reduced-motion`.
- Lazy-loaded project images (`loading="lazy"`).
- All animation is done with Framer Motion — no extra animation libraries.
