'use strict';

(function(module) {
  let formView = {}

  formView.initFormView = function() {
    $('.tab-content').hide()
    $('#form').show()
  }


  module.formView = formView
})(window)
