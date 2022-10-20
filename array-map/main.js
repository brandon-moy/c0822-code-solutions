const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const double = num => {
  return num * 2;
};

const doubled = numbers.map(double);

console.log('doubled:', doubled);

const price = num => {
  return '$' + num.toFixed();
};

const prices = numbers.map(price);

console.log('prices:', prices);

const upperCase = string => {
  return string.toUpperCase();
};

const upperCased = languages.map(upperCase);

console.log('upperCased:', upperCased);

const firstLetter = string => {
  return string[0];
};

const firstLetters = languages.map(firstLetter);

console.log('firstLetters', firstLetters);
