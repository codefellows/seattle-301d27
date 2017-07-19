'use strict';

const treeQuotes = [
  '   -- tree',
  'qwisssssshhhhhhhhhh  -- tree',
  'crack crick crick   -- tree',
  'rustlerustlerustle   -- tree',
  'CRASH!!!   -- tree'
];

function getRandomTree () {
  return treeQuotes[(Math.floor(Math.random() * treeQuotes.length))];
}

function getAllQuotes () {
  return treeQuotes;
}

function addQuote (quote) {
  treeQuotes.push(quote);
}

// module.exports = getRandomTree;
module.exports = {
  getRandomTree: getRandomTree,
  getAllQuotes: getAllQuotes,
  addQuote: addQuote
}
