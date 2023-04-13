import React, { Component } from 'react'
import { Cousumer } from './context'
const { pathToRegexp } = require("path-to-regexp");

export default class Route extends Component {
    render() {
        return (
            <Cousumer>
                {(state) => {
                    const { path, component: Component } = this.props
                    const pathname = state.location.pathname
                    const reg = pathToRegexp(path, [], { end: false })
                    if (pathname.match(reg)) {
                        return <Component />
                    } else {
                        return null
                    }
                }}
            </Cousumer>
        )
    }
}

