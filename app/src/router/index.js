import Vue from 'vue'
import Router from 'vue-router'
//引入路由跳转的组件
import Home from '@/components/home/home'
import Classify from '@/components/classify/classify'
import Brand from '@/components/brand/brand'
import Details from '@/components/brand/components/details'
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
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path:'/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
    	path:'/details',
    	name:'details',
    	component:Details,
    	meta:{
        flag:false,
        title:"详情页",
      }
    },
    {
      path: '**',
      component: Err
    }
  ]
})
