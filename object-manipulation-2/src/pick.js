/* exported pick */

// Goal: check an object for properties in an array, return the matching properties
// to a NEW object and return the NEW object
// take a source (object) and key (array)
// check the source at each key point at each iteration
// check if the return is undefined
// if not, add to object
// return the new object

function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}
