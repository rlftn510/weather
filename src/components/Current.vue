<template>
  <div class="cur_wrap">
    <h1 class="cur_tit">{{curData.name}}</h1>
    <h2 class="cur_weather">{{foo}}</h2>
    <figure class="weather_icon">
      <i :class="icon"></i>
    </figure>
 
    <!-- <h1 class="cur_temp">{{Math.floor(curData.main.temp) - 272}}℃</h1> -->
    <!-- <p><span>최고 {{Math.floor(curData.main.temp_max - 272)}}℃</span> / <span>최저 {{Math.floor(curData.main.temp_min) - 272}}℃</span></p> -->
    <div>
      <p>도시이름 : <span id="cityName">{{curData.name}}</span></p>
      <!-- <p>현재온도 : <span id="curTemp">{{Math.floor(curData.main.temp) - 272}}</span></p> -->
      <p>현재습도 : <span id="curWet"></span></p>
      <!-- <p>현재날씨 : <span id="curWeather">{{curData.weather[0].main}}</span></p> -->
      <p>날씨상세설명 : <span id="detailWeather"></span></p>
      <p>날씨 이미지 : <img src="" alt="날씨" id="weatherIcon"></p>
      <p>구름 : <span id="curCloud"></span></p>
    </div>
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
    foo() {
      //  console.log(this.curData.main)
      if(this.curData.weather !== undefined) {
        return this.curData.weather[0].main

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
