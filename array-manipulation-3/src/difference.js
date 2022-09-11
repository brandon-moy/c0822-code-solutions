/* exported difference */

// Goal: take two arrays and return items that are not in both arrays
// take two arrays
// create an output for the array
// go through the first array
// create a variable if the item is in both arrays (boolean)
// go through second array
// if the item in the first array is in the second array change boolean to true
// if the boolean is true then do nothing
// if it is false then add to the output
// do the same for the second variable
// return the output

function difference(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    var inSecond = false;
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        inSecond = true;
      }
    }
    if (inSecond === false) {
      output.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    var inFirst = false;
    for (var l = 0; l < first.length; l++) {
      if (second[k] === first[l]) {
        inFirst = true;
      }
    }
    if (inFirst === false) {
      output.push(second[k]);
    }
  }
  return output;
}
