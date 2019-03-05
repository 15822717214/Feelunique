import Vue from 'vue'
import Router from 'vue-router'
//引入路由跳转的组件
import Home from '@/components/home/home'
import Classify from '@/components/classify/classify'
import Brand from '@/components/brand/brand'
import ShoppingCart from "@/components/shoppingCart/shoppingCart"
import My from '@/components/my/my'
import Err from '@/components/err/err'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path:'/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
        flag:true,
				requireAuth:true
      }
    },
    {
      path: '**',
      component: Err
    }
  ]
})
