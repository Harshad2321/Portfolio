/**
 * Site configuration - Update this file to customize your portfolio
 */

export const siteConfig = {
  // Personal Information
  name: 'Harshad Agrawal',
  title: 'AI & ML Student | Full-Stack Developer',
  tagline: 'Building intelligent systems and practical AI solutions',
  bio: `I'm a 2nd-year AI & ML student at Symbiosis Institute of Technology, Pune, passionate about creating impactful AI-driven applications. I love transforming complex problems into elegant solutions through code.

My journey in tech spans from building full-stack web applications to developing AI models for real-world challenges. I've participated in hackathons like NASA Space Apps Challenge and built projects ranging from city planning AI to exoplanet classifiers.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or working on my goal to build a Jarvis-like AI assistant. I'm currently seeking internship opportunities where I can apply my skills and continue learning.`,

  // Contact & Social
  email: 'harshad.agrawal2005@gmail.com',
  github: 'https://github.com/Harshad2321',
  linkedin: 'https://www.linkedin.com/in/harshad-agrawal-486964322',
  instagram: 'https://www.instagram.com/harshad_agrawal_2005/',
  leetcode: 'https://leetcode.com/u/harshadagrawal/',
  hackerrank: 'https://www.hackerrank.com/profile/harshad_agrawal1',
  website: 'https://harshad2321.github.io/Myself/',

  // Resume
  resumeUrl: '/resume.pdf', // Place your resume in public/resume.pdf

  // Theme
  theme: {
    default: 'dark', // 'dark' or 'light'
    palette: 'neon', // 'neon' or 'teal'
  },

  // SEO & Analytics
  seo: {
    title: 'Harshad Agrawal - AI & ML Portfolio',
    description:
      '2nd-year AI & ML student building innovative projects. Explore my work in artificial intelligence, machine learning, and full-stack development.',
    keywords: [
      'Harshad Agrawal',
      'AI Developer',
      'Machine Learning',
      'Full-Stack Developer',
      'Portfolio',
      'SIT Pune',
      'AIML',
    ],
    ogImage: '/og-image.png', // Place your OG image in public/
  },

  // Features toggle
  features: {
    themeToggle: true,
    certificateDownload: true,
    analytics: false, // Set to true if using analytics
  },
};

export default siteConfig;
