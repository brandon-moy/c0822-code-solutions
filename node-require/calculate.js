const a = Number(process.argv[2]);
const b = Number(process.argv[4]);
const keyword = process.argv[3];

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let output;

if (keyword === 'plus') {
  output = add(a, b);
} else if (keyword === 'minus') {
  output = subtract(a, b);
} else if (keyword === 'over') {
  output = divide(a, b);
} else if (keyword === 'times') {
  output = multiply(a, b);
}

console.log('result:', output);
