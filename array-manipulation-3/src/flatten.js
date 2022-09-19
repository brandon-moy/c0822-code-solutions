/* exported flatten */

// Goal: take an array with children array and transform them into
// one array
// take an array
// create an output for the new array
// go through the array
// check if the item in the array is another array
// if yes then go through the array and add to output array
// if no then just add to the output
// return the output

function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        output.push(array[i][j]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
