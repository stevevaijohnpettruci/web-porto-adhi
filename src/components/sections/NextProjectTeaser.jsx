import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function NextProjectTeaser({ project, onView }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onView(project.id)}
      className="group relative overflow-hidden cursor-pointer min-h-[300px] md:min-h-[420px] flex flex-col justify-end border-t border-[rgba(255,255,255,0.05)]"
    >
      <img
        src={`/image/${project.imageId[0]}`}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-20 transition-all duration-[650ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:opacity-45 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080809]/95 to-[#080809]/50" />

      <div className="relative p-[40px_24px] md:p-[80px_clamp(24px,4.5vw,64px)] max-w-[1440px] mx-auto w-full flex items-end justify-between gap-8">
        <div>
          <p className="font-[var(--font-body)] text-[11px] font-medium text-[rgba(255,255,255,0.35)] tracking-widest uppercase mb-4">
            {t('projectDetail.nextProject')}
          </p>
          <h2 className="font-[var(--font-display)] font-extrabold text-[clamp(48px,12vw,72px)] md:text-[clamp(56px,6.5vw,104px)] tracking-tighter text-white leading-none m-0">
            {project.title}
          </h2>
        </div>

        <div className="w-[52px] h-[52px] md:w-16 md:h-16 rounded-full bg-[#00D4FF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M4 11H18M18 11L11 4M18 11L11 18"
              stroke="#080809"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default NextProjectTeaser;
