/* exported includesSeven */

// Goal: return true if there is a 7 in the array, return false if no number 7
// check the array at each index to see if there is a value === 7
// if yes at any point, add true to the output
// check output to see if true has been added
// if yes return true
// if no return false

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
