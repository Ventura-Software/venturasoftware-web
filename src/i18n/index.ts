import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './local/index';

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'sv', label: 'Svenska' },
] as const;

// Key under which an explicit choice from the language switcher is stored.
// The device language is never cached, so it is re-detected on every visit
// until the visitor picks a language themselves.
export const LANGUAGE_STORAGE_KEY = 'i18nextLng';

i18n.on('languageChanged', () => {
  document.documentElement.lang = i18n.resolvedLanguage || 'en';
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: messages,
    supportedLngs: LANGUAGES.map((l) => l.code),
    // Map regional variants (es-AR, pt-BR, fr-CA, de-AT, …) to the base language
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: [],
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export function setLanguage(code: string) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
  } catch {
    // storage unavailable (private mode, blocked site data)
  }
  i18n.changeLanguage(code);
}

export default i18n;
