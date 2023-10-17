// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Hello, welcome to the website",
        },
      },
      es: {
        translation: {
          welcome: "Hola, bienvenido a la web",
        },
      },
      de: {
        translation: {
          welcome: "Hallo, willkommen auf der Webseite",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
