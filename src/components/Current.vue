<template>
  <div class="cur_wrap">
    <a href="" @click.prevent="showModal = true" class="city_change">change city</a>
    <h2 class="cur_tit">{{this.$store.state.curData.name}}</h2>
    
    
    <!-- <p><img v-bind:src="'http://openweathermap.org/img/w/'+ {{curIcon}} +'.png'"></p> -->
      
    <figure><img v-bind:src="'http://openweathermap.org/img/w/'+this.$store.state.curData.weather[0].icon+'.png'"></figure>
    <div class="cur_info">
      <p class="cur_weather">{{weather}}</p>
    <h1 class="cur_temp">{{curTemp}}℃</h1>
    <p><span>최고 {{curTempMax}}℃</span> / <span>최저 {{curTempMin}}℃</span></p>
    </div>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        City Change
      </h3>
      <div slot="body" class="cityList">
        <a href="" @click.prevent="changeCH" data-city="seoul">seoul</a>
        <a href="" @click.prevent="changeCH" data-city="jeju">jeju</a>
        <a href="" @click.prevent="changeCH" data-city="chuncheon">chuncheon</a>
        <a href="" @click.prevent="changeCH" data-city="london">London</a>
        <a href="" @click.prevent="changeCH" data-city="roma">Roma</a>
        <a href="" @click.prevent="changeCH" data-city="paris">Paris</a>
        <a href="" @click.prevent="changeCH" data-city="Vienna">Vienna</a>
      </div>
      <div slot="footer">
        <i class="fas closeModalBtn fa-times city_close" @click="closePop"></i>
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
    this.bar()
  },
  methods : {
    bar : async function() {
      const {data} = await this.$http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.$store.state.city+'&appid=c102a437a9d8f986c74e57cd6a2dbce1');
      this.$store.state.curData = data
    },
    SLIDE_DAY(){
      this.$store.commit('SLIDE_DAY')
    },
    FUTURE_API(el){
      this.$store.dispatch('FUTURE_API', el.target.dataset.city)
    },
    changeCH(el){
      this.CITY_CHANGE(el)
      this.bar()
      this.FUTURE_API(el)
    },
    CITY_CHANGE(el){
      this.$store.state.city = el.target.dataset.city
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
    //   if(this.$store.state.curData.weather !== undefined) {
    //     // return this.$store.state.curData.weather[0].icon
    //     return 
    //     "<img src="'http://openweathermap.org/img/w/'+this.$store.state.curData.weather[0].icon+'.png'" alt="">
    //   }
    // }
  },
  components : {
    Modal
  }
}

  
</script>

<style>
  .cur_wrap{text-align: center;padding:20px 0}
  .cur_wrap .cur_tit{color:#fff}
  .cur_info *{color:#fff}
  .cur_wrap figure img{width:70px}
  .weather_icon{font-size: 70px}
  .city_change{display: inline-block;padding:5px 10px;border: 1px solid #fff;color:#fff}
  .cityList a{color:#000}
  .modal-body a{display: inline-block;padding:2px 6px;background-color:#047dec;color:#fff;margin: 2px}
  .city_close{color: #047dec}
</style>
