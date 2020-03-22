<template>
  <div>
    <div class="city__enter-block">
      <input placeholder="Enter name of the city" class="city__input-name" v-model="city" v-on:keyup.enter="getWeather()">
      <button class="city__input-submit" v-on:click="getWeather()"></button>
    </div>
    <hr>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>
 
<script>
  import LineChart from './LineChart.js'

  const axios = require('axios');
  // let API_URL = "";
  let API_URL_GETALL = "";
 
  export default {
    name: "weather",
    components: {
      LineChart
    },
    data () {
      return {
        weather: {},
        cityDates: [],
        cityWeathers: [],
        message: "",
        city: "",
        error: "",

        datacollection: null
      }
    },
    mounted() {
      this.fillData()
    },
    methods: {
      getWeather: function() {
        API_URL_GETALL = "http://localhost:4000/weather/getAllWeather?city=" + this.city;
        this.message = this.city;
        axios.get(API_URL_GETALL)
        .then(response => {
          this.cityDates = response.data.map(function(obj) {
            var date = new Date(obj.data.dt*1000);
            var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            return str;
          });
          this.cityWeathers = response.data.map(function(obj) {
            return obj.data.main.temp - 273.15;
          });
        API_URL_GETALL = "";
        this.fillData(this.cityWeathers, this.cityDates);
        });
      },
      fillData (days, weathers) {
        this.datacollection = {
          labels: weathers,
          datasets: [
            {
              label: 'Data One',
              borderColor: 'rgb(25, 20, 94)',
              backgroundColor: 'transparent',
              pointBorderColor: 'rgb(25, 20, 94)',
              pointBackgroundColor: 'white',
              data: days
            }
          ]
        }
      }
    }
  };
</script>
 
<style>
  img {
    max-width: 300px;
    height: auto;
  }

  .city__enter-block {
    display: flex;
  }

  .city__input-name {
    border: none;
    border-bottom: 2px solid rgb(25, 20, 94);
    font-size: 20px;
    padding: 20px;
    width: 100%;
    outline: none;
    color: rgb(25, 20, 94);
  }

  .city__input-submit {
    border: none;
    width: 80px;
    background-color: rgb(25, 20, 94);
    background-image: url('../assets/images/search.svg');
    background-position: center;
    background-size: 70% 70%;
    background-repeat: no-repeat;
    color: rgb(174, 206, 236);
    padding: 20px;
    cursor: pointer;
  }
</style>