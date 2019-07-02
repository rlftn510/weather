<template>
  <div>
    현재날씨
    <div>
      <p>도시이름 : <span id="cityName"></span></p>
      <p>현재온도 : <span id="curTemp"></span></p>
      <p>현재습도 : <span id="curWet"></span></p>
      <p>현재날씨 : <span id="curWeather"></span></p>
      <p>날씨상세설명 : <span id="detailWeather"></span></p>
      <p>날씨 이미지 : <img src="" alt="날씨" id="weatherIcon"></p>
      <p>구름 : <span id="curCloud"></span></p>
    </div>
  </div>
</template>

<script>
 // const apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Chuncheon&appid=c102a437a9d8f986c74e57cd6a2dbce1";
      //   $.ajax({
      //       url: apiURI,
      //       dataType: "json",
      //       type: "GET",
      //       async: "false",
      //       success: function(data) {
      //         console.log(data);
      //           cityName.innerHTML =  data.name;
      //           curTemp.innerHTML = Math.round(data.main.temp - 273.15);
      //           curWet.innerHTML = data.main.humidity
      //           curWeather.innerHTML = data.weather[0].main
      //           detailWeather.innerHTML = data.weather[0].description;
      //           curCloud.innerHTML = (data.clouds.all) +"%"

      //           var imgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      //           $(weatherIcon).attr('src', imgURL)
      //           console.log(data);
      //           console.log("현재온도 : "+ (data.main.temp- 273.15) );
      //           console.log("현재습도 : "+ data.main.humidity);
      //           console.log("날씨 : "+ data.weather[0].main );
      //           console.log("상세날씨설명 : "+ data.weather[0].description );
      //           console.log("날씨 이미지 : "+ data.weather[0].icon );
      //           console.log("바람   : "+ data.wind.speed );
      //           console.log("나라   : "+ data.sys.country );
      //           console.log("도시이름  : "+ data.name );
      //           console.log("구름  : "+ (data.clouds.all) +"%" );          

                


      //       }
      //   })
export default {
  
}
</script>

<style>

</style>
