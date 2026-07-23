import { icon } from './icons.js';

const external = (label, href, className = '') => `<a class="${className}" href="${href}" target="_blank" rel="noreferrer">${label}${icon('arrowUpRight', 'inline-icon')}</a>`;

export function Header(data) {
  return `<header class="nav-wrap"><nav class="nav container" aria-label="Primary navigation">
    <a class="brand" href="#top"><span>HW</span><strong>Honggang Wang</strong></a>
    <button class="menu-btn" aria-label="Toggle navigation" aria-expanded="false">${icon('menu')}</button>
    <div class="nav-links">${data.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div>
  </nav></header>`;
}

export function Hero(data) {
  return `<section class="hero container" id="top"><div class="hero-copy reveal">
    <div class="eyebrow">${data.eyebrow}</div><h1>${data.title} <span>${data.accent}</span></h1><p class="lead">${data.description}</p>
    <div class="hero-actions"><a class="button primary" href="#research">Explore research ${icon('chevronRight','inline-icon')}</a>${external('Google Scholar','https://scholar.google.com/citations?user=CJiNcbAAAAAJ&hl=en','button secondary')}</div>
    <div class="metrics">${data.metrics.map(([value,label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div>
  </div><div class="hero-visual reveal"><div class="portrait-card"><img src="${data.image}" alt="Portrait of Honggang Wang"><div class="portrait-fallback">HW</div><div class="status"><i></i>${data.status}</div></div><div class="orb orb-one"></div><div class="orb orb-two"></div></div></section>`;
}

export function SectionHeading(number, label, title, description = '') {
  return `<div class="section-heading reveal"><span>${number} / ${label}</span><h2>${title}</h2>${description ? `<p>${description}</p>` : '<div></div>'}</div>`;
}

export function Research(items) {
  return `<section id="research" class="section container">${SectionHeading('01','Research','Intelligence that moves from theory to real-world impact.','Research spans intelligent multimedia, secure connected systems, wireless communication, and AI-enabled healthcare.')}<div class="cards three">${items.map(item => `<article class="card reveal"><div class="icon-badge">${icon(item.icon)}</div><h3>${item.title}</h3><p>${item.text}</p><span>${item.tags}</span></article>`).join('')}</div></section>`;
}

export function FeaturedProject() {
  return `<section class="feature-band"><div class="container feature-grid"><div class="feature-copy reveal"><span>Featured project</span><h2>Secure and smart connected health</h2><p>Advancing sensing, communications, analytics, and privacy for continuous health monitoring—connecting biomedical sensors, edge intelligence, and secure data exchange.</p>${external('Read the original research overview','https://www.honggangwang.org/research')}</div><div class="signal reveal" aria-hidden="true"><div class="core">${icon('heartPulse')}</div>${['IoT','Health','Edge','Trust','Data'].map((x,i)=>`<span style="--i:${i}">${x}</span>`).join('')}</div></div></section>`;
}

export function Leadership(items) {
  return `<section id="leadership" class="section container">${SectionHeading('02','Leadership','Academic and professional leadership at global scale.')}<div class="timeline">${items.map(([year,title,detail])=>`<article class="timeline-item reveal"><b>${year}</b><div class="timeline-icon">${icon('graduationCap')}</div><div><h3>${title}</h3><p>${detail}</p></div></article>`).join('')}</div></section>`;
}

export function Publications(items) {
  return `<section id="publications" class="section container">${SectionHeading('03','Publications','Selected scholarly footprint.')}<div class="publication-grid"><article class="book-card reveal"><div class="book-cover"><small>SPRINGER</small><div>${icon('bookOpen')}<strong>Wireless<br>Health</strong></div><span>Honggang Wang et al.</span></div><div><span class="tag">Book</span><h3>Wireless Health</h3><p>A foundational treatment of wireless technologies, sensing, communications, and systems for modern healthcare.</p>${external('View publication','https://link.springer.com/book/10.1007/978-3-319-47946-0')}</div></article><div class="pub-links reveal">${items.map(([label,source,url])=>`<a href="${url}" target="_blank" rel="noreferrer"><span>${label}</span><b>${source} ${icon('arrowUpRight','inline-icon')}</b></a>`).join('')}</div></div></section>`;
}

export function Awards(items) {
  return `<section id="awards" class="section container">${SectionHeading('04','Recognition','Recognition for research, service, and leadership.')}<div class="award-strip reveal">${items.map(item=>`<div><span class="award-icon">${icon(item.icon)}</span><strong>${item.label}</strong><span>${item.detail}</span></div>`).join('')}</div></section>`;
}

export function Contact() {
  return `<section id="contact" class="contact-section"><div class="container contact-grid reveal"><div><span>Let’s connect</span><h2>Research, collaboration, speaking, and academic leadership.</h2></div><div class="contact-actions"><a href="mailto:Honggang.wang@yu.edu">${icon('mail')}<span>Honggang.wang@yu.edu</span>${icon('arrowUpRight','inline-icon')}</a><a href="https://www.yu.edu/faculty/pages/wang-honggang" target="_blank" rel="noreferrer">${icon('externalLink')}<span>Yeshiva University profile</span>${icon('arrowUpRight','inline-icon')}</a><p>${icon('mapPin')}<span>Katz School of Science and Health<br>205 Lexington Avenue, New York, NY 10016</span></p></div></div></section>`;
}

export function Footer() {
  return `<footer><div class="container"><span>© <span id="year"></span> Honggang Wang</span><span>Modular GitHub Pages site</span></div></footer>`;
}
