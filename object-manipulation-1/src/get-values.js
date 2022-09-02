/* exported getValues */

// Goal: return an array of the VALUES of the object
// take an object
// create an output array for the values
// run through the object at key locations
// get the values of the keys
// add the values to the object
// return the output

function getValues(object) {
  var output = [];
  for (var keys in object) {
    output.push(object[keys]);
  }
  return output;
}
