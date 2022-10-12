const fs = require('fs');
const length = process.argv.length;
const position = 2;

function read(position) {
  if (position < length) {
    fs.readFile(process.argv[position], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    position++;
    read(position);
  }
}

read(position);

console.log(length);
