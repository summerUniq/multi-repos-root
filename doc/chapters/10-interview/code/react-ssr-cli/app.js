import react from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Router from './Routers'


const express = require('express')

const app = express()
app.use(express.static('public'));

const content = renderToString((
    <StaticRouter>
        {Router}
    </StaticRouter>
))

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <title>ssr demo</title>
        </head>
        <body>
            ${content}
            <script src="/index.js"></script>
        </body>
    </html>
    `)
})

app.listen(3000, () => console.log('Exampleapp listening on port 3000!'))
