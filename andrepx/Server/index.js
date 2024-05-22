const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Konfigurer databaseforbindelsen
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'kantine',
    port: '3306'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Ruter
app.get('/produkter', (req, res) => {
    let sql = 'SELECT * FROM Katinfo';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete('/produkter/:id', (req, res) => {
    let sql = `DELETE FROM Katinfo WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Start serveren
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
