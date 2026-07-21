import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function ProjectHero({ project }) {
  const { language } = useLanguage();
  const category =
    language === 'id' && project.category_id
      ? project.category_id
      : project.category;

  // Animasi untuk teks agar muncul berurutan
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4, // Mulai setelah gambar sedikit terlihat
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative h-[80vh] min-h-[480px] overflow-hidden bg-[#080809]">
      {/* Animasi Zoom-out perlahan pada background */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        src={`/image/${project.imageId[0]}`}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-[#080809]/55 to-[#080809]/20" />
      
      <motion.div 
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 p-[clamp(24px,4.5vw,64px)] max-w-[1440px] mx-auto"
      >
        <motion.p 
          variants={textItemVariants}
          className="font-[var(--font-body)] text-[11px] font-medium text-[#00D4FF] tracking-widest uppercase mb-4"
        >
          {category}
        </motion.p>
        <motion.h1 
          variants={textItemVariants}
          className="font-[var(--font-display)] font-extrabold text-[clamp(52px,7.5vw,120px)] tracking-tighter text-white leading-none m-0"
        >
          {project.title}
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default ProjectHero;