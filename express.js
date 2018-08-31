var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendfile('./templates/index.html');
  // res.sendfile('./templates/style.css');
  // res.sendfile('./templates/bundle.js');
});

app.get('/style.css', function (req, res) {
  res.sendfile('./templates/style.css');
});

app.get('/bundle.js', function (req, res) {
  res.sendfile('./templates/bundle.js');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
