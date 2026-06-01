// config.js — Single source of truth for all site content.
// Edit this file to white-label or update any copy/data.

const SITE_CONFIG = {

    /* ─── Identity ────────────────────────────────────────────── */
    identity: {
        logo:      "shagal.sajid",
        name:      "Shagal Sajid",
        tagline:   "code-bug-fix-repeat.",
        heroHeading: "The Power of Code & Computation",
        heroSub:   "Building robust backend systems, automated scrapers, and data architectures. Combining Laravel expertise with machine learning and visual composition.",
        heroBtn:   { label: "Explore Work", href: "#projects" },
        location:  "Kochi, India",
        email:     "shagal.sajid36@gmail.com",
    },

    /* ─── Navigation ───────────────────────────────────────────── */
    nav: {
        links: [
            { label: "Home",     href: "#hero"     },
            { label: "Projects", href: "#projects"  },
            { label: "Blog",     href: "#blog"      },
            { label: "About",    href: "#about"     },
        ],
        cta: { label: "Get in Touch", href: "#contact" },
    },

    /* ─── Socials ──────────────────────────────────────────────── */
    socials: {
        github:   "https://github.com/shagal-sajid",
        kaggle:   "https://www.kaggle.com/shagal-sajid",
        unsplash: "https://unsplash.com/@shagal_sajid",
    },

    /* ─── Hero brand logos / tech pills ───────────────────────── */
    heroBrands: ["Laravel", "Python", "Kaggle"],

    /* ─── Skills / Services grid (6 tiles) ────────────────────── */
    skills: [
        {
            emoji:  "🔴",
            accent: "red",
            title:  "Laravel Development",
            desc:   "Backend architecture and CMS systems",
        },
        {
            emoji:  "🟠",
            accent: "orange",
            title:  "ML & Data Science",
            desc:   "Predictive models & Kaggle datasets",
        },
        {
            emoji:  "🔴",
            accent: "red",
            title:  "Web Scraping APIs",
            desc:   "Automated data collection pipelines",
        },
        {
            emoji:  "🟠",
            accent: "orange",
            title:  "Data Visualization",
            desc:   "Charts, dashboards, analysis reports",
        },
        {
            emoji:  "🔴",
            accent: "red",
            title:  "Photography",
            desc:   "Creative visual composition on Unsplash",
        },
        {
            emoji:  "🟠",
            accent: "orange",
            title:  "Open Source Packages",
            desc:   "Reusable boilerplates & cheat sheets",
        },
    ],

    /* ─── About section ────────────────────────────────────────── */
    about: {
        title: "About Me",
        bio:   "I'm a multidisciplinary engineer and data specialist based in Kochi, India. I build high-performance Laravel backends, automate data collection with custom scrapers, and explore machine learning through Kaggle competitions. When I'm not writing code, I'm framing shots on Unsplash.",
        stats: [
            { label: "GitHub Repositories", value: "8+"   },
            { label: "Kaggle Datasets",      value: "10+"  },
            { label: "Unsplash Views",       value: "50k+" },
        ],
    },

    /* ─── Feature block 1 (gradient card left) ─────────────────── */
    feature1: {
        title:   "Laravel CMS Specialist",
        desc:    "I architect bespoke content management systems with Laravel — clean role-based auth, modular admin panels, and APIs built to last. From freelance MVPs to production-grade platforms.",
        btnLabel: "View Projects",
        btnHref:  "#projects",
    },

    /* ─── My Reach stats (dark cards) ─────────────────────────── */
    reach: [
        { value: "8+",   label: "GitHub Repositories"          },
        { value: "10+",  label: "Kaggle Datasets & Models"      },
        { value: "50k+", label: "Unsplash Photo Views"          },
    ],

    /* ─── Feature block 2 (pastel card right) ──────────────────── */
    feature2: {
        title:    "Data Science & ML Exploration",
        desc:     "From classic Titanic survival models to custom CS:GO weapons datasets — I use Python and Kaggle to build, train, and share machine learning experiments that are reproducible and well-documented.",
        btnLabel: "View on Kaggle",
        btnHref:  "https://www.kaggle.com/shagal-sajid",
    },

    /* ─── Feature block 3 (pastel card left) ──────────────────── */
    feature3: {
        title:    "Creative Photography",
        desc:     "Visual storytelling through the lens. My Unsplash portfolio has accumulated over 50k views — from urban architecture to abstract minimalism — always chasing clean composition and natural light.",
        btnLabel: "View on Unsplash",
        btnHref:  "https://unsplash.com/@shagal_sajid",
    },

    /* ─── Testimonial ──────────────────────────────────────────── */
    testimonial: {
        name:   "A Client",
        role:   "Startup Founder",
        quote:  "Shagal delivered our Laravel CMS in record time — clean code, great communication, and pixel perfect execution.",
        stars:  5,
    },

    /* ─── Projects ─────────────────────────────────────────────── */
    projects: [
        {
            title:       "Custom GitHub Profile Scraper API",
            description: "A lightweight Laravel/PHP automation tool designed to retrieve detailed profile statistics and repositories without requiring authentication credentials.",
            tags:        ["PHP", "Laravel", "Scraping", "API"],
            link:        "https://github.com/shagal-sajid",
        },
        {
            title:       "Deep Learning & ML Cheat Sheets",
            description: "A comprehensive reference repository compiling core frameworks, equations, and cheat sheets for Deep Learning, Machine Learning, and Data Visualization.",
            tags:        ["Machine Learning", "Deep Learning", "DataViz"],
            link:        "https://github.com/shagal-sajid",
        },
        {
            title:       "CS:GO Weapons Dataset",
            description: "A customized dataset detailing CS:GO weapons metrics, compiled and formatted for optimization research and statistical models on Kaggle.",
            tags:        ["Kaggle", "Data Science", "Python"],
            link:        "https://www.kaggle.com/shagal-sajid",
        },
        {
            title:       "Titanic Survival Optimization Models",
            description: "Feature engineering and optimization scripts utilizing algorithms to solve the classic Titanic survival challenge.",
            tags:        ["Kaggle", "Machine Learning", "Python"],
            link:        "https://www.kaggle.com/shagal-sajid",
        },
    ],

    /* ─── Blog posts ────────────────────────────────────────────── */
    blogs: [
        {
            id:       1,
            title:    "Automated Data Harvesting Without API Authentication",
            excerpt:  "How I built a lightweight scraping endpoint to fetch GitHub stats bypassing token restrictions, and how you can do it securely.",
            date:     "May 20, 2026",
            readTime: "5 min read",
            category: "Scraping",
        },
        {
            id:       2,
            title:    "Structuring Laravel Boilerplates for Maximum Freelance Speed",
            excerpt:  "A guide on compiling pre-built configurations, roles management, and admin views so you can launch client sites in 10 minutes.",
            date:     "May 05, 2026",
            readTime: "8 min read",
            category: "Laravel",
        },
    ],

    /* ─── Footer ────────────────────────────────────────────────── */
    footer: {
        copy: "© 2026 Shagal Sajid",
    },
};
