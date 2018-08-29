import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'

import Visit from '@/pages/visit';
import Calendar from '@/pages/calendar';
import Channel from '@/pages/channel';
import Artists from '@/pages/artists';
import About from '@/pages/about';
import Press from '@/pages/press';
import FunJoy from '@/pages/funjoy';
import FunJoyView from '@/pages/funjoy/view';
import Tickets from '@/pages/tickets';
import News from '@/pages/news';
import NewsView from '@/pages/news/view';
import Limolimo from '@/pages/limolimo';

Vue.use(Router)

var asideScroll = '';
setInterval(() => {
  let el = document.getElementById('top-menu');
  asideScroll = { x: el.scrollLeft, y: el.scrollTop };
}, 100);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    document.getElementById('top-menu').scrollTop = asideScroll.y;
  },
  routes: [
    { path: '/', component: Main },
    { path: '/visit', component: Visit },
    { path: '/calendar', component: Calendar },
    { path: '/artists', component: Artists },
    { path: '/about', component: About },
    { path: '/press', component: Press },
    { path: '/channel', component: Channel },
    { path: '/fun&joy', component: FunJoy },
    { path: '/fun&joy/:id', component: FunJoyView },
    { path: '/tickets', component: Tickets },
    { path: '/news', component: News },
    { path: '/news/:id', component: NewsView },
    { path: '/limolimo', component: Limolimo },
  ]
})
