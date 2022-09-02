/* exported includes */

// return boolean is a value is found in an array at any point
// take an array and a value
// go through all array items
// if value === array at a point at any time return true
// otherwise return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
