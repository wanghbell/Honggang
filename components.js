:root {
  --ink: #10213a;
  --ink-soft: #496079;
  --navy: #071d38;
  --blue: #1769aa;
  --blue-dark: #0e4f89;
  --sky: #e9f4ff;
  --sky-deep: #cae6ff;
  --tint: #f4f8fc;
  --white: #fff;
  --line: #dbe6f0;
  --teal: #25a8a1;
  --shadow: 0 22px 60px rgba(26, 76, 120, .12);
  --shadow-soft: 0 12px 35px rgba(31, 76, 111, .08);
  --radius: 22px;
  --container: 1180px;
  --header-h: 82px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: calc(var(--header-h) + 18px); }
body {
  margin: 0;
  color: var(--ink);
  background: var(--white);
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button, input { font: inherit; }
button { color: inherit; }
h1, h2, h3, p, blockquote { margin-top: 0; }
h1, h2, h3, .brand { font-family: "Segoe UI", Arial, sans-serif; }
h1, h2, h3 { line-height: 1.14; letter-spacing: -.035em; }
h2 { margin-bottom: 0; font-size: clamp(2.2rem, 4.5vw, 4rem); font-weight: 700; }
h3 { margin-bottom: .65rem; }
p { color: var(--ink-soft); }
::selection { background: var(--sky-deep); color: var(--navy); }
:focus-visible { outline: 3px solid #53aef2; outline-offset: 4px; border-radius: 4px; }

.container { width: min(calc(100% - 48px), var(--container)); margin-inline: auto; }
.section { position: relative; padding: 112px 0; }
.section-tint { background: var(--tint); }
.section-navy { color: var(--white); background: var(--navy); overflow: hidden; }
.section-navy::before {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 85% 20%, rgba(43, 139, 200, .18), transparent 28%), linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
  background-size: auto, 48px 48px, 48px 48px; content: "";
}
.section-navy > .container { position: relative; z-index: 1; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.skip-link { position: fixed; z-index: 1000; top: 8px; left: 8px; padding: 10px 16px; background: var(--white); transform: translateY(-150%); }
.skip-link:focus { transform: translateY(0); }
.kicker, .eyebrow, .mini-label { color: var(--blue); font-size: .77rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
.kicker { margin-bottom: 16px; }
.mini-label { display: block; margin-bottom: 9px; font-size: .68rem; }
.section-heading { max-width: 820px; margin-bottom: 54px; }
.heading-row { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(250px, .62fr); gap: 56px; align-items: end; max-width: none; }
.heading-row > p { margin: 0 0 6px; }
.heading-row.light p { color: #b8ccde; }

.site-header { position: fixed; z-index: 100; top: 0; left: 0; width: 100%; transition: .25s ease; }
.site-header.scrolled { background: rgba(255,255,255,.94); border-bottom: 1px solid rgba(219,230,240,.9); box-shadow: 0 8px 28px rgba(17,63,98,.06); backdrop-filter: blur(16px); }
.nav-shell { display: flex; align-items: center; justify-content: space-between; width: min(calc(100% - 48px), 1320px); min-height: var(--header-h); margin: auto; gap: 24px; }
.brand { display: inline-flex; align-items: center; gap: 12px; flex: 0 0 auto; }
.brand-mark { display: inline-grid; place-items: center; width: 42px; height: 42px; color: white; background: linear-gradient(145deg, var(--blue), #3194d4); border-radius: 12px; font-size: .75rem; font-weight: 800; letter-spacing: .05em; box-shadow: 0 8px 22px rgba(23,105,170,.22); }
.brand-copy { display: grid; line-height: 1.2; }
.brand-copy strong { font-size: .95rem; letter-spacing: -.02em; }
.brand-copy small { margin-top: 4px; color: var(--ink-soft); font-family: "Segoe UI", Arial, sans-serif; font-size: .66rem; text-transform: uppercase; letter-spacing: .09em; }
.site-nav { display: flex; align-items: center; gap: clamp(13px, 1.6vw, 25px); }
.site-nav a { position: relative; padding: 8px 0; color: #425a72; font-size: .77rem; font-weight: 600; white-space: nowrap; }
.site-nav a::after { position: absolute; left: 0; bottom: 2px; width: 0; height: 2px; background: var(--blue); content: ""; transition: width .25s ease; }
.site-nav a:hover, .site-nav a.active { color: var(--blue); }
.site-nav a:hover::after, .site-nav a.active::after { width: 100%; }
.menu-toggle { display: none; width: 44px; height: 44px; padding: 10px; border: 0; background: transparent; cursor: pointer; }
.menu-toggle span:not(.sr-only) { display: block; width: 22px; height: 2px; margin: 5px auto; background: var(--ink); transition: .2s; }

.hero { min-height: 760px; padding-top: 155px; padding-bottom: 52px; overflow: hidden; background: linear-gradient(128deg, #f9fcff 0%, #edf7ff 54%, #f8fbff 100%); }
.hero::before { position: absolute; width: 460px; height: 460px; top: -230px; left: 43%; border: 1px solid rgba(23,105,170,.08); border-radius: 50%; content: ""; }
.hero-orb { position: absolute; border-radius: 50%; filter: blur(2px); }
.hero-orb-one { width: 320px; height: 320px; right: -100px; top: 120px; background: rgba(72, 184, 216, .09); }
.hero-orb-two { width: 180px; height: 180px; left: -70px; bottom: 50px; background: rgba(23,105,170,.06); }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.14fr) minmax(360px, .72fr); align-items: center; gap: clamp(50px, 7vw, 100px); }
.eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; letter-spacing: .11em; }
.eyebrow span { width: 28px; height: 2px; background: var(--teal); }
.hero h1 { max-width: 740px; margin-bottom: 26px; font-size: clamp(3.15rem, 6vw, 5.9rem); font-weight: 700; line-height: 1.02; }
.hero h1 em { color: var(--blue); font-style: normal; }
.hero-lead { max-width: 660px; margin-bottom: 34px; font-size: 1.15rem; line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 43px; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-height: 52px; padding: 0 23px; border: 1px solid transparent; border-radius: 11px; font-size: .88rem; font-weight: 700; cursor: pointer; transition: transform .2s, box-shadow .2s, background .2s; }
.button:hover { transform: translateY(-2px); }
.button-primary { color: var(--white); background: var(--blue); box-shadow: 0 13px 30px rgba(23,105,170,.22); }
.button-primary:hover { background: var(--blue-dark); box-shadow: 0 16px 34px rgba(23,105,170,.28); }
.button-ghost { color: var(--blue); border-color: #bdd7ec; background: rgba(255,255,255,.7); }
.button-ghost:hover { background: var(--white); }
.button-light { color: var(--navy); background: var(--white); }
.credential-row { display: flex; flex-wrap: wrap; gap: 0; margin: 0; padding: 0; list-style: none; }
.credential-row li { display: grid; padding: 0 24px; border-right: 1px solid var(--line); }
.credential-row li:first-child { padding-left: 0; }
.credential-row li:last-child { border: 0; }
.credential-row strong { font-family: "Segoe UI", Arial, sans-serif; color: var(--navy); font-size: 1.05rem; }
.credential-row span { color: #74879a; font-size: .68rem; text-transform: uppercase; letter-spacing: .08em; }
.portrait-wrap { position: relative; padding: 20px; }
.portrait-frame { position: relative; max-width: 465px; margin: auto; padding: 12px; background: rgba(255,255,255,.78); border: 1px solid rgba(255,255,255,.9); border-radius: 42% 42% 20px 20px; box-shadow: var(--shadow); }
.portrait-frame::before { position: absolute; z-index: -1; inset: -18px 28px 26px -22px; border: 1px solid rgba(23,105,170,.2); border-radius: 48% 48% 30px 30px; content: ""; }
.portrait-frame img { width: 100%; aspect-ratio: .86; object-fit: cover; object-position: center; border-radius: 41% 41% 14px 14px; }
.portrait-accent { position: absolute; width: 70px; height: 70px; right: -24px; top: 45px; border-radius: 50%; background: radial-gradient(circle, var(--teal) 2px, transparent 2.5px); background-size: 10px 10px; opacity: .4; }
.role-card { position: absolute; right: -25px; bottom: 55px; display: flex; align-items: center; gap: 12px; max-width: 245px; padding: 14px 17px; background: rgba(255,255,255,.94); border: 1px solid var(--line); border-radius: 14px; box-shadow: var(--shadow-soft); }
.role-card strong, .role-card span { display: block; }
.role-card strong { font-family: "Manrope", sans-serif; font-size: .78rem; }
.role-card div span { color: var(--ink-soft); font-size: .66rem; line-height: 1.35; }
.role-icon { display: grid; place-items: center; flex: 0 0 33px; height: 33px; color: var(--blue); background: var(--sky); border-radius: 9px; }
.affiliation-bar { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; margin-top: 52px; padding-top: 28px; border-top: 1px solid rgba(23,105,170,.12); }
.affiliation-bar span { padding: 0 25px; border-right: 1px solid var(--line); color: #60778e; font-size: .75rem; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
.affiliation-bar span:last-child { border: 0; }

.intro-section { padding-block: 100px; }
.split-intro { display: grid; grid-template-columns: .86fr 1.14fr; gap: 110px; }
.split-intro .section-heading { margin: 0; }
.intro-copy { padding-top: 4px; }
.intro-copy > p { font-size: 1.04rem; }
.intro-copy blockquote { position: relative; margin: 35px 0 0; padding: 24px 0 0 35px; border-top: 1px solid var(--line); color: var(--blue-dark); font-family: "Segoe UI", Arial, sans-serif; font-size: 1.18rem; font-weight: 600; font-style: italic; }
.intro-copy blockquote::before { position: absolute; left: 0; top: 14px; content: "“"; color: var(--teal); font-family: Georgia, serif; font-size: 3.4rem; font-style: normal; }

.card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.research-card { position: relative; min-height: 255px; padding: 30px; overflow: hidden; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); transition: transform .25s, box-shadow .25s, border-color .25s; }
.research-card:hover { transform: translateY(-5px); border-color: #b8d8ef; box-shadow: var(--shadow-soft); }
.card-icon { display: inline-grid; place-items: center; min-width: 45px; height: 45px; padding: 0 10px; color: var(--blue); background: var(--sky); border-radius: 12px; font-family: "Segoe UI", Arial, sans-serif; font-size: .78rem; font-weight: 800; }
.research-card h3 { max-width: 260px; margin-top: 24px; font-size: 1.14rem; letter-spacing: -.02em; }
.research-card p { margin: 0; font-size: .87rem; line-height: 1.65; }
.card-index { position: absolute; right: 20px; bottom: 11px; color: #edf2f7; font-family: "Segoe UI", Arial, sans-serif; font-size: 2.7rem; font-weight: 800; }
.project-header { margin: 76px 0 25px; }
.project-header h3 { font-size: 1.75rem; }
.project-list { border-top: 1px solid var(--line); }
.project { display: grid; grid-template-columns: 80px 1fr; gap: 25px; padding: 34px 0; border-bottom: 1px solid var(--line); }
.project-number { color: var(--blue); font-family: "Segoe UI", Arial, sans-serif; font-weight: 700; }
.pill { display: inline-block; padding: 4px 9px; color: var(--blue-dark); background: var(--sky); border-radius: 999px; font-size: .63rem; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; }
.project h3 { margin-top: 12px; font-size: 1.25rem; }
.project p { max-width: 890px; margin-bottom: 0; }

.feature-band { display: grid; grid-template-columns: 120px 1fr 60px; align-items: center; gap: 24px; margin-bottom: 27px; padding: 32px 37px; color: var(--white); background: linear-gradient(125deg, var(--blue-dark), var(--blue)); border-radius: var(--radius); box-shadow: 0 18px 42px rgba(23,105,170,.17); }
.feature-number { font-family: "Segoe UI", Arial, sans-serif; font-size: 2.3rem; font-weight: 800; }
.feature-band .mini-label { color: #aee7e5; }
.feature-band h3 { margin: 0; font-size: 1.38rem; }
.feature-band p { margin: 7px 0 0; color: #d8e9f7; font-size: .88rem; }
.feature-symbol { justify-self: end; font-size: 1.6rem; }
.accordion-list { border-top: 1px solid var(--line); }
.accordion { border-bottom: 1px solid var(--line); }
.accordion-trigger { display: grid; grid-template-columns: 50px 1fr 40px; align-items: center; gap: 18px; width: 100%; padding: 24px 5px; border: 0; background: transparent; text-align: left; cursor: pointer; }
.accordion-icon { display: grid; place-items: center; width: 44px; height: 44px; color: var(--blue); background: var(--sky); border-radius: 12px; }
.accordion-title { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; }
.accordion-title strong { font-family: "Segoe UI", Arial, sans-serif; font-size: 1.02rem; }
.accordion-title small { color: #788b9d; }
.accordion-plus { justify-self: end; color: var(--blue); font-size: 1.2rem; transition: transform .2s; }
.accordion-trigger[aria-expanded="true"] .accordion-plus { transform: rotate(45deg); }
.accordion-panel { padding: 0 45px 25px 73px; }
.accordion-panel ul { columns: 2; column-gap: 50px; margin: 0; padding: 0; list-style: none; }
.accordion-panel li { break-inside: avoid; position: relative; padding: 9px 0 9px 18px; color: var(--ink-soft); font-size: .87rem; }
.accordion-panel li::before { position: absolute; left: 0; top: 19px; width: 5px; height: 5px; background: var(--teal); border-radius: 50%; content: ""; }

.publication-stat { display: grid; justify-items: end; }
.publication-stat strong { font-family: "Segoe UI", Arial, sans-serif; font-size: 2.3rem; }
.publication-stat span { color: #91abc0; font-size: .76rem; text-transform: uppercase; letter-spacing: .08em; }
.book-feature { display: grid; grid-template-columns: 220px 1fr; align-items: center; gap: 60px; margin-bottom: 62px; padding: 38px 45px; background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.1); border-radius: var(--radius); }
.book-cover { display: flex; flex-direction: column; justify-content: flex-end; aspect-ratio: .72; padding: 25px 22px; color: var(--white); background: linear-gradient(155deg, #217bb7 5%, #0b4a80 50%, #062542 100%); border-radius: 4px 12px 12px 4px; box-shadow: 15px 18px 35px rgba(0,0,0,.25); transform: rotate(-2deg); }
.book-cover::before { width: 42px; height: 4px; margin-bottom: auto; background: var(--teal); content: ""; }
.book-cover span { font-size: .73rem; letter-spacing: .18em; }
.book-cover strong { font-family: "Segoe UI", Arial, sans-serif; font-size: 2rem; line-height: 1; }
.book-cover small { margin-top: 20px; color: #c2dcf0; font-size: .59rem; line-height: 1.5; }
.book-copy .mini-label { color: #6fd5ce; }
.book-copy h3 { font-size: 2rem; }
.book-copy p { max-width: 620px; color: #bdcede; }
.book-copy .book-meta { color: #829db4; font-size: .76rem; }
.text-link { display: inline-flex; gap: 10px; font-size: .85rem; font-weight: 700; }
.light-link { color: #9fdbff; }
.publication-tools { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 22px; padding-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,.12); }
.search-field { display: flex; align-items: center; gap: 10px; min-width: 280px; padding: 0 14px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12); border-radius: 10px; }
.search-field span { color: #80a4c3; font-size: 1.2rem; }
.search-field input { width: 100%; padding: 11px 0; color: white; background: transparent; border: 0; outline: 0; }
.search-field input::placeholder { color: #849db3; }
.filter-group { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 7px; }
.filter-button { padding: 8px 13px; color: #a9bdcd; background: transparent; border: 1px solid rgba(255,255,255,.14); border-radius: 999px; font-size: .7rem; cursor: pointer; }
.filter-button.active, .filter-button:hover { color: var(--navy); background: #bde8ff; border-color: #bde8ff; }
.publication-item { display: grid; grid-template-columns: 78px 1fr 30px; gap: 22px; padding: 24px 5px; border-bottom: 1px solid rgba(255,255,255,.09); transition: background .2s, padding .2s; }
.publication-item:hover { padding-inline: 15px; background: rgba(255,255,255,.035); }
.publication-year { padding-top: 3px; color: #72c9c4; font-family: "Segoe UI", Arial, sans-serif; font-size: .8rem; font-weight: 700; }
.publication-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 8px; }
.publication-tags span { color: #87a8c1; font-size: .63rem; text-transform: uppercase; letter-spacing: .07em; }
.publication-tags span:first-child { color: #7ddad4; }
.publication-body h3 { margin-bottom: 6px; font-size: 1rem; line-height: 1.5; letter-spacing: -.01em; }
.publication-body p { margin: 0; color: #7f9ab0; font-size: .75rem; }
.publication-arrow { color: #67849c; }
.empty-state { padding: 40px; text-align: center; }
.section-action { margin-top: 35px; text-align: center; }

.timeline { position: relative; max-width: 950px; margin-inline: auto; }
.timeline::before { position: absolute; left: 115px; top: 10px; bottom: 10px; width: 1px; background: var(--line); content: ""; }
.timeline-item { position: relative; display: grid; grid-template-columns: 90px 24px 1fr; gap: 15px; margin-bottom: 16px; }
.timeline-year { padding-top: 27px; color: var(--blue); font-family: "Segoe UI", Arial, sans-serif; font-size: .9rem; font-weight: 800; text-align: right; }
.timeline-dot { position: relative; z-index: 1; width: 11px; height: 11px; margin: 31px auto 0; background: var(--white); border: 3px solid var(--blue); border-radius: 50%; box-shadow: 0 0 0 5px var(--white); }
.timeline-card { padding: 22px 26px; background: var(--white); border: 1px solid var(--line); border-radius: 15px; transition: transform .2s, box-shadow .2s; }
.timeline-card:hover { transform: translateX(4px); box-shadow: var(--shadow-soft); }
.timeline-card h3 { margin: 10px 0 5px; font-size: 1.05rem; }
.timeline-card p { margin: 0; font-size: .88rem; }
.timeline-card small { color: #8495a7; }

.award-feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 17px; }
.award-card { padding: 27px; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); transition: transform .22s, box-shadow .22s; }
.award-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-soft); }
.award-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
.award-top strong { color: var(--blue); font-family: "Segoe UI", Arial, sans-serif; font-size: .76rem; }
.award-card h3 { font-size: 1.08rem; }
.award-card p { margin: 0; font-size: .82rem; line-height: 1.6; }
.archive-panel { margin-top: 26px; padding: 28px 32px; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); }
.archive-heading { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.archive-heading h3 { margin: 0; font-size: 1.35rem; }
.archive-toggle { display: inline-flex; align-items: center; gap: 12px; padding: 10px 0; color: var(--blue); background: transparent; border: 0; font-size: .8rem; font-weight: 700; cursor: pointer; }
.archive-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0 40px; max-height: 0; margin: 0; padding: 0; overflow: hidden; list-style: none; transition: max-height .45s ease, margin .3s; }
.archive-list.open { max-height: 1800px; margin-top: 25px; }
.archive-list li { display: grid; grid-template-columns: 32px 1fr; gap: 10px; padding: 12px 0; border-top: 1px solid var(--line); color: var(--ink-soft); font-size: .83rem; }
.archive-list li span { color: var(--blue); font-size: .68rem; font-weight: 700; }

.lab-section { overflow: hidden; color: var(--white); background: linear-gradient(120deg, #0a3f6d, #0d5b8d 60%, #0a7590); }
.lab-section::before { position: absolute; inset: 0; opacity: .18; background-image: radial-gradient(circle at center, white 1px, transparent 1.4px); background-size: 32px 32px; content: ""; }
.lab-grid { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr .85fr; align-items: center; gap: 90px; }
.lab-copy .kicker { color: #88e5df; }
.lab-copy h2 { max-width: 690px; }
.lab-lead { max-width: 620px; margin: 25px 0 30px; color: #c3dceb; font-size: 1.08rem; }
.lab-points { margin-bottom: 34px; }
.lab-point { display: grid; grid-template-columns: 45px 1fr; gap: 16px; padding: 17px 0; border-top: 1px solid rgba(255,255,255,.13); }
.lab-point > span { display: grid; place-items: center; width: 36px; height: 36px; color: #8ce8e1; border: 1px solid rgba(140,232,225,.3); border-radius: 50%; font-size: .65rem; }
.lab-point h3 { margin: 0 0 4px; font-size: .94rem; }
.lab-point p { margin: 0; color: #a9c8db; font-size: .8rem; }
.lab-section .button-primary { color: #083352; background: #9ce7e1; box-shadow: none; }
.lab-visual { position: relative; display: grid; place-items: center; min-height: 500px; }
.lab-visual::before, .lab-visual::after { position: absolute; border: 1px solid rgba(255,255,255,.16); border-radius: 50%; content: ""; }
.lab-visual::before { width: 380px; height: 380px; }
.lab-visual::after { width: 255px; height: 255px; }
.lab-core { position: relative; z-index: 2; display: grid; place-items: center; width: 155px; height: 155px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.28); border-radius: 50%; backdrop-filter: blur(10px); box-shadow: 0 20px 50px rgba(0,0,0,.12); align-content: center; }
.lab-core strong { font-family: "Segoe UI", Arial, sans-serif; font-size: 2.5rem; line-height: 1; }
.lab-core span { color: #aee1e9; font-size: .65rem; letter-spacing: .1em; text-transform: uppercase; }
.orbit { position: absolute; z-index: 3; display: grid; place-items: center; width: 70px; height: 70px; color: #083352; background: #b5ede8; border: 8px solid rgba(181,237,232,.18); background-clip: padding-box; border-radius: 50%; font-family: "Segoe UI", Arial, sans-serif; font-size: .7rem; font-weight: 800; }
.orbit-one { top: 45px; left: 31%; }
.orbit-two { right: 4%; top: 45%; }
.orbit-three { left: 7%; bottom: 23%; }
.lab-location { position: absolute; bottom: 0; padding: 10px 16px; color: #c0dce9; background: rgba(4,31,55,.33); border: 1px solid rgba(255,255,255,.12); border-radius: 999px; font-size: .68rem; }

.news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.news-card { display: flex; flex-direction: column; min-height: 240px; padding: 28px; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); transition: transform .22s, box-shadow .22s, border-color .22s; }
.news-card:hover { transform: translateY(-4px); border-color: #b8d8ef; box-shadow: var(--shadow-soft); }
.news-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 25px; }
.news-meta span { color: var(--blue); font-size: .66rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.news-meta time { color: #8194a5; font-size: .72rem; }
.news-card h3 { font-size: 1.08rem; line-height: 1.4; }
.news-card p { margin: auto 0 0; font-size: .84rem; }

.contact-section { background: linear-gradient(135deg, #f5faff, #e9f5ff); }
.contact-grid { display: grid; grid-template-columns: 1fr .9fr; align-items: center; gap: 100px; }
.contact-copy h2 { margin-bottom: 22px; font-size: clamp(3rem, 6vw, 5.3rem); }
.contact-copy p { max-width: 560px; margin-bottom: 30px; font-size: 1.05rem; }
.contact-card { padding: 35px; background: rgba(255,255,255,.88); border: 1px solid rgba(255,255,255,.95); border-radius: 25px; box-shadow: var(--shadow); backdrop-filter: blur(12px); }
.contact-item { display: grid; grid-template-columns: 45px 1fr; gap: 15px; padding: 19px 0; border-bottom: 1px solid var(--line); }
.contact-icon { display: grid; place-items: center; width: 40px; height: 40px; color: var(--blue); background: var(--sky); border-radius: 11px; font-weight: 800; }
.contact-item small { display: block; color: #7b8ea0; font-size: .66rem; text-transform: uppercase; letter-spacing: .08em; }
.contact-item a { color: var(--ink); font-weight: 600; }
.contact-item p { margin: 3px 0 0; font-size: .88rem; line-height: 1.55; }
.copy-button { margin-left: 10px; padding: 2px 6px; color: var(--blue); background: transparent; border: 0; font-size: .65rem; cursor: pointer; }
.contact-links { display: flex; flex-wrap: wrap; gap: 12px 20px; padding-top: 22px; }
.contact-links a { color: var(--blue); font-size: .75rem; font-weight: 700; }

.site-footer { padding: 45px 0; color: #b0c2d2; background: #06182d; }
.footer-grid { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 45px; }
.footer-brand { display: inline-flex; align-items: center; gap: 12px; color: white; }
.footer-grid p { margin: 7px 0 0; color: #748da4; font-size: .74rem; }
.footer-links { display: flex; flex-wrap: wrap; gap: 20px; font-size: .72rem; }
.footer-links a:hover { color: white; }
.footer-grid .copyright { margin: 0; }
.back-top { position: fixed; z-index: 80; right: 24px; bottom: 24px; display: grid; place-items: center; width: 44px; height: 44px; color: white; background: var(--blue); border: 0; border-radius: 50%; box-shadow: 0 10px 25px rgba(23,105,170,.28); cursor: pointer; opacity: 0; transform: translateY(15px); pointer-events: none; transition: .25s; }
.back-top.visible { opacity: 1; transform: none; pointer-events: auto; }

.reveal { opacity: 1; transform: none; }
.js .reveal { opacity: 0; transform: translateY(18px); transition: opacity .6s ease var(--delay, 0ms), transform .6s ease var(--delay, 0ms); }
.js .reveal.visible { opacity: 1; transform: none; }
[hidden] { display: none !important; }
.error-page { display: grid; min-height: 100vh; place-items: center; text-align: center; background: var(--tint); }
.error-page main { max-width: 600px; padding: 40px; }
.error-page .brand-mark { margin-bottom: 25px; }
.error-page h1 { margin-bottom: 15px; font-size: 3.2rem; }
.error-page .button { margin-top: 20px; }

@media (max-width: 1120px) {
  :root { --header-h: 72px; }
  .site-nav { position: fixed; top: var(--header-h); left: 16px; right: 16px; display: grid; gap: 0; max-height: 0; padding: 0 22px; overflow: hidden; background: rgba(255,255,255,.98); border-radius: 0 0 16px 16px; box-shadow: var(--shadow); transition: max-height .35s, padding .35s; }
  .site-nav.open { max-height: calc(100vh - var(--header-h) - 20px); padding-block: 14px 20px; overflow-y: auto; }
  .site-nav a { padding: 10px 2px; border-bottom: 1px solid var(--line); font-size: .85rem; }
  .site-nav a::after { display: none; }
  .menu-toggle { display: block; }
  .menu-toggle[aria-expanded="true"] span:nth-of-type(2) { transform: translateY(7px) rotate(45deg); }
  .menu-toggle[aria-expanded="true"] span:nth-of-type(3) { opacity: 0; }
  .menu-toggle[aria-expanded="true"] span:nth-of-type(4) { transform: translateY(-7px) rotate(-45deg); }
  .hero-grid { grid-template-columns: 1.15fr .85fr; gap: 45px; }
  .hero h1 { font-size: clamp(3rem, 6vw, 4.7rem); }
  .role-card { right: -8px; }
  .award-feature-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 850px) {
  .section { padding: 85px 0; }
  .hero { padding-top: 125px; }
  .hero-grid, .split-intro, .lab-grid, .contact-grid { grid-template-columns: 1fr; }
  .hero-grid { gap: 65px; }
  .portrait-wrap { width: min(100%, 500px); margin: auto; }
  .credential-row li { padding-inline: 15px; }
  .split-intro, .lab-grid, .contact-grid { gap: 50px; }
  .heading-row { grid-template-columns: 1fr; gap: 18px; }
  .heading-row > p { max-width: 620px; }
  .card-grid { grid-template-columns: repeat(2, 1fr); }
  .accordion-panel ul { columns: 1; }
  .book-feature { grid-template-columns: 180px 1fr; gap: 35px; }
  .publication-tools { align-items: stretch; flex-direction: column; }
  .search-field { min-width: 0; }
  .filter-group { justify-content: flex-start; }
  .news-grid { grid-template-columns: repeat(2, 1fr); }
  .lab-visual { max-width: 540px; width: 100%; margin: auto; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .footer-grid .copyright { grid-column: 1 / -1; }
}

@media (max-width: 600px) {
  .container, .nav-shell { width: min(calc(100% - 30px), var(--container)); }
  .section { padding: 70px 0; }
  h2 { font-size: 2.3rem; }
  .brand-copy small { display: none; }
  .hero { min-height: auto; padding-top: 110px; }
  .hero h1 { font-size: clamp(2.65rem, 14vw, 4rem); }
  .hero-lead { font-size: 1rem; }
  .hero-actions .button { flex: 1 1 160px; }
  .credential-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 0; }
  .credential-row li { padding-left: 0; }
  .credential-row li:nth-child(2) { border: 0; }
  .portrait-wrap { padding: 8px; }
  .role-card { position: relative; right: auto; bottom: auto; max-width: none; margin: -25px 18px 0; }
  .affiliation-bar { align-items: flex-start; flex-direction: column; gap: 8px; }
  .affiliation-bar span { padding: 0; border: 0; font-size: .66rem; }
  .card-grid, .award-feature-grid, .news-grid { grid-template-columns: 1fr; }
  .project { grid-template-columns: 45px 1fr; gap: 10px; }
  .feature-band { grid-template-columns: 1fr; padding: 27px; }
  .feature-symbol { display: none; }
  .accordion-title { align-items: flex-start; flex-direction: column; gap: 2px; }
  .accordion-trigger { grid-template-columns: 44px 1fr 25px; gap: 10px; }
  .accordion-panel { padding-left: 54px; padding-right: 5px; }
  .book-feature { grid-template-columns: 1fr; padding: 28px; }
  .book-cover { width: 165px; }
  .publication-item { grid-template-columns: 52px 1fr; gap: 12px; }
  .publication-arrow { display: none; }
  .timeline::before { left: 7px; }
  .timeline-item { grid-template-columns: 15px 1fr; gap: 13px; }
  .timeline-year { grid-column: 2; padding: 0; text-align: left; }
  .timeline-dot { grid-column: 1; grid-row: 1 / span 2; margin: 5px 0 0 2px; }
  .timeline-card { grid-column: 2; padding: 20px; }
  .archive-heading { align-items: flex-start; flex-direction: column; }
  .archive-list { grid-template-columns: 1fr; }
  .lab-visual { min-height: 390px; transform: scale(.86); }
  .lab-visual::before { width: 330px; height: 330px; }
  .lab-visual::after { width: 230px; height: 230px; }
  .orbit-one { left: 25%; }
  .orbit-two { right: -2%; }
  .orbit-three { left: -2%; }
  .contact-card { padding: 25px 20px; }
  .footer-grid { grid-template-columns: 1fr; gap: 28px; }
  .footer-grid .copyright { grid-column: auto; }
  .footer-links { display: grid; grid-template-columns: 1fr 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
  .js .reveal { opacity: 1; transform: none; }
}

@media print {
  .site-header, .hero-orb, .hero-actions, .back-top, .publication-tools, .section-action, .contact-links { display: none !important; }
  .section { padding: 35px 0; break-inside: avoid; }
  .hero { min-height: 0; padding-top: 35px; }
  .section-navy, .lab-section { color: var(--ink); background: white; }
  .book-copy p, .section-navy p, .lab-point p, .lab-lead { color: var(--ink-soft); }
  .archive-list { max-height: none; }
}
