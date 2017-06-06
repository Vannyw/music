import Vue from 'vue'
import Router from 'vue-router'

import Swiper from 'vue-awesome-swiper'
import Index from '@/components/Index'
import Compositor from '@/components/Compositor'
import Musiclist from '@/components/Musiclist'
import User from '@/components/User'
import Search from '@/components/Search'
import Allpage from '@/components/Allpage'
import Sortpage from '@/components/Sortpage'
import Movepage from '@/components/Movepage'
import fakePlay from '@/components/fakePlay'
Vue.use(Router)

Vue.use(Swiper)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/compositor',
      name: 'compositor',
      component: Compositor
    },
    {
      path: '/musiclist',
      name: 'musiclist',
      component: Musiclist
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },{
    	path: '/allpage',
    	name: 'allpage',
    	component: Allpage 
    },{
    	path: '/sortpage',
    	name: 'sortpage',
    	component: Sortpage 
    },{
    	path: '/movepage',
    	name: 'movepage',
    	component: Movepage
    }
  ]
})
