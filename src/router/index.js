import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/movie',
        name: 'movie',
        component: resolve => require(['@/components/movie/Movie'], resolve)
      }, {
        path: '/story',
        name: 'story',
        component: resolve => require(['@/components/stories/Stories'], resolve)
      }]
    }
  ]
})
