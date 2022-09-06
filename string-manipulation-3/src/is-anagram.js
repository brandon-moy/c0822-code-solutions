/* exported isAnagram */

// Goal : test if two strings are anagrams of each other (share same letters)
// takes two strings
// create two new variables for the two strings
// remove any spaces between the strings
// sort the letters
// combine the strings into one word
// remove any excess spaces
// assign to new variable
// check if the two strings are equal to each other
// if yes return true otherwise return false

function isAnagram(firstString, secondString) {
  var sortFirstString = firstString.split('').sort().join('').trim();
  var sortSecondString = secondString.split('').sort().join('').trim();
  if (sortFirstString === sortSecondString) {
    return true;
  }
  return false;
}
