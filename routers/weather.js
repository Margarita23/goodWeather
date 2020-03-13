// hello router
var express = require('express');
var router = express.Router();

const axios = require('axios');

// router.get('/hello', (req, res) => {
//     res.render("index", { title: "Home" });
// });

// ***** weather api *****
const api = require('../api-key'); // create file api-key.js in root directory  with your api_key
// to get api ---> api.api_key
  
router.get('/hello', function (req, res) {
    res.send('Hello world!');
});

// example http://localhost:8080/?city=Dnipro
router.get('/', function(req, res){
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${api.api_key}`

    axios.get(url)
        .then(function (response) {
        res.json(response.data);
    })
        .catch(function (error) {
        res.status(500).json({message: error});
    });
})

module.exports = router;