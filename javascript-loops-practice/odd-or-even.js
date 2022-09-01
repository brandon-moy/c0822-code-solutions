/* exported oddOrEven */

// Goal : determine whether a number is odd or even and return that value
// create output to store the data
// check array at each location and see if the number is divisible by 2
// without a remainder
// if yes, add true to output
// if no, add false to output
// return output

function oddOrEven(numbers) {
  var output = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      output.push('odd');
    } else {
      output.push('even');
    }
  }
  return output;
}
