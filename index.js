// ***** settings express *****
var express = require('express');
const app = express();

const cron = require("node-cron");

const axios = require('axios');


app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 4000;

// ***** settings db *****
var mysql = require('mysql');


app.listen(port, () => {
  console.log('Start app listening on port 4000!')
});

//ROUTERS USE
var weather = require('./routers/weather.js');
app.use('/weather', weather);

const contr_weath = require('./controllers/weather');
const api = require('./api-key');


cron.schedule('*/5 * * * *', () => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=${api.api_key}`

  axios.get(url)
    .then(function (response) {
      contr_weath.create(response);
    }).catch(function (error) {
      console.log(error);
    });
});

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json()); 