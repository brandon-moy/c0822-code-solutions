const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.json());

const idCheck = id => {
  if (!Number.isInteger(Number(id)) || Number(id) < 0) return 'invalid';
  if (!(id in data.notes)) return 'not found';
  return null;
};

const updateDataJSON = (data, callback) => {
  const updatedJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updatedJSON, callback);
};

app.get('/api/notes/:id', (req, res) => {
  const idValid = idCheck(req.params.id);
  if (idValid === 'not found') {
    res.status(404);
    res.json({
      error: `cannot find note with id ${req.params.id}`
    });
  } else if (idValid === 'invalid') {
    res.status(400);
    res.json({
      error: 'id must be a positive integer'
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
  res.status(200);
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
    updateDataJSON(data, err => {
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
  const idValid = idCheck(req.params.id);
  if (idValid === 'not found') {
    res.status(404);
    res.json({
      error: `cannot find note with id ${req.params.id}`
    });
  } else if (idValid === 'invalid') {
    res.status(400);
    res.json({
      error: 'id must be a positive integer'
    });
  } else {
    delete data.notes[req.params.id];
    updateDataJSON(data, err => {
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

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const idValid = idCheck(id);
  if (idValid === 'not found') {
    res.status(404);
    res.json({
      error: `cannot find note with id ${req.params.id}`
    });
  } else if (idValid === 'invalid') {
    res.status(400);
    res.json({
      error: 'id must be a positive integer'
    });
  } else {
    if (req.body.content === undefined) {
      res.status(400);
      res.json({
        error: 'content is a required field'
      });
    } else {
      data.notes[id].content = req.body.content;
      updateDataJSON(data, err => {
        if (err) {
          console.error(err);
          res.status(500);
          res.json({
            error: 'an unexpected error occured.'
          });
        } else {
          res.status(200);
          res.json(data.notes[id]);
        }
      });
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
