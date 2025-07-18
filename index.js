const express = require('express') //todo common js module
// import express from 'express'; //todo ES6 Module 2015
require('dotenv').config()
const app = express()
app.use(express.static('dist')); //todo middleware
const port = 4000


const githubProfile = {
    "login": "hari228282",
    "id": 157485736,
    "node_id": "U_kgDOCWMKqA",
    "avatar_url": "https://avatars.githubusercontent.com/u/157485736?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hari228282",
    "html_url": "https://github.com/hari228282",
    "followers_url": "https://api.github.com/users/hari228282/followers",
    "following_url": "https://api.github.com/users/hari228282/following{/other_user}",
    "gists_url": "https://api.github.com/users/hari228282/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hari228282/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hari228282/subscriptions",
    "organizations_url": "https://api.github.com/users/hari228282/orgs",
    "repos_url": "https://api.github.com/users/hari228282/repos",
    "events_url": "https://api.github.com/users/hari228282/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hari228282/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-01-23T11:27:33Z",
    "updated_at": "2024-12-24T11:34:43Z"
}

const jokes = [
    {
        id: 1,
        author: "Hariom",
        jokes: "This is first jokes",
    },
    {
        id: 2,
        author: "Shivam",
        jokes: "This is second jokes",
    },
    {
        id: 3,
        author: "Sudhakar",
        jokes: "This is third jokes"
    },
    {
        id: 4,
        author: "Tusar",
        jokes: "This is fourth jokes"
    }
]


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

app.get("/githubprofile", (req, res) => {
    res.send(githubProfile);
})

app.get("/api/jokesKaPitara", (req, res) => {
    res.send(jokes);
})

app.get("/simran", (req , res) => {
    res.send("Hello this is creative idea")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

