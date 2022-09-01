/* exported sumAll */

// Goal - add all the numbers of the array together into one number
// create a variable for the sum
// pulls the numbers from the array starting at position 0 up to the length of
// the array
// add the number to the current total and set the new total to the sum
// check again until the end of the array
// return the sum

function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
