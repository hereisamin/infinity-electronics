# ABOUT_PROJECT.md

## 1. Introduction

This project implements an **e-commerce frontend** for _InfinityElectronics_, following the **case requirements** provided in the test. It uses an **Nx monorepo** with **Nuxt 3**, **Pinia** (for cart and global state), and **TanStack Query** (for data fetching and caching).

The focus is on:
- A **product listing** (with filtering, sorting, pagination),
- A **product detail** page (showing details, allowing add-to-cart),
- A **cart** page (managing user’s cart items),
- A **home** page with a hero section and featured products,
- And basic **theme** toggling via `@nuxtjs/color-mode`.

## 2. Tech Stack Overview

- **Nuxt 3** / **Vue 3** for the SPA structure.
- **Nx** for monorepo management.
- **Tailwind CSS** for styling.
- **Pinia** for cart state management.
- **TanStack Query** for product data (loading, caching, etc.).
- **TypeScript** throughout the application.
- **pnpm** for package management.

### Why Nx + Nuxt?
Nx provides a scalable structure for future expansions (e.g., adding more apps, libraries, or microfrontends). Nuxt 3 ensures an ergonomic Vue 3 experience with SSR/SSG support and a powerful plugin system.

## 3. Repository Structure

Here’s a brief overview (see `structure.txt` for the full tree):

```
.
├── apps/
│   ├── spa/                # Main Nuxt 3 application
│   │   ├── src/
│   │   │   ├── pages/      # Index, products, cart, about, etc.
│   │   │   ├── components/ # Shared components (Hero, Navbar, etc.)
│   │   │   ├── store/      # Pinia store (cart)
│   │   │   ├── composable/ # TanStack Query usage
│   │   │   ├── layouts/    # Default layout (footer, navbar)
│   │   │   ├── services/   # Http service w/ axios
│   │   │   ├── types/      # Type definitions (Product, CartItem)
│   │   └── nuxt.config.ts
│   └── spa-e2e/            # Playwright-based E2E tests (optional)
├── libs/
│   └── ui/                 # Minimal UI library (Button, Loading, Error)
└── ...
```

### `libs/ui` Future Improvements
Currently, `libs/ui` contains:
- **Button.vue**: A simple shared button component.
- **Error.vue**: A simple error display placeholder.
- **Loading.vue**: A minimal spinner/loader component.

In future iterations, we plan to add:
- **Hero** and **ProductCard** to the shared library (currently located in `apps/spa/components`).
- More advanced theming or accessibility enhancements.
- A dedicated test suite (unit tests + accessibility checks).
- E2E coverage.

## 4. Installation & Setup

### 4.1 Prerequisites
- **Node.js** v16+ or v18+
- **pnpm** (recommended)

#### Install pnpm
```bash
npm install -g pnpm
```

### 4.2 Installing Dependencies
In the root directory:

```bash
pnpm install
```

This command installs all packages for the Nx monorepo.

## 5. Building & Running

### 5.1 Local Development

```bash
# Start development server for the Nuxt SPA
pnpx nx serve spa
# or
pnpm nx serve spa
```

### 5.2 Production Build
```bash
pnpx nx build spa
# or
pnpm nx build spa
```
The output will be generated in `dist/apps/spa/`.

## 6. Features Implemented

1. **Home Page**  
   - **Hero** section (simple slider for product images).
   - **Category Grid** with random product image collage.

2. **Product Listing**  
   - Filtering by category (`?cat=` query).
   - Sorting (price asc/desc, rating asc/desc).
   - Infinite scroll or "Load More" pagination.

3. **Product Detail**  
   - Displays product info, price, rating, etc.
   - “Add to Cart” feature with adjustable quantity.

4. **Cart**  
   - Uses Pinia store for storing cart items.
   - Shows total price, item count, ability to remove/update items.

5. **About Page**  
   - Basic design describing InfinityElectronics brand.

6. **Theme & Dark Mode**  
   - `ColorInput.vue` for picking dark/light/system mode.

## 7. Architectural Highlights

- **State Management**: Pinia in `apps/spa/store/cart.ts`.
- **Data Fetching**: TanStack Query in `apps/spa/src/composable/use-query`.
- **Routing**: Nuxt 3’s file-based routes (`/pages` folder).
- **Performance**: 
  - Lazy loading route chunks.
  - Minimal overhead with Tailwind’s purge in production.
  - Potential SSR or static hosting if desired.

## 8. Future Improvements

- **Shared UI Library**: Move `Hero.vue`, `ProductCard.vue`, `FeaturedProducts.vue` from `apps/spa/components` into `libs/ui` so other frontends can reuse them.
- **Accessibility Testing**: Integrate automated checks for color contrast, screen reader support, keyboard navigation.
- **Unit & Integration Tests**: Expand test coverage in `libs/ui` (currently minimal).
- **Additional Theming**: Seasonal or brand-specific themes via CSS variables or Tailwind config expansions.
- **Advanced CI/CD**: Nx Cloud or GitHub Actions for caching and distribution.

## 9. Contact / Submission

This document, along with the source code in this repository, meets the materials described in the case:

- **Architectural artifacts**: Provided in this ABOUT_PROJECT.md and (optional) any diagrams.
- **Code**: Nx + Nuxt 3 monorepo is submitted in full (or in a public Git repo).
- **(Optional) Live Demo**: Could be deployed to Netlify, Vercel, or GitHub Pages if desired.

---

Thank you for reviewing **InfinityElectronics**! Feel free to reach out with any questions about the architecture or code approach.
