'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
//requests for index.html are served by express.static

app.get('/earthquakes', function (req, res) {
  res.sendFile('earthquakes.html', {root: './public/views'});
})

app.listen(PORT, function() {
  console.log(`App is listening on port: ${PORT}`);
});
