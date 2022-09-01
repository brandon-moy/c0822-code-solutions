/* exported filterOutStrings */

// Goal: print an array with only numbers
// create a place to store the output
// check the array place by place to see the typeof the data value
// if it is not a string, add the value to the array
// if it is a string, ignore it
// return the output

function filterOutStrings(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      output.push(values[i]);
    }
  }
  return output;
}
