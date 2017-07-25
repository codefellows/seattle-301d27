'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(port, function () {
  console.log(`Now listening on port ${port}`);
})
