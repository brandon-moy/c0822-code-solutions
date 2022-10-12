const fs = require('fs');

const text = process.argv[2] + '\n';

fs.writeFile('note.txt', text, err => {
  if (err) {
    console.error(err);
  }
});
