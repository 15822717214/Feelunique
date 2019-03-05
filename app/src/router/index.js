import Vue from 'vue'
import Router from 'vue-router'
//引入路由跳转的组件
import Home from '@/components/home/home'
import Classify from '@/components/classify/classify'
import Brand from '@/components/brand/brand'
import ShoppingCart from "@/components/shoppingCart/shoppingCart"
import My from '@/components/my/my'
import Categories from '@/components/classify/components/categories/categories'
import GoodList from '@/components/classify/components/goodList/goodList'
// import Content_two from '@/components/classify/components/content_two'
import Err from '@/components/err/err'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    //首页
    {
      path: '/home',
      name: 'home',
      // component: Home
      //使用路由的懒加载
      component: (resolve) => require(["../components/home/home.vue"], resolve),
      meta: {
        flag: true,
        title: "首页"
      },
    },
    //分类
    {
      path: '/classify',
      name: 'classify',
      // component: Classify
      component: (resolve) => require(["../components/classify/classify.vue"], resolve),
      meta: {
        flag: true,
        title: "分类"
      },
      // children: [
      //   {
      //     path: 'content_two',
      //     name: 'content_two',
      //     component: Content_two
      //   }
      // ]
    },
    //品牌
    {
      path: '/brand',
      name: 'brand',
      // component: Brand
      component: (resolve) => require(["../components/brand/brand.vue"], resolve),
      meta: {
        flag: true,
        title: "品牌"
      },
    },
    //购物车
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      // component: ShoppingCart
      component: (resolve) => require(["../components/shoppingCart/shoppingCart.vue"], resolve),
      meta: {
        flag: true,
        title: "购物车"
      },
    },
    //我的
    {
      path: '/my',
      name: 'my',
      // component: My
      component: (resolve) => require(["../components/my/my.vue"], resolve),
      meta: {
        flag: true,
        title: "我的"
      },
    },
    // 分类搜索页面
    {
      path: '/categories',
      name: 'categories',
      component: Categories,
      meta: {
        flag: false,
        title: "搜索"
      },
      // component: (resolve)=>require(["../components/categories/categories.vue"],resolve)
    },
    //分类商品列表
    {
      path: '/goodList',
      name: 'goodList',
      component: GoodList,
      meta: {
        flag: false,
        title: "商品列表"
      },
      // component: (resolve)=>require(["../components/categories/categories.vue"],resolve)
    },
    {
      path: '**',
      component: Err
    }
  ]
})
