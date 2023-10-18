import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Hello, welcome to the website",
          home: "Home",
          contact: "Contact",
          language: "Select Language"
        },
      },
      es: {
        translation: {
          welcome: "Hola, bienvenido a la web",
          home: "Inicio",
          contact: "Contacto",
          language: "Seleccionar Idioma"
        },
      },
      de: {
        translation: {
          welcome: "Hallo, willkommen auf der Webseite",
          home: "Startseite",
          contact: "Kontakt",
          language: "Sprache auswählen"
        },
      },
      zh: {
        translation: {
          welcome: "你好，欢迎访问网站",
          home: "主页",
          contact: "联系方式",
          language: "选择语言"
        },
      },
      ar: {  // Árabe
        translation: {
          welcome: "مرحبًا، مرحبًا بك في الموقع",
          home: "الصفحة الرئيسية",
          contact: "اتصل بنا",
          language: "اختر اللغة"
        },
      },
      fr: {  // Francés
        translation: {
          welcome: "Bonjour, bienvenue sur le site",
          home: "Accueil",
          contact: "Contact",
          language: "Sélectionner la langue"
        },
      },
      ja: {  // Japonés
        translation: {
          welcome: "こんにちは、ウェブサイトへようこそ",
          home: "ホーム",
          contact: "お問い合わせ",
          language: "言語を選択"
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
