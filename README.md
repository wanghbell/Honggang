# Honggang Wang — Light Academic Website

A responsive, modular static website designed for GitHub Pages.

## Highlights
- Light, modern academic layout
- Reusable JavaScript components
- Centralized content in `js/data.js`
- Local SVG icon system with no icon package dependency
- Mobile navigation and accessibility support
- No links or assets from the previous website

## Customize
1. Edit text, metrics, cards, timeline, and publication links in `js/data.js`.
2. Edit contact details in `js/components.js`.
3. Replace the `HW` monogram inside the hero with a local portrait image if desired.

Example:
```html
<img src="assets/honggang-wang.jpg" alt="Professor Honggang Wang">
```

## Publish with GitHub Pages
1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/root`, then save.

The website uses only static HTML, CSS, and JavaScript, so no build command is needed.
