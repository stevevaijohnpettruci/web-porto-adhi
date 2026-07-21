import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function CaseStudyContent({ project }) {
  const { t } = useLanguage();

  // Animasi container per baris
  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animasi item slide up
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Animasi khusus gambar (scale down + fade in)
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto py-[56px] md:py-[80px] px-[clamp(24px,4.5vw,64px)]">
      {/* Overview row */}
      <motion.div
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-10 md:gap-20 items-start mb-6"
      >
        <motion.div variants={itemVariants}>
          <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-[var(--clr-text)] m-0 mb-6">
            {t('projectDetail.overview')}
          </h2>
          <p className="font-[var(--font-body)] text-[17px] leading-relaxed text-white/50 m-0">
            {project.tagline}
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="p-7 md:p-10 rounded-xl bg-[var(--clr-surface)] border border-white/5 flex flex-col justify-center"
        >
          <p className="font-[var(--font-body)] text-[11px] text-white/30 tracking-widest uppercase mb-3">
            {t('projectDetail.year')}
          </p>
          <p className="font-[var(--font-display)] font-bold text-5xl md:text-7xl tracking-tighter text-[var(--clr-accent)] m-0 leading-none">
            {project.year}
          </p>
        </motion.div>
      </motion.div>

      {/* Full-width image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={imageVariants}
        className="rounded-xl overflow-hidden bg-[var(--clr-surface)] aspect-[21/9] mb-6"
      >
        <img
          src={`/image/${project.imageId[0]}`}
          alt={`${project.title} overview`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Challenge row */}
      <motion.div
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-6 mb-6"
      >
        <motion.div
          variants={itemVariants}
          className="p-7 md:p-10 rounded-xl bg-[var(--clr-surface)] border border-white/5"
        >
          <p className="font-[var(--font-body)] text-[11px] font-medium text-[var(--clr-accent)] tracking-widest uppercase mb-5">
            {t('projectDetail.theChallenge')}
          </p>
          <p className="font-[var(--font-body)] text-[17px] leading-relaxed text-white/60 m-0">
            {project.challenge}
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-xl overflow-hidden bg-[var(--clr-surface)] min-h-[280px]"
        >
          <img
            src={`/image/${project.imageId[1]}`}
            alt="Challenge visual"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Solution row */}
      <motion.div
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-6 mb-6"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-xl overflow-hidden bg-[var(--clr-surface)] min-h-[240px] md:min-h-[280px] order-2 md:order-1"
        >
          <img
            src={`/image/${project.imageId[2]}`}
            alt="Solution visual"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="p-7 md:p-10 rounded-xl bg-[var(--clr-surface)] border border-white/5 order-1 md:order-2"
        >
          <p className="font-[var(--font-body)] text-[11px] font-medium text-[var(--clr-accent)] tracking-widest uppercase mb-5">
            {t('projectDetail.theSolution')}
          </p>
          <p className="font-[var(--font-body)] text-[17px] leading-relaxed text-white/60 m-0">
            {project.solution}
          </p>
        </motion.div>
      </motion.div>

      {/* Stats bento */}
      <motion.div
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        {[
          {
            label: t('projectDetail.stats.hours'),
            value: project.hours ? `${project.hours}+` : '0',
            unit: 'hrs',
          },
          {
            label: t('projectDetail.stats.components'),
            value: project.components || '0',
            unit: 'unique',
          },
          {
            label: t('projectDetail.stats.satisfaction'),
            value: project.satisfaction || '0',
            unit: '%',
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-7 md:p-10 rounded-xl bg-[var(--clr-surface)] border border-white/5"
          >
            <p className="font-[var(--font-body)] text-[11px] font-medium text-white/30 tracking-widest uppercase mb-4">
              {stat.label}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-[var(--font-display)] font-extrabold text-[48px] md:text-[64px] tracking-tighter text-[var(--clr-accent)] leading-none">
                {stat.value}
              </span>
              <span className="font-[var(--font-body)] text-sm text-white/30">
                {stat.unit}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CaseStudyContent;
