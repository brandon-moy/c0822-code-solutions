/* exported reverse */

// Goal : return a new array of the input array in reverse order
// put array into function
// create output for new array
// start from the end of the array and count down
// add each item to the new array
// return the array

function reverse(array) {
  var output = [];
  var start = array.length - 1;
  for (var i = start; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
