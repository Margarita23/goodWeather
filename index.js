// ***** settings express *****
const express = require('express')
const app = express();

// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));

const port = 8080;

// ***** settings db *****
var mysql = require('mysql');


app.get('/hello', (req, res) => {
  // res.send({'message': 'hello world!!!!!!'});
  res.render("index", { title: "Home" });
});

app.listen(port, () => {
  console.log('Start app listening on port 8080!')
});