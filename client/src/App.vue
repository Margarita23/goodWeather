<template> 
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <h1 class="title">Weather forecast</h1>
        <h3 class="subtitle">Enter name of the city to see the weather forecast</h3>
        <Weather/>
      </div>
    </div>
  </div>
</template>

<script>
import Weather from './components/Weather.vue'

export default {
  name: 'App',
  components: {
    Weather
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .wrapper {
      display: flex;
      width: 100%;
      height: 100vh;
      justify-content: center;
      font-family: Arial, Helvetica, sans-serif;
  }

  .content {
      padding: 20px;
      width: 500px;
      background-color: rgb(174, 206, 236);
      color: rgb(25, 20, 94);
  }

  .title, .subtitle {
      text-align: center;
  }

  body {
    margin: 0;
    padding: 0;
  }
</style>
