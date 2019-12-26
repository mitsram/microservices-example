const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const morgan = require('morgan')

const productsRoute = require('./routes/products_route')

app.use(morgan("dev"))
app.use(bodyParser.json())

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'root'
})


app.use("/", productsRoute)

// db.connect((err) => {
//     if (err) throw err;
//     console.log('MySQL connected.')
// })

// app.get("/", (req, res) => {
//     res.json({
//         message: "OK"
//     })
// })

module.exports = app