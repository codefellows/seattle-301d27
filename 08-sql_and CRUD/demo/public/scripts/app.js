'use strict';

var state = {
  correctTree: {},
  wrongTree: {},
  trees: []
};

function setup () {
  // call this with a random name
  state.correctTree = generateRandomTree();
  state.wrongTree = generateRandomTree();
  renderTreeName(state.correctTree);
  renderTreeImage(state.correctTree, 'left');
  renderTreeImage(state.wrongTree, 'right');
}

$(document).ready(function () {
  getTrees();
})

function getTrees() {
  const path = '/trees';
console.log('in getTrees')
  $.get(path).then(
    function (data) {
      console.log('success')
      state.trees = data;
      console.log(state.trees[0])
      console.log(state.trees[0].displayname)
      setup();
    },
    function (err) {
      console.error('an error!')
      console.error(err);
    }
  );
}



$('#treeImages').on('click', 'img', function (event) {
  console.log($(this))
  var answer = $(this).data('name');
console.log(answer)
  if (answer === state.correctTree.displayname) {
    renderResponse('woohoo!');
  } else {
    renderResponse('wrong! virus alert.');
  }
  setup();
});

function generateRandomTree () {
  var index = Math.floor(Math.random() * state.trees.length);
  return state.trees[index];
}

function renderTreeName (tree) {
  $('#treeName').text(tree.displayname);
}

function renderTreeImage (tree, position) {
  var $img;

  if (position === 'left') {
    $img = $('#treeImages :first-child');
  } else {
    $img = $('#treeImages :nth-child(2)');
  }
  $img.attr('src', 'images/' + tree.filename + '.jpeg');
  $img.data('name', tree.displayname);
  // data ^^ is the same as doing it this way via the attribute:
  // $img.attr('data-name', tree.displayname);
}

function renderResponse (response) {
  $('#response p').text(response);
}

// make a dropdown
function populateCheatDropdown() {
  var dropdownOptions = [];

  state.trees.forEach(function (tree) {
    // do stuff - tree.displayname
    var $newOption = $('#cheat option').clone();

    $newOption.val(tree.filename);
    $newOption.text(tree.displayname);
    dropdownOptions.push($newOption);
  });

  dropdownOptions.forEach(function (option) {
    $('select').append(option);
  });
  // iterate over trees array
  // for each object get the display name
  // add an option
    // create an option element
    // append will be involved
    // append it to the dropdown, which is select
}

populateCheatDropdown();

// make dropdown handler

$('select').on('change', function (event) {
  event.preventDefault();
  // get the value of the option selected
  // show the image somehow
    // make the src attribute be...the filename
    // iterate thru the array to find
  if (!$(this).val()) {
    $('#cheat img').removeAttr('src');
    return;
  }

  var filePath = 'images/' + $(this).val() + '.jpeg';
  // find the image and change the src attribute
  $('#cheat img').attr('src', filePath);
});
