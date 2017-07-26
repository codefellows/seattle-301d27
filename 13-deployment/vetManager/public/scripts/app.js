'use strict';

var view = {};

var path = 'http://localhost:2000/records';

view.getRecords = function() {
  $.get(path)
    .then(
      function (records) {
        renderRecords(records);
      },
      function (err) {
        console.log('oh snap! we could not get the records: ' + err);
      }
    );

  function renderRecords(records) {
    $('#petList').empty();
    var template = $('#template').html();
    var compiled = Handlebars.compile(template);
    $('#petList').append(compiled({records: records}));
  }
};

view.getRecords();

view.submitRecords = function (event) {
  event.preventDefault()

  const postObj = {
    name: $('#petName').val(),
    firstname: $('#firstName').val(),
    lastname: $('#lastName').val(),
    species: $('#species').val()
  };

  $.post(path, postObj)
    .then(
      function () {
        view.getRecords();
      },
      function (err) {
        console.log('Error posting record: ');
        console.log(err);
      }
    );
};

$('#addPetRecord').submit(view.submitRecords);
