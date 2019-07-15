import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(Vuex);
Vuex.Store.prototype.$http = axios
export const store = new Vuex.Store({
  state : {
    futureData : [],
    curData : [],
    city : 'seoul',
    arr : '',
    today : [],
    tomorrow : [],
    ttomorrow : [],
    tttomorrow : [],
    count : '1'
  },
  mutations: {
    increment (state) {
      state.count++
      console.log(state.count++)
    },
    decrement (state) {
      state.count--
    },
    FUTURE_API : async function(state) {
      console.log(this)
      const {data} = await this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+state.city+'&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1');
      state.arr = data.list
      console.log('ddd')
      console.log(state.arr)
  },
  }
})