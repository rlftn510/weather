<template>
  <div class="cur_wrap">
    <a href="" @click.prevent="showModal = true">change city</a>
    <h2 class="cur_tit">{{arr.name}}</h2>
    
    
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
        <a href="" @click.prevent="changeCH" data-city="chuncheon">chuncheon</a>
        <a href="" @click.prevent="changeCH" data-city="seoul">seoul</a>
      </div>
      <div slot="footer">
        <i class="fas closeModalBtn fa-times" @click="closePop"></i>
      </div>
    </Modal>
      
  </div>
  
</template>

<script>
import Modal from './Modal/Modal'  

export default {
  data() {
    return {
      curData : [],
      icon : '',
      arr : [],
      showModal : false,
      city : 'chuncheon'
    }
  },
  created(){
    this.bar()
    // this.$http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=c102a437a9d8f986c74e57cd6a2dbce1')
    //   .then((response) => {
    //     this.curData = response.data
        
    //     if(this.curData.weather[0].main == 'Haze'){ 
    //       this.icon = 'fas fa-smog'
    //     }
    //     if(this.curData.weather[0].main == 'Clouds'){ 
    //       this.icon = 'fas fa-cloud'
    //     } 
        
    //   })
    //   .catch(() => {console.log('weather error')})
    
  },
  methods : {
    changeCH(el){
      this.city = el.target.dataset.city
      this.bar()
      console.log(el.target.dataset.city)
    },
    bar : async function() {
      const {data} = await this.$http.get('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=c102a437a9d8f986c74e57cd6a2dbce1');
      this.arr = data
      console.log('a')
    },
    closePop(){
      this.showModal = false
    }
  },
  computed : {
    weather() {
      if(this.arr.weather !== undefined) {
        return this.arr.weather[0].main
      }
    },
    curTemp() {
      if(this.arr.main !== undefined) {
        return Math.floor(this.arr.main.temp - 272)
      }
    },
    curTempMin() {
      if(this.arr.main !== undefined) {
        return Math.floor(this.arr.main.temp_min - 272)
      }
    },
    curTempMax() {
      if(this.arr.main !== undefined) {
        return Math.floor(this.arr.main.temp_max - 272)
      }
    },
    curIcon(){
      if(this.arr.weather[0] !== undefined) {
        return arr.weather[0].icon
      }
      
    }
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
