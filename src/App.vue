<template>
  <div id="app">
    <navbar/>
    <current/>
    <future/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Current from './components/Current'
import Future from './components/Future'



export default {
  name: 'App',
  components : {
    Navbar,
    Current,
    Future,
    // test
  }
}

</script>

<style>
*{box-sizing: border-box;list-style: none;padding:0;margin:0}
html, body, #app {
  margin: 0px;
  background-color: #047dec
}
#app {
  display: flex;
  flex-direction: column;
  background-color: #047dec;
}
.container {
  flex-grow: 1;
  position: relative;
}
.btn {
  border-radius: 3px;
  padding: 6px 8px;
  background-color: #e2e4e6;
  border: none;
  display: inline-block;
  color: #fff;
  font-size: 14px;
  line-height: 20px;  
  font-weight: 700;
  cursor: pointer;
}
</style>
