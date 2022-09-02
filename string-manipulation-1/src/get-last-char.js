/* exported getLastChar */

// Goal: get last item from a string
// How?
// put string into function
// function should check the length of the string
// remove 1 from the length of the string (bc comp counts from 0)
// return value to a variable to hold the last index number
// get the value of the string at the last index number and return the value

function getLastChar(string) {
  var lastIndex = string.length - 1;
  return string[lastIndex];
}
