/* exported swapChars */

// Goal: take tow positions and a string and swap the two characters
// take 2 indexes and a string
// make a var to hold the letter
// remove the letter at first indexd and store in var
// add the var to the string at second index
// return the new word

// function swapChars(firstIndex, secondIndex, string) {
//   var letter = string.split(string[firstIndex], 1); // l
//   var second = string.replace(string[firstIndex], string[secondIndex]); // lodash -> oodash
//   var output = second.replace(second[secondIndex], letter);
//   return output;
// }

// retry - think of new function:
// take first index, second index, and string
// get letters from first and second index
// assign first index letter to second index
// assign second index letter first index
// return string

function swapChars(firstIndex, secondIndex, string) {
  var letter1 = string.charAt(firstIndex);
  var letter2 = string.charAt(secondIndex);
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      output += letter2;
    } else if (i === secondIndex) {
      output += letter1;
    } else {
      output += string[i];
    }
  }
  return output;
}
