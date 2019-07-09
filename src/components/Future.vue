<template>
  <div class="future_warp">
    <!-- 미래 -->
    {{weekDay}}
    <div>
      <!-- <h2>{{result}}</h2> -->
      <a href="" @click.prevent="">click</a>
      <ul>
        <li v-for="(item, idx) in arr" v-bind:key="idx">
          <p></p>
          <p>{{item.main.temp}}</p>
          <span>{{item.dt_txt}}</span>
        </li>
      </ul>
      <div v-for="(item, idx) in arr2" :key="idx">
        <p>{{item.main.temp}}</p>
        <span>{{item.dt_txt}}</span>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      arr : '',
      arr2 : [],
      arr3 : '',
      arr4 : '',
      result : '',
      futureArr : ''
    }
  },
  created(){
    this.forcastApi()
      .then(() => {
        console.log(this.arr)
        this.arr.forEach((el, idx) => {
          console.log(el,idx)
            if(idx < 5){
            this.arr2.push(el)
          }
        })
        console.log(this.arr2)
        // const day = el.dt_txt.split(' ')[0]
        // console.log(day)
        // if(day === '2019-07-09') {
          // this.arr2.push(el)
        // }
      })
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
    slideDay(){
      for (let index = 0; index < this.arr.length; index++) {
          console.log(this.arr[index])
          if(index < 5){
            this.arr2.push(this.arr[index])
          }
        }
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
