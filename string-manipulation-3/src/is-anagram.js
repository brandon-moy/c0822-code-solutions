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

// function isAnagram(firstString, secondString) {
//   var sortFirstString = firstString.split('').sort().join('').trim();
//   var sortSecondString = secondString.split('').sort().join('').trim();
//   if (sortFirstString === sortSecondString) {
//     return true;
//   }
//   return false;
// }

// Take 2
// take the strings
// create variables for each string and split them
// run through each spot of one string and see if it is in the second string
// if it is, remove the item and keep going
// if it isn't, return false

function isAnagram(firstString, secondString) {
  var firstStringArray = firstString.split('');
  var secondStringArray = secondString.split('');
  for (var i = 0; i < firstStringArray.length; i++) {
    for (var j = 0; j < secondStringArray.length; j++) {
      if (firstStringArray[i] === secondStringArray[j]) {
        secondStringArray.splice(j, 1);
      } else if (firstStringArray[i] === ' ') {
        secondStringArray.splice(j, 1);
      }
    }
  }
  if (secondStringArray === []) {
    return true;
  }
  return false;
}
