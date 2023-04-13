import React, { Component } from 'react'
import { Provider } from './context.js'

export default class HashRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {
                pathname: window.location.hash.slice(1) || '/'
            }
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            const pathName = window.location.hash
            this.setState({
                location: {
                    pathName: pathName || '/'
                }
            })
        })
    }

    render() {
        const value = {
            location: this.state.location
        }
        return (
            <Provider value={value}>{this.props.children}</Provider>
        )
    }
}
