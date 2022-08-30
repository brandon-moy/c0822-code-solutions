var small = 1;
var medium = 47;
var large = 100;

var maximumValue = Math.max(small, medium, large);
console.log('The maximum value is:', maximumValue);

var heroes = ['Ash Ketchum', 'Misty', 'Brock', 'Pikachu'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('The random value is:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('The random hero is:', randomHero);

var library = [
  {
    title: 'Eragon',
    author: 'Christopher Paolini'
  },
  {
    title: 'Eldest',
    author: 'Christopher Paolini'
  },
  {
    title: 'Brisingr',
    author: 'Christopher Paolini'
  }
];

var lastBook = library.pop();
console.log('The last book is:', lastBook);

var firstBook = library.shift();
console.log('The first book is:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Brandon Moy';
var firstAndLastName = fullName.split(' ');
console.log('First and Last Names:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my Name:', sayMyName);
