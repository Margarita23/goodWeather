<template>
  <div>
    <hr>
    <div>
      <h1>Hello World</h1>
      <hr>
    </div>
  </div>
</template>
 
<script>
// const axios = require('axios');
// const API_URL = "http://localhost:4000/weather/?city=Dnipro";
 
export default {
  name: "home",
  data: () => ({
    error: "",
    messages: []
  }),
 
  mounted() {
    // axios(API_URL, { mode: 'no-cors'}).then(response => response.json())
      // .then(result => {
        // this.messages = result;
      // });
      // console.log("this.messages");
      // console.log(this.messages);
  },
  methods: {}
};
</script>
 
<style>
img {
  max-width: 300px;
  height: auto;
}
</style>