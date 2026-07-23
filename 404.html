(function () {
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const backTop = document.querySelector(".back-top");

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    root.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
    root.classList.toggle("menu-open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  const sections = [...document.querySelectorAll("[data-nav]")];
  const navLinks = [...nav.querySelectorAll("a")];
  const setActive = () => {
    const position = window.scrollY + 160;
    let current = sections[0].dataset.nav;
    sections.forEach(s => { if (s.offsetTop <= position) current = s.dataset.nav; });
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
    header.classList.toggle("scrolled", window.scrollY > 12);
    backTop.classList.toggle("visible", window.scrollY > 700);
  };
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  document.querySelectorAll(".accordion-trigger").forEach(button => {
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      document.getElementById(button.getAttribute("aria-controls")).hidden = isOpen;
    });
  });

  let publicationFilter = "All";
  const search = document.getElementById("publication-search");
  document.getElementById("publication-filters").addEventListener("click", e => {
    const button = e.target.closest("button");
    if (!button) return;
    publicationFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach(b => b.classList.toggle("active", b === button));
    window.renderPublications(publicationFilter, search.value);
  });
  search.addEventListener("input", () => window.renderPublications(publicationFilter, search.value));

  const archiveToggle = document.querySelector(".archive-toggle");
  archiveToggle.addEventListener("click", () => {
    const archive = document.getElementById("awards-archive");
    const open = archiveToggle.getAttribute("aria-expanded") === "true";
    archiveToggle.setAttribute("aria-expanded", String(!open));
    archive.classList.toggle("open", !open);
    archiveToggle.innerHTML = `${open ? "View full archive" : "Hide archive"} <span aria-hidden="true">${open ? "＋" : "−"}</span>`;
  });

  let newsExpanded = false;
  const moreNews = document.getElementById("more-news");
  moreNews.addEventListener("click", () => {
    newsExpanded = !newsExpanded;
    window.renderNews(newsExpanded);
    moreNews.textContent = newsExpanded ? "Show fewer updates" : "Show more news";
  });

  document.querySelectorAll("[data-copy]").forEach(button => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = "Copied";
        setTimeout(() => { button.textContent = "Copy"; }, 1600);
      } catch (_) {
        window.location.href = `mailto:${button.dataset.copy}`;
      }
    });
  });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.getElementById("year").textContent = new Date().getFullYear();

  const observer = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px" }) : null;
  document.querySelectorAll(".reveal").forEach(el => observer ? observer.observe(el) : el.classList.add("visible"));
})();
