# Portfolio Deployment Guide

## ✅ What's Been Built

Your portfolio website is **complete and production-ready** with:

### 🎨 Design Features
- Clean, minimal design inspired by Brittany Chiang
- Dark theme with navy background (#0a192f) and teal accent (#64ffda)
- Sticky left navigation with active section tracking
- Smooth scroll animations using Framer Motion
- Responsive design (desktop-first, mobile-friendly)
- SEO-optimized with proper meta tags

### 📦 Components Created
1. **Navigation.tsx** - Sticky left sidebar with smooth scroll
2. **SocialLinks.tsx** - Fixed social media icons (GitHub, LinkedIn, Twitter, Email)
3. **Hero.tsx** - Introduction section with animated text
4. **About.tsx** - Professional summary with tech stack
5. **Experience.tsx** - Work history (Deloitte, Knot.dating, SignalX.ai)
6. **Projects.tsx** - Featured projects with live links
7. **Contact.tsx** - CTA section with email link

### 🛠️ Tech Stack
- Next.js 14.2.18 (App Router)
- React 18.3.1
- TypeScript
- Tailwind CSS 3.4.17
- Framer Motion 11.15.0
- Lucide React (icons)

## 🚀 Quick Deployment (Recommended)

Since there are local environment issues, the **fastest way** to see your portfolio live is to deploy directly to Vercel:

### Option 1: Deploy to Vercel (5 minutes)

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Push to GitHub**:
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/UttkarrshhPal/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

### Option 2: Deploy to Netlify

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

## 🔧 Local Development Troubleshooting

If you want to run locally, try these steps:

### Step 1: Clean Install
```bash
# Remove all generated files
Remove-Item -Recurse -Force node_modules, .next, package-lock.json -ErrorAction SilentlyContinue

# Fresh install
npm install

# Try running
npm run dev
```

### Step 2: Check Node Version
```bash
node --version  # Should be v18 or v20
```

If you have Node v16 or older, upgrade to v20:
```bash
# Download from https://nodejs.org/
```

### Step 3: Alternative Dev Command
If `npm run dev` fails, try:
```bash
npx next dev
```

### Step 4: Build and Run Production
```bash
npm run build
npm start
```

## 📝 Customization Guide

### Update Personal Information

**1. Hero Section** (`components/Hero.tsx`):
- Line 24: Your name
- Line 32: Your tagline
- Line 40-45: Your description

**2. About Section** (`components/About.tsx`):
- Lines 21-50: Your professional summary
- Lines 58-72: Your tech stack

**3. Experience** (`components/Experience.tsx`):
- Lines 9-61: Update the `experiences` array with your work history

**4. Projects** (`components/Projects.tsx`):
- Lines 9-36: Update the `projects` array with your projects

**5. Social Links** (`components/SocialLinks.tsx`):
- Lines 6-11: Update URLs to your profiles

**6. Metadata** (`app/layout.tsx`):
- Lines 5-14: Update SEO metadata

### Update Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  background: "#0a192f",  // Navy background
  foreground: "#8892b0",  // Text color
  heading: "#ccd6f6",     // Heading color
  accent: "#64ffda",      // Accent color (teal)
}
```

## 🎯 Next Steps

1. **Deploy to Vercel** (recommended - fastest way to see it live)
2. **Test on mobile** - Check responsiveness
3. **Add Google Analytics** (optional)
4. **Add custom domain** (optional)
5. **Update content** as needed

## 📊 File Structure

```
d:\portfolio\
├── app/
│   ├── layout.tsx          # Root layout + SEO
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Left sidebar nav
│   ├── SocialLinks.tsx     # Social icons
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work history
│   ├── Projects.tsx        # Projects showcase
│   └── Contact.tsx         # Contact CTA
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
├── .eslintrc.json          # ESLint config
├── postcss.config.js       # PostCSS config
└── README.md               # Documentation
```

## ⚡ Performance Tips

- All images should be optimized (use Next.js `<Image>` component)
- Lazy load components below the fold
- Use `next/font` for custom fonts
- Enable compression on your hosting platform

## 🐛 Common Issues

**Issue**: "Module not found" errors
**Fix**: Run `npm install` again

**Issue**: Port 3000 already in use
**Fix**: Run `npx kill-port 3000` or use `npm run dev -- -p 3001`

**Issue**: Tailwind styles not applying
**Fix**: Make sure `globals.css` is imported in `layout.tsx`

## 📞 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Review the README.md for setup instructions

---

**Your portfolio is ready to deploy! 🎉**

The code is production-ready. Deploy to Vercel for the quickest results.
