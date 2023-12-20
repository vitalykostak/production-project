import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n.use(initReactI18next).init({
  fallbackLng: 'en',

  debug: false,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  resources: { en: { translationsNS: {} } }
})

export default i18n
