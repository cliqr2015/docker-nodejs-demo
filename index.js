var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/green', function (req, res) {
  res.send('This\'s Green color!');
});

app.get('/yellow', function (req, res) {
  res.send('This\'s Yellow color!');
});

app.get('/egor', function (req, res) {
  res.send('Hello Egor!');
});

app.get('/about', function (req, res) {
  res.send('about')
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
