import Vue from 'vue';
import VueI18n from 'vue-i18n';

// lang
import krLocale from './kr';
import cnLocale from './cn';
import enLocale from './en';
import jpLocale from './jp';

Vue.use(VueI18n);

const messages = {
  Korea: {
    ...krLocale
  },
  China: {
    ...cnLocale
  },
  USA: {
    ...enLocale
  },
  Japan: {
    ...jpLocale
  }
};

const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'Korea',
  messages
});

export default i18n