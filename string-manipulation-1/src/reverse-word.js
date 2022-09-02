/* exported reverseWord */

// Goal : take word and reverse it
// create an output for the new word
// start a loop and begin from the end of the array and increment down
// push each letter into the word
// return the word

function reverseWord(word) {
  var reverse = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
