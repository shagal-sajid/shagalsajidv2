// config.js — Single source of truth. Edit here to update all content.
const SITE_CONFIG = {

    /* ─── Identity ─────────────────────────────────────── */
    identity: {
        logo:     "shagal.sajid",
        name:     "Shagal Sajid",
        tagline:  "code-bug-fix-repeat.",
        roles:    "Software Engineer · ML Explorer · Photographer",
        location: "Kochi, India",
        bio:      "I build reliable backend systems with Laravel, automate data pipelines, and explore machine learning through Kaggle. When I'm not shipping code, I'm behind a lens — with 50k+ views on Unsplash.",
        email:    "shagal.sajid36@gmail.com",
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
    projects: [
        {
            platform:    "GitHub · Laravel",
            title:       "GitHub Profile Scraper API",
            description: "A lightweight Laravel/PHP automation tool that retrieves detailed profile statistics and repositories without OAuth — pure scraping, clean output.",
            tags:        ["PHP", "Laravel", "Web Scraping", "API"],
            link:        "https://github.com/shagal-sajid",
        },
        {
            platform:    "GitHub · Python",
            title:       "ML & Deep Learning Cheat Sheets",
            description: "Comprehensive reference repository of DL/ML/DataViz cheat sheets — equations, model architectures, and framework comparisons in one place.",
            tags:        ["Python", "Machine Learning", "Deep Learning", "DataViz"],
            link:        "https://github.com/shagal-sajid",
        },
        {
            platform:    "Kaggle · Data Science",
            title:       "CS:GO Weapons Dataset",
            description: "A curated dataset detailing CS:GO weapon metrics compiled for statistical modelling, damage analysis, and game-balance research.",
            tags:        ["Kaggle", "Python", "Data Collection"],
            link:        "https://www.kaggle.com/shagal-sajid",
        },
        {
            platform:    "Kaggle · ML Competition",
            title:       "Titanic Survival Optimisation",
            description: "Feature engineering experiments and optimisation algorithms applied to the classic Titanic challenge. Focused on reproducibility and clarity.",
            tags:        ["Kaggle", "scikit-learn", "Feature Engineering"],
            link:        "https://www.kaggle.com/shagal-sajid",
        },
    ],

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
