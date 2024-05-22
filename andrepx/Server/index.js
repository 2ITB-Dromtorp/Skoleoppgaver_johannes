const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure database connection
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

// Route to fetch all products
app.get('/produkter', (req, res) => {
    let sql = 'SELECT * FROM Katinfo';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Route to decrease stock for a specific product
app.put('/kjop', (req, res) => {
    console.log(req.body);
    let sql = `UPDATE Katinfo SET mengde_igjen = mengde_igjen - 1 WHERE id = ? AND Mengde_igjen > 0`;
    db.query(sql, [req.body.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Route to increase stock for a specific product
app.put('/increaseStock/:id', (req, res) => {
    const { id } = req.params;
    const { amount } = req.body;
    let sql = `UPDATE Katinfo SET mengde_igjen = mengde_igjen + ? WHERE id = ?`;
    db.query(sql, [amount, id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Start the server
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
