<template>
  <div class="cur_wrap">
    <h1 class="cur_tit">{{arr.name}}</h1>
    <h2 class="cur_weather">{{weather}}</h2>
    <figure class="weather_icon">
      <i :class="icon"></i>
    </figure>
 
    <h1 class="cur_temp">{{curTemp}}℃</h1>
    <p><span>최고 {{curTempMax}}℃</span> / <span>최저 {{curTempMin}}℃</span></p>
  </div>
</template>

<script>
  

export default {
  data() {
    return {
      curData : [],
      icon : '',
      arr : []
    }
  },
  created(){
    this.bar()
    this.$http.get('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=c102a437a9d8f986c74e57cd6a2dbce1')
      .then((response) => {
        this.curData = response.data
        
        if(this.curData.weather[0].main == 'Haze'){ 
          this.icon = 'fas fa-smog'
        }
        if(this.curData.weather[0].main == 'Clouds'){ 
          this.icon = 'fas fa-cloud'
        } 
        
      })
      .catch(() => {console.log('weather error')})
    
  },
  methods : {
      bar : async function() {
        const {data} = await this.$http.get('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=c102a437a9d8f986c74e57cd6a2dbce1');
        this.arr = data
      }
  },
  computed : {
    weather() {
      if(this.curData.weather !== undefined) {
        return this.curData.weather[0].main
      }
    },
    curTemp() {
      if(this.curData.main !== undefined) {
        return Math.floor(this.curData.main.temp - 272)
      }
    },
    curTempMin() {
      if(this.curData.main !== undefined) {
        return Math.floor(this.curData.main.temp_min - 272)
      }
    },
    curTempMax() {
      if(this.curData.main !== undefined) {
        return Math.floor(this.curData.main.temp_max - 272)
      }
    }
  },
  mounted() {
  }
}

  
</script>

<style>
  .cur_wrap{text-align: center}
  .weather_icon{font-size: 70px}
</style>
