// const fs = require('fs');
const data = require('./data.json');

const option = process.argv[2];

if (option === 'create') {
  // createEntry(process.argv[3]);
} else if (option === 'read') {
  displayEntries();
}
//  else if (option === 'update') {
//   updateEntry(process.argv[3], process.argv[4]);
// } else if (option === 'delete') {
//   deleteEntry(process.argv[3], process.argv[4]);
// }

function displayEntries() {
  for (const key in data.notes) {
    console.log(key + ':', data.notes[key]);
  }
}
