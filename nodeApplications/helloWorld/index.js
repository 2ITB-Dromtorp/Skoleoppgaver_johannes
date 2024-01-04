const express = require('express')
const app = express()
const port = 81
var mysql      = require('mysql');
var cors = require('cors')

app.use(cors())

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'dromtorp'
});

connection.connect(
  
  function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
}

);
app.get('/', (req, res) => {
connection.query('SELECT * FROM elev', function (error, results, fields) {
  if (error) throw error;
  
  console.log(results)
  res.send(JSON.stringify(results));
});


 
})

app.get("updateuser/:newhobby/:ElevId", (req, res) => {

  let newhobby = req.params.id;
  console.log(newhobby);
  let sqlquery = 'UPDATE elev SET hobby='+newhobby+' WHERE ElevID='+id;

  connection.query(sqlquery, function (error, results, fields) {
    if (error) throw error;
    console.log(results)
    res.send(JSON.stringify(results));
  });
res.send('plz work');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})