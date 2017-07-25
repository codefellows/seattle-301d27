'use strict';

var app = app || {};

(function (module) {
  module.displayRepos = function (reposFromModel) {
    const template = Handlebars.compile($('#repoTemplate').html());
    $('#repoList').append(template({repos: reposFromModel}))
  }
})(app);
