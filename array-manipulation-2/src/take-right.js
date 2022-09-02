/* exported takeRight */

// Goal: return a NEW array containing the items start from count until the end
// take array and count
// create output to hold items
// create a start point starting from the end
// if start is negative number, start from 0
// cut the array at the start point
// add cut items to the output
// return output

function takeRight(array, count) {
  var output = [];
  var start = array.length - count;
  if (start < 0) {
    start = 0;
  }
  output = array.slice(start);
  return output;
}
