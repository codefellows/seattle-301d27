'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const generateRandomTreeQuote = require('./lib/generateRandomTreeQuote.js');

app.use(express.static('./public'));
//requests for index.html are served by express.static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/earthquakes', function (req, res) {
  res.sendFile('earthquakes.html', {root: './public/views'});
})

app.get('/quotes', function (req, res) {
  let quote = generateRandomTreeQuote.getRandomTree();
  res.send(quote);
});

app.post('/quotes', function (req, res) {
  console.log(req.body)
  generateRandomTreeQuote.addQuote(req.body.quote);
  res.send(req.body.quote);
});

app.listen(PORT, function() {
  console.log(`App is listening on port: ${PORT}`);
});
