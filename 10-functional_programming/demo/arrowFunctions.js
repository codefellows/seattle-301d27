'use strict';

// anonymous function that's being assigned to a variable
// var oldSkool = function() {
//   console.log('old school');
//   console.log(this);
// };

// oldSkool();

//immediately invoked function expression
(function () {
  console.log('old school');
  console.log(this);
})();

// called anywhere in file, including before it's declared
function oldSkoolDeclaration () {
  console.log('declaration');
  console.log(this);
}

oldSkoolDeclaration();

var newSchool = () => {
  console.log('new school function');
  console.log(this);
}
newSchool();

var myObject = {
  name: 'Stephanie',
  showThis: () => console.log(this),
  speak: () => console.log(this.name),
  oldSpeak: function() {console.log(this.name);}
}

myObject.showThis()
myObject.speak()
myObject.oldSpeak()

// don't need parethesis for parameters if there's only one
// if you have a one-liner, it has an implicit return value
var foo = name => `hi, ${name}`
var fooReturned = foo('stephanie')
console.log(fooReturned);
