'use strict';

page('/', app.homeController);
page('/repos', app.getRepos, app.reposController.index);

// way #1: make a different call that will return only one repo
// page('/repos/:name', app.getRepoByName, app.reposController.index);

// way #2: put in a filter as middleware
page('/repos/:name', app.getRepos, app.reposController.findRepo, app.reposController.index)

page();
