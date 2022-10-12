const fs = require('fs');

const copyFile = process.argv[2];
const pasteFile = process.argv[3];

function copyContent(copyfile, pastefile) {
  fs.readFile(copyFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(pasteFile, data, err => {
        if (err) {
          console.error(err);
        }
      });
    }
  });
}

copyContent(copyFile, pasteFile);
