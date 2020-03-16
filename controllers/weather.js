// const path = require('path');
// const Weather = require('../models/weather');

// exports.index = function (req, res) {
//     res.sendFile(path.resolve('views/sharks.html'));
// };


// exports.create = function (req, res) {
//     var newShark = new Shark(req.body);
//     console.log(req.body);
//     newShark.save(function (err) {
//             if(err) {
//             res.status(400).send('Unable to save shark to database');
//         } else {
//             res.redirect('/sharks/getshark');
//         }
//   });
// };