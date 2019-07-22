<template>
  <div class="cur_wrap">
    <a href="" @click.prevent="showModal = true">change city</a>
    <h2 class="cur_tit">{{this.$store.state.curData.name}}</h2>
    
    
      <!-- <p><img v-bind:src="'http://openweathermap.org/img/w/'+ {{curIcon}} +'.png'"></p> -->
      
      <!-- <i :class="icon"></i> -->
    
    <p class="cur_weather">{{weather}}</p>
    <h1 class="cur_temp">{{curTemp}}℃</h1>
    <p><span>최고 {{curTempMax}}℃</span> / <span>최저 {{curTempMin}}℃</span></p>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        지역변경
      </h3>
      <div slot="body">
        <a href="" @click.prevent="changeCH" data-city="chile">chile</a>
        <a href="" @click.prevent="changeCH" data-city="seoul">seoul</a>
        <a href="" @click.prevent="changeCH" data-city="london">london</a>
      </div>
      <div slot="footer">
        <i class="fas closeModalBtn fa-times" @click="closePop"></i>
      </div>
    </Modal>
      
  </div>
  
</template>

<script>
import Modal from './Modal/Modal'
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      // curData : [],
      icon : '',
      // arr : [],
      showModal : false,
      // city : 'chuncheon'
    }
  },
  created(){
    console.log(this.$http)
    this.bar()
  },
  methods : {
    bar : async function() {
      const {data} = await this.$http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.$store.state.city+'&appid=c102a437a9d8f986c74e57cd6a2dbce1');
      this.$store.state.curData = data
    },
    FUTURE_API(){
      this.$store.commit('FUTURE_API')
    },
    SLIDE_DAY(){
      this.$store.commit('SLIDE_DAY')
    },
    CITY_CHANGE(el){
      console.log(el.target.dataset.city)
      this.$store.state.city = el.target.dataset.city
      console.log('하나')
      // this.$store.commit('CITY_CHANGE')
    },
    changeCH(el){
      console.log(el.target.dataset.city)
      this.CITY_CHANGE(el)
      this.bar()
      this.FUTURE_API()
      // setTimeout(() => {
      // this.SLIDE_DAY()
      // }, 1000);
    },
    closePop(){
      this.showModal = false
    }
  },

  computed : {
    weather() {
      if(this.$store.state.curData.weather !== undefined) {
        return this.$store.state.curData.weather[0].main
      }
    },
    curTemp() {
      if(this.$store.state.curData.main !== undefined) {
        return Math.floor(this.$store.state.curData.main.temp - 272)
      }
    },
    curTempMin() {
      if(this.$store.state.curData.main !== undefined) {
        return Math.floor(this.$store.state.curData.main.temp_min - 272)
      }
    },
    curTempMax() {
      if(this.$store.state.curData.main !== undefined) {
        return Math.floor(this.$store.state.curData.main.temp_max - 272)
      }
    },
    // curIcon(){
    //   if(this.$store.state.arr.weather[0] !== undefined) {
    //     return arr.weather[0].icon
    //   }
    // }
  },
  components : {
    Modal
  }
}

  
</script>

<style>
  .cur_wrap{text-align: center}
  .weather_icon{font-size: 70px}
</style>
