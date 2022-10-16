const express = require('express');
const data = require('./data.json');

const app = express();

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400);
    res.json('Sorry, ids can only be positive numbers, please try a different id.');
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404);
    res.json('Sorry, that id does not exist, please try a different id.');
  } else {
    res.status(200);
    res.json(data.notes[req.params.id]);
  }
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in data.notes) {
    notesArray.push(data.notes[id]);
  }
  if (notesArray.length === 0) {
    res.json('Sorry, no notes here. Please add some notes!');
  } else {
    res.json(notesArray);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
