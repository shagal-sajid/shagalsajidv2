// config.js — Single source of truth. Edit here to update all content.
const SITE_CONFIG = {

    /* ─── Identity ─────────────────────────────────────── */
    identity: {
        logo:     "shagal.sajid",
        name:     "Shagal Sajid",
        tagline:  "Senior AI Decision Science Consultant",
        roles:    "Data Scientist · Agentic AI · Consultant",
        location: "Bengaluru, India",
        bio:      "Shagal Sajid is a Senior AI Decision Science Consultant specializing in Agentic AI and data-driven strategy. He architects intelligent multi-agent systems, leverages Large Language Models, and builds robust decision-science pipelines to solve complex enterprise challenges.",
        email:    "mail@shagalsajid.com",
    },

    /* ─── Navigation ────────────────────────────────────── */
    nav: {
        links: [],
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
            category: "Agentic AI & LLMs",
            items: ["LangChain", "Multi-Agent Systems", "RAG", "Vertex AI"],
        },
        {
            category: "Data Science",
            items: ["Python", "PyTorch", "scikit-learn", "Pandas"],
        },
        {
            category: "Data Engineering",
            items: ["Data Pipelines", "SQL", "ETL", "Cloud Architecture"],
        },
        {
            category: "Consulting",
            items: ["Decision Science", "AI Strategy", "Model Optimization", "Analytics"],
        },
    ],

    /* ─── About stats ───────────────────────────────────── */
    stats: [
        { value: "8+",   label: "GitHub repos"      },
        { value: "10+",  label: "Kaggle datasets"   },
        { value: "50k+", label: "Unsplash views"    },
        { value: "7+",   label: "Years experience" },
    ],

    /* ─── Experience ────────────────────────────────────── */
    experience: [
        {
            company: "Accenture in India",
            duration: "Full-time · 2 yrs 2 mos",
            location: "Hybrid",
            roles: [
                {
                    title: "AI Decision Science Consultant",
                    date: "Jun 2026 - Present · 1 mo",
                    location: "Bengaluru, Karnataka, India",
                },
                {
                    title: "AI Decision Science Analyst",
                    date: "May 2024 - May 2026 · 2 yrs 1 mo",
                    location: "India",
                }
            ]
        },
        {
            company: "IBM",
            duration: "Full-time",
            location: "Hybrid",
            roles: [
                {
                    title: "Data Scientist / Machine learning Engineer",
                    date: "Oct 2019 - Apr 2024 · 4 yrs 7 mos",
                    location: "",
                }
            ]
        }
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
        copy: "© 2026 Shagal Sajid · Bengaluru, India",
    },
};
