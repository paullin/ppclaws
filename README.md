# PPClaws

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Astro](https://img.shields.io/badge/Astro-5.17-purple.svg)

**Keywords:** `automation` • `productivity` • `developer tools` • `product manager` • `designer` • `marketing` • `astro` • `tailwind css`

## 🌐 [Live Demo](https://ppclaws.com)

> Powerful automation tools and skills for modern professionals.

---

## ✨ Features

PPClaws is designed to supercharge your workflow across different roles:

- ✅ **Product Managers**: Competitor analysis, requirement analysis, and A/B testing setup.
- ✅ **UI/UX Designers**: Design inspiration, styling palettes, and automated slicing.
- ✅ **Marketing**: Social media content generation and SEO keyword analysis.
- ✅ **Developers**: Test-driven development, systematic debugging, and code reviews.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5.17](https://astro.build/) - Static site generator
- **Adapter**: [Cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) - SSR adapter for dynamic routes
- **Components**: [Svelte 5](https://svelte.dev/) - Interactive components with runes
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Content**: Astro Content Collections - Type-safe markdown content

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/paullin/ppclaws.git
cd ppclaws

# Install dependencies
pnpm install
```

### 2. Environment Setup

```bash
# Copy environment file
cp .env.example .env

# The default production domain is already configured
# PRODUCTION_DOMAIN = "https://ppclaws.com"
```

### 3. Development Server

```bash
# Start development server
pnpm run dev
```

Visit `http://localhost:4321` to see the site locally.

---

## 📁 Project Structure

```
/
├── public/              # Static assets (images, favicons)
├── src/
│   ├── assets/          # Optimized assets
│   ├── components/      # Reusable UI components (Astro, Svelte)
│   ├── content/         # Content collections (Skills, Examples, Homepage JSONs)
│   ├── data/            # Navigation and configuration
│   ├── i18n/            # Translation utilities and routing mapping
│   ├── layouts/         # Page layouts
│   ├── locales/         # Translation JSON files (en, zh)
│   ├── pages/           # File-based routing with dynamic params
│   └── styles/          # Global styles
```

---

## 🚢 Deployment

### Build for Production

```bash
pnpm run build
```

### Preview Build

```bash
pnpm run preview
```

The site is optimized for Cloudflare Pages but can be deployed to any hosting provider.
