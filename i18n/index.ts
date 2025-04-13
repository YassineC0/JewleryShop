import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import arTranslation from "./locales/ar.json"
import frTranslation from "./locales/fr.json"

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: arTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: "ar", // Default language
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
})

export default i18n
