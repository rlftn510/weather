import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    futureData : [],
    curData : [],
    city : 'seoul',
    arr : '',
    today : [],
    tomorrow : [],
    ttomorrow : [],
    tttomorrow : []
  }
})