'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const proxy = require('express-request-proxy');
const githubToken = process.env.GITHUB_TOKEN;

console.log(proxy)

app.use(express.static('./public'));

app.get('/github/*', function (request, response) {
  (
    proxy({
      url: `https://api.github.com/${request.params[0]}`,
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
  )(request, response);
})

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: './public'});
});

app.listen(port, function () {
  console.log(`Now listening on port ${port}`);
})
