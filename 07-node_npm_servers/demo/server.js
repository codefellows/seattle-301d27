'use strict';

// express is a function; when we call it, it will return an object. That object has a bunch of methods.
const express = require('express');

// how we could require - that is, import - any code exported by hello-world.js
// const helloWorld = require('./hello-world.js');
// console.log(express);

// call that express function; it returns an object. That object is saved in app.
const app = express();
// console.log(app)

const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(express.static('./public'));
// stephanie used this to debug; it's called middleware. it will get executed for any request, and then pass that request off to a request handler
// app.use(function (req, res, next) {
//   console.log('in middleware function')
//   console.log(req.headers);
//   next();
// })

// app.get needs to know: the path to look for, and function to execute to send a response
app.get('/earthquakes', function (req, res) {
  res.sendFile('earthquakes.html', {root: './public/routes'});
})

app.listen(PORT, function() {
  console.log(`App is listening on port: ${PORT}`);
});
