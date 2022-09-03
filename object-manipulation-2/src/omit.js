/* exported omit */

// Goal: return new object of items in an object that are not in an array
// create output to store new object
// set output = source
// go through the keys
// check if the keys exist in the output
// if yes, delete it
// return output

function omit(source, keys) {
  var output = source;
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      delete output[keys];
    }
  }
  return output;
}
