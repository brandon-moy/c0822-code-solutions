/* exported numVowels */

// Goal: take a string and return a number of vowels in string;
// create an output of numbers;
// check each position of the string
// if the position is a vowel add 1 to count
// return count

function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}
