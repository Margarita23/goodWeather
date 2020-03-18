// ***** settings express *****
var express = require('express');
const app = express();

const cron = require("node-cron");
const fs = require("fs");

const axios = require('axios');


app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 8080;

// ***** settings db *****
var mysql = require('mysql');


app.listen(port, () => {
  console.log('Start app listening on port 8080!')
});

//ROUTERS USE
var weather = require('./routers/weather.js');
app.use('/weather', weather);

const contr_weath = require('./controllers/weather');
const api = require('./api-key');


cron.schedule('* * * * *', () => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=${api.api_key}`

  axios.get(url)
    .then(function (response) {
      contr_weath.create(response);
    }).catch(function (error) {
      console.log(error);
    });
});