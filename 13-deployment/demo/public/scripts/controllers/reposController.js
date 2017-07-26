'use strict';

var app = app || {};

(function(module){
  module.reposController = function() {
    module.getRepos(function (repos) {
      module.displayRepos(repos);
    });
    $('main section').hide();
    $('#repos').show();
  }
})(app);
