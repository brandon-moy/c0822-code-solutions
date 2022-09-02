/* exported capitalizeWords */

// Goal: return a string with every WORD capitalized
// take a string
// create an output
// split a string into multiple string into an array
// go through the arary and take each word one by one
// capitilize the word at the first character
// concatenate strings in the output
// return the output

function capitalizeWords(string) {
  var output = '';
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    output = output + ' ' + array[i].charAt(0).toUpperCase();
  }
  return output;
}
