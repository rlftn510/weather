<template>
  <div class="future_wrap">
    <!-- 미래 -->
    <div class="future_section">
      <h2 class="tit">오늘({{this.$store.state.today[0].weekInfo}})</h2>
      <ul class="weather_time_list">
        <li v-for="(item, idx) in this.$store.state.today" v-bind:key="idx">
          <p class="time">{{item.dt_txt.split(' ')[1].split(':')[0]}} 시</p>
          <!-- <span class="day1">{{item.times}} 시</span> -->
          <figure><img v-bind:src="'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'"></figure>
          <p class="weather">{{item.weather[0].main}}</p>
          <p class="temp">{{Math.floor(item.main.temp - 272)}}℃</p>
        </li>
      </ul>
    </div>
    <div class="future_section">
      <h2 class="tit">내일({{this.$store.state.tomorrow[0].weekInfo}})</h2>
      <ul class="weather_time_list">
        <li v-for="(item, idx) in this.$store.state.tomorrow" v-bind:key="idx">
          <span class="day1">{{item.dt_txt.split(' ')[1].split(':')[0]}} 시</span>
          <p><img v-bind:src="'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'"></p>
          <p>{{item.weather[0].main}}</p>
          <p>{{Math.floor(item.main.temp - 272)}}℃</p>
        </li>
      </ul>
    </div>
    <div class="future_section">
      <h2>모레({{this.$store.state.ttomorrow[0].weekInfo}})</h2>
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
</template>

<script>
export default {
  data (){
    return {
      // arr : '',
      // result : '',
      // today : [],
      // tomorrow : [],
      // ttomorrow : [],
      // tttomorrow : []
    }
  },
  created(){
    this.forcastApi()
      .then(() => {
        this.slideDay()
        console.log(this.$store.state.today)
        console.log(this.$store.state.tomorrow)
        console.log(this.$store.state.ttomorrow)
      })
  },
  mounted(){
    
  },
  methods: {
    forcastApi : async function() {
        const {data} = await this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.$store.state.city+'&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1');
        this.$store.state.arr = data.list
        // console.log(this.arr)
        // const week = ['일','월','화','수','목','금',]
        // const day = this.arr.list[0].dt_txt.split(' ')[0]
        // console.log(week[new Date(day).getDay()])
    },  
    countDay(item){
      const times = item.dt_txt.split(' ')[1].split(':')[0]
      return times
    },
    slideDay(){
      const today = new Date().getDate()
      const tomorrow = today + 1
      const ttomorrow = today + 2
      const tttomorrow = today + 3
      console.log(today)
      console.log(tomorrow)
      console.log(ttomorrow)
      console.log(tttomorrow)
      const week = ['일','월','화','수','목','금','토']
      this.$store.state.arr.forEach((el, idx) => {
          let day = el.dt_txt.split(' ')[0]
          let dayInfo = new Date(day).getDate()
          let weekInfo = week[new Date(day).getDay()]
          let times = el.dt_txt.split(' ')[1].split(':')[0]
          // console.log(day)
          if(dayInfo === today){
            this.$store.state.today.push(el)
            this.$store.state.today[0]['times'] = times
            this.$store.state.today[0]['weekInfo'] = weekInfo
          } else if (dayInfo == tomorrow){
            this.$store.state.tomorrow.push(el)
            // this.tomorrow[0]['times'] = times
            this.$store.state.tomorrow[0]['weekInfo'] = weekInfo
          } else if (dayInfo == ttomorrow){
            this.$store.state.ttomorrow.push(el)
            // this.ttomorrow[0]['times'] = times
            this.$store.state.ttomorrow[0]['weekInfo'] = weekInfo
          } else if (dayInfo == tttomorrow){
            this.$store.state.tttomorrow.push(el)
            // this.tttomorrow[0]['times'] = times
            this.$store.state.tttomorrow[0]['weekInfo'] = weekInfo
          }
        })
        
    },
    addSetter(){
      this.forcastApi().then(()=> {
        this.$store.state.weekDay = "1"
      })
      
    }
  },
  computed : {
    weekDay : {
      get(){
        // return console.log(this.result)
      },
      set(num){
        if(this.arr.list !== undefined){
          var week = ['일','월','화','수','목','금',]
          var nums = Number(num)
          var day = this.arr.list[nums].dt_txt.split(' ')[0]
          // console.log(week[new Date(day).getDay()])
          // return week[new Date(day).getDay()]
          this.result = week[new Date(day).getDay()]
        }
      }
    }
    // weekDay (){
      // if(this.arr.list !== undefined){
      //   const week = ['일','월','화','수','목','금',]
      //   const num = num
      //   const day = this.arr.list[0].dt_txt.split(' ')[0]
      //   console.log(week[new Date(day).getDay()])
      //   return week[new Date(day).getDay()]
      // }
    // }
  }
}
</script>

<style>
  .future_wrap{background-color:burlywood;text-align: center}
  .future_section h2{font-size:18px;font-weight:600;background-color: rgb(240, 225, 158)}
  .weather_time_list{overflow: hidden;display: inline-block;}
  .weather_time_list li{float: left;}
</style>
