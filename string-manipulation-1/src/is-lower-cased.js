/* exported isLowerCased */

// Goal : check if all letters are lower cased
// take word and put it into function
// create new variable and make whole word lower case
// check if new variable is === word
// if yes return true
// if no return false

function isLowerCased(word) {
  var lowerCase = word.toLowerCase();
  if (lowerCase === word) {
    return true;
  }
  return false;
}
