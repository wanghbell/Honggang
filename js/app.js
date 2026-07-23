import { site } from './data.js';
import { Header, Hero, Research, FeaturedProject, Leadership, Publications, Awards, Contact, Footer } from './components.js';
import { icon } from './icons.js';

const app = document.querySelector('#app');
app.innerHTML = `${Header(site.navigation)}<main>${Hero(site.hero)}<section class="ticker" aria-label="Research areas"><div>AI & MACHINE LEARNING · MULTIMEDIA SYSTEMS · INTERNET OF THINGS · CYBERSECURITY · CONNECTED HEALTH · 5G/6G NETWORKS · EDGE INTELLIGENCE · AI & MACHINE LEARNING · MULTIMEDIA SYSTEMS · INTERNET OF THINGS · CYBERSECURITY · CONNECTED HEALTH · 5G/6G NETWORKS · EDGE INTELLIGENCE ·</div></section>${Research(site.research)}${FeaturedProject()}${Leadership(site.timeline)}${Publications(site.publications)}${Awards(site.awards)}${Contact()}</main>${Footer()}`;

const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.innerHTML = icon(open ? 'close' : 'menu');
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.innerHTML = icon('menu');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('#year').textContent = new Date().getFullYear();
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => { glow.style.transform = `translate(${e.clientX - 160}px,${e.clientY - 160}px)`; });
const portrait = document.querySelector('.portrait-card img');
portrait?.addEventListener('error', e => { e.target.style.display = 'none'; });
