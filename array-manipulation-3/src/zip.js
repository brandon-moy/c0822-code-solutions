/* exported zip */

// Goal : take two arrays and create an array with sub arrays
// taking one word from each array - if there is a longer array
// only go as long as the shorter array
// take two arrays
// create an output for the arrays
// create a length variable
// compare the lengths and go with the shorter length
// go through the first array for the duration of the length variable
// in the loop create a variable for a subarray
// otherwise push from the first array into the subarray variable
// push from the second array into the subarray variable
// push the subarray into the output
// after loop return the output

function zip(first, second) {
  var output = [];
  var length = 0;
  if (first.length < second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    var subOutput = [];
    subOutput.push(first[i]);
    subOutput.push(second[i]);
    output.push(subOutput);
  }
  return output;
}
