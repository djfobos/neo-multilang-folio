export interface Project {
  id: string;
  title: {
    ka: string;
    ru: string;
    en: string;
  };
  summary: {
    ka: string;
    ru: string;
    en: string;
  };
  problem: {
    ka: string;
    ru: string;
    en: string;
  };
  approach: {
    ka: string;
    ru: string;
    en: string;
  };
  outcome: {
    ka: string;
    ru: string;
    en: string;
  };
  role: string;
  stack: string[];
  duration: string;
  link?: string;
  github?: string;
  cover: string;
  screenshots: string[];
  featured: boolean;
  category: string[];
}

export const projects: Project[] = [
  {
    id: "qronikaplus",
    title: {
      ka: "Qronika Plus - საინფორმაციო პორტალი",
      ru: "Qronika Plus - Информационный портал",
      en: "Qronika Plus - News Portal"
    },
    summary: {
      ka: "მაღალშესრულებიანი საინფორმაციო ვებპორტალი თანამედროვე UI/UX-ით და სწრაფი კონტენტის მართვის სისტემით.",
      ru: "Высокопроизводительный новостной веб-портал с современным UI/UX и быстрой системой управления контентом.",
      en: "High-performance news portal with modern UI/UX and fast content management system."
    },
    problem: {
      ka: "საჭირო იყო შექმნილიყო სწრაფი, სკალირებადი საინფორმაციო პლატფორმა დიდი ტრაფიკისთვის, რომელიც უზრუნველყოფდა მყისიერ კონტენტის განახლებას და SEO ოპტიმიზაციას.",
      ru: "Требовалось создать быструю, масштабируемую новостную платформу для высокого трафика с мгновенным обновлением контента и SEO-оптимизацией.",
      en: "Needed to build a fast, scalable news platform for high traffic with instant content updates and SEO optimization."
    },
    approach: {
      ka: "გამოვიყენე WordPress + custom theme, WP REST API, Redis caching და CDN ინტეგრაცია. განვახორციელე ოპტიმიზებული კონტენტის მიწოდება lazy loading-ით და კრიტიკული CSS.",
      ru: "Использовал WordPress + кастомную тему, WP REST API, Redis кеширование и CDN интеграцию. Реализовал оптимизированную доставку контента с lazy loading и критическим CSS.",
      en: "Used WordPress + custom theme, WP REST API, Redis caching, and CDN integration. Implemented optimized content delivery with lazy loading and critical CSS."
    },
    outcome: {
      ka: "95+ Lighthouse ქულა, 40% უფრო სწრაფი page load, 60% გაზრდილი organic traffic, და ადმინისტრაციული პანელის 3x სიჩქარე.",
      ru: "95+ баллов Lighthouse, на 40% быстрее загрузка страниц, на 60% увеличен органический трафик, и в 3 раза быстрее админ-панель.",
      en: "95+ Lighthouse score, 40% faster page load, 60% increased organic traffic, and 3x faster admin panel."
    },
    role: "Lead Developer & Technical Architect",
    stack: ["WordPress", "PHP", "JavaScript", "SCSS", "Redis", "MySQL", "REST API"],
    duration: "3 months",
    link: "https://qronikaplus.ge/",
    cover: "/projects/qronika-cover.jpg",
    screenshots: ["/projects/qronika-1.jpg", "/projects/qronika-2.jpg", "/projects/qronika-3.jpg"],
    featured: true,
    category: ["WordPress", "News", "CMS"]
  },
  {
    id: "marazzi",
    title: {
      ka: "Marazzi Georgia - E-commerce პლატფორმა",
      ru: "Marazzi Georgia - E-commerce платформа",
      en: "Marazzi Georgia - E-commerce Platform"
    },
    summary: {
      ka: "პრემიუმ კერამიკული ფილების ონლაინ მაღაზია მულტი-კატეგორიული ფილტრაციით და სრულად ინტეგრირებული გადახდის სისტემებით.",
      ru: "Интернет-магазин премиальной керамической плитки с мульти-категорийной фильтрацией и полностью интегрированными платежными системами.",
      en: "Premium ceramic tile online store with multi-category filtering and fully integrated payment systems."
    },
    problem: {
      ka: "კლიენტს სჭირდებოდა თანამედროვე e-commerce გადაწყვეტა მძიმე პროდუქტების კატალოგის მართვისთვის, მრავალენოვანი მხარდაჭერით და რთული ფილტრაციის სისტემით.",
      ru: "Клиенту требовалось современное e-commerce решение для управления массивным каталогом продуктов с многоязычной поддержкой и сложной системой фильтрации.",
      en: "Client needed a modern e-commerce solution for managing a heavy product catalog with multilingual support and complex filtering system."
    },
    approach: {
      ka: "WooCommerce + custom plugin development, განახლებული კატალოგის არქიტექტურა, AJAX-based ფილტრები, Polylang მრავალენოვანიობისთვის, და custom checkout flow.",
      ru: "WooCommerce + разработка кастомных плагинов, улучшенная архитектура каталога, фильтры на AJAX, Polylang для многоязычности, и кастомный checkout flow.",
      en: "WooCommerce + custom plugin development, enhanced catalog architecture, AJAX-based filters, Polylang for multilingual, and custom checkout flow."
    },
    outcome: {
      ka: "2000+ პროდუქტი ეფექტურად მართული, 85% შემცირებული page load კატალოგში, 45% conversion rate ზრდა, სრულად რესპონსიული.",
      ru: "2000+ товаров эффективно управляются, 85% сокращение загрузки страниц в каталоге, 45% рост конверсии, полностью адаптивный.",
      en: "2000+ products efficiently managed, 85% reduced page load in catalog, 45% conversion rate increase, fully responsive."
    },
    role: "Full-Stack Developer",
    stack: ["WooCommerce", "WordPress", "PHP", "JavaScript", "Polylang", "Stripe", "MySQL"],
    duration: "4 months",
    link: "https://marazzi.ge/",
    cover: "/projects/marazzi-cover.jpg",
    screenshots: ["/projects/marazzi-1.jpg", "/projects/marazzi-2.jpg", "/projects/marazzi-3.jpg"],
    featured: true,
    category: ["E-commerce", "WooCommerce", "Multilingual"]
  },
  {
    id: "mjc",
    title: {
      ka: "MJC - კორპორატიული ვებსაიტი",
      ru: "MJC - Корпоративный сайт",
      en: "MJC - Corporate Website"
    },
    summary: {
      ka: "ელეგანტური კორპორატიული ვებსაიტი ინტერაქტიული კონტენტით, ანიმაციებით და მოწინავე SEO სტრატეგიით.",
      ru: "Элегантный корпоративный сайт с интерактивным контентом, анимациями и продвинутой SEO стратегией.",
      en: "Elegant corporate website with interactive content, animations, and advanced SEO strategy."
    },
    problem: {
      ka: "საჭირო იყო სერიოზული brand presence ონლაინ სივრცეში, რომელიც აჩვენებდა კომპანიის პროფესიონალიზმს და ტრასტს, კონკურენტულ გარემოში.",
      ru: "Требовалось серьезное присутствие бренда в онлайн-пространстве, демонстрирующее профессионализм и доверие компании в конкурентной среде.",
      en: "Needed strong brand presence in online space, showcasing company professionalism and trust in competitive environment."
    },
    approach: {
      ka: "შევქმენი custom WordPress theme თანამედროვე design system-ით, GSAP ანიმაციებით, და structured data markup. განვახორციელე comprehensive SEO audit და on-page ოპტიმიზაცია.",
      ru: "Создал кастомную WordPress тему с современной дизайн-системой, GSAP анимациями и structured data markup. Провел всесторонний SEO аудит и on-page оптимизацию.",
      en: "Built custom WordPress theme with modern design system, GSAP animations, and structured data markup. Implemented comprehensive SEO audit and on-page optimization."
    },
    outcome: {
      ka: "98 Lighthouse SEO ქულა, 120% ზრდა organic search visibility-ში პირველ 3 თვეში, და professional brand image დამკვიდრება.",
      ru: "98 баллов Lighthouse SEO, 120% рост видимости в органическом поиске за первые 3 месяца, и установление профессионального имиджа бренда.",
      en: "98 Lighthouse SEO score, 120% growth in organic search visibility in first 3 months, and established professional brand image."
    },
    role: "Lead Developer & SEO Specialist",
    stack: ["WordPress", "PHP", "JavaScript", "GSAP", "SCSS", "Schema.org"],
    duration: "2 months",
    link: "https://mjc.ge/",
    cover: "/projects/mjc-cover.jpg",
    screenshots: ["/projects/mjc-1.jpg", "/projects/mjc-2.jpg"],
    featured: true,
    category: ["Corporate", "WordPress", "SEO"]
  },
  {
    id: "radars",
    title: {
      ka: "Radars.ge - მონაცემთა ვიზუალიზაციის პლატფორმა",
      ru: "Radars.ge - Платформа визуализации данных",
      en: "Radars.ge - Data Visualization Platform"
    },
    summary: {
      ka: "ინტერაქტიული მონაცემთა ვიზუალიზაციის პლატფორმა რეალურ დროში dashboard-ებით და complex data filtering-ით.",
      ru: "Интерактивная платформа визуализации данных с дашбордами в реальном времени и сложной фильтрацией данных.",
      en: "Interactive data visualization platform with real-time dashboards and complex data filtering."
    },
    problem: {
      ka: "სჭირდებოდა ძლიერი ინსტრუმენტი დიდი მოცულობის მონაცემების ვიზუალიზაციისთვის user-friendly ინტერფეისით, real-time updates-ით.",
      ru: "Требовался мощный инструмент для визуализации больших объемов данных с user-friendly интерфейсом и обновлениями в реальном времени.",
      en: "Needed powerful tool for visualizing large data volumes with user-friendly interface and real-time updates."
    },
    approach: {
      ka: "React + D3.js ვიზუალიზაციებისთვის, WebSocket real-time connection-ებისთვის, Redux state management, და optimized rendering მძიმე chart-ებისთვის.",
      ru: "React + D3.js для визуализаций, WebSocket для real-time соединений, Redux для state management, и оптимизированный rendering для тяжелых графиков.",
      en: "React + D3.js for visualizations, WebSocket for real-time connections, Redux for state management, and optimized rendering for heavy charts."
    },
    outcome: {
      ka: "ძალიან რთული მონაცემები გახდა მარტივად დასანახი, 75% შემცირდა დროს data analysis-ში, smooth 60fps ანიმაციები 10,000+ data points-ზე.",
      ru: "Очень сложные данные стали легко видимыми, на 75% сократилось время анализа данных, плавные 60fps анимации на 10,000+ точках данных.",
      en: "Very complex data became easily visible, 75% reduced time in data analysis, smooth 60fps animations on 10,000+ data points."
    },
    role: "Frontend Lead & Data Visualization Specialist",
    stack: ["React", "D3.js", "WebSocket", "Redux", "TypeScript", "Tailwind CSS"],
    duration: "5 months",
    link: "https://radars.ge/",
    cover: "/projects/radars-cover.jpg",
    screenshots: ["/projects/radars-1.jpg", "/projects/radars-2.jpg", "/projects/radars-3.jpg"],
    featured: true,
    category: ["React", "Data Viz", "Real-time"]
  },
  {
    id: "sfornews",
    title: {
      ka: "SforNews - ახალი ამბების აგრეგატორი",
      ru: "SforNews - Агрегатор новостей",
      en: "SforNews - News Aggregator"
    },
    summary: {
      ka: "მოწინავე ახალი ამბების აგრეგაციის პლატფორმა მრავალი წყაროდან, AI-powered კონტენტის კატეგორიზაციით.",
      ru: "Продвинутая платформа агрегации новостей из множества источников с AI-powered категоризацией контента.",
      en: "Advanced news aggregation platform from multiple sources with AI-powered content categorization."
    },
    problem: {
      ka: "მომხმარებლებს სჭირდებოდათ ერთიანი პლატფორმა სხვადასხვა წყაროდან ახალი ამბების მოსაძიებლად, smart filtering-ით და personalization-ით.",
      ru: "Пользователям требовалась единая платформа для поиска новостей из разных источников со smart-фильтрацией и персонализацией.",
      en: "Users needed unified platform to find news from different sources with smart filtering and personalization."
    },
    approach: {
      ka: "Next.js SSR პლატფორმა, RSS feed parsing, OpenAI API content categorization, user preference system, და server-side caching სტრატეგია.",
      ru: "Next.js SSR платформа, парсинг RSS-лент, категоризация контента через OpenAI API, система пользовательских предпочтений и server-side кеширование.",
      en: "Next.js SSR platform, RSS feed parsing, OpenAI API content categorization, user preference system, and server-side caching strategy."
    },
    outcome: {
      ka: "50+ news source ინტეგრაცია, <2s პირველი page load, 92 Lighthouse score, მოხმარებელთა engagement 3x გაზრდა personalized feed-ის წყალობით.",
      ru: "Интеграция 50+ источников новостей, <2s загрузка первой страницы, 92 балла Lighthouse, 3x рост вовлеченности пользователей благодаря персонализированной ленте.",
      en: "50+ news source integration, <2s first page load, 92 Lighthouse score, 3x user engagement increase thanks to personalized feed."
    },
    role: "Full-Stack Developer & Technical Lead",
    stack: ["Next.js", "React", "TypeScript", "OpenAI API", "PostgreSQL", "Vercel"],
    duration: "4 months",
    link: "https://sfornews.com/",
    cover: "/projects/sfornews-cover.jpg",
    screenshots: ["/projects/sfornews-1.jpg", "/projects/sfornews-2.jpg"],
    featured: true,
    category: ["Next.js", "AI", "Aggregation"]
  }
];
