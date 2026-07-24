(function () {
  const d = window.SITE_DATA;
  const byId = (id) => document.getElementById(id);

  const renderResearch = () => {
    byId("research-grid").innerHTML = d.research.map((item, i) => `
      <article class="research-card reveal" style="--delay:${i * 45}ms">
        <span class="card-icon" aria-hidden="true">${item.icon}</span>
        <h3>${item.title}</h3><p>${item.text}</p><span class="card-index">0${i + 1}</span>
      </article>`).join("");
    byId("project-list").innerHTML = d.projects.map((p, i) => `
      <article class="project reveal" style="--delay:${i * 55}ms">
        <span class="project-number">${p.number}</span>
        <div><span class="pill">${p.tag}</span><h3>${p.title}</h3><p>${p.text}</p></div>
      </article>`).join("");
  };

  const renderActivities = () => {
    byId("activities-list").innerHTML = d.activities.map((group, i) => `
      <article class="accordion reveal" style="--delay:${i * 45}ms">
        <button class="accordion-trigger" type="button" aria-expanded="${i === 0}" aria-controls="activity-${i}">
          <span class="accordion-icon" aria-hidden="true">${group.icon}</span>
          <span class="accordion-title"><strong>${group.title}</strong><small>${group.count}</small></span>
          <span class="accordion-plus" aria-hidden="true">＋</span>
        </button>
        <div class="accordion-panel" id="activity-${i}" ${i === 0 ? "" : "hidden"}>
          <ul>${group.items.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
      </article>`).join("");
  };

  const renderPublicationFilters = () => {
    const types = ["All", ...new Set(d.publications.map(p => p.type))];
    byId("publication-filters").innerHTML = types.map((t, i) => `<button type="button" class="filter-button${i === 0 ? " active" : ""}" data-filter="${t}">${t}</button>`).join("");
  };

  window.renderPublications = (filter = "All", query = "") => {
    const normalized = query.toLowerCase().trim();
    const results = d.publications.filter(p => (filter === "All" || p.type === filter) && (!normalized || `${p.title} ${p.authors} ${p.venue} ${p.year}`.toLowerCase().includes(normalized)));
    byId("publication-list").innerHTML = results.length ? results.map(p => `
      <article class="publication-item">
        <div class="publication-year">${p.year}</div>
        <div class="publication-body"><div class="publication-tags"><span>${p.type}</span><span>${p.venue}</span></div><h3>${p.title}</h3><p>${p.authors}</p></div>
        <span class="publication-arrow" aria-hidden="true">↗</span>
      </article>`).join("") : `<p class="empty-state">No publications match that search.</p>`;
  };

  const renderTalks = () => {
    byId("talks-list").innerHTML = d.talks.map((talk, i) => `
      <article class="timeline-item reveal" style="--delay:${Math.min(i, 8) * 40}ms">
        <div class="timeline-year">${talk.year}</div><div class="timeline-dot" aria-hidden="true"></div>
        <div class="timeline-card"><span class="pill">${talk.kind}</span><h3>${talk.title}</h3><p>${talk.event}</p><small>${talk.place}</small></div>
      </article>`).join("");
  };

  const renderAwards = () => {
    byId("award-features").innerHTML = d.awardFeatures.map((a, i) => `
      <article class="award-card reveal" style="--delay:${i * 50}ms"><div class="award-top"><span class="card-icon">${a.icon}</span><strong>${a.year}</strong></div><h3>${a.title}</h3><p>${a.text}</p></article>`).join("");
    byId("awards-archive").innerHTML = d.awards.map((a, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span>${a}</li>`).join("");
  };

  const renderLab = () => {
    byId("lab-points").innerHTML = d.labPoints.map(p => `<div class="lab-point"><span>${p.icon}</span><div><h3>${p.title}</h3><p>${p.text}</p></div></div>`).join("");
  };

  window.renderNews = (expanded = false) => {
    const items = expanded ? d.news : d.news.slice(0, 6);
    byId("news-list").innerHTML = items.map((n, i) => `
      <article class="news-card reveal visible" style="--delay:${(i % 6) * 45}ms">
        <div class="news-meta"><span>${n.tag}</span><time>${n.year}</time></div><h3>${n.title}</h3><p>${n.text}</p>
      </article>`).join("");
  };

  renderResearch();
  renderActivities();
  renderPublicationFilters();
  window.renderPublications();
  renderTalks();
  renderAwards();
  renderLab();
  window.renderNews();
})();
