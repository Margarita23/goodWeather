const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Weather = new Schema({
    data: {}
});
module.exports = mongoose.model('Weather', Weather);