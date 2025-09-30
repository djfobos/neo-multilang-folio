# NEO Nazareveli - Portfolio

Modern, multilingual portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Multilingual**: Georgian, Russian, English with react-i18next
- 🎨 **Modern Design**: Neominimalist aesthetic with custom design system
- ⚡ **High Performance**: Optimized for speed and SEO
- 📱 **Fully Responsive**: Mobile-first approach
- 🌓 **Dark/Light Theme**: System preference support
- ✨ **Smooth Animations**: Framer Motion for delightful interactions
- ♿ **Accessible**: WCAG 2.2 AA compliant

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **i18n**: react-i18next
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Route pages
├── data/             # Project and skill data
├── i18n/             # Translation files
│   ├── config.ts
│   └── locales/      # ka, ru, en translations
├── lib/              # Utilities
└── index.css         # Design system tokens
```

## Pages

- **Home** (`/`) - Hero, featured projects, CTA
- **About** (`/about`) - Bio, skills, experience timeline
- **Projects** (`/projects`) - Project gallery with filters
- **Project Detail** (`/projects/:id`) - Case study pages
- **Services** (`/services`) - Service offerings
- **Contact** (`/contact`) - Contact form

## Customization

### Design System
Edit `src/index.css` to customize colors, gradients, shadows, and animations.

### Translations
Add/edit translations in `src/i18n/locales/*.json`

### Projects
Update project data in `src/data/projects.ts`

## SEO

- Semantic HTML5
- Meta tags (title, description, OG, Twitter)
- Structured data (JSON-LD)
- Mobile-optimized
- Fast loading times

## License

© 2025 NEO Nazareveli. All rights reserved.
