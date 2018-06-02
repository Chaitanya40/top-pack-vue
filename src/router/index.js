import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search'
import TopPackages from '@/components/TopPackages'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/top-packages',
      name: 'TopPackages',
      component: TopPackages
    }
  ]
})
