const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({
        message: "OK"
    })
})

module.exports = app