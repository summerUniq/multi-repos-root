import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        logErrorToMyService(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <div>Something went wrong.</div>
        }
        return this.props.children
    }
}

const logErrorToMyService = function (error, errorInfo) {
    // TODO: handle error
}
