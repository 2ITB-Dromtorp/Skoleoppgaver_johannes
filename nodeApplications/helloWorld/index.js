const express = require('express')
const app = express()
const port = 81
var mysql = require('mysql');
var cors = require('cors')

app.use(cors())

var connection = mysql.createConnection({
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

app.use(express.json()); // Add this line to parse JSON data in the request body

app.get('/', (request, response) => {
  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
})

app.post("/updateuser", (request, response) => {
  let { fornavn, etternavn, datamaskinID, hobby, klasse, kjonn, elevId } = request.body;

  let fields = [];
  const values = [];
  if (fornavn) {
    fields.push('Fornavn');
    values.push(fornavn);
  }
  if (etternavn) {
    fields.push('Etternavn');
    values.push(etternavn);
  }
  if (datamaskinID) {
    fields.push('DatamaskinID');
    values.push(datamaskinID);
  }
  if (hobby) {
    fields.push('Hobby');
    values.push(hobby);
  }
  if (klasse) {
    fields.push('Klasse');
    values.push(klasse);
  }
  if (kjonn) {
    fields.push('Kjonn');
    values.push(kjonn);
  }

  let sqlquery = `UPDATE elev SET ${fields.map((f) => f + " = ?").join(", ")} WHERE ElevID = ?`;

  console.log(sqlquery, fields);

  connection.query(sqlquery, [...values, Number(elevId)], function (error, results, fields) {
    if (error) throw error;
    response.send('User created successfully!');
  });
})

// Add the createUser endpoint
app.post("/createuser", (request, response) => {
  let { fornavn, etternavn, datamaskinID, hobby, klasse, kjonn } = request.body;

  let sqlquery = 'INSERT INTO elev (Fornavn, Etternavn, DatamaskinID, Hobby, Klasse, Kjonn) VALUES (?, ?, ?, ?, ?, ?)';

  connection.query(sqlquery, [fornavn, etternavn, datamaskinID, hobby, klasse, kjonn], function (error, results, fields) {
    if (error) throw error;
    response.send('User created successfully!');
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
