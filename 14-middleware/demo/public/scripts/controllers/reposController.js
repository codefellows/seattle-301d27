'use strict';

var app = app || {};

(function(module){
  let reposController = {};

  reposController.index = function(ctx, next) {
    $('#repoList').empty();
    $('main section').hide();
    module.displayRepos(ctx.repos);
    $('#repos').show();
    next();
  }

  reposController.findRepo = function(ctx, next) {
    let singleRepo = ctx.repos.filter(repo => repo.name === ctx.params.name);
    ctx.repos = singleRepo;
    next();
  }

  module.reposController = reposController;
})(app);
