'use strict';

var app = app || {};

(function (module) {
  module.getRepos = function (callback) {
    // call GitHub to get my repos
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
    .then(
      function (data) {
        let mappedData = data.map(repo =>({
            name: repo.name,
            url: repo.html_url
          }));
        callback(mappedData);
      }
    );
  };
})(app);
