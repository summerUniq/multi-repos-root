import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from '../Routers'

const App = () => {
    return (
        <BrowserRouter>
            {Router}
        </BrowserRouter>
    )
}

ReactDom.hydrate(<App />, document.getElementById('root'))