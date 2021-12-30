const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//koneksi db
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sosmed',
});

//menjalankan db table users//
//create

app.post('/users', (req, res) => {
  let sql =
    "INSERT INTO users SET username='" +
    req.body.username +
    "', password=password('" +
    req.body.password +
    "')";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json({status: 200, message: 'Berhasil', data: null});
  });
});

app.post('/post', (req, res) => {
  let sql =
    'INSERT INTO posts SET post_date=NOW()' +
    ", username= '" +
    req.body.username +
    "', post= '" +
    req.body.post +
    "'";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json({status: 200, message: 'Berhasil', data: null});
  });
});

//retriave
app.get('/users', (req, res) => {
  let sql = 'SELECT * FROM users';

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil diambil', data: results});
  });
});

app.get('/post', (req, res) => {
  let sql =
    "SELECT post_id, username, post, DATE_FORMAT (post_date, '%W %D %M %Y %H:%i') as post_date FROM posts";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil diambil', data: results});
  });
});

//retriave by id
app.get('/users/:id', (req, res) => {
  let sql = "SELECT * FROM users WHERE id='" + req.params.id + "'";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil diambil', data: results});
  });
});

app.get('/post/id/:id', (req, res) => {
  let sql =
    "SELECT post_id, username, post, DATE_FORMAT (post_date, '%W %D %M %Y %H:%i') as post_date FROM posts WHERE post_id='" +
    req.params.id +
    "'";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil diambil', data: results});
  });
});

//retriave by records username
app.get('/users/username/:username', (req, res) => {
  let sql =
    "SELECT * FROM users WHERE username='" +
    req.params.username +
    "'";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil diambil', data: results});
  });
});

app.get('/post/username/:username', (req, res) => {
  let sql =
    "SELECT post_id, username, post, DATE_FORMAT (post_date, '%W %D %M %Y %H:%i') as post_date FROM posts WHERE username='" +
    req.params.username +
    "'";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil diambil', data: results});
  });
}); 


//update

app.put('/users/:id', (req, res) => {
  let sql =
    "UPDATE users SET username='" +
    req.body.username +
    "' " +
    "WHERE id='" +
    req.params.id +
    "'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil diupdate', data: null});
  });
});

app.put('/post/id/:id', (req, res) => {
  let sql =
    "UPDATE posts SET post='" +
    req.body.post +
    "' " +
    "WHERE post_id='" +
    req.params.id +
    "'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil diupdate', data: null});
  });
});

//delete

app.delete('/users/:id', (req, res) => {
  let sql = "DELETE FROM users WHERE id='" + req.params.id + "'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil dihapus', data: null});
  });
});

app.delete('/posts/id/:id', (req, res) => {
  let sql = "DELETE FROM posts WHERE post_id='" + req.params.id + "'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({status: 200, message: 'data berhasil dihapus', data: null});
  });
});

app.use('/images', express.static('images'));

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
