/* exported truncate */

// Goal: shorten the string to a number of characters and add in ...
// takes the length we want and a string
// create an output for the string
// cut the code at the length amount
// return everything prior to the cut to the object
// concatenate '...' with the string
// return the new string

function truncate(length, string) {
  var output = '';
  output = string.slice(0, length);
  output += '...';
  return output;
}
