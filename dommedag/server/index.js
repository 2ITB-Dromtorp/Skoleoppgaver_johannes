const express = require('express')
const app = express()
var cors = require("cors")
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

brukere = [
    {
        username: "bigblackoilypig",
        password: "sussy",
    },
    {
        username: "john pork",
        password: "sussy2",
    }
]

app.post("/login", (req, res) =>{

    const credentials = brukere

    const username = req.body.username

    const password = req.body.password

    for (let i = 0; i < credentials.length; i++) {
        if (username == credentials[i].username && password == credentials[i].password) {
            res.send("success")
            return;
        }
    }
    res.status(400).send("FAIL")

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.get('*', (req, res) =>{
    res.sendFile('build')
})