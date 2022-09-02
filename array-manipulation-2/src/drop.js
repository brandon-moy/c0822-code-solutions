/* exported drop */

// Goal: return an array of items AFTER the count number
// take array and count
// create output to store new array
// cut the array at the count number and add to output
// return output

function drop(array, count) {
  var output = [];
  output = array.slice(count);
  return output;
}
