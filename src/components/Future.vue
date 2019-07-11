<template>
  <div class="future_warp">
    <!-- 미래 -->
    <div>
      <h2>오늘</h2>
      <ul>
        <li v-for="(item, idx) in today" v-bind:key="idx">
          <span class="day1">{{item.dt_txt.split(' ')[1].split(':')[0]}} 시</span>
          <p><img v-bind:src="'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'"></p>
          <p>{{item.weather[0].main}}</p>
          <p>{{Math.floor(item.main.temp - 272)}}℃</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>내일</h2>
      <ul>
        <li v-for="(item, idx) in tomorrow" v-bind:key="idx">
          <span class="day1">{{item.dt_txt.split(' ')[1].split(':')[0]}} 시</span>
          <p><img v-bind:src="'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'"></p>
          <p>{{item.weather[0].main}}</p>
          <p>{{Math.floor(item.main.temp - 272)}}℃</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>모레</h2>
      <ul>
        <li v-for="(item, idx) in ttomorrow" v-bind:key="idx">
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
      arr : '',
      result : '',
      today : [],
      tomorrow : [],
      ttomorrow : [],
      tttomorrow : []
    }
  },
  created(){
    this.forcastApi()
      .then(() => {
        console.log(this.arr)
        this.slideDay()
        console.log(this.today)
        console.log(this.tomorrow)
        console.log(this.ttomorrow)
        console.log(this.tttomorrow)
      })
  },
  mounted(){
    
  },
  methods: {
    forcastApi : async function() {
        const {data} = await this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q=Seoul&lang=zh_cn&APPID=c102a437a9d8f986c74e57cd6a2dbce1');
        this.arr = data.list
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
      const ttomorrow = tomorrow + 1
      const tttomorrow = ttomorrow + 1
      console.log(today.time)
      console.log(tomorrow)
      console.log(ttomorrow)
      console.log(tttomorrow)
      this.arr.forEach((el, idx) => {
          const day = new Date(el.dt_txt.split(' ')[0]).getDate()
          // const times = el.dt_txt.split(' ')[1].split(':')[0]
          console.log(day)
          if(day === today){
            this.today.push(el)
            // this.today.time.push(times)
          } else if (day == tomorrow){
            this.tomorrow.push(el)
          } else if (day == ttomorrow){
            this.ttomorrow.push(el)
          } else if (day == tttomorrow){
            this.tttomorrow.push(el)
          }
        })
        
    },
    addSetter(){
      this.forcastApi().then(()=> {
        this.weekDay = "1"
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

</style>
