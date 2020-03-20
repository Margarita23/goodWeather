<template>
  <div>
    <div class="city__enter-block">
      <input placeholder="Enter name of the city" class="city__input-name" v-model="city" v-on:keyup.enter="getWeather()">
      <button class="city__input-submit" v-on:click="getWeather()"></button>
    </div>
    <div class="info">
      <div class="date"></div>
      <div class="forecast">
        <ul class="forecast__list">
          <li class="forecast__morning">
            <div class="tempreture"></div>
            <div class="icon"></div>
          </li>
          <li class="forecast__now">
            <div class="tempreture"></div>
            <div class="icon"></div>
          </li>
          <li class="forecast__evening">
            <div class="tempreture"></div>
            <div class="icon"></div>
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <div>Info about weather: {{ message }}</div>
  </div>
</template>
 
<script>
  const axios = require('axios');
  let API_URL = "";
 
  export default {
    name: "home",
    data () {
      return {
        weather: {},
        message: "",
        city: "",
        error: ""
      }
    },

    // mounted() {
    //   axios
    //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //     .then(response => (this.info = response));
    // }
 
  mounted() {
    // axios.get(API_URL)
      // .then(response => {
        // console.log("response");
        // console.log(response.data);
  //       // response.json();
  //       })
  //     // .then(result => {
  //       // this.messages = result;
      // });
  },
  methods: {
    getWeather: function() {
      API_URL = "http://localhost:4000/weather/?city=" + this.city;
      this.message = this.city;
      axios.get(API_URL)
      .then(response => {
        this.message = response.data;
      });
      API_URL = "";
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