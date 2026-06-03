# 🚀 Deployment Guide - Vercel

Complete step-by-step guide to deploy to Vercel.

## ✅ Pre-Deployment Checklist

- [ ] All 12 images added to `public/images/`
- [ ] Correct filenames used (see IMAGE_GUIDE.md)
- [ ] Local build works: `npm run build`
- [ ] Local test works: `npm run dev`
- [ ] Git repository initialized: `git init`

## 🔧 Setup Before Deploying

### 1. Initialize Git (if not already done)

```bash
cd sonali-birthday-nextjs
git init
git add .
git commit -m "Initial commit: Sonali's birthday website"
```

### 2. Test Locally

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Visit http://localhost:3000
# Test all screens and month unlock (December)
```

### 3. Build Production Version

```bash
# Build the project
npm run build

# Start production server (optional)
npm start
```

If build fails, you'll see the error. Fix any issues before deploying.

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Recommended - Easiest)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
vercel
```

**Step 3: Answer prompts**
- `? Set up and deploy "..." (Y/n)` → Y
- `? Which scope do you want to deploy to?` → Select or create team
- `? Link to existing project?` → N
- `? What's your project's name?` → sonali-birthday
- `? In which directory is your code?` → ./
- `? Want to modify these settings before deploying?` → N

**That's it!** Your site will be live in ~60 seconds.

### Option 2: GitHub Integration (Best for Updates)

**Step 1: Push to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/sonali-birthday.git
git branch -M main
git push -u origin main
```

**Step 2: Import on Vercel**
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste: `https://github.com/YOUR_USERNAME/sonali-birthday.git`
4. Click "Import"
5. Click "Deploy"

**Benefits:**
- Auto-deploy on every push to main
- Preview deployments for PRs
- Easy rollbacks

### Option 3: Drag & Drop Upload

1. Go to https://vercel.com
2. Sign in or create account
3. Click "Add New Project"
4. Click "Drag to deploy your project"
5. Drag the entire folder
6. Wait for deployment

## 📊 Post-Deployment

### Check Deployment Status

After deploying with Vercel CLI:
```bash
vercel --prod
```

### Visit Your Live Site

Your site URL will be: `https://sonali-birthday.vercel.app` (or custom domain)

### Update Images After Deployment

1. Update images in `public/images/`
2. Commit and push to GitHub (or re-run `vercel`)
3. Vercel auto-deploys within seconds

## 🎯 Common Issues & Fixes

### "Build failed"
- Check `npm run build` locally first
- Ensure all dependencies are correct
- Check console logs in Vercel dashboard

### "Images not showing"
- Ensure files in `public/images/` directory
- Check exact filenames (case-sensitive on Linux)
- Verify images exist locally first

### "Port already in use"
```bash
# Kill process using port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build takes too long
- This is normal (first build ~2-3 min)
- Subsequent deployments are faster
- Check dependencies size: `npm ls`

## 🔐 Security & Performance

✅ **Already optimized for:**
- Automatic image optimization
- Code splitting
- CSS minification
- JS compression
- CDN delivery (Vercel Edge Network)

## 📈 Analytics

View site performance on Vercel:
1. Go to vercel.com/dashboard
2. Click your project
3. Check Analytics tab
4. Monitor Web Vitals

## 🌍 Custom Domain

To use a custom domain:
1. In Vercel dashboard → Settings → Domains
2. Add your domain
3. Follow DNS instructions
4. Wait for SSL certificate (~5 minutes)

Example:
- `sonalibirthday.com` → Your website
- `www.sonalibirthday.com` → Redirects to above

## 💾 Backups & Versions

Every deployment is a version. To rollback:
1. Vercel dashboard → Deployments
2. Click previous deployment
3. Click "Redeploy"

All versions stay available forever!

## 🎉 You're Live!

Your birthday website is now on the internet! Share the link with friends and family.

---

**Questions?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
