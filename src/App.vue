<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>


import Header from './components/Header';

export default {
  name: 'App',
  components: {
    "Header": Header
  }
}
</script>

<style>
html, body{
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
  width: 99%;
}
</style>
