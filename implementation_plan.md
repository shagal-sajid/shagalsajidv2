# Phase 1: Execution Plan & Finalization

We are ready to execute Phase 1: removing the "in progress" placeholder and pushing a fully configured V1 website live, establishing your deployment pipeline.

> [!IMPORTANT]
> **User Review Required:** Please answer the questions below so we can finalize the exact content and deployment method. Once answered, I will update `config.js` and set up the pipeline.

## Open Questions for Phase 1

1. **Deployment Pipeline:**
   How would you like to handle deployment to Hostinger?
   *   **Option A:** GitHub Actions FTP deployment (Highly automated: you push code to GitHub, and a runner automatically uploads it to Hostinger). You will need your FTP host, username, and password. [Le't go with this]
   *   **Option B:** Manual FTP or Hostinger File Manager for now, and we do automation later.

2. **Headline / Tagline:**
   The template currently uses `code-bug-fix-repeat.` as the tagline. Do you want to keep this, or change it to something more specific like `Software Engineer & Machine Learning Explorer`? [ change to appropriate one]

3. **Current Location:**
   The template says "Kochi, India". Is this still accurate, or should we update it?

4. **Featured Projects (V1):**
   For Phase 1, I will populate the site with the following 3 placeholder-yet-professional projects based on your profile. Are you okay with these for the initial launch? [Let's hold on the projects for now ]
   *   *GitHub Profile Scraper API* (Laravel/PHP)
   *   *CS:GO Weapons Dataset* (Kaggle/Data Science)
   *   *ML & Deep Learning Cheat Sheets* (Python)

5. **Email Address:**
   Is `shagal.sajid36@gmail.com` the correct email to use for the "Contact" button? [let's put mail@shagalsajid.com, the other poses security risk]

## Phase 1 Execution Steps

### 1. Update Site Configuration
- Modify `front_end/config.js` with the approved branding, bio, and social links.
- Replace any generic placeholder images with high-quality tech/photography assets from Unsplash.

### 2. Commit & Version
- Commit all finalized Phase 1 frontend changes.
- Tag the release as `v1.1-active` in Git.

### 3. Deployment Setup
- (If Option A is chosen) Create `.github/workflows/deploy.yml`.
- Provide instructions on how to add Hostinger FTP credentials to GitHub Secrets.

## Verification Plan
1.  **Approval:** Await your answers to the Open Questions.
2.  **Execution:** I will make all code changes locally.
3.  **Local Test:** Run the site locally to ensure no UI breakages.
4.  **Deployment:** Guide you through triggering the first live deployment.
