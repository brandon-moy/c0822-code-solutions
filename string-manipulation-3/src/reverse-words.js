/* exported reverseWords */

// Goal: return a string of every character reversed
// take a string
// create a place for an output
// split the strings at the spaces
// reverse each word
// concatenate the words into the output
// remove the beginning and ending spaces
// return the output

function reverseWords(string) {
  var output = '';
  var split = string.split(' ');
  for (var i = 0; i < split.length; i++) {
    var newWord = '';
    var start = split[i].length - 1;
    var word = split[i];
    for (var j = start; j >= 0; j--) {
      newWord += word[j];
    }
    output = output + ' ' + newWord;
  }
  return output;
}
