const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 81;

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'dromtorp'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Authenticate user
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username exists in the database
  connection.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    async (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length > 0) {
          // User found, compare hashed password
          const hashedPassword = results[0].password;
          try {
            if (await bcrypt.compare(password, hashedPassword)) {
              // Passwords match, authentication successful
              res.json({ message: 'Login successful' });
            } else {
              // Passwords don't match
              res.status(401).json({ error: 'Invalid password' });
            }
          } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
          }
        } else {
          // User not found
          res.status(404).json({ error: 'User not found' });
        }
      }
    }
  );
});

// Get all equipment
app.get('/equipment', (req, res) => {
  connection.query('SELECT * FROM utstyrstype', (error, results) => {
    if (error) throw error;
    connection.query('SELECT * FROM utstyr', (err, restwo) =>{
      if (err) throw err;
      res.send({"utstyrtype":results, "utstyr":restwo});
    })
  });
});

// Borrow equipment
app.post('/borrow', (req, res) => {
  const { utstyrsid, utlanttilelev, dato } = req.body;
  console.log(utstyrsid, utlanttilelev, dato)

  // Check if the equipment is available to borrow (not already borrowed)
  connection.query(
    'SELECT * FROM utstyr WHERE utstyrsid = ?',
    [utstyrsid],
    (error, results) => {
      if (error) throw error;

      if (results.length) {
        res.status(400).send('Equipment not available for borrowing.');
      } else {
        // Update the equipment record with borrower information
        connection.query(
          'INSERT INTO utstyr (utlanttilelev, dato, utstyrstype) VALUES (?, ?, ?)',
          [parseInt(utlanttilelev), dato, parseInt(utstyrsid)],
          (insertError, insertResults) => {
            console.log("HIJDKJKJKDKJD")
            if (insertError) throw insertError;
            res.send('Equipment borrowed successfully.');
          }
        );
      }
    }
  );
});

// Return borrowed equipment
app.post('/return', (req, res) => {
  const { utstyrsid } = req.body;

  // Update the equipment record to mark it as returned (remove borrower information)
  connection.query(
    'DELETE FROM utstyr WHERE utstyrsid = ?',
    [utstyrsid],
    (error, results) => {
      if (error) throw error;
      // connection.query('SELECT * FROM utstyr', (err, restwo) =>{
      //   if (err) throw err;
      //   res.send({"utstyr":restwo});
      // })
      res.send('Equipment returned successfully.');
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
