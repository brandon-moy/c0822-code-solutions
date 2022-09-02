/* exported initial */

// Goal: return a new array containing everything except the last
// put array into function
// create output to hold new array
// create a stoppoint variable that is 1 less than the end of the array
// start from the beginning and add items to the nnew array
// array should stop 2 before the end
// return the output

function initial(array) {
  var output = [];
  var stop = array.length - 1;
  for (var i = 0; i < stop; i++) {
    output.push(array[i]);
  }
  return output;
}
