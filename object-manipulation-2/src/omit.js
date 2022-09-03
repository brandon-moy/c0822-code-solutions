/* exported omit */

// Goal: return new object of items in an object that are not in an array
// create output to store new object
// set output = source
// go through the keys
// check if the keys exist in the output
// if yes, delete it
// return output

function omit(source, keys) {
  var output = {};
  for (var key in source) {
    var newProp = key;
    var newValue = source[key];
    output[newProp] = newValue;
  }
  for (var i = 0; i < keys.length; i++) {
    if (output[keys[i]] !== undefined) {
      delete output[keys[i]];
    }
  }
  return output;
}
