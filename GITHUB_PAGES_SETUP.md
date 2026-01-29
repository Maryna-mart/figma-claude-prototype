# GitHub Pages Deployment Setup

## Quick Start (5 minutes)

### Step 1: Verify Remote Repository
```bash
git push origin main
```

### Step 2: Enable GitHub Pages in Repository Settings

1. Go to: `https://github.com/YOUR_USERNAME/figma-claude-prototype`
2. Click **Settings** (gear icon)
3. Scroll to **Pages** section
4. Under "Source", select:
   - **Deploy from a branch**
5. Choose branch:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
6. Click **Save**

### Step 3: Your Site is Live!

Your site will be available at:
```
https://YOUR_USERNAME.github.io/figma-claude-prototype/
```

Check the status in **Settings > Pages** section.

---

## How It Works

GitHub Actions automatically:
1. Builds the project when you push to main
2. Runs tests (Playwright E2E tests)
3. Deploys to GitHub Pages

View build status: **Actions** tab in your repository

---

## For More Details

See **DEPLOYMENT_CHECKLIST.md** for comprehensive guide.
