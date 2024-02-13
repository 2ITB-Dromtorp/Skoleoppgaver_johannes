const express = require('express')
const app = express()
const port = 3000
const json = require('./answers')

app.get('/', (req, res) => {
  res.send('Johannes sin node server')
})

app.get('/:questionnumber', (req, res) => {

  //if questionnumber er støre en 3 velger den en random number fra 0 til 3
  let questionnumber = Math.min(Number(req.params.questionnumber), 3);
     

  res.send(json.quiz.questions[questionnumber])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
