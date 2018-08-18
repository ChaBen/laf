// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import i18n from './lang';

import $ from 'jquery';
window.$ = $;
require('slick-carousel');

// css
import './assets/css/embed.css';
import './assets/css/font-awesome.min.css';
import './assets/css/main.css';
import './assets/css/plyr.css';
import './assets/css/slick.min.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
});