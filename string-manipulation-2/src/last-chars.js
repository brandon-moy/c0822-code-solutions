/* exported lastChars */

// Goal: return string starting at length until the end
// take string and length
// create a var for the index position
// if number is negative start from 0
// start string length and remove from before
// return new string

function lastChars(length, string) {
  var start = string.length - length;
  if (start < 0) {
    start = 0;
  }
  return string.slice(start);
}
