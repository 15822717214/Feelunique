// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入css样式和移动端适配文件
import "./common/css/reset.css"
import "./common/js/flexble"

//引入iconfont图标
import "./assets/iconfont/iconfont.css"

//引入store
import store from "./store"

//引入mint-ui 插件
import Mint from "mint-ui"
Vue.use(Mint)

//引入Element插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

//引入better-scroll插件
// import BScroll from 'better-scroll'

// Vue.use(BScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
