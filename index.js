// console.log("hello ji");

require('dotenv').config()

const express = require("express");
const app = express();
const port = 3050

app.get('/', (req, res) => {
    console.log('Hello World!')
})

app.get('/', (req, res) => {
    console.log('hhhhhtwitter')
})

app.get('/', (req, res) => {
    console.log('logindfggdddd')
})
app.listen(process.env.PORT, () => {
    console.log(`server is started on ${port}`)
})