/* exported filterOutNulls */

// Goal - return array without null
// create a spot to store the output
// check array at each location to see if value is null
// if null ignore it
// if a value, add value to output
// return output

function filterOutNulls(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      output.push(values[i]);
    }
  }
  return output;
}
