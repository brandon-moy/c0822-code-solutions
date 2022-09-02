/* exported toObject */

// Goal : take an array and turn the items into an object
// take an array
// create an output object
// take array at 0 position set as key
// take array at 1 position set as value
// add the pair to the object
// return the object

function toObject(keyValuePair) {
  var output = {};
  output[keyValuePair[0]] = keyValuePair[1];
  return output;
}
