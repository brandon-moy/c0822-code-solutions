var colors: string[] = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

var america: string = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];

console.log(america);

colors[2] = 'green';

var mexico: string = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];

console.log(mexico);
console.log('value of colors:', colors);

var students: string[] = ['Marcus', 'Daisy', 'Brandon', 'Anthony'];
var numberOfStudents: number = students.length;

console.log('There are', numberOfStudents, 'students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('The last student in the array is', lastStudent);
console.log('value of students:', students);
