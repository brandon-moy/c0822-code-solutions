/* exported take */

// Goal: return a NEW array containing the first count number of elements in array
// Option A:
// take an array and a count
// create a new array to hold output
// slice the array from 0 to count
// return slice to output
// return output

function take(array, count) {
  var output = [];
  output = array.slice(0, count);
  return output;
}
