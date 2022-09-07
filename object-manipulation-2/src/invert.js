/* exported invert */

// Goal : to switch the properties and the values of an object
// take an object
// create an output for a new object
// separate properties and values
// reassign properties and values as pairs
// add to output
// return output

function invert(source) {
  var output = {};
  var newProperty = [];
  var newValue = [];
  for (var key in source) {
    newProperty = source[key];
    newValue = key;
    output[newProperty] = newValue;
  }
  return output;
}
