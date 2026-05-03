# CLAUDE.md — CE Landing Page

> **Status audit (2026-05-03):** Static CE landing-page documentation. Verify public copy, brand colors, and form behavior against `index.html`, `styles.css`, and current CE brand guidance before publish use.

This is the public face. When I'm in this room, I'm working on marketing and first impressions.

## What This Is

A static landing page for Curation Engine. Pure HTML/CSS/JS, no frameworks. Deployable anywhere.

**Status**: Static site, maintenance mode. Verified on 2026-05-03 against
`index.html`, `styles.css`, `script.js`, and the CE brand guide.

## The Brand

| Element | Value |
|---------|-------|
| **Primary Color** | CE Red (#DC3644) — **NOTE: pre-v2.1 palette, see below** |
| **Typography** | Avocado Sans (Thin, Regular, Bold) |
| **Logo** | Nested frames creating architectural depth |
| **Aesthetic** | Spatial editorial — inspired by gallery spaces |
| **Motto** | "Infinite virtual → more precious real" |

**Brand staleness warning:** This landing page uses the pre-v2.1 brand palette (`#DC3644` red). The authoritative brand guide v2.1 (`/Volumes/jer4TBv3/workspaces/personal/CE/CE ID Materials/brand-guide/index.html`) uses Terracotta Earth (`#B85C38`) as primary accent. When this page is next updated, align colors with the brand guide.

**Launch-copy staleness warning:** `index.html` still says "v1.0 ships in 90
days" and has a 2025 footer. Review those strings before public deployment.

## Design Concept: "Entering the Exhibition"

The page creates a sense of entering a gallery:
- Layered nested frames that animate on load
- Scroll-triggered section reveals
- Parallax effects on frame elements
- Asymmetric spatial layouts
- Bold red against refined neutrals

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Main structure |
| `styles.css` | All styling with CSS variables |
| `script.js` | Scroll animations, interactions |
| `assets/fonts/` | Avocado Sans family |
| `assets/images/` | CE logo files |

## Running Locally

```bash
# Python
python -m http.server 8000

# Node
npx serve

# Then visit http://localhost:8000
```

## Features

- Staggered hero animation with nested frame entrance
- Scroll-triggered section reveals
- Parallax effects
- Fully responsive
- Easter egg: Konami code → "Curator Mode"
- Waitlist signup form (needs backend integration)

## Brand Colors (CSS Variables)

```css
--color-brand-red:   #DC3644
--color-red-dark:    #B82533
--color-red-light:   #FF4F5E
--color-cream:       #FFFCF5
--color-off-white:   #F8F6F0
--color-charcoal:    #1A1A1A
```

## When Working Here

### To update content:
Edit `index.html` directly. No build process.

### To integrate waitlist:
Replace `setTimeout` in `handleFormSubmit()` with actual API call to ZICE.

### To deploy:
Upload to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## What's NOT Here

- Backend services (that's ZICE_RAILS_APP)
- The actual CE application
- Dynamic content

## Design Philosophy

- **Architectural Authenticity** — Spatial composition inspired by gallery design
- **Excellence as Standard** — Worthy of eight years of development
- **Distinctive Identity** — Bold choices that avoid generic "AI slop" aesthetics

---

**Related rooms**:
- `/Volumes/jer4TBv3/workspaces/personal/CE/ce-enliterator` — The educational mission
- `/Volumes/jer4TBv3/workspaces/personal/CE/ZICE_RAILS_APP` — Backend for waitlist integration
