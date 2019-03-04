import Vue from 'vue'
import Router from 'vue-router'
//引入路由跳转的组件
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
      component: ()=>import('@/components/home/home'),
      meta:{
        flag:true,
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: ()=>import('@/components/classify/classify'),
      meta:{
        flag:true,
      }
    },
    {
      path: '/brand',
      name: 'brand',
      component:()=>import('@/components/brand/brand'),
      meta:{
        flag:true,
      }
    },
    {
      path:'/shoppingCart',
      name: 'shoppingCart',
      component:()=>import("@/components/shoppingCart/shoppingCart"),
      meta:{
        flag:true,
      }
    },
    {
      path: '/my',
      name: 'my',
      component:()=>import('@/components/my/my'),
      meta:{
        flag:true,
      }
    },
    {
    	path:'/details',
    	name:'details',
    	component:()=>import('@/components/brand/components/details'),
    	meta:{
        flag:false,
        title:"详情页"
      }
    },
    {
    	path:"/newdeta",
    	name:'newdeta',
    	component:()=>import('@/components/brand/components/newdeta'),
    	meat:{
    		flag:true
    	}
    },
    {
    	path:'/seo',
    	name:'seo',
    	component:()=>import('@/components/brand/components/seo')
    },
    {
      path: '**',
      component: Err
    }
  ]
})
