// app.js — Renders SITE_CONFIG into the page DOM.

document.addEventListener("DOMContentLoaded", () => {
    const C = SITE_CONFIG;

    // ── Document ─────────────────────────────────────────
    document.title = C.identity.name;

    // ── Navbar ───────────────────────────────────────────
    const navLogo = document.getElementById("nav-logo");
    if (navLogo) navLogo.textContent = C.identity.logo;

    const navCta = document.getElementById("nav-cta-btn");
    if (navCta) navCta.href = `mailto:${C.identity.email}`;

    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
        navLinks.innerHTML = C.nav.links.map(l =>
            `<a href="${l.href}">${l.label}</a>`
        ).join("");
    }

    // ── Hero ─────────────────────────────────────────────
    const heroName     = document.getElementById("hero-name");
    const heroLocation = document.getElementById("hero-location");
    const heroRoles    = document.getElementById("hero-roles");
    const heroBio      = document.getElementById("hero-bio");
    const heroTagline  = document.getElementById("hero-tagline");
    const heroBtn      = document.getElementById("hero-btn-work");

    if (heroName)     heroName.textContent     = C.identity.name;
    if (heroLocation) heroLocation.innerHTML   = `<span class="location-dot"></span> ${C.identity.location}`;
    if (heroRoles)    heroRoles.textContent    = C.identity.roles;
    if (heroBio)      heroBio.textContent      = C.identity.bio;
    if (heroTagline)  heroTagline.textContent  = C.identity.tagline;

    // ── Tech Stack ───────────────────────────────────────
    const stackGrid = document.getElementById("stack-grid");
    if (stackGrid) {
        stackGrid.innerHTML = C.stack.map((cat, i) => `
            ${i > 0 ? '<div class="stack-divider"></div>' : ''}
            <div class="stack-category">
                <span class="stack-category-label">${cat.category}</span>
                ${cat.items.map(item =>
                    `<span class="stack-pill">${item}</span>`
                ).join("")}
            </div>
        `).join("");
    }

    // ── About stats ──────────────────────────────────────
    const aboutStats = document.getElementById("about-stats");
    if (aboutStats) {
        aboutStats.innerHTML = C.stats.map(s => `
            <div class="about-stat">
                <span class="about-stat-value">${s.value}</span>
                <span class="about-stat-label">${s.label}</span>
            </div>
        `).join("");
    }

    // ── Projects ─────────────────────────────────────────
    const projectsGrid = document.getElementById("projects-grid");
    if (projectsGrid) {
        projectsGrid.innerHTML = C.projects.map(p => `
            <a href="${p.link}" target="_blank" rel="noopener" class="project-item">
                <div class="project-left">
                    <p class="project-platform">${p.platform}</p>
                    <h3 class="project-name">${p.title}</h3>
                    <p class="project-desc">${p.description}</p>
                    <div class="project-tags">
                        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
                    </div>
                </div>
                <span class="project-arrow">↗</span>
            </a>
        `).join("");
    }

    // ── Writing / Blog ────────────────────────────────────
    const blogGrid = document.getElementById("blog-grid");
    if (blogGrid) {
        blogGrid.innerHTML = C.blogs.map(b => `
            <div class="writing-item">
                <div class="writing-left">
                    <div class="writing-meta">
                        <span class="writing-category">${b.category}</span>
                        <span class="writing-dot">·</span>
                        <span class="writing-date">${b.date}</span>
                        <span class="writing-dot">·</span>
                        <span class="writing-readtime">${b.readTime} read</span>
                    </div>
                    <h3 class="writing-title">${b.title}</h3>
                    <p class="writing-excerpt">${b.excerpt}</p>
                </div>
                <span class="writing-arrow">→</span>
            </div>
        `).join("");
    }

    // ── Footer ────────────────────────────────────────────
    const footerCopy    = document.getElementById("footer-copy");
    const footerSocials = document.getElementById("footer-socials");

    if (footerCopy)    footerCopy.textContent = C.footer.copy;
    if (footerSocials) {
        footerSocials.innerHTML = `
            <a href="${C.socials.github}"   target="_blank" rel="noopener">GitHub</a>
            <a href="${C.socials.kaggle}"   target="_blank" rel="noopener">Kaggle</a>
            <a href="${C.socials.unsplash}" target="_blank" rel="noopener">Unsplash</a>
            <a href="mailto:${C.identity.email}">Email</a>
        `;
    }
});
