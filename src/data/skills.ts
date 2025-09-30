export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'HTML/CSS', level: 98, category: 'frontend' },
  { name: 'SCSS/SASS', level: 90, category: 'frontend' },
  { name: 'Framer Motion', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'PHP', level: 90, category: 'backend' },
  { name: 'WordPress', level: 95, category: 'backend' },
  { name: 'WooCommerce', level: 90, category: 'backend' },
  { name: 'REST API', level: 90, category: 'backend' },
  { name: 'MySQL', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Webpack/Vite', level: 85, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'Figma', level: 80, category: 'tools' },
  
  // Other
  { name: 'SEO', level: 90, category: 'other' },
  { name: 'Performance Optimization', level: 95, category: 'other' },
  { name: 'Accessibility (WCAG)', level: 85, category: 'other' },
  { name: 'i18n/Localization', level: 90, category: 'other' },
];

export const skillCategories = {
  ka: {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'ხელსაწყოები',
    other: 'სხვა'
  },
  ru: {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Инструменты',
    other: 'Прочее'
  },
  en: {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    other: 'Other'
  }
};

