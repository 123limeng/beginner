import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MyNav from '@/components/myNav'
import MyHTML from '@/components/HTML/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyNav',
      component: MyNav
    },
    {
      path: '/MyHTML',
      name: 'MyHTML',
      component: MyHTML
    }
  ]
})
