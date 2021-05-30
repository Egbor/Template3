import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
//import XHR from 'i18next-xhr-backend';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/Template3/locales/{{lng}}/{{ns}}.json',
        },

        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['localStorage', 'queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;