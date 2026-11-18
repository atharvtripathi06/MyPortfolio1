/**
 * Single source of truth for the portfolio content.
 * Edit copy, links and tags here — the components only handle layout.
 */

export const profile = {
  name: 'Atharv Tripathi',
  role: 'Computer Science & Engineering Student',
  shortRole: 'CS undergrad · BIT Bangalore',
  location: 'Bangalore, India',
  college: 'Bangalore Institute of Technology',
  focus: 'AI, data-driven systems & the web',
  email: 'atharvtripathi2118@gmail.com',
  github: 'https://github.com/atharvtripathi06',
  linkedin: 'https://www.linkedin.com/in/atharv-tripathi-070466433',
  aquasense: 'https://aquasense-2-0.vercel.app/',
};

export const heroFacts = [
  { icon: 'mapPin', text: 'Bangalore, India' },
  { icon: 'graduation', text: 'B.E. CSE · Bangalore Institute of Technology' },
  { icon: 'sparkles', text: 'Building with AI, data and the web' },
];

export const skillGroups = [
  {
    icon: 'code',
    title: 'Core Languages',
    copy: 'The fundamentals I keep sharpening — logic, memory and clean structure.',
    tags: ['C', 'Java', 'HTML & CSS'],
  },
  {
    icon: 'layers',
    title: 'Web & Delivery',
    copy: 'From a layout in the browser to a live URL people can actually open.',
    tags: ['Next.js', 'React', 'Responsive UI', 'Vercel'],
  },
  {
    icon: 'cpu',
    title: 'AI & Data',
    copy: 'Using models and real-world signals to make software that decides well.',
    tags: ['AI Prompting', 'ML Concepts', 'Data-driven UI'],
  },
  {
    icon: 'leaf',
    title: 'Domain & Systems',
    copy: 'Software for the physical world — sensors, soil and water.',
    tags: ['Smart Agriculture', 'Soil Physics', 'Rapid Prototyping'],
  },
];

export const exploring = [
  'App Router patterns',
  'Applied machine learning',
  'Systems design',
  'Interface craft',
];

export const project = {
  name: 'AquaSense 2.0',
  tagline: 'Smart Irrigation & Soil Health Optimization',
  category: 'Smart Agriculture',
  description:
    'AquaSense decides if, when, and how much to irrigate using live weather inputs, soil physics, crop growth stage metrics, and a trained machine learning model.',
  principle:
    'Do not irrigate simply because it is time to irrigate. AquaSense evaluates root-zone moisture, crop stage, soil retention, forecast rainfall, and application efficiency before recommending a single drop.',
  flow: [
    {
      icon: 'cloudRain',
      label: '01 · Inputs',
      title: 'Live weather',
      text: 'Rainfall, humidity and the forecast are pulled in every cycle.',
    },
    {
      icon: 'gauge',
      label: '02 · Model',
      title: 'Soil & crop state',
      text: 'Root-zone moisture, retention and growth stage are evaluated.',
    },
    {
      icon: 'droplet',
      label: '03 · Output',
      title: 'Irrigation advice',
      text: 'If, when and how much to water — not a fixed timer.',
    },
  ],
  stack: ['Machine Learning', 'Soil Physics', 'Live Weather API', 'Next.js', 'Vercel'],
  meta: [
    { label: 'Role', value: 'Creator & developer' },
    { label: 'Stack', value: 'Next.js · Vercel' },
    { label: 'Status', value: 'Live' },
  ],
};

export const achievements = [
  {
    icon: 'droplet',
    kicker: 'Flagship build',
    title: 'AquaSense 2.0',
    text: 'Designed and shipped a full irrigation decision engine that weighs soil, crop and weather data before recommending water.',
  },
  {
    icon: 'graduation',
    kicker: 'Academic',
    title: 'B.E. Computer Science',
    text: 'Studying Computer Science & Engineering at Bangalore Institute of Technology, Bangalore.',
  },
  {
    icon: 'sparkles',
    kicker: 'Way of working',
    title: 'AI-first builder',
    text: 'Turning ideas into working interfaces quickly with AI-assisted development and rapid prototyping.',
  },
];

export const openTo = [
  {
    icon: 'graduation',
    title: 'Internships & engineering roles',
    text: 'Product-minded teams shipping software people actually use.',
  },
  {
    icon: 'users',
    title: 'Hackathons & collaboration',
    text: 'Fast, collaborative builds with people who care about the details.',
  },
  {
    icon: 'terminal',
    title: 'Freelance web projects',
    text: 'Landing pages, dashboards and interactive interfaces.',
  },
  {
    icon: 'sparkles',
    title: 'AI tooling experiments',
    text: 'Prompt-driven products and rapid prototypes worth trying.',
  },
];

export const replyNote = {
  icon: 'clock',
  title: 'Usually replies within a day',
  text: 'I read every message myself — no forms, no bots, just a direct line to my inbox.',
};

export const projectNotes = [
  {
    icon: 'terminal',
    title: 'More builds in progress',
    text: 'New experiments in AI tooling and web interfaces are currently in development.',
  },
  {
    icon: 'users',
    title: 'Open for collaboration',
    text: 'Have an idea worth prototyping? I am always up for building with people who care about the details.',
    link: { href: '#contact', label: 'Start a conversation' },
  },
];
