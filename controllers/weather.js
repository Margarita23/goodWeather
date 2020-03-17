const path = require('path');
const Weather = require('../models/weather');
const mongo_url = require('../setting-db.js');

const DB_NAME = "goodWeather";

// DATABASE
const MongoClient = require('mongodb').MongoClient;

//index for view
// exports.index = function (req, res) {
    // res.sendFile(path.resolve('views/sharks.html'));
// };

exports.index = function (cityName, res) {
    MongoClient.connect(mongo_url, function(err, client) {
        try {
            db = client.db(DB_NAME);
            var query = {"data.name": cityName };
            db.collection("weather").find(query).toArray(function(err, result) {
                if (err) throw err;
                res.status(200).send(result);
            });

        } catch(err){
            console.log("\x1b[31m%s\x1b[0m","Error with connect BD");
            console.log(err.message);
            res.status(500).send(err.message);
        }
    });
};

exports.create = function (req, res) {
    MongoClient.connect(mongo_url, function(err, client) {
        try {
            db = client.db(DB_NAME);
            db.collection("weather").insert({data: res.data});
        } catch(err){
            console.log("\x1b[31m%s\x1b[0m","Error with connect BD");
            console.log(err.message);
        }
    });
};