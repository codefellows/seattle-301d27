'use strict';

(function(module) {
  function Note(props) {
    // Props will have 'author', 'title', 'body', 'id'
    Object.keys(props).forEach(key => this[key] = props[key])
  }



  module.Note = Note
})(window)
