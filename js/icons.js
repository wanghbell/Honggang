const paths = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  arrowUpRight: '<path d="M7 17 17 7M7 7h10v10"/>',
  brain: '<path d="M9.5 4A3.5 3.5 0 0 0 6 7.5c0 .3.04.6.11.88A3.5 3.5 0 0 0 4 11.5c0 1.08.49 2.04 1.26 2.68A3.5 3.5 0 0 0 8.5 19c.36 0 .7-.05 1-.15V4Z"/><path d="M14.5 4A3.5 3.5 0 0 1 18 7.5c0 .3-.04.6-.11.88A3.5 3.5 0 0 1 20 11.5c0 1.08-.49 2.04-1.26 2.68A3.5 3.5 0 0 1 15.5 19c-.36 0-.7-.05-1-.15V4ZM9.5 9H7.7M14.5 9h1.8M9.5 14H8M14.5 14H16"/>',
  heartPulse: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M4.5 12h4l1.5-3 3 6 1.5-3h5"/>',
  network: '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="m7 7.5 2.5 2M17 7.5l-2.5 2M7 16.5l2.5-2M17 16.5l-2.5-2"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/>',
  graduationCap: '<path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/>',
  bookOpen: '<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2V4ZM22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7V4Z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>',
  mapPin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  externalLink: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 5-4 5v3ZM14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 5-4 5v3Z"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>'
};

export function icon(name, className = '') {
  const content = paths[name] || paths.externalLink;
  return `<svg class="icon-svg ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`;
}
