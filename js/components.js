import { icon } from './icons.js';

export const header = nav => `
<div class="site-header"><div class="container nav-wrap">
  <a class="brand" href="#top"><span class="brand-mark">HW</span><span>Honggang Wang</span></a>
  <nav class="nav-links" id="nav-links" aria-label="Primary navigation">${nav.map(([n,h])=>`<a href="${h}">${n}</a>`).join('')}</nav>
  <button class="menu-button" id="menu-button" aria-label="Open navigation" aria-expanded="false">${icon('menu')}</button>
</div></div>`;

export const hero = d => `<section class="hero" id="top"><div class="container">
<div class="hero-grid"><div class="hero-copy"><p class="eyebrow">${d.eyebrow}</p><h1>${d.title}</h1><p class="lead">${d.intro}</p>
<div class="btn-row"><a class="btn primary" href="#research">Explore research ${icon('arrow')}</a><a class="btn secondary" href="#contact">Get in touch</a></div></div>
<div class="hero-visual"><div class="float-card one">IEEE Fellow</div><div class="portrait-card"><div class="portrait-inner"><div class="monogram">HW</div><div class="portrait-caption"><strong>Professor & Department Chair</strong><br><span>Computer Science and Engineering</span></div></div></div><div class="float-card two">AI · Multimedia · Health</div></div></div>
<div class="metrics">${d.metrics.map(([v,l])=>`<div class="metric"><strong>${v}</strong><span>${l}</span></div>`).join('')}</div>
</div></section>`;

export const sectionHeading = (eyebrow,title,text='') => `<div class="section-heading"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${text?`<p class="lead">${text}</p>`:''}</div>`;

export const research = items => `<section class="section alt" id="research"><div class="container">${sectionHeading('Research','Interdisciplinary work with real-world impact','A focused portfolio connecting intelligent systems, secure infrastructure, and human-centered applications.')}<div class="card-grid">${items.map(x=>`<article class="card"><div class="icon-badge">${icon(x.icon)}</div><h3>${x.title}</h3><p>${x.text}</p><div class="tag-list">${x.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></article>`).join('')}</div></div></section>`;

export const about = () => `<section class="section" id="about"><div class="container about-grid"><div class="about-sticky">${sectionHeading('Profile','Researcher, mentor, and academic builder')}</div><div><p class="lead">Professor Wang develops technologies and programs that connect rigorous computing research with healthcare, communications, security, and graduate education.</p><div class="fact-list"><div class="fact">${icon('brain')}<div><strong>Research</strong><br><span>AI, multimedia, networks, IoT, cybersecurity, and digital health.</span></div></div><div class="fact">${icon('users')}<div><strong>Leadership</strong><br><span>Academic program development, research strategy, and professional service.</span></div></div><div class="fact">${icon('book')}<div><strong>Education</strong><br><span>Project-based graduate training and mentorship for emerging technology careers.</span></div></div></div></div></div></section>`;

export const timeline = items => `<section class="section" id="leadership"><div class="container">${sectionHeading('Leadership','Selected academic and professional roles')}<div class="timeline">${items.map(([y,r,o])=>`<article class="timeline-item"><div class="timeline-year">${y}</div><div><h3>${r}</h3><p>${o}</p></div></article>`).join('')}</div></div></section>`;

export const publications = items => `<section class="section alt" id="publications"><div class="container">${sectionHeading('Publications','Research profiles and scholarly work')}<div class="card-grid">${items.map(([t,d,u])=>`<a class="card link-card" href="${u}" target="_blank" rel="noopener"><div><h3>${t}</h3><p>${d}</p></div>${icon('arrow')}</a>`).join('')}</div></div></section>`;

export const awards = items => `<section class="section" id="recognition"><div class="container">${sectionHeading('Recognition','Selected honors and distinctions')}<div class="award-grid">${items.map(x=>`<article class="card award"><div class="icon-badge">${icon(x.icon)}</div><h3>${x.title}</h3><p>${x.text}</p></article>`).join('')}</div></div></section>`;

export const contact = () => `<section class="section" id="contact"><div class="container"><div class="contact-panel"><div><p class="eyebrow" style="color:#b9fff7">Contact</p><h2>Let’s connect around research, education, and collaboration.</h2><p class="lead">For academic inquiries, research collaboration, invited talks, or graduate program engagement.</p></div><div class="contact-links"><a class="contact-link" href="mailto:honggang.wang@yu.edu">${icon('mail')} honggang.wang@yu.edu</a><div class="contact-link">${icon('pin')} New York, NY</div><a class="contact-link" href="https://scholar.google.com/citations?user=CJiNcbAAAAAJ&hl=en" target="_blank" rel="noopener">${icon('scholar')} Google Scholar</a></div></div></div></section>`;

export const footer = () => `<div class="site-footer"><div class="container footer-wrap"><span>© ${new Date().getFullYear()} Honggang Wang</span><span>Designed for GitHub Pages</span></div></div>`;
