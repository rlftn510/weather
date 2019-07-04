<template>
  <div>
    현재날씨
    <div>
      <p>도시이름 : <span id="cityName">{{curData.name}}</span></p>
      <p>현재온도 : <span id="curTemp">{{curData.main.temp}}</span></p>
      <p>현재습도 : <span id="curWet"></span></p>
      <p>현재날씨 : <span id="curWeather">{{curData.weather[0].main}}</span></p>
      <p>날씨상세설명 : <span id="detailWeather"></span></p>
      <p>날씨 이미지 : <img src="" alt="날씨" id="weatherIcon"></p>
      <p>구름 : <span id="curCloud"></span></p>
      <a href="" @click.prevent="weather">click</a>
    </div>
  </div>
</template>

<script>
  

export default {
  data() {
    return {
      curData : [],
    }
  },
  created(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=c102a437a9d8f986c74e57cd6a2dbce1')
      .then((response) => {
        this.curData = response.data
        console.log(response.data)
      })
      .catch(() => {console.log('weather error')})
      .finally(() => {console.log('weather')})
  },
}

  
</script>

<style>

</style>
