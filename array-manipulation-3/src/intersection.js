/* exported intersection */

// Goal : take two arrays and check for values in each array
// takes two arrays
// create new output array
// run through first array
// run item of first array through second array
// if they are the same then add to output
// return output

function intersection(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        output.push(first[i]);
      }
    }
  }
  return output;
}
