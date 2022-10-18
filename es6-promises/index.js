const takeAChance = require('./take-a-chance');

const promise = takeAChance('Brandon');

promise.then(promise => console.log(promise), err => console.error(err.message));
