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
    CITY_CHANGE(){
      
    },
    FUTURE_API(state){
      return axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+state.city+'&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1').then((res) =>{
        const data = res
        state.arr = data.list
        state.futureCity = data.city
        console.log('둘')
      }).then(() => {
        this.ttt()
      })
    },
    // FUTURE_API : async function(state) {
    //   const {data} = await this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+state.city+'&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1');
      
    //   state.arr = data.list
    //   state.futureCity = data.city
    //   // $store.SLIDE_DAY()
    //   console.log('둘')
    //   // console.log($this.SLIDE_DAY())
    // },
    SLIDE_DAY(state){
      state.today = []
      state.tomorrow = []
      state.ttomorrow = []
      state.tttomorrow = []
      const today = new Date().getDate()
      const tomorrow = today + 1
      const ttomorrow = today + 2
      const tttomorrow = today + 3
      // console.log(today)
      // console.log(tomorrow)
      // console.log(ttomorrow)
      // console.log(tttomorrow)
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
    },
    ttt(){
      console.log('되냐')
    }
  }
})