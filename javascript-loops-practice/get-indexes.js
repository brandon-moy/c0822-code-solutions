/* exported getIndexes */

// Goal: print an array of the index numbers from the array input
// create an output array to hold the index numbers
// set the input to 0 (since count starts at 0)
// check if input is < the length of the array
// if yes, add the input to the output array
// return the output

function getIndexes(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    output.push(i);
  }
  return output;
}
