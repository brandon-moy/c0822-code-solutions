/* exported getWords */

// Goal : take string and turn each item into an item in the array
// input string
// create output of empty array
// if string is not empty, split string into array
// return array
// if string is empty, return empty array

function getWords(string) {
  var empty = [];
  if (string !== '') {
    return string.split(' ');
  }
  return empty;
}
