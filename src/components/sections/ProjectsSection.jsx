import ProjectCard from '../project/ProjectCard';
import { useProjectsData } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function ProjectsSection({ onViewProject }) {
  const { t } = useLanguage();
  const { PROJECTS } = useProjectsData();

  // Animasi untuk bagian header (Teks & Deskripsi)
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Animasi untuk grid kartu proyek
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2, // Mulai sedikit setelah header muncul
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="work"
      className="py-[80px] md:py-[120px] px-[clamp(24px,4.5vw,64px)] max-w-[1440px] mx-auto"
    >
      {/* HEADER SECTION - Terpicu saat di-scroll */}
      <motion.div
        variants={headerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-end justify-between flex-wrap gap-6 mb-12 pb-8 border-b border-white/5"
      >
        <div>
          <motion.p 
            variants={headerItemVariants}
            className="font-[var(--font-body)] text-[11px] font-medium text-[var(--clr-accent)] tracking-widest uppercase mb-3"
          >
            {t('projectsSection.label')}
          </motion.p>
          <motion.h2 
            variants={headerItemVariants}
            className="font-[var(--font-display)] font-extrabold text-[clamp(36px,10vw,52px)] md:text-[clamp(40px,5vw,64px)] tracking-tight text-[var(--clr-text)] m-0"
          >
            {t('projectsSection.title')}
          </motion.h2>
        </div>
        <motion.p 
          variants={headerItemVariants}
          className="hidden md:block font-[var(--font-body)] text-sm text-white/40 max-w-[260px] leading-relaxed text-right"
        >
          {t('projectsSection.description')}
        </motion.p>
      </motion.div>

      {/* GRID SECTION - Terpicu saat di-scroll */}
      <motion.div 
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(360px,auto)] md:auto-rows-[480px]"
      >
        {/* Proyek 1 */}
        <motion.div variants={cardVariants} className="md:col-span-8">
          <ProjectCard project={PROJECTS[0]} onView={onViewProject} />
        </motion.div>
        
        {/* Proyek 2 */}
        <motion.div variants={cardVariants} className="md:col-span-4">
          <ProjectCard project={PROJECTS[1]} onView={onViewProject} />
        </motion.div>
        
        {/* Proyek 3 */}
        <motion.div variants={cardVariants} className="md:col-span-4">
          <ProjectCard project={PROJECTS[2]} onView={onViewProject} />
        </motion.div>
        
        {/* Proyek 4 */}
        <motion.div variants={cardVariants} className="md:col-span-8">
          <ProjectCard project={PROJECTS[3]} onView={onViewProject} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ProjectsSection;