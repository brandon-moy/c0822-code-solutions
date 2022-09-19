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
// if length is less than 4 check if minor word
// yes minor word add to output
// no minor word capitalize first letter and add to output
// if non then capitalize first letter and add to output

// Lets clean up?
// take a string
// create a new variable for the string
// lowercase the string and put into new variable
// make an array of minor words
// split the string at spaces into arrays
// go into the array at each position
// check if the word ends with a :
//
// check if the word is javascript
// if yes change to JavaScript
// check if word is api
// if yes change to API
// check if the word is less than 4 letters
// if yes check if it is a minor word
// if yes again add the word
// if no then capitalize first letter and check the other letters
// if the letters contain a '-'
// capitalize the following letter
// add the remaining letters after the capital to the rest of the string

function titleCase(title) {
  var output = '';
  var lowercase = title.toLowerCase();
  var lowercaseArray = lowercase.split(' ');
  var minorWord = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  if (lowercaseArray[0] === 'javascript') {
    output = 'JavaScript';
  } else if (lowercaseArray[0] === 'javascript:') {
    output = 'JavaScript:';
  } else {
    for (var j = 0; j < lowercaseArray[0].length; j++) {
      if (j === 0) {
        output = lowercaseArray[0][j].toUpperCase();
      } else {
        output += lowercaseArray[0][j];
      }
    }
  }
  for (var i = 1; i < lowercaseArray.length; i++) {
    if (lowercaseArray[i] === 'javascript') {
      output = output + ' ' + 'JavaScript';
    } else if (lowercaseArray[i] === 'javascript:') {
      output = output + ' ' + 'JavaScript:';
    } else if (lowercaseArray[i] === 'api') {
      output = output + ' ' + 'API';
    } else if (output[output.length - 1] === ':') {
      for (var k = 0; k < lowercaseArray[i].length; k++) {
        if (k === 0) {
          output = output + ' ' + lowercaseArray[i][k].toUpperCase();
        } else {
          output = output + lowercaseArray[i][k];
        }
      }
    } else if (lowercaseArray[i].length < 4) {
      if (minorWord.includes(lowercaseArray[i])) {
        output = output + ' ' + lowercaseArray[i];
      } else {
        for (var n = 0; n < lowercaseArray[i].length; n++) {
          if (n === 0) {
            output = output + ' ' + lowercaseArray[i][n].toUpperCase();
          } else if (lowercaseArray[i][n - 1] === '-') {
            output = output + lowercaseArray[i][n].toUppercase();
          } else {
            output = output + lowercaseArray[i][n];
          }
        }
      }
    } else {
      for (var o = 0; o < lowercaseArray[i].length; o++) {
        if (o === 0) {
          output = output + ' ' + lowercaseArray[i][o].toUpperCase();
        } else if (lowercaseArray[i][o] === '-') {
          output = output + lowercaseArray[i][o];
          var start = (o + 1);
          for (var p = start; p < lowercaseArray[i].length; p++) {
            if (p === start) {
              output = output + lowercaseArray[i][p].toUpperCase();
            } else {
              output = output + lowercaseArray[i][p];
            }
          }
          break;
        } else {
          output = output + lowercaseArray[i][o];
        }
      }
    }
  }
  return output;
}
