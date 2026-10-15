import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './local/index';

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
] as const;

// Key under which an explicit choice from the language switcher is stored.
// The device language is never cached, so it is re-detected on every visit
// until the visitor picks a language themselves.
export const LANGUAGE_STORAGE_KEY = 'i18nextLng';

i18n.on('languageChanged', () => {
  document.documentElement.lang = i18n.resolvedLanguage || 'en';
  document.title = i18n.t('meta.title');
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', i18n.t('meta.description'));
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: messages,
    supportedLngs: LANGUAGES.map((l) => l.code),
    // Map regional variants (es-AR, es-UY, en-GB, …) to the base language
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
  // Keep ?lang= in the address bar so the current URL can be shared in the
  // chosen language (the detector reads the query string first).
  const url = new URL(window.location.href);
  url.searchParams.set('lang', code);
  window.history.replaceState(window.history.state, '', url);
  i18n.changeLanguage(code);
}

export default i18n;
