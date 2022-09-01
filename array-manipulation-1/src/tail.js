/* exported tail */

// Goal: return a new array containing elements AFTER the first element
// put array into function
// creaate output for new array
// start from first position until the end of the array
// add each item to the output
// return the output

function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
