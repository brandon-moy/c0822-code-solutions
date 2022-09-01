/* exported isVowel */

// Goal: take a single character and check if it is a vowel
// create array of vowels
// run a check to see if the char matches any of the vowels
// return true or false

function isVowel(char) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
