'use strict'

page('/', homeView.initHomeView)
page('/new', formView.initFormView)
page('/notes', function() {
  $('.tab-content').hide()
  $('#notes').show()
})

page()
