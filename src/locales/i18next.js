import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./en/translation.json";
import translationKg from "./kg/translation.json";
import translationRu from "./ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
    kg: {
      translation: translationKg,
    },
  },
  lng: "ru",
});

export default i18n;
