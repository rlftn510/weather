<template>
  <div>
    test
    
    <ul>
      <li v-for="(item, idx) in arrayReverse" :key="idx">{{item}}</li>
    </ul>
  </div>
</template>

<script>


export default {
  data(){
    return {
      arr : [],
      arr2 : [1,2,3,4,5]
    }
  },
  computed : {
    arrayReverse(){
      const a = this.arr.map(val => val.cday)
      return a
    }
  },
  created(){
    // this.$http.get('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=c102a437a9d8f986c74e57cd6a2dbce1')
    //   .then((response) => {
    //     this.curData = response.data
        
    //     if(this.curData.weather[0].main == 'Haze'){ 
    //       this.icon = 'fas fa-smog'
    //     } 
    //   })
    //   .catch(() => {console.log('weather error')})
    fetch('https://api.badukch.co.kr/dev/record/schedule/?yyyymm=201907&isCollapse=1')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.arr = json.recordset.reverse()
      })
    this.arr.map(val => {
      console.log(val)
    })
    const obj = {
      data : this.arr2,
      next(){
        return {}
      }
    }
    
  }
}

// fruits.forEach(function (item, index, array) {
//     console.log(item, index);
// });

</script>

<style>

</style>
