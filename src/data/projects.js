import { useLanguage } from '../context/LanguageContext'; // Sesuaikan path import

export const useProjectsData = () => {
  const { t } = useLanguage();

  const PROJECTS = [
    {
      id: 'nutricca-app',
      index: 0,
      title: 'Nutricca - Health & Habit Tracker',
      year: '2026',
      url: 'https://www.nutricca.web.id',
      urlText: 'Visit Application',
      tech: [
        'Node.js',
        'React.js',
        'Tailwind CSS',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'Docker',
      ],
      imageId: [
        'nutricca-img-1.png',
        'nutricca-img-2.png',
        'nutricca-img-3.png',
      ],
      category: t('projects.nutricca.category'),
      role: t('projects.nutricca.role'),
      timeline: t('projects.nutricca.timeline'),
      services: t('projects.nutricca.services'),
      tagline: t('projects.nutricca.tagline'),
      challenge: t('projects.nutricca.challenge'),
      solution: t('projects.nutricca.solution'),
      hours: t('projects.nutricca.hours'),
      components: t('projects.nutricca.components'),
      satisfaction: t('projects.nutricca.satisfaction'),
    },
    {
      id: 'silacak-unigal',
      index: 1,
      title: 'SILACAK UNIGAL',
      year: '2026',
      url: 'https://github.com/stevevaijohnpettruci/si_manajemen_kehilangan_barang_unigal',
      urlText: 'View Repository',
      tech: [
        'Node.js',
        'React.js',
        'Tailwind CSS',
        'RabbitMQ',
        'PostgreSQL',
        'Docker',
      ],
      imageId: [
        'silacak-unigal-img-1.png',
        'silacak-unigal-img-2.png',
        'silacak-unigal-img-3.png',
      ],
      // Properti di bawah ini diambil dari translations.js
      category: t('projects.silacak.category'),
      role: t('projects.silacak.role'),
      timeline: t('projects.silacak.timeline'),
      services: t('projects.silacak.services'),
      tagline: t('projects.silacak.tagline'),
      challenge: t('projects.silacak.challenge'),
      solution: t('projects.silacak.solution'),
      hours: t('projects.silacak.hours'),
      components: t('projects.silacak.components'),
      satisfaction: t('projects.silacak.satisfaction'),
    },
    {
      id: 'Wildlens AR',
      index: 2,
      title: 'Wildlens AR',
      year: '2026',
      url: 'https://itch.io/e/35716141/bloomb-creative-published-wildlens-ar',
      urlText: 'View Download Link',
      tech: ['Unity', 'Vuforia Engine', 'C#', '3D Modeling'],
      imageId: [
        'wildlens-ar-img-1.webp',
        'wildlens-ar-img-2.webp',
        'wildlens-ar-img-3.webp',
      ],
      category: t('projects.wildlens.category'),
      role: t('projects.wildlens.role'),
      timeline: t('projects.wildlens.timeline'),
      services: t('projects.wildlens.services'),
      tagline: t('projects.wildlens.tagline'),
      challenge: t('projects.wildlens.challenge'),
      solution: t('projects.wildlens.solution'),
      hours: t('projects.wildlens.hours'),
      components: t('projects.wildlens.components'),
      satisfaction: t('projects.wildlens.satisfaction'),
    },
  ];

  return { PROJECTS };
};

export const SKILLS = [
  'React.js',
  'Node.js',
  'JavaScript',
  'PHP & Laravel',
  'FastAPI',
  'PostgreSQL & SQL',
  'RabbitMQ',
  'Docker',
  'Firebase',
  'Unity & Vuforia (AR)',
  'Tailwind CSS',
  'Git & GitHub',
];
