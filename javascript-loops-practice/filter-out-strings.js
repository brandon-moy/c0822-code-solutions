/* exported filterOutStrings */

// Goal: print an array with only numbers
// create a place to store the output
// check the array place by place to see if the item is a number or a string
// if it is a number, add the number to the output
// if it is a string, ignore it
// return the output

function filterOutStrings(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      output.push(values[i]);
    }
  }
  return output;
}
