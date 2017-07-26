'use strict';

var app = app || {};

(function (module) {
  module.getRepos = function (callback) {
    // call GitHub to get my repos
    $.ajax({
      url: '/github/user/repos',
      method: 'GET'
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
