const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.use(bodyParser.json())

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'root'
})

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected.')
})

app.get("/", (req, res) => {
    res.json({
        message: "OK"
    })
})

module.exports = app