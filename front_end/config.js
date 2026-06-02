// config.js — Single source of truth. Edit here to update all content.
const SITE_CONFIG = {

    /* ─── Identity ─────────────────────────────────────── */
    identity: {
        logo:     "shagal.sajid",
        name:     "Shagal Sajid",
        tagline:  "Software Engineer & Machine Learning Explorer",
        roles:    "Software Engineer · ML Explorer · Photographer",
        location: "Kochi, India",
        bio:      "I build reliable backend systems with Laravel, automate data pipelines, and explore machine learning through Kaggle. When I'm not shipping code, I'm behind a lens — with 50k+ views on Unsplash.",
        email:    "mail@shagalsajid.com",
    },

    /* ─── Navigation ────────────────────────────────────── */
    nav: {
        links: [
            { label: "About",      href: "#about"       },
            { label: "Projects",   href: "#projects"    },
            { label: "Writing",    href: "#blog"         },
            { label: "Photos",     href: "#photography" },
        ],
    },

    /* ─── Socials ───────────────────────────────────────── */
    socials: {
        github:   "https://github.com/shagal-sajid",
        kaggle:   "https://www.kaggle.com/shagal-sajid",
        unsplash: "https://unsplash.com/@shagal_sajid",
    },

    /* ─── Tech Stack (grouped by category) ─────────────── */
    stack: [
        {
            category: "Backend",
            items: ["Laravel", "PHP", "MySQL", "REST APIs"],
        },
        {
            category: "Data & ML",
            items: ["Python", "Pandas", "scikit-learn", "Kaggle"],
        },
        {
            category: "Scraping",
            items: ["Scrapy", "BeautifulSoup", "Selenium"],
        },
        {
            category: "Tools",
            items: ["Git", "Linux", "Composer", "VS Code"],
        },
    ],

    /* ─── About stats ───────────────────────────────────── */
    stats: [
        { value: "8+",   label: "GitHub repos"      },
        { value: "10+",  label: "Kaggle datasets"   },
        { value: "50k+", label: "Unsplash views"    },
        { value: "3+",   label: "Years freelancing" },
    ],

    /* ─── Projects ──────────────────────────────────────── */
    projects: [],

    /* ─── Blog / Writing ────────────────────────────────── */
    blogs: [
        {
            id:       1,
            category: "Scraping",
            date:     "May 20, 2026",
            readTime: "5 min",
            title:    "Automated Data Harvesting Without API Authentication",
            excerpt:  "How I built a lightweight Laravel endpoint to fetch GitHub stats without tokens — and how to do it securely.",
        },
        {
            id:       2,
            category: "Laravel",
            date:     "May 5, 2026",
            readTime: "8 min",
            title:    "Structuring Laravel Boilerplates for Maximum Freelance Speed",
            excerpt:  "A practical guide to pre-built roles, admin views, and config layers so you can launch client sites in under 30 minutes.",
        },
    ],

    /* ─── Footer ────────────────────────────────────────── */
    footer: {
        copy: "© 2026 Shagal Sajid · Kochi, India",
    },
};
