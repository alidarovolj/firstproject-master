import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/components/MainPage'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    }
  ]
})