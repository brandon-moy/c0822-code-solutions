/* exported findIndex */

// Goal: search for a number in an array and return the index number
// check every index of an array for the number
// if number is found return the number / exit the function / loop
// if not found, return -1

function findIndex(array, number) {
  for (var i = 0; i < array.length; i++) {
    if (number === array[i]) {
      return i;
    }
  }
  return -1;
}
