/* exported capitalize */

// Goal: capital first letter, lower case remaining letters
// How?
// put word into function
// create output to store word
// take first letter and capitalize
// turn remaining eltters to lower case and add to output
// return new word

function capitalize(word) {
  var newWord = word.charAt(0).toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word.charAt(i).toLowerCase();
  }
  return newWord;
}
