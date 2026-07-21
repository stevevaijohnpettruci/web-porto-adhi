import SkillChip from '../ui/SkillChip';
import { SKILLS } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function AboutSection() {
  const { t } = useLanguage();
  const focusAreas = t('about.focusAreas');
  const expKeys = ['bloomb', 'amisbudi', 'research'];

  // Variasi animasi untuk setiap kolom pembungkus
  const columnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variasi animasi untuk elemen individu (teks, card, dll)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Variasi khusus untuk skill chips agar terasa lebih "pop"
  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      className="py-[80px] md:py-[120px] px-[clamp(24px,4.5vw,64px)] max-w-[1440px] mx-auto border-t border-white/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-14 md:gap-24 items-start">
        {/* KOLOM KIRI (Profil, Bio, Area Fokus, Pendidikan) */}
        <motion.div
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={itemVariants}
            className="font-[var(--font-body)] text-[11px] font-medium text-[var(--clr-accent)] tracking-widest uppercase mb-6"
          >
            {t('about.label')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 mb-8"
          >
            <img
              src="/image/Foto Adhi.png"
              alt="Adhi Nur Ramadan"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-[var(--clr-accent)]/25 shrink-0"
            />
            <h2 className="font-[var(--font-display)] font-extrabold text-[clamp(30px,8vw,40px)] md:text-[clamp(32px,3vw,44px)] tracking-tight text-[var(--clr-text)] m-0 leading-tight">
              {t('about.title')}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-[var(--font-body)] text-base leading-relaxed text-white/50 mb-5"
          >
            {t('about.bio1')}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="font-[var(--font-body)] text-base leading-relaxed text-white/50 m-0"
          >
            {t('about.bio2')}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12">
            {focusAreas.map((s, i) => (
              <div
                key={s}
                className="flex items-center justify-between py-4 border-t border-white/5"
              >
                <span className="font-[var(--font-body)] text-[15px] text-white/60">
                  {s}
                </span>
                <span className="font-[var(--font-display)] text-xs text-white/20 tracking-wider">
                  0{i + 1}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <p className="font-[var(--font-body)] text-[11px] font-medium text-white/30 tracking-widest uppercase mb-5">
              {t('about.education')}
            </p>
            <div className="space-y-6">
              <div>
                <p className="font-[var(--font-display)] font-bold text-base text-[var(--clr-text)] m-0">
                  Universitas Galuh
                </p>
                <p className="font-[var(--font-body)] text-sm text-white/60 m-0 mt-1">
                  {t('about.degree')}
                </p>
                <p className="font-[var(--font-body)] text-sm text-white/40 m-0 mt-1">
                  {t('about.eduPeriod')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN (Tools, Pengalaman Profesional, Magang, Bootcamp) */}
        <motion.div
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={itemVariants}
            className="font-[var(--font-body)] text-[11px] font-medium text-white/30 tracking-widest uppercase mb-5"
          >
            {t('about.toolsTech')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2.5 mb-14"
          >
            {SKILLS.map((skill) => (
              <motion.div key={skill} variants={chipVariants}>
                <SkillChip label={skill} />
              </motion.div>
            ))}
          </motion.div>

          <div className="space-y-3">
            <motion.p
              variants={itemVariants}
              className="font-[var(--font-body)] text-[11px] font-medium text-white/30 tracking-widest uppercase mb-1"
            >
              {t('about.professionalExperience')}
            </motion.p>

            {expKeys.map((key) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="p-6 rounded-xl border border-white/5 bg-[var(--clr-surface)]"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-[var(--font-display)] font-bold text-base tracking-tight text-[var(--clr-text)] m-0">
                    {t(`about.exp.${key}.title`)}
                  </p>
                  <span className="font-[var(--font-body)] text-[11px] text-white/30 whitespace-nowrap shrink-0">
                    {t(`about.exp.${key}.period`)}
                  </span>
                </div>
                <p className="font-[var(--font-body)] text-sm text-white/40 m-0 leading-relaxed">
                  {t(`about.exp.${key}.desc`)}
                </p>
              </motion.div>
            ))}

            <motion.p
              variants={itemVariants}
              className="font-[var(--font-body)] text-[11px] font-medium text-white/30 tracking-widest uppercase mb-1 pt-4"
            >
              {t('about.internship')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl border border-[#00D4FF]/15 bg-[#00D4FF]/5"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="font-[var(--font-display)] font-bold text-base tracking-tight text-[var(--clr-text)] m-0">
                  {t('about.exp.cikara.title')}
                </p>
                <span className="font-[var(--font-body)] text-[11px] text-[#00D4FF]/65 whitespace-nowrap shrink-0">
                  {t('about.exp.cikara.period')}
                </span>
              </div>
              <p className="font-[var(--font-body)] text-sm text-white/40 m-0 leading-relaxed">
                {t('about.exp.cikara.desc')}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-[var(--font-body)] text-[11px] font-medium text-white/30 tracking-widest uppercase mb-1 pt-4"
            >
              {t('about.bootcamp')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl border border-[#A855F7]/15 bg-[#A855F7]/5"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="font-[var(--font-display)] font-bold text-base tracking-tight text-[var(--clr-text)] m-0">
                  {t('about.exp.dbs.title')}
                </p>
                <span className="font-[var(--font-body)] text-[11px] text-[#A855F7]/65 whitespace-nowrap shrink-0">
                  {t('about.exp.dbs.period')}
                </span>
              </div>
              <p className="font-[var(--font-body)] text-sm text-white/40 m-0 leading-relaxed">
                {t('about.exp.dbs.desc')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
