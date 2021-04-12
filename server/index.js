const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3555;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: '0384_group',
  password: 'DZKWALwf',
});
app.use(express.json());

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

const moment = require('moment');

app.get('/api/home', (req, res) => {
  pool.query(
    `SELECT id, title,content, date, author, label, actual from news ORDER BY actual `,
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        let correct_data = [];

        if (req.query.whole == 'yes') {
          for (let i = 0; i < rows.length; i++) {
            if (moment(rows[i].actual).isBefore(moment())) {
              correct_data.push(rows[i]);
            }
          }

          res.send(correct_data.reverse());
        } else {
          for (let i = 0; i < rows.length; i++) {
            if (moment(rows[i].actual).isAfter(moment())) {
              correct_data.push(rows[i]);
            }
          }

          res.send(correct_data);
        }
      }
    },
  );
});

app.get('/home/inner', (req, res) => {
  var ip;
  if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(',')[0];
  } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.ip;
  }
  pool.query(
    `SELECT * FROM views WHERE post_id = ${req.query.id} AND ip = '${ip}' `,
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        if (rows.length == 0) {
          pool.query(
            `INSERT INTO views (post_id, table_name, ip) VALUES (${req.query.id}, 'news', '${ip}')`,
            (err, rows) => {
              res.send(rows);
            },
          );
        }
      }
    },
  );
});

app.get('/hw/inner', (req, res) => {
  var ip;
  if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(',')[0];
  } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.ip;
  }
  pool.query(
    `SELECT * FROM views WHERE post_id = ${req.query.id} AND ip = '${ip}' `,
    (err, rows) => {
      if (rows.length == 0) {
        pool.query(
          `INSERT INTO views (post_id, table_name, ip) VALUES (${req.query.id}, 'subject_homework', '${ip}')`,
          (err, rows) => {
            res.send(rows);
          },
        );
      }
    },
  );
});

app.get('/post/views', (req, res) => {
  pool.query(
    `SELECT COUNT(*) as views FROM views WHERE table_name ='${req.query.table}' AND post_id = ${req.query.id}`,
    (err, rows) => {
      res.send(rows);
    },
  );
});

app.post('/main_post/new', function (req, res) {
  msql_query = `INSERT INTO news (title, content, author, date, label, actual) VALUES ('${
    req.body.title
  }', '${req.body.content ? req.body.content : ` `}', 'Максим', '${req.body.date}', '${
    req.body.select
  }','${req.body.actual}')`;

  pool.query(msql_query, function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});
app.post('/homework/new', function (req, res) {
  msql_query = `INSERT INTO subjects_homework (subject_id, title, content, date, deadline) VALUES ('${req.body.subject}', '${req.body.title}', '${req.body.content}', '${req.body.date}', '${req.body.deadline}')`;

  pool.query(msql_query, function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

app.post('/delete', function (req, res) {
  msql_query = `DELETE FROM ${req.body.table} WHERE id = ${req.body.id_toDelete}`;

  pool.query(msql_query, function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

app.get('/api/subjects', (req, res) => {
  pool.query(`select * from subjects`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

const fs = require('fs');
app.get('/uploads', (req, res) => {
  /*let fileContent = fs.readFileSync(req.query.path, 'utf8');
  res.send(fileContent);*/

  res.sendFile(`/home/maxim/public_html/my-app/uploads/${req.query.filename}`);
});

app.get('/api/subjectlinks/', function (req, res) {
  pool.query(`select * from subjects_links WHERE subject_id = ${req.query.id}`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.get('/api/subjecthomework/', function (req, res) {
  pool.query(
    `select * from subjects_homework WHERE subject_id = ${req.query.id} ORDER BY date DESC`,
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    },
  );
});

app.get('/api/homework', function (req, res) {
  pool.query(
    `SELECT subjects_homework.id as id, subjects_homework.content as content, subjects_homework.deadline as deadline , subjects_homework.title as title, subjects_homework.date as date, subjects.title as subjtitle FROM subjects_homework INNER JOIN subjects ON subjects.id = subjects_homework.subject_id ORDER BY deadline DESC`,
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    },
  );
});

app.get('/hw/get_solutors', function (req, res) {
  pool.query(
    `SELECT *
  FROM users un
  WHERE un.vk_id in
        (SELECT vk_id 
         FROM hw_check WHERE hw_id = ${req.query.hw_id})`,
    (err, rows) => {
      res.send(rows);
    },
  );
});

app.get('/hw/checkit', function (req, res) {
  pool.query(
    `SELECT * FROM hw_check WHERE vk_id=${req.query.vk_id} AND hw_id=${req.query.hw_id}`,
    (err, rows) => {
      if (rows.length == 0) {
        pool.query(
          `INSERT INTO hw_check (vk_id, hw_id) VALUES (${req.query.vk_id}, ${req.query.hw_id})`,
          (err, rows) => {
            res.send(rows);
          },
        );
      }
    },
  );
});

app.get('/hw/solutors_list', function (req, res) {
  pool.query(
    `SELECT *
  FROM users un
  WHERE un.vk_id in
        (SELECT vk_id 
         FROM hw_check WHERE hw_id = ${req.query.hw_id})`,
    (err, rows) => {
      res.send(rows);
    },
  );
});

app.get('/api/subjectlectories/', function (req, res) {
  pool.query(
    `select * from subjects_lectories WHERE subject_id = ${req.query.id} ORDER BY date DESC`,
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    },
  );
});

var request = require('request'),
  cheerio = require('cheerio');

app.get('/api/timetable/', function (req, res) {
  url = 'https://etu.ru/';

  request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body),
        temperature =
          $(
            '#header > div.top.container > div > div.hidden-sm.hidden-md.col-lg-3 > div.calendar > div > div',
          )
            .html()
            .split(' ')[1] %
            2 ==
          0;

      let week_is = temperature ? 'четная' : 'нечетная';
      if (req.query.day == 'whole') {
        pool.query(`select * from timetable ORDER BY daypos, start `, (err, rows) => {
          if (err) {
            res.send(err);
          } else {
            res.send(rows.reverse());
          }
        });
      } else {
        pool.query(
          `select * from timetable WHERE weekday = '${req.query.day}' ORDER BY start`,
          (err, rows) => {
            if (err) {
              res.send(err);
            } else {
              res.send({ rows, week_is });
            }
          },
        );
      }
    } else {
      console.log('Произошла ошибка: ' + error);
    }
  });
});

app.get('/api/teachers/', function (req, res) {
  pool.query(`select * from teachers WHERE subject_id = ${req.query.id}`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.post('/users/login', function (req, res) {
  const { id, name, last_name, photo } = req.body;

  pool.query(`select * from users WHERE vk_id = ${id}`, (err, rows) => {
    if (rows.length > 0) {
      res.send(rows[0]);
    } else {
      pool.query(
        `INSERT INTO users (vk_id, username, photo) VALUES (${id}, '${name} ${last_name}', '${photo}')`,
        (err, rows) => {
          res.send(rows);
        },
      );
    }
  });
});

app.get('/users/get', function (req, res) {
  pool.query(`select * from users WHERE vk_id = ${req.query.id}`, (err, rows) => {
    res.send(rows);
  });
});

app.post('/users/post', function (req, res) {
  let msql_query = `UPDATE users SET username = '${req.body.username}', github='${req.body.github}' WHERE vk_id=${req.body.id}`;

  pool.query(msql_query, function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});
