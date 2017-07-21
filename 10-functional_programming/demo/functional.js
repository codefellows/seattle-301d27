'use strict';

const fs = require('fs');

fs.readFile('tacos.json', 'utf8', function (err, data) {
  var tacos = JSON.parse(data);
  // console.log(tacos);
  mapTacos(tacos);
  filterTacos(tacos);
  filterAndMapTacos(tacos);
  reduceTacos(tacos);
});


function mapTacos(tacos) {
  var mappedTacos = tacos.map(function (taco) {
    return {
      mixin: taco.mixin.slug,
      condiment: taco.condiment.slug,
      baseLayer: taco.base_layer.slug,
      seasoning: taco.seasoning.slug,
      shell: taco.shell.slug
    }
  })
  console.log(mappedTacos);
}

function filterTacos(tacos) {
  var filteredTacos = tacos.filter(function (taco) {
    return taco.seasoning.slug = 'homemade_sriracha';
  })
  console.log(filteredTacos);
}

function filterAndMapTacos(tacos) {
  var filteredAndMappedTacos = tacos.filter(function (taco) {
    return taco.shell.slug === 'bad_ass_tortillas';
  }).map(function (taco) {
    return {
      mixin: taco.mixin.slug,
      condiment: taco.condiment.slug,
      baseLayer: taco.base_layer.slug,
      seasoning: taco.seasoning.slug,
      shell: taco.shell.slug
    }
  })
  console.log(filteredAndMappedTacos);
}

function reduceTacos(tacos) {
  let reducedTacos = tacos.reduce(function (accumulator, taco) {
    console.log('accumulator');
    console.log(accumulator);
    return accumulator + taco.shell.slug + ', ';
  }, 'to buy: ')
  console.log(reducedTacos);
}
