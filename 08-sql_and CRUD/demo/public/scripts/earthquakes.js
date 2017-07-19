'use strict';

const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

let response = $.get(url).then(successFunction, errorFunction);

// console.log(response)

function successFunction(data) {
  console.log(Object.keys(data));
  data.features.forEach(function (earthquake) {
    console.log(earthquake.properties.place)
    console.log(earthquake.properties.mag)
  })
}

function errorFunction(obj, err, msg) {
  console.log(msg);
}
