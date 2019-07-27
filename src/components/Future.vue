<template>
  <div class="future_wrap">
    <!-- 미래 -->
    <div class="future_section">
      <h2 class="tit">오늘({{this.$store.state.today[0].weekInfo}})</h2>
      <div class="scroll_wrap">
        <ul class="weather_time_list">
        <li v-for="(item, idx) in getToday" v-bind:key="idx">
          <p class="time">{{item.dt_txt.split(' ')[1].split(':')[0]}} 시</p>
          <figure><img v-bind:src="'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'"></figure>
          <p class="weather">{{item.weather[0].main}}</p>
          <p class="temp">{{Math.floor(item.main.temp - 272)}}℃</p>
        </li>
      </ul>
      </div>
    </div>
    <div class="future_section">
      <h2 class="tit">내일({{this.$store.state.tomorrow[0].weekInfo}})</h2>
      <div class="scroll_wrap">
        <ul class="weather_time_list">
        <li v-for="(item, idx) in getTomorrow" v-bind:key="idx">
          <span class="day1">{{item.dt_txt.split(' ')[1].split(':')[0]}} 시</span>
          <p><img v-bind:src="'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'"></p>
          <p>{{item.weather[0].main}}</p>
          <p>{{Math.floor(item.main.temp - 272)}}℃</p>
        </li>
      </ul>
      </div>
    </div>
    <div class="future_section">
      <h2>모레({{this.$store.state.ttomorrow[0].weekInfo}})</h2>
      <div class="scroll_wrap">
        <ul class="weather_time_list">
        <li v-for="(item, idx) in this.$store.state.ttomorrow" v-bind:key="idx">
          <span class="day1">{{item.dt_txt.split(' ')[1].split(':')[0]}} 시</span>
          <p><img v-bind:src="'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'"></p>
          <p>{{item.weather[0].main}}</p>
          <p>{{Math.floor(item.main.temp - 272)}}℃</p>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.forcastApi()
      .then(() => {
        this.slideDay()
      })
  },
  computed : {
    getToday(){
      return this.$store.getters.GET_TODAY
    },
    getTomorrow(){
      return this.$store.getters.GET_TOMORROW
    }
  },
  methods: {
    forcastApi : async function() {
        const {data} = await this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.$store.state.city+'&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1');
        this.$store.state.arr = data
        this.$store.state.futureCity = data.city
    },
    countDay(item){
      const times = item.dt_txt.split(' ')[1].split(':')[0]
      return times
    },
    slideDay(){
      this.$store.commit('SLIDE_DAY', this.$store.state.arr)
    }
  },
}
</script>

<style>
  .future_wrap{background-color:#0070d3;text-align: center;}
  .future_section h2{font-size:18px;font-weight:600;background-color:rgba(0,0,0,0.15);color:#fff;display: block; padding:6px 0;margin: 0}
  .weather_time_list{overflow: hidden;display: inline-block;padding: 15px 0;}
  .weather_time_list li{float: left;}
  .weather_time_list li *{color:#fff}
  @media screen and (max-width:500px) {
    .scroll_wrap{overflow: scroll}
    .weather_time_list{width: 500px;overflow: scroll;margin: 0 auto}
    .weather_time_list li{float: none;display: inline-block;vertical-align: middle}
  }
</style>
