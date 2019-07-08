<template>
  <div class="future_warp">
    미래
    {{weekDay}}
    <div>
      <!-- <h2>{{result}}</h2> -->
      <a href="" @click.prevent="addSetter">click</a>
      <ul>
        <!-- <li v-for="(item, idx) in arr" v-bind:key="idx"> -->
          <!-- {{item.dt_txt}} -->
          <!-- <p>0시</p>
          <span>맑음</span>
          <span>30℃</span> -->
        <!-- </li> -->
        <!-- <li>
          <p>3시</p>
          <span>맑음</span>
          <span>30℃</span>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      arr : '',
      arr2 : ''
    }
  },
  created(){
    this.forcastApi()
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
    addSetter(){
      // this.weekDay = "2"
    }
  },
  computed : {
    weekDay : {
      get(){
        return this.arr2 = result
      },
      set(){
        if(this.arr.list !== undefined){
          const week = ['일','월','화','수','목','금',]
          // const num = Number(num)
          const day = this.arr.list[0].dt_txt.split(' ')[0]
          // console.log(week[new Date(day).getDay()])
          // return week[new Date(day).getDay()]
          const result = week[new Date(day).getDay()]
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
