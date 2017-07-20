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
// POST
// we expect to be handed four things in the req.body:
// {
// 	"firstname": "donna",
// 	"lastname": "lingwood",
// 	"name": "cali",
// 	"species": "cat"
// }
app.post('/records', function(req, res) {
  // make the client entry first, because we need the client_id when we insert the pet
  client.query(
    `INSERT INTO clients (firstname, lastname)
    VALUES ($1, $2) ON CONFLICT DO NOTHING;`,
    [
      req.body.firstname,
      req.body.lastname
    ]
  )
  .then(function () {
    retrieveClient();
  })
  .catch(function (err) {
    console.log('Oh crap we had trouble adding a client');
    console.log(err);
    res.status(400).send(`Unable to insert $1 $2 client into db`, [req.body.firstname, req.body.lastname]);
  })

  function retrieveClient() {
    console.log('in retrieveClient ')
    client.query(
      `SELECT client_id FROM clients WHERE firstname=$1 AND lastname=$2`,
      [
        req.body.firstname,
        req.body.lastname
      ]
    )
    .then(function (result) {
      console.log('in retrieveClient then');
      insertPet(result.rows[0].client_id);
    })
    .catch(function (err) {
      console.log('Error retrieving client: ');
      console.log(err);
      res.status(400).send(`Unable to retrieve $1 $2 client from db`, [req.body.firstname, req.body.lastname]);
    })
  }

  function insertPet(client_id) {
    client.query(
      `INSERT INTO pets (name, species, client_id) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING RETURNING *;`,
      [
        req.body.name,
        req.body.species,
        client_id
      ]
    )
    .then(function (result) {
      res.send(result.rows);
    })
    .catch(function (err) {
      console.log('Error inserting pet: ');
      console.log(err);
      res.status(400).send(`Unable to insert ${req.body.name} into db`);
    });
  }

});


// GET
app.get('/records', function(req, res) {
  // res.send - we want to send back...
  // get all the pets, and snuggle them
  // once we have all the pets...match them to the clients
  client.query(
    `SELECT firstname, lastname, name, species
    FROM pets
    INNER JOIN clients
    ON pets.client_id=clients.client_id;`
  )
  .then(function (result) {
    res.send(result.rows);
  })
  .catch(function(err) {
    console.log('Error getting pet record: ');
    console.log(err);
    res.status(500).send(err);
  })
});

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
      `CREATE UNIQUE INDEX IF NOT EXISTS clients_lastname_firstname
        ON clients (lastname, firstname);`
    )
    .then(function () {
      console.log('Clients index created');
      createPetsTable();
    })
    .catch(function (err) {
      console.log('Error creating clients index:');
      console.log(err);
    });
  }

  // create the pets table
  function createPetsTable() {
    client.query(
      `CREATE TABLE IF NOT EXISTS pets (
        name VARCHAR NOT NULL default 'cat',
        species VARCHAR NOT NULL,
        pet_id SERIAL PRIMARY KEY,
        client_id INTEGER NOT NULL
        REFERENCES clients(client_id)
      );`
    )
    .then(function (result) {
      console.log('Created pets table');
      createPetsIndex();
    })
    .catch(function (err) {
      console.log('Error creating pets table:');
      console.log(err);
    });
  }

  // create the index on the pets table
  function createPetsIndex() {
    client.query(
      `CREATE UNIQUE INDEX IF NOT EXISTS
        pets_client_id_name ON pets (client_id, name);`
    )
    .then(function () {
      console.log('Pets index created');
      listen();
    })
    .catch(function (err) {
      console.log('Error creating pets index:');
      console.log(err);
    })
  }
}

function listen () {
  app.listen(PORT, function () {
    console.log(`App listening on port: ${PORT}`);
  })
}
