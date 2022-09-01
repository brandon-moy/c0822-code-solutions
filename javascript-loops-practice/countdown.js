/* exported countdown */

// Goal: return an array of numbers counting down from initial number
// create a spot to hold the output
// look at each number from the input number down to 0 (including 0)
// if the number is greater than 0 add the number to the output
// edit - if the var i is greater than 0, add the var i
// reduce number by 1 and check again
// give back the output

function countdown(number) {
  var output = [];
  for (var i = number; i >= 0; i--) {
    output.push(i);
  }
  return output;
}
