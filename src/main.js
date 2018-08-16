// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

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
  components: { App },
  template: '<App/>'
});