/**
 * Single source of truth for portfolio content.
 * Mirrors the structured data from portfolio3.0 (Prasan Bora — canonical profile).
 */

export const SITE = {
  name: "Prasan Bora",
  role: "Software Engineer",
  tagline: "Software Engineer • Full Stack • India",
  hero: {
    typewriter: [
      "Software Engineer",
      "Full-Stack Developer",
      "React Native Engineer",
      "Backend & APIs",
      "AI Integrations",
    ],
    headline: "Hi, I'm Prasan",
    lead:
      "I build products people actually use. Web apps, mobile apps, backend systems, AI integrations—whatever the problem needs. Clean code, shipped fast.",
  },
  about: {
    summary:
      "I work across the entire stack—mobile, web, backend, AI. I've shipped features used by real people, fixed bugs at 2am, and learned that good code is code that actually solves the problem.",
    long: [
      "I'm a software engineer who builds products across the full stack. React Native for mobile, Next.js for web, NestJS and Prisma for backend. Whatever the problem needs.",
      "Some things I've shipped:",
    ],
    bullets: [
      "Built AI agents that automated 80% of manual operations",
      "Shipped the Cooking Mode feature from zero to production",
      "Fixed performance issues that were making the mobile app slow",
      "Set up CI/CD so deployments stopped being painful",
      "Built scalable backend APIs and system architecture that kept up with rapid product growth",
      "Set up the staging environment so the team could test without breaking prod",
      "Integrated PostHog for data-driven decisions and product improvements",
    ],
    closing: [
      "Before this, I did an internship, ran PR for a college club, and built random projects to learn things. Still doing that last part.",
      "I don't have a grand philosophy about code. I just try to build things that work, learn from mistakes, and ship often.",
    ],
  },
  contact: {
    email: "prasanbora23@gmail.com",
    location: "India",
    resume:
      "https://drive.google.com/file/d/1dPPUjzVTe544kEZB2ZwwFyqXBLDFQxXR/view",
  },
  socials: {
    github: "https://github.com/PrasanBora",
    linkedin: "https://www.linkedin.com/in/prasan-bora-943293184/",
    twitter: "https://twitter.com/its_prasan",
    instagram: "https://www.instagram.com/prasan_bora/",
    leetcode: "https://leetcode.com/u/unknown__/",
    devto: "https://dev.to/prasan_bora",
  },
};

export const HIGHLIGHTS = [
  { icon: "Sparkles", title: "AI Agents", description: "Automated 80% of manual ops" },
  { icon: "Server", title: "Backend APIs", description: "Built for real traffic" },
  { icon: "Smartphone", title: "Mobile Apps", description: "React Native, shipped fast" },
  { icon: "Code", title: "Web Apps", description: "Next.js, TypeScript" },
];

export const EXPERIENCE = [
  {
    role: "Software Developer",
    org: "Chefadora",
    period: "Nov 2024 – Present",
    summary:
      "Building scalable backend services, delivering seamless mobile/web experiences, and driving innovation through automation and AI-driven systems.",
    bullets: [
      "Built AI agents that automated 80% of manual operations",
      "Collaborated directly with founders to shape product strategy and ship impactful features to a global audience",
      "Shipped the Cooking Mode feature from zero to production",
      "Set up CI/CD pipelines and a staging environment for the team",
      "Integrated PostHog for data-driven product decisions",
    ],
  },
  {
    role: "Software Developer",
    org: "Zarle Infotech",
    period: "Nov 2024 – Present",
    summary:
      "Contributing to full-stack initiatives using TypeScript, Next.js and Vercel. Hybrid, Noida.",
    bullets: [
      "Built scalable backend APIs and system architecture that kept up with rapid product growth",
      "Fixed performance issues impacting mobile app responsiveness",
    ],
  },
  {
    role: "Web Developer (Intern)",
    org: "CantiLever.in",
    period: "Aug 2024",
    summary:
      "Collaborated with the team to design and develop full-stack web applications using the MERN stack.",
    bullets: ["Built full-stack apps with MongoDB, Express.js, React, and Node.js"],
  },
  {
    role: "Head of Public Relations",
    org: "MAIT Alumni Cell",
    period: "May 2023 – Jun 2024",
    summary:
      "Led the PR team overseeing Public Relations, design projects, content creation, and social media management.",
    bullets: [
      "Directed team efforts to shape institute communications to the community",
      "Managed social platforms and built an interactive online space for alumni",
    ],
  },
  {
    role: "Design Team Member",
    org: "MAIT Alumni Cell",
    period: "Jan 2023 – Jan 2024",
    summary:
      "Created social posts, event assets, and coordinated cross-team design integrations.",
    bullets: [
      "Created mobile-first social posts that boosted engagement",
      "Designed invitations and banners for alumni events",
      "Worked across marketing, communication and events teams for seamless design integration",
    ],
  },
  {
    role: "Campus Ambassador",
    org: "Shaastra, IIT Madras",
    period: "Dec 2021 – Feb 2022",
    summary:
      "Organized campus events and managed social media outreach to drive engagement.",
    bullets: [
      "Organized campus-wide promotional events, workshops and informational sessions",
      "Leveraged social media to drive online visibility for Shaastra",
    ],
  },
  {
    role: "Operations Intern",
    org: "Jacq",
    period: "Nov 2021 – Jan 2022",
    summary:
      "Hands-on with e-commerce ops, WordPress site management and product onboarding.",
    bullets: [
      "Gained insights into e-commerce, marketing and cloth-printing operations",
      "Managed WordPress backend — adding products and optimizing UX",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech, Electronics & Communication Engineering",
    org: "Maharaja Agrasen Institute of Technology, New Delhi",
    period: "2020 – 2024",
    note: "CGPA: 8.6 · Coursework: DSA, OOPS, OS, DBMS",
  },
  {
    degree: "AISSCE, CBSE (Class XII)",
    org: "Govt. Boys Sr. Sec. School No. 3, Najafgarh",
    period: "2019",
    note: "Percentage: 92%",
  },
];

export const FEATURED_WORKS = [
  {
    id: "chefadora",
    category: "AI Platform · 2024–Present",
    title: "Chefadora",
    subtitle: "AI-powered cooking assistant",
    description:
      "Built the Cooking Mode feature and AI agents that handle most of the platform's operations. Working across the full stack — React Native, Next.js and Node.js.",
    href: "https://www.chefadora.com/cooking-ai",
    cta: "See the product",
    tags: ["React Native", "Next.js", "Node.js", "AI"],
    accent: "from-[#7fd3cb] to-[#5fb0a8]",
  },
  {
    id: "korperheil",
    category: "Client Work · 2025",
    title: "Korperheil",
    subtitle: "Physiotherapy clinic website",
    description:
      "A clean, fast website for a physiotherapy clinic. Focused on performance, accessibility, and getting visitors to book appointments.",
    href: "https://korperheil.com",
    cta: "Visit site",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "himalayan-valley",
    category: "E-Commerce · 2025",
    title: "Himalayan Valley",
    subtitle: "Premium tea e-commerce platform",
    description:
      "Full-stack e-commerce platform for a Himalayan tea brand. Custom catalog with SSR for SEO, integrated cart and checkout, plus a dynamic blog system (TeaTales) on a headless CMS. Optimized Core Web Vitals via lazy-loaded images and edge caching.",
    href: "https://www.himalayanvalleyproduct.com/",
    cta: "Visit site",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
];

export const PROJECTS = [
  {
    id: "portfolio-3",
    title: "Portfolio 3.0",
    date: "2025 — Present",
    description:
      "My latest personal portfolio — a Next.js 14 + TypeScript site with Tailwind, Framer Motion animations, a liquid-ether WebGL hero and per-page metadata. Source of truth for all my work, writing and contact info.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/PrasanBora/portfolio3.0",
    demo: "https://portfolio3-0-mocha.vercel.app/",
    image: "portfolio3",
  },
  {
    id: "linkedin-clone",
    title: "LinkedIn Clone",
    date: "Oct 2024 – Nov 2024",
    description:
      "A full-stack LinkedIn clone built with the MERN stack. Implements user profiles, posts, connections, search and JWT-based authentication for a responsive social experience.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    repo: "https://github.com/PrasanBora/Linkedin_clone",
    demo: "",
    image: "linkedin",
  },
  {
    id: "chatpod",
    title: "Chatpod",
    date: "Aug 2024 – Sep 2024",
    description:
      "A real-time chat application built with Node.js and Socket.io. Supports group chat with multi-client updates and instant message delivery across connected users.",
    tech: ["Node.js", "Socket.io", "React"],
    repo: "https://github.com/PrasanBora/Chatpod",
    demo: "",
    image: "chatpod",
  },
  {
    id: "movie-plus",
    title: "Movie Plus",
    date: "Jul 2024 – Aug 2024",
    description:
      "A movie searching web app built with React using the OMDB API. Browse movies with banners, release years, and detailed information in a clean, responsive interface.",
    tech: ["React", "OMDB API", "JavaScript"],
    repo: "https://github.com/PrasanBora/React-Movie_Plus",
    demo: "https://prasanbora.github.io/React-Movie_Plus/",
    image: "movie_plus",
  },
  {
    id: "weather-app",
    title: "Weather App",
    date: "Jun 2024 – Jul 2024",
    description:
      "Weather application showing real-time conditions for any location using OpenWeatherAPI. Supports city search, geolocation and detailed weather metrics.",
    tech: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
    repo: "https://github.com/PrasanBora/Weather_App",
    demo: "https://prasanbora.github.io/Weather_App/",
    image: "webapp",
  },
  {
    id: "2048",
    title: "2048 Game",
    date: "May 2024 – Jun 2024",
    description:
      "A faithful clone of the 2048 puzzle game built with vanilla JavaScript and DOM manipulation. Slide numbered tiles to combine them and reach the 2048 tile.",
    tech: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/PrasanBora/2048",
    demo: "https://prasanbora.github.io/2048/",
    image: "domgame",
  },
  {
    id: "pomodoro-extension",
    title: "Pomodoro Extension",
    date: "Apr 2024 – May 2024",
    description:
      "A Chrome browser extension implementing the Pomodoro technique with customizable session durations, short and long breaks to boost productivity.",
    tech: ["JavaScript", "Chrome Extension"],
    repo: "https://github.com/PrasanBora/Pomorodo_extension",
    demo: "",
    image: "pomodoro",
  },
];

export const TECH = {
  Frontend: [
    { title: "JavaScript", desc: "Core web language" },
    { title: "TypeScript", desc: "Type-safe JavaScript" },
    { title: "React.js", desc: "Component-based UI library" },
    { title: "Next.js", desc: "React framework with SSR" },
    { title: "React Native", desc: "Cross-platform mobile apps" },
    { title: "Expo", desc: "React Native toolchain" },
    { title: "Tailwind CSS", desc: "Utility-first CSS framework" },
  ],
  Backend: [
    { title: "C++", desc: "Systems programming" },
    { title: "Node.js", desc: "JavaScript runtime for servers" },
    { title: "Express.js", desc: "Fast Node.js web framework" },
    { title: "NestJS", desc: "Scalable Node.js framework" },
    { title: "Socket.io", desc: "Real-time communication" },
    { title: "Prisma", desc: "Type-safe database ORM" },
    { title: "Strapi", desc: "Headless CMS platform" },
  ],
  Databases: [
    { title: "MongoDB", desc: "NoSQL document database" },
    { title: "PostgreSQL", desc: "Advanced relational database" },
    { title: "Redis", desc: "In-memory data structure store" },
  ],
  "Tools & Infra": [
    { title: "Git", desc: "Version control" },
    { title: "GitHub Actions", desc: "CI/CD automation" },
    { title: "Docker", desc: "Container platform" },
    { title: "Jest", desc: "JavaScript testing" },
    { title: "Postman", desc: "API development" },
    { title: "Sentry", desc: "Error tracking" },
    { title: "PostHog", desc: "Product analytics" },
    { title: "Android Studio", desc: "Android IDE" },
    { title: "Xcode", desc: "iOS IDE" },
    { title: "OpenAI API", desc: "AI integrations" },
    { title: "Figma", desc: "Design to code" },
    { title: "AWS", desc: "Cloud infrastructure" },
    { title: "Vercel", desc: "Deployment platform" },
    { title: "Terraform", desc: "Infrastructure as code" },
  ],
};

export const SERVICES = [
  { title: "Web Apps", desc: "Full websites or specific features." },
  { title: "Mobile Apps", desc: "React Native, iOS and Android." },
  { title: "Backend & APIs", desc: "The stuff that makes apps work." },
  { title: "Performance Fixes", desc: "Making slow things fast." },
  { title: "Technical Consulting", desc: "Advice on architecture decisions." },
  { title: "Code Reviews", desc: "Second pair of eyes on your code." },
];

export const WRITING = [
  {
    title: "Upgrading PostgreSQL 13 to 17 on AWS RDS with Minimal Downtime",
    summary:
      "A practical guide on upgrading PostgreSQL on AWS RDS while keeping downtime to a minimum.",
    href:
      "https://dev.to/prasan_bora/upgrading-postgresql-13-to-17-on-aws-rds-with-minimal-downtime-29eo",
    publication: "dev.to",
  },
];
