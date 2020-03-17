// ***** settings express *****
var express = require('express');
const app = express();

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


/////////////////////////////////////////////
// const MongoClient = require('mongodb').MongoClient;
// const url = `mongodb+srv://lildoc:vfvfgfgf23r@cluster0-oarvv.mongodb.net/goodWeather?retryWrites=true&w=majority`;

// MongoClient.connect(url, function(err, client) {
//   try {
//     console.log("Connected successfully to server");
//     db = client.db("goodWeather");
    
//     db.collection("weather").update({a:1}, {b:1}, {upsert:true}, function(err, result) {
//     });
//   } catch(err){
//     console.log("\x1b[31m%s\x1b[0m","Error with connect BD");
//     console.log(err.message);
//   }
// });