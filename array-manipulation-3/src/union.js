/* exported union */

// Goal: take two arrays and add each unique use of the item to an output
// create an output
// go through the first word
// create a boolean variable for if it is in the output
// go through the output if it is then chagne value of boolean
// if boolean variable is false then add to output
// go through second word
// create another boolean variable if item is in output
// go through output and if it exists change boolean to true
// if boolean is false the nadd to output
// return the output

function union(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    var inOutput = false;
    for (var j = 0; j < output.length; j++) {
      if (first[i] === output[j]) {
        inOutput = true;
      }
    }
    if (inOutput === false) {
      output.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    var inOutput2 = false;
    for (var l = 0; l < output.length; l++) {
      if (second[k] === output[l]) {
        inOutput2 = true;
      }
    }
    if (inOutput2 === false) {
      output.push(second[k]);
    }
  }
  return output;
}
