# Ellora's MIDDLE MIST — Resort Website

A modern, luxury, responsive resort website built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview
```

The production build is output to the `dist/` folder, ready to deploy to any static host
(Vercel, Netlify, GitHub Pages, etc.).

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        Sticky glassmorphism navigation + mobile menu
│   ├── Hero.jsx           Full-screen parallax hero with scroll indicator
│   ├── About.jsx          Resort introduction + stat cards
│   ├── Features.jsx       "Why Choose Us" — 6 feature cards
│   ├── Testimonials.jsx   Auto-rotating guest review carousel
│   ├── Gallery.jsx        Filterable masonry gallery with lightbox
│   ├── Experience.jsx     Alternating image/text experience showcase
│   ├── Contact.jsx        Contact info, map embed, and inquiry form
│   ├── Footer.jsx         Footer with links, contact info, socials
│   └── MistLayer.jsx      Shared drifting-mist visual motif
├── pages/
│   ├── Home.jsx           Combines all sections into the single-page layout
│   ├── GalleryPage.jsx    Standalone /gallery route
│   └── ContactPage.jsx    Standalone /contact route
├── App.jsx                Routing + layout shell
├── main.jsx                Entry point
└── index.css               Tailwind layers + global styles
```

## Notes

- Images are pulled live from Unsplash as placeholders — swap the `src` URLs in
  `Hero.jsx`, `About.jsx`, `Gallery.jsx`, and `Experience.jsx` for the resort's own
  photography before launch.
- Update the Google Maps embed URL in `Contact.jsx` with the resort's exact map pin.
- The contact form currently shows a success message on submit but does not send data
  anywhere — connect it to an email service (e.g. Formspree, EmailJS) or your own backend
  endpoint to make it functional.
- Brand colors and fonts are defined centrally in `tailwind.config.js` for easy theming.
"# ellora" 
