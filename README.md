# Curation Engine Landing Page

A distinctive spatial editorial landing page for Curation Engine, built with the professional brand identity designed by Jeremy Roush's design team.

## Design System

**Brand Identity:**
- **Color**: CE Red (#DC3644) - bold and memorable
- **Typography**: Avocado Sans (Thin, Regular, Bold) - distinctive geometric sans-serif
- **Logo**: Nested frames creating architectural depth
- **Aesthetic**: Spatial editorial - inspired by gallery spaces

## Design Concept

**"Entering the Exhibition"** - The landing page creates a sense of entering a gallery space through:
- Layered nested frames that animate on load (inspired by the CE logo)
- Scroll-triggered reveals that unfold the story
- Spatial composition with asymmetric layouts
- Bold use of brand red against refined neutrals
- Architectural grid systems

## Features

- ✨ Staggered hero animation with nested frame entrance
- 🎨 Scroll-triggered section reveals
- 🔄 Parallax effects on nested frame elements
- 📱 Fully responsive design
- ⌨️ Easter egg: Konami code for "Curator Mode"
- 📧 Waitlist signup form (ready for backend integration)

## Tech Stack

- Pure HTML5, CSS3, JavaScript (no frameworks)
- Custom @font-face with Avocado Sans
- CSS Grid and Flexbox layouts
- Intersection Observer API for scroll animations
- CSS custom properties for consistent theming

## File Structure

```
ce-landing-page/
├── index.html          # Main HTML structure
├── styles.css          # All styling with CSS variables
├── script.js           # Scroll animations and interactions
├── assets/
│   ├── fonts/         # Avocado Sans font family
│   └── images/        # CE logo files
└── README.md          # This file
```

## Local Development

Simply open `index.html` in a modern browser. No build process required.

For a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

Then visit `http://localhost:8000`

## Deployment

This is a static site and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

## Brand Colors

```css
--color-brand-red:   #DC3644
--color-red-dark:    #B82533
--color-red-light:   #FF4F5E
--color-cream:       #FFFCF5
--color-off-white:   #F8F6F0
--color-charcoal:    #1A1A1A
```

## Typography Weights

```css
--font-weight-thin:    200  /* Avocado Sans Thin */
--font-weight-regular: 400  /* Avocado Sans Regular */
--font-weight-bold:    700  /* Avocado Sans Bold */
```

## Design Philosophy

This landing page embodies Curation Engine's core values:
- **Architectural Authenticity**: Spatial composition inspired by gallery design
- **Excellence as Standard**: Worthy of eight years of development
- **Distinctive Identity**: Bold choices that avoid generic "AI slop" aesthetics

## Integration Notes

The waitlist form currently shows a success message. To integrate with a backend:

1. Replace the `setTimeout` in `handleFormSubmit()` with an actual API call
2. Update the endpoint in `script.js`
3. Add error handling for failed submissions

Example:
```javascript
fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
})
.then(response => response.json())
.then(data => {
    // Success handling
})
.catch(error => {
    // Error handling
});
```

## Credits

- **Design System**: Professional identity by Jeremy Roush's design team
- **Typography**: Avocado Sans font family
- **Development**: Built with the frontend-design skill
- **Motto**: "Infinite virtual → more precious real"

---

**Worthy of eight years.**
