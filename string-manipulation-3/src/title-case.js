/* exported titleCase */

// Goal: take a string and return it with capitalization of title case
// title case: capitalize 4 letters or more
//             capitalize first word of title and any subtitle
//             capitalize major words and second aprt of hyphenated words
//             JavaScript is always JavaScript and API is always API (hard code)
// takes a string
// create an output for the new string
// lowercase original string into a new variable
// turn original string into an array without spaces
// create an array of minor words
// first word should always be capitalized and add to new output charAt(0).toUpperCase() + substring(1);
// start to check each word starting with the second word
// if javascript - JavaScript
// if api - API
// if includes a '-' give indexOf '-' and capitalize at position 0 and index + 1
// if minor word skip
//

function titleCase(title) {
  var output = '';
  var lowercase = title.toLowerCase();
  var lowercaseArray = lowercase.split(' ');
  output = lowercaseArray[0].charAt(0).toUpperCase() + lowercaseArray[0].substring(1);
  return output;
}
