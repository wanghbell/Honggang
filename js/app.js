import { data } from './data.js';
import { header, hero, about, research, timeline, publications, awards, contact, footer } from './components.js';

document.querySelector('#site-header').innerHTML = header(data.nav);
document.querySelector('#main').innerHTML = [hero(data.hero),about(),research(data.research),timeline(data.timeline),publications(data.publications),awards(data.awards),contact()].join('');
document.querySelector('#site-footer').innerHTML = footer();

const button = document.querySelector('#menu-button');
const nav = document.querySelector('#nav-links');
button.addEventListener('click',()=>{ const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded',String(open)); });
nav.addEventListener('click',()=>{ nav.classList.remove('open'); button.setAttribute('aria-expanded','false'); });
