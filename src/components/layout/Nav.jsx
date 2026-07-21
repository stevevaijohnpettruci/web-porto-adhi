import useScrolled from '../../hooks/useScrolled';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function Nav({ onLogoClick, showBack, onBack }) {
  const scrolled = useScrolled();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-400 ${
        scrolled
          ? 'bg-[var(--clr-bg)]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[clamp(24px,4.5vw,64px)] h-full flex items-center justify-between">
        {/* LOGO */}
        <motion.button
          variants={itemVariants}
          onClick={onLogoClick}
          className="font-[var(--font-display)] font-bold text-xl tracking-tight text-[var(--clr-text)] bg-transparent border-none cursor-pointer p-0"
        >
          Adhi's Portfolio<span className="text-[var(--clr-accent)]">.</span>
        </motion.button>

        <div className="flex items-center gap-3 md:gap-6">
          {showBack ? (
            /* BACK BUTTON */
            <motion.button
              variants={itemVariants}
              onClick={onBack}
              className="font-[var(--font-body)] text-sm text-white/45 bg-transparent border-none cursor-pointer flex items-center gap-2 transition-colors duration-200 hover:text-[var(--clr-text)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8L10 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('nav.backToWork')}
            </motion.button>
          ) : (
            /* NAV LINKS */
            <div className="hidden md:flex items-center gap-9">
              {[
                { key: 'work', label: t('nav.work') },
                { key: 'about', label: t('nav.about') },
                { key: 'contact', label: t('nav.contact') },
              ].map((item) => (
                <motion.a
                  key={item.key}
                  variants={itemVariants}
                  href={`#${item.key}`}
                  className="font-[var(--font-body)] text-sm text-white/45 no-underline transition-colors duration-200 hover:text-[var(--clr-text)]"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          )}

          {/* TOGGLE BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={
                language === 'en'
                  ? 'Switch to Bahasa Indonesia'
                  : 'Switch to English'
              }
              className="font-[var(--font-body)] text-xs font-semibold text-white/55 bg-white/5 border border-white/10 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:text-[var(--clr-text)] hover:border-white/20"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              className="text-white/55 bg-white/5 border border-white/10 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:text-[var(--clr-text)] hover:border-white/20"
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="8"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M8 1.2V2.6M8 13.4V14.8M14.8 8H13.4M2.6 8H1.2M12.8 3.2L11.8 4.2M4.2 11.8L3.2 12.8M12.8 12.8L11.8 11.8M4.2 4.2L3.2 3.2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.5 9.6A6 6 0 1 1 6.4 2.5a5 5 0 0 0 7.1 7.1Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </motion.div>

          {/* CTA BUTTON */}
          {!showBack && (
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:adhinurramadan49@gmail.com"
              className="hidden sm:inline-block font-[var(--font-body)] text-sm font-medium text-[#080809] bg-[var(--clr-accent)] px-[22px] py-[10px] rounded-full no-underline tracking-tight transition-colors duration-300 hover:bg-[#33DCFF] hover:shadow-[0_12px_32px_rgba(0,212,255,0.28)]"
            >
              {t('nav.getInTouch')}
            </motion.a>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default Nav;
