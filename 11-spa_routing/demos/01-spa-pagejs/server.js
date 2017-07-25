'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(`./public`))
app.use(bodyParser.json())

app.get('/', (req, res) => res.sendFile('./index.html', {root: './public'}))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
