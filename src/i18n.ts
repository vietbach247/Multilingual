import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: "Welcome to our website",
      language: "Language",
      theme: "Theme",
      toggleTheme: "Toggle Theme",
    },
  },
  vi: {
    translation: {
      header: "Chào mừng bạn đến với website của chúng tôi",
      language: "Ngôn ngữ",
      theme: "Chủ đề",
      toggleTheme: "Chuyển chủ đề",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
