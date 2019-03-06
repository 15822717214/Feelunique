//引入vue，vuex
import Vue from "vue";
import Vuex from "vuex";
//引入自己负责的模块
//分类
import classify from "./classify";
Vue.use(Vuex);

let state = {};
let actions = {};
let mutations = {};
let getters = {};

const store = new Vuex.Store({
     state,
     actions,
     mutations,
     getters,
     modules:{
        classify
     }
})

export default store;

