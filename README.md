# Honggang Wang — Modular GitHub Pages Website

A responsive academic portfolio built with plain HTML, modular CSS, JavaScript ES modules, reusable components, and a self-contained SVG icon system.

## Project structure

```text
index.html
css/
  base.css          Global variables, typography, animation helpers
  components.css    Navigation, buttons, cards, headings, footer
  sections.css      Hero, research, leadership, publications, awards, contact
  responsive.css    Mobile layout and reduced-motion support
js/
  app.js            Application entry point and interactions
  components.js     Reusable section-rendering components
  data.js           Editable site content and lists
  icons.js          Reusable inline SVG icon library
assets/              Local images and downloadable documents
```

## Editing content

Most recurring content is centralized in `js/data.js`. Update research cards, metrics, timeline entries, publication links, awards, and navigation there without changing layout markup.

Reusable layouts are in `js/components.js`. Icons are defined once in `js/icons.js` and referenced by name.

## Preview locally

Because the website uses JavaScript modules, preview it through a small local web server rather than opening `index.html` directly:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a public repository, such as `honggangwang.github.io`.
2. Upload all files and folders to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, then select `main` and `/ (root)`.
5. Save the settings.

For a custom domain, add a `CNAME` file containing `www.honggangwang.org` and configure DNS according to GitHub Pages instructions.

## Recommended image setup

Save the profile photo as `assets/profile.jpg`, then change `hero.image` in `js/data.js` to `assets/profile.jpg`. This avoids reliance on an external image URL.
