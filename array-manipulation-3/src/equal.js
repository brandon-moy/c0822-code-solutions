/* exported equal */

// Goal: take two arrays and see if they are equal at each index
// take two arrays
// check the lengths against each other, if they are not equal then return false
// loops through the first array
// check if array at one position is = the second array at the same position
// if they are not the same at any point then return false
// return true from the function

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
