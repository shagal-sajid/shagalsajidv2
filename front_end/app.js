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

    // ── Experience ───────────────────────────────────────
    function calcMonths(startStr, endStr) {
        const sd = new Date(startStr + "-01");
        const ed = endStr === "Present" ? new Date() : new Date(endStr + "-01");
        let m = (ed.getFullYear() - sd.getFullYear()) * 12;
        m -= sd.getMonth();
        m += ed.getMonth() + 1;
        return m;
    }
    
    function formatDuration(months) {
        const y = Math.floor(months / 12);
        const m = months % 12;
        let res = [];
        if (y > 0) res.push(`${y} yr${y > 1 ? 's' : ''}`);
        if (m > 0) res.push(`${m} mo${m > 1 ? 's' : ''}`);
        return res.join(" ") || "0 mos";
    }

    function formatDateStr(dateStr) {
        if (dateStr === "Present") return "Present";
        return new Date(dateStr + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }

    const expList = document.getElementById("experience-list");
    if (expList) {
        expList.innerHTML = C.experience.map(exp => {
            // Calculate total company duration
            let totalMonths = 0;
            if (exp.roles.length > 1) {
                // Simplest way: sum all roles, or diff earliest to latest if overlapping. Assuming sequential:
                totalMonths = calcMonths(exp.roles[exp.roles.length - 1].startDate, exp.roles[0].endDate);
            } else if (exp.roles.length === 1) {
                totalMonths = calcMonths(exp.roles[0].startDate, exp.roles[0].endDate);
            }
            const totalDurStr = formatDuration(totalMonths);
            
            return `
            <div class="exp-company-block">
                <div class="exp-header">
                    <div class="exp-logo">${exp.company.substring(0, 2).toUpperCase()}</div>
                    <div>
                        <h3 class="exp-company-name">${exp.company}</h3>
                        <p class="exp-company-meta">${exp.type} · ${totalDurStr} · ${exp.location}</p>
                    </div>
                </div>
                <div class="exp-roles">
                    ${exp.roles.map(role => {
                        const roleMonths = calcMonths(role.startDate, role.endDate);
                        const durStr = formatDuration(roleMonths);
                        const dateStr = \`\${formatDateStr(role.startDate)} - \${formatDateStr(role.endDate)} · \${durStr}\`;
                        return `
                        <div class="exp-role">
                            <h4 class="exp-role-title">${role.title}</h4>
                            <p class="exp-role-date">${dateStr}</p>
                            ${role.location ? `<p class="exp-role-loc">${role.location}</p>` : ''}
                        </div>
                        `;
                    }).join("")}
                </div>
            </div>
            `;
        }).join("");
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
