import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function ContactSection() {
  const { t } = useLanguage();

  // Variasi animasi untuk container utama (trigger saat di-scroll)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Variasi animasi slide-up untuk setiap elemen
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="border-t border-white/5 pt-[80px] md:pt-[160px] pb-[56px] md:pb-[80px] px-[clamp(24px,4.5vw,64px)] relative overflow-hidden"
    >
      {/* Background Glow Animation */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content Container triggered by scroll */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto relative"
      >
        <motion.h2 
          variants={itemVariants}
          className="font-[var(--font-display)] font-extrabold text-[clamp(44px,13vw,72px)] md:text-[clamp(56px,7.5vw,128px)] tracking-tighter text-[var(--clr-text)] leading-none m-0 mb-16 max-w-[14ch]"
        >
          {t('contact.title')}
          <span className="text-[var(--clr-accent)]">
            {t('contact.titleAccent')}
          </span>
        </motion.h2>

        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-between flex-wrap gap-8 mb-20"
        >
          <motion.a
            whileHover={{ scale: 1.02, x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            href="mailto:adhinurramadan49@gmail.com"
            className="font-[var(--font-body)] font-medium text-base md:text-xl text-white/65 no-underline transition-colors duration-200 hover:text-[var(--clr-accent)] inline-block"
          >
            adhinurramadan49@gmail.com →
          </motion.a>
          
          <div className="flex items-center gap-6 flex-wrap">
            {[
              {
                label: 'GitHub',
                href: 'https://github.com/stevevaijohnpettruci',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/adhi-nur-ramadan-9b4077349/',
              },
              {
                label: 'WhatsApp',
                href: 'https://wa.me/6287832282111',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/adhi_nurrrrr/',
              },
            ].map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ y: -3, color: '#fff' }}
                transition={{ duration: 0.2 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-body)] text-sm text-white/30 no-underline transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-white/5"
        >
          <p className="font-[var(--font-body)] text-[13px] text-white/20 m-0">
            {t('contact.copyright')}
          </p>
          <p className="font-[var(--font-body)] text-[13px] text-white/20 m-0">
            {t('contact.builtWith')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection;