const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/humesaMangtaHai', (req, res) => {
    res.send("Haa Bhai Hariom kya haal hia yaar mujhe na kuchh paise ki jarurat hai yaar kuchh bhej de na bhai")
})

app.get('/HariBhog', (req, res) => {
    res.send("<h1>Welcome to Hariom Bhojnalaya</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

