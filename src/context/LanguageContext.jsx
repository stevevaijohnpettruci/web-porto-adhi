import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('language');
  if (saved === 'en' || saved === 'id') return saved;
  return 'en';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((l) => (l === 'en' ? 'id' : 'en'));

  const t = (key) => {
    const parts = key.split('.');
    let node = translations[language];
    for (const p of parts) {
      node = node?.[p];
    }
    return node ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
