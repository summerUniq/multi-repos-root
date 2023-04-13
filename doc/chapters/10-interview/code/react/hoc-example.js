import React, { Component } from 'react'

function withLoginAuth(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isLogin: false
            }
        }

        async componentDidMount() {
            const isLogin = await getLoginStatus()
            this.setState({
                isLogin
            })
        }

        render() {
            if (this.state.isLogin) {
                return <WrappedComponent {...this.props} />
            }
            return <div>您还没有登录</div>
        }
    }
}