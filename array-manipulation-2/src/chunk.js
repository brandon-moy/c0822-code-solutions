/* exported chunk */

// Goal: return an array of arrays based on the size
// take an array and a size for sub arrays
// create a final output array
// create suboutput arrays
// create a value to increment by
// cut the array size into sub arrays starting from the position and increment number amount
// push sub arrays to output array
// return output

function chunk(array, size) {
  var output = [];
  for (var i = 0; i < array.length; i += size) {
    var increment = i + size;
    var sub = array.slice(i, increment);
    output.push(sub);
  }
  return output;
}
