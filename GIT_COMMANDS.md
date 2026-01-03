# Git Commands - Copy & Paste

## 📋 Step-by-Step Commands

### 1️⃣ Initialize Git Repository
```bash
git init
```

### 2️⃣ Add All Files
```bash
git add .
```

### 3️⃣ Create Initial Commit
```bash
git commit -m "Initial commit: Portfolio website with Next.js, TypeScript, and Tailwind CSS"
```

### 4️⃣ Create GitHub Repository
**Go to:** https://github.com/new

**Settings:**
- Repository name: `portfolio`
- Description: `Personal portfolio website - Full Stack Developer specializing in Backend (FastAPI)`
- Visibility: **Public**
- ❌ Don't initialize with README
- Click "Create repository"

### 5️⃣ Connect to GitHub
```bash
git remote add origin https://github.com/UttkarrshhPal/portfolio.git
```

### 6️⃣ Rename Branch to Main
```bash
git branch -M main
```

### 7️⃣ Push to GitHub
```bash
git push -u origin main
```

---

## 🚀 Deploy to Vercel

### Option A: Using Vercel Website (Easiest)
1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Select `UttkarrshhPal/portfolio`
5. Click "Deploy"
6. ✅ Done! Live in ~2 minutes

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

---

## 📝 Future Updates

### Make Changes and Deploy
```bash
# 1. Edit files as needed

# 2. Stage changes
git add .

# 3. Commit with descriptive message
git commit -m "Update: Added new project to portfolio"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys in ~1 minute ✅
```

---

## 🔧 Troubleshooting

### If "git" is not recognized
**Install Git:**
- Download from https://git-scm.com/download/win
- Run installer
- Restart terminal
- Try commands again

### If GitHub push asks for credentials

**Option 1: GitHub CLI (Recommended)**
```bash
# Install from https://cli.github.com/
gh auth login
gh repo create portfolio --public --source=. --remote=origin --push
```

**Option 2: Personal Access Token**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `workflow`
4. Copy token
5. Use token as password when pushing

### If remote already exists
```bash
git remote remove origin
git remote add origin https://github.com/UttkarrshhPal/portfolio.git
git push -u origin main
```

---

## ✅ Verification Commands

### Check Git Status
```bash
git status
```

### Check Remote URL
```bash
git remote -v
```

### View Commit History
```bash
git log --oneline
```

### Check Current Branch
```bash
git branch
```

---

## 🎯 Quick Reference

| Command | Purpose |
|---------|---------|
| `git init` | Initialize repository |
| `git add .` | Stage all files |
| `git commit -m "message"` | Create commit |
| `git push` | Push to GitHub |
| `git status` | Check status |
| `git log` | View history |

---

## 📞 Next Steps After Deployment

1. ✅ Get your live URL from Vercel
2. ✅ Test on mobile devices
3. ✅ Share on LinkedIn
4. ✅ Add to resume
5. ✅ (Optional) Add custom domain

---

**Your portfolio is ready to go live!** 🚀

Just copy-paste the commands above in order.
