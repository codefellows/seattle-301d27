'use strict';

// require everything in and scaffold the app
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const PORT = process.env.PORT || 3000;

const app = express();

// add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// add static routing
app.use(express.static('./public'));

// manage postgres connection
const connectionString = `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/vetmanager`
const client = new pg.Client(connectionString);
client.connect();
client.on('error', function (err) {
  console.log('Error connecting to postgres: ');
  console.log(err);
});

// build routes to access/update the db
// routes will go here

// init the DB tables if they don't exist yet
initDBtables();

function initDBtables() {
  // create the clients table
  client.query(
    `CREATE TABLE IF NOT EXISTS clients (
      firstname VARCHAR NOT NULL,
      lastname VARCHAR,
      client_id SERIAL PRIMARY KEY
    );`
  )
  .then(function (result) {
    console.log('Clients table created');
    createClientIndex();
  })
  .catch(function (err) {
    console.log('Error creating clients table:');
    console.log(err);
  });

  // create the index on the clients table
  function createClientIndex() {
    client.query(
      `CREATE UNIQUE INDEX clients_lastname_firstname
        ON clients (lastname, firstname);`
    )
    .then(function () {

    })
    .catch(function (err) {
      console.log('Error creating clients table:');
      console.log(err);
    });
  }

  // create the pets table

  // create the index on the pets table
}


app.listen(PORT, function () {
  console.log(`App listening on port: ${PORT}`);
})
