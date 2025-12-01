# 🚀 Harshad Agrawal - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-ff0055)](https://www.framer.com/motion/)

A modern, highly animated portfolio website showcasing AI/ML projects, skills, certificates, and professional journey. Built with cutting-edge web technologies for blazing-fast performance and stunning visual effects.

## ✨ Features

- 🎨 **Stunning Animations** - Powered by Framer Motion with smooth transitions and micro-interactions
- 🌓 **Dark/Light Theme Toggle** - Customizable theme with neon accent colors
- 📱 **Fully Responsive** - Mobile-first design with touch-friendly interactions
- ⚡ **Blazing Fast** - Static export with Next.js 14 and optimized assets
- 🎯 **SEO Optimized** - Meta tags, Open Graph, structured data, and sitemap
- 🖼️ **Certificate Gallery** - Filterable lightbox gallery with category tags
- 📊 **Skills Visualization** - Animated progress bars with categorized skills
- 🗓️ **Interactive Timeline** - Learning journey with project milestones
- 📬 **Contact Form** - Integrated with Formspree or serverless functions
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 🔍 **GitHub Integration** - Auto-import projects from GitHub repositories

## 🛠️ Tech Stack

### Framework & Language
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - Latest React features

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lottie React** - Lightweight animation player

### UI Components
- **Lucide React** - Beautiful icon library
- **Yet Another React Lightbox** - Accessible image lightbox

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Run linters on staged files

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── animations/          # Lottie animation files
│   ├── certificates/        # Certificate images (auto-copied)
│   ├── resume.pdf          # Your resume (add manually)
│   ├── og-image.png        # Open Graph image (add manually)
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── import-projects.js  # GitHub project importer
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout with SEO
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── About.tsx      # About section
│   │   ├── Certificates.tsx # Certificates gallery
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Skills.tsx     # Skills visualization
│   │   ├── ThemeProvider.tsx # Theme context
│   │   └── Timeline.tsx   # Learning journey
│   ├── config/
│   │   └── site.ts        # Site configuration
│   └── data/
│       ├── certificates.ts # Certificate data
│       ├── projects.ts     # Project data (auto-generated)
│       ├── skills.ts       # Skills data
│       └── timeline.ts     # Timeline events
├── .env.example           # Environment variables template
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Install dependencies**

```bash
npm install
```

2. **Set up environment variables**

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
- `NEXT_PUBLIC_FORM_ENDPOINT` - Your Formspree endpoint or serverless function URL
- `GITHUB_TOKEN` - (Optional) For higher GitHub API rate limits when importing projects
- `NEXT_PUBLIC_SITE_URL` - Your deployed site URL

3. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### 1. Personal Information

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  // ... update all fields
};
```

### 2. Import Projects from GitHub

Run the import script to fetch your latest repositories:

```bash
npm run import-projects
```

This will:
- Fetch all public repositories from your GitHub account
- Auto-categorize projects based on topics and languages
- Generate `src/data/projects.ts` with project data
- Mark featured projects based on stars and specific repo names

**Customize featured projects:** Edit `scripts/import-projects.js` and modify the `isFeatured` logic.

### 3. Add Your Resume

Place your resume PDF in `public/resume.pdf`. The download button will automatically link to it.

### 4. Update Skills

Edit `src/data/skills.ts` to add/modify your skills and proficiency levels.

### 5. Update Timeline

Edit `src/data/timeline.ts` to add your educational and professional milestones.

### 6. Certificates

Certificates are automatically loaded from `public/certificates/`. The script has already copied them from the `Certificate/` folder.

To add new certificates:
1. Add image files to `public/certificates/`
2. Update `src/data/certificates.ts` with metadata
3. Certificates will auto-categorize based on filename patterns

### 7. Theme Customization

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  accent: {
    primary: '#7c5cff',    // Change to your preferred color
    secondary: '#49e6a6',  // Secondary accent
    tertiary: '#ff5c8d',   // Tertiary accent
  },
}
```

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**

```bash
npm i -g vercel
```

2. **Deploy**

```bash
vercel
```

Follow the prompts. Vercel will automatically detect Next.js and configure everything.

**Or use the Vercel Dashboard:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-deploy on every push

### Deploy to Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `out`

Or use Netlify CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=out
```

### Deploy to GitHub Pages

1. Update `next.config.js`:

```javascript
const nextConfig = {
  basePath: '/your-repo-name',
  // ... rest of config
}
```

2. Add deployment workflow: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run import-projects` - Import projects from GitHub

## ⚙️ Environment Variables

Create a `.env` file based on `.env.example`:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FORM_ENDPOINT` | Formspree endpoint or serverless function URL | No |
| `GITHUB_TOKEN` | GitHub Personal Access Token for API | No |
| `NEXT_PUBLIC_SITE_URL` | Your deployed site URL (for SEO) | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | No |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible Analytics domain | No |

### Setting up Contact Form

**Option 1: Formspree (Easiest)**
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy the endpoint URL
5. Set `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID`

**Option 2: Netlify Functions**
1. Create `netlify/functions/contact.js`:

```javascript
exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);
  
  // Add your email sending logic here (SendGrid, Mailgun, etc.)
  
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
```

2. Set `NEXT_PUBLIC_FORM_ENDPOINT=/.netlify/functions/contact`

**Option 3: Vercel Serverless Functions**
1. Create `api/contact.ts` in your project
2. Implement email sending logic
3. Set `NEXT_PUBLIC_FORM_ENDPOINT=/api/contact`

## 🎨 Design Features

### Animations
- **Hero section** - Floating profile image with rotating gradient border
- **Project cards** - 3D tilt effect on hover with glow
- **Skills** - Animated progress bars
- **Timeline** - Staggered reveal on scroll
- **Certificates** - Masonry grid with lightbox
- **Smooth scrolling** - All anchor links have smooth scroll behavior

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Accessibility Features
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast WCAG AA compliant
- Screen reader friendly

## 🐛 Troubleshooting

### Build fails with module not found

```bash
rm -rf node_modules .next
npm install
npm run build
```

### Images not loading

Ensure images are in `public/` directory and referenced without the `/public` prefix:
```typescript
// ✅ Correct
<img src="/certificates/cert.png" />

// ❌ Wrong
<img src="/public/certificates/cert.png" />
```

### Animations not working

Check that Framer Motion is installed:
```bash
npm install framer-motion
```

### TypeScript errors

```bash
npm run lint
# Fix errors, then rebuild
npm run build
```

## 📋 Customization Checklist

Before deploying, make sure you've updated:

- [ ] Personal information in `src/config/site.ts`
- [ ] Resume PDF in `public/resume.pdf`
- [ ] OG image in `public/og-image.png` (1200x630px)
- [ ] Favicon in `public/favicon.ico`
- [ ] Environment variables in `.env`
- [ ] Run `npm run import-projects` to fetch your repositories
- [ ] Update skills in `src/data/skills.ts`
- [ ] Update timeline in `src/data/timeline.ts`
- [ ] Verify all certificates are in `public/certificates/`
- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env`
- [ ] Test contact form functionality
- [ ] Test all links and animations
- [ ] Run `npm run build` successfully

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Credits

- **Design Inspiration** - Modern portfolio trends
- **Icons** - [Lucide Icons](https://lucide.dev/)
- **Animations** - [Framer Motion](https://www.framer.com/motion/)
- **Fonts** - [Google Fonts (Inter)](https://fonts.google.com/)

## 📧 Contact

**Harshad Agrawal**
- GitHub: [@Harshad2321](https://github.com/Harshad2321)
- LinkedIn: [Harshad Agrawal](https://www.linkedin.com/in/harshad-agrawal-486964322)
- Email: harshad.agrawal@example.com

---

**Made with ❤️ and lots of ☕**
