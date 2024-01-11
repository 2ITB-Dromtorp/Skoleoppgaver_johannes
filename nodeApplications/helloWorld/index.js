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

connection.connect(function(err) {

  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


app.get('/', (request, response) => {

  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });
  
})

app.get("/updateuser/:newid/:newfornavn/:newetternavn/:newdataid/:newhobby/:newklasse/:newkjonn", (request, response) => {

  
  let newid = request.params.newid;
  let newfornavn = request.params.newfornavn;
  let newetternavn = request.params.newetternavn;
  let newdataid = request.params.newdataid;
  let newhobby = request.params.newhobby;
  let newklasse = request.params.newklasse;
  let newkjonn = request.params.newkjonn;

  let sqlquery = 'UPDATE elev SET Fornavn = ?, Etternavn = ?, DatamaskinID = ?, Hobby = ?, Klasse = ?, Kjonn = ? WHERE ElevID = ?';

  connection.query(sqlquery, [newfornavn, newetternavn, Number(newdataid), newhobby, Number(newklasse), newkjonn, Number(newid)], function (error, results, fields) {
    if (error) throw error;
    response.send('If This works, suck off some femboys 🥵🥵🥵🥵🥵🥵🥵🥵🥵🥵!');
  });


  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})