import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { timingSafeEqual } from 'crypto';
Vue.config.productionTip = false
Vue.use(Vuex);
Vuex.Store.prototype.$http = axios
export const store = new Vuex.Store({
  state : {
    curData : [],
    city : 'seoul',
    arr : '',
    futureCity : [],
    today : [],
    tomorrow : [],
    ttomorrow : [],
    tttomorrow : [],
  },
  actions : {
    FUTURE_API({commit}, city){
      return axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1')
      .then((res) =>{
      commit('SLIDE_DAY', res.data)
    })
  },
  },
  getters : {
    GET_TODAY(state){
      return state.today
    },
    GET_TOMORROW(state){
      return state.tomorrow
    }
  },
  mutations: {
    // FUTURE_APIs(state, context){
    //     return axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+'london'+'&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1')
    //     .then((res) => {
    //     const data = res.data
    //     console.log(data)
    //     state.arr = data.list
    //     state.futureCity = data.city
    //     console.log('둘')
    //   })
    // },
    // FUTURE_API : async function(state) {
    //   const {data} = await this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+state.city+'&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1');
      
    //   state.arr = data.list
    //   state.futureCity = data.city
    //   // $store.SLIDE_DAY()
    //   console.log('둘')
    //   // console.log($this.SLIDE_DAY())
    // },
    SLIDE_DAY(state, arr){
      state.arr = arr.list
      console.log(state.arr)
      state.futureCity = arr.city
      state.today = []
      state.tomorrow = []
      state.ttomorrow = []
      state.tttomorrow = []
      const today = new Date().getDate()
      const tomorrow = today + 1
      const ttomorrow = today + 2
      const tttomorrow = today + 3

      const week = ['일','월','화','수','목','금','토']
      state.arr.forEach((el, idx) => {
          let day = el.dt_txt.split(' ')[0]
          let dayInfo = new Date(day).getDate()
          let weekInfo = week[new Date(day).getDay()]
          let times = el.dt_txt.split(' ')[1].split(':')[0]
          if(dayInfo === today){
            state.today.push(el)
            state.today[0]['times'] = times
            state.today[0]['weekInfo'] = weekInfo
          } else if (dayInfo == tomorrow){
            state.tomorrow.push(el)
            state.tomorrow[0]['weekInfo'] = weekInfo
          } else if (dayInfo == ttomorrow){
            state.ttomorrow.push(el)
            state.ttomorrow[0]['weekInfo'] = weekInfo
          } else if (dayInfo == tttomorrow){
            state.tttomorrow.push(el)
            state.tttomorrow[0]['weekInfo'] = weekInfo
          }
        })
        console.log('셋')
    }
  }
})