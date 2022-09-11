/* exported unique */

// Goal: take an array and only return the unique items
// take an array
// create an output to hold the new array
// go through array and take first word
// create a variable with a boolean of if a word is in the output
// check if the word exists in the output
// if yes then change the boolean variable to true
// if no then do nothing
// check the value of the boolean variable
// if true do nothing
// if false add to array
// return output

function unique(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    var inOutput = false;
    for (var j = 0; j < output.length; j++) {
      if (array[i] === output[j]) {
        inOutput = true;
      }
    }
    if (inOutput === false) {
      output.push(array[i]);
    }
  }
  return output;
}
