const fs = require('fs');
const data = require('./data.json');

const option = process.argv[2];

if (option === 'read') {
  displayEntries();
} else if (option === 'create') {
  createEntry(process.argv[3]);
} else if (option === 'update') {
  updateEntry(process.argv[3], process.argv[4]);
}
//  else if (option === 'delete') {
//   deleteEntry(process.argv[3], process.argv[4]);
// }

function displayEntries() {
  for (const key in data.notes) {
    console.log(key + ':', data.notes[key]);
  }
}

function createEntry(string) {
  const id = data.nextId;
  data.nextId++;
  data.notes[id] = string;
  const update = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', update, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

function updateEntry(position, string) {
  data.notes[position] = string;
  const update = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', update, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
