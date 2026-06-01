// Loader Script to render SITE_CONFIG into the static Bento Grid layout
document.addEventListener("DOMContentLoaded", () => {
    // 1. Profile Details
    const profile = SITE_CONFIG.profile;
    document.title = `${profile.name} - Portfolio`;
    document.getElementById("site-logo-text").innerText = profile.name.toLowerCase().replace(" ", ".");
    document.getElementById("hero-tagline").innerText = profile.tagline;
    document.getElementById("hero-heading").innerText = profile.subheading || "The Power of Imagination";
    document.getElementById("hero-bio").innerText = profile.bio;
    document.getElementById("footer-name").innerText = profile.name;
    document.getElementById("contact-email-btn").setAttribute("href", `mailto:${profile.email}`);
    
    // Social Links
    document.getElementById("footer-github").setAttribute("href", profile.github);
    document.getElementById("footer-kaggle").setAttribute("href", profile.kaggle);
    document.getElementById("footer-unsplash").setAttribute("href", profile.unsplash);

    // 2. Load Capabilities (Bento Cards)
    const capabilitiesGrid = document.getElementById("capabilities-grid");
    capabilitiesGrid.innerHTML = SITE_CONFIG.capabilities.map(cap => `
        <div class="bento-card">
            <div class="bento-icon">${cap.icon || '⚡'}</div>
            <h3 class="bento-card-title">${cap.category}</h3>
            <p class="bento-card-desc">${cap.details}</p>
            <span class="bento-card-tag">${cap.tag}</span>
        </div>
    `).join('');

    // 3. Load Stats
    const statsGrid = document.getElementById("stats-grid");
    statsGrid.innerHTML = SITE_CONFIG.stats.map(stat => `
        <div class="stat-card">
            <div class="stat-number">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');

    // 4. Load Projects Grid
    const projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = SITE_CONFIG.projects.map(project => `
        <div class="project-card">
            <div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <a href="${project.link}" target="_blank" class="project-link">
                View Project <span>&rarr;</span>
            </a>
        </div>
    `).join('');

    // 5. Load Blogs Grid
    const blogGrid = document.getElementById("blog-grid");
    blogGrid.innerHTML = SITE_CONFIG.blogs.map(post => `
        <div class="blog-card">
            <div class="blog-meta">
                <span>${post.category}</span> &bull; <span>${post.date}</span>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
        </div>
    `).join('');
});
