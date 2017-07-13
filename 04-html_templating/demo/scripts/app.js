'use strict';

var tree = {
  displayName: 'Madrona',
  fileName: 'Madrona',
  latinName: 'Arbutus menziesii',
  otherCommonNames: 'Madrone, Arbutus',
  description: 'Evergreen tree with orange-red bark. When the bark matures, it peels away in thin sheets, revealing new satiny green bark. The trees are favored by birds for nesting sites, and the bark and leaves have been used medicinally. The wood of the madrona is very hard, and burns long and hot. It is found along the Pacific coast of the US/Canada, from central California through southern British Columbia.'
};

var myString = 'My tree is named {{displayName}} and is a {{displayName}} tree. It is commonly called {{otherCommonNames}}; its latin name is {{latinName}}';

// template with indexOf
// var stringArray = myString.split(' ');
// var index = stringArray.indexOf('displayName');
// stringArray[index] = tree.displayName;
// var resultString = stringArray.join(' ');
// console.log(resultString);

// template with replace
// myString = myString.replace('displayName', tree.displayName);
// console.log(myString);

// find and replace with regex
var hawaii = 'i love to go to hawaii and walk on pahoehoe and aa.'
// hawaii = hawaii.replace(/aa/, 'AA');
// console.log(hawaii);

hawaii = hawaii.replace(/j/g, 'AAAAAAAGH');
// console.log(hawaii);

// regex to match email
// /[\w]+@[\w]+.com|edu|org/g
// this ^^ will match my email in
// here is my email check it out ste_p6Aanie@codef8Aellows.com yo isn't it cool
var regex = /[\w]+@[\w]+.com|edu|org/g;
var email = 'ste_p6Aanie@codef8Aellows.com';

email = email.replace(regex, 'dreew drew drew stephanie@codefellows.com la la la');
// console.log(email);

// template using regex and a function

function lookup(match, propName){
  console.log(match);
  console.log(propName);
  return tree[propName];
}

var regexTemplate = myString.replace(/{{(\w+)}}/g, lookup)
console.log(regexTemplate);
