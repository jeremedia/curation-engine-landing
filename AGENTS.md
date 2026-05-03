# AGENTS.md - CE Landing Page

## Status

Static HTML/CSS/JS landing page. No framework, package manager, or build step.

Verified on 2026-05-03 against:

- `index.html`
- `styles.css`
- `script.js`
- `assets/fonts/`
- `assets/images/logo.png`
- `/Volumes/jer4TBv3/workspaces/personal/CE/CE ID Materials/brand-guide/index.html`

## Current Cautions

- The page uses the pre-v2.1 red palette (`#DC3644`).
- The current CE brand guide uses Terracotta Earth (`#B85C38`) as the primary accent.
- `index.html` still contains stale launch copy: "v1.0 ships in 90 days" and a 2025 footer.
- The waitlist form is simulated in `handleFormSubmit()`; it does not send data to a backend.

## Local Preview

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit Rules

- Keep this as a static site unless there is an explicit product decision to add a build system.
- Before deployment, update brand colors, launch timing copy, footer year, and waitlist behavior.
- If integrating the waitlist, replace the `setTimeout` in `script.js` with a real endpoint and error handling.

