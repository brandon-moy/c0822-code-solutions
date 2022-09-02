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
  var lowercase = string.toLowerCase();
  var array = lowercase.split(' ');
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    var newWord = word.charAt(0).toUpperCase();
    newWord += word.slice(1);
    if (i !== 0) {
      output = output + ' ' + newWord;
    } else {
      output += newWord;
    }
  }
  return output;
}
