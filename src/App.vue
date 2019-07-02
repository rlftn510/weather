<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
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
    Future
  }
}

</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0px;
}
#app {
  display: flex;
  flex-direction: column;
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
