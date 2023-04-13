const express = require('express')

const app = express()

app.get('/say', function (req, res) {
    const { callback } = req.query
    res.send(`${callback}('test123')`)
})

app.listen('8080')