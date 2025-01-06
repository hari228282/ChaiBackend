const express = require('express') //todo common js module
// import express from 'express'; //todo ES6 Module 2015
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/humesaMangtaHai', (req, res) => {
    res.send("Haa Bhai Hariom kya haal hai yaar mujhe na kuchh paise ki jarurat hai yaar kuchh bhej de na bhai")
})

app.get('/HariBhog', (req, res) => {
    res.send("<h1>Welcome to Hariom Bhojnalaya</h1>")
})

app.get('/anniBabu', (req, res) => {
    res.send("<li>Aur bhai kya haal chal</li>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

