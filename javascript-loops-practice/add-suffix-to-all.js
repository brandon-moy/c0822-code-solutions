/* exported addSuffixToAll */

// Goal: concatenate a suffix to a string
// set the function input to an array of words and the suffix to add
// create a new array to hold the words with the suffix
// set the input to 0
// check if input is < array.length
// if yes, concatenate the suffix to the word at position i
// print the new word to the output array
// return the output

function addSuffixToAll(words, suffix) {
  var output = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    output.push(newWord);
  }
  return output;
}
