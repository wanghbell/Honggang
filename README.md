# Honggang Wang — Academic Website

A responsive, modular academic website designed for GitHub Pages. The site uses plain HTML, CSS, and JavaScript, with no build process or external design dependencies.

## Project structure

```text
honggang-academic-site/
├── index.html
├── 404.html
├── README.md
├── assets/
│   └── honggang-wang.jpg
├── css/
│   └── site.css
└── js/
    ├── app.js
    ├── components.js
    └── data.js
```

## Edit content

Most repeatable content—research areas, publications, talks, awards, professional activities, AIM Lab highlights, and news—is stored in `js/data.js`.

- Edit the main biography and section introductions in `index.html`.
- Edit colors, typography, spacing, and responsive behavior in `css/site.css`.
- Edit interaction behavior in `js/app.js`.
- Edit the reusable section templates in `js/components.js`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then click **Save**.
6. GitHub will display the public site URL after deployment finishes.

## Use a custom domain

1. In **Settings → Pages**, enter the domain under **Custom domain**.
2. Configure the domain’s DNS records as instructed by GitHub.
3. Enable **Enforce HTTPS** once it becomes available.
4. Optionally add a file named `CNAME` to this folder containing only the custom domain, for example:

```text
www.example.com
```

## Preview locally

Because the site is fully static, you can open `index.html` directly in a browser. A small local web server is recommended when testing navigation and browser features.

## Accessibility and performance

- Semantic headings and landmarks
- Keyboard-friendly navigation and controls
- Visible focus styles
- Reduced-motion support
- Responsive layout for phones, tablets, and desktops
- Local portrait and typographic icon system
- No frameworks, trackers, or required third-party scripts

## Portrait

The supplied portrait is stored locally at `assets/honggang.png`, so it remains part of the site when published.
