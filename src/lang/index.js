import Vue from 'vue';
import VueI18n from 'vue-i18n';

// lang
import krLocale from './kr';
import cnLocale from './cn';
import enLocale from './en';
import jpLocale from './jp';

Vue.use(VueI18n);

const messages = {
  kr: {
    ...krLocale
  },
  cn: {
    ...cnLocale
  },
  en: {
    ...enLocale
  },
  jp: {
    ...jpLocale
  }
};

const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'kr',
  messages
});

export default i18n