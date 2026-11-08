# 🚀 Deploy to GitHub Pages — Step by Step

## Files to Upload
```
05_Portfolio_Website/
├── index.html   ← main site
├── style.css    ← all styling
└── script.js   ← animations & interactions
```

---

## Step 1 — Create GitHub Repo

1. Go to **[github.com](https://github.com)** → Sign in (or create account with `yalamudi.mail@gmail.com`)
2. Click **"+"** → **"New repository"**
3. Repository name: `yalamudivyas.github.io`  ← **EXACT name matters for GitHub Pages**
4. Set to **Public**
5. Click **"Create repository"**

---

## Step 2 — Upload Files

### Option A — Drag & Drop (Easiest, no terminal needed)
1. Open the repo page on GitHub
2. Click **"uploading an existing file"** link
3. Drag all 3 files from `05_Portfolio_Website/` onto the page
4. Scroll down → click **"Commit changes"**

### Option B — Git (since Git is already installed)
```bash
cd "C:\Users\test\Desktop\Hybrid Project_Product\05_Portfolio_Website"
git init
git add .
git commit -m "🚀 Launch PM portfolio website"
git branch -M main
git remote add origin https://github.com/YalamudiVyas/yalamudivyas.github.io.git
git push -u origin main
```

---

## Step 3 — Enable GitHub Pages

1. In your repo → **Settings** tab
2. Left sidebar → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** / **root** → Click **Save**

---

## Step 4 — Your Site is Live! 🎉

After ~2 minutes, visit:
**https://yalamudivyas.github.io**

---

## Add to Resume & LinkedIn

Once live, add this link to:
- [ ] `Vyas_PM_Resume.md` → Header section
- [ ] LinkedIn profile → Featured / Contact Info
- [ ] GitHub profile README
