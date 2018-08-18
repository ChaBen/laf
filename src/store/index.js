import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    language: localStorage.getItem('language') || 'kr'
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