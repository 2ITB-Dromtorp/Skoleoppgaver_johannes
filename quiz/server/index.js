const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require("node:path")
const json = require('./answers')
var cors = require('cors')

app.use(cors())
app.use(express.static("build"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/:questionnumber', (req, res) => {
  
  //if questionnumber er støre en 3 velger den en random number fra 0 til 3
  let questionnumber = Math.min(Number(req.params.questionnumber), 3);
  
  
  res.send(JSON.stringify(json.quiz.questions[questionnumber]))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve("./build/index.html"))
})