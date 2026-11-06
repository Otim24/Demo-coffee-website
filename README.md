# Demo Coffee Exporters Ltd. - Prototype Platform

A modern, multi-page agricultural commodity export demonstration website built with **Astro** and **Tailwind CSS**.

## Design Upgrades

- **Brand & Prototype Positioning**: Branded as **Demo Coffee Exporters Ltd.** with clear demonstration notices across top banners, headers, and footers to indicate that the trade figures, locations, and data are simulated for presentation purposes.
- **Glassmorphic Pill Navigation Bar**:
  - Floating pill-shaped boundary (`rounded-full`) encompassing all navigation links from `HOME` to `GET QUOTE`.
  - Luxury frosted glass appearance using `backdrop-blur-xl`, `bg-stone-900/75`, translucent glass borders (`border border-white/15`), and soft drop shadows.
  - The `GET QUOTE` action is nested inside the pill on the right end with a rounded-full copper/amber gradient button.
  - Responsive mobile drawer also featuring a frosted glass theme with accessible touch targets.
- **Atmospheric Background Images (No Flat Solid Blocks)**:
  - **Homepage Hero**: High-resolution mist-shrouded highland coffee farm with warm sunrise and multi-layer dark cinematic overlay.
  - **Terroir Origin Cards**: Distinct photographic backgrounds for Mount Elgon, Rwenzori Mountains, and the Central Robusta Belt.
  - **Milling & Processing Section**: Atmospheric background of dry milling, coffee burlap jute bags, and green bean handling.
  - **Subpage Banners**: Rich coffee photography background banners across About, Our Coffee, Export Services, Quality, Sustainability, For Buyers, and the Quote page.
  - **Final CTA Ribbons**: Sun-dried coffee on African raised beds background.
- **Strict Content Standards**:
  - **Zero Emojis**: Preserved throughout all content.
  - **Zero Em Dashes**: Clean, corporate punctuation used exclusively.

## Multi-Page Architecture

1. **Home (`/`)**: Hero with mountain plantation background, annual metrics, terroir origin cards, current crop grades, milling infrastructure, and trade news.
2. **About Us (`/about`)**: Operational pillars, Kampala mill tour simulation, and regulatory alignments.
3. **Our Coffee (`/coffee`)**: Green coffee catalog with interactive filters, technical specs, and Uganda harvest seasonality table.
4. **Export Services (`/export-services`)**: Six-stage milling workflow, GrainPro packaging, and Mombasa shipping corridor.
5. **Quality & Laboratory (`/quality`)**: Cupping lab protocols, dual Q-Graders, moisture and physical specs, and sample dispatch program.
6. **Sustainability & EUDR (`/sustainability`)**: EUDR deforestation compliance simulation, GPS polygon mapping, and agroforestry programs.
7. **For Buyers (`/for-buyers`)**: Commercial buyer guide, MOQs, Incoterms 2020, payment structures, and ocean transit times.
8. **Get Quote & Direct Lines (`/quote`)**: Dedicated quotation interface with Direct Lines, Plot 45 Industrial Area Google Map embed, and export inquiry form.
9. **Market Intelligence (`/blog`) & Reports (`/blog/[slug]`)**: Industry briefings and crop harvest reports.

## Running the Website Locally

```bash
# Start local development server (runs on http://localhost:4321)
npm run dev

# Compile static production build
npm run build

# Preview static production build
npm run preview
```
