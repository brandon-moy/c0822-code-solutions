const takeAChance = require('./take-a-chance');

const promise = takeAChance('Brandon');

promise.then(promise => console.log(promise));

promise.catch(err => console.error(err.message));
