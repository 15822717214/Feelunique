// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入css样式和移动端适配文件
import "./common/css/reset.css"
import "./common/js/flexble"

//引入iconfont图标
import "./assets/iconfont2/iconfont.css"
import "./assets/iconfont/iconfont.css"

//引入store
import store from "./store"
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

