# Utkarsh Pal - Portfolio Website

A clean, minimal, developer-focused portfolio website inspired by Brittany Chiang's design philosophy.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
npm start
```

## 🎨 Design Features

- **Dark Theme**: Navy background with teal accent colors
- **Sticky Navigation**: Left sidebar navigation with active section tracking
- **Smooth Animations**: Framer Motion for subtle, professional animations
- **Responsive Design**: Desktop-first, mobile-friendly
- **SEO Optimized**: Proper meta tags, semantic HTML, accessibility features
- **Keyboard Friendly**: Full keyboard navigation support

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles and Tailwind config
├── components/
│   ├── Navigation.tsx       # Sticky left navigation
│   ├── SocialLinks.tsx      # Fixed social media links
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Featured projects
│   └── Contact.tsx          # Contact section
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## 🎯 Sections

1. **Hero**: Introduction with name, role, and CTA
2. **About**: Professional summary and tech stack
3. **Experience**: Work history at Deloitte, Knot.dating, SignalX.ai
4. **Projects**: Featured projects (YouTube Analyzer, Travel Itinerary System)
5. **Contact**: Get in touch section with email CTA

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## 🎨 Color Palette

- **Background**: `#0a192f` (Navy)
- **Foreground**: `#8892b0` (Slate)
- **Heading**: `#ccd6f6` (Light Slate)
- **Accent**: `#64ffda` (Teal)

## 📝 Customization

### Update Content

Edit the following files to customize your content:

- **Personal Info**: `app/layout.tsx` (metadata), `components/Hero.tsx`
- **About**: `components/About.tsx`
- **Experience**: `components/Experience.tsx` (experiences array)
- **Projects**: `components/Projects.tsx` (projects array)
- **Social Links**: `components/SocialLinks.tsx` (socialLinks array)

### Update Colors

Edit `tailwind.config.ts` to change the color scheme.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Utkarsh Pal**
- Email: palutkarsh1901@gmail.com
- GitHub: [@UttkarrshhPal](https://github.com/UttkarrshhPal)
- LinkedIn: [utkarsh-pal-](https://www.linkedin.com/in/utkarsh-pal-/)
- Twitter: [@Utkarsh65793540](https://x.com/Utkarsh65793540)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
