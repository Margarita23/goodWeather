// hello router
var express = require('express');
var router = express.Router();

const axios = require('axios');

const weather = require('../controllers/weather');

// router.get('/hello', (req, res) => {
//     res.render("index", { title: "Home" });
// });

// ***** weather api *****
const api = require('../api-key'); // create file api-key.js in root directory  with your api_key
// to get api ---> api.api_key
  
router.get('/hello', function (req, res) {
    res.send('Hello world!');
});

// example http://localhost:4000/weather/?city=Dnipro
router.get('/', function(req, res){
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${api.api_key}`

    axios.get(url)
        .then(function (response) {
            weather.create(response);
            res.header('Access-Control-Allow-Origin', '*');
            res.json(response.data);
    }).catch(function (error) {
        res.status(500).send({message: error});
    });
});

// example http://localhost:4000/weather/getAllWeather?city=Dnipro
router.get('/getAllWeather', function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    weather.index(req.query.city, res);
});

module.exports = router;