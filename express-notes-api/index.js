const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400);
    res.json({
      error: 'id must be a positive integer'
    });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404);
    res.json({
      error: `cannot find note with id ${req.params.id}`
    });
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
  res.json(notesArray);
});

app.post('/api/notes', (req, res) => {
  const note = req.body;
  if (note.content === undefined) {
    res.status(400);
    res.json({
      error: 'content is a required field'
    });
  } else {
    const id = data.nextId;
    note.id = id;
    data.notes[id] = note;
    data.nextId++;
    const noteJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', noteJSON, err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({
          error: 'an unexpected error occured.'
        });
      } else {
        res.status(201);
        res.json(note);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0) {
    res.status(400);
    res.json({
      error: 'id must be a positive integer'
    });
  } else if (data.notes[id] === undefined) {
    res.status(404);
    res.json({
      error: `cannot find note with id ${id}`
    });
  } else {
    delete data.notes[id];
    const deleteJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', deleteJSON, err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({
          error: 'an unexpected error occured.'
        });
      } else {
        res.status(204);
        res.send();
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});