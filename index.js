const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(cookieParser())

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/login', (req, res) => {
    res.cookie('name', "Alexis")
    res.send("The cookie was set")
})

app.get('/hello', (req, res) => {
    res.send(`Welcome ${req.cookies.name}!`)
})

