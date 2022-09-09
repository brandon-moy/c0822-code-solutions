/* exported isPalindromic */

// Goal: check if word is palindrome (same forwards and backwords)
// Take a string
// remove spaces from the string and create into new variable
// take new variable and reverse the letters into another new variable
// check if new variable is === reversed variable
// return true or false

function isPalindromic(string) {
  var nospace = '';
  var reverseWord = '';
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      nospace = nospace + string[j];
    }
  }

  var start = nospace.length - 1;

  for (var i = start; i >= 0; i--) {
    reverseWord += nospace[i];
  }
  if (nospace === reverseWord) {
    return true;
  }
  return false;
}
