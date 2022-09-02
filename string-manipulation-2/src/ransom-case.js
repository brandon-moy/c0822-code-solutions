/* exported ransomCase */

// Goal: return every OTHER letter uppercase
// take a string
// create output storage
// run through each letter
// if it is an even number (including 0) lowercase
// if it is an odd number uppercase
// add each letter to the output
// return theo utput

function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2) {
      output += string.charAt(i).toUpperCase();
    } else {
      output += string.charAt(i).toLowerCase();
    }
  }
  return output;
}
