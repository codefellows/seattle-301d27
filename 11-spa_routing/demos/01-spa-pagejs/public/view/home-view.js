'use strict';

(function(module) {

  let homeView = {}
  homeView.initHomeView = function() {
    $('.tab-content').hide()
    $('#welcome').show()
  }

  module.homeView = homeView
})(window)
