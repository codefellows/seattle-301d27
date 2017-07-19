'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');

// mac: postgres://localhost:5432
const connectionString = `postgres://postgres:${process.env.PG_PASSWORD}@127.0.0.1:5432/treegame`;
console.log(connectionString);
const client = new pg.Client(connectionString);
const PORT = process.env.PORT || 3000;
const generateRandomTreeQuote = require('./lib/generateRandomTreeQuote.js');

app.use(express.static('./public'));
//requests for index.html are served by express.static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/earthquakes', function (req, res) {
  res.sendFile('earthquakes.html', {root: './public/views'});
})

app.get('/trees', function (req, res) {
  console.log('in get')
  client.query('SELECT * FROM trees;')
    .then(function (result) {
      console.log(result)
      res.send(result.rows);
    })
    .catch(function (err) {
      console.error(err)
      res.send(err);
    });
});

app.post('/trees', function (req, res) {
  client.query(
    `INSERT INTO trees (displayname, filename) VALUES ($1, $2) RETURNING *`,
    [
      req.body.displayname,
      req.body.filename
    ]
  )
  .then(function (result) {
    console.log('in post .then')
    console.log(result)
    res.send(result.rows[0]);
  })
  .catch(function (err) {
    console.error(err);
    res.send(err);
  })
})

app.put('/trees/:id', function (req, res) {
  client.query(`UPDATE trees SET displayname=$1, filename=$2 WHERE id=$3 RETURNING *`,
    [
      req.body.displayname,
      req.body.filename,
      req.params.id
    ]
  )
  .then(function (result) {
    console.log('in post .then')
    console.log(result)
    res.send(result.rows[0]);
  })
  .catch(function (err) {
    console.error(err);
    res.send(err);
  })
});
//
// app.delete('/trees/:id', function (req, res) {
//   console.log(req.params.id)
//   client.query(`DELETE FROM trees WHERE id=${req.params.id}`)
//   .then(function (result) {
//     res.send(`Successfully deleted tree ${req.params.id}`);
//   })
//   .catch(function (err) {
//     console.error(err);
//     res.send(err);
//   })
// });

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
