// app.js — Renders SITE_CONFIG into the page DOM.
// Every injection point corresponds to an id in index.html.

document.addEventListener("DOMContentLoaded", () => {
    const C = SITE_CONFIG;

    // ── Document title ───────────────────────────────────
    document.title = `${C.identity.name} — Portfolio`;

    // ── Navbar ───────────────────────────────────────────
    document.getElementById("nav-logo").textContent = C.identity.logo;
    document.getElementById("nav-cta-btn").textContent = C.nav.cta.label;
    document.getElementById("nav-cta-btn").href = C.nav.cta.href;

    const navLinks = document.getElementById("nav-links");
    navLinks.innerHTML = C.nav.links.map(l =>
        `<a href="${l.href}">${l.label}</a>`
    ).join("");

    // ── Hero ─────────────────────────────────────────────
    document.getElementById("hero-tagline").textContent  = C.identity.tagline;
    document.getElementById("hero-heading").textContent  = C.identity.heroHeading;
    document.getElementById("hero-sub").textContent      = C.identity.heroSub;
    document.getElementById("hero-btn").textContent      = C.identity.heroBtn.label;
    document.getElementById("hero-btn").href             = C.identity.heroBtn.href;

    const heroBrands = document.getElementById("hero-brands");
    heroBrands.innerHTML = C.heroBrands.map(b =>
        `<span class="brand-pill">${b}</span>`
    ).join("");

    // ── Skills / Services grid ────────────────────────────
    const skillsGrid = document.getElementById("skills-grid");
    skillsGrid.innerHTML = C.skills.map(s => `
        <div class="skill-card">
            <div class="skill-icon-wrap ${s.accent}">
                <span>${s.emoji}</span>
            </div>
            <h3 class="skill-title">${s.title}</h3>
            <p class="skill-desc">${s.desc}</p>
        </div>
    `).join("");

    // ── About ─────────────────────────────────────────────
    document.getElementById("about-title").innerHTML =
        `${C.about.title}<span class="title-underline" aria-hidden="true"></span>`;
    document.getElementById("about-bio").textContent = C.about.bio;

    const aboutStats = document.getElementById("about-stats");
    aboutStats.innerHTML = C.about.stats.map(s => `
        <div class="about-stat">
            <span class="about-stat-value">${s.value}</span>
            <span class="about-stat-label">${s.label}</span>
        </div>
    `).join("");

    // ── Feature block 1 ───────────────────────────────────
    document.getElementById("f1-title").textContent    = C.feature1.title;
    document.getElementById("f1-desc").textContent     = C.feature1.desc;
    document.getElementById("f1-btn").textContent      = C.feature1.btnLabel;
    document.getElementById("f1-btn").href             = C.feature1.btnHref;

    // ── My Reach stats ────────────────────────────────────
    const reachGrid = document.getElementById("reach-grid");
    reachGrid.innerHTML = C.reach.map(r => `
        <div class="reach-card">
            <div class="reach-value">${r.value}</div>
            <div class="reach-label">${r.label}</div>
        </div>
    `).join("");

    // ── Feature block 2 ───────────────────────────────────
    document.getElementById("f2-title").textContent    = C.feature2.title;
    document.getElementById("f2-desc").textContent     = C.feature2.desc;
    document.getElementById("f2-btn").textContent      = C.feature2.btnLabel;
    document.getElementById("f2-btn").href             = C.feature2.btnHref;

    // ── Feature block 3 ───────────────────────────────────
    document.getElementById("f3-title").textContent    = C.feature3.title;
    document.getElementById("f3-desc").textContent     = C.feature3.desc;
    document.getElementById("f3-btn").textContent      = C.feature3.btnLabel;
    document.getElementById("f3-btn").href             = C.feature3.btnHref;

    // ── Projects ──────────────────────────────────────────
    const projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = C.projects.map(p => `
        <div class="project-card">
            <div>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.description}</p>
                <div class="project-tags">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
                </div>
            </div>
            <a href="${p.link}" target="_blank" rel="noopener" class="project-link">
                View Project &rarr;
            </a>
        </div>
    `).join("");

    // ── Blog ──────────────────────────────────────────────
    const blogGrid = document.getElementById("blog-grid");
    blogGrid.innerHTML = C.blogs.map(b => `
        <div class="blog-card">
            <div class="blog-meta">
                <span class="blog-category">${b.category}</span>
                <span>&bull;</span>
                <span>${b.date}</span>
                <span>&bull;</span>
                <span>${b.readTime}</span>
            </div>
            <h3 class="blog-title">${b.title}</h3>
            <p class="blog-excerpt">${b.excerpt}</p>
        </div>
    `).join("");

    // ── Testimonial ───────────────────────────────────────
    const t = C.testimonial;
    const stars = "★".repeat(t.stars) + "☆".repeat(5 - t.stars);
    document.getElementById("testimonial-card").innerHTML = `
        <div class="testimonial-avatar">🧑‍💻</div>
        <div class="testimonial-name">${t.name}</div>
        <div class="testimonial-role">${t.role}</div>
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-quote">"${t.quote}"</p>
    `;

    // ── Contact ───────────────────────────────────────────
    document.getElementById("contact-btn").href =
        `mailto:${C.identity.email}`;

    // ── Footer ────────────────────────────────────────────
    document.getElementById("footer-copy").textContent = C.footer.copy;

    const footerSocials = document.getElementById("footer-socials");
    footerSocials.innerHTML = `
        <a href="${C.socials.github}"   target="_blank" rel="noopener">GitHub</a>
        <a href="${C.socials.kaggle}"   target="_blank" rel="noopener">Kaggle</a>
        <a href="${C.socials.unsplash}" target="_blank" rel="noopener">Unsplash</a>
    `;
});
