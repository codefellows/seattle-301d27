'use strict';

var app = app || {};

(function(module){
  module.homeController = function() {
    $('main section').hide();
    $('#home').show();
  }
})(app);
