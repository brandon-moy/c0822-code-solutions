/* exported dropRight */

// Goal: return a NEW of everything before the count from the end
// function takes array and count
// create output to store array
// create an end point being the count from the end
// take everything from the beginning to the end point
// add those items to output
// return output

function dropRight(array, count) {
  var output = [];
  var end = array.length - count;
  output = array.slice(0, end);
  return output;
}
