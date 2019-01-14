import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex';
import feathersClient from '../feathers-client';

const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: 'id' });

Vue.use(Vuex)
Vue.use(FeathersVuex)

const store = new Vuex.Store({
  plugins: [
    service('press'),
    service('tickets'),
    service('channel'),
    service('artists'),
  ],
  state: {
    language: localStorage.getItem('language') || 'Korea'
  },
  getters: {
    language: state => state.language
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.language = language;
      localStorage.setItem('language', language);
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    }
  }
});

export default store;