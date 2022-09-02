/* exported compact */

// Goal : take an array input and remove various values form the string
// create a spot for the output
// create a list of banned values
// check if each location is equal to any part of the banned values
// if the values are not equal, add the value to the array
// return the output

function compact(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      output.push(array[i]);
    }
  }
  return output;
}
