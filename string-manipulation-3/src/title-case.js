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
    }
  }
  return output;
}

// } else {
//   var shortCapital = lowercaseArray[i].charAt(0).toUpperCase() + lowercaseArray[i].substring(1);
//   output = output + ' ' + shortCapital;

// } else if (lowercaseArray[i].includes('-')) {
//   var location = lowercaseArray[i].indexOf('-');
//   var beforeLocation = lowercaseArray[i].charAt(0).toUpperCase() + lowercaseArray[i].substring(1, location);
//   var afterLocation = lowercaseArray[i].charAt(location + 1).toUpperCase() + lowercaseArray[i].substring(location + 2);
//   var hyphenatedWord = beforeLocation + '-' + afterLocation;
//   output = output + ' ' + hyphenatedWord;
// } else {
//   var capitalize = lowercaseArray[i].charAt(0).toUpperCase() + lowercaseArray[i].substring(1);
//   output = output + ' ' + capitalize;
// }

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
//

// function titleCase(title) {
//   var output = '';
//   var lowercase = title.toLowerCase();
//   var lowercaseArray = lowercase.split(' ');
//   if (lowercaseArray[0] === 'javascript') {
//     output = 'JavaScript';
//   } else if (lowercaseArray[0] === 'javascript:') {
//     output = 'JavaScript:';
//   } else {
//     output = lowercaseArray[0].charAt(0).toUpperCase() + lowercaseArray[0].substring(1);
//   }
//   var minorWord = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
//   for (var i = 1; i < lowercaseArray.length; i++) {
//     if (lowercaseArray[i] === 'javascript') {
//       output = output + ' ' + 'JavaScript';
//     } else if (lowercaseArray[i] === 'javascript:') {
//       output = output + ' ' + 'JavaScript:';
//     } else if (lowercaseArray[i] === 'api') {
//       output = output + ' ' + 'API';
//     } else if (lowercaseArray[i].includes('-')) {
//       var location = lowercaseArray[i].indexOf('-');
//       var beforeLocation = lowercaseArray[i].charAt(0).toUpperCase() + lowercaseArray[i].substring(1, location);
//       var afterLocation = lowercaseArray[i].charAt(location + 1).toUpperCase() + lowercaseArray[i].substring(location + 2);
//       var hyphenatedWord = beforeLocation + '-' + afterLocation;
//       output = output + ' ' + hyphenatedWord;
//     } else if (lowercaseArray[i - 1].charAt(lowercaseArray[i - 1].length - 1) === ':') {
//       var afterColon = lowercaseArray[i].charAt(0).toUpperCase() + lowercaseArray[i].substring(1);
//       output = output + ' ' + afterColon;
//     } else if (lowercaseArray[i].length < 4) {
//       if (minorWord.includes(lowercaseArray[i])) {
//         output = output + ' ' + lowercaseArray[i];
//       } else {
//         var shortCapital = lowercaseArray[i].charAt(0).toUpperCase() + lowercaseArray[i].substring(1);
//         output = output + ' ' + shortCapital;
//       }
//     } else {
//       var capitalize = lowercaseArray[i].charAt(0).toUpperCase() + lowercaseArray[i].substring(1);
//       output = output + ' ' + capitalize;
//     }
//   }
//   return output;
// }
