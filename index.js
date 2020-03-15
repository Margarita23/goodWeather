const fetch = require('node-fetch');

// ***** settings express *****
var express = require('express');
const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));

const port = 8080;

// ***** settings db *****
var mysql = require('mysql');

app.listen(port, () => {
  console.log('Start app listening on port 8080!')
});

//ROUTERS USE
var weather = require('./routers/weather.js');
app.use('/weather', weather);