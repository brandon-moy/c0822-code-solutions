/* exported isAnagram */

// Take 4?
// take two strings
// loop through each and assign each with no spaces to a new variable
// check if the lengths of the strings match, if no return false
// check how many times each letter appears in first string?
// check how many times each letter appears in second string?
// compare?
// if they don't match return false
// return true from the function

function isAnagram(firstString, secondString) {
  var firstNoSpace = '';
  var secondNoSpace = '';

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstNoSpace += firstString[i];
    }
  }

  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondNoSpace += secondString[j];
    }
  }

  if (firstNoSpace.length !== secondNoSpace.length) {
    return false;
  }

  for (var k = 0; k < firstNoSpace.length; k++) {
    var firstcount = 0;
    var secondcount = 0;
    for (var l = 0; l < firstNoSpace.length; l++) {
      if (firstNoSpace[k] === firstNoSpace[l]) {
        firstcount++;
      }
    }
    for (var m = 0; m < secondNoSpace.length; m++) {
      if (firstNoSpace[k] === secondNoSpace[m]) {
        secondcount++;
      }
    }
    if (firstcount !== secondcount) {
      return false;
    }
  }
  return true;
}
