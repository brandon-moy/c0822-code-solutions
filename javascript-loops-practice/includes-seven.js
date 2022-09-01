/* exported includesSeven */

// Goal: return true if there is a 7 in the array, return false if no number 7
// check the array at each index to see if there is a value === 7
// if yes at any point, add true to the output
// check output to see if true has been added
// if yes return true
// if no return false

function includesSeven(array) {
  var output;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      output = true;
    }
  }
  if (output === true) {
    return true;
  } else {
    return false;
  }
}
