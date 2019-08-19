// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' 
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store'
import 'es6-promise/auto'

Vue.config.productionTip = false





Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
