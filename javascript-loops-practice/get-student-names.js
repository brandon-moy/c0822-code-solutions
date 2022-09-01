/* exported getStudentNames */

// Goal: return an array of only the name of the objects
// create output to house the names
// set the input to 0 (start of array)
// check if the object has a name property
// if there is a name property, add the value to the array
// return the array

function getStudentNames(students) {
  var output = [];
  for (var i = 0; i < students.length; i++) {
    output.push(students[i].name);
  }
  return output;
}
