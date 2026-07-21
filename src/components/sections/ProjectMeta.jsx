import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function ProjectMeta({ project }) {
  const { t } = useLanguage();

  // Animasi container yang terpicu oleh scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animasi item slide-up
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="border-b border-white/5 py-[clamp(40px,5vw,64px)] px-[clamp(24px,4.5vw,64px)] max-w-[1440px] mx-auto"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          { id: 'role', label: t('Role') || 'Role', value: project.role },
          {
            id: 'timeline',
            label: t('Timeline') || 'Timeline',
            value: project.timeline,
          },
          {
            id: 'services',
            label: t('Services') || 'Services',
            value: project.services?.join(', '),
          },
          {
            id: 'tech',
            label: t('Tech Stack') || 'Tech Stack',
            value: project.tech?.join(', '),
          },
        ].map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <p className="font-[var(--font-body)] text-[11px] font-medium text-white/30 tracking-widest uppercase m-0 mb-3">
              {item.label}
            </p>
            <p className="font-[var(--font-body)] text-[15px] text-white/80 leading-relaxed m-0">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectMeta;