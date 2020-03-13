const express = require('express')
const app = express();

app.get('/hello', (req, res) => {
  res.send({'message': 'hello world!'});
});

app.listen(8080, () => {
  console.log('Start app listening on port 8080!')
});