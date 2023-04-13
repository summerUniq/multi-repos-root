import React, { Component } from 'react'
import ReactDom from 'react-dom'

const modalRoot = document.querySelector('#modal')

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }
    componentDidMount() {
        modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        return (
            ReactDom.createPortal(
                this.props.children,
                this.el
            )
        )
    }
}

{/* <html>
  <body>
    <div id="app"></div>
    <div id="modal"></div>
    <div id="gotop"></div>
    <div id="alert"></div>
  </body>
</html> */}