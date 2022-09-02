/* exported isUpperCased */

// Goal: check if all characters in a word are upper case
// take word and put into function
// create a new string that capitilizes the whole word
// check if new string is === the word
// if yes the return boolean true
// if no return boolean false

function isUpperCased(word) {
  var upperCase = word.toUpperCase();
  if (upperCase === word) {
    return true;
  }
  return false;
}
