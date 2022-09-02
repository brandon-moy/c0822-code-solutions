/* exported capitalizeWord */

// Goal: take a word string and capitilize the first letter only
// create an output for the new word
// take first letter and capitilize it , add to output
// run through remaining letters and lower case
// add each letter to the new word
// return the new word
// ** edit: need to add test for javascript string**

// plan 2: lower case the entire word into test variable
// check if test is 'javascript'
// if yes, return 'JavaScript'
// if no uppercase first letter and add to output
// add remaining of the test word (since test has already been lowercase)

function capitalizeWord(word) {
  var output = '';
  var test = word.toLowerCase();
  if (test === 'javascript') {
    return 'JavaScript';
  } else {
    output = test.charAt(0).toUpperCase();
    output += test.slice(1);
  }
  return output;
}
