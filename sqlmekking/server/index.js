const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 81;
const saltrounds = 10;

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

// Utility function to promisify queries
const queryAsync = (connection, sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Register new user
app.post('/register', async (req, res) => {
  const { elevId, fornavn, eternavn, klasseId, tlf, tlfP, brukernavn, passord } = req.body;

  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(passord, saltrounds);

    // Insert the new user into the elevtabell table
    const insertQuery = 'INSERT INTO elevtabell (ElevID, Fornavn, Eternavn, KlasseID, TLF, TLF_P, Brukernavn, Passord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    await queryAsync(connection, insertQuery, [elevId, fornavn, eternavn, klasseId, tlf, tlfP, brukernavn, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Authenticate user
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log("Du er jomfru")
  try {
    // Check if username exists in the database
    const query = 'SELECT * FROM elevtabell WHERE Brukernavn = ?';
    const results = await queryAsync(connection, query, [username]);

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(results[0])
    const hashedPassword = results[0].Passord;

    // Compare hashed password
    if (await bcrypt.compare(password, hashedPassword)) {
      // Passwords match, authentication successful
      res.status(200).json({ message: 'Login successful' });
    } else {
      // Passwords don't match
      res.status(401).json({ error: 'Invalid password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all equipment
app.get('/equipment', (req, res) => {
  const query = `
    SELECT *
    FROM utstyrstype`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    connection.query("SELECT * from utstyr", (utErr, utRes) => {
      if (utErr) {
        console.error(utErr);
        return res.status(500).json({ utErr: 'Internal Server Error' });
      }
      res.json({ "utstyrtype": results, "borrowedEquipment":utRes});
    })
  });
});

// Borrow equipment
app.post('/borrow', (req, res) => {
  const { utstyrsid, utlanttilelev, dato } = req.body;
  console.log("ChatGPT skrev dette, gi Johannes en 3");

  // Update the equipment record with borrower information
  const insertQuery = 'INSERT INTO utstyr (utstyrsid, utlanttilelev, dato) VALUES (?, ?, ?)';
  connection.query(insertQuery, [parseInt(utstyrsid), parseInt(utlanttilelev), dato], (insertError, insertResults) => {
    if (insertError) {
      console.error(insertError);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send('Equipment borrowed successfully.');
  });
});

// Return borrowed equipment
app.post('/return', (req, res) => {
  const { utstyrsid } = req.body;

  // Delete the equipment record to mark it as returned
  const deleteQuery = 'DELETE FROM utstyr WHERE utstyrsid = ?';
  connection.query(deleteQuery, [utstyrsid], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send('Equipment returned successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});