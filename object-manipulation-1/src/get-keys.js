/* exported getKeys */

// Goal: return an array of object keys
// takes an object
// create output array for the keys
// run through the object and take the keys
// add keys to output
// return output

function getKeys(object) {
  var output = [];
  for (var keys in object) {
    output.push(keys);
  }
  return output;
}
