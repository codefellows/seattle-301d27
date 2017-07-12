'use strict';


// do things when the DOM is ready
$(document).ready(
  function() {
    // alert('hi there!');
  }
);

// or
$(function () {
  // code goes here
});

// ======================
// selectors - can use any css selector
// ======================

// element
var li = $('li');
console.log(li);
console.log(li.parent());

//class
var form = $('.form-element');
console.log(form);

// id
var listContainer = $('#list-container');
console.log(listContainer[0]);

// attribute
var liTemplate = $('[class="li-template"]');
console.log(liTemplate);

// parent child selector - the space between class/element means "look for elements with the class of li-template that are children of a ul"
$('ul .li-template').addClass('blue');

// no space between the selectors means "find the li elements that have the class li-template"
$('li.li-template').addClass('italic');

// ======================
// Traverse
// ======================

// parent, children, and find
console.log(li.parent());
console.log(listContainer.children());
console.log(listContainer.find('#beautiful-list'));

// ======================
// manipulate
// ======================

// text
// get text - note how there's no argument passed to text()
var h1Text = $('h1').text();
console.log(h1Text);
// set text - note how there is an argument passed to text()
$('h1').text('this is my new h1');

// you can add/remove classes
$('form').addClass('blue');


// clone a template, update it, append it to the DOM
var newLi = $('.li-template').clone();
newLi.text('this is a third li');
console.log(newLi);
$('ul').append(newLi);

// remove elements from the DOM
$('button').remove();

// jQuery speed dating
// traversal: children, parent, find
// http://api.jquery.com/category/traversing/tree-traversal/
// manipulation: append, remove, clone, data, html, text
// https://api.jquery.com/category/manipulation/
