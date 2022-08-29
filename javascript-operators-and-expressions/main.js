var width = 10;
var height = 10;
var area = width * height;
var bill = 20;
var payment = 10;
var change = bill - payment;
var quizzes = 80;
var midterm = 85;
var final = 60;
var grade = (quizzes + midterm + final) / 3;
var firstName = 'Brandon';
var lastName = 'Moy';
var fullName = firstName + ' ' + lastName;
var pH = 8;
var isAcidic = pH < 7;
var headCount = 300;
var isSparta = (headCount === 300);
var motto = fullName;
motto = motto + ' is the GOAT';

console.log('value of area:', area);
console.log('typeof area:', typeof area);

console.log('value of change:', change);
console.log('typeof change', typeof change);

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
