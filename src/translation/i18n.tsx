import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from '../../public/static/locales/en/common.json';
import translationKR from '../../public/static/locales/kr/common.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    kr: {
        translation: translationKR
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;

