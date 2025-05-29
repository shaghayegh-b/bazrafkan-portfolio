import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import faTranslation from './locales/fa.json';

const resources = {
  en: {
    translation: enTranslation
  },
  fa: {
    translation: faTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', //زبان پیشفرض
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
