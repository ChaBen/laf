import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'

import Visit from '@/pages/visit';
import Blog from '@/pages/blog';
import Calendar from '@/pages/calendar';
import Artists from '@/pages/artists';
import About from '@/pages/about';
import Press from '@/pages/press';
import Events from '@/pages/events';
import Tickets from '@/pages/tickets';
import Limolimo from '@/pages/limolimo';

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Main },
    { path: '/visit', component: Visit },
    { path: '/blog', component: Blog },
    { path: '/calendar', component: Calendar },
    { path: '/artists', component: Artists },
    { path: '/about', component: About },
    { path: '/press', component: Press },
    { path: '/events', component: Events },
    { path: '/tickets', component: Tickets },
    { path: '/limolimo', component: Limolimo },
  ]
})
