// hello router
var express = require('express');
var router = express.Router();

let request = require('request');

// router.get('/hello', (req, res) => {
//     res.render("index", { title: "Home" });
// });

// ***** weather api *****
const api = require('../api-key'); // create file api-key.js in root directory  with your api_key
// to get api ---> api.api_key
  
router.get('/', function (req, res) {
    res.send('Hello world!');
});

// example http://localhost:8080/hello/weather/city/Dnepr
router.get('/weather/city/:city', function(req, res){
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${api.api_key}`

    request(url, function (err, response, body) {
        if(err){
            res.send(error);
        } else {
            res.send(body);
        }
    });
})

module.exports = router;