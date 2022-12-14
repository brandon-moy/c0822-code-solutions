const express = require('express');
const path = require('path');

const app = express();

const directory = path.join(__dirname, 'public');
console.log(directory);

const mountStatic = express.static(directory);

app.use(mountStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(('Listening on port 3000!'));
});
