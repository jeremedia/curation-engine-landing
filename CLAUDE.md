# CLAUDE.md — CE Landing Page

This is the public face. When I'm in this room, I'm working on marketing and first impressions.

## What This Is

A static landing page for Curation Engine. Pure HTML/CSS/JS, no frameworks. Deployable anywhere.

**Status**: Complete. Maintenance mode.

## The Brand

| Element | Value |
|---------|-------|
| **Primary Color** | CE Red (#DC3644) |
| **Typography** | Avocado Sans (Thin, Regular, Bold) |
| **Logo** | Nested frames creating architectural depth |
| **Aesthetic** | Spatial editorial — inspired by gallery spaces |
| **Motto** | "Infinite virtual → more precious real" |

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
- `/Volumes/jer4TBv3/CE/ce-enliterator` — The educational mission
- `/Volumes/jer4TBv3/CE/ZICE_RAILS_APP` — Backend for waitlist integration
