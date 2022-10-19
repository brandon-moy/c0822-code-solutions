const pg = require('pg');
const express = require('express');

const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
    `;

  db.query(sql)
    .then(result => {
      const grades = (result.rows);
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const student = req.body;
  if (!student.course || !student.name || !student.score) {
    res.status(400).json({
      error: 'Name, Course, and Score are required.'
    });
    return;
  }
  const grade = Number(student.score);
  if (!Number.isInteger(grade) || Number(grade < 0 || Number(grade > 100))) {
    res.status(400).json({
      error: 'Please input a positive number between 0 and 100.'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *`;

  const values = [student.name, student.course, student.score];

  db.query(sql, values)
    .then(result => {
      res.status(201);
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
