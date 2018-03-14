// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './vuex/store'
import './public/common'

// require('es6-promise').polyfill()

import {
  WechatPlugin,
  AjaxPlugin,
  LoadingPlugin,
  ToastPlugin,
  AlertPlugin,
  BusPlugin
} from 'vux'

/**
 * 公用组件
 */
Vue.prototype.updateTitle = function (value) {
  this.$store.commit('updateTitle', value)
}

FastClick.attach(document.body)

Vue.config.productionTip = false


/**
 * 加载插件
 */
Vue.use(BusPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
