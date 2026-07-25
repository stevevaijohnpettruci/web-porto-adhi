import AbstractShape from '../ui/AbstractShape';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function HeroSection({ onViewWork }) {
  const { t } = useLanguage();

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.2,   
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

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.4 },
    },
  };

  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-[80px] px-[clamp(24px,4.5vw,64px)] max-w-[1440px] mx-auto relative box-border">
      <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-12 md:gap-16 items-center w-full">
        {/* Left: copy */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={textItemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-12">
            <span className="w-2 h-2 rounded-full bg-[var(--clr-accent)] shrink-0" />
            <span className="font-[var(--font-body)] text-[13px] text-white/55 tracking-wide">
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={textItemVariants} className="font-[var(--font-display)] font-extrabold text-[clamp(48px,12vw,72px)] md:text-[clamp(56px,6vw,96px)] leading-none tracking-tight text-[var(--clr-text)] mb-6">
            {t('hero.titlePrefix')}{' '}
            <span className="text-[var(--clr-accent)]">
              Adhi Nur
              <br />
              Ramadan
            </span>
            {t('hero.titleSuffix')}
            <br />
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={textItemVariants} className="font-[var(--font-body)] text-base md:text-lg leading-relaxed text-white/50 max-w-[480px] mb-12">
            {t('hero.subtitle')}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={textItemVariants} className="flex items-center gap-4 flex-wrap">
            <motion.button
              onClick={onViewWork}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-[var(--font-body)] font-medium text-[15px] text-[#080809] bg-[var(--clr-accent)] border-none px-8 py-4 rounded-full cursor-pointer tracking-tight transition-colors duration-300 hover:bg-[#33DCFF] hover:shadow-[0_16px_40px_rgba(0,212,255,0.28)]"
            >
              {t('hero.viewWork')}
            </motion.button>
            <motion.a
              href="/CV Adhi Nur Ramadan Terbaru 2026 Updated Fix.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-[var(--font-body)] font-medium text-[15px] text-white/65 border border-white/15 px-8 py-4 rounded-full no-underline tracking-tight transition-colors duration-300 inline-block hover:border-white/30 hover:text-[var(--clr-text)]"
            >
              {t('hero.downloadCV')}
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={textItemVariants} className="flex items-center gap-8 md:gap-12 mt-16 pt-12 border-t border-white/5 flex-wrap">
            {[
              { value: '1+', label: t('hero.stats.years') },
              { value: '10+', label: t('hero.stats.projects') },
              { value: '10+', label: t('hero.stats.clients') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[var(--font-display)] font-bold text-[28px] md:text-[34px] tracking-tight text-[var(--clr-accent)] leading-none mb-1">
                  {stat.value}
                </div>
                <div className="font-[var(--font-body)] text-[13px] text-white/35">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Abstract Shape (hidden on mobile) */}
        <motion.div 
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center justify-center"
        >
          <AbstractShape size={460} />
        </motion.div>
      </div>

      
    </section>
  );
}

export default HeroSection;